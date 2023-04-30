document.getElementById('book').value = getQueryParam('book').replaceAll('%',' ');

document.getElementById('author').value = getQueryParam('author').replaceAll('%',' ');

document.getElementById('genre').value = getQueryParam('genre').replaceAll('%',' ');

document.getElementById('pages').value = getQueryParam('pages').replaceAll('%',' ');

document.getElementById('price').value = getQueryParam('price').replaceAll('%',' ');

// Assure the number of copies >= 1
function checkCopiesNumberValidaty(element) {
    let initialValue = element.defaultValue;
    if (element.value < initialValue) {
        element.value = initialValue;
    } 
}

function addPurchases() {
  // get the form
  const _book = document.forms['shopping-form'].elements['book'].value;
  const _author = document.forms['shopping-form'].elements['author'].value;
  const _price = document.forms['shopping-form'].elements['price'].value;
  const _pages = document.forms['shopping-form'].elements['pages'].value;
  const _copies = document.forms['shopping-form'].elements['copies'].value;
  const _genre = document.forms['shopping-form'].elements['genre'].value;

  // Save purchase
  if(document.cookie.length == 0){
    document.cookie = "";
    document.cookie = JSON.stringify([{"book": _book,"author": _author,"price": _price,"pages": _pages,"copies": _copies,"genre": _genre}]);
  }
  else {
    let purchases = JSON.parse(document.cookie);
    purchases.push({"book": _book,"author": _author,"price": _price,"pages": _pages,"copies": _copies,"genre": _genre});
    document.cookie = JSON.stringify(purchases);
  }
}