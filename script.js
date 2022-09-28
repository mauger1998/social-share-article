const bubble = document.querySelector("blockquote");
const share = document.getElementById("share");

share.addEventListener("click", function(event){
    bubble.classList.add("clicked")
})

bubble.addEventListener("click", function(event) {
    bubble.classList.remove("clicked")
})

