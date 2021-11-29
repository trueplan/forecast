// eslint-disable-next-line @typescript-eslint/no-explicit-any
const importAll = (item: any): Record<string, any> => {
  return item.keys().map((fileName) => ({
    module: item(fileName),
  }));
};

export const posts = importAll(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore using a build-in webpack function to get all files in the directory.
  // eslint-disable-next-line unicorn/prefer-module
  require.context("../pages/components/", true, /\.mdx$/)
);
