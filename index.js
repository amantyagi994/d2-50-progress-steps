const checkpoints = document.querySelectorAll(".circle");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const progress = document.querySelector("#progress");

let activeCurrent = 1;

next.addEventListener("click", () => {
  activeCurrent < checkpoints.length ? activeCurrent++ : "";

  update();
});

prev.addEventListener("click", () => {
  activeCurrent > 1 ? activeCurrent-- : "";

  update();
});

function update() {
  checkpoints.forEach((checkpoint, indx) => {
    if (indx < activeCurrent) {
      checkpoint.classList.add("active");
    } else {
      checkpoint.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (checkpoints.length - 1)) * 100 + "%";

  if (activeCurrent === 1) {
    prev.disabled = true;
  } else if (activeCurrent === checkpoints.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
