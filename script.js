const button = document.querySelector("input[type='button']");
const select = document.getElementById("colorSelect")

button.addEventListener("click", ()=>{
	let selectedIndex= select.selectedIndex;
	if(selectedIndex >=0 ){
		select.remove(selectedIndex)
	}
	
})