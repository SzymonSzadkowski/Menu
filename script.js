//items

const menu = [{
        id: 1,
        title: "Sugar Churros",
        category: "lunch",
        price: 4.99,
        img: "./images/pic1.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi idpossimus voluptates, sit totam fugit corporis vitae eius accusantium? Facere!",
    },
    {
        id: 2,
        title: "Sweet Muffins",
        category: "desert",
        price: 10.99,
        img: "./images/pic3.jpg",
        text: "Sit impedit repellendus laborum illum consequatur optio. dolor sit amet, consectetur adipisicing elit. Sunt  repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit repellendus laborum illum consequatur optio.",
    },
    {
        id: 3,
        title: "Ham Sandwich",
        category: "breakfast",
        price: 13.99,
        img: "./images/pic4.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit repellendus laborum illum consequatur optio.",
    },
    {
        id: 4,
        title: "Mini Burgers",
        category: "lunch",
        price: 6.99,
        img: "./images/pic5.jpg",
        text: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit repellendus laborum illum consequatur optio.consectetur adipisicing elit optio.",
    },
    {
        id: 5,
        title: "Mini Muffins",
        category: "desert",
        price: 10.99,
        img: "./images/pic6.jpg",
        text: "Repellendus laborum illum consequatur optio. ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit repellendus laborum illum consequatur optio.",
    },
    {
        id: 6,
        title: "Carbonara",
        category: "lunch",
        price: 16.99,
        img: "./images/pic7.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit repellendus laborum illum consequatur optio.",
    },
    {
        id: 7,
        title: "Pizza Capriciosa",
        category: "lunch",
        price: 15.99,
        img: "./images/pic8.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit Lorem ipsum dolor sit amets asperiores deserunt doloremque iste.",
    },
    {
        id: 8,
        title: "Polish Lunch",
        category: "lunch",
        price: 11.99,
        img: "./images/pic9.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit repellendus laborum illum consequatur optio.",
    },
    {
        id: 9,
        title: "Sandwich and Fries",
        category: "breakfast",
        price: 7.99,
        img: "./images/pic2.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellat ipsa fugit vitae quibusdam officiis eos, magnam alias asperiores deserunt doloremque iste nam sit impedit repellendus laborum illum consequatur optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
]

const products = document.querySelector(".products");


const buttonContainer = document.querySelector(".buttons");


// load items and buttons
window.addEventListener("DOMContentLoaded", () => {
    displayMenu(menu);
    const categories = menu.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ["all"])
    const categoryBtns = categories.map((category) => {
            return `<button class="btn-category" data-id="${category}">${category}</button>`
        }).join("");
    buttonContainer.innerHTML = categoryBtns;
    const buttons = document.querySelectorAll(".btn-category");
    filterMenu(buttons);
});

function displayMenu(menuItems) {
    let displayMenu = menuItems.map((item) => {
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
    products.innerHTML = displayMenu;
};

// filter menu
function filterMenu(buttons) {
    buttons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const category = event.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItems) => {
                if (menuItems.category === category) {
                    return menuItems;
                }
            })
            if (category === "all") {
                displayMenu(menu);
            } else {
                displayMenu(menuCategory);
            }
        })
    })
}