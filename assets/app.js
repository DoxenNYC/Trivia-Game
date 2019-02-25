var Questions = [
    new triviaQuestion("How many championships have the Knicks won?",["3", "9", "2", "5"],2),
    
    new triviaQuestion("What arena do the Knicks play in?",["Madison Square Garden", "Barclays Center", "TD Garden", "Staples Center"],0),
    
    new triviaQuestion("Which of these players were NOT drafted by the Knicks?",["Kevin Knox", "Patrick Ewing", "Carmelo Anthony", "Kristaps Porzingis"],2),
    
    new triviaQuestion("What number did famous Knick Patrick Ewing wear during his Knicks career?",["53", "23", "3", "33"],3),
    
    new triviaQuestion("In 2012, Jeremy Lin had an amazing run who helped the Knicks win many games. What was the nickname for that run?",["Linspiring", "Linton", "Linsanity", "Linwinning"],2),
    
    new triviaQuestion("What celebrity is a Knicks super-fan?",["Spike Lee", "Tiger Woods", "Mark Wahlberg", "Tom Brady"],0),
    
    new triviaQuestion("Which Knick Player won 2009 Dunk Contest?",["Frank Ntilikina", "Latrell Sprewell", "Nate Robinson", "Carmelo Anthony"],2),
    
    new triviaQuestion("Which player was infamously booed by fans for being drafted by the Knicks in the first round?",["Kristaps Porzingis", "Frank Ntilikina", "Patrick Ewing", "Stephon Marbury"],0),
    
    new triviaQuestion("What season is the Knicks most recent playoff appearance?",["2007-2008", "2012-2013", "2016-2017", "2017-2018"],1),
    
    new triviaQuestion("Who is the owner of the New York Knicks?",["Robert Kraft", "Magic Johnson", "James Dolan", "Tim Hardaway"],2),

  ];
  function triviaQuestion(question, options, answer){
    this.question = question;
    this.options = options;
    this.answer = answer;
  }

  var timeLeft = 120;
    var elem = document.getElementById('timer');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        console.log("Time is up!");
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
  var nowQuestion = 0;
  var rightAnswers = 0;
  
  function layout() {
    $('#question').html(parseInt(nowQuestion) + 1 + ". " + Questions[nowQuestion].question);
    var choices = Questions[nowQuestion].options;
    var formHtml = '';
    for (var i = 0; i < choices.length; i++) {
      formHtml += '<div><input type="radio" name="option" value="' + i + '" class="options"><label for="option' + i + '">' + choices[i] + '</label></div><br/>';
    }
    $('#form').html(formHtml);
    $(".options:eq(0)").prop('checked', true);
  }
  
  function questAns() {
    if ($("input[name=option]:checked").val() == Questions[nowQuestion].answer) {
      rightAnswers++;
    }
  }    


  $(document).ready(function(){
      
    var $jumbotron = $(".jumbotron");
    var $play = $("#play");
    var $outcome = $("#outcome");
    var $next = $("#next");
    var $barFill = $("#barFill");
    
    
      $jumbotron.hide();
      $play.click(function() {
          $jumbotron.fadeIn();
          $(this).hide();
        });
  
      $(function() {
          $barFill.barFill({
              max: Questions.length-1,			
              value: 0
          });
      });
  
      layout();
  
      $next.click(function(){
              event.preventDefault();
              questAns();
              nowQuestion++;
              $(function() {
                  $barFill.barFill({
                        value: nowQuestion
                  });
                });
              if(nowQuestion < Questions.length){
                  layout();
                  if(nowQuestion == Questions.length-1){
                      $next.html("DONE");
                      $next.click(function(){
                          $jumbotron.hide();
                          $outcome.html("You correctly answered " + rightAnswers + " out of " + nowQuestion + " questions! ").hide();
                          $outcome.fadeIn(1500);
                      });
  
                  }
                  
              };
      });	
  });
  