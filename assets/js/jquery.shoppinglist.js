//use on('click') for this project
//click() only adds listeners for existing elements
//on() adds listeners for all potential future elements


/*
$("li").click(function() {
   $(this).toggleClass("completed");
})
*/

//toggle strikethrough of list elements by via click
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})


/*
$("ul").click(function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    //prevents bubbling up the DOM
    event.stopPropagation();
});
*/

//click x to delete element
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    //prevents bubbling up the DOM
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13){
        //get text from user input
        let listText = $(this).val();
        //clear text field
        $(this).val("");
        //create new li and add to ul
        // span is to delete individual list items
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + listText + "</li>");
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})