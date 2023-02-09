let line1 = document.querySelector(".line-1");
let line2 = document.querySelector(".line-2");

window.onscroll = function() {
   let pos = window.scrollY;
   line1.style.left = `${pos}px`;
   line2.style.right = `${pos}px`;
};

