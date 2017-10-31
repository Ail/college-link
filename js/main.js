$(document).ready(function(){


// menu bar stick top
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });

// onclick menu item active and menu item remove active
  $("a.nav-link").click(function() {
    $("a.nav-link.active").removeClass("active");
    $(this).addClass("active")
  })

// Errors
  $("#username_error_msg").hide();
  $("#email_error_msg").hide();
  $("#text_error_msg").hide();

  var username_error = false;
  var email_error = false;
  var text_error = false;

  $("#name").focusout(function() {
    check_name();

  });

  $("#email").focusout(function() {
    check_email();
  });

  $("#subject").focusout(function() {
    check_text();
  });

  function check_name() {

    var username_length = $("#name").val().length;
    if(username_length < 5 || username_length > 20){
      $("#username_error_msg").html("should be between 5-20 characters");
      $("#username_error_msg").show();
      username_error = true;
    } else {
      $("#username_error_msg").hide();
    }
  }

  function check_email() {
    var pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (pattern.test($("#email").val())) {
      $("#email_error_msg").hide();
    } else {
      $("#email_error_msg").html("Invalid email address");
      $("#email_error_msg").show();
      email_error = true;
    }
  }

  function check_text() {

    var username_length = $("#subject").val().length;
    if(username_length < 5){
      $("#text_error_msg").html("should be more than 5 characters");
      $("#text_error_msg").show();
      username_error = true;
    } else {
      $("#text_error_msg").hide();
    }
  }

  $("#form").submit(function() {

    username_error = false;
    email_error = false;
    text_error = false;

    check_name();
    check_email();
    check_text();

    if(username_error == false && email_error == false && text_error == false) {
      return true;
    }else {
      return false;
    }



  })



});
