$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});


// script.js

document.addEventListener("DOMContentLoaded", function() {
    const scrollRight = document.getElementById("scrollRight");
    const productListContainer = document.querySelector(".product-list-container");
  
    console.log("Initial Scroll Left:", productListContainer.scrollLeft);
  
    scrollRight.addEventListener("click", function() {
      console.log("Clicked!");
      productListContainer.scrollBy({
        top: 0, 
        left: 620, 
        behavior: 'smooth'
      });
      console.log("Scroll Left After:", productListContainer.scrollLeft);
    });
  });
  