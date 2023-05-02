export const markupText = (text, identifier, htmltag) => {
  var array = text.split(identifier);
  var previous = "";
  var previous_i;
  for (let i = 0; i < array.length; i++) {
    if (i % 2) {
      //odd number
    } else if (i !== 0) {
      previous_i = eval(i - 1);
      array[previous_i] = "<" + htmltag + ">" + previous + "</" + htmltag + ">";
    }
    previous = array[i];
  }
  var newtext = "";
  for (let i = 0; i < array.length; i++) {
    newtext += array[i];
  }
  return newtext;
};
