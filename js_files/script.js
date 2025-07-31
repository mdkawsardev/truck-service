let indicator = document.querySelector('.indicators')
let array = [];
let item = document.querySelectorAll('.item').forEach(i => {
    array.push(i)
});
// When array's items will increase then indicators will be added one by one via this loop
for (let i = 0; i < array.length; i++) {
    let button = document.createElement('button');
    button.setAttribute('data-index', 0 + i)
    indicator.appendChild(button)
}
// This is for active indicators and navigator
let buttons = document.querySelectorAll('.indicators button');
buttons[0].classList.add('active')
let slides = document.querySelector('.slider')
buttons.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const index = parseInt(indicator.getAttribute('data-index'));
        slides.style.transform = `translateX(-${index * 100}%)`;

        buttons.forEach(ind => ind.classList.remove('active'));
        indicator.classList.add('active');
    });
});

let toggle_btn = document.querySelector('.toggle_btn');
let point = 1;
let img = document.querySelector('.toggle_btn img');
let bottom = document.querySelector('.bottom');
toggle_btn.addEventListener('click', () => {
    point ++;
    if(point % 2 === 0) {
        img.src = '../images/cross.png';
        bottom.classList.add('shadow');
    } else if(point % 2 !== 0){
        img.src = '../images/menu.png';
        bottom.classList.remove('shadow');
    }
})

// Preloader
let body = document.body;
body.classList.add('overflow-hidden');
let preloader = document.querySelector('.preloader');
let spiner = document.querySelector('.spiner');

const myLoader = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            preloader.classList.add('d-none')
            body.classList.remove('overflow-hidden');
            resolve;
        }, 2000);
    })
}
myLoader()
