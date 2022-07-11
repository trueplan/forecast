const esbuild = require("esbuild");
const { EsmExternalsPlugin } = require("../utils/EsmExternals");

/**
 * ESBuild handles externals literally so that `@trueplan/forecast-theme` won't
 * get bundled, but `@trueplan/forecast-theme/dist/themes/default` will.
 * This function adds a wildcard lookup for all externals.
 *
 * Note: adding `/*` breaks external-ing the normal `@trueplan/forecast-theme` because
 * of the forward slash, and simply adding `*` to the end seems error prone, which
 * is why we duplicate to add `/*`.
 *
 * @param {JSON} peerDeps - PeerDependencies from package.json.
 * @returns {Array<string>} Externals.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getWildcardExternalPeers = (peerDeps = {}) => {
  const externalDeps = Object.keys(peerDeps);
  const wildcardedExternalDeps = externalDeps.map((dep) => `${dep}/*`);
  return [...externalDeps, ...wildcardedExternalDeps];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
/**
 *
 * @param {JSON} packageJson -  package.json file from package.
 */
async function build(packageJson) {
  // Entry and Output file paths
  const entryPoints = [packageJson.source];
  const outFileCJS = packageJson.main;
  const outFileESM = packageJson.module;
  // Things we don't want to bundle
  const external = getWildcardExternalPeers(packageJson.peerDependencies);

  // ESbuild config
  const config = {
    color: true,
    entryPoints,
    /**
     * From docs:
     * The main fields setting is set to main,module. This means tree shaking
     * will likely not happen for packages that provide both module and main
     * since tree shaking works with ECMAScript modules but not with CommonJS
     * modules.
     * Unfortunately some packages incorrectly treat module as meaning
     * "browser code" instead of "ECMAScript module code" so this default
     * behavior is required for compatibility. You can manually configure the
     * main fields setting to module,main if you want to enable tree shaking
     * and know it is safe to do so.
     */
    mainFields: ["module", "source", "main"],
    // Fixes issues related to SSR (website builds)
    platform: "node",
    bundle: true,
    // Sets the target environment so the code is changed into a format that
    // works  with node12 and the listed browsers
    target: ["chrome66", "firefox58", "safari11", "edge79", "node12.19.0"],
    define: {
      "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
    },
    external,
  };

  // Minified
  await esbuild
    .build({
      ...config,
      minifyWhitespace: true,
      minifyIdentifiers: false,
      minifySyntax: true,
      format: "cjs",
      outfile: outFileCJS,
    })
    .catch(() => {
      // eslint-disable-next-line unicorn/no-process-exit
      return process.exit(1);
    });

  await esbuild
    .build({
      ...config,
      minifyWhitespace: true,
      minifyIdentifiers: false,
      minifySyntax: true,
      format: "esm",
      outfile: outFileESM,
      // Needed to fix a bug with replacing require with import statements https://github.com/evanw/esbuild/issues/566
      plugins: [EsmExternalsPlugin({ externals: external })],
    })
    .catch(() => {
      // eslint-disable-next-line unicorn/no-process-exit
      return process.exit(1);
    });

  // Debug
  await esbuild
    .build({
      ...config,
      format: "cjs",
      outfile: outFileCJS.replace(".js", ".debug.js"),
    })
    .catch(() => {
      // eslint-disable-next-line unicorn/no-process-exit
      return process.exit(1);
    });

  await esbuild
    .build({
      ...config,
      format: "esm",
      outfile: outFileESM.replace(".es.js", ".debug.es.js"),
      // Needed to fix a bug with replacing require with import statements https://github.com/evanw/esbuild/issues/566
      plugins: [EsmExternalsPlugin({ externals: external })],
    })
    .catch(() => {
      // eslint-disable-next-line unicorn/no-process-exit
      return process.exit(1);
    });
}

module.exports = { build };
