/**
 * # Javascript Object Proxies
 * <[js <[proxy <[object
 *
 * <°Example code for how to use proxies in javascript.°>
 *
 *[https://fjolt.com/article/javascript-proxy-object]
 */
 
 const target = {
  fName: "Max",
  lName: "Muster",
  age: 24
}

const handler = {
  // Get: traps "obj.key" call
  get: (obj, prop, receiver) => {
    console.log("Getting:", prop)
  }, 
  
  // Set: traps "obj[key] = " call?
  set: (obj, prop, value) => {
    if (typeof obj[prop] === "number" && typeof value === "number")
      console.log(`${prop} changed by ${value - obj[prop]}`)
    return obj[prop]
  },
  
  // DefineProperty: traps "objs[key] = " and "Object.defineProperty()" calls.
  // Set will overwrite defineProperty for "obj[key] = " calls
  defineProperty: (obj, prop, value) => {
    console.log(`Defining property ${prop} with value ${value}.`
    return obj[prop]
  }
  
  // Has: traps "in" call
  has: (obj, prop, receiver) => {
    if (object[prop] === undefined)
      console.log("Property does not exist")
    return object[prop] 
  },
  
}  

const proxyEx = new Proxy(target, handler)


console.log(proxyEx.name) // triggers get

proxyEx['age'] = 50
Object.defineProperty(proxyEx, "title", "Mister")


console.log('address' in proxyEx) // triggers has
