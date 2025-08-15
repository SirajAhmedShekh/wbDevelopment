
let api = `http://localhost:3000/cart`;
let page = 1; // current page
let limit = 10; //

let allProducts;

let logo = document.querySelector('#logo');

logo = false;

const storage = JSON.parse(sessionStorage.getItem("category"));

const countCategory = () => {
    if (!storage) return;

    let filterSelect = document.querySelector("#filter");

    Object.keys(storage).map((key) => {
        let options = document.createElement("option");
        options.value = key;
        options.innerText = key;
        filterSelect.append(options);
    });
};

countCategory();

const apiCall = () => {
    fetch(api)
        .then((res) => res.json())
        .then((res) => {
            console.log("🚀 ~ res:", res);
            let category = res.map((el) => el.category);
            const countCategory = category.reduce((acc, fruit) => {
                acc[fruit] = (acc[fruit] || 0) + 1;
                return acc;
            }, {});

            sessionStorage.setItem("category", JSON.stringify(countCategory));
            appendsFunc(res);
            setTimeout(removePlaceholder, 1000);
        })
        .catch((err) => console.log(err));
};

const appendsFunc = (data) => {
    let dataShow = document.getElementById("info");
    dataShow.innerHTML = '';

    allProducts = data;

    data.forEach((element) => {
        let cardDiv = document.createElement("div");
        let title = document.createElement("h4");
        let price = document.createElement("h3");
        let description = document.createElement("h6");
        let category = document.createElement("h3");
        let img = document.createElement("img");
        let rating = document.createElement("div");
        let rate = document.createElement("h3");
        let count = document.createElement("h3");
        let id = document.createElement("h3");
        let btn = document.createElement("button");


        cardDiv.className = "card_div";
        description.className = "text_div placeholder";
        price.className = "placeholder"
        title.className = "title_div placeholder";
        rating.className = "reating_1 placeholder";
        category.className = "placeholder";
        img.className = "placeholder";
        id.className = "placeholder";
        rate.className = "placeholder";
        count.className = "placeholder";
        btn.className = "cart_btn placeholder";


        setTimeout(() => {
            img.src = element.image;
            title.innerText = element.title;
            btn.innerText = "Add to cart"
            price.innerText = ` price : ${element.price}`;
            category.innerText = `category : ${element.category}`;
            description.innerText = element.description;
            rate.innerText = `Rate : ${element.rating.rate}`;
            count.innerText = `count : ${element.rating.count}`;
            id.innerText = `id : ${element.id}`;
            title.classList.remove("placeholder");
            img.classList.remove("placeholder");
            price.classList.remove("placeholder");
            description.classList.remove("placeholder");
            rate.classList.remove("placeholder");
            count.classList.remove("placeholder");
            id.classList.remove("placeholder");
            btn.classList.remove("placeholder");


        }, 1000);
        btn.addEventListener('click', () => addtocart(element.id));

        rating.append(rate, count);
        cardDiv.append(img, id, title, price, category, description, rating, btn);
        dataShow.append(cardDiv);

    });
};

const addtocart = async (id) => {
    const product = allProducts.find(p => p.id === id);

    let response = await fetch(cartApi, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json',
        }
    })
};

const searchFunc = async () => {
    let search = document.querySelector("#search").value;
    try {
        let res = await fetch(api);
        let data = await res.json();

        let searchArr = data.filter((el) => {
            return search === el.category || search === el.title;
        });
        appendsFunc(searchArr);
    } catch (error) {
        console.log(error);
    };
};

const selectFun = async (el) => {
    let filter = document.querySelector("#filter").value;

    try {
        let res = await fetch(api);
        let data = await res.json();

        let filterData = data.filter((el) => {
            return filter === el.category;
        });
        appendsFunc(filterData);
    } catch (error) {
        console.log(error)
    };
};

const sidebar = () => {
    const side = document.querySelector(".slide");
    // logo = !logo;
    // side.style.display = logo == false ? "none" : "block";
    side.classList.toggle("active");
};

const sortHigh = async () => {
    try {
        const res = await fetch(api);
        const data = await res.json();

        const sortedData = data.sort((a, b) => b.price - a.price);
        appendsFunc(sortedData);

        const activeFilter = document.querySelector("#activeFilter");
        activeFilter.innerHTML = `
            <span>High To Low</span>
            <button onclick="clearFilter()"><img src="./Utils/Close.svg"></button>`
            ;
        document.querySelector(".slide").classList.remove("active");
    } catch (error) {
        console.log("Error While Sorting High To Low: ", error);
    }
};

const sortLow = async () => {
    try {
        const res = await fetch(api);
        const data = await res.json();

        const sortedData1 = data.sort((a, b) => a.price - b.price);
        appendsFunc(sortedData1);

        const activeFilter = document.querySelector("#activeFilter");
        activeFilter.innerHTML = `
            <span>Low To High</span>
            <button onclick="clearFilter()"><img src="./Utils/Close.svg"></button>
            `;
        document.querySelector(".slide").classList.remove("active");
    } catch (error) {
        console.log("Error While Sorting Low To High: ", error);
    }
};

const clearFilter = async () => {
    ApiCall();
    document.querySelector("#activeFilter").innerHTML = "";

    try {
        const res = await fetch(api);
        const data = await res.json();
        appendsFunc(data);
        document.querySelector(".slide").classList.remove("active");
    } catch (error) {
        console.log("Error While Clearing Filter: ", error);
    }
}
const loginFunc = () => {

    window.location = "regestration.html";
}

const cartFun = () => {
    window.location = "homecart.html"
}

//Fetch paginated data
const dataFetch = async () => {
    try {
        let res = await fetch(`${api}?_limit=${limit}&_page=${page}`);
        let data = await res.json();
        appendsFunc(data);
        updateButtons(data.length);
    } catch (error) {
        console.log("Pagination Error:", error);
    }
};

// Update Prev / Next buttons
const updateButtons = (dataLength) => {
    document.getElementById("prev").disabled = page === 1;
    document.getElementById("next").disabled = dataLength < limit;
    document.querySelector(".numOfPage").innerText = `Page: ${page}`;//show a current page
}

// Prev button click
const prevBtnInvokation = () => {
    if (page > 1) {
        page--;
        dataFetch();
    }
};

// Next button click
const nextBtnInvokation = () => {
    page++;
    dataFetch();
};

window.onload = () => {
    ApiCall();      // for category dropdown
    dataFetch();    // for initial paginated data
};

const removePlaceholder = () => {
    const placeholder = document.querySelectorAll(".placeholder");
    placeholder.forEach((element) => {
        element.classList.remove("placeholder");
    });
};
