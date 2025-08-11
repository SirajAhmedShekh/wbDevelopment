

let cartArr = JSON.parse(localStorage.getItem('cartItem'));

// let tokenStorage = JSON.parse(sessionStorage.getItem('token'));

// if (!tokenStorage) {
//     window.location = 'Login.html'
// }

// const result = cartArr.reduce((acc, item) => {
//     const existing = acc.find((el) => el.id === item.id);
//     if (existing) {
//         existing.count += 1; // increment count
//     } else {
//         acc.push({ ...item }); // clone item
//     }
//     return acc;
// }, []);

// cartArr = result;

// localStorage.setItem('cartItem', JSON.stringify(cartArr));



// const storeUI = (value) => {
//     const dataInfo = document.querySelector("#dataInfo");
//     dataInfo.innerHTML = ''

//     value?.forEach((element) => {
//         // console.log('🚀 ~ element:', element);
//         const div = document.createElement('div');
//         const pricingDiv = document.createElement('div');
//         const id = document.createElement('p');
//         const img = document.createElement('img');
//         const price = document.createElement('p');
//         const title = document.createElement('h4');
//         const category = document.createElement('p');
//         const description = document.createElement('p');
//         const rate = document.createElement('p');
//         const count = document.createElement('p');
//         const button = document.createElement('button');
//         const count1 = document.createElement('p');
//         const checkout_btn = document.createElement('button');

//         img.src = element.image;
//         id.innerText = element.id;
//         price.innerText = element.price;
//         title.innerText = element.title;
//         category.innerText = element.category;
//         description.innerText = element.description;
//         rate.innerText = element.rating.rate;
//         count.innerText = element.rating.count;
//         count1.innerText = element.count;

//         div.classList.add('card-div');
//         pricingDiv.classList.add('card-price-div');


//         button.innerText = 'remove';
//         checkout_btn.innerText = 'checkout';
//         checkout_btn.classList.add('checkout-btn');


//         button.addEventListener('click', function () {
//             // cartArr.push(element);

//             let deleteData = cartArr.filter((dl) => {
//                 return dl.id !== element.id
//             })
//             cartArr = deleteData;

//             localStorage.setItem('cartItem', JSON.stringify(cartArr));
//             storeUI(cartArr)
//         })

//         checkout_btn.addEventListener('click', () => {
//             window.location = 'Checkout.html'
//         })


//         pricingDiv.append(price, rate, count, count1);

//         div.append(img, id, title, description, category, pricingDiv, button, checkout_btn);

//         dataInfo.append(div);

//     });

// }


// const changeToLogin = () => {
//     window.location = 'Login.html'
// }

// const backFun = () => {
//     window.location = 'index.html'
// }

// const chageToCart = () => {
//     window.location = 'Cart.html'
// }



// const cartDisplay = () => {
//     storeUI(cartArr)
// }
