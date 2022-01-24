import * as React from "react";
import { useUID } from "react-uid";
import { DocumentListIcon } from "@trueplan/forecast-icons";
import { Button } from "../../button";
import { Box } from "../../../primitives/box";
import { IconContainer } from "../../icon-container";
import { Paragraph } from "../../paragraph";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogHeading,
  AlertDialogClose,
  AlertDialogFooter,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Alert Dialog",
  component: AlertDialog,
  chromatic: { pauseAnimationAtEnd: true },
};

export const Default = (): React.ReactNode => {
  const descriptionId = useUID();
  return (
    <Box css={{ height: "1000px", width: "1350px" }}>
      <AlertDialog defaultOpen>
        <AlertDialogContent aria-describedby={descriptionId}>
          <AlertDialogHeader>
            <AlertDialogHeading>
              Are you sure you want to do this?
            </AlertDialogHeading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Box css={{ textAlign: "center" }}>
              <Paragraph id={descriptionId} marginBottom="space0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et imperdiet erat. Mauris tempus ligula eros, sed elementum leo.
              </Paragraph>
            </Box>
          </AlertDialogBody>
          <AlertDialogFooter>
            <AlertDialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </AlertDialogClose>
            <Button variant="primary">Submit</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};

Default.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const HeaderIcon = (): React.ReactNode => {
  const descriptionId = useUID();
  return (
    <Box css={{ height: "1000px", width: "1350px" }}>
      <AlertDialog defaultOpen>
        <AlertDialogContent aria-describedby={descriptionId}>
          <AlertDialogHeader>
            <IconContainer color="yellow" size="large">
              <DocumentListIcon decorative size="medium" />
            </IconContainer>
            <AlertDialogHeading>
              Are you sure you want to do this?
            </AlertDialogHeading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Box css={{ textAlign: "center" }}>
              <Paragraph id={descriptionId} marginBottom="space0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et imperdiet erat. Mauris tempus ligula eros, sed elementum leo.
              </Paragraph>
            </Box>
          </AlertDialogBody>
          <AlertDialogFooter>
            <AlertDialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </AlertDialogClose>
            <Button variant="primary">Submit</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};

HeaderIcon.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const SingleAction = (): React.ReactNode => {
  const descriptionId = useUID();
  return (
    <Box css={{ height: "1000px", width: "1350px" }}>
      <AlertDialog defaultOpen>
        <AlertDialogContent aria-describedby={descriptionId}>
          <AlertDialogHeader>
            <AlertDialogHeading>
              Are you sure you want to do this?
            </AlertDialogHeading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Box css={{ textAlign: "center" }}>
              <Paragraph id={descriptionId} marginBottom="space0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et imperdiet erat. Mauris tempus ligula eros, sed elementum leo.
              </Paragraph>
            </Box>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="primary">Submit</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};

SingleAction.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const FullWidthAction = (): React.ReactNode => {
  const descriptionId = useUID();
  return (
    <Box css={{ height: "1000px", width: "1350px" }}>
      <AlertDialog defaultOpen>
        <AlertDialogContent aria-describedby={descriptionId}>
          <AlertDialogHeader>
            <AlertDialogHeading>
              Are you sure you want to do this?
            </AlertDialogHeading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Box css={{ textAlign: "center" }}>
              <Paragraph id={descriptionId} marginBottom="space0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et imperdiet erat. Mauris tempus ligula eros, sed elementum leo.
              </Paragraph>
            </Box>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="primary" fullWidth>
              Submit
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};

FullWidthAction.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const HalfWidthActions = (): React.ReactNode => {
  const descriptionId = useUID();
  return (
    <Box css={{ height: "1000px", width: "1350px" }}>
      <AlertDialog defaultOpen>
        <AlertDialogContent aria-describedby={descriptionId}>
          <AlertDialogHeader>
            <AlertDialogHeading>
              Are you sure you want to do this?
            </AlertDialogHeading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Box css={{ textAlign: "center" }}>
              <Paragraph id={descriptionId} marginBottom="space0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et imperdiet erat. Mauris tempus ligula eros, sed elementum leo.
              </Paragraph>
            </Box>
          </AlertDialogBody>
          <AlertDialogFooter>
            <AlertDialogClose asChild>
              <Button variant="secondary" fullWidth>
                Cancel
              </Button>
            </AlertDialogClose>
            <Button variant="primary" fullWidth>
              Submit
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};

HalfWidthActions.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const OpenFromButton = (): React.ReactNode => {
  const [open, setOpen] = React.useState(false);
  const descriptionId = useUID();
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Alert Dialog
      </Button>
      <AlertDialog open={open}>
        <AlertDialogContent aria-describedby={descriptionId}>
          <AlertDialogHeader>
            <AlertDialogHeading>
              Are you sure you want to do this?
            </AlertDialogHeading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Box css={{ textAlign: "center" }}>
              <Paragraph id={descriptionId} marginBottom="space0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et imperdiet erat. Mauris tempus ligula eros, sed elementum leo.
              </Paragraph>
            </Box>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

OpenFromButton.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const OverflowContent = (): React.ReactNode => {
  const descriptionId = useUID();
  return (
    <Box css={{ height: "1000px", width: "1350px" }}>
      <AlertDialog defaultOpen>
        <AlertDialogContent aria-describedby={descriptionId}>
          <AlertDialogHeader>
            <AlertDialogHeading>
              Are you sure you want to do this?
            </AlertDialogHeading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Box css={{ textAlign: "center" }}>
              <Paragraph id={descriptionId}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et imperdiet erat. Mauris tempus ligula eros, sed elementum leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et imperdiet erat. Mauris tempus ligula eros, sed elementum leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et imperdiet erat. Mauris tempus ligula eros, sed elementum leo.
              </Paragraph>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et imperdiet erat. Mauris tempus ligula eros, sed elementum leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et imperdiet erat. Mauris tempus ligula eros, sed elementum leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et imperdiet erat. Mauris tempus ligula eros, sed elementum leo.
              </Paragraph>
              <Paragraph marginBottom="space0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et imperdiet erat. Mauris tempus ligula eros, sed elementum leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et imperdiet erat. Mauris tempus ligula eros, sed elementum leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et imperdiet erat. Mauris tempus ligula eros, sed elementum leo.
              </Paragraph>
            </Box>
          </AlertDialogBody>
          <AlertDialogFooter>
            <AlertDialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </AlertDialogClose>
            <Button variant="primary">Submit</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};

OverflowContent.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};
