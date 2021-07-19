const sounds = document.querySelectorAll('.sound');
const pads = document.querySelectorAll('.pads div');
const visual = document.querySelector('.visual')
let colors = [];

// https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value
const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`

const createBubbles = (index) => {
    const newElement = document.createElement('div');
    visual.append(newElement);
    newElement.style.backgroundColor = colors[index];
    newElement.style.animation = 'jump 1s ease';

    newElement.addEventListener('animationend', function() {
        visual.removeChild(this);
    });

}

pads.forEach((pad, index) => {
    const color = rgba2hex(window.getComputedStyle(pad).backgroundColor);
    colors.push(color);

    pad.addEventListener('click', () => {
        sounds[index].currentTime = 0;
        sounds[index].play();

        createBubbles(index);
    });

})