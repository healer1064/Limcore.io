import { withStyles } from '@material-ui/core/styles'
import { Slider } from '@material-ui/core'

export const StyledInputRange = withStyles({
  root: {
    width: '100%',
    height: 12,
  },
  track: {
    height: 12,
    backgroundColor: '#fcff00',
    borderRadius: 5,
  },
  rail: {
    height: 12,
    backgroundColor: '#ABC3C8',
    borderRadius: 5,
    opacity: 1,
  },
  thumb: {
    width: 22,
    height: 22,
    boxShadow: `0px 0px 20px 10px rgba(252, 255, 0, 0.5)`,
    backdropFilter: 'blur(16px)',
    backgroundColor: '#fcff00',
    '&:hover': {
      boxShadow: `0px 0px 20px 14px rgba(252, 255, 0, 0.5)`,
      backgroundColor: '#fdff7f',
    },
    '&.Mui-focusVisible': {
      boxShadow: `0px 0px 20px 14px rgba(252, 255, 0, 0.5)`,
      backdropFilter: 'blur(16px)',
    },
    '&.Mui-active': {
      boxShadow: `0px 0px 20px 14px rgba(252, 255, 0, 0.5)`,
      backgroundColor: '#fdff7f',
    },
  },
})(Slider)
