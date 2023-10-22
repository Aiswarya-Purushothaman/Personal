$(document).ready(function () {
  $("#submit-form").submit(function (e) {
    e.preventDefault();

    // Get the form data
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      subject: $("#subject").val(),
      message: $("#message").val(),
    };
    const regex = /^[A-Za-z]+$/;
    // Validate name
    if (formData.name == "") {
      alert("Please enter a name");
      return;
    }

    if(!regex.test(formData.name)){
      alert("Name contains non alphebetic characters");
      return
    }
    
    // Validate name length
    if (formData.name.length < 3) {
      alert("Name should be at least 3 characters long.");
      return;
    }

    // Validate name only contains alphabets and dots
    if (!/^[a-zA-Z.\s]+$/.test(formData.name)) {
      alert("Name must contain only Alphabets and dots.");
      return;
    }

    // Simple email format validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate subject
    if (formData.subject == "") {
      alert("Please enter a subject");
      return;
    }

    // Validate message
    if (formData.message == "") {
      alert("Please enter a message");
      return;
    }

    // Submit the form
    console.log(formData);
    submit(formData);
    $("#submit-form")[0].reset();
  });
});

function submit(data) {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwaMaZZDfE3ngCwNuX2NU6A9W6yydWT9qtZSjvl0Nvy_2QSRGsQWQqnBBKYCK2DFoaRLg/exec",
    data: data,
    method: "post",
    success: function (response) {
      alert("Form submitted successfully");
      window.location.reload();
    },
    error: function (err) {
      alert("Something Error");
    },
  });
}