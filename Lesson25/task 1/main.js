//1. Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
//Clicking on the button the font, font size, and color of the paragraph text will be changed.
function jsStyle() {
    const paragraphElement = document.getElementById('text');
    paragraphElement.style.color = 'red';
    paragraphElement.style.fontSize = '25px';
    paragraphElement.style.fontFamily = 'Arial';
}