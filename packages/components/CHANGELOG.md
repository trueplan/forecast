# @trueplan/forecast-components

## 5.0.2

### Patch Changes

- [#141](https://github.com/trueplan/forecast/pull/141) [`82eb8aa`](https://github.com/trueplan/forecast/commit/82eb8aa639d7f3c3da7dfaaf9818527a4e8d52b9) Thanks [@bumbeishvili](https://github.com/bumbeishvili)! - [Drawer]: add `modal` prop to drawer types.

## 5.0.1

### Patch Changes

- [#140](https://github.com/trueplan/forecast/pull/140) [`991c6ff`](https://github.com/trueplan/forecast/commit/991c6ff187c310b6ccfadce2d1552ab3e1862eb9) Thanks [@richbachman](https://github.com/richbachman)! - [Checkbox]: added storybook doc page comments.
  [Heading]: added storybook doc page comments.
  [HelpText]: added storybook doc page comments.
  [Input]: added storybook doc page comments.
  [InputBox]: added storybook doc page comments.
  [Label]: added storybook doc page comments.
  [Pagination]: added storybook doc page comments.
  [Paragraph]: added storybook doc page comments.
  [Pill]: added storybook doc page comments.
  [Popover]: added storybook doc page comments.
  [Priority]: added storybook doc page comments.
  [Progress]: added storybook doc page comments.
  [RadioGroup]: added storybook doc page comments.
  [Select]: added storybook doc page comments.
  [Spinner]: added storybook doc page comments.
  [Textarea]: added storybook doc page comments.
  [Toast]: added storybook doc page comments.

* [#138](https://github.com/trueplan/forecast/pull/138) [`3ece536`](https://github.com/trueplan/forecast/commit/3ece536a7b51d9ca71d63ba6934ea0aace2230f8) Thanks [@richbachman](https://github.com/richbachman)! - [Avatar]: added storybook doc page comments.
  [Badge]: added storybook doc page comments.
  [Button]: added storybook doc page comments.
  [Card]: added storybook doc page comments.

## 5.0.0

### Major Changes

- [#132](https://github.com/trueplan/forecast/pull/132) [`1a708e9`](https://github.com/trueplan/forecast/commit/1a708e92552c3c49a5bac052c3a291e49a8178ad) Thanks [@richbachman](https://github.com/richbachman)! - [components]: The `css` prop has been removed from all components, except for Box. It was an error allowing it on other components as those styles should have already been set. If you need to escape the system and adjust a components style, there are two available methods:

  - `style` prop as provided by React
  - `styled` function provided from Stitches

### Patch Changes

- [#135](https://github.com/trueplan/forecast/pull/135) [`ef8a957`](https://github.com/trueplan/forecast/commit/ef8a95793a4f71f5168fe36a3c2f61679850a143) Thanks [@richbachman](https://github.com/richbachman)! - [Alert]: added storybook doc page.

* [#136](https://github.com/trueplan/forecast/pull/136) [`2afa8db`](https://github.com/trueplan/forecast/commit/2afa8dbbbce1503c6bda6fcdb7edd6a72aefed3a) Thanks [@richbachman](https://github.com/richbachman)! - Fixing the package versions.

- [#133](https://github.com/trueplan/forecast/pull/133) [`6b0ced4`](https://github.com/trueplan/forecast/commit/6b0ced43109b5de0aa887f54e1f4fe6492958ae5) Thanks [@jayarnielsen](https://github.com/jayarnielsen)! - updated dependencies

- Updated dependencies [[`2afa8db`](https://github.com/trueplan/forecast/commit/2afa8dbbbce1503c6bda6fcdb7edd6a72aefed3a), [`6b0ced4`](https://github.com/trueplan/forecast/commit/6b0ced43109b5de0aa887f54e1f4fe6492958ae5)]:
  - @trueplan/forecast-icons@5.0.0

## 4.7.6

### Patch Changes

- [#131](https://github.com/trueplan/forecast/pull/131) [`825431a`](https://github.com/trueplan/forecast/commit/825431aaf584b464b6173f0f01769c0912edfd1d) Thanks [@RohitRajendran](https://github.com/RohitRajendran)! - [Modal] Add a medium size variant

## 4.7.5

### Patch Changes

- [#128](https://github.com/trueplan/forecast/pull/128) [`3452d0a`](https://github.com/trueplan/forecast/commit/3452d0acd4efaea2553180e71cf4888b4966ea43) Thanks [@RohitRajendran](https://github.com/RohitRajendran)! - [Table] Fix table text stylings

## 4.7.4

### Patch Changes

- [#124](https://github.com/trueplan/forecast/pull/124) [`6daa8c4`](https://github.com/trueplan/forecast/commit/6daa8c410243e31bbc117ba7990f959572452cf8) Thanks [@RohitRajendran](https://github.com/RohitRajendran)! - [TD/TH] Ability to set rowSpan and colSpan

* [#126](https://github.com/trueplan/forecast/pull/126) [`b685db8`](https://github.com/trueplan/forecast/commit/b685db8f29ee92cf4856c0e7b1272207247c7750) Thanks [@richbachman](https://github.com/richbachman)! - [Toggle]: add prop to show the label text. `showLabelText` defaults to true.

## 4.7.3

### Patch Changes

- [#119](https://github.com/trueplan/forecast/pull/119) [`a9d5a03`](https://github.com/trueplan/forecast/commit/a9d5a03bb3af0b5355a8bf6ff4a52648a2e60cea) Thanks [@RohitRajendran](https://github.com/RohitRajendran)! - [Drag and Drop File Container] Fix styling when draging over the image or button in the container

## 4.7.2

### Patch Changes

- [#116](https://github.com/trueplan/forecast/pull/116) [`0277832`](https://github.com/trueplan/forecast/commit/0277832e5bc527a1d76ffe20768acf5945a33e41) Thanks [@RohitRajendran](https://github.com/RohitRajendran)! - [Drag and Drop File Container] Added ability to pass in a loading illustration

## 4.7.1

### Patch Changes

- [#114](https://github.com/trueplan/forecast/pull/114) [`a53c592`](https://github.com/trueplan/forecast/commit/a53c59282a05c40ea585b1db98c3f292e14cba72) Thanks [@richbachman](https://github.com/richbachman)! - [Select]: Added `pointer-events: none` to the chevron container in order to fix the select not opening when a user clicks on the icon.

## 4.7.0

### Minor Changes

- [#112](https://github.com/trueplan/forecast/pull/112) [`3b6ee5c`](https://github.com/trueplan/forecast/commit/3b6ee5c40e042f736286e086182645e83f1eca02) Thanks [@RohitRajendran](https://github.com/RohitRajendran)! - [Table] Created a new table component

* [#110](https://github.com/trueplan/forecast/pull/110) [`2b637b0`](https://github.com/trueplan/forecast/commit/2b637b0b1859de83a04df611d775359d72fd05f6) Thanks [@RohitRajendran](https://github.com/RohitRajendran)! - [Drag and Drop File Container] Fix exporting of the component

## 4.6.0

### Minor Changes

- [#107](https://github.com/trueplan/forecast/pull/107) [`c3c0ad1`](https://github.com/trueplan/forecast/commit/c3c0ad10b44e6c24171284f8f016424e6b934890) Thanks [@RohitRajendran](https://github.com/RohitRajendran)! - [Drag and Drop File] - Now wrapped in a forwardRef

## 4.5.0

### Minor Changes

- [#104](https://github.com/trueplan/forecast/pull/104) [`f3b69c5`](https://github.com/trueplan/forecast/commit/f3b69c539f1761fdece7126622a8934fe2f4079a) Thanks [@RohitRajendran](https://github.com/RohitRajendran)! - [DragAndDropFileContainer]: added a component to handle drag and drop of files

## 4.4.0

### Minor Changes

- [#101](https://github.com/trueplan/forecast/pull/101) [`90cdb3e`](https://github.com/trueplan/forecast/commit/90cdb3e3c768039e656e3edbe61978cb9d4d371d) Thanks [@richbachman](https://github.com/richbachman)! - [ResourceLink]: added a new anchor card component for linking a resource (article or video).

  [Card]: added `space25` and `space35` as padding prop options.

## 4.3.2

### Patch Changes

- [#99](https://github.com/trueplan/forecast/pull/99) [`c8baa3f`](https://github.com/trueplan/forecast/commit/c8baa3f91a2b63e757fc08bda8854e86b966428e) Thanks [@bwll-tpio](https://github.com/bwll-tpio)! - fix(avatar): export getAvatarColor util

## 4.3.1

### Patch Changes

- [#98](https://github.com/trueplan/forecast/pull/98) [`2e6dd6b`](https://github.com/trueplan/forecast/commit/2e6dd6b87ac6ee284535a3dce2977ea147db8993) Thanks [@richbachman](https://github.com/richbachman)! - [select-combobox]: added `isClearable` button prop that enables a button to clear the select `value` using `setValue`.

* [#96](https://github.com/trueplan/forecast/pull/96) [`79d2312`](https://github.com/trueplan/forecast/commit/79d23127b80f8737dfdc2771d84145d5a35706aa) Thanks [@bwll-tpio](https://github.com/bwll-tpio)! - [radio]: removes wrapper element around radio button and label components to improve alignment with flexbox.

## 4.3.0

### Minor Changes

- [#94](https://github.com/trueplan/forecast/pull/94) [`931cd84`](https://github.com/trueplan/forecast/commit/931cd84f0b938a8396b32048dcc632a2f362d977) Thanks [@richbachman](https://github.com/richbachman)! - [select-combobox]: creates a reusable version that gets passed select and combobox state. Also still exports styled parts.

## 4.2.0

### Minor Changes

- [#89](https://github.com/trueplan/forecast/pull/89) [`8881fb2`](https://github.com/trueplan/forecast/commit/8881fb20aa523cba36754392a35601ddb929a9e8) Thanks [@bwll-tpio](https://github.com/bwll-tpio)! - [avatar]: lineHeight prop updated to use new key

### Patch Changes

- [#90](https://github.com/trueplan/forecast/pull/90) [`97c6786`](https://github.com/trueplan/forecast/commit/97c678604ca7eb454d02e4ecd209cd3949f3880b) Thanks [@bwll-tpio](https://github.com/bwll-tpio)! - [avatar]: adds helper function to generate an avatar background color using the length of a person's full name

* [#92](https://github.com/trueplan/forecast/pull/92) [`a25af79`](https://github.com/trueplan/forecast/commit/a25af79b54801e39171c569bd7001745e568d372) Thanks [@richbachman](https://github.com/richbachman)! - [select-combobox]: add `overflow: auto` to the select combobox listbox.

## 4.1.0

### Minor Changes

- [#83](https://github.com/trueplan/forecast/pull/83) [`32d848f`](https://github.com/trueplan/forecast/commit/32d848f68137b245fb6079a46cc845aabc064273) Thanks [@bwll-tpio](https://github.com/bwll-tpio)! - [theme]: add z-index tokens to theme
  [components]: apply z-index token to modal component

## 4.0.0

### Major Changes

- [#84](https://github.com/trueplan/forecast/pull/84) [`ebc7309`](https://github.com/trueplan/forecast/commit/ebc73092b3eda58746d339e32cbf81d0d0bca7d5) Thanks [@richbachman](https://github.com/richbachman)! - BREAKING CHANGE: Downgraded to use React 17.0.2

### Patch Changes

- Updated dependencies [[`ebc7309`](https://github.com/trueplan/forecast/commit/ebc73092b3eda58746d339e32cbf81d0d0bca7d5)]:
  - @trueplan/forecast-icons@4.0.0
  - @trueplan/forecast-theme@3.0.0

## 3.0.2

### Patch Changes

- [#82](https://github.com/trueplan/forecast/pull/82) [`aaaf6b4`](https://github.com/trueplan/forecast/commit/aaaf6b4d79dcf03bbd9c45080aed6a11604d8deb) Thanks [@richbachman](https://github.com/richbachman)! - [select-combobox]: add alpha component version which is just exported styled components.

* [#80](https://github.com/trueplan/forecast/pull/80) [`607c993`](https://github.com/trueplan/forecast/commit/607c993c91572114d820d5fbea5608fe1ae6d282) Thanks [@richbachman](https://github.com/richbachman)! - - [input]: remove input type number override
  - [select]: revert to base form select element

## 3.0.1

### Patch Changes

- [#78](https://github.com/trueplan/forecast/pull/78) [`18e6923`](https://github.com/trueplan/forecast/commit/18e6923955c16ebcbc2f5d94c05f7c15c75f0356) Thanks [@richbachman](https://github.com/richbachman)! - [select]: export `useSelectState` from AriaKit.

## 3.0.0

### Major Changes

- [#75](https://github.com/trueplan/forecast/pull/75) [`2008cd2`](https://github.com/trueplan/forecast/commit/2008cd2dec7fdb6b2e3c2881f732a097150e7061) Thanks [@richbachman](https://github.com/richbachman)! - - [components]: Bump all dependencies. Upgrade to React 18.
  - [icons]: Bump all dependencies. Upgrade to React 18.
  - [theme]: Bump all dependencies. Upgrade to React 18.

### Patch Changes

- Updated dependencies [[`2008cd2`](https://github.com/trueplan/forecast/commit/2008cd2dec7fdb6b2e3c2881f732a097150e7061)]:
  - @trueplan/forecast-icons@3.0.0
  - @trueplan/forecast-theme@2.0.0

## 2.0.0

### Major Changes

- [#74](https://github.com/trueplan/forecast/pull/74) [`96a4a0c`](https://github.com/trueplan/forecast/commit/96a4a0cc0e7f2527bc0d5b5d767fbb86de663d8d) Thanks [@bwll-tpio](https://github.com/bwll-tpio)! - [select] updates Select, Option, and OptionGroup to use Select from ariakit.
  BREAKING CHANGE: Removed label prop from OptionGroup, use OptionGroupLabel component as a child instead

### Patch Changes

- Updated dependencies []:
  - @trueplan/forecast-icons@2.0.0

## 1.2.3

### Patch Changes

- [#72](https://github.com/trueplan/forecast/pull/72) [`c9f1d2f`](https://github.com/trueplan/forecast/commit/c9f1d2f3b6c227ebdebbb042515b1679a623c053) Thanks [@richbachman](https://github.com/richbachman)! - [combobox]: Adjusts ComboboxMultiple and ComboboxMultipleItem to use Select from AriaKit. This fixes the type ahead matching as well.

## 1.2.2

### Patch Changes

- [#65](https://github.com/trueplan/forecast/pull/65) [`25ef099`](https://github.com/trueplan/forecast/commit/25ef09941d5bda3eb79a342734243bcaf44a3cd7) Thanks [@richbachman](https://github.com/richbachman)! - [combobox]: added combobox multiple select component and story.

## 1.2.1

### Patch Changes

- [#69](https://github.com/trueplan/forecast/pull/69) [`b3b6cd3`](https://github.com/trueplan/forecast/commit/b3b6cd3cae15e2fabb747809daae490007f30040) Thanks [@richbachman](https://github.com/richbachman)! - Changed NPM publish settings and build scripts.

## 1.2.0

### Minor Changes

- [#63](https://github.com/trueplan/forecast/pull/63) [`05d7048`](https://github.com/trueplan/forecast/commit/05d7048c6ed99f73d8f96888343ee82bce04c824) Thanks [@richbachman](https://github.com/richbachman)! - - [popover]: added popover component package and stories
  - [stat]: removed unused status import

## 1.1.0

### Minor Changes

- [#52](https://github.com/trueplan/forecast/pull/52) [`d659037`](https://github.com/trueplan/forecast/commit/d65903768a01f874b18eb5187243876eff623932) Thanks [@richbachman](https://github.com/richbachman)! - [tag] Added tag component, tests, and stories to the components package

* [#60](https://github.com/trueplan/forecast/pull/60) [`75247ae`](https://github.com/trueplan/forecast/commit/75247aebba65f32698e2eedf88b571dac1b9a584) Thanks [@richbachman](https://github.com/richbachman)! - [Combobox]: added Combobox component, stories and test. The Combobox is built from Ariakit primitive.

- [#55](https://github.com/trueplan/forecast/pull/55) [`6a4c3f1`](https://github.com/trueplan/forecast/commit/6a4c3f1178f92e18a1239551ff9060451785e08e) Thanks [@richbachman](https://github.com/richbachman)! - [toast] Added toast component and stories to the components package
