window.onload = (e) =>{
  const wrapper = document.querySelector(".form-wrapper");
  const formProfile = document.querySelector(".profile-form");
  const profileButton = document.querySelector(".profile__edit-info");

  const closeProfileButton = formProfile.querySelector(".close");

  profileButton.addEventListener("click", openFormProfile);

  wrapper.addEventListener("click", closeFormProfile);

  
  function openFormProfile() {
    wrapper.classList.remove("form_state_hidden");
    formProfile.classList.remove("form_state_hidden");
  }

  function closeFormProfile(e) {

    let wrapperClick = e.target.classList.contains("form-wrapper");
    let closeClick = e.target.classList.contains("close");

    if (wrapperClick || closeClick) {
      wrapper.classList.add("form_state_hidden");
      formProfile.classList.add("form_state_hidden");
    };
  }
}
