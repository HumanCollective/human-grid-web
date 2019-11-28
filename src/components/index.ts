import styled from 'styled-components'
import { gridValue, gridGutter } from '../utils'
import { GridSetting } from '../types'

const Container = styled.div`
  width: 100%;
  max-width: ${gridValue(GridSetting.FullWidth)};
  margin-left: auto;
  margin-right: auto;
`

const Inner = styled.div<{ withMargins?: boolean }>`
  max-width: ${gridValue(GridSetting.InnerWidth)};
  margin-left: ${({ withMargins }) => (withMargins ? gridGutter() : 'auto')};
  margin-right: ${({ withMargins }) => (withMargins ? gridGutter() : 'auto')};
`

export const Grid = {
  Container,
  Inner,
}
