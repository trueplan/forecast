import * as React from "react";
import { Avatar } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Avatar",
  component: Avatar,
  // Sets the diffThreshold for all stories
  chromatic: { diffThreshold: 0.3 },
};

export const Initials = (): React.ReactNode => {
  return (
    <>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Avatar name="Nate Schulte" size="small" />
        <Avatar name="Jimmy Tang" />
        <Avatar name="Tyler Chapman" size="large" />
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Avatar name="Nate Schulte" color="blue" size="small" />
        <Avatar name="Jimmy Tang" color="blue" />
        <Avatar name="Tyler Chapman" color="blue" size="large" />
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Avatar name="Nate Schulte" color="green" size="small" />
        <Avatar name="Jimmy Tang" color="green" />
        <Avatar name="Tyler Chapman" color="green" size="large" />
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Avatar name="Nate Schulte" color="sky" size="small" />
        <Avatar name="Jimmy Tang" color="sky" />
        <Avatar name="Tyler Chapman" color="sky" size="large" />
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Avatar name="Nate Schulte" color="yellow" size="small" />
        <Avatar name="Jimmy Tang" color="yellow" />
        <Avatar name="Tyler Chapman" color="yellow" size="large" />
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Avatar name="Nate Schulte" color="red" size="small" />
        <Avatar name="Jimmy Tang" color="red" />
        <Avatar name="Tyler Chapman" color="red" size="large" />
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Avatar name="Nate Schulte" color="royal" size="small" />
        <Avatar name="Jimmy Tang" color="royal" />
        <Avatar name="Tyler Chapman" color="royal" size="large" />
      </div>
    </>
  );
};

export const Image = (): React.ReactNode => {
  return (
    <>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Avatar name="Nate Schulte" size="small" src="./avatars/nate.png" />
        <Avatar name="Jimmy Tang" src="./avatars/jimmy.png" />
        <Avatar name="Tyler Chapman" size="large" src="./avatars/tyler.png" />
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
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
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
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
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
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
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
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
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
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
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
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
      </div>
    </>
  );
};

Image.story = {
  parameters: { chromatic: { delay: 3000 } },
};
