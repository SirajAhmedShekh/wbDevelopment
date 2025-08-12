
const CartApi = `http://localhost:3000/cart` || [];


const cartFunc = async () =>{
    try {
        let response = await fetch(CartApi);
        let data = await response.json();
        dataFun();

    } catch (error) {
        console.log(error);

    }
}

const dataFun = (value) => {
    let cartDiv = document.querySelector('#cartDiv');

value?.map((element) => {

    let storDiv = document.createElement('div');
    let title = document.createElement("h4");
    let price = document.createElement("h3");
    let description = document.createElement("h6");
    let category = document.createElement("h3");
    let img = document.createElement("img");
    let rating = document.createElement("div");
    let rate = document.createElement("h3");
    let count = document.createElement("h3");
    let id = document.createElement("h3");

    storDiv.className = "storDiv";

     description.innerText = element.description ;
    price.innerText = element.price;
    title.innerText = element.title;
    category.innerText = element.category;
    img.src = element.image;
    id.innerText = element.id;
    rate.innerText = element.rating.rate;
    count.innerText = element.rating.count;
  

    
    rating.append(rate, count);

    storDiv.append(img, id, title, price, category, description, rating);
    cartDiv.append(storDiv);
});

};

const cartbtn = ()=>{
        window.location = "Home.html"
    }