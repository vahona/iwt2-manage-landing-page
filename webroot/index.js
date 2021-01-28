// const buttonOpen = '.button__open';
// const curtainBackground = ".curtain";
// const navigation = document.querySelector(".masthead__navigation");
// const attribut_navigation_open = 'open'

// const escKeyCode = 27;

// function toggleNavigation() {
//     if(navigation.hasAttribute(attribut_navigation_open)) {
//         navigation.removeAttribute(attribut_navigation_open)
//     }

//     else {
//         navigation.setAttribute(attribut_navigation_open, '');

//     }
// }


// function openNavigation(e) {
//     const currentNode = e.target;
//     console.log(e);
//     if (e.target.matches(curtainBackground) || e.target.matches(buttonOpen)) {
//         toggleNavigation()
//     }
// }


// function escapeNavigation(e) {
//     if(navigation.hasAttribute(attribut_navigation_open) && e.keyCode == escKeyCode) {
//         toggleNavigation()
//     }
// }

// document.addEventListener('click', openNavigation )
// document.addEventListener("keydown", escapeNavigation);