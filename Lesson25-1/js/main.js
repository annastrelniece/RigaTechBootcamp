// document.getElementById('change-text-btn')
// document.querySelector('#change-text-btn').addEventListener('click', clickHappened);

// function clickHappened() {
//     console.log('some stuff just happened');
// }


document.querySelector('#change-text-btn').addEventListener('click', function () {
    const paragraphElements = document.querySelectorAll('.some-paragraph');
    for (const paragraphElement of paragraphElements) {
        if (paragraphElement.innerHTML === 'Foo') {
            paragraphElement.innerHTML = 'Bar';
        } else {
            paragraphElement.innerHTML = 'Foo';
        }
    }
});

const someFunction = function () {

}

setTimeout(function () {
    alert(123);
}, 2000);

let timer = 0;
setInterval(function () { //for counting= timer
    timer++;
    document.getElementById('timer').innerHTML = timer;
}, 1000);