function exit()
    {
       end();
    }
    function start()

    {
        var x=parseInt(prompt("enter starting value"));

       begin(x);
    }





    function begin(upper){
        var correct=false;
        var cons = true;

        var tri=0;
        var ski='';
       var randomnumber=Math.floor(Math.random()*upper)+1;
       var guess=parseInt(prompt("enter your guess numbers:"));
       while(cons){

       
       
       if(randomnumber===guess)
       {
            correct=true;
           // tri+=1;
           cons=false;
       }else if(randomnumber>guess){
           var guessmore=parseInt(prompt("try again!!! guess greater number than previous?"));
           if (randomnumber===guessmore)
           {
               correct=true;
              // tri+=2;
               cons=false;

           }

           
       }else if(randomnumbers<guess)
       {

        var guessless=parseInt(prompt("try again!!! guess smaller number than previuos"));
        if(randomnumber===guessless){
            correct=true;
            //tri+=2;
            cons=false;
        }

    }
    tri+=1;


       }


       if(correct){

        //document.write("congratulations"+randomnumber);
        //document.write("guess on "+tri+'try');

        ski+="congrulatrions"+randomnumber+".try times"+tri;
        print(ski);
       }
       else{
           document.write("all guesses are incorrect.press start to play again");
           ski+="all guess are incorrect.press start to play again";
           print(ski);
       }


    }


    function print(html)
    {
       // document.write(html);
        var x=document.getElementById('opt');
        x.innerHTML=html;
    }








    function end(){
       window.location.href="random.html";
    }
