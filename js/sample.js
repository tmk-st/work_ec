// トップ　スライダー
const sliders = document.querySelectorAll(".top");

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

  let dots = document.createElement("div");
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

    let numberText = document.createElement("div");
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
  const calcHour = Math.floor((diff / 1000 / 60 / 60) % 60) - 48;
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