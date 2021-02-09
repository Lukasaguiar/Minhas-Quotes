var cont=0;
var cont2=0;
var cont3=0
function minha(){
    var meu=document.getElementById('minha');
    var meu2=document.getElementById('minha2');
    var meu3=document.getElementById('minha3')
    meu.innerHTML=`<iframe class="ajuda-play" src="https://www.youtube.com/embed/-id7d1wtIEE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    meu2.innerHTML=`<iframe class="ajuda-play"  src="https://www.youtube.com/embed/5wzDthySfs4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    meu3.innerHTML=`<iframe class="ajuda-play"  src="https://www.youtube.com/embed/KdtZtaIS88s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}

function primeira_musica(){
    if(cont==0){
        var meu=document.getElementById('minha');
        var outra=document.getElementById('versao-adaptada');
    meu.innerHTML=`<iframe class="ajuda-play" id="minha"  src="https://www.youtube.com/embed/U6_IYgUGGNA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
outra.innerHTML=`Versão Original`
  cont=cont+1;
    }
    else{
        var meu=document.getElementById('minha');
        var outra=document.getElementById('versao-adaptada');
        meu.innerHTML=`<iframe class="ajuda-play"  src="https://www.youtube.com/embed/-id7d1wtIEE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        outra.innerHTML=`Minha Versão`
  cont=0;        
    }
    
}
function segunda_musica(){
    if(cont2==0){
    var meu2=document.getElementById('minha2');
    var outra=document.getElementById('versao-adaptada2');
meu2.innerHTML=`not ready`
outra.innerHTML=`Versão Original`
cont2=cont2+1;
        }
    else{
        var meu2=document.getElementById('minha2');
        var outra=document.getElementById('versao-adaptada2');
        meu2.innerHTML=`<iframe class="ajuda-play"  src="https://www.youtube.com/embed/5wzDthySfs4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        outra.innerHTML=`Minha Versão`
        cont2=0
    }

}

function terceira_musica(){
    if(cont3==0){
        var meu3=document.getElementById('minha3');
        var outra=document.getElementById('versao-adaptada3');
        meu3.innerHTML=`Not Ready`
        outra.innerHTML=`Versão Original`
        cont3=1
    }else{
        var meu3=document.getElementById('minha3');
        var outra=document.getElementById('versao-adaptada3');
        meu3.innerHTML=`<iframe class="ajuda-play"  src="https://www.youtube.com/embed/KdtZtaIS88s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        outra.innerHTML=`Minha Versão`
        cont3=0 
    }
    

}