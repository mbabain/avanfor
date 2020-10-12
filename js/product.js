const plus = document.querySelector('.num-plus');
const minus = document.querySelector('.num-minus');

minus.addEventListener('click', () => {
    if (document.querySelector('.in-num').value > 1) {
        document.querySelector('.in-num').value--;
    }
});

plus.addEventListener('click', () => {
        document.querySelector('.in-num').value++;
});