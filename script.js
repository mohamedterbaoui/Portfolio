// Getting all list items
const menuItems = document.querySelectorAll("#menu li");

// Handling the click event on the navigation
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));

        item.classList.add('active');
    })
})

