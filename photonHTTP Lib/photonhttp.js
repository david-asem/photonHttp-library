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
}