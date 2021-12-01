import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box } from "@trueplan/forecast-components";

const Sidebar: React.FC = ({ children }) => {
  return (
    <Box
      as="aside"
      css={{
        position: "fixed",
        backgroundColor: "$gray10",
        padding: "$60",
        width: "17.5rem",
        height: "100vh",
      }}
    >
      <Link href="/" passHref>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <Image
            src="/trueplan-green.svg"
            alt="TruePlan"
            width={122}
            height={24}
          />
        </a>
      </Link>
      <Box css={{ marginTop: "$70" }}>{children}</Box>
    </Box>
  );
};

export { Sidebar };
