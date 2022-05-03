import type { AvatarColors } from ".";

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

const avatarColorOptions: AvatarColors[] = [
  "blue",
  "green",
  "lilac",
  "sky",
  "yellow",
  "red",
  "royal",
];

/**
 * Generates an avatar background color using the length of a person's full name
 * @param name: person's full name
 * @returns AvatarColors
 *
 * @example
 * getAvatarColor("Pam Beesly")
 * // returns "sky"
 */

export const getAvatarColor = (name: string): string =>
  avatarColorOptions[name.length % avatarColorOptions.length];
