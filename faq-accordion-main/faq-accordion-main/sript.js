const faqButton = document.getElementsByClassName("button")

for(let i = 0; i < faqButton.length; i++ ){
    faqButton[i].addEventListener("click", function(){
        this.classList.toggle("active") 
        const panel = this.nextElementSibling;
        const accordionBtn = this.querySelector('.plusIcon')

        if (panel.style.display === "block"){
            panel.style.display = "none"
            accordionBtn.src = "./assets/images/icon-plus.svg"

        }else{
            panel.style.display = "block";
            accordionBtn.src = "./assets/images/icon-minus.svg";
        }

    })
}