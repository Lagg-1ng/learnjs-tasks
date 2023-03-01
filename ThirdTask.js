export function StringOperations(){
    var str = "один три два три пять три";
    var words = str.split(" ");
    var collect = 0;

    for (var i = 0; i < words.length; i++) {
        collect++;
    }

    console.log(collect);
}