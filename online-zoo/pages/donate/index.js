let burgerMenuIcon = document.getElementsByClassName("burger_menu")[0];
let burgerMenu = document.getElementsByClassName("burger_menu_container");
let burgetMenuX = document.getElementsByClassName("burger_x_icon");
let main = document.getElementsByClassName("main")[0];
let footer = document.getElementsByClassName("footer")[0];

let circle = document.getElementsByClassName("circle_container");
changCircle(circle[5]);

let input = document.getElementById("input_amount");
let price = [5000, 2000, 1000, 500, 250, 100, 50, 25];

input.oninput = function (event) {
  event.target.value = event.target.value.substring(0, 4);
  let index = price.indexOf(parseInt(event.target.value, 10));
  if (index != -1) {
    changCircle(circle[index]);
  } else {
    unselectCircle();
  }
};

document.addEventListener("click", function (event) {
  if (main.style.pointerEvents == "none") {
    if (event.target == burgetMenuX[0] || !event.path.includes(burgerMenu[0])) {
      burgerMenu[0].classList.remove("box-shadow");
      burgerMenu[0].style.top = -357 + "px";
      main.style.pointerEvents = "auto";
      footer.style.pointerEvents = "auto";
    }
  }

  if (event.target == burgerMenuIcon) {
    burgerMenu[0].style.top = 0;
    burgerMenu[0].classList.add("box-shadow");
    main.style.pointerEvents = "none";
    footer.style.pointerEvents = "none";
  }

  let circleItem = event.target.closest(".circle_container");
  if (circleItem) {
    changCircle(circleItem);
    input.setAttribute(
      "placeholder",
      circleItem.children[1].innerHTML.slice(1)
    );
  }
});

function changCircle(circleItem) {
  unselectCircle();

  circleItem.children[0].classList.add("selected");
  circleItem.children[1].classList.add("selected");
}

function unselectCircle() {
  Array.from(circle).forEach((it, index) => {
    it.children[0].classList.remove("selected");
    it.children[1].classList.remove("selected");
  });
}
