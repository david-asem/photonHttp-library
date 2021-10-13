const http = new PhotonHTTP();

// //get a user
// http.get('https://jsonplaceholder.typicode.com/users').then(data=> console.log(data)).catch(err => console.log(err))

//user data
const data = {
  name: 'David Asem',
  username: 'davidass',
  email:'davidass@johndoe.com'
}

// //create a user
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

  //update a user
// http.put('https://jsonplaceholder.typicode.com/users/5', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


//delete user
  http.delete('https://jsonplaceholder.typicode.com/users/1')
  .then(data => console.log(data))
  .catch(err => console.log(err));