import * as MODEL from "./model.js";

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log("hash " + pageID);

  if (pageID == "") {
    MODEL.changePage("home");
  } else if (pageID == "books") {
    MODEL.changePage("books", addtocartListener);
  } else {
    MODEL.changePage(pageID);
  }
}

function addtocartListener() {
  console.log("test");
  $("#app")
    .unbind()
    .on("click", ".text-novel button", function (e) {
      let bookID = e.currentTarget.id;
      console.log(`Got bookID: ${bookID}`);
      MODEL.addToCart(bookID);
    });
}
function initListeners() {}

function initApp() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initApp();
  initListeners();
});
