

// function promptUser() {
// 	var answer = confirm('Your session is about to expire?');
// 	if(answer == true){
// 		setTimeout(promptUser, 10000);
// 	} else {
// 	window.location.href="https://www.google.com/";
// 	}
// }

// setTimeout(promtUser, 10000);


// popup.clearLoop();

function promptUser() {
  var answer = $( "#dialog-confirm" ).dialog({
    resizable: false,
    height:140,
    modal: true,
    buttons: {
      "Stay on page": function() {
        // clear the dialog
        $("#dialog-confirm").dialog('close');
        setTimeout(promptUser, 10000);
      },
      Leave: function() {
        window.open("https://www.google.com/");
      },
    }
  });
}

setTimeout(promptUser);




// accordion

$(function() {
    $( "#accordion" ).accordion();
  });


  // date picker

  $(function() {
    $( "#datepicker" ).datepicker();
  });