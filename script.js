var h3 = document.querySelectorAll('h3'); //getting all of h3s
var h3s = [].map.call(h3,function(value,index) { //adding event listeners to each of h3s
	value.addEventListener('click', openTab);
	value.addEventListener('click', activeColor);
});

function openTab(event) {
	this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + 'px';// making a full height element
	this.removeEventListener('click', openTab);
	this.addEventListener('click', closeTab);
}
function closeTab(event) {
	this.nextElementSibling.style.height = '0'; // zeroing the height of the element
	this.removeEventListener('click', closeTab);
	this.addEventListener('click', openTab);
}
function activeColor() {
	this.classList.toggle('active');//changing a color of h3s
}