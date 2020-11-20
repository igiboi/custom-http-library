const http = new easyHTTP; 

// GET Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(response) {
  console.log(response);
});