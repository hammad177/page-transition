/** @format */

function bgChanger() {
  if (this.scrollY > this.innerHeight / 1.5) {
    document.body.style.backgroundColor = 'white';
  } else {
    document.body.style.backgroundColor = '#ffcc01';
  }
}

window.addEventListener('scroll', bgChanger);
