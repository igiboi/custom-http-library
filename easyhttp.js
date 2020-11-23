function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  this.http.onload = () => {
    if(this.http.status === 200) {
      callback(null, this.http.responseText);
    } else {
      callback('Error: ' + this.http.status);
    }
  }
  this.http.send(); 
}

// HTTP Post Request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  this.http.onload = () => {
   callback(null, this.http.responseText);
}
  this.http.send(JSON.stringify(data));
}


// HTTP PUT Request



// HTTP DELETE Request