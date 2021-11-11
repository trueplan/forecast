# Forecast - TruePlan Design System

Forecast is a design system used to build accessible, consistent, and high quality public-facing experiences at TruePlan.

## Local Development

Clone the Forecast repository anywhere on your computer...

```shell
git clone git@github.com:trueplan/forecast.git
```

Install and bootstrap Forecast dependencies...

```shell
yarn
```

## Getting Started

👋 Hi TruePlan developer. Follow the steps below to begin building with Forecast

### 1. Install external dependencies

| Package   | Version |
| --------- | ------- |
| react     | 17.x    |
| react-dom | 17.x    |

```shell npm2yarn
npm install --save react react-dom
```

### 2. Configure GitHub Package Registry

The Forecast packages are hosted on the GitHub Package Registry and require some additional configuration to install.

#### Authentication

Begin by generating a [personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) on GitHub with the `read:packages` permission.

For Yarn v2 and up, add the following to the `.yarnrc.yml` file in your home folder.

```yaml
npmRegistries:
  "https://npm.pkg.github.com":
    npmAuthToken: REPLACE-THIS-WITH-YOUR-ACCESS-TOKEN
```

Far NPM and Yarn v1.x, run the following command. Use your access token when prompted for your password.

```shell
npm login --registry=https://npm.pkg.github.com
```

#### Project Settings

For Yarn 2 and up, add the following to the .yarnrc.yml file in the root of your project:

```yaml
npmScopes:
  trueplan:
    npmRegistryServer: "https://npm.pkg.github.com"
```

For Yarn 1, add the following to the .yarnrc file in the root of your project.

```
"@trueplan:registry" "https://npm.pkg.github.com"
```

For NPM, add the following to the .npmrc file in the root of your project.

```
@trueplan:registry=https://npm.pkg.github.com
```

## 3. Install Forecast packages

Install the following packages so you can consume Match’s tokens and themes to build custom page sections.

| Package                       | Version |
| ----------------------------- | ------- |
| @trueplan/forecast-theme      | 0.0.4   |
| @trueplan/forecast-icons      | 0.0.4   |
| @trueplan/forecast-components | 0.0.4   |

```bash npm2yarn
npm install --save @trueplan/forecast-theme @trueplan/forecast-icons @trueplan/forecast-components
```
