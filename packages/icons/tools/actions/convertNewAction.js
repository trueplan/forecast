import fs from "fs";
import { convertSvgToReact } from "@twilio-labs/svg-to-react";
import difference from "lodash.difference";
import {
  getInputPath,
  getReactOutputPath,
  normalizeFileName,
  readdirAsync,
  getOutputComponentName,
  maybeHandleError,
} from "../utils.js";
import { SVG_PATH, REACT_PATH, BLOCKLIST_FILES } from "../constants.js";
import { reactIconTemplate } from "../templates/reactIconTemplate.js";
import { writeToFile } from "../writeToFile.js";

// Converts raw svg to react component
function performFileConversion(fileName, outputPath, options) {
  // eslint-disable-next-line no-console
  console.log(`Converting ${fileName}.`);
  // Read the SVG file
  fs.readFile(
    getInputPath(fileName),
    "utf8",
    async (readFileError, fileContents) => {
      maybeHandleError("Invalid fileName provided", readFileError);
      const cleanedFileName = getOutputComponentName(fileName);
      // Convert the SVG into our ideal format
      const generatedComponent = await convertSvgToReact(
        cleanedFileName,
        fileContents,
        options
      );
      writeToFile(outputPath, generatedComponent, {
        errorMessage: `Couldn't write formatted SVG to disk`,
      });
    }
  );
}

async function convertNewAction() {
  let sourceFiles;
  let destinationFiles;
  try {
    sourceFiles = await readdirAsync(SVG_PATH);
    destinationFiles = await readdirAsync(REACT_PATH);
  } catch (error) {
    maybeHandleError("Error occurred while reading directory!", error);
  }
  console.log(sourceFiles);
  console.log(destinationFiles);
  // Normalize file names so we can run a diff
  const normalizedSourceFiles = sourceFiles
    // If it isn't in the source files list, it won't generate
    .filter((fileName) => !BLOCKLIST_FILES.includes(fileName))
    .map(normalizeFileName);
  const normalizedDestinationFiles = destinationFiles.map(normalizeFileName);

  // Run the diff to get a list of files we need to convert to react components
  const newReactSvgs = difference(
    normalizedSourceFiles,
    normalizedDestinationFiles
  );

  // Generate a component for each new SVG in source
  for (const normalizedFileName of newReactSvgs) {
    // Since we normalized the filename, we need to get the original filename again.
    const fileName =
      sourceFiles[normalizedSourceFiles.indexOf(normalizedFileName)];

    performFileConversion(fileName, getReactOutputPath(fileName), {
      useHooks: false,
      template: reactIconTemplate,
    });
  }
}

export { convertNewAction };
