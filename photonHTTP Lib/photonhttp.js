/**
 * PhotonHTTP Library
 * A library for making HTTP requests.
 * Written with Fetch API, ES6 classes, Async/Await
 * 
 * @version 1.0.0
 * @author David Asem
 * @license MIT
 * @copyright Oct 2021
 * 
 **/

class PhotonHTTP {
  //make an HTTP GET request
  async get(url) {
    const response = await fetch(url);
    const responseData = await response.json();

    return responseData;
    
      
  }

  //make an HTTP POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
  
  }

  //make an HTTP PUT request
  async put(url, data) {
    
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
  }

  //make an HTTP DELETE request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      }
    });

    const responseData = await 'Resource deleted successfully....'
    return responseData;
  }
}