// Getting all list items
const menuItems = document.querySelectorAll("#menu li");
const navSections = document.querySelectorAll(".section")
const sectionsTab = document.querySelector(".sections_tab");

// Function to activate a section
function activateSection(index) {
    // Remove 'active from all sections and menu items
    menuItems.forEach(i => i.classList.remove('active'));
    navSections.forEach(section => section.classList.remove('active_section'));

    // Add 'active' class to the clicked menu item and corresponding section
    menuItems[index].classList.add('active');
    navSections[index].classList.add('active_section');
}

// Set the first menu item and section as active by default
document.addEventListener("DOMContentLoaded", () =>{
    activateSection(0);
});

// Handling the click event on the navigation
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        activateSection(index);

        if(index === 1 || index === 2){
            sectionsTab.classList.add('dark_background');
        }
        else if (index === 0){
            sectionsTab.classList.remove('dark_background');
        }
    })
})


