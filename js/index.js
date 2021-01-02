for (let i = 0; i <= 100; i++) {
    
    if(i % 5 == 0 & i % 3 == 0 ){
        document.write(i + ' bix box <br>');
    }

    else if(i % 5 == 0 ){
        document.write(i + ' bizz <br>');
    }

    else if (i % 3 == 0){
        document.write(i + ' box <br>');
    }

    else{
        document.write(i +  '<br>');
    }    
} 