$(function(){
    var circle = [];
    var cross = [];

    n=1;
    $(".col").click(function(){
        if($(".team1").hasClass("turn"))
            $(".team1").removeClass("turn");
        else
            $(".team1").addClass("turn");

        if($(".team2").hasClass("turn"))
            $(".team2").removeClass("turn");
        else
            $(".team2").addClass("turn");

        if(n==1){
            if(!$(this).hasClass("cross") && !$(this).hasClass("circle")){
            className = ($(this).attr("class")).substring(4);
            cross.push(className);
            $(this).addClass("cross");
            console.log(cross);
            if(cross.length >= 3){
                if(check(cross)){
                   $(".tictac div").hide();
                   $(".tictac").html("<h3 style='padding:60px 0 0 120px;font-size:30px;'>Team 1 has Won</h3>");
                }
            }
            n=0;
            }
        }
        else if(n==0){
            if(!$(this).hasClass("cross") && !$(this).hasClass("circle")){
            className = ($(this).attr("class")).substring(4);
            circle.push(className);
            $(this).addClass("circle");
            if(circle.length >= 3){
                if(check(circle)){
                    $(".tictac div").hide();
                   $(".tictac").html("<h3 style='padding:60px 0 0 120px;font-size:30px;'>Team 1 has Won</h3>");
            }
        }
            n=1;
            }
        }
    })

    function check(array){
        var letters = [];
        var numbers = [];
        var i = 0;
        var mid = 0;
        var a = -2;
        var c = -2;
        for(i=0;i<3;i++){
            letters[i] = 0;
            numbers[i] = 0;
        }

        for(i=0;i<array.length;i++){

            if(array[i].substring(0,1)==="A"){
                letters[0]++;
                if(array[i].substring(1,2)==="1")
                    a++;
                if(array[i].substring(1,2)==="3")
                    c++;
            }

            else if(array[i].substring(0,1)==="B"){
                letters[1]++;
                if(array[i].substring(1,2)==="2")
                    mid++;
            }

            else if(array[i].substring(0,1)==="C"){
                letters[2]++;
                if(array[i].substring(1,2)==="1")
                    c++;
                if(array[i].substring(1,2)==="3")
                    a++;
            }

            if(array[i].substring(1,2)==="1")
             numbers[0]++;
            else if(array[i].substring(1,2)==="2")
             numbers[1]++;
            else if(array[i].substring(1,2)==="3")
             numbers[2]++;
        }

        console.log(numbers);
        console.log(letters);

        for(i=0;i<3;i++){
            if(letters[i]===3){
                return true;
            }
            else if(numbers[i]===3){
                return true;
            }
        }

        if((a==0 || c==0) && mid==1){
                return true;
        }

        return false;
    }
})