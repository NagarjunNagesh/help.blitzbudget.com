"use strict";
(function scopeWrapper($) {
	let searchArticleDD = document.getElementById('searchArticleDD');	
	const reForwardSlash = /\//g;

	/**
	* Autocomplete Module
	**/
	function autocomplete(inp, arr, scrollWrapEl) {
		  /*Removes a function when someone writes in the text field:*/
		  inp.removeEventListener("input", inputTriggerAutoFill);
		  /*Removes a function presses a key on the keyboard:*/
		  inp.removeEventListener("keydown", keydownAutoCompleteTrigger);
		  /*the autocomplete function takes two arguments,
		  the text field element and an array of possible autocompleted values:*/
		  let currentFocus;
		  /*execute a function when someone writes in the text field:*/
		  inp.addEventListener("input", inputTriggerAutoFill);
		  /*execute a function presses a key on the keyboard:*/
		  inp.addEventListener("keydown", keydownAutoCompleteTrigger);
		  function addActive(x) {
		    /*a function to classify an item as "active":*/
		    if (!x) return false;
		    /*start by removing the "active" class on all items:*/
		    removeActive(x);
		    if (currentFocus >= x.length) currentFocus = 0;
		    if (currentFocus < 0) currentFocus = (x.length - 1);
		    /*add class "autocomplete-active":*/
		    x[currentFocus].classList.add("autocomplete-active");
		    // Change focus of the element
		    x[currentFocus].focus();
		  }
		  function removeActive(x) {
		    /*a function to remove the "active" class from all autocomplete items:*/
		    for (let i = 0, len = x.length; i < len; i++) {
		      x[i].classList.remove("autocomplete-active");
		    }
		  }
		  function closeAllLists(elmnt) {
		    /*close all autocomplete lists in the document,
		    except the one passed as an argument:*/
		    let x = document.getElementsByClassName("autocomplete-items");
		    for (let i = 0, len = x.length; i < len; i++) {
		      if (elmnt != x[i] && elmnt != inp) {
		        searchArticleDD.removeChild(x[i]);
		      }
		    }
		  }
	      /*
		  * Auto Complete Input Trigger function 
		  */
		  function inputTriggerAutoFill(e) {
		      let a, b, i, val = this.value,  len = arr.length, upperVal, startsWithChar, regVal;
		      /*close any already open lists of autocompleted values*/
		      closeAllLists();
		      if (!val) {
		      	len = arr.length < 5 ? arr.length : 5;
		      } else {
		      	upperVal = val.toUpperCase()
		      }
		      currentFocus = -1;
		      /*create a DIV element that will contain the items (values):*/
		      a = document.createElement("DIV");
		      a.setAttribute("id", this.id + "autocomplete-list");
		      a.setAttribute("class", "autocomplete-items");
		      /*append the DIV element as a child of the autocomplete container:*/
		      searchArticleDD.appendChild(a);
		      /*for each item in the array...*/
		      for (let i = 0; i < len; i++) {
		      	let autoFilEl = false;
			  	if(!val) {
			  		autoFilEl = true;
			  	} else {
			  		/* check if the starting characters match */
			        startsWithChar = arr[i].title.substr(0, val.length).toUpperCase() == upperVal;
			        /* build a regex with the value entered */
			        regVal = new RegExp(upperVal,"g");
			        /*check if the item starts with the same letters as the text field value:*/
			        if (startsWithChar || includesStr(arr[i].title.toUpperCase(), upperVal)) {
			        	autoFilEl = true;
			        }	
			  	}

			  	// Confinue with the iteration
			  	if(!autoFilEl) {
			  		continue;
			  	}
		        
		        /*create a DIV element for each matching element:*/
		        b = document.createElement("a");
		        b.classList.add("dropdown-item");
		        /*make the matching letters bold:*/
		        if(startsWithChar) {
		          	b.innerHTML = "<strong>" + arr[i].title.substr(0, val.length) + "</strong>" + arr[i].title.substr(val.length);
		        } else if(!val) {
		        	b.innerHTML = arr[i].title;
		        } else {
		          	let startPos = regVal.exec(arr[i].title.toUpperCase()).index;
		          	let startPos2 = startPos + val.length;
		          	b.innerHTML = arr[i].title.substr(0, startPos) + "<strong>" + arr[i].title.substr(startPos, val.length) + "</strong>" + arr[i].title.substr(startPos2);
		        }
		        /*insert a input field that will hold the current array item's value:*/
	        	b.href = arr[i].url;
		        
		        a.appendChild(b);
		      }

		      // If empty then show no results
		      if(isNotEmpty(a) && isEmpty(a.firstChild)) {
		      	b = document.createElement("span");
			    b.classList.add("tripleNineColor");
			    b.innerText = 'No Results';
			    a.appendChild(b);
		      }
		  }

		  /*
		  *	Autocomplete Key down event
		  */
		  function keydownAutoCompleteTrigger(e) {
		  	  let wrapClassId = this.id + "autocomplete-list";
		      let x = document.getElementById(wrapClassId);
		      if (x) x = x.getElementsByTagName("a");
		      if (e.keyCode == 40) {
		        /*If the arrow DOWN key is pressed,
		        increase the currentFocus variable:*/
		        currentFocus++;
		        /*and and make the current item more visible:*/
		        addActive(x);
		      } else if (e.keyCode == 38) { //up
		        /*If the arrow UP key is pressed,
		        decrease the currentFocus variable:*/
		        currentFocus--;
		        /*and and make the current item more visible:*/
		        addActive(x);
		      } else if (e.keyCode == 13) {
		        /*If the ENTER key is pressed, prevent the form from being submitted,*/
		        e.preventDefault();
		        if (currentFocus > -1) {
		          /*and simulate a click on the "active" item:*/
		          if (x) x[currentFocus].click();
		        }
		      }
		      /* set equal to the position of the selected element minus the height of scrolling div */
		      let scrollToEl = $("#" + scrollWrapEl);
		      /* set to top */
		      scrollToEl.scrollTop(0);
		      let ddItemac = $('#' + wrapClassId + ' .autocomplete-active');
		      /* Chceck if elements are present, then scrolls to them */
		      if(ddItemac && scrollToEl && ddItemac.offset() && scrollToEl.offset()) {
	    	  	scrollToEl.scrollTop(ddItemac.offset().top - scrollToEl.offset().top + scrollToEl.scrollTop());
		    }
		}
	}


	// FAQ populate the questions for search
	let faq = [];
	let categoryInformation = window.categoryInfo;
	for(let i = 0, len = categoryInformation.length; i < len; i++) {
		let categoryInfoItem = categoryInformation[i];
		let subCategoryArr = categoryInfoItem.subCategory;

		switch(categoryInfoItem.categoryName) {
			
				case 'Getting Started':
					document.getElementById('gettingStartedCount').innerText = subCategoryArr.length + ' articles';
					break;
				case 'Budget':
					document.getElementById('budgetCount').innerText = subCategoryArr.length + ' articles';
					break;
				case 'Transactions':
					document.getElementById('transactionsCount').innerText = subCategoryArr.length + ' articles';
					break;
				case 'Goals':
					document.getElementById('goalsCount').innerText = isEmpty(subCategoryArr) ? 0  + ' articles' : subCategoryArr.length + ' articles';
					break;
				case 'Financial Accounts':
					document.getElementById('financialAccountsCount').innerText = subCategoryArr.length + ' articles';
					break;
				case 'Miscellaneous':
					document.getElementById('miscellaneousCount').innerText = subCategoryArr.length + ' articles';
					break;
				default:
					break;

		}

		// Is subcategory information is empty then continue
		if(isEmpty(subCategoryArr)) {
			continue;
		}

		for(let j = 0, length = subCategoryArr.length; j < length; j++) {
			// FAQ
			let subCategoryItem = subCategoryArr[j];
			let faqItem = {
				"title" : subCategoryItem.title,
				"url" : categoryInfoItem.dataUrl.slice(0,-1) + subCategoryItem.url
			}
			faq.push(faqItem);
		}
	}

	/*initiate the autocomplete function on the "searchArticle" element, and pass along the countries array as possible autocomplete values:*/
	autocomplete(document.getElementById("searchArticle"), faq, "searchArticleDD");

	// Search clear button
	document.getElementById('search-clear').addEventListener("click",function(e){
		// Search article clear
		document.getElementById('searchArticle').value = '';
	});

	// Search Article focus in
	document.getElementById('searchArticle').addEventListener('focusin', (event) => {
		document.getElementById('searchArticleDD').classList.add('fadeInDown');
		document.getElementById('searchArticleDD').classList.remove('fadeOut');
	});

	// Search Article focus out
	document.getElementById('searchArticle').addEventListener('focusout', (event) => {
		document.getElementById('searchArticleDD').classList.add('fadeOut');
		document.getElementById('searchArticleDD').classList.remove('fadeInDown');
	});

	// Dispatch click event
	let event = new Event('input', {
	    bubbles: true,
	    cancelable: true,
	});

	document.getElementById("searchArticle").dispatchEvent(event);

	
	// On click a tag then
	$( ".landing-page" ).on( "click", "a" ,function() {
		let anchorHref = this.href;
		if(anchorHref.indexOf("http://app.blitzbudget.com") == 0 || 
			anchorHref.indexOf("https://app.blitzbudget.com") == 0 || 
			anchorHref.indexOf("http://www.blitzbudget.com") == 0 || 
			anchorHref.indexOf("https://www.blitzbudget.com") == 0 ||
			anchorHref.indexOf("http://blitzbudget.com") == 0 ||
			anchorHref.indexOf("https://blitzbudget.com") == 0) {
			return true;
		}

		// Add trailing slash at the end if not present
		if(anchorHref.charAt(anchorHref.length - 1) !== "/") {
			anchorHref = anchorHref + '/';
		}

  		// If home page is selected then change classList
		if(((anchorHref || '').match(reForwardSlash) || []).length == 3) {
			// Detect if pushState is available
			if (window.history.pushState) {
	    		window.history.pushState("", 'BlitzBudget Help Center', anchorHref);
	    	}
	    	// Document Title for browser
	    	document.title = 'BlitzBudget Help Center';
			loadHomePage();

			return false;
		}

		// Retrieve categories / articles
		jQuery.ajax({
			url: anchorHref + 'info.json',
	        type: 'GET',
	        success: function(result) {
	        	// Detect if pushState is available
				if (window.history.pushState) {
		    		window.history.pushState(result, result.title, result.url);
		    	}
		    	// Document Title for browser
		    	document.title = result.title;
	        	loadPage(result);
	        	return false;
	        },
	        error: function(userTransactionsList) {
	        	Toast.fire({
					icon: 'error',
					title: "Unable to fetch the requested url"
				});
	        }
		});

		return false;
	});

	// Category Navigations
	populateCategoryNav();

	// Populate Category Navigation
	function populateCategoryNav() {
		let categoryInfo = window.categoryInfo;
		let categoryFragment = document.createDocumentFragment();

		// Category Information iteration
		for(let i=0, len=categoryInfo.length; i<len ; i++) {
			let category = categoryInfo[i];
			// Category 
			categoryFragment.appendChild(uploadCategoryNav(category));
		}

		document.getElementById('category-nav').appendChild(categoryFragment);
	}

	// Category Navigation
	function uploadCategoryNav(category) {
		let categoryDiv = document.createElement('div');
		categoryDiv.classList.add('category-item');

		let anchor = document.createElement('a');
		anchor.href = category.dataUrl;
		anchor.innerText = category.categoryName;
		categoryDiv.appendChild(anchor);

		return categoryDiv;
	}

	// Populate Article Information
	function populateArticleInfo(result) {
		// Update body
    	document.getElementById('article-title').innerText = result.title;
		document.getElementById('article-description').innerText = '';
		let bcEl = document.getElementById('breadcrumb');
		while(bcEl.firstChild) {
			bcEl.removeChild(bcEl.firstChild);
		}
		bcEl.appendChild(populateBreadcrumb(result));
		// Remove article body
		let articleBody = document.getElementById('article-body');
		while(articleBody.firstChild) {
			articleBody.removeChild(articleBody.firstChild);
		}
		
		articleBody.appendChild(populateArticle(result.content));

	}

	// Populate Article
	function populateArticle(content) {
		let articleDiv = document.createDocumentFragment();

		if(isEmpty(content)) {
			return articleDiv;
		}

		for(let i=0, len = content.length; i < len; i++) {
			let contentItem = content[i];
			let tag = document.createElement(contentItem.tag);
			
			// Populate innerHTML
			if(isNotEmpty(contentItem.html)) {			
				tag.innerHTML = contentItem.html;
			}

			// Add class list
			if(isNotEmpty(contentItem.classInfo)) {
				tag.classList = contentItem.classInfo;
			}

			// Add src
			if(isNotEmpty(contentItem.srcUrl)) {
				tag.src = contentItem.srcUrl;
			}

			articleDiv.appendChild(tag);
		}
		return articleDiv;
	}

	// Populate Sub Category Info
	function populateSubCategoryInfo(result) {
		let title = result.title;
		let categoryInfo = window.categoryInfo;

		// Category Information iteration
		for(let i=0, len=categoryInfo.length; i<len ; i++) {
			let category = categoryInfo[i];
			if(isEqual(category.categoryName, title)) {
				// Update body
	        	document.getElementById('article-title').innerText = category.categoryName;
				document.getElementById('article-description').innerText = category.description;
				let bcEl = document.getElementById('breadcrumb');
				while(bcEl.firstChild) {
					bcEl.removeChild(bcEl.firstChild);
				}
				bcEl.appendChild(populateBreadcrumb(result));
				// Remove article body
				let articleBody = document.getElementById('article-body');
				while(articleBody.firstChild) {
					articleBody.removeChild(articleBody.firstChild);
				}
				
				articleBody.appendChild(populateSubCategory(category));

				return;
			}
		}
	}

	// Populate sub category information
	function populateSubCategory(category) {
		let subCategoryDiv = document.createDocumentFragment();
		let subCategoryNav = category.subCategory;

		if(isEmpty(subCategoryNav)) {
			return subCategoryDiv;
		}

		let ul = document.createElement('ul');
		ul.classList.add('sub-category-list');		

		for(let i=0, len = subCategoryNav.length; i < len; i++) {
			let subCategoryNavItem = subCategoryNav[i];
			let li = document.createElement('li');
			li.classList.add('sub-category-li');

			let articleIcon = document.createElement('i');
			articleIcon.classList = 'material-icons align-middle';
			articleIcon.innerText = 'assignment';
			li.appendChild(articleIcon);
	
			let anchorArticle = document.createElement('a');
			anchorArticle.classList.add('sub-category-link');
			anchorArticle.href = category.dataUrl + subCategoryNavItem.url.slice(1);
			anchorArticle.innerText = subCategoryNavItem.title;
			li.appendChild(anchorArticle);
			ul.appendChild(li);
		}

		subCategoryDiv.appendChild(ul);
		return subCategoryDiv;
	}

	// Populate the breadcrumb
	function populateBreadcrumb(result) {
		let breadcrumbDiv = document.createDocumentFragment();
		let breadcrumbSC = result.breadcrumb;

		if(isEmpty(breadcrumbSC)) {
			return breadcrumbDiv;
		}

		// Bread crumb 0
		let breadcrumbAnchor = breadcrumbSC[0];
		let anchorZero = document.createElement('a');
		anchorZero.href = breadcrumbAnchor.crumbUrl;
		anchorZero.classList.add('crumbAnchor');
		anchorZero.innerText = breadcrumbAnchor.crumbTitle;
		breadcrumbDiv.appendChild(anchorZero);	

		for(let i=1, len = breadcrumbSC.length; i < len; i++) {
			let span = document.createElement('span');
			span.classList.add('nextCrumb');
			span.innerText = '>';
			breadcrumbDiv.appendChild(span);

			let breadcrumbAnchor = breadcrumbSC[i];
			let anchorOther = document.createElement('a');
			anchorOther.classList.add('crumbAnchor');
			anchorOther.href = breadcrumbAnchor.crumbUrl;
			anchorOther.innerText = breadcrumbAnchor.crumbTitle;
			breadcrumbDiv.appendChild(anchorOther);
		}

		// Upload the category
		let span = document.createElement('span');
		span.classList.add('nextCrumb');
		span.innerText = '>';
		breadcrumbDiv.appendChild(span);

		// Bread crumb last
		let anchorLast = document.createElement('a');
		anchorLast.href = result.url;
		anchorLast.classList.add('crumbAnchor');
		anchorLast.innerText = result.title;
		breadcrumbDiv.appendChild(anchorLast);

		return breadcrumbDiv;
	}

	// On click Back / forward button move pages
	window.onpopstate = function (event) { 
		let state = ''; 
		// this contains the state data from `pustState`. Use it to decide what to change the page back to.
		if (event.state) { 
		    state = event.state; 
		} 

		if(isEmpty(state)) {
			loadHomePage();
			return;
		}

		// Load the page if state is not empty
		loadPage(state);
	}

	// Load the page
	function loadPage(result) {
		// This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded.Cross-browser supported.
		window.scrollTo(0,0);
		// Switch to category nav
    	document.getElementsByClassName('Hero')[0].classList.add('d-none');
    	document.getElementsByClassName('HelpResult')[0].classList.add('d-none');
		document.getElementsByClassName('CategoryResult')[0].classList.remove('d-none');
    	
    	// Check if subcategory
    	if(result.subcategoryPresent) {
    		// Populate article information
    		populateSubCategoryInfo(result);
    	} else {
    		// Populate article information
    		populateArticleInfo(result);
    	}

	}

	// Load Home page
	function loadHomePage() {
		// This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded.Cross-browser supported.
		window.scrollTo(0,0);
		document.getElementsByClassName('HelpResult')[0].classList.remove('d-none');
		document.getElementsByClassName('Hero')[0].classList.remove('d-none');
		document.getElementsByClassName('CategoryResult')[0].classList.add('d-none');
	}

	// Ask Us Directly
	document.getElementById("askUsDirectly").addEventListener("click",function(e){
		// Show Sweet Alert
        Swal.fire({
        	position: 'bottom-right',
            title: 'Ask us Directly',
            html: askUsDirectly(),
            inputAttributes: {
                autocapitalize: 'on'
            },
            confirmButtonClass: 'btn btn-info',
            confirmButtonText: 'Send',
            showCloseButton: true,
            buttonsStyling: false
        }).then(function(result) {
            // If confirm button is clicked
            if (result.value) {
                // Update User Name 
				
            }

        });
	});

	// HTML for ask us directly
	function askUsDirectly() {
		let changePassFrag = document.createDocumentFragment();

		let emailinput = document.createElement('input');
		emailinput.id='emailIdASD';
		emailinput.setAttribute('type','email');
		emailinput.setAttribute('autocapitalize','off');
		emailinput.setAttribute('spellcheck','false');
		emailinput.setAttribute('autocorrect','off');
		emailinput.setAttribute('autocomplete','off');
		changePassFrag.appendChild(emailinput);

		let textArea = document.createElement('textarea');
		textArea.classList = '';

	}
}(jQuery));
		