function changeColor() { //DOM DOcument object model:
    const h2Element = document.getElementById('important-h2-element');
    console.log(h2Element);

    if (h2Element.style.color === 'red') {
        h2Element.style.color = 'black'
        h2Element.style.fontSize = '36px';
        h2Element.innerText = 'Hello world!';

    } else {
        h2Element.style.color = 'red';
        h2Element.style.fontSize = '36px';
        h2Element.innerText = 'Hello world!';
    }
    
}


