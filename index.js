for(var i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function () {
        
        var myButton=this.innerHTML;
        switch (myButton) {
            case 'w':
                
            document.querySelector("."+myButton).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+myButton).classList.remove("pressed");
            },200);

                var audio=new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case 'a':

            document.querySelector("."+myButton).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+myButton).classList.remove("pressed");
            },200);

                var audio=new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case 's':
                document.querySelector("."+myButton).classList.add("pressed");
                setTimeout(function(){
                    document.querySelector("."+myButton).classList.remove("pressed");
                },200);

                var audio=new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case 'd':
                document.querySelector("."+myButton).classList.add("pressed");
                setTimeout(function(){
                    document.querySelector("."+myButton).classList.remove("pressed");
                },200);

                var audio=new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case 'j':
                document.querySelector("."+myButton).classList.add("pressed");
                setTimeout(function(){
                    document.querySelector("."+myButton).classList.remove("pressed");
                },200);

                var audio=new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case 'k':
                document.querySelector("."+myButton).classList.add("pressed");
                setTimeout(function(){
                    document.querySelector("."+myButton).classList.remove("pressed");
                },200);

                var audio=new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            case 'l':
                document.querySelector("."+myButton).classList.add("pressed");
                setTimeout(function(){
                    document.querySelector("."+myButton).classList.remove("pressed");
                },200);

                var audio=new Audio('sounds/snare.mp3');
                audio.play();
                break;

            default:
                break;
        }
    
        
    });
}

document.addEventListener("keydown", function (event){
    myKey=event.key;

    switch (myKey) {
        case 'w':
            document.querySelector("."+myKey).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+myKey).classList.remove("pressed");
            },200);
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            document.querySelector("."+myKey).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+myKey).classList.remove("pressed");
            },200);
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            document.querySelector("."+myKey).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+myKey).classList.remove("pressed");
            },200);
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case 'd':
            document.querySelector("."+myKey).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+myKey).classList.remove("pressed");
            },200);

            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            document.querySelector("."+myKey).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+myKey).classList.remove("pressed");
            },200);

            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'k':
            document.querySelector("."+myKey).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+myKey).classList.remove("pressed");
            },200);

            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'l':
            document.querySelector("."+myKey).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+myKey).classList.remove("pressed");
            },200);

            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;

        default:
            alert('wrong key pressed');
            break;
    }

});


