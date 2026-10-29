const navLinks = document.querySelectorAll('.bottom-nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(item => {
        item.classList.remove('active');
      });

      link.classList.add('active');
    });
  });


  const buttons = document.querySelectorAll(".statement-buttons button");
const results = document.querySelector(".statement-results");

let votes = {
  eens: 64,
  oneens: 36
};
