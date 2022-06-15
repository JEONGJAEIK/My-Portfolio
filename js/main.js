const container = document.querySelector('.contents__introduce');
const list = document.querySelector('.contents__list');

window.onload = () => {
  container.classList.remove('none');
  setTimeout(() => {
    list.classList.remove('listNone');
  }, 300);
};