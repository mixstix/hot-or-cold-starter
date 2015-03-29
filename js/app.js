
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
    function newGame() {
        
        var correctGuess = Math.floor(Math.random() * 100) + 1;
        console.log('Secret number: ' + correctGuess);
        var noOfClicks = 0;
        
        function generateFeedback() {
            var userGuess = +$('#userGuess').val();
            var differenceOrg = userGuess - correctGuess;
            var difference = Math.abs(differenceOrg);
            
            if (difference >= 1 && difference <= 5) {
                $('#feedback').html('You\'re getting really hot');
            } else if (difference >= 6 && difference <= 25) {
                $('#feedback').html('Getting hotter...');
            } else if (difference >= 26 && difference <= 45) {
                $('#feedback').html('Getting warmer!');
            } else if (difference >= 46 && difference <= 70) {
                $('#feedback').html('You\'re a little cold');
            } else if (difference >= 71 && difference <= 99) {
                $('#feedback').html('That\'s freezing cold!!!');
            } else if (difference == 0) {
                $('#feedback').html('YOU GOT IT RIGHT!!!');
            }
        }
            
        
        $('.button').on('click', function(e) {
            
            e.preventDefault();
            
            var userGuess = +$('#userGuess').val();
            
            generateFeedback();
            
            //list of numbers already guessed
            $('#guessList').append('<li>' + userGuess + '</li>');
            
            
            //tracks number of guesses
            noOfClicks++;
            $('#count').html(noOfClicks);
            
            
            //test if difference is working
            //$('#feedback').html(difference);
            
            //clears input field after .button is clicked
            $(this).closest('form').find("input[type=text], textarea").val("");
            
        });
    }
    
    newGame();
    
    var newGameBtn = $('.new');
    
    newGameBtn.on('click', function() {
        location.reload();
        newGame(); 
    });
     
});


