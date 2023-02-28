export const enableLike = () => {
  const likeBtnList = Array.from(document.querySelectorAll('.element__like-btn'));
  likeBtnList.forEach((likeBtn) => {
    likeBtn.addEventListener("click", (e) => {
      toggleLikeState(likeBtn);
    })
  });
}

const like = (button) => {
  button.nextElementSibling.innerHTML = parseInt(button.nextElementSibling.innerHTML) + 1;
  button.classList.add("element__like-btn_is-active");
}

const dislike = (button) => {
  button.nextElementSibling.innerHTML = parseInt(button.nextElementSibling.innerHTML) - 1;
  button.classList.remove("element__like-btn_is-active");
}

export const toggleLikeState = (button) => {
  if (button.classList.contains("element__like-btn_is-active")) {
    dislike(button);
  } else {
    like(button);
  }
}

