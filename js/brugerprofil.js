//Fetch the userprofile from the database when the site is loaded
document.addEventListener("DOMContentLoaded", async function (event) {
  const querySTring = window.location.search;

  await fetch(
    "http://server.malthelarsen.dk:3000/getuserprofile" + querySTring,
    {
      method: "GET",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

let contentContainer = document.querySelector(".content");
/**
 * Helper function for creating document elements in the contentContainer
 * @param {string} element The element type of the document element
 * @param {string} text The inner text of the element
 * @param {string|false} id The ID of the element. If not supplied, the element
 * will not be given an id.
 * @returns
 */
function Create(element = "", text = "", id) {
  let type = document.createElement(element);
  let text_in_box = document.createTextNode(text);
  if (id) type.id = id;
  type.appendChild(text_in_box);
  contentContainer.appendChild(type);
  return type;
}
//Make dropdown menu
let ansBtn = document.querySelector("#ansBtn");
let dd = document.querySelector(".ddContent");
let btn = document.querySelectorAll("#btn");
ansBtn.addEventListener("mouseover", () => (dd.style.display = "block"));
ansBtn.addEventListener("mouseleave", () => (dd.style.display = "none"));
dd.addEventListener("mouseover", () => (dd.style.display = "block"));
dd.addEventListener("mouseleave", () => (dd.style.display = "none"));

btn.forEach((btn) => {
  btn.addEventListener(
    "mouseover",
    () => (btn.style.backgroundColor = "#3399ff")
  );
});
btn.forEach((btn) => {
  btn.addEventListener(
    "mouseleave",
    () => (btn.style.backgroundColor = "steelBlue")
  );
});
let params = new URLSearchParams(location.search);
let username = params.get("user");
//Load elements for usercontainer
let godkendtBtn = document.querySelector(".godkendtBtn");
godkendtBtn.addEventListener("click", () => {
  fetch(`http://server.malthelarsen.dk:3000/prevForms?user=${username}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let oldappl = data;

      if (contentContainer != null) {
        contentContainer.innerHTML = "";
      }

      for (let i = 0; i < oldappl.length; i++) {
        let app = oldappl[i];
        let applByUID = Create("div", `Ansøgning ${i + 1}`);
        applByUID.onclick = () => {
          location.href = `http://server.malthelarsen.dk/common/sail.html?uid={${app.uid}}`;
        };
      }
    });
});

function beginForm() {
  location.href = "../common/grc.html" + window.location.search;
}
