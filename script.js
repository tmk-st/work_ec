// クリック時のスクロールをスムーズにする
document.addEventListener('click', function(event) {
  if (event.target.matches('a[href^="#"]')) {
    event.preventDefault();
    const target = document.querySelector(event.target.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

// スクロールでメイン画像をズームする
window.addEventListener('scroll', () => {
  let elem = document.getElementById('top');
  let scrollY = window.scrollY/10;
  elem.style.backgroundSize = 100 + scrollY + '%';
});

// フェードイン
function applyFadeInEffect(elements) {
  window.addEventListener('scroll', () => {
    for (let i = 0; i < elements.length; i++) {
      const rect = elements[i].getBoundingClientRect().top;
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight; // 現在のブラウザの高さ
      if (scroll > offset - windowHeight + 100) {
        elements[i].classList.add('scroll_in');
      }
    }
  });
}

let fadeInTargets = document.querySelectorAll('.fade_in_up');
applyFadeInEffect(fadeInTargets);

let fadeInTargetsLeft = document.querySelectorAll('.fade_in_left');
applyFadeInEffect(fadeInTargetsLeft);


// カウントダウンタイマー
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function countdown() {
  const now = new Date();
  const after = new Date(now.getFullYear(),now.getMonth(),now.getDate()+3); // 3日後の0:00を取得
  const diff = after.getTime() - now.getTime(); // 時間の差を取得（ミリ秒）

  // ミリ秒から単位を修正
  const calcDay = Math.floor(diff / 1000 / 60 / 60 / 24);
  const calcHour = Math.floor(diff / 1000 / 60 / 60) -48;
  const calcMin = Math.floor(diff / 1000 / 60) % 60;
  const calcSec = Math.floor(diff / 1000) % 60;

  // 取得した時間を表示（2桁表示）
  day.innerHTML = calcDay < 10 ? '0' + calcDay : calcDay;;
  hour.innerHTML = calcHour < 10 ? '0' + calcHour : calcHour;
  min.innerHTML = calcMin < 10 ? '0' + calcMin : calcMin;
  sec.innerHTML = calcSec < 10 ? '0' + calcSec : calcSec;
}
countdown();
setInterval(countdown,1000);


// 画像ズーム、スライド
// const zoomElement = document.getElementById('gallery_bg');

// zoomElement.classList.remove('zoom-out');
// zoomElement.classList.add('zoom-in');


// フッターまでスクロールするとヘッダーの固定を解除する
const fixedHeader = document.querySelector('header');
const footer = document.querySelector('footer');
const unfixedClass = 'unfixed';

const elementPosition = footer.getBoundingClientRect().top + window.scrollY;

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= elementPosition + 1000) {
    fixedHeader.classList.add(unfixedClass);
  } else {
    fixedHeader.classList.remove(unfixedClass);
  }
});
