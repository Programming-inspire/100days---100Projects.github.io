const urlInput = document.querySelector('.url');
const titleInput = document.querySelector('.title');
const btn = document.querySelector('.bookmark-btn');
const list = document.querySelector('.output-list');

btn.addEventListener('click', addToList);
document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
list.addEventListener('click', deleteItem);
list.addEventListener('click', editItem);


function addToList(e) {
	e.preventDefault();
	let url = urlInput.value;
	let title = titleInput.value;
	let editedItem = document.querySelector('.marker');
	

	if(!editedItem) {
		if(url != '' && title != '') {
			showListItem(url, title);
			
			saveToLocalStorage(url, title);
			urlInput.value = '';
			titleInput.value = '';
		}	
	}
	
	else {
	
		let tempTitle = editedItem.firstChild.textContent;
		let storageUrls = getFromLocalStorage('url');
		let storageTitles = getFromLocalStorage('title');
		let index = storageTitles.indexOf(tempTitle);
		storageTitles[index] = title;
		storageUrls[index] = url;
		localStorage.setItem('url', JSON.stringify(storageUrls));
		localStorage.setItem('title', JSON.stringify(storageTitles));
		

		editedItem.firstChild.textContent = title;
		editedItem.firstChild.setAttribute("href", url);
		
		editedItem.classList.remove('marker');
		urlInput.value = '';
		titleInput.value = '';
	}
}

function showListItem(url, title) {

	let li = document.createElement('li');
	let a = document.createElement('a');
	a.setAttribute('href', url);
	a.setAttribute('target', '_blank');
	a.textContent = title;
	li.appendChild(a);
	
	let edit = document.createElement('div');
	let cross = document.createElement('div');
	edit.textContent = "Edit";
	cross.textContent = "X";
	edit.setAttribute('class', 'edit');
	cross.setAttribute('class', 'cross');
	li.appendChild(edit);
	li.appendChild(cross);
	
	list.appendChild(li);
}

function saveToLocalStorage(url, title) {
	let storageItemsUrl = getFromLocalStorage('url');
	let storageItemsTitle = getFromLocalStorage('title');
	storageItemsUrl.push(url);
	storageItemsTitle.push(title);
	localStorage.setItem('url', JSON.stringify(storageItemsUrl));
	localStorage.setItem('title', JSON.stringify(storageItemsTitle));
}

function getFromLocalStorage(item) {
	let items = localStorage.getItem(item);
	if(items == null) {
		items = [];
	}
	else {
		items = JSON.parse(items);
	}
	return items;
}

function loadFromLocalStorage() {
	let url = JSON.parse(localStorage.getItem('url'));
	let title = JSON.parse(localStorage.getItem('title'));
	if(url.length != 0 && url.length != 0) {
		for(let i = 0; i < url.length; i++) {
			showListItem(url[i], title[i]);
		}	
	}	
}

function deleteItem(e) {
	if(e.target.classList.contains('cross')) {
		let title = e.target.parentElement.firstChild.textContent;
		let url = e.target.parentElement.firstChild.getAttribute('href');
		removeFromLocalStorage(url, title);
		e.target.parentElement.remove();
	}
}

function removeFromLocalStorage(url, title) {
	let storageUrls = getFromLocalStorage('url');
	let storageTitles = getFromLocalStorage('title');
	
	
	storageUrls.splice(storageUrls.indexOf(url), 1);
	storageTitles.splice(storageTitles.indexOf(title), 1);
	
	localStorage.setItem('url', JSON.stringify(storageUrls));
	localStorage.setItem('title', JSON.stringify(storageTitles));
	
}

function editItem(e) {
	if(e.target.classList.contains('edit')) {
		let element = e.target.parentElement;
		let text = e.target.parentElement.textContent;
		let url = e.target.parentElement.firstChild.getAttribute('href');
		
	
		element.setAttribute('class', 'marker')
		
		urlInput.value = url;
		
		titleInput.value = text.slice(0, text.length-5);
	}
}