module.exports =function check(str, settings) {

  function checkRule(str, arrRule) {
      
    let newArr = [];
    let rule = ""+arrRule[0]+arrRule[1];
debugger;
    if (str.indexOf(rule) !== -1) {
      newArr = str.split("");
      for (var i = 0; i < newArr.length; i++) {
        if (newArr[i] + newArr[i + 1] == rule) {
         newArr.splice(i, 2);
         }
      }
      str = newArr.join("");
    }
    return str;
  }
  function finishResalt(str, arrRule) {
    let rule = "" + arrRule[0] + arrRule[1];
    if(str == rule || str == ""){
      return true;
    }
    return false;
  }
  
  let numb = 0;
  while (numb < 30){
  for (var i = 0; i < settings.length; i++) {
    str = checkRule(str,settings[i]);
  }
    numb++
  }
  let res;
for (var i = 0; i < settings.length; i++){
 res = finishResalt(str,settings[i]);
  if(res){
    break;
  }
}

return res

}
