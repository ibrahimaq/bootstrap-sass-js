const burger = document.querySelector(".burger");
const navLinks = document.querySelector("ul");
navItem = document.querySelectorAll(".nav-item");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("navToggle"); //toggling class .navToggle
});

navItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    navLinks.classList.toggle("navToggle");
  });
});

/////////// CAROUSEL //////////

const carouselList = document.body.querySelector("#carouselList");

// getting textContent of each item from html so we could automatically inject it into
//the carousel object below
const carouselListItemOneName = carouselList.children[0].children[0].textContent;
const carouselListItemTwoName = carouselList.children[1].children[0].textContent;
const carouselListItemThreeName = carouselList.children[2].children[0].textContent;
//First create and object with respective classes, text, img etc..
const carouselObj = {
  itemOne: {
    name: carouselListItemOneName,
    imgSrc: "./assets/images/services1.png",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vero veritatis molestias eveniet dolores facere atquedeserunt ratione quos sit nam est culpa quis quo quisquam distinctio, optio quia blanditiis!",
  },
  itemTwo: {
    name: carouselListItemTwoName,
    imgSrc: "./assets/images/services2.png",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cupiditate, voluptates nulla praesentium, dolorum sint laborum quibusdam possimus repudiandae labore aspernatur sapiente sunt dolore enim laboriosam architecto exercitationem fuga magnam?",
  },
  itemThree: {
    name: carouselListItemThreeName,
    imgSrc: "./assets/images/services3.png",
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea tempore voluptates dolorum autem error quidem aliquam labore et id architecto itaque culpa ratione deleniti nesciunt sit distinctio eveniet quia beatae molestiae, amet deserunt. Aliquam, exercitationem.",
  },
};

const leftPanel = document.body.querySelector(".services-left-panel");
const rightPanel = document.body.querySelector("#right-panel");
const itemOne = document.body.querySelector("#itemOne");
//item one is 'active' by default. Default styling applied in HTML tag.
//Now on click we will change styling and show respective div.
let lastClicked = itemOne;
leftPanel.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    let item = e.target;

    //configures active item style/colour
    //and returns current (last clicked) list item
    lastClickedFunction(item);

    //configures the right panel according to last clicked item
    changeRightPanelContent(lastClicked);


  }
});

function lastClickedFunction(clickedElem) {
  if (clickedElem == lastClicked) {
    clickedElem.style.color = "#0C5959";
    lastClicked = clickedElem;
  } else {
    lastClicked.style.color = "#6c757d";
    clickedElem.style.color = "#0C5959";
    
    // first - delete previous carouselScrollSpan
    lastClicked.nextElementSibling.remove();


    //second - create and append carouselScrollSpan

    let newCarouselScrollSpan = document.createElement("span");
    newCarouselScrollSpan.classList.add("carouselScrollSpan");
    clickedElem.parentNode.append(newCarouselScrollSpan);

    lastClicked = clickedElem;
    return lastClicked;
  }
}

function changeRightPanelContent(lastClicked) {
  let itemId = lastClicked.getAttribute("id");
  let rightPanelImage = rightPanel.firstElementChild;
  let rightPanelTitle = rightPanel.children[1];
  let rightPanelPara = rightPanel.children[2];

  //setting content from object
  rightPanelTitle.textContent = carouselObj[itemId].name;
  rightPanelImage.setAttribute("src", carouselObj[itemId].imgSrc);
  rightPanelPara.textContent = carouselObj[itemId].p;
}
