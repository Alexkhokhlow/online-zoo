let petItem = document.getElementsByClassName("pets_table_item");
let petTable = document.getElementsByClassName("pets_table");
let pets_circle_left = document.getElementsByClassName("pets_circle")[0];
let pets_circle_right = document.getElementsByClassName("pets_circle")[1];
let arrowSlider = document.getElementsByClassName('pets_circle_arrow')
let animals = document.getElementsByClassName("pets_table_invisible")[0].children

let burgerMenuIcon = document.getElementsByClassName('burger_menu')[0]
let burgerMenu = document.getElementsByClassName('burger_menu_container')
let burgetMenuX = document.getElementsByClassName('burger_x_icon')
let header = document.getElementsByClassName('header')[0]
let main = document.getElementsByClassName('main')[0]
let footer = document.getElementsByClassName('footer')[0]

let testimonialItem = document.getElementsByClassName('testimonials-slider_item')
let testimonialSlider = document.getElementsByClassName('testimonials-slider')
let progresBar = document.getElementsByClassName('progress-bar_item')

let burgerComment = document.getElementsByClassName('comment_burger')[0]


let nameMas = ['Alex', 'Peter', 'Brandon', 'Masolok', 'Bolik', 'Pavel',"Krasav", 'Dima', 'Molotok', 'Kazan', 'Anna']
let LastNameMas = ['Molik', 'Kolkes', 'Peretson', 'Hohlo', "Varsed", 'Masders', 'Farwesz', 'Nofrans','Uletros','Zosawq']
let progresBarInfo = 0

  let screenWidth = window.screen.availWidth
  
  if(screenWidth >980){
    setTestionalsItem()
  } 

function setTestionalsItem(){
  let result = [];
  for (let i = 0; i < 11; i++) {
    let item = 0;
    do {
      item = Math.floor(Math.random() * 6);
    } while (result.includes(item));
    result.push(item);
    result = result.length == 6 ? [] : result
  testimonialItem[item].children[0].children[0].children[1].children[0].innerHTML = nameMas[Math.floor(Math.random() * 10)] + " " + LastNameMas[Math.floor(Math.random() * 10)]
  testimonialSlider[0].appendChild(testimonialItem[item].cloneNode(true))
}
 
for (let i = 0; i < 6; i++) {
  testimonialSlider[0].children[0].remove();
}
if(screenWidth<1001){
  progresBar[0].setAttribute('max','8')
}
}

progresBar[0].addEventListener('input', function(e){
    animationProgresBar(progresBar[0].value)
  })

function animationProgresBar(progressBarData) {
  let startCardination = parseInt(testimonialSlider[0].style.right.match(/\d+/)) ? parseInt(testimonialSlider[0].style.right.match(/\d+/)) : 0
  let start = Date.now()
  let i = 0
  let dataItem = 0
  if( screenWidth > 1000){
    dataItem = 297
  } else if (screenWidth > 640){
    dataItem = 323
  }
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    if (timePassed >= 120) {
      return;
    }
    draw(++i);
  }, 15);

  function draw(i1) {
    testimonialSlider[0].style.right = startCardination + (progressBarData*dataItem-startCardination)*i1/7 +'px'

  }
}


let bottonNoActive = [pets_circle_left,pets_circle_right,arrowSlider[0],arrowSlider[1]]

let sliderInfo = getSLiderData()
function getSLiderData(){
  let screenSize =  window.screen.availWidth
  let sliderData = {
    1600 : [1191, 2999,6],
    1000 : [956, 2419,6],
    640 : [620, 1600,4],
  }

  if( screenSize >1000){
    return sliderData[1600]
  } else if(screenSize > 640){
    return sliderData[1000]
  } else{
    return sliderData[640]
  } 
}

remove(0,6)
addItemTOSlider('left',0,sliderInfo[2])
addItemTOSlider('right',petTable[0].children.length - sliderInfo[2],sliderInfo[2])

document.addEventListener("click", function (event) {
  if(main.style.pointerEvents == 'none'){
    if(event.target == burgetMenuX[0] || !event.path.includes(burgerMenu[0])){
      burgerMenu[0].classList.remove('box-shadow')
      burgerMenu[0].style.top = - 357 + 'px'
      main.style.pointerEvents = 'auto'
      footer.style.pointerEvents = 'auto'
      header.style.pointerEvents = 'auto'

    } 
     if(event.path.includes(burgerComment.children[0]) || event.path.includes(burgerMenu[0])){
      main.style.pointerEvents = 'none'
      footer.style.pointerEvents = 'none'
      return
    }
    if(event.target == burgetMenuX[1] || !event.path.includes(burgerComment)){
      burgerComment.classList.remove('visible')
      burgerComment.classList.remove('box-shadow')
      main.style.pointerEvents = 'auto'
      footer.style.pointerEvents = 'auto'
      header.style.pointerEvents = 'auto'

    }
  

  }

    let itemTest = event.target.closest('.testimonials-slider_item')
  if(itemTest){

    burgerComment.classList.add('visible')
    burgerComment.classList.add('box-shadow')
    burgerComment.children[0].replaceWith(itemTest.cloneNode(true))
    burgerComment.children[0].children[0].style.pointerEvents = 'auto'
    burgerComment.children[0].style.pointerEvents = 'auto'
    burgerComment.children[0].style.display = 'flex'
    burgerComment.children[0].style.height = '387px'
    burgerComment.children[0].style.marginTop = '0px'
    burgerComment.children[0].children[0].children[1].style.overflow = 'inherit'
     main.style.pointerEvents = 'none'
     footer.style.pointerEvents = 'none'
     header.style.pointerEvents = 'none'

  }

  if(event.target == burgerMenuIcon){
    burgerMenu[0].style.top = 0
    burgerMenu[0].classList.add('box-shadow')
    main.style.pointerEvents = 'none'
    footer.style.pointerEvents = 'none'
  }


  if (event.target == pets_circle_left || event.target == arrowSlider[0]) {
    addItemTOSlider('left' ,0,sliderInfo[2])
    animationSlider("left",0,sliderInfo);
  }
  if (event.target == pets_circle_right || event.target == arrowSlider[1]) {
    animationSlider("right",petTable[0].children.length - sliderInfo[2],sliderInfo);
  }
});

function remove(n,screenSizeData) {
  for (let i = 0; i < screenSizeData; i++) {
    petTable[0].children[n].remove();
  }
}

function addItemTOSlider(info,removeData,screenSizeData) {
  let result = [];
  for (let i = 0; i < screenSizeData; i++) {
    let item = 0;
    do {
      item = Math.floor(Math.random() * 8);
    } while (result.includes(item));
    result.push(item);

    if (info == "left") { petTable[0].appendChild(animals[item].cloneNode(true));
    } else{
      petTable[0].insertBefore( animals[item].cloneNode(true), petTable[0].firstChild);
    }
  }
}

function animationSlider( info, removeData, screenSizeData) {
  let start = Date.now();
  bottonNoActive.forEach( it => it.style.pointerEvents = 'none')
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    if (timePassed >= screenSizeData[1]) {
      petTable[0].style.right = screenSizeData[0] + "px";
      clearInterval(timer);
      remove(removeData,screenSizeData[2]);
      if(info == 'right'){
        addItemTOSlider('right' ,petTable[0].children.length - sliderInfo[2],sliderInfo[2])
        petTable[0].style.right = screenSizeData[0] + "px";
        } else {
          remove(0,screenSizeData[2])
          addItemTOSlider('right' ,petTable[0].children.length - sliderInfo[2],sliderInfo[2])
        }
      bottonNoActive.forEach( it => it.style.pointerEvents = 'auto')
      return;
    }
    draw(timePassed, info);
  }, 20);

  function draw(timePassed) {
    petTable[0].style.right = info == "left" ? screenSizeData[0] + timePassed / 2.5 + "px" : screenSizeData[0] - timePassed / 2.5 + "px";
  }
}
