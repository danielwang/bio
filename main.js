const step = 1000;
var rightBtn = document.querySelector('.scroller-right-btn');
var leftBtn = document.querySelector('.scroller-left-btn');

document.addEventListener('DOMContentLoaded', function() {
  console.log('loaded');
  if(window.pageXOffset == 0){
    leftBtn.disabled = true;
  }
});

function sideWayScroll(direction) {
  var x, nx;
  x = window.pageXOffset;
  if (direction == 'left') {
    nx = x - step;
  }
  if (direction == 'right') {
    nx = x + step;
  }
  window.scroll({
    top: 0,
    left: nx,
    behavior: 'smooth'
  });
  setTimeout(function () {
    disableBtns(x);
  }, 700);
};


const container = document.querySelector(".container");

container.addEventListener("wheel", (evt) => {
  var xOffset = window.pageXOffset;
  disableBtns(xOffset);
});

function disableBtns(scrollDis){
  var ww = window.innerWidth;
  var xOffset = window.pageXOffset;
  var cw = container.scrollWidth;
  var t = scrollDis + ww * 2;
  // console.log(ww + xOffset);
  // console.log('offset: ' + xOffset + ' cw: ' + cw);
  if (xOffset == 0){
      leftBtn.disabled = true;
    //  console.log('start');
  } else if (ww + xOffset == cw){
      rightBtn.disabled = true;
  } else {
    leftBtn.disabled = false;
    rightBtn.disabled = false;
  }
}
