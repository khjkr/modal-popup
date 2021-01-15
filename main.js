const openBtn = document.getElementById('open')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.modal__overlay')
const closeBtn = document.getElementById('close')

const openModal = () => {
  modal.classList.remove('hidden')
}
const closeModal = () => {
  modal.classList.add('hidden')
}

overlay.addEventListener('click', closeModal)
closeBtn.addEventListener('click', closeModal)
openBtn.addEventListener('click', openModal)