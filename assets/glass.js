//Movement Animation to happen
const card = document.querySelector(".glass");
const container = document.querySelector("main");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".games");
const purchase = document.querySelector(".card-info");
const description = document.querySelector(".cards");
const sizes = document.querySelector(".card h2");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    // title.style.transform = "translateZ(150px)";
    // sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    // description.style.transform = "translateZ(125px)";
    // sizes.style.transform = "translateZ(100px)";
    // purchase.style.transform = "translateZ(75px)";
});
// //Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    // title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});
