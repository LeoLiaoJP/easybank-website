// script.js

// 选择 hamburger 按钮、nav__links 容器以及 close 按钮
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const navClose = document.querySelector('.nav__close');

// 点击 hamburger icon 时打开菜单
navToggle.addEventListener('click', () => {
  navLinks.classList.add('open');
});

// 点击 close icon 或菜单项时关闭菜单
navClose.addEventListener('click', () => {
  navLinks.classList.remove('open');
});

// 如果需要点击某个链接后自动关闭，也可以给所有 li a 添加监听
const navItemLinks = navLinks.querySelectorAll('li a');
navItemLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});
