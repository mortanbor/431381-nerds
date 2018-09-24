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
  popup.classList.remove("modal-error");
});

  form.addEventListener("submit", function (evt) {
if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
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
      popup.classList.remove("modal-error");
    }
  }
});