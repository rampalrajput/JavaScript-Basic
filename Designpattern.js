/* a. Factory Pattern
Creates objects without specifying the exact class of the object. */

function createUser(type) {
    if (type === 'admin') {
      return { role: 'admin', canAccess: true };
    } else {
      return { role: 'guest', canAccess: false };
    }
  }
  
  const admin = createUser('admin'); // { role: 'admin', canAccess: true }
  const guest = createUser('guest'); // { role: 'guest', canAccess: false }
  

/// SingleTon Pattern 

//Singleton Pattern
//Ensures a class has only one instance and provides a global access point.

const Singleton = (function () {
    let instance;
  
    function createInstance() {
      return { data: 'I am the singleton instance' };
    }
  
    return {
      getInstance: function () {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  console.log(instance1 === instance2); // true
  
//Defines a subscription mechanism to notify multiple objects about state changes

class Subject {
    constructor() {
      this.observers = [];
    }
    subscribe(observer) {
      this.observers.push(observer);
    }
    notify(data) {
      this.observers.forEach(observer => observer(data));
    }
  }
  
  const subject = new Subject();
  
  subject.subscribe(data => console.log(`Observer 1: ${data}`));
  subject.subscribe(data => console.log(`Observer 2: ${data}`));
  
  subject.notify('Hello Observers!'); 
  // Observer 1: Hello Observers!
  // Observer 2: Hello Observers!
  