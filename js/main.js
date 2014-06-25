resizeDiv();

$("img").on("click", scroll);

$(document).ready(function(){$.scrollTo(".page.1",400);});
/******************************************
/* Functions                   
/*******************************************/
function scroll(){
	$.scrollTo(".page.2",400);				
}

function resizeDiv() {
	vph = $(window).height();
	$(".page").css({"height": vph + "px"});
}

/******************************************
/* Send form data to Google Docs                   
/*******************************************/

function postContactToGoogle() {
	var name = $('#Name').val();
	var twitter = $('#Twitter').val();
	var email = $('#Email').val();    

        $.ajax({
            url: "https://docs.google.com/forms/d/1FhwINhGVTrDGbbzHCmmrbwjv73PfP743JkCpErggWn0/formResponse",
            data: { "entry_46788591": name, "entry_380104639": twitter, "entry_929913191": email },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                	$(".confirm").removeClass("hidden");
                    // window.location.replace("ThankYou.html");		
                },
                200: function () {
                	$(".confirm").removeClass("hidden");
                    // window.location.replace("ThankYou.html");
                }
                //should also add response to  incomplete form, incorrect submission, no entries
            }
        });
}
