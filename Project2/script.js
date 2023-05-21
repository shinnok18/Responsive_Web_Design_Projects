$( function() {
  $( "#birthday" ).datepicker();
} );


$(document).ready(function() {
  $.validator.addMethod("phoneFormat", function(value, element) {
    return this.optional(element) || /^[\d+-]+$/.test(value);
  }, "Please enter a valid phone number");
  $('#myForm').validate({
    rules: {
      message: {
        required: true,
      },
      name: 'required',
      surname: 'required',
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        phoneFormat: true
      },
      birthday: 'required',
      'message-title': 'required',
      message2: {
        required: true,
        minlength: 10
      },
      radio: {
        required: true
      }
    },
    messages: {
      message: 'Please select a message subject',
      name: 'Please enter your name',
      surname: 'Please enter your surname',
      email: {
        required: 'Please enter your email address',
        email: 'Please enter a valid email address'
      },
      phone: {
        required: 'Please enter your phone number',
        phoneFormat: 'Please enter a valid phone number'
      },
      birthday: 'Please enter your date of birth',
      'message-title': 'Please enter the message title',
      message2: {
        required: 'Please enter your message',
        minlength: 'Please enter at least 10 characters'
      },
      radio: 'Please select a gender'
    },
    errorPlacement: function(error, element) {
      if (element.attr('name') === 'radio') {
        error.insertAfter($('.radio-group:last'));
      } else if (element.attr('name') === 'message2') {
        error.insertAfter($('#message2'));
      } else {
        error.insertAfter(element);
      }
    },
    submitHandler: function(form) {
      form.submit();
      alert('The form has been submitted successfully.');
    }
  });
});



$(document).ready(function() {
  $("input[type='radio']").checkboxradio();
});



$(document).ready(function() {
    $('.image-link').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });

$(document).ready(function() {
    $('.image-link2').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
});

$(document).ready(function() {
    $('.name2').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
});

$(document).ready(function() {
  $('#video-player').on('click', function() {
    var video = document.getElementById('video');
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});

  $(document).ready(function() {
    var latitude = 41.01393044426409;
    var longitude = 28.54310699572662;

    var map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
      .bindPopup('U.S Polo Center Office')
      .openPopup();
  });









