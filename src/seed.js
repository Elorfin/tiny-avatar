import {md5} from './md5'

function seed(input) {
  return md5(decodeURI(encodeURIComponent(input)))
}

function seedFragment(seedStr, start, length = undefined) {
  return seedStr.substr(start, length)
}

export {
  seed,
  seedFragment
}
