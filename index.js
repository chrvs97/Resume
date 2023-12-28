function toggleDropdown(){

    var dropdown = document.querySelectorAll(".dropdown-content")[0];
    
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';


    var dropdown = document.querySelectorAll(".dropdown-content")[1];
    
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';

    var dropdown = document.querySelectorAll(".dropdown-content")[2];
    
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';


}

window.onclick = function (event) {
   if (!event.target.matches('.dropbtn')){
    var dropdowns = document.querySelectorAll(".dropdown-content")[0]

    dropdowns.style.display = 'none'

    var dropdowns = document.querySelectorAll(".dropdown-content")[1]

    dropdowns.style.display = 'none'

    var dropdowns = document.querySelectorAll(".dropdown-content")[2]

    dropdowns.style.display = 'none'

   }
}
