$(document).ready(function() {


  var phrase = "One small step for man, one giant leap for mankind."
  var letters = ""

  for (index = 0; index < phrase.length; index += 1) {
      var letter = phrase[index].replace(/a|e|i|o|u/gi, "-");
      letters += letter

    }

    $("#puzzle").text(letters);
    
  });
