const container = document.querySelector('#container');
const paragraph = document.createElement('p');
const header3 = document.createElement('h3');
const divider = document.createElement('div');
const header1 = document.createElement('h1');
const paragraph2 = document.createElement('p');

paragraph.textContent = "i'm red text";
paragraph.style.cssText = 'color: red';
header3.textContent = "i'm blue h3!";
header3.style.cssText = 'color: blue';

divider.style.cssText = 'background-color: pink; border: 1px solid black;';
header1.textContent = "i'm in a div";
paragraph2.textContent = "Me Too!";

divider.appendChild(header1);
divider.appendChild(paragraph2);

container.appendChild(header3);
container.appendChild(paragraph);
container.appendChild(divider);




