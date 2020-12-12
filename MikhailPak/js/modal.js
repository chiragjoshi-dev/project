    // Get the modal
    const modal = document.querySelector(".hamburger__overlay");
    // Get the button that opens the modal
    const btn = document.querySelector("#menu__btn");
    // Get the <span> element that closes the modal
    const close = document.querySelector("#menu__btn--close");
    
    // When the user clicks the button, open the modal 
    btn.addEventListener("click", e => {
        modal.style.display = "flex";
        $("body").css("height", "100%");
        $("body").css("overflow", "hidden")
        $(".open-span").css("display", "none")
    })

    // When the user clicks on <span> (x), close the modal
    close.addEventListener("click", e => {
        modal.style.display = "none";
        $("body").css("overflow", "auto");
        $(".open-span").css("display", "block")
    })

    modal.addEventListener("click", e => {
        if(e.target == modal) {
          modal.style.display = "none";
          $("body").css("overflow", "auto");
        }
    })