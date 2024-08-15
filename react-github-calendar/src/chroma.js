import chroma from 'chroma-js';

const scale = chroma.scale(['white', 'red']);
console.log(scale.colors(5));