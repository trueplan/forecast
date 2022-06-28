import { theme } from "@trueplan/forecast-theme";
import React from "react";
import type { DropzoneOptions } from "react-dropzone";
import { useDropzone } from "react-dropzone";
import { Box, Text } from "../../..";
import { Button } from "../../button";
import { Spinner } from "../../spinner";
import { StyledContainer } from "./styles";

type DragAndDropFileContainerProps = {
  /** Callback to be called when a file is dropped or selected. */
  onDrop: DropzoneOptions["onDropAccepted"];
  /** Max number of files that a user can select/drop. */
  maxFiles?: number;
  /** The filetype and the supported extensions that are acceptable (i.e. {"text/csv": [".csv"]}). */
  acceptedFileTypes?: Record<string, string[]>;
  /** Text that displays about what a user should do. */
  uploadText: string;
  /** Text that displays when a user tries to drag a file type that is not accepted. */
  rejectText: string;
  /** Illustration to display in the container. */
  Illustration?: JSX.Element;
  /** Illustration to display when a user tries to drag a file type that is not accepted. */
  RejectIllustration?: JSX.Element;
  /** Illustration to display during the loading state. */
  LoadingIllustration?: JSX.Element;
  /** Shows loading state. */
  isLoading?: boolean;
};

/** A container that enables users to drag and drop or select file(s). */
const DragAndDropFileContainer = React.forwardRef<
  HTMLDivElement,
  DragAndDropFileContainerProps
>(
  (
    {
      acceptedFileTypes,
      isLoading,
      maxFiles,
      onDrop,
      Illustration,
      RejectIllustration,
      LoadingIllustration,
      rejectText,
      uploadText,
    },
    ref
  ) => {
    const {
      acceptedFiles,
      getRootProps,
      getInputProps,
      open,
      isDragAccept,
      isDragReject,
    } = useDropzone({
      noClick: true,
      maxFiles,
      accept: acceptedFileTypes,
      onDropAccepted: onDrop,
    });

    const containerState = isDragReject
      ? "rejected"
      : isDragAccept
      ? "accepted"
      : "neutral";

    const canDisplayIllustration =
      (isDragReject && RejectIllustration) || (!isDragReject && Illustration);

    return (
      <StyledContainer state={containerState} {...getRootProps()} ref={ref}>
        <input data-testid="dnd-input" {...getInputProps()} />

        {isLoading ? (
          <>
            {LoadingIllustration && (
              <Box css={{ marginBottom: "$20" }}>{LoadingIllustration}</Box>
            )}
            <Spinner
              label="" // Label would be redundant with text below
              size="large"
            />
            <Box css={{ marginTop: "$30" }}>
              <Text>
                Checking your file{" "}
                {acceptedFiles.map((value) => value.name).join(", ")}
              </Text>
            </Box>
          </>
        ) : (
          <>
            {canDisplayIllustration && (
              <Box css={{ marginBottom: "$20" }}>
                {isDragReject ? RejectIllustration : Illustration}
              </Box>
            )}

            <Box css={{ marginBottom: "$35" }}>
              <Text>{isDragReject ? rejectText : uploadText}</Text>
            </Box>

            <Button
              variant="secondary"
              onClick={open}
              style={
                isDragAccept
                  ? {
                      backgroundColor: `${theme.colors.gray20}`,
                      transition: "none",
                    }
                  : undefined
              }
            >
              Choose File
            </Button>
          </>
        )}
      </StyledContainer>
    );
  }
);

DragAndDropFileContainer.displayName = "DragAndDropFileContainer";

export { DragAndDropFileContainer };
