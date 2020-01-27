document.addEventListener("DOMContentLoaded", function() {
  console.log("document is ready");

  //flickery
  const elem = document.querySelector(".main-carousel");
  const flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    wrapAround: true
  });

  //add carousel
}); // end of doc

/*
const. button = document.getElementById("signup-form");​
  button.addEventListener("click", function(event) {​
*/
