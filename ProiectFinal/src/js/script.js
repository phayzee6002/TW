
window.onload = function() {
  ravase();
  orar();
  title_anim();
  word_anim();
  time_spent();
  timeFunction();
  hello();

}

//* TASK 1.7
function ravase() {
  var s = Math.floor(Math.random() * 4);
  var quotes = [
    "A reader lives a thousand lives before he dies . . . The man who never reads lives only one. – George R.R. Martin",
    "Until I feared I would lose it, I never loved to read. One does not love breathing. – Harper Lee",
    "Never trust anyone who has not brought a book with them. – Lemony Snicket",
    "You can never get a cup of tea large enough or a book long enough to suit me. – C.S. Lewis"
  ];
  br1 = document.createElement("br");
  br2 = document.createElement("br");

  document.getElementById("column-left").append(quotes[s]);
  document.getElementById("column-left").append(br1);
  document.getElementById("column-left").append(br2);

}  

//* TASK 1.6
function orar() {

  let open_hour = new Date();
  let close_hour = new Date();
  let systemdate = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  open_hour.setHours(08);
  close_hour.setHours(24);

  if ((open_hour < systemdate && close_hour > systemdate) && (weekday[systemdate.getDay()]!="Sunday")) {
    var p = document.createElement("h2");
    p.style.color = "#006600";
    p.style.textShadow = 0;
    p.style.fontWeight = 900;
    p.appendChild(document.createTextNode("CURRENTLY OPEN"));
    document.getElementById("column-right").appendChild(p);
  }
  else {
    var p = document.createElement("h2");
    p.style.color = "red";
    p.style.textShadow = 0;
    p.style.fontWeight = 900;
    p.appendChild(document.createTextNode("CURRENTLY CLOSED"));
    document.getElementById("column-right").appendChild(p);
  };

  var p1 = document.createElement("h4");
  p1.setAttribute("id","time-left");
  p1.style.color = "#660033";
  document.getElementById("column-right").appendChild(p1);

  var countDownDate = new Date("Jun 29, 2020 08:00:0").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // // Output the result in an element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";
    document.getElementById("time-left").innerHTML ="Time until OPENS: "+ days + "d " + hours + "h "
    + minutes + "m " + seconds + "s "

  }, 1000);

}

//* TASK 2.3
function title_anim() {
  var title = "BIBLIOTECA NATIONALA"
  document.getElementById("title").innerHTML = ""

  let n =title.length;
  let k = 0;
  animation = setInterval(function() {
    let insert = title[k] + title[n-k-1];
    len = document.getElementById("title").length;
    remake = document.getElementById("title").innerHTML.slice(0, k) + insert + document.getElementById("title").innerHTML.slice(k, len);
    document.getElementById("title").innerHTML=remake;

    k++;

    if (k>=n/2) {
      clearInterval(animation);
    }
  }, 100);
};

//* TASK 2.2
function word_anim() {
  let paragraph = "In urma recentelor evenimente privind pandemia de COVID-19, Biblioteca Nationala NU LUCREAZA CU PUBLICUL pe perioada starii de urgenta Prin urmare, Biblioteca Nationala pune a dispozitie toate materialele in format digital Pentru a le viziona, accesati RESURSE DIGITALE In urma recentelor evenimente privind pandemia de COVID-19, Biblioteca Nationala NU LUCREAZA CU PUBLICUL pe perioada starii de urgenta!!! Prin urmare, Biblioteca Nationala pune a dispozitie toate materialele in format digital Pentru a le viziona, accesati RESURSE DIGITALE";
  let txt = paragraph.split(" ")
  let count=0;
  num = txt.length;


  animation1 = setInterval(function() {
    document.getElementById("column-left").append(txt[count] + " ");

    count++

    if (count>=num) {
      clearInterval(animation1);
    }
  }, 300);

};

//* TASK 2.4
function time_spent() {
  var timer;
  var timerStart;
  var timeSpentOnSite = getTimeSpentOnSite();

  function getTimeSpentOnSite(){
      timeSpentOnSite = parseInt(localStorage.getItem('timeSpentOnSite'));
      timeSpentOnSite = isNaN(timeSpentOnSite) ? 0 : timeSpentOnSite;
      return timeSpentOnSite;
  }

  function startCounting(){
      timerStart = Date.now();
      timer = setInterval(function(){
          timeSpentOnSite = getTimeSpentOnSite()+(Date.now()-timerStart);
          localStorage.setItem('timeSpentOnSite',timeSpentOnSite);
          timerStart = parseInt(Date.now());

          distance = timeSpentOnSite;
          var hours = Math.floor((timeSpentOnSite % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((timeSpentOnSite % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((timeSpentOnSite % (1000 * 60)) / 1000);
      

          document.getElementById("time-spent").innerHTML =hours + "h "
          + minutes + "m " + seconds + "s "
      
      },1000);
  }
  startCounting();
}

//* TASK 2.13
function count_words() {
  var body = document.getElementById("body");
  console.log(body);
  var total_words = 0;
  total_words += body.innerText.trim().split(/\s+/).length;
  document.getElementById("column-right").innerHTML += total_words + " words";
}

//* TASK 2.13
function timeFunction() {
  setTimeout(function(){count_words()}, 25000);
}

//* TASK 1.16
function hello() {
  var person = prompt("Cum te numesti?", " ");
  if (person != null) {
    document.title = "Salut, " + person;
  
  hello = setTimeout(function() {
    document.title = "Biblioteca Nationala";
    }, 2000)
  }

}