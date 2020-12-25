function myHTMLFetch(url, type){
  return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    
    xhr.responseType = 'json'; 

    xhr.open(type, url, true);

    if (type === 'POST') {
      xhr.send(JSON.stringify( { "id": 4, "title": "Post 4" }));
    } else {
      xhr.send();
    };

    xhr.onload = () => {
      if (xhr.status !== 200) {
        resolve(xhr.response); 
      } else {
        reject(`not correct`);
      }
    };
  })
}