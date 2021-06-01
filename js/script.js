
let tabsLink = document.querySelectorAll('.tabs__link');
let tabsBlock = document.querySelectorAll('.tabs__block');

tabsLink.forEach(onTabClick);

function onTabClick(item){
	item.addEventListener('click', function(){
		let currentLink = item;
		let tabId = currentLink.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);

		if (!currentLink.classList.contains('show')){
			
			tabsBlock.forEach(function(item){
				item.classList.remove('show');
			});

			currentTab.classList.add('show');
		}
	})
}

document.querySelector('.tabs__link').click();
