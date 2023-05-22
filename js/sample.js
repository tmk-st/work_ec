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