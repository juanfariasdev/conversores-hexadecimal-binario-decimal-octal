const body = document.getElementById("body");

async function createConvertsPage(url) {
  return await fetch(url).then((value) => value.text());
}

async function createPage(url) {
  const page = await createConvertsPage(url);

  body.innerHTML = page;
}

function loadPage(el) {
  const href = el.getAttribute("href");
  console.log(href);
  createPage(href);
  //   history.pushState(null, "", href);
}

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    loadPage(el);
  }
});
createPage("converts.html");
