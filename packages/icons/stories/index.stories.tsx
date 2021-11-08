import * as React from "react";
import { Box } from "../../layout/Box/src";
import { Paragraph } from "../../components/Paragraph/src";
import { theme } from "../../theme/default";
import * as Icons from "../index";
import iconsJson from "../json/icons.json";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Icons/All Icons",
  component: Icons,
};

type Icon = {
  icon: string;
};

interface IconComponentProps {
  icon: Icon;
}

const IconComponent: React.FC<IconComponentProps> = (icon) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore Ignoring because we don't want to export an all encompassing Icon component used for this one file.
  // eslint-disable-next-line import/namespace
  const RenderedIcon = Icons[icon.icon];
  const RenderedIconTitle = icon.icon;
  return (
    <Box
      css={{ display: "inline-block", marginRight: "auto", marginLeft: "auto" }}
    >
      <Box
        as={RenderedIcon}
        decorative={false}
        title={`${RenderedIconTitle}`}
      />
    </Box>
  );
};

export const IconList: React.FC = () => {
  const IconComponents = iconsJson.reduce((icons, { name }) => {
    return {
      ...icons,
      [`${name}`]: name,
    };
  }, []);

  return (
    <Box
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr);",
        gap: theme.space[20],
        maxWidth: "680px",
      }}
    >
      {Object.entries(IconComponents).map(([key, value]) => {
        return (
          <Box
            css={{
              borderStyle: "solid",
              borderWidth: theme.borderWidths[10],
              borderColor: theme.colors.borderLight,
              padding: theme.space[35],
              textAlign: "center",
            }}
            key={key}
          >
            <IconComponent icon={value} />
            <Paragraph marginBottom="space0">{key}</Paragraph>
          </Box>
        );
      })}
    </Box>
  );
};
