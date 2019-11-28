import { GridSetting, GridSettings } from '../types'
import { gridSettingsFromColumnsAndUnits } from './gridSettingsFromColumnsAndUnits'

const defaults = gridSettingsFromColumnsAndUnits()
export { gridSettingsFromColumnsAndUnits }

const get = (key: string, theme?: any) =>
  theme && theme.grid && theme.grid[key] ? theme.grid[key] : defaults[key]

interface ThemeProps {
  theme?: {
    grid?: GridSettings
  }
}

export const gridValue = (key: GridSetting, inPx = true) => ({
  theme,
}: ThemeProps) => `${get(key, theme)}${inPx && 'px'}`

export const gridUnit = (units = 1, inPx = true) => ({ theme }: ThemeProps) =>
  `${get(GridSetting.Unit, theme) * units}${inPx && 'px'}`

export const gridMargin = (count = 1, inPx = true) => ({ theme }: ThemeProps) =>
  `${get(GridSetting.Margin, theme) * count}${inPx && 'px'}`

export const gridGutter = (count = 1, inPx = true) => ({ theme }: ThemeProps) =>
  `${get(GridSetting.Margin, theme) * count}${inPx && 'px'}`

export const gridColumn = (count = 1, inPx = true) => ({ theme }: ThemeProps) =>
  `${get(GridSetting.Column, theme) * count +
    get(GridSetting.Gutter, theme) * (count - 1)}${inPx && 'px'}`
