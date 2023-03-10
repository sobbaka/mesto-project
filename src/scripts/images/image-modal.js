export const addModalListeners = () => {
  const cardList = Array.from(document.querySelectorAll('.element'));
  cardList.forEach((card)=>{
    const image = card.querySelector(".element__image");
    image.addEventListener("click", () => {
      fromCardToModal(card);
      openImageModal();
      const modal = document.querySelector(".image-modal");
      modal.addEventListener("click", (e) => {
        const wrapperClick = e.target.classList.contains("image-modal");
        const closeClick = e.target.classList.contains("close");
        if (wrapperClick || closeClick) {
          closeImageModal();
        };
      })
    })
  })

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeImageModal();
    }
})


}

const openImageModal = () => {
  document.querySelector(".image-modal").classList.remove("image-modal_state_hidden");
}

const closeImageModal = () => {
  document.querySelector(".image-modal").classList.add("image-modal_state_hidden");
  setTimeout(removeImage, 550);
}

const removeImage = () => {
  document.querySelector(".image-modal__image").src = '#';
}

const fromCardToModal = (card) => {
  document.querySelector(".image-modal__image").src = card.querySelector(".element__image").src;
  document.querySelector(".image-modal__subtitle").innerHTML = card.querySelector(".element__name").innerHTML;
}
