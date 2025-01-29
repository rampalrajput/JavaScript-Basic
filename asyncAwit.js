let promise1 = new Promise((resolve, reject) => {
    // Resolves immediately with "Hello! "
    setTimeout(() => {
        // Resolves after 1 second with "GeeksforGeeks"
        resolve("GeeksforGeeks");
    }, 5000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Resolves after 1 second with "GeeksforGeeks"
        resolve("5sfasf");
    }, 2000);
});

// Chain the promises to execute sequentially
promise1.then((result1) => {
    // Logs result from promise1
    console.log(result1);
    // Returns promise2 to chain
    return promise2;
}).then((result2) => {
    // Logs result from promise2
    console.log(result2);
});