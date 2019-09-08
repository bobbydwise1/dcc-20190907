/*
This problem was asked by Amazon.

Given a string s and an integer k, break up the string into multiple lines such that each line has a length of k or less. You must break it up so that words don't break across lines. Each line has to have the maximum possible amount of words. If there's no way to break the text up, then return null.

You can assume that there are no spaces at the ends of the string and that there is exactly one space between each word.

For example, given the string "the quick brown fox jumps over the lazy dog" and k = 10, you should return: ["the quick", "brown fox", "jumps over", "the lazy", "dog"]. No string in the list has a length of more than 10.
*/

const multiline = (yourString, k) => {
  let copied = yourString.split(" ")
  let output = []
  for ( element of copied ) {
    if ((output.length == 0)|| (output[output.length-1].length + element.length + 1 > k )) {
      output.push(element)
    } else {
      output[output.length-1] = output[output.length-1] + ' ' +  element
    }
  }
  return output
}

const test0string = 'The quick brown fox jumps over the lazy dog.'
const test0k = 10
const test1string = 'The rain in Spain rains again.'
const test1k = 15

console.log(multiline(test0string,test0k))
console.log(multiline(test1string,test1k))

$(document).ready(function() {

  $('#form1').submit(function(){
    event.preventDefault()
    input1 = $('#input-1').val()
    console.log(input1)
    input2 = $('#input-2').val()
    console.log(input1)
    console.log(input2)
    $('#output-1').text(JSON.stringify(multiline(input1,input2)))
  })

});
