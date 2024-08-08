
module.exports = function check(str, bracketsConfig) {
  let bracketsStack = [];
  bracketsConfig = Object.fromEntries(bracketsConfig);
  for(let i = 0; i < str.length; i++){
    if((bracketsStack[bracketsStack.length - 1] !== str[i] && bracketsConfig[str[i]] === str[i])){
      bracketsStack.push(str[i]);
    }
    else if(bracketsConfig[str[i]] && bracketsConfig[str[i]] !== str[i]){
      bracketsStack.push(str[i]);
    }else if(bracketsConfig[bracketsStack[bracketsStack.length - 1]] === str[i] && bracketsStack.length !== 0){
      bracketsStack.pop();
    }else{
      return false;
    }
  }
  return bracketsStack.length === 0;
}
