//querySelectors for the buttons to make list and modify list
let wordInput = document.querySelector("#InputWords");
let wordChange = document.querySelector("#changeWords");

//Array that will hold the original list
let wordList = [];

//click events for transition between pages
wordInput.addEventListener("click",BtnPg1Handler,false);
wordChange.addEventListener("click",BtnPg2Handler,false);


//Move to page 2
function BtnPg1Handler( ) {
	pageOne.style.display = "none";  
	pageTwo.style.display = "block";
	pageThree.style.display = "none";
}

//Move to page 3
function BtnPg2Handler( ) {
	pageOne.style.display = "none";  
	pageTwo.style.display = "none";
	pageThree.style.display = "block";
}



//Gets user input via prompt into array and appends list to HTML element with given ID
function collectWords() {

	//Collects words and pushes them into the array
	for (x = 0; x < 3; x++) {
		let userInput = prompt("Please enter a word");
		wordList.push(userInput);
	}

	//Creates list
	let ul = document.createElement('ul');
    document.getElementById('originalList').appendChild(ul);
    for (let i = 0; i < wordList.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = wordList[i];
    };
}



//creates second array with modified words and appends new list to HTML element with given ID
 function displayModifiedList() {

	//Derived from homework requirement sheet
	let secondArray = wordList.map(function(oneWord) {        
		return oneWord.charAt(oneWord.length - 1) + 
		oneWord.substring(1, oneWord.length - 1) + 
		oneWord.charAt(0);
	 });

	let ul = document.createElement('ul');
    document.getElementById('modifiedList').appendChild(ul);
    for (x = 0; x < secondArray.length; x++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = secondArray[x];
    };
}