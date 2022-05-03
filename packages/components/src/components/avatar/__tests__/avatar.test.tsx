import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Avatar } from "../src";
import { getInitialsFromName, getAvatarColor } from "../src/utils";

describe("Avatar", () => {
  describe("Utils", () => {
    describe("getInitialsFromName", () => {
      it("should return first and last initial from a name", () => {
        expect(getInitialsFromName("Jimmy Tang")).toEqual("JT");
        expect(getInitialsFromName("Rich")).toEqual("R");
        expect(getInitialsFromName("Rich Ngozi Bachman")).toEqual("RB");
        expect(getInitialsFromName("Super Long Name Example")).toEqual("SE");
      });
    });

    describe("getAvatarColor", () => {
      it("should return a color name from a person's name", () => {
        expect(getAvatarColor("Jimmy Tang")).toEqual("sky");
        expect(getAvatarColor("Rich")).toEqual("yellow");
        expect(getAvatarColor("Rich Ngozi Bachman")).toEqual("yellow");
        expect(getAvatarColor("Super Long Name Example")).toEqual("lilac");
      });
    });
  });

  describe("Render", () => {
    it("should render an avatar with initials", () => {
      render(<Avatar name="Rich Bachman" data-testid="avatar" />);
      const renderedAvatar = screen.getByTestId("avatar");
      expect(
        // eslint-disable-next-line testing-library/no-node-access
        renderedAvatar.querySelector("abbr")?.getAttribute("title")
      ).toEqual("Rich Bachman");
    });

    it("should render an avatar with an image", () => {
      render(
        <Avatar
          name="Nate Schulte"
          src="/avatars/nate.png"
          data-testid="avatar"
        />
      );
      const renderedAvatar = screen.getByRole("img");
      expect(renderedAvatar.getAttribute("src")).toEqual("/avatars/nate.png");
      expect(renderedAvatar.getAttribute("alt")).toEqual("Nate Schulte");
      expect(renderedAvatar.getAttribute("title")).toEqual("Nate Schulte");
    });
  });
});
