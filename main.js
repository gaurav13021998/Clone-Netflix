

const allTabs = document.querySelectorAll('.tab-item');
const relatedTabContent = document.querySelectorAll('.tab-content-item');

function showContent(e){
	removeActiveBorder();
	removeContent();
	this.classList.add('tab-border');
	const tabContentId = document.querySelector(`#tab-${this.id}`);
	tabContentId.classList.add('show');
    
}

function removeContent(){
	relatedTabContent.forEach(cont => cont.classList.remove('show'));
}

function removeActiveBorder(){
	allTabs.forEach(tab => tab.classList.remove('tab-border'));
}
allTabs.forEach(tab => tab.addEventListener('click', showContent))