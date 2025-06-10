import "./main.scss"

// Split Text Effect
document.fonts.ready.then(() => {
  const splitElements = document.querySelectorAll(".split")

  splitElements.forEach((splitElement) => {
    const text = splitElement.textContent
    splitElement.textContent = ""

    text.split("").forEach((char) => {
      const span = document.createElement("span")
      span.textContent = char === " " ? "\u00A0" : char // fix for whitespaces
      splitElement.appendChild(span)
    })

    const letters = splitElement.querySelectorAll("span")
    letters.forEach((span, i) => {
      setTimeout(() => {
        span.style.opacity = 1
        span.style.transform = "translateY(0)"
      }, i * 10)
    })
  })
})

// Modal
const modal = document.querySelector("#modal")
const openModalBtn = document.querySelector("#open-modal")
const closeModalBtn = document.querySelector("#close-modal")
const modalOverlay = document.querySelector("#modal-overlay")

const openModal = () => {
  modalOverlay.classList.remove("hidden")
  modal.classList.remove("hidden")

  requestAnimationFrame(() => {
    modalOverlay.classList.add("show")
    modal.classList.add("show")
  })
}

const closeModal = () => {
  modalOverlay.classList.remove("show")
  modal.classList.remove("show")

  modal.addEventListener(
    "transitionend",
    () => {
      modalOverlay.classList.add("hidden")
      modal.classList.add("hidden")
    },
    { once: true }
  )
}

openModalBtn.addEventListener("click", openModal)
closeModalBtn.addEventListener("click", closeModal)
modalOverlay.addEventListener("click", closeModal)
