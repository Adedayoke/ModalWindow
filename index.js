const openModal = document.querySelectorAll(".btn")
const content = document.querySelector(".content")
const back = document.querySelector(".back")
const times = document.querySelector(".times")

openModal.forEach(val => {
    val.addEventListener("click", function(e){
        e.preventDefault();

        content.classList.remove("hidden")
        back.classList.remove("hidden")
    })
})
times.addEventListener("click", function(){
    content.classList.add("hidden")
    back.classList.add("hidden")
})
document.addEventListener("keydown", function(e){
   if (e.key === "Escape"){
    content.classList.add("hidden")
    back.classList.add("hidden")
   }
})