// Shallow Copy vs. Deep Copy

// Shallow Copy
// Shallow copy creates a new object or array and copies the references of the original elements into the new object or array.
// This means that while the top-level structure is duplicated, the nested objects or arrays still reference the original elements. Changes made to nested elements in the copy affect the original, and vice versa.
// Deep Copy
// Deep copy creates a completely new object or array and recursively copies all elements, including nested objects or arrays.
// This means that both the top-level structure and nested elements are duplicated, resulting in two independent sets of data. Changes made to elements in the copy do not affect the original, and vice versa.

// Use Cases

// Shallow Copy
// Shallow copy is suitable when you only need to duplicate the top-level structure and don't want to create multiple copies of nested elements.
// It's often used when dealing with simple data structures or when performance is a concern, as it's faster and requires less memory than deep copy.

// Deep Copy
// Deep copy is necessary when you need to create independent copies of nested elements and ensure that changes made to the copy do not affect the original data.
// It's commonly used when working with complex data structures or when data immutability is required, such as when dealing with state management in applications.

// Examples

// Shallow Copy Example
const originalData = { name: 'John', hobbies: ['reading', 'gaming'] };
const shallowCopy = { ...originalData }; // Shallow copy using object spread syntax

shallowCopy.hobbies.push('cooking');

console.log(originalData);   // { name: 'John', hobbies: ['reading', 'gaming', 'cooking'] }
console.log(shallowCopy); // { name: 'John', hobbies: ['reading', 'gaming', 'cooking'] }

// Deep Copy Example
function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }
    return copy;
}

const originalObject = { name: 'John', hobbies: ['reading', 'gaming'] };
const deepCopyObject = deepCopy(originalObject);

deepCopyObject.hobbies.push('cooking');

console.log(originalObject);   // { name: 'John', hobbies: ['reading', 'gaming'] }
console.log(deepCopyObject);   // { name: 'John', hobbies: ['reading', 'gaming', 'cooking'] }

// In the shallow copy example, changes to the shallowCopy object's nested array also affect the original object's nested array. In contrast, in the deep copy example, the changes made to the deepCopy object do not affect the original object.

