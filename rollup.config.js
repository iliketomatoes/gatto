import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
    entry: 'lib/index.js',
    plugins: [babel(babelrc())],
    external: external,
    targets: [{
        dest: pkg['main'],
        format: 'umd',
        moduleName: 'customSwipeEvent',
        sourceMap: true,
        exports: 'default'
    }, {
        dest: pkg['jsnext:main'],
        format: 'es',
        sourceMap: true
    }]
};
