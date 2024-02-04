let conteudo_left__cripto_textarea = document.getElementById('conteudo_left__cripto_textarea');

let conteudo_centro__cripto_textarea = document.getElementById('conteudo_centro__cripto_textarea');

let logo2 = document.getElementById('logo2');
let conteudo_left__btn = document.getElementById('conteudo_left__btn');

let conteudo_left__msg_initial = document.getElementsByClassName('conteudo_left__msg_initial')[0];

let conteudo_left = document.getElementById('conteudo_left');



main();


function to_b64(str) {
    return window.btoa(str);
  }
  
function to_utf8(str) {
    return window.atob(str);
  }

function copy(){
    navigator.clipboard.writeText(conteudo_left__cripto_textarea.value);
   
}


function cripitografar(){

    if(!conteudo_left.contains(conteudo_left__cripto_textarea)){
        conteudo_left.prepend(conteudo_left__cripto_textarea);

        conteudo_left.append(conteudo_left__btn);
    }
    
    if(conteudo_left.contains(logo2)){
        conteudo_left.removeChild(logo2);

    }
    if(conteudo_left.contains(conteudo_left__msg_initial)){
         conteudo_left.removeChild(conteudo_left__msg_initial);

    }
    var v_cripitografar =  to_b64(conteudo_centro__cripto_textarea.value);

    conteudo_left__cripto_textarea.value =  v_cripitografar;
    console.log('cripitografar: ' + v_cripitografar);
    

}

function descripitografar(){

    var v_descripitografar = to_utf8(conteudo_left__cripto_textarea.value);

    conteudo_centro__cripto_textarea.value = v_descripitografar;

    console.log('descripitografar: ' + v_descripitografar);




}

conteudo_centro__cripto_textarea.addEventListener('focus',()=>{
    
    if(conteudo_centro__cripto_textarea.innerHTML == 'Digite seu texto'){
        conteudo_centro__cripto_textarea.innerHTML = '';
    }

});


function init_conteudo_left(){
    
  
    conteudo_left__cripto_textarea.remove();
    conteudo_left.removeChild(conteudo_left__btn);

    console.log(conteudo_centro__cripto_textarea.innerHTML);
    
    if( !conteudo_centro__cripto_textarea.innerHTML == ''){
        conteudo_centro__cripto_textarea.innerHTML = 'Digite seu texto';
    }
    
    
  
    
  
}

function main(){
    init_conteudo_left();
}



window.addEventListener('resize', function(){

    var screenWidth = screen.width;

    if(screenWidth < 768){
       

        if(conteudo_left.contains(logo2)){
            conteudo_left.removeChild(logo2);
           
        }
        
        
    }else{
        
        if(!conteudo_left.contains(logo2) && !conteudo_left.contains(conteudo_left__cripto_textarea)){
            conteudo_left.prepend(logo2);
           
            
        }
       
       
        
    }
    
   
	
});