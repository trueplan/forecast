// eslint-disable-next-line import/no-default-export
export default function (plop) {
  plop.setGenerator("component", {
    description: "Scaffold out a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What do you want to name this component?",
      },
      {
        type: "input",
        name: "description",
        message: "What is the description for this component?",
      },
      {
        type: "confirm",
        name: "styles",
        message: "Do you want to add a file for styles?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/components/src/components/{{dashCase name}}/index.ts",
        templateFile: ".plop-templates/component/index.ts.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "packages/components/src/components/{{dashCase name}}/src/index.tsx",
        templateFile: ".plop-templates/component/src/index.tsx.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "packages/components/src/components/{{dashCase name}}/__tests__/{{dashCase name}}.test.tsx",
        templateFile: ".plop-templates/component/__tests__/test.tsx.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "packages/components/src/components/{{dashCase name}}/stories/index.stories.tsx",
        templateFile: ".plop-templates/component/stories/index.tsx.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "packages/components/src/components/{{dashCase name}}/src/styles.ts",
        templateFile: ".plop-templates/component/src/styles.ts.hbs",
        skip: (data) => (data.styles ? undefined : "Does not need styles file"),
        skipIfExists: true,
      },
      {
        type: "modify",
        path: "packages/components/src/index.ts",
        pattern: /(\/\/ COMPONENT EXPORTS)/g,
        template: 'export * from "./components/{{dashCase name}}";\n$1',
        unique: true,
      },
    ],
  });
}
