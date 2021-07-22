const menuEl = document.querySelector(".menu");
const hamburgerEl = document.getElementById("hamburger");
const hasChildrenEl = document.getElementsByClassName("has-children");
const subMenuEl = document.getElementsByClassName("sub-menu");
const arrowEl = document.getElementsByClassName("rotate");
const editorMobile = document.getElementById("editor-mobile");

hamburgerEl.addEventListener("click", () => {
  if (menuEl.style.display === "flex") {
    menuEl.style.display = "none";
    hamburgerEl.getAttributeNode("src").nodeValue = "images/icon-hamburger.svg";
  } else {
    menuEl.style.display = "flex";
    hamburgerEl.getAttributeNode("src").nodeValue = "images/icon-close.svg";
  }
});

function dropDown(index) {
  let indexStyle = subMenuEl[index].style.display;
  let indexRotate = arrowEl[index].style.transform;
  // to close all the sub menu
  for (let i = 0; i < subMenuEl.length; i++) {
    if (subMenuEl[i].style.display === "flex") {
      subMenuEl[i].style.display = "none";
      arrowEl[i].style.transform = "rotate(0deg)";
      // console.log("loop");
    }
  }

  if (indexStyle === "flex") {
    indexStyle = "none";
    indexRotate = "rotate(0deg)";

    // console.log("first if ");
  } else {
    subMenuEl[index].style.display = "flex";
    arrowEl[index].style.transform = "rotate(180deg)";
    // console.log("else");
  }

  // console.log(indexStyle);
  // console.log(indexRotate);
}

hasChildrenEl[0].addEventListener("click", () => {
  dropDown(0);
});
hasChildrenEl[1].addEventListener("click", () => {
  dropDown(1);
});
hasChildrenEl[2].addEventListener("click", () => {
  dropDown(2);
});
hasChildrenEl[3].addEventListener("click", () => {
  dropDown(3);
});
hasChildrenEl[4].addEventListener("click", () => {
  dropDown(4);
});
hasChildrenEl[5].addEventListener("click", () => {
  dropDown(5);
});
