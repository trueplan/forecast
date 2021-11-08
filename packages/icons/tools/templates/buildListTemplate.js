const buildListTemplate = (iconList) => {
  const output = iconList
    .map((icon) => {
      return `export {${icon}} from "./src/${icon}";`;
    })
    .join("\r\n");
  return `${output}`;
};

export { buildListTemplate };
