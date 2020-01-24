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

  //add carousel js
}); // end of doc
