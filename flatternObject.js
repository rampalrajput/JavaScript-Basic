
let obj = {
    id: 12,
    coutry: [{
        state: 'MP',
        city: {
            Bhopal: "Narela",
            Indore: "VijayWada",
            Nagpur: "Delhi",
            Ahmedabad: "VijayWada"
        }
    }]
}

// reterive the objects:

function flatternObject(obj) {
    
    for (let [key, value] of Object.entries(obj)) {
              
    }
}

function flattenObject(obj, prefix = "") {
    let result = {};
  
    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}.${key}` : key; // Build the key path
  
      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        // Recursively flatten the nested object
        Object.assign(result, flattenObject(value, newKey));
      } else {
        // Assign the value directly for non-object values
        result[newKey] = value;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const nestedObject = {
    id: 12,
    country: {
      state: "MP",
      city: {
        Bhopal: "Narela",
        Indore: "VijayWada",
      },
    },
    details: {
      population: 100000,
      language: {
        primary: "Hindi",
        secondary: "English",
      },
    },
  };
  
  const flattened = flattenObject(nestedObject);
  console.log(flattened);
  