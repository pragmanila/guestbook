$(document).ready(function(){
  //Page scroll
  var headerHeight = $("header").outerHeight(); //Get this the header Height
  $(".slide-section").on("click", function(e){
    var linkHref = $(this).attr("href"); //this is to get the href value.
    var s = $("html, body").animate({
      scrollTop: $(linkHref).offset().top
    }, 1000);
    e.preventDefault();//just to prevent the default value on the page
  });


});
