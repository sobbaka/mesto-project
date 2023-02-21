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
