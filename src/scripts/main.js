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

  name.innerHTML = document.querySelector(".profile-formm__name").value;
  description.innerHTML = document.querySelector(".profile-form__description").value;
  formSubmit();
})

avatarForm.addEventListener("submit", (e) => {
  e.preventDefault()

  let avatar = document.querySelector(".profile__image");
  avatar.src = document.querySelector(".avatar-form__input ").value;

  formSubmit();

})



function openFormProfile(form) {
  wrapper.classList.remove("form_state_hidden");
  form.classList.remove("form_state_hidden");
}

function closeForm(e, form) {
  let wrapperClick = e.target.classList.contains("form-wrapper");
  let closeClick = e.target.classList.contains("close");
  if (wrapperClick || closeClick) {
    wrapper.classList.add("form_state_hidden");
    form.classList.add("form_state_hidden");
  };
}

function formSubmit() {
  wrapper.classList.add("form_state_hidden");
  this.classList.add("form_state_hidden");
}
