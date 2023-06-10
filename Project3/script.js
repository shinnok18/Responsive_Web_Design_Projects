$( function() {
  $( "#birthday" ).datepicker();
} );


$(document).ready(function() {
  $.validator.addMethod("phoneFormat", function(value, element) {
    return this.optional(element) || /^[\d+-]+$/.test(value);
  }, "Please enter a valid phone number");
  
  $('#myForm').submit(function(e) {
    e.preventDefault(); 
    
    if ($('#myForm').valid()) {
      if (confirm("Are you sure you want to submit the form?")) {
        this.submit(); 
      } else {

      }
    }
  });

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



 // AJAX isteği gönderme
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var products = JSON.parse(this.responseText);
    renderProducts(products);
  }
};
xhttp.open("GET", 'products.json', true);
xhttp.send();

// Ürünleri HTML'e dökme
function renderProducts(products) {
  var container = document.getElementById("products-container");

  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var box = document.createElement("div");
    box.className = "box";

    var imageLink = document.createElement("a");
    imageLink.href = product.image;
    imageLink.className = "image-link";
    imageLink.title = product.name;
    
    var image = document.createElement("img");
    image.src = product.image;
    image.alt = "Product Image";
    
    imageLink.appendChild(image);
    
    var boxBottom = document.createElement("div");
    boxBottom.className = "box-bottom";
    
    var info = document.createElement("div");
    info.className = "info";
    
    var titleLink = document.createElement("a");
    titleLink.href = product.image;
    titleLink.className = "image-link2";
    titleLink.title = product.name;
    
    var title = document.createElement("span");
    title.className = "title";
    title.innerText = product.category;
    
    titleLink.appendChild(title);
    
    var nameLink = document.createElement("a");
    nameLink.href = product.image;
    nameLink.className = "name2";
    nameLink.title = product.name;
    nameLink.innerText = product.name;
    
    info.appendChild(titleLink);
    info.appendChild(nameLink);
    
    boxBottom.appendChild(info);
    
    box.appendChild(imageLink);
    box.appendChild(boxBottom);
    
    container.appendChild(box);
  }
}


  



