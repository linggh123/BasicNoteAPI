### example
const obj1 = { firstName: 'Breat', age: 22 };

const obj2 = { lastName: 'Brout', gender: 'M' };

const newObj = { ...obj1, ...obj2, planet: 'Earth' };

console.log(newObj)

>> { firstName: 'Breat', age: 22, lastName: 'Brout', gender: 'M', planet: 'Earth' }
#### 
Here, the newObj has the properties of obj1, obj2. It also has an extra property planet.
newObj is a copy of the obj1 and obj2. Actually, any enumerable property on objects will be copied to newObj. The copying process using spread operator is shallow. There are some differences between copying using spread operator and copying using Object.assign. Advance users may want to refer to this.

 - actually this is like mergering 1 obejct with another object using " ... (variable name) "