import {seed} from './seed'
import {draw} from './draw'

const DEFAULT_OPTIONS = {
  debug: true,

  shadow: true,
  light: true,
  border: true,
  background: true,

  // color scheme
  mode: 'complement', // random triad analogous complement fixed
  primaryColor: '#bfd920',
  secondaryColor: '#9a3bef',
  tertiaryColor: 'transparent',

  saturation: [.55, .7],
  lightness: [.45, .7],

  bgSaturation: [.8, .9],
  bgLightness: [.9, .95]
}

export default function renderAvatar(inputString, options = {}) {
  return draw(
    // generate the seed for the avatar render
    seed(decodeURI(encodeURIComponent(inputString))),
    // pass user options to the renderer
    Object.assign({}, DEFAULT_OPTIONS, options))
}
