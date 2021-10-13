/**
 * PhotonHTTP Library
 * A library for making HTTP requests.
 * Written with Fetch API, ES6 classes, Promises
 * 
 * @version 1.0.0
 * @author David Asem
 * @license MIT
 * @copyright Oct 2021
 * 
 **/

class PhotonHTTP {
  //make an HTTP GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
    });
    
      
  }

  //make an HTTP POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
  }

  //make an HTTP PUT request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
        .then(data => resolve(data))
        .catch(err=>reject(err))
    })
  }

  //make an HTTP PUT request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        }
      }).then(res => res.json())
        .then(()=> resolve('Resource deleted....'))
        .catch(err=>reject(err))
    })
  }
}