const menuItems = [
    {
        id: 1,
        name: "The Classic Smash",
        price: "$12.99",
        description: "Two smashed beef patties, house secret sauce, melted cheddar, and crisp pickles on a brioche bun.",
        ingredients: ["Beef", "Cheddar", "Pickles", "Brioche"],
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1599&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Crispy Chicken Blaze",
        price: "$11.50",
        description: "Spicy buttermilk fried chicken, slaw, sriracha mayo, and jalapeños.",
        ingredients: ["Chicken", "Sriracha", "Slaw", "Spicy"],
        image: "https://images.unsplash.com/photo-1626082927389-d42fd83de521?q=80&w=1742&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Truffle Fries Supreme",
        price: "$6.99",
        description: "Golden crispy fries tossed in truffle oil, parmesan cheese, and parsley.",
        ingredients: ["Potatoes", "Truffle Oil", "Parmesan"],
        image: "https://images.unsplash.com/photo-1573080496982-b94d6351308d?q=80&w=1588&auto=format&fit=crop" // Fries
    },
    {
        id: 4,
        name: "Veggie Delight",
        price: "$10.99",
        description: "Grilled halloumi, roasted peppers, avocado smash, and wild arugula.",
        ingredients: ["Halloumi", "Avocado", "Peppers", "Arugula"],
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop" // Burger/Sandwich
    },
    {
        id: 5,
        name: "BBQ Bacon Beast",
        price: "$14.99",
        description: "Triple patty, smoked bacon, onion rings, and hickory BBQ sauce.",
        ingredients: ["Bacon", "Onion Rings", "BBQ Sauce", "Beef"],
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1742&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "Milkshake Madness",
        price: "$5.99",
        description: "Creamy vanilla milkshake topped with whipped cream, cherry, and chocolate drizzle.",
        ingredients: ["Vanilla", "Cream", "Chocolate"],
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1740&auto=format&fit=crop"
    }
];

const menuGrid = document.getElementById('menu-grid');

function renderMenu() {
    menuGrid.innerHTML = menuItems.map(item => `
        <article class="menu-card">
            <div class="card-image-container">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-title">${item.name}</h3>
                    <span class="card-price">${item.price}</span>
                </div>
                <p class="card-description">${item.description}</p>
                <div class="ingredients-list">
                    ${item.ingredients.map(ing => `<span class="ingredient-tag">${ing}</span>`).join('')}
                </div>
                <button class="add-btn" onclick="addToCart('${item.name}')">Add to Order</button>
            </div>
        </article>
    `).join('');
}

function addToCart(itemName) {
    alert(`${itemName} added to your yummy order!`);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});
