$(document).ready(function () {
    //localStorage.setItem("test", "test value")
    $(".saveBtn").on("click",function(){
        var ParentId=$(this).parent().attr('id')
        console.log(ParentId)
        var SiblingText = $(this).siblings(".description").val()
        console.log(SiblingText)
        localStorage.setItem(ParentId, SiblingText)
    })
    
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))  
    
})