/*submit form starts here*/

$(function() { $('input[type="password"]').val(''); });

$(document).on('submit', '#vacancy-form', function() {

var post_applied = $("#post-applied").val().trim();
var subject = $("#subject").val().trim();
var email = $("#email").val().trim();
var name = $("#name").val().trim();
var dob = $("#dob").val().trim();
var gender = $("#gender").val().trim();
var category = $("#category").val().trim();	
var marrital_status = $("#marrital-status").val().trim();
var marriage_year = $("#marriage-year").val().trim();	
var mobile = $("#mobile").val().trim();
var address = $("#address").val().trim();
var city = $("#city").val().trim();
var state = $("#state").val().trim();
var pin = $("#pin").val().trim();
var source = $("#source").val().trim();
var c10_reg_corr = $("#10-reg-corr").val().trim();
var c10_br_un = $("#10-br-un").val().trim();
var c10_year = $("#10-year").val().trim();
var c10_sb_off = $("#10-sb-off").val().trim();
var c10_div = $("#10-div").val().trim();
var c10_per = $("#10-per").val().trim();	
var c12_reg_corr = $("#12-reg-corr").val().trim();
var c12_br_un = $("#12-br-un").val().trim();
var c12_year = $("#12-year").val().trim();
var c12_sb_off = $("#12-sb-off").val().trim();
var c12_div = $("#12-div").val().trim();
var c12_per = $("#12-per").val().trim();

var father_name = $("#father-name").val().trim();
var father_qualification = $("#father-qualification").val().trim();
var father_occu = $("#father-occu").val().trim();
var father_desig = $("#father-desig").val().trim();
var mother_name = $("#mother-name").val().trim();
var mother_qualification = $("#mother-qualification").val().trim();
var mother_occu = $("#mother-occu").val().trim();
var mother_desig = $("#mother-desig").val().trim();

var kids_care = $("#kids-care").val().trim();
var inv_icact = $("#inv-icact").val().trim();
var pol_verf = $("#pol-verf").val().trim();
var joining_date = $("#joining-date").val().trim();
var cert_sub_date = $("#cert-sub-date").val().trim();
var captcha_value = $("input[name='captcha-value']").val();
var captcha_entered = $("input[name='captcha-entered']").val().trim();
	
var current_year = new Date().getFullYear();	
var error = 0;

$("input").removeClass("error");
$("select").removeClass("error");

if(post_applied==""){

     $("#post-applied").addClass( "error" );
     error++;
}
if(subject==""){

     $("#subject").addClass( "error" );
     error++;
}
if(email==""){

     $("#email").addClass( "error" );
     error++;
} else if ( !validateEmail( email ) ) {

			$( "#email" ).addClass( "error" );
			error++;
		}
if(name=="" || name != name.match(/^[a-zA-Z\s]+$/)){

     $("#name").addClass( "error" );
     error++;
}
if(dob==""){

     $("#dob").addClass( "error" );
     error++;
}	
if(gender==""){

     $("#gender").addClass( "error" );
     error++;
}
if(category==""){

     $("#category").addClass( "error" );
     error++;
}	
if(marrital_status==""){

     $("#marrital-status").addClass( "error" );
     error++;
}
if(marrital_status!="" && (marrital_status == "Married" || marrital_status == "Divorced") && marriage_year > current_year){

     $("#marriage-year").addClass( "error" );
     error++;
}	
if(mobile==""){

     $("#mobile").addClass( "error" );
     error++;
}
if(address==""){

     $("#address").addClass( "error" );
     error++;
}
if(city==""){

     $("#city").addClass( "error" );
     error++;
}
if(state==""){

     $("#state").addClass( "error" );
     error++;
}
if(pin==""){

     $("#pin").addClass( "error" );
     error++;
}
if(source==""){

     $("#source").addClass( "error" );
     error++;
}
if(c10_reg_corr==""){

     $("#10-reg-corr").addClass( "error" );
     error++;
}
if(c10_br_un==""){

     $("#10-br-un").addClass( "error" );
     error++;
}
if(c10_year==""){

     $("#10-year").addClass( "error" );
     error++;
}
if(c10_sb_off==""){

     $("#10-sb-off").addClass( "error" );
     error++;
}
if(c10_div==""){

     $("#10-div").addClass( "error" );
     error++;
}
if(c10_per==""){

     $("#10-per").addClass( "error" );
     error++;
}
if(c12_reg_corr==""){

     $("#12-reg-corr").addClass( "error" );
     error++;
}
if(c12_br_un==""){

     $("#12-br-un").addClass( "error" );
     error++;
}
if(c12_year==""){

     $("#12-year").addClass( "error" );
     error++;
}
if(c12_sb_off==""){

     $("#12-sb-off").addClass( "error" );
     error++;
}
if(c12_div==""){

     $("#12-div").addClass( "error" );
     error++;
}
if(c12_per==""){

     $("#12-per").addClass( "error" );
     error++;
}
if(father_name==""){

     $("#father-name").addClass( "error" );
     error++;
}
if(father_qualification==""){

     $("#father-qualification").addClass( "error" );
     error++;
}
if(father_occu==""){

     $("#father-occu").addClass( "error" );
     error++;
}
if(father_desig==""){

     $("#father-desig").addClass( "error" );
     error++;
}
if(mother_name==""){

     $("#mother-name").addClass( "error" );
     error++;
}
if(mother_qualification==""){

     $("#mother-qualification").addClass( "error" );
     error++;
}
if(mother_occu==""){

     $("#mother-occu").addClass( "error" );
     error++;
}
if(mother_desig==""){

     $("#mother-desig").addClass( "error" );
     error++;
}
if(kids_care==""){

     $("#kids-care").addClass( "error" );
     error++;
}
if(inv_icact==""){

     $("#inv-icact").addClass( "error" );
     error++;
}
if(pol_verf==""){

     $("#pol-verf").addClass( "error" );
     error++;
}
if(joining_date==""){

     $("#joining-date").addClass( "error" );
     error++;
}
if(cert_sub_date==""){

     $("#cert-sub-date").addClass( "error" );
     error++;
}	
if($("#declaration").prop('checked') == false){

     $("#declaration").addClass( "error" );
     error++;
}	
if( document.getElementById("resume").files.length == 0 ){

     $("#resume").addClass( "error" );
     error++;
}	
if( document.getElementById("profile_image").files.length == 0 ){

     $("#profile_image").addClass( "error" );
     error++;
}
if(captcha_value != captcha_entered)
{
    $('input[name="captcha-entered"]').addClass( "error" );
    error++;
}

if(error == 0){
    $("#success").hide();
    $("#error").hide();
    $("#vcncy-sub-btn").prop("disabled", true);
    $("#vcncy-sub-btn").html('<img src="assets/images/btn-loader.gif" style="width:25px;"/> Please Wait...');


$.ajax({
type: "POST",
url: "pdf-apply/index.php",
data: new FormData(this),
contentType: false,
cache: false,
processData: false,
success: function(result){
//alert(result); 
	//$("#success").html(result); 
	//console.log(result);
    var str = jQuery.parseJSON(result);
    
    $('#vcncy-sub-btn').html('Submit');
    $("#success").show();
    $("#success").html(str.message);   
    $("#error").hide();
    if(str.message == 'Successfully Applied!!'){ $("#vacancy-form")[0].reset(); }
	
	$("#vcncy-sub-btn").prop("disabled", false);
}
});


}else{

     $("#success").hide();
     $("#error").show();
     $("#error").html('Please Fill All the Required Fields!');
}

return false;
});

	function validateEmail( $email ) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		return emailReg.test( $email );
	}
/*submit form ends here*/


//Put our input DOM element into a jQuery Object
var $jqDate = jQuery('input[name="jqueryDate"]');

//Bind keyup/keydown to the input
$jqDate.bind('keyup','keydown', function(e){
	
  //To accomdate for backspacing, we detect which key was pressed - if backspace, do nothing:
	if(e.which !== 8) {	
		var numChars = $jqDate.val().length;
		if(numChars === 2 || numChars === 5){
			var thisVal = $jqDate.val();
			thisVal += '/';
			$jqDate.val(thisVal);
		}
  }
});

/*adding more experience fields starts here*/
$(document).ready(function(){
    var maxField = 10; //Input fields increment limitation
    var addButton = $('.add_button'); //Add button selector
    var wrapper = $('.field_wrapper'); //Input field wrapper
    var fieldHTML = `<div class="main-parent"><h3 class="col-xs-12 sub-heading">Experience Brief</h3>
<div class="row">
			<div class="form-group col-xs-4 col-md-4">
				<label for="name" class="control-label">Name of Organization:</label>
				<input type="text" name="exp-org[]" class="form-control" placeholder="Name of Organization">
			</div>
			<div class="form-group col-xs-2 col-md-2">
				<label for="name" class="control-label">City:</label>
				<input type="text" name="exp-city[]" class="form-control" placeholder="City">
			</div>
			<div class="form-group col-xs-3 col-md-3">
				<label for="name" class="control-label">Subject Specialization:</label>
				<input type="text" name="exp-spl[]" class="form-control" placeholder="Subject Specialization">
			</div>	
			<div class="form-group col-xs-3 col-md-3">
				<label for="name" class="control-label">Classes Taught:</label>
				<input type="text" name="exp-ctt[]" class="form-control" placeholder="Classes Taught">
			</div>
			<div class="form-group col-xs-2 col-md-2">
				<label for="name" class="control-label">From:</label>
				<input type="text" name="exp-from[]" class="form-control" placeholder="From">
			</div>
			<div class="form-group col-xs-2 col-md-2">
				<label for="name" class="control-label">To:</label>
				<input type="text" name="exp-to[]" class="form-control" placeholder="To">
			</div>
			<div class="form-group col-xs-2 col-md-2">
				<label for="name" class="control-label">Total Salary(₹):</label>
				<input type="text" name="exp-tsalary[]" class="form-control" placeholder="₹">
			</div>		
			<div class="form-group col-xs-4 col-md-4">
				<label for="name" class="control-label">Availability of Experience Certificate(Yes / No):</label>
				<input type="text" name="exp-cert[]" class="form-control" placeholder="Yes / No">
			</div>

	<a href="javascript:void(0);" class="remove_button col-xs-1 col-md-1"><label style="width:100%;">&emsp;</label><img src="images/remove-icon.png"/></a></div></div>`; //New input field html 
    var x = 1; //Initial field counter is 1
    
    //Once add button is clicked
    $(addButton).click(function(){
        //Check maximum number of input fields
        if(x < maxField){ 
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); //Add field html
        }
    });
    
    //Once remove button is clicked
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).closest('div.main-parent').remove(); //Remove field html
        x--; //Decrement field counter
    });
});
/*adding more experience fields ends here*/

/*adding more brother fields starts here*/
$(document).ready(function(){
    var maxField = 10; //Input fields increment limitation
    var addButton = $('.add_button_brother'); //Add button selector
    var wrapper = $('.field_wrapper_brother'); //Input field wrapper
    var fieldHTML = `<div class="row">
			<div class="form-group col-xs-3 col-md-3">
				<label for="name" class="control-label">Name:</label>
				<input type="text" name="brother-name[]" class="form-control" placeholder="Name">
			</div>
			<div class="form-group col-xs-2 col-md-2">
				<label for="name" class="control-label">Educational Qualification:</label>
				<input type="text" name="brother-qualification[]" class="form-control" placeholder="Qualification">
			</div>
			<div class="form-group col-xs-3 col-md-3">
				<label for="name" class="control-label">Present Occupation:</label>
				<input type="text" name="brother-occu[]" class="form-control" placeholder="Occupation">
			</div>	 
			<div class="form-group col-xs-3 col-md-3">
				<label for="name" class="control-label">Name of Firm &amp; Designation:</label>
				<input type="text" name="brother-desig[]" class="form-control" placeholder="Designation">
			</div>	
	<a href="javascript:void(0);" class="remove_button col-xs-1 col-md-1"><label style="width:100%;">&emsp;</label><img src="images/remove-icon.png"/></a></div>`; //New input field html 
    var x = 1; //Initial field counter is 1
    
    //Once add button is clicked
    $(addButton).click(function(){
        //Check maximum number of input fields
        if(x < maxField){ 
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); //Add field html
        }
    });
    
    //Once remove button is clicked
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });
});
/*adding more brother fields ends here*/

/*adding more sister fields starts here*/
$(document).ready(function(){
    var maxField = 10; //Input fields increment limitation
    var addButton = $('.add_button_sister'); //Add button selector
    var wrapper = $('.field_wrapper_sister'); //Input field wrapper
    var fieldHTML = `<div class="row">
			<div class="form-group col-xs-3 col-md-3">
				<label for="name" class="control-label">Name:</label>
				<input type="text" name="sister-name[]" class="form-control" placeholder="Name">
			</div>
			<div class="form-group col-xs-2 col-md-2">
				<label for="name" class="control-label">Educational Qualification:</label>
				<input type="text" name="sister-qualification[]" class="form-control" placeholder="Qualification">
			</div>
			<div class="form-group col-xs-3 col-md-3">
				<label for="name" class="control-label">Present Occupation:</label>
				<input type="text" name="sister-occu[]" class="form-control" placeholder="Occupation">
			</div>	 
			<div class="form-group col-xs-3 col-md-3">
				<label for="name" class="control-label">Name of Firm &amp; Designation:</label>
				<input type="text" name="sister-desig[]" class="form-control" placeholder="Designation">
			</div>	
	<a href="javascript:void(0);" class="remove_button col-xs-1 col-md-1"><label style="width:100%;">&emsp;</label><img src="images/remove-icon.png"/></a></div>`; //New input field html 
    var x = 1; //Initial field counter is 1
    
    //Once add button is clicked
    $(addButton).click(function(){
        //Check maximum number of input fields
        if(x < maxField){ 
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); //Add field html
        }
    });
    
    //Once remove button is clicked
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });
});
/*adding more sister fields ends here*/

/*adding more children fields starts here*/
$(document).ready(function(){
    var maxField = 10; //Input fields increment limitation
    var addButton = $('.add_button_children'); //Add button selector
    var wrapper = $('.field_wrapper_children'); //Input field wrapper
    var fieldHTML = `<div class="row">
			<div class="form-group col-xs-3 col-md-3">
				<label for="name" class="control-label">Name:</label>
				<input type="text" name="child-name[]" class="form-control" placeholder="Name">
			</div>
			<div class="form-group col-xs-2 col-md-2">
				<label for="name" class="control-label">Age:</label>
				<input type="text" name="child-age[]" class="form-control" placeholder="Age">
			</div>
			<div class="form-group col-xs-3 col-md-3">
				<label for="name" class="control-label">Name of the School/College/Company:</label>
				<input type="text" name="child-school[]" class="form-control" placeholder="Name of the School">
			</div>	 
			<div class="form-group col-xs-3 col-md-3">
				<label for="name" class="control-label">Class/Occupation:</label>
				<input type="text" name="child-class[]" class="form-control" placeholder="Class">
			</div>	
	<a href="javascript:void(0);" class="remove_button col-xs-1 col-md-1"><label style="width:100%;">&emsp;</label><img src="images/remove-icon.png"/></a></div>`; //New input field html 
    var x = 1; //Initial field counter is 1
    
    //Once add button is clicked
    $(addButton).click(function(){
        //Check maximum number of input fields
        if(x < maxField){ 
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); //Add field html
        }
    });
    
    //Once remove button is clicked
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });
});
/*adding more children fields ends here*/

/*show hide post applied other text box starts here*/
$('#post-applied').change(function() {
    var selected = $(this).val();
    if(selected == 'OTHERS'){
      $('#post-other-input').show();
    }
    else{
      $('#post-other-input').hide();
    }
});
/*show hide post applied other text box ends here*/

/*show hide subject other text box starts here*/
$('#subject').change(function() {
    var selected = $(this).val();
    if(selected == 'OTHERS'){
      $('#subject-other-input').show();
    }
    else{
      $('#subject-other-input').hide();
    }
});
/*show hide subject other text box ends here*/

/*show hide source other text box starts here*/
$('#source').change(function() {
    var selected = $(this).val();
    if(selected == 'Any other'){
      $('#source-other-input').show();
    }
    else{
      $('#source-other-input').hide();
    }
});
/*show hide source other text box ends here*/

/*datepicker starts here*/
$( function() {
	var age_y = "";
	var age_m = "";
    $( "#dob" ).datepicker({
		dateFormat: 'yy-mm-dd',
		maxDate: '-1D',
		yearRange: "-80:+80",
		onSelect: function(value, ui) {
                var today = new Date();
                age_y = today.getFullYear() - ui.selectedYear;
				age_m = parseInt(today.getMonth()+1) - parseInt(ui.selectedMonth+1);
                $('#dob-years').val(age_y);
				$('#dob-months').val(age_m);
			
/*calculating age starts here*/
var mdate = $("#dob").val().toString();
			console.log(mdate);
        var yearThen = parseInt(mdate.substring(0,4), 10);
        var monthThen = parseInt(mdate.substring(5,7), 10);
        var dayThen = parseInt(mdate.substring(8,10), 10);
        
        var today = new Date();
        var birthday = new Date(yearThen, monthThen-1, dayThen);
        
        var differenceInMilisecond = today.valueOf() - birthday.valueOf();
        
        var year_age = Math.floor(differenceInMilisecond / 31536000000);
        var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
        
        if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
            alert("Happy B'day!!!");
        }
        
        var month_age = Math.floor(day_age/30);
        
        day_age = day_age % 30;
        
        if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
            $("#exact_age").text("Invalid birthday - Please try again!");
        }
        else {
            /*$("#exact_age").html("You are<br/><span id=\"age\">" + year_age + " years " + month_age + " months " + day_age + " days</span> old");*/
			    $('#dob-years').val(year_age);
				$('#dob-months').val(month_age);
        }			
/*calculating age ends here*/
			
            },
		changeMonth: true,
        changeYear: true});
  } );

function refresh_captcha(){

  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++){  text += possible.charAt(Math.floor(Math.random() * possible.length)); }

  $(".captcha input[name='captcha-value']").val(text);
  $(".captcha #matter").html(text);
}
/*datepicker ends here*/