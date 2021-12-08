import "./styles.css";
import "regenerator-runtime/runtime";
import $ from "jquery";
import { API } from "./util/constants";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./components/Card";

const firstLoading = async () => {
  const data = await $.ajax(API.COINS_LIST);
  const filteredData = data.slice(1, 100);
  localStorage.setItem("data", JSON.stringify(filteredData));
  createElements(data);
  console.log("first Time");
};

const isFirstLoading = () => {
  const firstLoading = localStorage.getItem("data");
  return !firstLoading;
};

if (isFirstLoading()) {
  firstLoading();
} else {
  const data = JSON.parse(localStorage.getItem("data"));
  createElements(data);
}

function createElements(data) {
  console.log(data)
  data.forEach((element, index) => {
    $(Card(element, index)).appendTo(".card-deck");
  });
  const buttons = $("button");

  for (let button of buttons) {
    $(button).on("click", function () {
      onMoreButton(this)
    });
  }

  $("input:checkbox").on("click", onToggleButton )
}

function onMoreButton(buttonElement) {
  const {name, id} = buttonElement.dataset
  console.log(name, id);
  // $("#pills-about-tab").trigger("click")
};

function onToggleButton() {
  // Less then four
  const isLessThenFour = $("input:checkbox:checked").length > 4;
  $("input:checkbox").not(":checked").attr("disabled", isLessThenFour);
}

// $(window).on("unload", () => {
//   localStorage.removeItem("data");
// });
