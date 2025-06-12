function dark()  {
    const darkmode = document.body;
    darkmode.classList.toggle('active')
}




function revealOnScroll () {
    const reveals = document.querySelectorAll(".reveal");
    for (let el of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const offset = 150;

        if(elementTop < windowHeight - offset) {
            el.classList.add("active")
        }

        else {
            el.classList.remove("active")
        }
    }
};

let place = document.getElementById("demo");
place.textContent += localStorage.getItem("username");