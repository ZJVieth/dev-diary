/**
 * # Javascript Color Utilities
 * <[js <[color <[util
 *
 * <°Code snippets and functions related to colors in javascript.°>
 *
 */

/*
 * <[hex <[random
 */
const getRandomHexColor = () => {
  const randomValue = Math.floor(Math.random() * 0xffffff);
  const hexValue = randomValue.toString(16);
  return hexValue.padStart(6, "0");
}