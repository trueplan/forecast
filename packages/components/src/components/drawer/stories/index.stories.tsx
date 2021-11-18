import * as React from "react";
import { Button } from "../../button";
import { Heading } from "../../heading";
import { Paragraph } from "../../paragraph";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerHeading,
  DrawerHeaderActions,
  DrawerTrigger,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Drawer",
  component: Drawer,
};

export const Default: React.FC = () => {
  return (
    <Drawer defaultOpen>
      <DrawerTrigger asChild>
        <Button variant="primary">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerHeading>This is the Title</DrawerHeading>
          <DrawerHeaderActions />
        </DrawerHeader>
        <DrawerBody>
          <Heading as="h3" size="heading30">
            Drawer Body Heading
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dignissim sit amet quam nec vehicula. Nullam lectus leo, mattis ut
            erat quis, fringilla consectetur magna. Praesent nisi massa,
            faucibus et aliquet quis, porttitor ultricies augue. Nulla in
            tincidunt libero. Donec pellentesque fermentum sagittis. Suspendisse
            eu mauris quis diam faucibus hendrerit eget et lectus. Nunc quis
            ipsum id neque ultricies lacinia.
          </Paragraph>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export const NoPaddingOnBody: React.FC = () => {
  return (
    <Drawer defaultOpen>
      <DrawerTrigger asChild>
        <Button variant="primary">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerHeading>This is the Title</DrawerHeading>
          <DrawerHeaderActions />
        </DrawerHeader>
        <DrawerBody padding="space0">
          <Heading as="h3" size="heading30">
            Drawer Body Heading
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dignissim sit amet quam nec vehicula. Nullam lectus leo, mattis ut
            erat quis, fringilla consectetur magna. Praesent nisi massa,
            faucibus et aliquet quis, porttitor ultricies augue. Nulla in
            tincidunt libero. Donec pellentesque fermentum sagittis. Suspendisse
            eu mauris quis diam faucibus hendrerit eget et lectus. Nunc quis
            ipsum id neque ultricies lacinia.
          </Paragraph>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export const OverflowBodyContent: React.FC = () => {
  return (
    <Drawer defaultOpen>
      <DrawerTrigger asChild>
        <Button variant="primary">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerHeading>This is the Title</DrawerHeading>
          <DrawerHeaderActions />
        </DrawerHeader>
        <DrawerBody>
          <Heading as="h3" size="heading30">
            Drawer Body Heading
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dignissim sit amet quam nec vehicula. Nullam lectus leo, mattis ut
            erat quis, fringilla consectetur magna. Praesent nisi massa,
            faucibus et aliquet quis, porttitor ultricies augue. Nulla in
            tincidunt libero. Donec pellentesque fermentum sagittis. Suspendisse
            eu mauris quis diam faucibus hendrerit eget et lectus. Nunc quis
            ipsum id neque ultricies lacinia. Phasellus a lacus ac metus
            hendrerit luctus. Praesent maximus condimentum mattis. Sed neque
            dolor, laoreet a ante ut, ornare venenatis est. Sed sagittis libero
            nec ipsum tincidunt fringilla. Suspendisse vitae lectus eget libero
            scelerisque facilisis fringilla non urna. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Cras ullamcorper leo ac enim sagittis, ut pellentesque magna
            pellentesque. Phasellus in metus efficitur ex finibus auctor vel
            semper erat. Vivamus laoreet porta magna, ut lacinia ante tincidunt
            ac.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dignissim sit amet quam nec vehicula. Nullam lectus leo, mattis ut
            erat quis, fringilla consectetur magna. Praesent nisi massa,
            faucibus et aliquet quis, porttitor ultricies augue. Nulla in
            tincidunt libero. Donec pellentesque fermentum sagittis. Suspendisse
            eu mauris quis diam faucibus hendrerit eget et lectus. Nunc quis
            ipsum id neque ultricies lacinia. Phasellus a lacus ac metus
            hendrerit luctus. Praesent maximus condimentum mattis. Sed neque
            dolor, laoreet a ante ut, ornare venenatis est. Sed sagittis libero
            nec ipsum tincidunt fringilla. Suspendisse vitae lectus eget libero
            scelerisque facilisis fringilla non urna. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Cras ullamcorper leo ac enim sagittis, ut pellentesque magna
            pellentesque. Phasellus in metus efficitur ex finibus auctor vel
            semper erat. Vivamus laoreet porta magna, ut lacinia ante tincidunt
            ac.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dignissim sit amet quam nec vehicula. Nullam lectus leo, mattis ut
            erat quis, fringilla consectetur magna. Praesent nisi massa,
            faucibus et aliquet quis, porttitor ultricies augue. Nulla in
            tincidunt libero. Donec pellentesque fermentum sagittis. Suspendisse
            eu mauris quis diam faucibus hendrerit eget et lectus. Nunc quis
            ipsum id neque ultricies lacinia. Phasellus a lacus ac metus
            hendrerit luctus. Praesent maximus condimentum mattis. Sed neque
            dolor, laoreet a ante ut, ornare venenatis est. Sed sagittis libero
            nec ipsum tincidunt fringilla. Suspendisse vitae lectus eget libero
            scelerisque facilisis fringilla non urna. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Cras ullamcorper leo ac enim sagittis, ut pellentesque magna
            pellentesque. Phasellus in metus efficitur ex finibus auctor vel
            semper erat. Vivamus laoreet porta magna, ut lacinia ante tincidunt
            ac.
          </Paragraph>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export const ReallyLongHeader: React.FC = () => {
  return (
    <Drawer defaultOpen>
      <DrawerTrigger asChild>
        <Button variant="primary">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerHeading>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            dapibus, tellus ac cursus commodo, tortor
          </DrawerHeading>
          <DrawerHeaderActions />
        </DrawerHeader>
        <DrawerBody>
          <Heading as="h3" size="heading30">
            Drawer Body Heading
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dignissim sit amet quam nec vehicula. Nullam lectus leo, mattis ut
            erat quis, fringilla consectetur magna. Praesent nisi massa,
            faucibus et aliquet quis, porttitor ultricies augue. Nulla in
            tincidunt libero. Donec pellentesque fermentum sagittis. Suspendisse
            eu mauris quis diam faucibus hendrerit eget et lectus. Nunc quis
            ipsum id neque ultricies lacinia.
          </Paragraph>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export const MultipleHeaderActions: React.FC = () => {
  return (
    <Drawer defaultOpen>
      <DrawerTrigger asChild>
        <Button variant="primary">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerHeading>This is the Title</DrawerHeading>
          <DrawerHeaderActions>
            <Button variant="secondary" size="small">
              Click
            </Button>
          </DrawerHeaderActions>
        </DrawerHeader>
        <DrawerBody>
          <Heading as="h3" size="heading30">
            Drawer Body Heading
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dignissim sit amet quam nec vehicula. Nullam lectus leo, mattis ut
            erat quis, fringilla consectetur magna. Praesent nisi massa,
            faucibus et aliquet quis, porttitor ultricies augue. Nulla in
            tincidunt libero. Donec pellentesque fermentum sagittis. Suspendisse
            eu mauris quis diam faucibus hendrerit eget et lectus. Nunc quis
            ipsum id neque ultricies lacinia.
          </Paragraph>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
