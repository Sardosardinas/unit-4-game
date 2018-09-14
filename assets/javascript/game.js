
    var randomNumEl = 0;
    var garnetEl = 0; 
    var peridotEl = 0;
    var topazEl = 0;
    var amethystEl = 0;
    var operatorEl = 0;
    var wins = 0;
    var losses = 0;
    var roundWin=false;
   


    $( document ).ready(function() {
        randomNumbers()
    });

    // Then let's do what is going to start the game when uploading.
    function randomNumbers(){
        
        roundWin=false;
        operatorEl = 0;
        
        //1. The game will generate a random number between 19-120 (print it in the console)
        //101 + 19 is 120 :D
        
        randomNumEl = Math.floor(Math.random()* (120-1)) + 1;
        //2. The game will assign a random number to 4 buttons.
        //10 + 2 is 12!
        garnetEl = Math.floor(Math.random() * (12-1)) + 1;
        peridotEl = Math.floor(Math.random() * (12-1)) + 1;
        topazEl = Math.floor(Math.random() * (12-1)) + 1;
        amethystEl = Math.floor(Math.random() * (12-1)) + 1;
        
        //Let's use console to see if it works!
        console.log(randomNumEl);
        console.log(garnetEl);
        console.log(peridotEl);
        console.log(topazEl);
        console.log(amethystEl);

        //So it works, let's put it in the console
        $("#random-number").html(randomNumEl);

        checkGems();

        return;
    };

    //I don't like to have my buttons having the same number, let's fix that!
    function checkGems(){

        if(garnetEl!==peridotEl&&garnetEl!==topazEl&&garnetEl!==amethystEl&&peridotEl!==garnetEl&&peridotEl!==topazEl&&peridotEl!==amethystEl){
        
            hideAlert = true;

        }  else{
            randomNumbers();
        }
        
    crystalGems();
        
    
    };


    //2.2 When you click the button, the number will appear in the console
    function crystalGems(){


        //3. If you click a button, the information will appear in the div for the sum.
        
        $("#garnet").on("click", function(){
                if(!roundWin){
                operatorEl += garnetEl;
        
            $("#operator").html(operatorEl);
            }

            review();
        });

        $("#peridot").on("click", function(){
            if(!roundWin){
                operatorEl += peridotEl
        
            $("#operator").html(operatorEl);

            review();

        }
        });
        
        $("#topaz").on("click", function(){
            if(!roundWin){
                operatorEl += topazEl;
        
            $("#operator").html(operatorEl);

            review();

            }
        });

        $("#amethyst").on("click", function(){
            if(!roundWin){
                operatorEl += amethystEl;
            
            $("#operator").html(operatorEl);

            review();

            }
        });
    

        
    };



    //4. If the number in the sum equals the random number it will score a win and the game will give another number.

    function review(){

        if (operatorEl===randomNumEl){
            wins++;
            console.log(wins);
            $("#wins").html("Wins: " + wins);
            console.log("hola");
            roundWin = true;

        } else if (operatorEl > randomNumEl) {
            losses++;
            console.log(losses);
            $("#losses").html("Losses: " + losses);
            console.log("adios");
            roundWin = true;
        };
    
    };

    //5 if the number in the sum fails to achieve the number, it will score a lose and the game will give another number.