let button = document.querySelector("nav span")
button.addEventListener("click", sidebarToggler)
let sidebar = document.querySelector(".sidebar")
function sidebarToggler(){
    sidebar.classList.toggle("show")
}