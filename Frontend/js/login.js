$(document).ready(function () {
  $(".submit-login").click(function (e) {
    e.preventDefault();
    const userInput = {
      email: $("#login-email").val(),
      password: $("#login-password").val(),
    };
    $.ajax({
      type: "POST",
      url: "http://localhost:8000/admin/login",
      data: userInput,
      success: function (result) {
        console.log(result);
        if (result.token) {
          window.localStorage.setItem("token", result.token);
          window.location.href =
            "/C:/Users/Yousef/Desktop/Project/Frontend/pages/addRemoveProducts.html";
        } else {
          $(".login-error").removeClass("d-none");
        }
      },
    });
  });
});
