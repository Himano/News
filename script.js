/* Selectors */

const newsCard = document.querySelector(".news-card")
const tittel = document.querySelector(".tittel")
const info = document.querySelector(".info")
const news = document.querySelector(".news")



/* URLS */

const NRK_topp = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.nrk.no%2Ftoppsaker.rss";
const TV2_siste = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.tv2.no%2Frss%2Fnyheter"

function NrkTopp() {
    fetch(NRK_topp)
.then(response => response.json())
.then(data => {

   
   let bildet = "";
   let title = "";
   let description ="";
   let link = "";
    
    const arts = data.items;

    for (let index = 0; index < arts.length; index++) {

    title = data.items[index].title
    description = data.items[index].description
    imgg = data.items[index].enclosure.link
    link = data.items[index].link


    bildet = "url(" + imgg + ")"  ;

   
    


        news.innerHTML += `
        
        <div class="news-card" id="news-card${index}" >
        <img class="logo" src="images/nrkLogo.png" alt="">
            <p class="tittel ">${title}</p>  

            <div class="info hidden"> <p>
                ${description}
            </p> 

            <a class="ncA" target=_blank href="${link}">Les artikkel</a>
        
        </div>
        
        
        `


        const newsCard = document.querySelector(".news-card")
            

        document.querySelector("#news-card"+ index).style.backgroundImage = bildet;



    

}})
}


function tv2 () {
    fetch(TV2_siste)
.then(response => response.json())
.then(data => {

   
   let bildet2 = "";
   let title2 = "";
   let description2 ="";
   let link2 = "";
    
    const arts2 = data.items;

    for (let index = 0; index < arts2.length; index++) {

    title2 = data.items[index].title
    description2 = data.items[index].description
    imgg2 = data.items[index].enclosure.link
    link2 = data.items[index].link


    bildet = "url(" + imgg2 + ")"  ;

   
    


        news.innerHTML += `
        
        <div class="news-card" id="news-card2${index}" >
        <img class="logo" src="images/tv2Logo.png" alt="">
        
            <p class="tittel ">${title2}</p>  

            <div class="info hidden"> <p>
                ${description2}
            </p> 

            <a class="ncA" target=_blank href="${link2}">Les artikkel</a>
        
        </div>
        
        
        `


        const newsCard = document.querySelector(".news-card")
            
        console.log(bildet2)

        document.querySelector("#news-card2"+ index).style.backgroundImage = bildet;



    

}})
}
tv2()
NrkTopp()
