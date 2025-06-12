const profile = document.getElementById('demo');
const users = document.getElementById('users');

profile.innerHTML = localStorage.getItem('username');
users.innerHTML = localStorage.getItem('username');

function send(e) {
    const emails = document.getElementById('emails').value
const area = document.getElementById('area').value

if (area.length < 5 || emails.length < 10) {
  alert('Minimal 10 karakter untuk Pesan')
return false
    
}

const texts = document.getElementById('texts')
texts.style.display = 'block'
return false


}
function deletes() {
    const place = document.getElementById('texts')
    place.style.display = 'none'

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