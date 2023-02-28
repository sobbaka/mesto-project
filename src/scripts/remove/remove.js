export const enableDeleteCard = () => {
  const deleteBtnList = Array.from(document.querySelectorAll('.element__delete'));
  deleteBtnList.forEach((button) => {
    button.addEventListener("click", () => {
      deleteCard(button);
    });
  });
};

export const deleteCard = (button) => {
  button.closest(".element").remove();
};
