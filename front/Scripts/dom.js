const toastSlot = document.querySelector('#toastSlot');

function openToast(msg){
  let toast = document.createElement('DIV');
  toast.classList.add('toast');
  toast.innerHTML = `<p>${msg}</p>`;

  toastSlot.appendChild(toast);

  toast.classList.add('opened');
  setTimeout(() => {
    toast.classList.remove('opened');
    setTimeout(() => {
      toastSlot.removeChild(toast);
     }, 1000)
  }, 3000);
}