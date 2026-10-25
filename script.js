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

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const choice = button.dataset.vote;

    votes[choice]++;

    const total = votes.eens + votes.oneens;
    const eensPercentage = Math.round((votes.eens / total) * 100);
    const oneensPercentage = 100 - eensPercentage;

    document.querySelector("#eens-bar").style.width = eensPercentage + "%";
    document.querySelector("#oneens-bar").style.width = oneensPercentage + "%";

    document.querySelector("#eens-percentage").textContent = eensPercentage + "%";
    document.querySelector("#oneens-percentage").textContent = oneensPercentage + "%";

    document.querySelector(".total-votes").textContent = total + " stemmen";

    document.querySelector(".statement-buttons").hidden = true;
    results.hidden = false;
  });
});