function toggleDropdown(){

    var dropdown = document.querySelectorAll(".dropdown-content")[0];
    
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function toggleDropdown1(){
    var dropdown = document.querySelectorAll(".dropdown-content")[1];
    
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function toggleDropdown2(){
    var dropdown = document.querySelectorAll(".dropdown-content")[2];
    
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

window.onclick = function (event) {
   if (!event.target.matches('.dropbtn')){
    var dropdowns = document.querySelectorAll(".dropdown-content")

    for (i = 0; i < dropdowns.length; i++){
        openDropdown = dropdowns[i]

        if (openDropdown.style.display === 'block'){
            openDropdown.style.display = 'none'
        }

    }
    dropdowns.style.display = 'none'
   }
}
