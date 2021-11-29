import * as React from "react";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import { Heading, Paragraph } from "@trueplan/forecast-components";
import type { HeadingProps } from "@trueplan/forecast-components";
import { Code } from "../code";
import type { CodeProps } from "../code/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getCodeChild = (children: Array<React.ReactElement<any>>): any => {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length !== 1) return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [firstChild] = childrenArray as Array<React.ReactElement<any>>;
  if (firstChild?.props?.mdxType !== "code") return;
  return firstChild;
};

interface DocProps {
  children: React.ReactNode;
  meta: {
    title: string;
    description: string;
    slug: string;
  };
}

const Doc: React.FC<DocProps> = ({ children, meta }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <MDXProvider
        components={{
          p: Paragraph,
          h1: (props: HeadingProps): React.ReactElement => (
            <Heading
              {...props}
              as="h1"
              size="heading10"
              marginBottom="space0"
            />
          ),
          h2: (props: HeadingProps): React.ReactElement => (
            <Heading
              {...props}
              as="h2"
              size="heading30"
              marginBottom="space0"
            />
          ),
          h3: (props: HeadingProps): React.ReactElement => (
            <Heading
              {...props}
              as="h3"
              size="heading50"
              marginBottom="space0"
            />
          ),
          h4: (props: HeadingProps): React.ReactElement => (
            <Heading
              {...props}
              as="h4"
              size="heading50"
              marginBottom="space0"
            />
          ),
          h5: (props: HeadingProps): React.ReactElement => (
            <Heading
              {...props}
              as="h5"
              size="heading50"
              marginBottom="space0"
            />
          ),
          h6: (props: HeadingProps): React.ReactElement => (
            <Heading
              {...props}
              as="h6"
              size="heading60"
              marginBottom="space0"
            />
          ),
          code: (props: CodeProps): React.ReactElement => <Code {...props} />,
          pre: (props) => {
            const codeChild = getCodeChild(props.children);
            return codeChild ? (
              <Code
                lang={
                  codeChild.props.className &&
                  codeChild.props.className.split("-")[1]
                }
                {...codeChild.props}
              />
            ) : (
              <pre>{props.children}</pre>
            );
          },
        }}
      >
        {children}
      </MDXProvider>
    </>
  );
};

export { Doc };
