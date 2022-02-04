import React from 'react'
import { withStyles, alpha } from '@material-ui/core/styles'
import { Slider } from '@material-ui/core'

export const StyledInputRange = withStyles({
  root: {
    width: 523,
    height: 12,
  },
  track: {
    height: 12,
    backgroundColor: '#fcff00',
    borderRadius: 5,
  },
  rail: {
    height: 12,
    backgroundColor: '#abc3c8',
    borderRadius: 5,
  },
  thumb: {
    width: 22,
    height: 22,
    backgroundColor: '#fcff00',
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 14px ${alpha('#fcff00', 0.2)}`,
    },
    '&.Mui-active': {
      boxShadow: `0px 0px 0px 25px ${alpha('#fcff00', 0.4)}`,
    },
  },
})(Slider)
