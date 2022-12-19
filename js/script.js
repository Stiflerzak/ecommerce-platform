document.addEventListener("DOMContentLoaded", () => {
    displayproduct()
    }) 

    function displayproduct(){
     let customersearch= document.getElementById("search").value; 
     customersearch= customersearch.toLowerCase();
     let products= document.getElementsByClassName("categories");

     for (i = 0; i < products.length; i++) {
		if (!products[i].innerHTML.toLowerCase().includes(input)) {
			products[i].style.display="none";
		}
		else {
			products[i].style.display="Trending-Products";				
		}
	}
}




//     // JavaScript code
// function search_animal() {
// 	let input = document.getElementById('searchbar').value
// 	input=input.toLowerCase();
// 	let x = document.getElementsByClassName('animals');
	
// 	for (i = 0; i < x.length; i++) {
// 		if (!x[i].innerHTML.toLowerCase().includes(input)) {
// 			x[i].style.display="none";
// 		}
// 		else {
// 			x[i].style.display="list-item";				
// 		}
// 	}
// }
