//array com os dados

let playlist=[
    {
        titulo:"Ela vai voltar",
        album:"Transpiração Contínua Prolongada",
        src:"musica/Charlie_Brown_Jr-Ela Vai Voltar.mp3",
        capa:"img/ela vai voltar.jpg"
    },
    {
        titulo:"Zóio de lula",
        album:"Transpiração Contínua Prolongada",
        src:"musica/Charlie Brown Jr - Zóio de lula.mp3",
        capa:"img/zoio de lula.jpg"
    },
    {
        titulo:"Meu Novo Mundo",
        album:"La Familia 013",
        src:"musica/Charlie_Brown_Jr-Meu novo mundo.mp3",
        capa:"img/meu novo mundo.jpg"
    }
]

//descrição

let tituloMusic=document.querySelector(".descricao h2")
let AlbunMusic=document.querySelector(".descricao  i")
let capaMusic=document.querySelector("img")
let musica=document.querySelector('audio')
let indice=0

atualizacao(indice)

//pousar e dar  play

document.querySelector(".gg-play-button").addEventListener('click',iniciarMusic);//evento
document.querySelector(".gg-play-pause").addEventListener('click',pararMusic);//evento

//mudar musicas
document.querySelector(".gg-play-track-prev").addEventListener("click",()=>{
    indice++
    atualizacao(indice);

    
});
document.querySelector(".gg-play-track-next").addEventListener("click",()=>{
   
    atualizacao(indice);

});




//barra correr ,minutos mudar

musica.addEventListener('timeupdate',atualizarbarra);//evento
let duracaoMusic=document.querySelector(".fim")
duracaoMusic.textContent=segundosEmMinutos(Math.floor(musica.duration));

//funções
function atualizacao(Index){
    musica.setAttribute('src',playlist[Index].titulo);
    musica.addEventListener('loadeddata',() =>{
        tituloMusic.textContent=musica[Index].titulo;
        AlbunMusic.textContent=musica[Index].album;
        capaMusic.src=playlist[Index].capa
        duracaoMusic.textContent=segundosEmMinutos(Math.floor(musica.duration));

    })
}
function iniciarMusic(){
    musica.play();//a musica vai tocar
    document.querySelector(".gg-play-pause").style.display="block";//o botão pause aparece
    document.querySelector(".gg-play-button").style.display="none";//o botão play some
}
function pararMusic(){
    musica.pause();
    document.querySelector(".gg-play-pause").style.display="none";//o botão pause some
    document.querySelector(".gg-play-button").style.display="block";//o botão play aparece

}
function atualizarbarra(){
    let barra= document.querySelector("progress");
    barra.style.width=Math.floor((musica.currentTime/musica.duration)*100) + "%";//quando o tempo for passando a barra vai almentado a largura
    let minutagen =document.querySelector(".inicio");
    minutagen.textContent=segundosEmMinutos(Math.floor(musica.currentTime));//os numeros vão mudando com os passar do minutos
}
function segundosEmMinutos(segundos){
    let OsMinutos= Math.floor(segundos /60);//só incia depois do 60 ex:(0,1,2.)
    let OsSegundos= segundos % 60;//só vai ate 60 ex:(0,1,2,3.....60,0)
      if(OsSegundos<10){
        OsSegundos="0"+ OsSegundos;
    }
    return OsMinutos + ":" + OsSegundos;//retorna ex:03:24
}
