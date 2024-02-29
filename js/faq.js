let item = document.querySelectorAll('.item-faq');
let icon = document.querySelectorAll('.icon');

item.forEach((thisButton, index) => {
    thisButton.addEventListener('click', () => {
        item.forEach(a => a.classList.remove('active'));
        item[index].classList !== 'active'
        ? item[index].classList.add('active')
        : item[index].classList.remove('active');
    });
});

item.forEach((thisButton, index) => {
    thisButton.addEventListener('click', () => {
        icon.forEach(a => a.innerText = '+');
        icon[index].innerText == '+'
        ? icon[index].innerText = '-'
        : icon[index].innerText = '+';
    });
});
