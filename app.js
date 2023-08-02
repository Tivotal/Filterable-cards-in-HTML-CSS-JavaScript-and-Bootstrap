/* Created by Tivotal */

let buttons = document.querySelectorAll(".btn");
let cards = document.querySelectorAll(".card");

let filterCards = (e) => {
  //removing active class form buttons
  document.querySelector(".active").classList.remove("active");

  //adding active class to clicked button
  e.target.classList.add("active");

  cards.forEach((card) => {
    //showing cards ony if the data name matches with clicked button filter name
    //or filter name is equal to all
    if (
      card.dataset.name === e.target.dataset.filter ||
      e.target.dataset.filter === "all"
    ) {
      return card.classList.replace("hide", "show");
    }

    card.classList.add("hide");
  });
};

buttons.forEach((button) => button.addEventListener("click", filterCards));
