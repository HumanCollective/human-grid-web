export enum GridSetting {
  Unit = 'unit',
  FullWidth = 'fullWidth',
  InnerWidth = 'innerWidth',
  Margin = 'margin',
  Gutter = 'gutter',
  Column = 'column',
}

export interface GridSettings {
  [GridSetting.Unit]: number
  [GridSetting.FullWidth]: number
  [GridSetting.InnerWidth]: number
  [GridSetting.Margin]: number
  [GridSetting.Gutter]: number
  [GridSetting.Column]: number
  [key: string]: number
}
