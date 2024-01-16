import tinycolor from 'tinycolor2'

import {seedFragment} from './seed'

function correctColor(originalColor, saturationThreshold, lightnessThreshold) {
  const color = tinycolor(originalColor).toHsl()

  let saturation = color.s
  if (saturationThreshold) {
    if (color.s <= saturationThreshold[0]) {
      saturation = saturationThreshold[0]
    } else if (color.s >= saturationThreshold[1]) {
      saturation = saturationThreshold[1]
    }
  }

  let lightness = color.l
  if (lightnessThreshold) {
    if (color.l <= lightnessThreshold[0]) {
      lightness = lightnessThreshold[0]
    } else if (color.l >= lightnessThreshold[1]) {
      lightness = lightnessThreshold[1]
    }
  }

  return tinycolor({h: color.h, s: saturation, l: lightness})
}

function color(seed, content, options ) {
  let primaryColor = correctColor('#'+seedFragment(seed, 0, 6), options.saturation, options.lightness)
  // primaryColor = tinycolor({h: (parseInt(seedFragment(seed, 0, 2), 16) / 255) * 100, s: options.saturation[0], l: options.lightness[0]})

  let colors
  let secondaryColor
  let tertiaryColor
  switch (options.mode) {
    case 'random':
      secondaryColor = correctColor('#'+seedFragment(seed, 5, 6), options)
      tertiaryColor = correctColor('#'+seedFragment(seed, 9, 6), options)
      break

    case 'triad':
      colors = primaryColor.triad()
      secondaryColor = colors[1]
      tertiaryColor = colors[2]
      break

    case 'analogous':
      colors = primaryColor.analogous()
      secondaryColor = colors[1]
      tertiaryColor = colors[2]
      break

    case 'complement':
      colors = primaryColor.splitcomplement()
      secondaryColor = colors[2]
      tertiaryColor = colors[1]
      break

    case 'fixed':
      primaryColor = tinycolor(options.primaryColor)
      secondaryColor = tinycolor(options.secondaryColor)
      tertiaryColor = tinycolor(options.tertiaryColor)
      break
  }

  return content
    .replaceAll('#29abe2', primaryColor.toHexString())
    .replaceAll('#29ABE2', primaryColor.toHexString())
    .replaceAll('#ff7bac', secondaryColor.toHexString())
    .replaceAll('#FF7BAC', secondaryColor.toHexString())
    .replace('tertiaryColor', correctColor(tertiaryColor, options.bgSaturation, options.bgLightness).toHexString())
}

export {
  color
}
