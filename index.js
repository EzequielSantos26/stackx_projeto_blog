import { card_data } from "./database.js";

const parentCard = document.querySelector("[data-container-cards]");

// criando cards
card_data.map((data) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("class-post-box");
  cardElement.setAttribute("data-cards", "");
  cardElement.setAttribute("data-category", data.category);
  cardElement.setAttribute("data-id", data.id);

  cardElement.innerHTML = `
        <img class="class-post-img" src="${data.banner.src}">

        <h2 class="class-category"> ${data.display_category}</h2>

        <p class="class-post-title"> ${data.title} </p>

        <span class="class-post-date" data-date> 
        ${data.date_time.date} - ${data.date_time.time}
        </span> 
        <br>

        <span class="class-category">
            visualização: <span data-views>${data.views}</span>
        </span> 

        <p class="class-post-description">${data.description}
        </p>  


      `;

  parentCard.appendChild(cardElement);
});

const allcards = document.querySelectorAll("[data-cards]");
const allviews = document.querySelectorAll("[data-views]");
const allfilters = document.querySelectorAll("[data-filter]");

const addAndRemoveClassActive = (target) => {
  allfilters.forEach((category) => category.classList.remove("class-active"));
  target.classList.add("class-active");
};
const showIndividualCard = (category) => {
  allcards.forEach((card) => {
    if (card.getAttribute("data-category") === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

//filtro por categoria 
window.addEventListener("click", (event) => {
  const target = event.target;
  const filterCategorye = target.getAttribute("data-filter");

  switch (filterCategorye) {
    case "all-categories":
      addAndRemoveClassActive(target);
      allcards.forEach((card) => {
        card.style.display = "block";
      });
      parentCard.classList.remove("class-idividual-card")
      break;
    case "category-1":
      addAndRemoveClassActive(target);
      showIndividualCard("category_1")
      parentCard.classList.add("class-idividual-card")
      break;
    case "category-2":
      addAndRemoveClassActive(target);
      showIndividualCard("category_2")
      parentCard.classList.add("class-idividual-card")
      
      break;
    case "category-3":
      addAndRemoveClassActive(target);
      showIndividualCard("category_3")
      parentCard.classList.add("class-idividual-card")
      break;
    case "category-4":
      addAndRemoveClassActive(target);
      showIndividualCard("category_4")
      parentCard.classList.add("class-idividual-card")
      
      break;

    default:
      break;
  }
});
