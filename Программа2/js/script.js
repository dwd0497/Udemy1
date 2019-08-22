let menu = document.querySelectorAll('.menu')[0],
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.querySelectorAll('.title')[0],
    adv = document.querySelectorAll('.adv')[0],
    column = document.querySelectorAll('.column')[1],
    newLi = document.createElement('li'),
    anwser = prompt('Какое у вас отношение к технике Apple?', ''),
    otvet = document.getElementById('prompt');

menu.insertBefore(menuItem[2], menuItem[1]);

newLi.classList.add('menu-item');
newLi.textContent = 'Пятый пункт';
menu.appendChild(newLi);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

title.textContent = "Мы продаем только подлинную технику Apple";

column.removeChild(adv);

otvet.textContent = anwser;