import * as React from "react";
import type { Story } from "@storybook/react";
import type { ToastProps } from "../src";
import { Toast } from "../src";
import { ToastProvider, ToastViewport } from "../src/styles";
import { Anchor } from "../../anchor";
import { Button } from "../../button";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Toast",
  component: Toast,
  args: {
    title: "This is a toast",
    content:
      "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.",
  },
};

const Template: Story<ToastProps> = ({ title, content, ...props }) => {
  const [open, setOpen] = React.useState(true);

  return (
    <ToastProvider>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open toast
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={title}
        content={content}
        {...props}
      />
      <ToastViewport />
    </ToastProvider>
  );
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
};

export const Info = Template.bind({});
Info.args = {
  variant: "info",
};

export const TitleOnly: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <ToastProvider>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open toast
      </Button>
      <Toast open={open} onOpenChange={setOpen} title="This is a toast" />
      <ToastViewport />
    </ToastProvider>
  );
};

export const WithAction: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <ToastProvider>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open toast
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title="This is a toast"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        actionAltText="Click here to learn more"
      >
        <Anchor href="#">Learn More</Anchor>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};
