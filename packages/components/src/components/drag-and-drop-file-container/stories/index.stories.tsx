import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { Box, Text } from "../../..";
import { DragAndDropFileContainer } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Drag and Drop File Container",
  component: DragAndDropFileContainer,
} as ComponentMeta<typeof DragAndDropFileContainer>;

const Template: ComponentStory<typeof DragAndDropFileContainer> = ({
  uploadText = "Drag and drop your CSV file here or choose from your files",
  acceptedFileTypes = {
    "text/csv": [".csv"],
  },
  rejectText = "Wrong file type. Please import a CSV only.",
  onDrop,
  ...args
}) => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Box>
      <DragAndDropFileContainer
        uploadText={uploadText}
        acceptedFileTypes={acceptedFileTypes}
        rejectText={rejectText}
        onDrop={(acceptedFiles, event) => {
          setFiles(acceptedFiles);
          onDrop && onDrop(acceptedFiles, event);
        }}
        {...args}
      />

      <Text display="block" css={{ marginTop: "20px" }}>
        Accepted Files:
      </Text>
      <ul>
        {files.map((file) => (
          <li key={file.name}>
            {file.name} - {file.size} bytes
          </li>
        ))}
      </ul>
    </Box>
  );
};

export const Default = Template.bind({});

export const WithIllustrations = Template.bind({});
WithIllustrations.args = {
  Illustration: (
    <img
      src="https://www.placecage.com/130/100"
      alt="Nicholas Cage"
      className="chromatic-ignore"
    />
  ),
  RejectIllustration: (
    <img
      src="https://www.placecage.com/c/130/100"
      alt="Nicholas Cage"
      className="chromatic-ignore"
    />
  ),
  LoadingIllustration: (
    <img
      src="https://www.placecage.com/gif/130/100"
      alt="Nicholas Cage"
      className="chromatic-ignore"
    />
  ),
};
WithIllustrations.parameters = {
  docs: {
    storyDescription:
      "Components for illustrations can be passed in to the Illustration and RejectIllustration props to be shown in the container.",
  },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const LoadingWithIllustration = Template.bind({});
LoadingWithIllustration.args = {
  isLoading: true,
  LoadingIllustration: (
    <img
      src="https://www.placecage.com/gif/130/100"
      alt="Nicholas Cage"
      className="chromatic-ignore"
    />
  ),
};
