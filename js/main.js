$(document).ready(function() {
    $('#fullpage').fullpage({
            // paddingTop: '100px',
            // paddingBottom: '100px'
            scrollOverflow:true
        }
    );
    $("#buy_button").click(function(){
        $.fn.fullpage.moveSectionDown();
    });
});