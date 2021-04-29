import globby from 'globby';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import html from 'rollup-plugin-html';
import styles from 'rollup-plugin-styles';
import alias from '@rollup/plugin-alias';
import del from 'rollup-plugin-delete';
import banner from 'rollup-plugin-banner';


// Clean dist folder on first run
del({ targets: 'dist/*' }).buildStart();

// Create a rollup config file for each entry JS file
const configFiles = globby.sync('./src/*.js').map(entryFile => {
  
  const filenameNoExtension = (entryFile.match(/src\/(.*)\.js/) || [])[1];
  
  return {
    input: entryFile,
    output: {
      file: `./dist/${filenameNoExtension}.bundle.js`,
      format: 'iife'
    },
    plugins: [
      resolve(),
      commonjs(),
      terser(),
      html({ include: '**/*.html' }),
      banner('jshint ignore: start'),
      styles({ mode: 'extract', onExtract: () => false }),
      babel({ 
        exclude: 'node_modules/**',
        extensions: ['.js'],
        presets: ['@babel/preset-env']
      }),

      alias({
        entries: [
          { find: '@', replacement: './' }
        ]
      })
    ]
  };
});

export default configFiles;
