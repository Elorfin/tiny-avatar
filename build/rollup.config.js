import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/tiny-avatar.js',
      format: 'iife',
      name: 'TinyAvatar'
    }, {
      file: 'dist/tiny-avatar.min.js',
      format: 'iife',
      name: 'TinyAvatar',
      plugins: [terser()]
    }
  ],

  plugins: [nodeResolve()]
}
