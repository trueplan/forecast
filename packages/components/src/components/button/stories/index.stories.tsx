import * as React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { CloseIcon, PencilIcon } from "@trueplan/forecast-icons";
import { Box } from "../../../primitives/box";
import { Button } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => (
  <>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="small" variant="primary">
        Primary
      </Button>
      <Button variant="primary">Primary</Button>
      <Button size="large" variant="primary">
        Primary
      </Button>
      <Button variant="primary" disabled>
        Primary
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="small" variant="primary" loading>
        Primary
      </Button>
      <Button variant="primary" loading>
        Primary
      </Button>
      <Button size="large" variant="primary" loading>
        Primary
      </Button>
      <Button variant="primary" disabled loading>
        Primary
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="small" variant="secondary">
        Secondary
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button size="large" variant="secondary">
        Secondary
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="small" variant="secondary" loading>
        Secondary
      </Button>
      <Button variant="secondary" loading>
        Secondary
      </Button>
      <Button size="large" variant="secondary" loading>
        Secondary
      </Button>
      <Button variant="secondary" disabled loading>
        Secondary
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="small" variant="danger">
        Danger
      </Button>
      <Button variant="danger">Danger</Button>
      <Button size="large" variant="danger">
        Danger
      </Button>
      <Button variant="danger" disabled>
        Danger
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="small" variant="danger" loading>
        Danger
      </Button>
      <Button variant="danger" loading>
        Danger
      </Button>
      <Button size="large" variant="danger" loading>
        Danger
      </Button>
      <Button variant="danger" disabled loading>
        Danger
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="small" variant="ghost">
        Ghost
      </Button>
      <Button variant="ghost">Ghost</Button>
      <Button size="large" variant="ghost">
        Ghost
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="small" variant="ghost" loading>
        Ghost
      </Button>
      <Button variant="ghost" loading>
        Ghost
      </Button>
      <Button size="large" variant="ghost" loading>
        Ghost
      </Button>
      <Button variant="ghost" disabled loading>
        Ghost
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
        backgroundColor: "#1F2D3D",
        padding: "15px",
      }}
    >
      <Button size="small" variant="inverse">
        Inverse
      </Button>
      <Button variant="inverse">Inverse</Button>
      <Button size="large" variant="inverse">
        Inverse
      </Button>
      <Button variant="inverse" disabled>
        Inverse
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
        backgroundColor: "#1F2D3D",
        padding: "15px",
      }}
    >
      <Button size="small" variant="inverse" loading>
        Inverse
      </Button>
      <Button variant="inverse" loading>
        Inverse
      </Button>
      <Button size="large" variant="inverse" loading>
        Inverse
      </Button>
      <Button variant="inverse" disabled loading>
        Inverse
      </Button>
    </Box>
  </>
);

export const FullWidth: ComponentStory<typeof Button> = () => (
  <>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="small" variant="primary" fullWidth>
        Primary
      </Button>
      <Button variant="primary" fullWidth>
        Primary
      </Button>
      <Button size="large" variant="primary" fullWidth>
        Primary
      </Button>
      <Button variant="primary" disabled fullWidth>
        Primary
      </Button>
      <Button size="small" variant="primary" fullWidth>
        Primary <PencilIcon decorative={false} size="small" title="Edit" />
      </Button>
      <Button variant="primary" fullWidth>
        Primary <PencilIcon decorative={false} title="Edit" />
      </Button>
      <Button size="large" variant="primary" fullWidth>
        Primary <PencilIcon decorative={false} title="Edit" />
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="small" variant="secondary" fullWidth>
        Secondary
      </Button>
      <Button variant="secondary" fullWidth>
        Secondary
      </Button>
      <Button size="large" variant="secondary" fullWidth>
        Secondary
      </Button>
      <Button variant="secondary" disabled fullWidth>
        Secondary
      </Button>
      <Button size="small" variant="secondary" fullWidth>
        Secondary <PencilIcon decorative={false} size="small" title="Edit" />
      </Button>
      <Button variant="secondary" fullWidth>
        Secondary <PencilIcon decorative={false} title="Edit" />
      </Button>
      <Button size="large" variant="secondary" fullWidth>
        Secondary <PencilIcon decorative={false} title="Edit" />
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="small" variant="danger" fullWidth>
        Danger
      </Button>
      <Button variant="danger" fullWidth>
        Danger
      </Button>
      <Button size="large" variant="danger" fullWidth>
        Danger
      </Button>
      <Button variant="danger" disabled fullWidth>
        Danger
      </Button>
      <Button size="small" variant="danger" fullWidth>
        Danger <PencilIcon decorative={false} size="small" title="Edit" />
      </Button>
      <Button variant="danger" fullWidth>
        Danger <PencilIcon decorative={false} title="Edit" />
      </Button>
      <Button size="large" variant="danger" fullWidth>
        Danger <PencilIcon decorative={false} title="Edit" />
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="small" variant="ghost" fullWidth>
        Ghost
      </Button>
      <Button variant="ghost" fullWidth>
        Ghost
      </Button>
      <Button size="large" variant="ghost" fullWidth>
        Ghost
      </Button>
      <Button variant="ghost" disabled fullWidth>
        Ghost
      </Button>
      <Button size="small" variant="ghost" fullWidth>
        Ghost <PencilIcon decorative={false} size="small" title="Edit" />
      </Button>
      <Button variant="ghost" fullWidth>
        Ghost <PencilIcon decorative={false} title="Edit" />
      </Button>
      <Button size="large" variant="ghost" fullWidth>
        Ghost <PencilIcon decorative={false} title="Edit" />
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "20px",
        backgroundColor: "#1F2D3D",
        padding: "15px",
      }}
    >
      <Button size="small" variant="inverse" fullWidth>
        Inverse
      </Button>
      <Button variant="inverse" fullWidth>
        Inverse
      </Button>
      <Button size="large" variant="inverse" fullWidth>
        Inverse
      </Button>
      <Button variant="inverse" disabled fullWidth>
        Inverse
      </Button>
      <Button size="small" variant="inverse" fullWidth>
        Inverse <PencilIcon decorative={false} size="small" title="Edit" />
      </Button>
      <Button variant="inverse" fullWidth>
        Inverse <PencilIcon decorative={false} title="Edit" />
      </Button>
      <Button size="large" variant="inverse" fullWidth>
        Inverse <PencilIcon decorative={false} title="Edit" />
      </Button>
    </Box>
  </>
);

export const Icons: ComponentStory<typeof Button> = () => (
  <>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="iconSmall" variant="primary">
        <PencilIcon decorative={false} title="Edit" size="small" />
      </Button>
      <Button size="iconMedium" variant="primary">
        <PencilIcon decorative={false} title="Edit" size="small" />
      </Button>
      <Button size="iconLarge" variant="primary">
        <PencilIcon decorative={false} title="Edit" />
      </Button>
      <Button size="small" variant="primary">
        Primary <PencilIcon decorative={false} size="small" title="Edit" />
      </Button>
      <Button variant="primary">
        Primary <PencilIcon decorative={false} title="Edit" />
      </Button>
      <Button size="large" variant="primary">
        Primary <PencilIcon decorative={false} title="Edit" />
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="iconSmall" variant="secondary">
        <PencilIcon decorative={false} title="Edit" size="small" />
      </Button>
      <Button size="iconMedium" variant="secondary">
        <PencilIcon decorative={false} title="Edit" size="small" />
      </Button>
      <Button size="iconLarge" variant="secondary">
        <PencilIcon decorative={false} title="Edit" />
      </Button>
      <Button size="small" variant="secondary">
        Secondary <PencilIcon decorative={false} size="small" title="Edit" />
      </Button>
      <Button variant="secondary">
        Secondary <PencilIcon decorative={false} title="Edit" />
      </Button>
      <Button size="large" variant="secondary">
        Secondary <PencilIcon decorative={false} title="Edit" />
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="iconSmall" variant="danger">
        <PencilIcon decorative={false} title="Edit" size="small" />
      </Button>
      <Button size="iconMedium" variant="danger">
        <PencilIcon decorative={false} title="Edit" size="small" />
      </Button>
      <Button size="iconLarge" variant="danger">
        <PencilIcon decorative={false} title="Edit" />
      </Button>
      <Button size="small" variant="danger">
        Danger <PencilIcon decorative={false} size="small" title="Edit" />
      </Button>
      <Button variant="danger">
        Danger <PencilIcon decorative={false} title="Edit" />
      </Button>
      <Button size="large" variant="danger">
        Danger <PencilIcon decorative={false} title="Edit" />
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="iconSmall" variant="ghost">
        <PencilIcon decorative={false} title="Edit" size="small" />
      </Button>
      <Button size="iconMedium" variant="ghost">
        <PencilIcon decorative={false} title="Edit" size="small" />
      </Button>
      <Button size="iconLarge" variant="ghost">
        <PencilIcon decorative={false} title="Edit" />
      </Button>
      <Button size="small" variant="ghost">
        Ghost <PencilIcon decorative={false} size="small" title="Edit" />
      </Button>
      <Button variant="ghost">
        Ghost <PencilIcon decorative={false} title="Edit" />
      </Button>
      <Button size="large" variant="ghost">
        Ghost <PencilIcon decorative={false} title="Edit" />
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
        backgroundColor: "#1F2D3D",
        padding: "15px",
      }}
    >
      <Button size="iconSmall" variant="inverse">
        <PencilIcon decorative={false} title="Edit" size="small" />
      </Button>
      <Button size="iconMedium" variant="inverse">
        <PencilIcon decorative={false} title="Edit" size="small" />
      </Button>
      <Button size="iconLarge" variant="inverse">
        <PencilIcon decorative={false} title="Edit" />
      </Button>
      <Button size="small" variant="inverse">
        Inverse <PencilIcon decorative={false} size="small" title="Edit" />
      </Button>
      <Button variant="inverse">
        Inverse <PencilIcon decorative={false} title="Edit" />
      </Button>
      <Button size="large" variant="inverse">
        Inverse <PencilIcon decorative={false} title="Edit" />
      </Button>
    </Box>
  </>
);

export const IconOnly: ComponentStory<typeof Button> = () => (
  <>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="iconSmall" variant="iconOnly">
        <CloseIcon decorative={false} title="Close" size="small" />
      </Button>
      <Button size="iconSmall" variant="iconOnly">
        <CloseIcon decorative={false} title="Close" size="small" />
      </Button>
      <Button size="iconSmall" variant="iconOnly">
        <CloseIcon decorative={false} title="Close" size="small" />
      </Button>
      <Button size="iconSmall" variant="iconOnly" disabled>
        <CloseIcon decorative={false} title="Close" size="small" />
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="iconMedium" variant="iconOnly">
        <CloseIcon decorative={false} title="Close" size="small" />
      </Button>
      <Button size="iconMedium" variant="iconOnly">
        <CloseIcon decorative={false} title="Close" size="small" />
      </Button>
      <Button size="iconMedium" variant="iconOnly">
        <CloseIcon decorative={false} title="Close" size="small" />
      </Button>
      <Button size="iconMedium" variant="iconOnly" disabled>
        <CloseIcon decorative={false} title="Close" size="small" />
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button size="iconLarge" variant="iconOnly">
        <CloseIcon decorative={false} title="Close" />
      </Button>
      <Button size="iconLarge" variant="iconOnly">
        <CloseIcon decorative={false} title="Close" />
      </Button>
      <Button size="iconLarge" variant="iconOnly">
        <CloseIcon decorative={false} title="Close" />
      </Button>
      <Button size="iconLarge" variant="iconOnly" disabled>
        <CloseIcon decorative={false} title="Close" />
      </Button>
    </Box>
  </>
);

export const AsAnchor: ComponentStory<typeof Button> = () => (
  <>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button as="a" href="#" size="small" variant="primary">
        Primary
      </Button>
      <Button as="a" href="#" variant="primary">
        Primary
      </Button>
      <Button as="a" href="#" size="large" variant="primary">
        Primary
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button as="a" href="#" size="small" variant="secondary">
        Secondary
      </Button>
      <Button as="a" href="#" variant="secondary">
        Secondary
      </Button>
      <Button as="a" href="#" size="large" variant="secondary">
        Secondary
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button as="a" href="#" size="small" variant="danger">
        Danger
      </Button>
      <Button as="a" href="#" variant="danger">
        Danger
      </Button>
      <Button as="a" href="#" size="large" variant="danger">
        Danger
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Button as="a" href="#" size="small" variant="ghost">
        Ghost
      </Button>
      <Button as="a" href="#" variant="ghost">
        Ghost
      </Button>
      <Button as="a" href="#" size="large" variant="ghost">
        Ghost
      </Button>
    </Box>
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
        backgroundColor: "#1F2D3D",
        padding: "15px",
      }}
    >
      <Button as="a" href="#" size="small" variant="inverse">
        Inverse
      </Button>
      <Button as="a" href="#" variant="inverse">
        Inverse
      </Button>
      <Button as="a" href="#" size="large" variant="inverse">
        Inverse
      </Button>
    </Box>
  </>
);
