const http = new easyHTTP; 
// you can use the same url but has to be different methods
// GET Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
  if(err) {
    console.log(err)
  } else {
    console.log(response);
  }
});

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};
// POST request
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
  if(err) {
    console.log(err)
  } else {
    console.log(post);
  }
});