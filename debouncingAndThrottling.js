
/// debouncing technique

function debouncing(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args); // Correctly passing arguments as an array
        }, delay);
    };
}

function demo() {

    console.log(" debouncing techinque implemented");
}

const debouncedDemo = debouncing(demo, 1000);

debouncedDemo();
debouncedDemo();
debouncedDemo();
debouncedDemo();


/// throtlling techinque implementation..

function throtlling(func, interval) {
    let lastcall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastcall >= interval) {
            lastcall = now;
            func.apply(this, args);
        }
    }
}

function mytest() {
    console.log(" I am throttling function");
}

const throttlingImplementation = throtlling(mytest,1000000);

throttlingImplementation();
throttlingImplementation();
throttlingImplementation();