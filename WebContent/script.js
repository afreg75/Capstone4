var prices= [];
var item = [];
var total = 0;



var burger = document.getElementById("burger");
burger.onclick = function() {
	item.push("Hamburger ");
	prices.push(7);
	}


var fries = document.getElementById("fries");
fries.onclick = function() {
	item.push("Fry ");
	prices.push(3);	
	
}
var pop = document.getElementById("pop");
pop.onclick = function() {
	item.push("Pop ");
	prices.push(2);	
	
}
var nuggets = document.getElementById("nuggets");
nuggets.onclick = function() {
	item.push("Nuggets ");
	prices.push(2);	
	
}
var pay = document.getElementById("pay");
pay.onclick = function() {
	 for(i=0;i<item.length;i++){
			console.log(item[i] + "$" + prices[i]);
			total += prices[i] + (prices[i] * .06); 
	 	
}
	 alert("Thank you for your order,  This is your total bill " + " $" + total);	
}