var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "I hvilket land er London hovedstaden?", "Danmark", "England", "Tyskland", "B" ],
  [ "Hvilket sprog snakker man i England?", "Spansk", "Dansk", "Engelsk", "C" ],
  [ "Hvilken sport er den mest sete i England?", "Fodbold", "Håndbold", "Tennis", "A" ],
  [ "Hvilken ret er Typisk at få i London?", "Pølser med kethchup", "Steak med sovs", "Fisk med pomfritter", "C" ],
  [ "Er England en del Af EU?", "Ja", "Nej", "Hvad er EU", "A" ],
  [ "Hvilken religon er med udbredt i England?", "Islam", "Kristendom", "Jødedom", "B" ],
  [ "Hvilken valuta bruger man i London?", "Dollar", "Euro", "Pund", "C" ],
  [ "Hvad er Big Ben?", "Et slot", "Et ur", "En lampe", "B" ],
  [ "Hvad hedder den ikoniske bro i London", "The bridge", "England bridge", "Tower bridge", "C" ],
  [ "Hvad er London eye?", "Et Pariserhjul", "En hoppeborg", "En rutjebane", "A" ]
];
function _(x){
  return document.getElementById(x);
}
function renderQuestion(){
  test = _("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>Du fik "+correct+" of "+questions.length+" Svar rigtige</h2>";
    _("test_status").innerHTML = "Quizzen er færdig";
    pos = 0;
    correct = 0;
    return false;
  }
  _("test_status").innerHTML = "Spørgsmål "+(pos+1)+" ud af "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  test.innerHTML = "<h3>"+question+"</h3>";
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Svar</button>";
}
function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos][4]){
    correct++;
  }
  pos++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
