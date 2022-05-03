# Forecast - TruePlan Design System

Forecast is a design system used to build accessible, consistent, and high quality public-facing experiences at TruePlan.

## Local Development

Clone the Forecast repository anywhere on your computer.

```shell
git clone git@github.com:trueplan/forecast.git
```

Install and bootstrap Forecast dependencies.

```shell
yarn install
```

Build Forecast.

```shell
yarn build
```

Run Storybook.

```shell
yarn storybook
```

### Local Development with Dev Containers

This repo has [dev containers](https://microsoft.github.io/code-with-engineering-playbook/developer-experience/devcontainers/) set up to quickly get your developer environment set up. You will need the following set up as a prerequisite: [Docker](https://www.docker.com/get-started), [VS Code](https://code.visualstudio.com/), and [the VS Code Remote - Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

Open up the folder in VS Code and you'll get a prompt to reopen the folder in a container. Alternatively, you can run `>Remote-Containers: Open Folder in Container` through the VS Code Command Palette (⇧⌘P on Mac or Ctrl+Shift+P in Windows/Linux).

Once it's running (the first time will take a couple minutes), you can run `yarn storybook` to get started.

## Getting Started

👋 Hi. Follow the steps below to begin building with Forecast

### 1. Install external dependencies

| Package   | Version |
| --------- | ------- |
| react     | 18.x    |
| react-dom | 18.x    |

```shell npm2yarn
npm install --save react react-dom
```

## 2. Install Forecast packages

Install the following packages so you can consume Forecast's tokens and themes to build custom page sections.

```bash npm2yarn
npm install --save @trueplan/forecast-theme @trueplan/forecast-icons @trueplan/forecast-components
```

## 3. Build some cool stuff.

Enough said.

## 4. Feedback

Let us know if you have any [feedback](https://github.com/trueplan/forecast/discussions/new) or [issues](https://github.com/trueplan/forecast/issues/new).
