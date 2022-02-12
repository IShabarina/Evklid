window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
      document.querySelector('#menu').classList.toggle('is-active')
  })
  document.querySelector(".burger").addEventListener("click", function() {
    this.querySelectorAll(".burger-line").forEach(item => {
    item.classList.toggle("active");
    item.classList.toggle("hover");
    })
    })
})
