countclick=0;
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonne navigation sur le site du voilier EVA 1';

document.querySelector('html').addEventListener('click', function() { 
	countclick++;
});
