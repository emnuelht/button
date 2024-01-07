const btn = document.querySelector('.btn');
let click = false;

btn.addEventListener('click', () => {
    if (click) {
        btn.style.transform = 'translate(0,0)';
        btn.style.background = '#000';
        document.body.style.background = '#000';
        click = false;
    } else {
        btn.style.transform = 'translate(100%,0)';
        btn.style.background = '#fff';
        document.body.style.background = '#fff';
        click = true;
    }
});