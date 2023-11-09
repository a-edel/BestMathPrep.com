"use strict";
$(document).ready(function(){
    var isDate = function(date) {
        	if ( ! /^[01]?\d\/[0-3]\d\/\d{4}$/.test(date) ) { return false; }
        
        	var index1 = date.indexOf( "/" );
        	var index2 = date.indexOf( "/", index1 + 1 );
        	var month = parseInt( date.substring( 0, index1 ) );
        	var day = parseInt( date.substring( index1 + 1, index2 ) );
        
        	if ( month < 1 || month > 12 ) { return false; }
        	if ( day > 31 ) { return false; }
        	return true;
    };
    
    $( "#subscribeButton" ).click(function() {
    	$('.error').hide();
        $('.error').text(""); 
        var isValid = true;           
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var sat = $("#datepicker").val(); 
        var today = new Date();
        var oneDay = 24*60*60*1000; // hours * minutes * seconds * milliseconds    
        var day = new Date(datepicker);
        var days = ( day.getTime() - today.getTime() ) / oneDay;
        days = Math.ceil(days);
        
         
        if ( name === "" || 
                ! /[a-zA-Z]+(\ [a-zA-Z]+)?/.test(name) ) {
            isValid = false;
            $("#nameError").show();
            $( "#name" ).next().text("*Please enter a valid name.");
        }    
        if ( email === "" || 
                ! /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/.test(email) ) {
            isValid = false;
            $("#emailError").show();
            $( "#email" ).next().text("*Please enter a valid email.");
        }
        if ( phone === "" || ! /\d{10}/.test(phone) ) {
            isValid = false;
            $("#phoneError").show();
            $( "#phone" ).next().text("*Please enter a valid phone number in NNNNNNNNNN (10 numbers) format.");
        }
        if ( datepicker === "" || ! isDate(datepicker) || days <= 0) {
            isValid = false;
            $("#satError").show();
            $( "#datepicker" ).next().text("*Please enter a valid date in MM/DD/YYYY format.");
        }
        if ( isValid ) { 
        	$('.error').hide();
            alert("Thank you for subscribing. Your test is in " + days + " days.");
        }
        $("#name").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#datepicker").val("");
        $("#name").focus(); 
    });
    
    $('.error').hide();
    $("#name").focus();
});