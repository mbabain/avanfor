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

document.querySelectorAll('.section-product-tabs-name').forEach(el => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.section-product-tabs-name').forEach(
            child => child.classList.remove('section-product-tabs-name--active'));
        document.querySelectorAll('.section-product-tabs-text').forEach(
            child => child.classList.remove('section-product-tabs-text--active'));
            
            el.classList.add('section-product-tabs-name--active');
            document.getElementById(id).classList.add('section-product-tabs-text--active');
    });

});

document.querySelector('.section-product-tabs-name').click();