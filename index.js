console.log('Hello ')

function Add () {
    first = parseInt(document.getElementById("fir").value);
 sec = parseInt(document.getElementById("sec").value);
 Addition =  first + sec;
   console.log(Addition);
   document.getElementById('span1').innerText = ('Additon is:')
  reslt = document.getElementById('result1').innerHTML = (Addition);
  
}

function sub () {
   first = document.getElementById("fir").value;
sec = document.getElementById("sec").value;
  subt =  first - sec;
  document.getElementById('span2').innerText = ('Subtraction is:')
  reslt = document.getElementById('result2').innerHTML = (subt);
 
}

function div () {
   first = document.getElementById("fir").value;
sec = document.getElementById("sec").value;
  divn =  first / sec;
  document.getElementById('span3').innerText = ('Division is:')
  reslt = document.getElementById('result3').innerHTML = (divn);
 
}

function mul () {
   first = document.getElementById("fir").value;
sec = document.getElementById("sec").value;
  mult =  first * sec;
  document.getElementById('span4').innerText = ('Multiplication is:')
  reslt = document.getElementById('result4').innerHTML = (mult);
 
}

