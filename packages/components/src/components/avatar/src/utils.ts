export const getInitialsFromName = (fullname: string): string => {
  return fullname
    .split(" ")
    .map((name) => name.slice(0, 1))
    .reduce((previous, currentInitial, index, initials) => {
      if (index === 0 || index === initials.length - 1) {
        return `${previous}${currentInitial}`;
      }
      return previous;
    }, "");
};
