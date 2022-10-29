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
