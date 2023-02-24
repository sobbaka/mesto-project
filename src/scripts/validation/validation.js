
// Показать сообщение об ошибке
const showError = (formElement, inputElement, errorMessage) => {
  const formError = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("form__input_state_error");
  formError.textContent = errorMessage;
  formError.classList.add("form__input-error_state_active");
}

// Скрыть сообщение об ошибке
const hideError = (formElement, inputElement) => {
  const formError = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("form__input_state_error");
  formError.textContent = "";
  formError.classList.remove("form__input-error_state_active");
}


// Проверить есть ли невалидное поле
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};


// Функция принимает массив полей
const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add('form__submit_inactive');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('form__submit_inactive');
  }
};


// Повесить ивенты проверки на все поля формы
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit');

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};



// Получить все формы, пройтись по каждой форме и повесить на каждое поле проверку
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();
