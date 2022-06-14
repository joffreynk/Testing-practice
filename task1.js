const stringLength = (string) => {
  if(string.length < 1 || string.length > 10 ) throw new Error('your string is between 1 and 10 characters');
  const count = {};
  for(let i = 0; i<string.length; i++){
    count.hasOwnProperty(string[i])?count[string[i]]++:count[string[i]] = 1;
  }
  return count;
}

module.exports = stringLength;