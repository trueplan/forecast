import * as React from "react";
import Head from "next/head";
import { globalFonts, globalStyles } from "@trueplan/forecast-theme";
import { Box } from "@trueplan/forecast-components";
import { Sidebar } from "../sidebar";
import { Navigation } from "../sidebar/navigation";

const Layout: React.FC = ({ children }) => {
  globalStyles();
  globalFonts();
  return (
    <>
      <Head>
        <title>Forecast Design System</title>
        <meta
          name="description"
          content="Forecast Design System for Trueplan"
        />
        <link rel="icon" href="/favicon32.png" />
      </Head>
      <Box
        css={{
          backgroundColor: "$white",
          minHeight: "100vh",
        }}
      >
        <Sidebar>
          <Navigation />
        </Sidebar>
        <Box
          as="main"
          css={{
            paddingTop: "$60",
            paddingBottom: "$60",
            marginLeft: "17.5rem",
          }}
        >
          <Box
            css={{
              maxWidth: "50rem",
              marginLeft: "9.625rem",
              marginRight: "$60",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { Layout };
