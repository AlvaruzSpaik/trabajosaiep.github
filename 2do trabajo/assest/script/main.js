
    	alert("¿ESTA SEGURO DE VENDER SU ALMA A ESTA PAGÍNA?");
    	console.log("hola JS");
/*    	let element = document.querySelector(".container");
    	let elementList = document.querySelectorAll(".fa-star");*/
    	elementList.forEach(function(element){	
         element.addEventListener('click',function(){
         	element.classList.remove("far");
         	element.classList.add("fas");
         })
    	});
