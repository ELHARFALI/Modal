'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');




const showModal = function () {

        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click', showModal)
}


const closeModal = function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
}


btnCloseModal.addEventListener('click', closeModal)


overlay.addEventListener('click', closeModal)



document.addEventListener('keydown', function (e) {
    console.log(e.key)

    if (e.key === "Escape" && !modal.classList.contains('hidden')) {
        closeModal();
    }
})