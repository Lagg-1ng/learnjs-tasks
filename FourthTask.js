export function calcString(){
var str =  "один три два три три три";
  var words = str.split(" ");
  var collect = {};

  for (var i = 0; i < words.length; i++) {
    if (!collect[words[i]])
      collect[words[i]] = 0;
      collect[words[i]]++;
  }

  for(var word in collect)
      console.log(word, collect[word]);
}