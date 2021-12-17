function solution(string) {
  let finalString = '';
  for(let i = 0; i < string.length; i++){
     finalString += string[i] == string[i].toUpperCase() ? ' ': '';
    finalString += string[i];
  }
  return finalString;
}

solution('camelCase');

