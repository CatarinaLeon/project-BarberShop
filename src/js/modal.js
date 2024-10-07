const refs = {
        openModalBtn: document.querySelector("[data-open-btn]"),
        openModalBtnAbout: document.querySelector("[data-open-button]"),
        openModalBtnPrices: document.querySelector("[data-open-btn-prices]"),
        openModalBtnModal: document.querySelector("[data-open-btn-modal]"),
        closeModalBtn: document.querySelector("[data-close-btn]"),
        backdrop: document.querySelector("[data-backdrop]"),
      };
      
refs.openModalBtn.addEventListener("click", toggleModal);
refs.openModalBtnAbout.addEventListener("click", toggleModal);
refs.openModalBtnPrices.addEventListener("click", toggleModal);
refs.openModalBtnModal.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", closeModal);
refs.backdrop.addEventListener("click", closeModal);
// refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.backdrop.classList.toggle("is-hidden");
  document.body.classList.add('no-scroll');
  window.addEventListener('keydown', onKeyPressEsc);
}

function closeModal() {
  refs.backdrop.classList.add("is-hidden");
  document.body.classList.remove('no-scroll');
  window.removeEventListener('keydown', onKeyPressEsc);
};
    
function onKeyPressEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}