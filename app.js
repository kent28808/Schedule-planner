$(document).ready(function () {
    //localStorage.setItem("test", "test value")
    $(".saveBtn").on("click",function(){
        var ParentId=$(this).parent().attr('id')
        console.log(ParentId)
        var SiblingText = $(this).siblings(".description").val()
        console.log(SiblingText)
        localStorage.setItem(ParentId, SiblingText)
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
    
})