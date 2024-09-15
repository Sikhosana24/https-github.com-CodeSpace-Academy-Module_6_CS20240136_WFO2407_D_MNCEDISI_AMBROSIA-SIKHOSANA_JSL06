// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};
function displayMenuItems(menu) {
    const menuContainer = document.getElementById("menu"); // Get the menu container element from the HTML
    
    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement("h3");
        categoryElement.textContent = category; // Set the text content of the category element to the category name
        menuContainer.appendChild(categoryElement); // Append the category element to the menu container
        
        // Create an element to represent a list of items
        const itemsList = document.createElement("ul");
        menuContainer.appendChild(itemsList); // Append a list of items element to the menu container

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item; // Set the text content of the list item element to the item name
            
            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener("click", () => addToOrder(item));

            itemsList.appendChild(listItem); // Append the list item to the list of items
        });
    }
}


        

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItemsList = document.getElementById("order-items"); // Get the order items list from the HTML
    const orderTotalElement = document.getElementById("order-total"); // Get the order total element from the HTML
    
    // Create a list item for the order
    const orderItem = document.createElement("li");
    orderItem.textContent = itemName; // Set the text content of the list item to the item name
    orderItemsList.appendChild(orderItem); // Append the list item to the order items list

    // Update total price (assume each item costs $10 for simplicity)
    const currentTotal = parseFloat(orderTotalElement.textContent.slice(1)) || 0; // Remove $ and convert to float
    const newTotal = currentTotal + 10; // Add $10 to the total
    orderTotalElement.textContent = `$${newTotal.toFixed(2)}`; // Update the text content of the order total element
    
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);// Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
