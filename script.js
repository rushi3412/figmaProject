const card1 = document.getElementById("card-btn1");
const card2 = document.getElementById("card-btn2");
const popup = document.getElementById("popup");
const closePop = document.getElementById("closePop");

card1.addEventListener("click", () => {
    popup.style.display = "flex";
  });
  card2.addEventListener("click", () => {
    popup.style.display = "flex";
  });
  popup.style.display = "none";
  
  closePop.addEventListener("click", () => {
    popup.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      popup.style.display = "none";
    }
  });
