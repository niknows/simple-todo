// <li> task complete event
$("ul").on("click", "li", function(){
    $(this).toggleClass("taskClicked");
});

// button X functioning
$("ul").on("click", "span", function(evt){
    $(this).parent().fadeOut(300,function(){
        $(this).remove();
    });
    evt.stopPropagation();
});

//add typed todo by hitting enter
$("input[type='text']").keypress("event", function(){
    if (event.which === 13){
        var inputText = $(this).val();
        $(this).val("");
        $("ul").append("<li>"+"<span>"+"<i class="+"\"fas fa-minus-square\">"+"</i>"+"</span>"+inputText+"</li>");          
    }
});

//input box toggle
$("#plusIcon").click(function(){
$("input[type='text'").fadeToggle(100);
});