
//Global 
var randomResult;
var losses;
var wins;
var originalNumber = 0;

randomResult = Math.floor(Math.random() * 101) + 19;
$(".reuslt").html('Random result:' + randomResult);
// for the cyrstals
for ( i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) +1;

    var crystal = $("<div>");
        crystal.attr({"class": 'crystal',
        "randomNumber": random
    })

    $(".crystals").append(crystal)
    }

    $(".crystal").on('click', function  (){
        var number = parseInt($(this).attr('randomNumber'));

        originalNumber += number;

        if (originalNumber> randomResult){
            lost--;
            $("#losses").html(losses)
        }
        else if ( originalNumber === randomResult){
            win++;
            $("#win").html(win);
        }


    })