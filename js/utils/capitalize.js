/**
 * Capitalize the first character of a string
 *
 * @param  {String} str
 * @return {String}     The same string with the first character capitalized
 */
export default (str) =>  {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
