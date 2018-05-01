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

  //Mobile navigation
  $(".mobile-nav").on("click",function(){
    // $(" header nav ul").toggleClass("open");

      var l = $(" header nav ul");
      if (l.hasClass("open")) {
          l.removeClass("open");
          $("header .hexa").attr("style", "");

      } else {
          l.toggleClass("open");
          $("header .hexa").css({"display": "block", "animationDelay": "2s"});
      }
    });

});
