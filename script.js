const divPics = document.querySelectorAll(".pic img") ;
const coffeeName = document.querySelectorAll(".pic h3") ;
const coffeeCost = document.querySelectorAll(".pic h4") ;
const coffeeRate = document.querySelectorAll(".pic h5") ;

const pictures = 
fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
.then((response) => response.json())

async function pics(){

    const pics = await pictures ;

    divPics.forEach((value , index) => {

        value.setAttribute("src" , pics[index].image) ;

    });

    coffeeName.forEach((value , index) => {

        value.innerHTML =  pics[index].name ;

    });

    coffeeCost.forEach((value , index) => {

        value.innerHTML =  pics[index].price ;

    });
    
    coffeeRate.forEach((value , index) => {
        
        if (pics[index].rating != null) {
            value.innerHTML =  `${pics[index].rating}(${pics[index].votes} votes)` ;
        }
        else
        value.innerHTML =  "No rating" ;
    
    });

}

pics() ;