// トップ　スライダー
const sliders = document.querySelectorAll(".top_container");

sliders.forEach((slider, cont_slider) => {
  let slideIndex = 1;
  let slides = slider.querySelectorAll(".slide");
  let prev = document.createElement("span");
  prev.classList.add("prev");
  prev.innerHTML = "&#10094;";
  slider.append(prev);
  let next = document.createElement("span");
  next.classList.add("next");
  next.innerHTML = "&#10095;";
  slider.append(next);

  let dots = document.createElement("div"); // ページ位置ドット
  dots.classList.add("dots");
  slider.append(dots);

  slides.forEach((slide, cont_slide) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dots.append(dot);
    dot.addEventListener("click", (e) => {
      slideIndex = cont_slide + 1;
      slides.forEach((slide, cont_slide) => {
        slide.style = "left: -" + (slideIndex - 1) * 100 + "%;";
      });
    });

    let numberText = document.createElement("div"); // ページカウント
    numberText.classList.add("numbertext");
    numberText.innerText = cont_slide + 1 + "/" + slides.length;
    slide.insertAdjacentElement("afterbegin", numberText);
  });

  next.addEventListener("click", (e) => {
    slideIndex == slides.length ? (slideIndex = 1) : slideIndex++;
    slides.forEach((slide, cont_slide) => {
      slide.style = "left: -" + (slideIndex - 1) * 100 + "%;";
    });
  });

  prev.addEventListener("click", (e) => {
    slideIndex == 1 ? (slideIndex = slides.length) : slideIndex--;
    slides.forEach((slide, cont_slide) => {
      slide.style = "left: -" + (slideIndex - 1) * 100 + "%;";
    });
  });
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

function handleClick() {
  elements[counter].style.opacity = 0;
  counter++;
  if (counter >= elements.length) { // カウンターが要素の数以上になった場合、最初の要素に戻す
    counter = 0;
  }
    elements[counter].style.opacity = 1;
}
button.addEventListener('click', handleClick);
