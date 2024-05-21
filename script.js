
function foo(){





    let input = document.getElementById('input').value ;

    let find = document.getElementById('find').value ;

    let head = document.getElementById('head') ;
   


    let text = input ;

    let userfind = find ;


    let comp = text.indexOf(userfind);


    if( comp == -1){

        head.innerText = 'Not Found ' + userfind ;
       
    }else if( comp == ""){

        head.innerText = 'Please Enter word ' ;
    }
    else{

        head.innerText = 'Found ' + userfind ;
    }

}