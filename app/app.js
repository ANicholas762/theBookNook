import * as MODEL from "./model.js";

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log("hash " + pageID);

  if (pageID == "") {
    MODEL.changePage("home");
  } else {
    MODEL.changePage(pageID);
  }
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
