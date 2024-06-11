var favorite = document.querySelectorAll(".favorite");

favorite.forEach(e => {
    e.addEventListener("click", function(){
        e.classList.remove("bi-heart");
        e.classList.add("bi-heart-fill");
    })
});

