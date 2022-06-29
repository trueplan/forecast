import * as React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import type { AvatarColors } from "../src";
import { Avatar } from "../src";
import { Box } from "../../../primitives/box";
import { Stack } from "../../../layout/stack";
import { getAvatarColor } from "../src/utils";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Avatar",
  component: Avatar,
  // Sets the diffThreshold for all stories
  chromatic: { diffThreshold: 0.3 },
} as ComponentMeta<typeof Avatar>;

export const Initials: ComponentStory<typeof Avatar> = () => {
  return (
    <>
      <Box css={{ marginBottom: "10px" }}>
        <Stack direction="horizontal" spacing="$25">
          <Avatar name="Nate Schulte" size="small" />
          <Avatar name="Jimmy Tang" />
          <Avatar name="Tyler Chapman" size="large" />
        </Stack>
      </Box>
      <Box css={{ marginBottom: "10px" }}>
        <Stack direction="horizontal" spacing="$25">
          <Avatar name="Nate Schulte" color="blue" size="small" />
          <Avatar name="Jimmy Tang" color="blue" />
          <Avatar name="Tyler Chapman" color="blue" size="large" />
        </Stack>
      </Box>
      <Box css={{ marginBottom: "10px" }}>
        <Stack direction="horizontal" spacing="$25">
          <Avatar name="Nate Schulte" color="green" size="small" />
          <Avatar name="Jimmy Tang" color="green" />
          <Avatar name="Tyler Chapman" color="green" size="large" />
        </Stack>
      </Box>
      <Box css={{ marginBottom: "10px" }}>
        <Stack direction="horizontal" spacing="$25">
          <Avatar name="Nate Schulte" color="sky" size="small" />
          <Avatar name="Jimmy Tang" color="sky" />
          <Avatar name="Tyler Chapman" color="sky" size="large" />
        </Stack>
      </Box>
      <Box css={{ marginBottom: "10px" }}>
        <Stack direction="horizontal" spacing="$25">
          <Avatar name="Nate Schulte" color="yellow" size="small" />
          <Avatar name="Jimmy Tang" color="yellow" />
          <Avatar name="Tyler Chapman" color="yellow" size="large" />
        </Stack>
      </Box>
      <Box css={{ marginBottom: "10px" }}>
        <Stack direction="horizontal" spacing="$25">
          <Avatar name="Nate Schulte" color="red" size="small" />
          <Avatar name="Jimmy Tang" color="red" />
          <Avatar name="Tyler Chapman" color="red" size="large" />
        </Stack>
      </Box>
      <Box css={{ marginBottom: "10px" }}>
        <Stack direction="horizontal" spacing="$25">
          <Avatar name="Nate Schulte" color="royal" size="small" />
          <Avatar name="Jimmy Tang" color="royal" />
          <Avatar name="Tyler Chapman" color="royal" size="large" />
        </Stack>
      </Box>
    </>
  );
};
Initials.parameters = {
  docs: {
    storyDescription:
      "Use the initials Avatar when you only have a name to represent the entity.",
  },
};

export const Image: ComponentStory<typeof Avatar> = () => {
  return (
    <>
      <Box css={{ marginBottom: "10px" }}>
        <Stack direction="horizontal" spacing="$25">
          <Avatar name="Nate Schulte" size="small" src="./avatars/nate.png" />
          <Avatar name="Jimmy Tang" src="./avatars/jimmy.png" />
          <Avatar name="Tyler Chapman" size="large" src="./avatars/tyler.png" />
        </Stack>
      </Box>
      <Box css={{ marginBottom: "10px" }}>
        <Stack direction="horizontal" spacing="$25">
          <Avatar
            name="Nate Schulte"
            color="blue"
            size="small"
            src="./avatars/nate.png"
          />
          <Avatar name="Jimmy Tang" color="blue" src="./avatars/jimmy.png" />
          <Avatar
            name="Tyler Chapman"
            color="blue"
            size="large"
            src="./avatars/tyler.png"
          />
        </Stack>
      </Box>
      <Box css={{ marginBottom: "10px" }}>
        <Stack direction="horizontal" spacing="$25">
          <Avatar
            name="Nate Schulte"
            color="green"
            size="small"
            src="./avatars/nate.png"
          />
          <Avatar name="Jimmy Tang" color="green" src="./avatars/jimmy.png" />
          <Avatar
            name="Tyler Chapman"
            color="green"
            size="large"
            src="./avatars/tyler.png"
          />
        </Stack>
      </Box>
      <Box css={{ marginBottom: "10px" }}>
        <Stack direction="horizontal" spacing="$25">
          <Avatar
            name="Nate Schulte"
            color="sky"
            size="small"
            src="./avatars/nate.png"
          />
          <Avatar name="Jimmy Tang" color="sky" src="./avatars/jimmy.png" />
          <Avatar
            name="Tyler Chapman"
            color="sky"
            size="large"
            src="./avatars/tyler.png"
          />
        </Stack>
      </Box>
      <Box css={{ marginBottom: "10px" }}>
        <Stack direction="horizontal" spacing="$25">
          <Avatar
            name="Nate Schulte"
            color="yellow"
            size="small"
            src="./avatars/nate.png"
          />
          <Avatar name="Jimmy Tang" color="yellow" src="./avatars/jimmy.png" />
          <Avatar
            name="Tyler Chapman"
            color="yellow"
            size="large"
            src="./avatars/tyler.png"
          />
        </Stack>
      </Box>
      <Box css={{ marginBottom: "10px" }}>
        <Stack direction="horizontal" spacing="$25">
          <Avatar
            name="Nate Schulte"
            color="red"
            size="small"
            src="./avatars/nate.png"
          />
          <Avatar name="Jimmy Tang" color="red" src="./avatars/jimmy.png" />
          <Avatar
            name="Tyler Chapman"
            color="red"
            size="large"
            src="./avatars/tyler.png"
          />
        </Stack>
      </Box>
      <Box css={{ marginBottom: "10px" }}>
        <Stack direction="horizontal" spacing="$25">
          <Avatar
            name="Nate Schulte"
            color="royal"
            size="small"
            src="./avatars/nate.png"
          />
          <Avatar name="Jimmy Tang" color="royal" src="./avatars/jimmy.png" />
          <Avatar
            name="Tyler Chapman"
            color="royal"
            size="large"
            src="./avatars/tyler.png"
          />
        </Stack>
      </Box>
    </>
  );
};
Image.parameters = {
  chromatic: { delay: 3000 },
  docs: {
    storyDescription:
      "Use the image Avatar version when you have an image to represent the entity. Make sure include the `name` prop as well.",
  },
};

export const WithName: ComponentStory<typeof Avatar> = () => {
  return (
    <Stack direction="vertical" spacing="$40">
      <Avatar
        name="Nate Schulte"
        size="small"
        showName
        title="Founding Designer"
      />
      <Avatar
        name="Nate Schulte"
        size="medium"
        showName
        title="Founding Designer"
      />
      <Avatar
        name="Nate Schulte"
        size="large"
        showName
        title="Founding Designer"
      />
    </Stack>
  );
};
WithName.parameters = {
  docs: {
    storyDescription:
      "The name and title of the entity can be shown to the right of the Avatar with the `showName` and `title` props.",
  },
};

export const WithNameAndRandomBackgroundColor: ComponentStory<
  typeof Avatar
> = () => {
  return (
    <Stack direction="vertical" spacing="$40">
      <Avatar
        name="Nate Schulte"
        // eslint-disable-next-line sonarjs/no-duplicate-string
        color={getAvatarColor("Nate Schulte") as AvatarColors}
        size="small"
        showName
        title="Founding Designer"
      />
      <Avatar
        name="Nate Schulte"
        color={getAvatarColor("Nate Schulte") as AvatarColors}
        size="medium"
        showName
        title="Founding Designer"
      />
      <Avatar
        name="Nate Schulte"
        color={getAvatarColor("Nate Schulte") as AvatarColors}
        size="large"
        showName
        title="Founding Designer"
      />
    </Stack>
  );
};
