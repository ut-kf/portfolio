// ローディング終わった時の処理
const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
  loading.classList.add('loading__loaded');
})


// ページの読み込み時
document.addEventListener('DOMContentLoaded', () => {
  const text = 'Coming Soon...';
  const target = document.querySelector('.works__coming');
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});
