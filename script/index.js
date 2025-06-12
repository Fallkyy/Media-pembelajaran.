function darkmode() {
     let bodydark = document.getElementById("bodys")
    let dark = document.getElementById("navbar")
    let darks = document.getElementById("header")
    let moon = document.getElementById("icons")
    let a = document.getElementById("homie")
    let b = document.getElementById("cap")
    let c = document.getElementById("contacts")
    let d = document.getElementById("profile")
    let e = document.getElementById("books")
    let g = document.getElementById("footer")
    let h = document.getElementById("mail")
    let i = document.getElementById("web")
    let j = document.getElementById("ig")
    let k = document.getElementById("fb")
    let l = document.getElementById('about')
    dark.classList.toggle("darkmode")
    darks.classList.toggle("darkmode")
    bodydark.classList.toggle("darkmode")
    a.classList.toggle("darkmodetext")
    b.classList.toggle("darkmodetext")
    c.classList.toggle("darkmodetext")
    d.classList.toggle("darkmodetext")
    e.classList.toggle("darkmodetext")
    g.classList.toggle("darkmode")
    h.classList.toggle("darkmodetext")
    i.classList.toggle("darkmodetext")
    j.classList.toggle("darkmodetext")
    k.classList.toggle("darkmodetext")
    l.classList.toggle("darkmodetext")
    


  if (moon.classList.contains("fa-moon")) {
    moon.classList.remove("fa-moon");
    moon.classList.add("fa-sun");
  }
   else {
    moon.classList.remove("fa-sun")
    moon.classList.add("fa-moon")
   }
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

