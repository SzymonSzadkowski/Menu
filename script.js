//items

const menu = [
    {
        id: 1,
        title: "Sandwich and Fries",
        price: 7.99,
        img: "./images/pic2.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit repellendus laborum illum consequatur optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        id: 2,
        title: "Sweet Muffins",
        price: 10.99,
        img: "./images/pic3.jpg",
        text: "Sit impedit repellendus laborum illum consequatur optio. dolor sit amet, consectetur adipisicing elit. Sunt  repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit repellendus laborum illum consequatur optio.",
    },
    {
        id: 3,
        title: "Ham Sandwich",
        price: 13.99,
        img: "./images/pic4.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit repellendus laborum illum consequatur optio.",
    },
    {
        id: 4,
        title: "Mini Burgers",
        price: 6.99,
        img: "./images/pic5.jpg",
        text: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit repellendus laborum illum consequatur optio.consectetur adipisicing elit optio.",
    },
    {
        id: 5,
        title: "Mini Muffins",
        price: 10.99,
        img: "./images/pic6.jpg",
        text: "Repellendus laborum illum consequatur optio. ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit repellendus laborum illum consequatur optio.",
    },
    {
        id: 6,
        title: "Carbonara",
        price: 16.99,
        img: "./images/pic7.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit repellendus laborum illum consequatur optio.",
    },
    {
        id: 7,
        title: "Pizza Capriciosa",
        price: 15.99,
        img: "./images/pic8.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit Lorem ipsum dolor sit amets asperiores deserunt doloremque iste.",
    },
    {
        id: 8,
        title: "Polish Lunch",
        price: 11.99,
        img: "./images/pic9.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit repellendus laborum illum consequatur optio.",
    },
]

const products = document.querySelector(".products");

window.addEventListener("DOMContentLoaded", () =>{
    let displayMenu = menu.map((item) => {
        return `<article class="product">
        <img src="${item.img}">
        <div class="product-info">
            <!-- product title -->
            <div class="product-title">
                <h3>${item.title}</h3>
                <p class="price">${item.price}</p>
            </div>
            <!-- product text -->
            <p class="product-text">${item.text}</p>
        </div>
    </article>`;
    })
    displayMenu = displayMenu.join("");
    console.log(displayMenu);
    products.innerHTML += displayMenu;
})