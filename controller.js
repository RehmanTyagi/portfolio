import Typed from "typed.js"

const filterBtns = document.querySelectorAll(".filter-btn")
const DesignProjects = document.querySelectorAll(".type-design")
const DevProjects = document.querySelectorAll(".type-app")
const allElements = document.querySelectorAll(".projects-container")
// auto typing heading
new Typed(".auto--typed_word", {
  strings: ["Coding.", "You.", "Tech."],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
})

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function (curBtn) {
    filterBtns.forEach((el) => {
      el.classList.remove("active")
      curBtn.target.classList.add("active")
    })

    if (curBtn.target.textContent === "Web Development") {
      DesignProjects.forEach((obj) => {
        obj.style.display = "none"
      })
      DevProjects.forEach((obj) => {
        obj.style.display = "grid"
      })
    }
    if (curBtn.target.textContent === "Web Designs") {
      DevProjects.forEach((obj) => {
        obj.style.display = "none"
      })
      DesignProjects.forEach((obj) => {
        obj.style.display = "grid"
      })
    }
    if (curBtn.target.textContent === "All") {
      allElements.forEach((el) => (el.style.display = "grid"))
    }
  })
})

// testimonial section code
const sliderBtns = document.querySelectorAll(".scrollbar-control_btn")
const testimonialSlider = document.querySelector(".testimonial-slider ")

for (let i = 0; i < 9; i++) {
  const review = document.createElement("div")
  review.innerHTML = `
<div class="review-top">
  <span class="material-icons-outlined">
    verified_user
  </span>
  <hr>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ea, quasi expedita nisi alias tempore vitae
  dolor nesciunt laudantium rem consequuntur rerum cupiditate doloribus, necessitatibus animi consectetur, in
  maxime sint fugit id ipsum praesentium qui quisquam? Dignissimos, illo tempora?</p>
<div class="user-info">
  <span class="material-icons-outlined review-icons">
    person
  </span>
  <h3>Rehman Tyagi</h3>
  <p>CEO of Linkedin</p>
</div>
`
  review.classList.add("review")
  testimonialSlider.append(review)
}

const sliderCSSValues = getComputedStyle(testimonialSlider)
const itemsPerScreen = sliderCSSValues.getPropertyValue("--items-per-screen")
const sliderItems = document.querySelectorAll(".review")
const indexLimit = Math.ceil(sliderItems.length / itemsPerScreen) - 1
console.log(indexLimit)
let sliderIndex = 0
console.log(sliderItems.length)
sliderBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (
      sliderIndex < indexLimit &&
      e.target.classList.contains("control-btn_2")
    ) {
      sliderIndex++
      testimonialSlider.style.setProperty("--slider-index", sliderIndex)
      console.log(sliderIndex)
    } else if (
      sliderIndex <= indexLimit &&
      sliderIndex != 0 &&
      e.target.classList.contains("control-btn_1")
    ) {
      sliderIndex--
      console.log(sliderIndex)
      testimonialSlider.style.setProperty("--slider-index", sliderIndex)
    }
  })
})
