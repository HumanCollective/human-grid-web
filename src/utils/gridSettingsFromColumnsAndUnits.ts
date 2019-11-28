import { GridSettings } from '../types'

export const gridSettingsFromColumnsAndUnits = ({
  unit = 18,
  columns = 12,
  columnUnits = 4,
  gutterUnits = 2,
  marginUnits = 2,
} = {}): GridSettings => {
  const column = columnUnits * unit
  const gutter = gutterUnits * unit
  const margin = marginUnits * unit
  const fullWidth = columns * column + (columns - 1) * gutter + margin * 2
  const innerWidth = fullWidth - margin * 2
  return {
    unit,
    fullWidth,
    innerWidth,
    margin,
    gutter,
    column,
  }
}
