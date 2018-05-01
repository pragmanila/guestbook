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

    //SEND
    const button = document.getElementById('btn-send');
    const name = document.getElementById('name');
    const subject = document.getElementById('subject');
    const message1 = document.getElementById('message');
    const list = document.querySelector('.guest-list .list-content');
    const addForms = document.forms['add-guest'];

    button.addEventListener('click',function(e){
        e.preventDefault();
        if (name.value == "" || subject.value == "" || message1.value == "") {
          if (name.value == "") {
            alert("Please input a Name");
            name.focus();
          } else if (subject.value == "") {
            alert("Please input a Subject ");
            subject.focus();
          } else if (message1.value == "") {
            alert("Please input a Message ");
            message1.focus();
          }
            return false;

        } else {
          // get the elements
          const guestUser = document.createElement('div');
          const userContent = document.createElement('div');
          const titleUser = document.createElement('h3');
          const user = document.createElement('h3');
          const date = document.createElement('p');
          const message = document.createElement('p');

          //call and Add Class
          guestUser.classList.add('guest-user');
          userContent.classList.add('user-content');
          titleUser.classList.add('title-user');
          user.classList.add('users');
          date.classList.add('date');
          message.classList.add('message');

          //Append Dom
          guestUser.appendChild(userContent);
          userContent.appendChild(titleUser);
          userContent.appendChild(user);
          userContent.appendChild(date);
          userContent.appendChild(message);
          list.appendChild(guestUser);

          //add Content
          user.textContent = name.value;
          titleUser.textContent = subject.value;
          var dateToday = new Date();
          var month = dateToday.getMonth();
          var year = dateToday.getFullYear();
          var day = dateToday.getDate();
          year = year.toString().substr(-2);
          month = (month + 1).toString();
          date.textContent = month + " / " + day + " / " + year + " - " + dateToday.getHours() + ":" + dateToday.getMinutes() + ":" + dateToday.getSeconds();

          message.textContent = message1.value;

          //to clear form
          addForms.reset();
          }

    });

});
