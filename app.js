
    //save btn function for text content
    //localStorage.setItem("test", "test value")
    $(".saveBtn").on("click", function () {
        var ParentId = $(this).parent().attr('id');
        console.log(ParentId);
        var SiblingText = $(this).siblings(".description").val();
        console.log(SiblingText);
        localStorage.setItem(ParentId, SiblingText);
    })


    //Local Storage for text content
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));

    //color background in relation to time
    var currenthour = parseInt(moment().format('H'));
    if(currenthour = 9){
        $(".9").addClass("present")
    } else if(currenthour < 9){
        $(".9").addClass("past")
    }  else if(currenthour > 9){
        $(".9").addClass("future")
    }
    if(currenthour = 10){
        $(".10").addClass("present")
    } else if(currenthour < 10){
        $(".10").addClass("past")
    }  else if(currenthour > 10){
        $(".10").addClass("future")
    }
    if(currenthour = 11){
        $(".11").addClass("present")
    } else if(currenthour < 11){
        $(".11").addClass("past")
    }  else if(currenthour > 11){
        $(".11").addClass("future")
    }
    if(currenthour = 12){
        $(".12").addClass("present")
    } else if(currenthour < 12){
        $(".12").addClass("past")
    }  else if(currenthour > 12){
        $(".12").addClass("future")
    }
    if(currenthour = 1){
        $(".1").addClass("present")
    } else if(currenthour < 1){
        $(".1").addClass("past")
    }  else if(currenthour > 1){
        $(".1").addClass("future")
    }
    if(currenthour = 2){
        $(".2").addClass("present")
    } else if(currenthour < 2){
        $(".2").addClass("past")
    }  else if(currenthour > 2){
        $(".2").addClass("future")
    }
    if(currenthour = 3){
        $(".3").addClass("present")
    } else if(currenthour < 3){
        $(".3").addClass("past")
    }  else if(currenthour > 3){
        $(".3").addClass("future")
    }
    if(currenthour = 4){
        $(".4").addClass("present")
    } else if(currenthour < 4){
        $(".4").addClass("past")
    }  else if(currenthour > 4){
        $(".4").addClass("future")
    }
    if(currenthour = 5){
        $(".5").addClass("present")
    } else if(currenthour < 5){
        $(".5").addClass("past")
    }  else if(currenthour > 5){
        $(".5").addClass("future")
    }



    


