const bodys = document.querySelector("body");

const api_key = `live_bxAXdnQu3q8aDrjTeIG2rLwQEc4t7cpCb94MhUZ2JlZjObLB2WOJnhdgTbUZD7Nf`;
const Api = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${api_key}`;

const CatApi = async () => {
  try {
    let response = await fetch(Api);
    let data = await response.json();
    console.log(data);

    catFunction(data);
  } catch (err) {
    console.log(err);
  }
};

bodys.addEventListener("load", CatApi());

const catFunction = (value) => {
  const maindiv = document.querySelector("#main_div");

  value?.forEach((element) => {
    const dataShow = document.createElement("div");

    let id = document.createElement("h1");
    let img = document.createElement("img");
    let width = document.createElement("h4");
    let height = document.createElement("h4");

    dataShow.className = "data_show";

    img.src = element.url;
    id.innerText = element.id;
    width.innerText = element.width;
    height.innerText = element.height;

    dataShow.append(img, id, width, height);

    maindiv.append(dataShow);
  });
};
