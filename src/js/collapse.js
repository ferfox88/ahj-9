export default function collapse() {
  const btn = document.querySelector('.button');

  btn.addEventListener('click', () => {
    const content = document.querySelector('.content');
    content.classList.toggle('collapse');
  });
}
