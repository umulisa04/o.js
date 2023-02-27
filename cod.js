<html>
    <head>
        <title>Grades</title>
    </head>
    <body>
        const prompt= require("prompt-sync")();
        console.log("enter your name");
        let grades= prompt();
        if(grade<50){
            console.log("grades is failed");
        }
        else if(grades>50){
            console.log("grade is E");
        }
        else if(grades>60){
            console.log("grade is D");
        }
        else if(grade>70){
            console.log("grade is C");
        }
        else if(grades>80){
            console.log("grade is B");
        }
        else if(grades>90){
            console.log("grade is A");
        }
        else(console.log("invalid"));
    </body>
</html>