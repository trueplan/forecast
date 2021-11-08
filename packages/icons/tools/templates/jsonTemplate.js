const jsonTemplate = (iconList) => {
  return JSON.stringify(
    iconList.map((iconName) => ({
      name: iconName,
      svg: `/svg/${iconName}.svg`,
    }))
  );
};

export { jsonTemplate };
