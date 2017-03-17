$(document).ready(function(){
    $('.numbers').click(function(){
    	text = $('.display').val();
    	$('.display').val(text+$(this).text());   	
    });

    $(".eql").click(function(){
    	$('.ans').val(eval($('.display').val()))
    })

    $(".C").click(function(){
    	$('.display').val(eval($('.display').val()))
    })

    $(".AC").click(function(){
    	$('.ans').val(0)
    	$('.display').val(0);
    })
});