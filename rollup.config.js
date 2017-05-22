// rollup.config.js 
import typescript from 'rollup-plugin-typescript';
 
export default {
  entry: './main.ts',
 
  plugins: [
    typescript({
  		typescript: require('2.3.2'),
  		noImplicitAny: true,
        module: 'iife',
        target: 'es5',
        allowJs: false
        // baseUrl
	})
  ]
}