document.body.style.filter = "blur(0px)";


// Create or open the IndexedDB database
var db;
var request = window.indexedDB.open('myDatabase', 1);

request.onerror = function(event) {
  console.error('Error opening database:', event.target.errorCode);
};

request.onsuccess = function(event) {
  db = event.target.result;
};

request.onupgradeneeded = function(event) {
  db = event.target.result;

  // Create an object store to store the background image URL
  var objectStore = db.createObjectStore('settings', { keyPath: 'id' });
};

function checkValid(imageURL) {
  if (imageURL.includes("https://") || imageURL.includes("http://") && imageURL.length > 10 || imageURL.includes('/assets/bg.jpg')) {
    return true;
  } else {
    return false;
  }
}

function changeBackground() {
  var imageUrl = document.getElementById('backgroundInput').value;

  var isValid = checkValid(imageUrl);
  if (isValid) {
    // Store the background image URL in IndexedDB
    var transaction = db.transaction(['settings'], 'readwrite');
    var objectStore = transaction.objectStore('settings');
    var data = { id: 'backgroundImage', url: imageUrl };
    var request = objectStore.put(data);

    request.onsuccess = function() {
      var text = document.querySelector(".settings-error");
      text.style.color = "#fff";
      text.style.display = "block";
      text.innerText = "Background Added";
      document.getElementById('backgroundInput').value = "";
      setTimeout(function() {
        text.style.display = "none";
      }, 3000);
    };

    request.onerror = function(event) {
      console.error('Error storing background image URL:', event.target.error);
    };
  } else {
    var text = document.querySelector(".settings-error");
    text.style.color = "red";
    text.style.display = "block";
    text.innerText = "Valid URL Please";
    document.getElementById('backgroundInput').value = "";
    setTimeout(function() {
      text.style.display = "none";
    }, 3000);
  }
}

function reset() {
  var imageUrl = "./assets/bg.jpg";

  var isValid = checkValid(imageUrl);
  if (isValid) {
    // Store the background image URL in IndexedDB
    var transaction = db.transaction(['settings'], 'readwrite');
    var objectStore = transaction.objectStore('settings');
    var data = { id: 'backgroundImage', url: imageUrl };
    var request = objectStore.put(data);

    request.onsuccess = function() {
      var text = document.querySelector(".settings-error");
      text.style.color = "#fff";
      text.style.display = "block";
      text.innerText = "Background Reset";
      document.getElementById('backgroundInput').value = "";
      setTimeout(function() {
        text.style.display = "none";
      }, 3000);
    };

    request.onerror = function(event) {
      console.error('Error storing background image URL:', event.target.error);
    };
  } else {
    var text = document.querySelector(".settings-error");
    text.style.color = "red";
    text.style.display = "block";
    text.innerText = "Valid URL Please";
    document.getElementById('backgroundInput').value = "";
    setTimeout(function() {
      text.style.display = "none";
    }, 3000);
  }
}



function changeBackgroundREC(imgurl) {
  var imageUrl = imgurl;

  var isValid = checkValid(imageUrl);
  if (isValid) {
    // Store the background image URL in IndexedDB
    var transaction = db.transaction(['settings'], 'readwrite');
    var objectStore = transaction.objectStore('settings');
    var data = { id: 'backgroundImage', url: imageUrl };
    var request = objectStore.put(data);

    request.onsuccess = function() {
      var text = document.querySelector(".settings-error");
      text.style.color = "#fff";
      text.style.display = "block";
      text.innerText = "Background Changed";
      document.getElementById('backgroundInput').value = "";
      setTimeout(function() {
        text.style.display = "none";
      }, 3000);
    };

    request.onerror = function(event) {
      console.error('Error storing background image URL:', event.target.error);
    };
  } else {
    var text = document.querySelector(".settings-error");
    text.style.color = "red";
    text.style.display = "block";
    text.innerText = "Valid URL Please";
    document.getElementById('backgroundInput').value = "";
    setTimeout(function() {
      text.style.display = "none";
    }, 3000);
  }
}

function changeSearch(searchEngine) {
  var searchUrl;

  // Determine the search engine URL based on the selected search engine
  switch (searchEngine) {
    case 'yahoo':
      searchUrl = 'https://search.yahoo.com/search?q=%s';
      break;
    case 'google':
      searchUrl = 'https://www.google.com/search?q=%s';
      break;
    case 'bing':
      searchUrl = 'https://www.bing.com/search?q=%s';
      break;
    case 'duckduckgo':
      searchUrl = 'https://duckduckgo.com/?q=%s';
      break;
    default:
      return; // If an invalid search engine is selected, do nothing
  }

  // Store the search engine URL in IndexedDB
  var transaction = db.transaction(['settings'], 'readwrite');
  var objectStore = transaction.objectStore('settings');
  var data = { id: 'searchEngine', url: searchUrl };
  var request = objectStore.put(data);

  request.onsuccess = function() {
    var text = document.querySelector(".settings-error1");
    text.style.color = "#fff";
    text.style.display = "block";
    text.innerText = "Search Changed";
    setTimeout(function() {
      text.style.display = "none";
    }, 3000);
  };
  

  request.onerror = function(event) {
    console.error('Error storing search engine URL:', event.target.error);
  };
}

function changeBackgroundRE(imgurl) {
  var imageUrl = imgurl;

  var isValid = checkValid(imageUrl);
  if (isValid) {
    // Store the background image URL in IndexedDB
    var transaction = db.transaction(['settings'], 'readwrite');
    var objectStore = transaction.objectStore('settings');
    var data = { id: 'backgroundImage', url: imageUrl };
    var request = objectStore.put(data);

    request.onsuccess = function() {
      var text = document.querySelector(".settings-error");
      text.style.color = "#fff";
      text.style.display = "block";
      text.innerText = "Background Changed";
      document.getElementById('backgroundInput').value = "";
      setTimeout(function() {
        text.style.display = "none";
      }, 3000);
    };

    request.onerror = function(event) {
      console.error('Error storing background image URL:', event.target.error);
    };
  } else {
    var text = document.querySelector(".settings-error");
    text.style.color = "red";
    text.style.display = "block";
    text.innerText = "Valid URL Please";
    document.getElementById('backgroundInput').value = "";
    setTimeout(function() {
      text.style.display = "none";
    }, 3000);
  }
}


function deleteTileOrderFromLocalStorage() {
  localStorage.removeItem("tileOrder");
  var text = document.querySelector(".settings-error2");
  text.style.color = "#fff";
  text.style.display = "block";
  text.innerText = "Shortcuts Reset";
  setTimeout(function() {
    text.style.display = "none";
  }, 3000);
}