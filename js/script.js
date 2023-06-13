// クリック時のスクロールをスムーズにする
document.addEventListener('click', function(event) {
  if (event.target.matches('a[href^="#"]')) {
    event.preventDefault();
    var target = document.querySelector(event.target.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

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

// 写真切り替え
var button = document.getElementById('toggleButton');
var element1 = document.getElementById('page');
var element2 = document.getElementById('page2');
var element3 = document.getElementById('page3');
var elements = [element1, element2, element3];
var counter = 0;

elements[1].style.opacity = 0; // 初期状態で一番目の要素を表示する
elements[2].style.opacity = 0;

elements[0].style.zIndex = 3;  // cssでhover効果付けるため順番指定
elements[1].style.zIndex = 2;
elements[2].style.zIndex = 1;

function handleClick() {
  elements[counter].style.opacity = 0;
  elements[counter].style.zIndex = 1;
  counter++;
  if (counter >= elements.length) { // カウンターが要素の数以上になった場合、最初の要素に戻す
    counter = 0;
  }
    elements[counter].style.opacity = 1;
    elements[counter].style.zIndex = 3;
}
button.addEventListener('click', handleClick);

// フッターまでスクロールするとヘッダーの固定を解除する
var fixedHeader = document.querySelector('header');
var footer = document.querySelector('.news_letter');
var unfixedClass = 'unfixed';

var elementPosition = footer.getBoundingClientRect().top + window.scrollY;

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= elementPosition) {
    fixedHeader.classList.add(unfixedClass);
  } else {
    fixedHeader.classList.remove(unfixedClass);
  }
});
