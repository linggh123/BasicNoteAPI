An async function is a function declared with the async keyword. Async functions are instances of the AsyncFunction constructor, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

## example of async function that using promise
function logFetch(url) { return fetch(url) .then(response => response.text()) .then(text => { console.log(text); }).catch(err => { console.error('fetch failed', err); }); }
