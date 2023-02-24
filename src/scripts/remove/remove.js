const enableDeleteCard = () => {
  const deleteBtnList = Array.from(document.querySelectorAll('.element__delete'));
  deleteBtnList.forEach((button) => {
    button.addEventListener("click", () => {
      deleteCard(button);
    });
  });
};

const deleteCard = (button) => {
  button.closest(".element").remove();
};

window.addEventListener("DOMContentLoaded", enableDeleteCard);
