import {library} from '../assets/parts'
import {color} from './color'
import {seedFragment} from './seed'

function pick(code, assetName) {
  const assetNum = Math.floor((parseInt(code, 16) / 255) * 12)

  return library[assetName][assetNum]
}

function body(seed) {
  return library.body[0]
}

function head(seed) {
  const code = seedFragment(seed, 6, 2)

  return pick(code, 'head')
}

function eyes(seed) {
  const code = seedFragment(seed, 8, 2)

  return pick(code, 'eyes')
}

function mouth(seed) {
  const code = seedFragment(seed, 10, 2)

  return pick(code, 'mouth')
}

function draw(seed, options) {
  //${body(seed)}
  return color(seed, `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" shape-rendering="geometricPrecision" style="background: ${options.background ? 'tertiaryColor': 'transparent'}">
        ${head(seed)}
        ${eyes(seed)}
        ${mouth(seed)}
    </svg>
  `, options)
}

export {
  draw
}
