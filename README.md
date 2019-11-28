# `human-grid-web`

This project contains the pixel grid helpers we use with Styled Components at [Human](https://humancollective.co).

The goal of this project provide the tools required for a grid system that is fast, flexible, and doesn't require a significant amount of new working knowledge. We also want to avoid

The bulk of the library is a set of helper functions for use with styled components. This is the core of the grid system. Working directly with Styled Components provides a lot of powerful functionality and allows your grid styling to live alongside the rest of your styles.

```ts
const SomeComponent = styled.div`
  max-width: ${gridColumn(6)};
  margin-left: auto;
  margin-right: auto;
  flex: 1;

  @media (max-width: ${gridColumn(8)}) {
    max-width: ${gridColumn(4)};
    margin-left: ${gridGutter()};
    margin-right: ${gridGutter()};
  }
`
```

We use the ThemeProvider API that comes bundled with Styled Components so that grids can contain other grids and components can own their grid settings. We package a helper function to generate the settings object, but you can also create your own.

```tsx
<ThemeProvider
  theme={{ grid: gridSettingsFromColumnsAndUnits({ columns: 12 }) }}
/>
```

## Usage

Install the library.

```sh
yarn add @humancollective/human-grid-web
```

Add the `grid` setting to your styled components [theme provider](https://www.styled-components.com/docs/advanced).

You can use our grid settings generator to get your settings, set them explicitly by [providing an object](#theme-settings), or [create your own generator](#theme-settings). Keep in mind that any grids outside of this provider's context will render using the default grid settings.

```tsx
<ThemeProvider
  theme={{
    grid: gridSettingsFromColumnsAndUnits({
      unit: 18, // default = 18
      columns: 12, // default = 12
      columnUnits: 4, // default = 4
      gutterUnits: 2, // default = 2
      marginUnits: 2, // default = 2
    }),
    // ... your other theme settings
  }}
>
  {/* the components that will use this grid */}
</ThemeProvider>
```

Now you can use the styled components [grid functions](<(#grid-components)>) in any of the styled components inside your theme provider. You can also use the [grid components](#grid-components) outlined below.

```ts
const StyledBlogArticle = styled.article`
  max-width: ${gridColumn(4)};
  margin-left: ${gridColumn(1)};
`
```

## Grid Functions

We can access grid values in our styled components using the helper functions listed below.

**Note** - these functions append "px" to the end of the value by default. If you are performing transformations on their output, you can provide `false` as the second argument to return a number.

- `gridValue(key: GridSetting, inPx = true)` returns the value of a specific grid setting. For example, `gridValue(GridSetting.InnerWidth)` might return `1024px`.
- `gridUnit(count = 1, inPx = true)` where count is the number of units.
- `gridMargin(count = 1, inPx = true)` where count is the number of margins.
- `gridGutter(count = 1, inPx = true)` where count is the number of gutters.
- `gridColumn(count = 1, inPx = true)` where count is the number of columns.

## Grid Components

There are a couple of helper components for fulfilling the most common grid tasks. The preference should be to declare your grid styling in your styled components css, but the functionality provided by these components is often fulfilled using wrapper components. In those cases, these components can make our styles more concise.

- `<Grid.Container />` - a **container** is a horizontally-centered div that's the _full width_ of the grid.
- `<Grid.Inner />` - an **inner** is a horizontally-centered div that's the _inner width_ of the grid. If you provide the `withMargins={true}` flag, it will maintain a margin on both sides even when the document width is narrower than the grid's full width.

```tsx
<Grid.Container>
  <Grid.Inner>
    When the screen is narrower than the grid, I'm full width.
  </Grid.Inner>
  <Grid.Inner withMargins>
    When the screen is narrower than the grid, I'm full width minus margins.
  </Grid.Inner>
</Grid.Container>
```

## Theme Settings

If you provide a settings object or decide to roll your own settings generator, you will need to provide all of the theme settings below.

| Name        | Key          | Type     | Description                                                                                                    |
| ----------- | ------------ | -------- | -------------------------------------------------------------------------------------------------------------- |
| Unit        | `unit`       | `number` | The base unit or "step size" for the grid. Think of this like the width of a square on a piece of graph paper. |
| Margin      | `margin`     | `number` | The width the padding on the outside of the grid.                                                              |
| Full Width  | `fullWidth`  | `number` | The full width of the grid (including margins).                                                                |
| Inner Width | `innerWidth` | `number` | The width of the grid without its margins.                                                                     |
| Gutter      | `gutter`     | `number` | The width of the padding between columns.                                                                      |
| Column      | `column`     | `number` | The width of a column.                                                                                         |
