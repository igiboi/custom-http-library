function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  this.http.onload = function() {
    if(this.http.status === 200) {
      callback(this.http.responseText);
    }
  }
  this.http.send(); 
}

// HTTP Post Request



// HTTP PUT Request



// HTTP DELETE Request