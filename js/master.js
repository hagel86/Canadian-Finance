var title = document.querySelectorAll(".column");
var style = window.getComputedStyle(document.documentElement);
init();

function init() {
  changeBackground();
}


function changeBackground() {
  for (i = 0; i < title.length; i++){
    title[i].addEventListener("mouseover", function() {
      document.documentElement.style.setProperty('--backgroundImg', 'url(' + this.dataset.src + ')');
      console.log(this.dataset.src);

    });
  };
};
