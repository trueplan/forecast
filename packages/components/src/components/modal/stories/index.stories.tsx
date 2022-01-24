import * as React from "react";
import { useUID } from "react-uid";
import { Box } from "../../../primitives/box";
import { Button } from "../../button";
import { Heading } from "../../heading";
import { Paragraph } from "../../paragraph";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalHeading,
  ModalHeaderActions,
  ModalTrigger,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Modal",
  component: Modal,
};

export const Default = (): React.ReactNode => {
  const descriptionId = useUID();
  return (
    <Box css={{ height: "1000px", width: "1350px" }}>
      <Modal defaultOpen>
        <ModalTrigger asChild>
          <Button variant="primary">Open Modal</Button>
        </ModalTrigger>
        <ModalContent aria-describedby={descriptionId}>
          <ModalHeader>
            <ModalHeading subTitle="This is the subtitle">
              This is the Title
            </ModalHeading>
            <ModalHeaderActions />
          </ModalHeader>
          <ModalBody>
            <Heading as="h3" size="heading30">
              Modal Body Heading
            </Heading>
            <Paragraph id={descriptionId}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum dignissim sit amet quam nec vehicula. Nullam lectus
              leo, mattis ut erat quis, fringilla consectetur magna. Praesent
              nisi massa, faucibus et aliquet quis, porttitor ultricies augue.
              Nulla in tincidunt libero. Donec pellentesque fermentum sagittis.
              Suspendisse eu mauris quis diam faucibus hendrerit eget et lectus.
              Nunc quis ipsum id neque ultricies lacinia.
            </Paragraph>
          </ModalBody>
          <ModalFooter helpText="This is the help text.">
            <ModalTrigger asChild>
              <Button variant="primary" size="small">
                Click
              </Button>
            </ModalTrigger>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

Default.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const Wide = (): React.ReactNode => {
  const descriptionId = useUID();
  return (
    <Box css={{ height: "1000px", width: "1350px" }}>
      <Modal defaultOpen>
        <ModalTrigger asChild>
          <Button variant="primary">Open Modal</Button>
        </ModalTrigger>
        <ModalContent aria-describedby={descriptionId} size="wide">
          <ModalHeader>
            <ModalHeading subTitle="This is the subtitle">
              This is the Title
            </ModalHeading>
            <ModalHeaderActions>
              <Button variant="secondary" size="small">
                Click
              </Button>
            </ModalHeaderActions>
          </ModalHeader>
          <ModalBody>
            <Heading as="h3" size="heading30">
              Modal Body Heading
            </Heading>
            <Paragraph id={descriptionId}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum dignissim sit amet quam nec vehicula. Nullam lectus
              leo, mattis ut erat quis, fringilla consectetur magna. Praesent
              nisi massa, faucibus et aliquet quis, porttitor ultricies augue.
              Nulla in tincidunt libero. Donec pellentesque fermentum sagittis.
              Suspendisse eu mauris quis diam faucibus hendrerit eget et lectus.
              Nunc quis ipsum id neque ultricies lacinia.
            </Paragraph>
          </ModalBody>
          <ModalFooter helpText="This is the help text.">
            <ModalTrigger asChild>
              <Button variant="primary" size="small">
                Click
              </Button>
            </ModalTrigger>
            <ModalTrigger asChild>
              <Button variant="danger" size="small">
                Click
              </Button>
            </ModalTrigger>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

Wide.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const NoPaddingOnBody = (): React.ReactNode => {
  const descriptionId = useUID();
  return (
    <Box css={{ height: "1000px", width: "1350px" }}>
      <Modal defaultOpen>
        <ModalTrigger asChild>
          <Button variant="primary">Open Modal</Button>
        </ModalTrigger>
        <ModalContent aria-describedby={descriptionId}>
          <ModalHeader>
            <ModalHeading subTitle="This is the subtitle">
              This is the Title
            </ModalHeading>
            <ModalHeaderActions />
          </ModalHeader>
          <ModalBody padding="space0">
            <Heading as="h3" size="heading30">
              Modal Body Heading
            </Heading>
            <Paragraph id={descriptionId}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum dignissim sit amet quam nec vehicula. Nullam lectus
              leo, mattis ut erat quis, fringilla consectetur magna. Praesent
              nisi massa, faucibus et aliquet quis, porttitor ultricies augue.
              Nulla in tincidunt libero. Donec pellentesque fermentum sagittis.
              Suspendisse eu mauris quis diam faucibus hendrerit eget et lectus.
              Nunc quis ipsum id neque ultricies lacinia.
            </Paragraph>
          </ModalBody>
          <ModalFooter helpText="This is the help text.">
            <ModalTrigger asChild>
              <Button variant="primary" size="small">
                Click
              </Button>
            </ModalTrigger>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

NoPaddingOnBody.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const OverflowBodyContent = (): React.ReactNode => {
  const descriptionId = useUID();
  return (
    <Box css={{ height: "1000px", width: "1350px" }}>
      <Modal defaultOpen>
        <ModalTrigger asChild>
          <Button variant="primary">Open Modal</Button>
        </ModalTrigger>
        <ModalContent aria-describedby={descriptionId}>
          <ModalHeader>
            <ModalHeading subTitle="This is the subtitle">
              This is the Title
            </ModalHeading>
            <ModalHeaderActions>
              <Button variant="secondary" size="small">
                Click
              </Button>
            </ModalHeaderActions>
          </ModalHeader>
          <ModalBody>
            <Heading as="h3" size="heading30">
              Modal Body Heading
            </Heading>
            <Paragraph id={descriptionId}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum dignissim sit amet quam nec vehicula. Nullam lectus
              leo, mattis ut erat quis, fringilla consectetur magna. Praesent
              nisi massa, faucibus et aliquet quis, porttitor ultricies augue.
              Nulla in tincidunt libero. Donec pellentesque fermentum sagittis.
              Suspendisse eu mauris quis diam faucibus hendrerit eget et lectus.
              Nunc quis ipsum id neque ultricies lacinia. Phasellus a lacus ac
              metus hendrerit luctus. Praesent maximus condimentum mattis. Sed
              neque dolor, laoreet a ante ut, ornare venenatis est. Sed sagittis
              libero nec ipsum tincidunt fringilla. Suspendisse vitae lectus
              eget libero scelerisque facilisis fringilla non urna. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Cras ullamcorper leo ac enim sagittis, ut
              pellentesque magna pellentesque. Phasellus in metus efficitur ex
              finibus auctor vel semper erat. Vivamus laoreet porta magna, ut
              lacinia ante tincidunt ac.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum dignissim sit amet quam nec vehicula. Nullam lectus
              leo, mattis ut erat quis, fringilla consectetur magna. Praesent
              nisi massa, faucibus et aliquet quis, porttitor ultricies augue.
              Nulla in tincidunt libero. Donec pellentesque fermentum sagittis.
              Suspendisse eu mauris quis diam faucibus hendrerit eget et lectus.
              Nunc quis ipsum id neque ultricies lacinia. Phasellus a lacus ac
              metus hendrerit luctus. Praesent maximus condimentum mattis. Sed
              neque dolor, laoreet a ante ut, ornare venenatis est. Sed sagittis
              libero nec ipsum tincidunt fringilla. Suspendisse vitae lectus
              eget libero scelerisque facilisis fringilla non urna. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Cras ullamcorper leo ac enim sagittis, ut
              pellentesque magna pellentesque. Phasellus in metus efficitur ex
              finibus auctor vel semper erat. Vivamus laoreet porta magna, ut
              lacinia ante tincidunt ac.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum dignissim sit amet quam nec vehicula. Nullam lectus
              leo, mattis ut erat quis, fringilla consectetur magna. Praesent
              nisi massa, faucibus et aliquet quis, porttitor ultricies augue.
              Nulla in tincidunt libero. Donec pellentesque fermentum sagittis.
              Suspendisse eu mauris quis diam faucibus hendrerit eget et lectus.
              Nunc quis ipsum id neque ultricies lacinia. Phasellus a lacus ac
              metus hendrerit luctus. Praesent maximus condimentum mattis. Sed
              neque dolor, laoreet a ante ut, ornare venenatis est. Sed sagittis
              libero nec ipsum tincidunt fringilla. Suspendisse vitae lectus
              eget libero scelerisque facilisis fringilla non urna. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Cras ullamcorper leo ac enim sagittis, ut
              pellentesque magna pellentesque. Phasellus in metus efficitur ex
              finibus auctor vel semper erat. Vivamus laoreet porta magna, ut
              lacinia ante tincidunt ac.
            </Paragraph>
          </ModalBody>
          <ModalFooter helpText="This is the help text.">
            <ModalTrigger asChild>
              <Button variant="primary" size="small">
                Click
              </Button>
            </ModalTrigger>
            <ModalTrigger asChild>
              <Button variant="danger" size="small">
                Click
              </Button>
            </ModalTrigger>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

OverflowBodyContent.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const ReallyLongHeader = (): React.ReactNode => {
  const descriptionId = useUID();
  return (
    <Box css={{ height: "1000px", width: "1350px" }}>
      <Modal defaultOpen>
        <ModalTrigger asChild>
          <Button variant="primary">Open Modal</Button>
        </ModalTrigger>
        <ModalContent aria-describedby={descriptionId}>
          <ModalHeader>
            <ModalHeading>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              dapibus, tellus ac cursus commodo, tortor
            </ModalHeading>
            <ModalHeaderActions />
          </ModalHeader>
          <ModalBody>
            <Heading as="h3" size="heading30">
              Modal Body Heading
            </Heading>
            <Paragraph id={descriptionId}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum dignissim sit amet quam nec vehicula. Nullam lectus
              leo, mattis ut erat quis, fringilla consectetur magna. Praesent
              nisi massa, faucibus et aliquet quis, porttitor ultricies augue.
              Nulla in tincidunt libero. Donec pellentesque fermentum sagittis.
              Suspendisse eu mauris quis diam faucibus hendrerit eget et lectus.
              Nunc quis ipsum id neque ultricies lacinia.
            </Paragraph>
          </ModalBody>
          <ModalFooter>
            <ModalTrigger asChild>
              <Button variant="primary" size="small">
                Click
              </Button>
            </ModalTrigger>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

ReallyLongHeader.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const MultipleHeaderActions = (): React.ReactNode => {
  const descriptionId = useUID();
  return (
    <Box css={{ height: "1000px", width: "1350px" }}>
      <Modal defaultOpen>
        <ModalTrigger asChild>
          <Button variant="primary">Open Modal</Button>
        </ModalTrigger>
        <ModalContent aria-describedby={descriptionId}>
          <ModalHeader>
            <ModalHeading>This is the Title</ModalHeading>
            <ModalHeaderActions>
              <Button variant="secondary" size="small">
                Click
              </Button>
            </ModalHeaderActions>
          </ModalHeader>
          <ModalBody>
            <Heading as="h3" size="heading30">
              Modal Body Heading
            </Heading>
            <Paragraph id={descriptionId}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum dignissim sit amet quam nec vehicula. Nullam lectus
              leo, mattis ut erat quis, fringilla consectetur magna. Praesent
              nisi massa, faucibus et aliquet quis, porttitor ultricies augue.
              Nulla in tincidunt libero. Donec pellentesque fermentum sagittis.
              Suspendisse eu mauris quis diam faucibus hendrerit eget et lectus.
              Nunc quis ipsum id neque ultricies lacinia.
            </Paragraph>
          </ModalBody>
          <ModalFooter helpText="This is the help text.">
            <ModalTrigger asChild>
              <Button variant="primary" size="small">
                Click
              </Button>
            </ModalTrigger>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

MultipleHeaderActions.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const MultipleFooterActions = (): React.ReactNode => {
  const descriptionId = useUID();
  return (
    <Box css={{ height: "1000px", width: "1350px" }}>
      <Modal defaultOpen>
        <ModalTrigger asChild>
          <Button variant="primary">Open Modal</Button>
        </ModalTrigger>
        <ModalContent aria-describedby={descriptionId}>
          <ModalHeader>
            <ModalHeading>This is the Title</ModalHeading>
            <ModalHeaderActions />
          </ModalHeader>
          <ModalBody>
            <Heading as="h3" size="heading30">
              Modal Body Heading
            </Heading>
            <Paragraph id={descriptionId}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum dignissim sit amet quam nec vehicula. Nullam lectus
              leo, mattis ut erat quis, fringilla consectetur magna. Praesent
              nisi massa, faucibus et aliquet quis, porttitor ultricies augue.
              Nulla in tincidunt libero. Donec pellentesque fermentum sagittis.
              Suspendisse eu mauris quis diam faucibus hendrerit eget et lectus.
              Nunc quis ipsum id neque ultricies lacinia.
            </Paragraph>
          </ModalBody>
          <ModalFooter helpText="This is the help text.">
            <ModalTrigger asChild>
              <Button variant="primary" size="small">
                Click
              </Button>
            </ModalTrigger>
            <ModalTrigger asChild>
              <Button variant="danger" size="small">
                Click
              </Button>
            </ModalTrigger>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

MultipleFooterActions.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const Controlled = (): React.ReactNode => {
  const [open, setOpen] = React.useState(false);
  const descriptionId = useUID();
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal open={open}>
        <ModalContent
          aria-describedby={descriptionId}
          onInteractOutside={() => setOpen(false)}
        >
          <ModalHeader>
            <ModalHeading>This is the Title</ModalHeading>
            <ModalHeaderActions customCloseButton>
              <Button
                variant="primary"
                size="small"
                onClick={() => setOpen(false)}
              >
                Save
              </Button>
            </ModalHeaderActions>
          </ModalHeader>
          <ModalBody>
            <Heading as="h3" size="heading30">
              Modal Body Heading
            </Heading>
            <Paragraph id={descriptionId}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum dignissim sit amet quam nec vehicula. Nullam lectus
              leo, mattis ut erat quis, fringilla consectetur magna. Praesent
              nisi massa, faucibus et aliquet quis, porttitor ultricies augue.
              Nulla in tincidunt libero. Donec pellentesque fermentum sagittis.
              Suspendisse eu mauris quis diam faucibus hendrerit eget et lectus.
              Nunc quis ipsum id neque ultricies lacinia.
            </Paragraph>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
