/*открываем и закрываем окно с формой обратной связи*/

var link = document.querySelector(".modal-window");
var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".cross-close");
var login = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=e-mail]");

var isStorageSupport = true;
var storage = "";
  
  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

    link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  });

    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

    form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });

     window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });


     /*карта*/

     function initMap() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.9387165,30.3208587)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var image = "../img/decor/map-marker.png";
  var myLatLng = new google.maps.LatLng(59.9387165,30.3208587);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initMap);