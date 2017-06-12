'use strict';

 // Open offsite navigation.
 $('#nav-expander').on('click', function(e) {
    e.preventDefault();
    $('nav').toggleClass('nav-expanded');
});

// Close offsite navigation.
 $('.menu .close').on('click', function(e) {
    e.preventDefault();
    $('nav').toggleClass('nav-expanded');
});

// Close offsite navigation after user click on an link in navigation.
$('.menu  a').on('click', function(e) {
    //se.preventDefault();
    $('nav').removeClass('nav-expanded');
});

$('.body').on('click', function(e) {
    //e.preventDefault();
    $('nav').removeClass('nav-expanded');
});

$('.body2').on('click', function(e) {
    //e.preventDefault();
    $('nav').removeClass('nav-expanded');
});

$('.btn').on('click', function(e) {
    //e.preventDefault();
    $('nav').removeClass('nav-expanded');
});

/************************
changing words beginning
************************/

var words = [
  //List words here
  'Find a house',
  'The real estate search engine',
  'Find an apartment',
  'Find a hotel',
  'Find a hostel',
  'Find a room',
  'Find an office space',
  'Find an event hall'
],
    currentStep = 0,
    textEl =


    document.querySelector('.change-text'),
    oldWord = '';


setTimeout(changeWord, 50);

function changeWord() {
  oldWord = textEl.innerHTML;

  // check if there is a word atm or not
  if (oldWord.length < 1) {

    if (currentStep !== words.length -1) {
          currentStep ++;
    }else {
      currentStep = 0;
    }
    addNextWord();
  } else {
    setTimeout(deleteWord, 2000);
  }

};

function deleteWord() {
  var WordLength = oldWord.length,
      currentWord = textEl.innerHTML,
      currentLength = currentWord.length;


  // The word is deleted so, start adding in the new one
  if (currentLength < 1) {
    changeWord();
    return;
  }

  // Remove a charachter
  textEl.innerHTML = currentWord.substring(0, currentLength - 1);

  setTimeout(deleteWord, 10);
}

function addNextWord() {
  var currentWord = textEl.innerHTML,
      currentLength = currentWord.length,
      nextWord = words[currentStep],
      nextWordLength = nextWord.length;


  if (currentLength === nextWordLength) {
    changeWord();
    return;
  }

  // add a charachter
  textEl.innerHTML = nextWord.substring(0, currentLength + 1);

  setTimeout(addNextWord, 10);
}
/******************************
ending of changing words
******************************/

        /******************************
        pop up modal
        ******************************/
        $(".modal").each( function(){
        	$(this).wrap('<div class="overlay"></div>')
        });

        $(".open-modal").on('click', function(e){
        	e.preventDefault();
        	e.stopImmediatePropagation;

        	var $this = $(this),
        			modal = $($this).data("modal");

        	$(modal).parents(".overlay").addClass("open");
        	setTimeout( function(){
        		$(modal).addClass("open");
        	}, 350);

        	$(document).on('click', function(e){
        		var target = $(e.target);

        		if ($(target).hasClass("overlay")){
        			$(target).find(".modal").each( function(){
        				$(this).removeClass("open");
        			});
        			setTimeout( function(){
        				$(target).removeClass("open");
        			}, 350);
        		}

        	});

        });

        $(".close-modal").on('click', function(e){
        	e.preventDefault();
        	e.stopImmediatePropagation;

        	var $this = $(this),
        			modal = $($this).data("modal");

        	$(modal).removeClass("open");
        	setTimeout( function(){
        		$(modal).parents(".overlay").removeClass("open");
        	}, 350);

        });

        /******************************
        ending of pop up modal
        ******************************/

        /**************************************
        ***************************************
        ***************************************
        comparing the two passwords
        ***************************************
        ***************************************
        **************************************/

        (function() {
          'use strict';

          function comparePasswords(password, comparate, invalidmsg) {
            if (password.value !== comparate.value) {
              password.setCustomValidity(invalidmsg);
            } else {
              password.setCustomValidity('');
            }
          }

          var inputs = document.querySelectorAll('input[compareTo], input[data-compareTo]');

          for (var i = 0, input; input = inputs[i]; i++) {
            var form = input.form;
            var comparateName = input.getAttribute('compareTo') || input.getAttribute('data-compareTo');
            var comparates = form.querySelectorAll('[name="' + comparateName + '"]');

            if (comparates.length === 0) {
              console.error('CompareTo could not find an element with the name "' + comparateName + '". Please ensure that one element with that name exists.');
              continue;
            }

            if (comparates.length > 1) {
              console.error('CompareTo found more than one (' + comparates.length + ') elements with the name "' + comparateName + '". Please ensure that only one element with that name exists.')
              continue;
            }

            var comparate = comparates[0];
            var error = input.getAttribute('compareToError') ||
              input.getAttribute('data-compareToError') ||
              'These passwords don\'t match.';

            var callback = (function(input, comparate, invalidmsg) {
              return function() {
                comparePasswords(input, comparate, invalidmsg);
              }
            })(input, comparate, error);

            input.addEventListener('change', callback);
            comparate.addEventListener('change', callback);
          }
        }());

        /**************************************
        ***************************************
        comparing two passwords ending
        ***************************************
        **************************************/



//links
var form = document.getElementById('myForm');
var select = document.getElementById('mySelect');
select.onchange = function(e) {
  form.setAttribute('action', e.target.value);
}
form.onsubmit = function(e) {
  var action = this.getAttribute('action');
  if (action.substr(0,1) == '#') {
    window.location.hash = this.getAttribute('action');
    return false;
  }
}
