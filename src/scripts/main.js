import { deleteCard } from "./remove/remove.js";
import { toggleLikeState } from "./like/like.js";
import { addModalListeners } from "./images/image-modal.js";

const avatarButton = document.querySelector(".profile__edit-avatar");
const placeButton = document.querySelector(".profile__add-place");
const profileButton = document.querySelector(".profile__edit-info");
const wrapper = document.querySelector(".form-wrapper");

const profileForm = document.querySelector(".profile-form");
const placeForm = document.querySelector(".place-form");
const avatarForm = document.querySelector(".avatar-form");


placeButton.addEventListener("click", (e) => {
  openFormProfile(placeForm);
  wrapper.addEventListener("click", (e)=>{
    closeForm(e, placeForm);
  })
})
avatarButton.addEventListener("click", (e) => {
  openFormProfile(avatarForm);
  wrapper.addEventListener("click", (e)=>{
    closeForm(e, avatarForm);
  })
})
profileButton.addEventListener("click", (e) => {
  openFormProfile(profileForm);
  wrapper.addEventListener("click", (e)=>{
    closeForm(e, profileForm);
  })
})

profileForm.addEventListener("submit", (e) => {
  e.preventDefault()
  let name = document.querySelector(".profile__name");
  let description = document.querySelector(".profile__description");
  name.innerHTML = document.querySelector("#profile-form__name").value;
  description.innerHTML = document.querySelector("#profile-form__description").value;
  clearInputValue(avatarForm);
  formSubmit(profileForm);
})

avatarForm.addEventListener("submit", (e) => {
  e.preventDefault()
  let avatar = document.querySelector(".profile__image");
  avatar.src = document.querySelector("#avatar-form__link").value;
  clearInputValue(avatarForm);
  formSubmit(avatarForm);
})


placeForm.addEventListener("submit", (e) => {
  e.preventDefault()
  let element = document.querySelector('.element').cloneNode(true);
  element.querySelector('.element__name').innerHTML = placeForm.querySelector("#place-form__name").value;
  element.querySelector('.element__image').src = placeForm.querySelector("#place-form__image").value;
  element.querySelector('.element__counter').innerHTML = 0;
  element.querySelector('.element__delete').addEventListener('click', () => {
    deleteCard(element.querySelector('.element__delete'));
  });
  element.querySelector('.element__like-btn').addEventListener('click', () => {
    toggleLikeState(element.querySelector('.element__like-btn'));
  })
  document.querySelector('.elements').appendChild(element);
  clearInputValue(placeForm);
  formSubmit(placeForm);
  addModalListeners();
})

function openFormProfile(form) {
  wrapper.classList.remove("form_state_hidden");
  form.classList.remove("form_state_hidden");
}

function closeForm(e, form) {
  let wrapperClick = e.target.classList.contains("form-wrapper");
  let closeClick = e.target.classList.contains("close");
  if (wrapperClick || closeClick) {
    let animate = wrapper.animate(
      [{opacity:1},{opacity:0}],
      {duration:500}
      );
      animate.addEventListener('finish', () => {
      wrapper.classList.add("form_state_hidden");
      form.classList.add("form_state_hidden");
    })
  };
}

function formSubmit(form) {
  let animate = wrapper.animate(
    [{opacity:1},{opacity:0}],
    {duration:500}
    );
    animate.addEventListener('finish', () => {
    wrapper.classList.add("form_state_hidden");
    form.classList.add("form_state_hidden");
  })
}

function clearInputValue(form) {
  const inputList = Array.from(form.querySelectorAll('.form__input'));
  inputList.forEach((inputElement) => {
    inputElement.value = "";
  })
}
