export function TextModifire(){
   let text = 'Abscd Sample text';
    let capital = text[0].toUpperCase()
    let modifiedtext = text.slice(1).toLowerCase();
    let NewText = capital+modifiedtext;
    console.log(NewText);
}