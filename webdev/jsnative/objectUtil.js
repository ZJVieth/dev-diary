/**
 * # Javascript Object Util
 * <[js <[object <[util
 *
 * <°Code snippets and functions related to javascript objects.°>

/*
 * <[empty
 */
const isObjectEmpty = (object) => {
  if (object.constructor !== Object) return false;
  // Iterates over the keys of an object, if
  // any exist, return false.
  for (_ in object) return false;
  return true;
};


/*
 * these need testing
 */
const forEachKey = (obj, callback) => {
  Object.keys(obj).forEach((key, i) => {
    callback(key, obj[key], i)
  })
}

const mapKeys = (obj, callback) => {
  return Object.keys(obj).map((key, i) => {
    callback(key, obj[key], i)
  })
}
