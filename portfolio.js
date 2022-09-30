const step = 1000;
var rightBtn = document.querySelector('.scroller-right-btn');
var leftBtn = document.querySelector('.scroller-left-btn');


 // UPDATE: I was able to get this working again... Enjoy!

 var cursor = document.querySelector('.pointer');
 var cursorinner = document.querySelector('.pointer2');


document.addEventListener('DOMContentLoaded', function() {
  fancycursor();
  console.log('loaded');
  if(window.pageXOffset == 0){
    leftBtn.disabled = true;
  }
});


function fancycursor(){
  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  });

  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
  });

  document.addEventListener('mousedown', function(){
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
  });

  document.addEventListener('mouseup', function(){
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
  });
}


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

