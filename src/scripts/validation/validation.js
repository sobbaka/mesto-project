const formElement = document.querySelector(".avatar-form");
const formInput = formElement.querySelector(".form__input");
const formError = formElement.querySelector(`#${formInput.id}-error`);

const submit = formElement.querySelector(".form__submit");


const showError = (input, errorMessage) => {
  input.classList.add("form__input_state_error");
  formError.textContent = errorMessage;
}

const hideError = (input) => {
  input.classList.remove("form__input_state_error");
  formError.textContent = "";
}

const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showError(formInput, formInput.validationMessage);
  } else {
    hideError(formInput);
  }
}


formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
  checkInputValidity();
});

submit.addEventListener("click", function () {
  checkInputValidity();
});

formInput.addEventListener("input", function () {
  checkInputValidity();
});
