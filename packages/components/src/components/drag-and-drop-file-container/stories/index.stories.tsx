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
    <Box css={{ maxWidth: "700px", height: "400px", width: "100%" }}>
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

      <Box css={{ marginTop: "20px" }}>
        <Text display="block">Accepted Files:</Text>
      </Box>
      {files.length > 0 ? (
        <ul>
          {files.map((file) => (
            <Box as="li" key={file.name} css={{ marginLeft: "$35" }}>
              {file.name} - {file.size} bytes
            </Box>
          ))}
        </ul>
      ) : (
        "No accepted files"
      )}
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
