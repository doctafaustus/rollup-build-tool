import helloWorld from './mods/hello-world.js';
import testHTML from './html/testHTML.html';
import more from '@/html/inner/more.html';
import { waitFor } from 'clearhead-utilities';
import css from './styles/v1.scss';
import smallest from 'smallest';

console.log('v1');
document.head.insertAdjacentHTML('beforeend', `<style id="test">${css}</style>`);
console.log('testHTML', testHTML);
helloWorld();
waitFor(
  () => document.body,
  body => console.log('BODY', body)
);
document.body.insertAdjacentHTML('afterbegin', testHTML);
document.body.insertAdjacentHTML('afterbegin', more);
console.log('smallest', smallest([321, 213, 34, 444, 45345, 32423]));