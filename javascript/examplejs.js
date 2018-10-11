//review slideshow (code from w3schools//
$(function() {
    $('.carousel').carousel('cycle');
});


//popup alert on submit button (code from class notes) - ALERT is what it says in popout box//
function popOut(){
					alert("Thank you for your interest in joining our community, We'll be in touch asap!!");
				}
				

				
//Back to top button (code from http://stackoverflow.com/)//			
 $(document).ready(function() {
        function checkPosition(){
            if ($(this).scrollTop() > 200) {
                $('.go-top').fadeIn(500);
			}
			else{
                $('.go-top').fadeOut(300);
			}
        }
        // so it wont be constantly there, only when at the position. 
        $(window).scroll(checkPosition);

        // Animate the scroll to top
        $('.go-top').click(function(event) {
            event.preventDefault();

            $('html, body').animate({scrollTop: 0}, 300);
        })

        checkPosition();
    });
