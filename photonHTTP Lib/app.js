const http = new PhotonHTTP();

http.get('https://jsonplaceholder.typicode.com/users').then(data=> console.log(data)).catch(err => console.log(err))