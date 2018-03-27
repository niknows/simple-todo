// <li> task complete event
$("li").on("click",function(){
$(this).toggleClass("taskClicked");

});

// button X functioning
$("span").click(function(evt){
$(this).parent().fadeOut(300,function(){
$(this).remove();
});
evt.stopPropagation();
});

//add typed todo by hitting enter
[type='text'
$("input[type='text'").keypress("event", function(){
if (event.which === 13){
$("ul").append("<li><span>X</span>I am a new line</li>");
}
});