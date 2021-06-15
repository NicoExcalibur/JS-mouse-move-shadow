const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  // to avoid get near 0 coordonnates on h1
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
}

hero.addEventListener("mousemove", shadow);
