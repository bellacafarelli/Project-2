let globalIndex = 0

//PLANET IMAGES
let earth;
let jupiter;
let mars;
let mercury;
let neptune;
let saturn;
let sun;
let uranus;
let venus;

//SYMBOL IMAGES
let symbol = [];

//MISC
let rightArrow;
let leftArrow;
let font;
let titleX = 300;
let titleY = 170;
let startY = 250;
let symbolButton = true;
let stars = [];

// WHOLE VIEWS
let mainMenuPage= true;
let planetClick = false;
let solarSystemView = false;
let indPlanets = false;

//IND PLANET VIEWS
let sunView = false;
let mercuryView = false;
let venusView = false;
let earthView = false;
let marsView = false;
let jupiterView = false;
let saturnView = false;
let uranusView = false;
let neptuneView = false;


function setup() {
  
  //SETUP STUFF
  let canvas = createCanvas(600, 400);
  frameRate(10)
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  
  //BUTTON
  canvas.parent('sketch-holder');
  let button = createButton('Look at Symbols');
  button.parent('button-holder');
  button.mousePressed(showSymbol);
  
  //BACKGROUND DESIGN
  background(6,16,46);
  for (let i = 0; i < 30; i++) {
  console.log(stars) ;
  let ranImg = int (random(stars.length))
  image(stars[ranImg], random(width), random(height), 50, 50)
    
  }
  
  mainMenu();
}
  
function preload(){
  //PLANETS
  earth = loadImage('/assets/earth.png');
  jupiter = loadImage('/assets/jupiter.png');
  mars = loadImage('/assets/mars.png');
  mercury = loadImage('/assets/mercury.png');
  neptune = loadImage ('/assets/neptune.png');
  saturn = loadImage('/assets/saturn.png');
  sun = loadImage('/assets/sun.png');
  uranus = loadImage('/assets/uranus.png');
  venus = loadImage('/assets/venus.png');
  
  //SYMBOLS
  symbol[0] = loadImage('/assets/sunsymbol.png');
  symbol[1] = loadImage('/assets/mercurysymbol.png');
  symbol[2] = loadImage('/assets/venussymbol.png');
  symbol[3] = loadImage('/assets/earthsymbol.png');
  symbol[4] = loadImage('/assets/marssymbol.png');
  symbol[5] = loadImage('/assets/jupitersymbol.png');
  symbol[6] = loadImage('/assets/saturnsymbol.png');
  symbol[7] = loadImage('/assets/uranussymbol.png');
  symbol[8] = loadImage ('/assets/neptunesymbol.png');
  
  //OTHER
  rightArrow = loadImage('/assets/rightarrow.png');
  leftArrow = loadImage('/assets/leftarrow.png');
  font = loadFont('/assets/Quicksand-VariableFont_wght.ttf');
  stars[0] = loadImage('/assets/star1.png');
  stars[1] = loadImage ('/assets/star2.png');
  stars[2] = loadImage('/assets/star3.png');
  
}

function draw() {

  //LEAVE THIS EMPTY
  
}

function mainMenu(){
  //TITLE
  fill(6,16,46)
  noStroke();
  textFont(font);
  textAlign(CENTER);
  textSize(30);
  rect(titleX, titleY-12, 310, 50);
  fill(255);
  text('The Planets & Symbols', titleX, titleY);
  
  //BUTTON
  textSize(20);
  fill(6,16,46)
  rect(titleX, startY-5, 60, 30);
  fill(255);
  text('Start', titleX, startY);
  
} //MAIN MENU TEXT

function mousePressed() {
  //MENU TO SOLAR SYSTEM
  if (mainMenuPage&& mouseX >= titleX - 20 && mouseX <= titleX + 20 && mouseY >= startY - 20 && mouseY <= startY + 20) {
    
    console.log('Start button was clicked');
    mainMenuPage= false;
    solarSystemView = true;
    planetClick = true;
    
    background(6,16,46);
    solarSystem();
  }

  //WHOLE VIEW TO INDIVIDUAL
  else if (planetClick == true && mouseY >= 135 && mouseY <= 465) {
    console.log("test");
    
    if (mouseX >= 0 && mouseX <= 90) { // sun
        console.log("Sun");
        sunPage();
        solarSystemView = false;
        sunView = true;
        planetClick = false;

    } else if (mouseX >= 105 && mouseX <= 135) { // mercury
        console.log("Mercury");
        mercuryPage();
        solarSystemView = false;
        mercuryView = true;
        planetClick = false;
      
    } else if (mouseX >= 136 && mouseX <= 165) { // venus
        console.log("Venus");
        venusPage();
        solarSystemView = false;
        venusView = true;
        planetClick = false;
      
    } else if (mouseX >= 166 && mouseX <= 195) { // earth
        console.log("Earth");
        earthPage();
        solarSystemView = false;
        earthView = true;
        planetClick = false;
      
    } else if (mouseX >= 196 && mouseX <= 230) { // mars
        console.log("Mars");
        marsPage();
        solarSystemView = false;
        marsView = true;
        planetClick = false;

    } else if (mouseX >= 235 && mouseX <= 350 && mouseY <= 200) { // jupiter
   
        console.log("Jupiter");
        jupiterPage();
        solarSystemView = false;
        jupiterView = true;
        planetClick = false;

    } else if (mouseX >= 355 && mouseX <= 505) { // saturn
        console.log("Saturn");
        saturnPage();
        solarSystemView = false;
        saturnView = true;
        planetClick = false;
      
    } else if (mouseX >= 506 && mouseX <= 555) { // uranus
        console.log("Uranus");
        uranusPage();
        solarSystemView = false;
        uranusView = true;
        planetClick = false;
      
    } else if (mouseX >= 556 && mouseX <= 600 && mouseY < 500) { // neptune
        console.log("Neptune");
        neptunePage();
        solarSystemView = false;
        neptuneView = true;
        planetClick = false;
    }
  }
  
  //NO JUPITER
  
   else if (!mainMenu) {
    if (planetClick) {
      if (mouseX >= 235 && mouseX <= 350) {
        jupiterView = false;
        mercuryView = true;
        solarSystem();
      } 
    }
   }
  
  //ARROW FUNCTIONS
  
  else if (solarSystemView == false) {
  //SUN
    if (sunView) {
      if (mouseY >= 175 && mouseY <= 425 && mouseX >= 500) {
        sunView = false;
        mercuryView = true;
        mercuryPage();
      } else if (mouseX <= 500) {
        sunPage();
      }
    //MERCURY
    } else if (mercuryView){
      if (mouseY >= 175 && mouseY <= 425 && mouseX >= 500){
        mercuryView = false;
        venusView = true;
        venusPage();
      } else if (mouseX <= 100){
          if (mouseY >= 175 && mouseY <= 425){
        mercuryView = false;
        sunView = true;
        sunPage();
          } else if (mouseY < 175) {
            mercuryPage();
          }
      } else if (mouseX > 100 && mouseX < 500){
        mercuryPage();
      }
    //VENUS
    } else if (venusView){
      if (mouseY >= 175 && mouseY <= 425 && mouseX >= 500){
        venusView = false;
        earthView = true;
        earthPage();
      } else if (mouseX <= 100){
          if (mouseY >= 175 && mouseY <= 425){
        venusView = false;
        mercuryView = true;
        mercuryPage();
          } else if (mouseY < 175) {
            venusPage();
          }
      } else if (mouseX > 100 && mouseX < 500){
        venusPage();
      }
    //EARTH
    } else if (earthView){
      if (mouseY >= 175 && mouseY <= 425 && mouseX >= 500){
        earthView = false;
        marsView = true;
        marsPage();
      } else if (mouseX <= 100){
          if (mouseY >= 175 && mouseY <= 425){
        earthView = false;
        venusView = true;
        venusPage();
          } else if (mouseY < 175) {
            earthPage();
          }
      } else if (mouseX > 100 && mouseX < 500){
        earthPage();
      }
    //MARS
    } else if (marsView){
      if (mouseY >= 175 && mouseY <= 425 && mouseX >= 500){
        marsView = false;
        jupiterView = true;
        jupiterPage();
      } else if (mouseX <= 100){
          if (mouseY >= 175 && mouseY <= 425){
        marsView = false;
        earthView = true;
        earthPage();
          } else if (mouseY < 175) {
            marsPage();
          }
      } else if (mouseX > 100 && mouseX < 500){
        marsPage();
      }
    //JUPITER
    } else if (jupiterView){
      if (mouseY >= 175 && mouseY <= 425 && mouseX >= 500){
        jupiterView = false;
        saturnView = true;
        saturnPage();
      } else if (mouseX <= 100){
          if (mouseY >= 175 && mouseY <= 425){
        jupiterView = false;
        marsView = true;
        marsPage();
          } else if (mouseY < 175) {
            jupiterPage();
          }
      } else if (mouseX > 100 && mouseX < 500){
        jupiterPage();
      }
    //SATURN
    } else if (saturnView){
      if (mouseY >= 175 && mouseY <= 425 && mouseX >= 500){
        saturnView = false;
        uranusView = true;
        uranusPage();
      } else if (mouseX <= 100){
          if (mouseY >= 175 && mouseY <= 425){
        saturnView = false;
        jupiterView = true;
        jupiterPage();
          } else if (mouseY < 175) {
            saturnPage();
          }
      } else if (mouseX > 100 && mouseX < 500){
        saturnPage();
      }
    //URANUS
    } else if (uranusView){
      if (mouseY >= 175 && mouseY <= 425 && mouseX >= 500){
        uranusView = false;
        neptuneView = true;
        neptunePage();
      } else if (mouseX <= 100){
          if (mouseY >= 175 && mouseY <= 425){
        uranusView = false;
        saturnView = true;
        saturnPage();
          } else if (mouseY < 175) {
            uranusPage();
          }
      } else if (mouseX > 100 && mouseX < 500){
        uranusPage();
      }
    //NEPTUNE
    } else if (neptuneView){
      if (mouseX <= 100){
          if (mouseY >= 175 && mouseY <= 425){
            neptuneView = false;
            uranusView = true;
            uranusPage();
          } else if (mouseY < 175){
            neptunePage();
          }
      } else if (mouseX > 100 && mouseY < 300){
          neptunePage();
      } else if (mouseY > 330 && mouseX > 180 && mouseX < 420){
          console.log('Whole View')
          solarSystemView = true;
          planetClick = true;
          solarSystem();
      }
    }
  }
  
} //ALL MY BUTTONS

function solarSystem(){
  if (solarSystemView){
    background(6,16,46);
    textSize(17);
    text ('Look at each planet and see what all the symbols look like with it!', 300, 50)
    image (sun, -115, 200, 600, 500);
    image (mercury, 125, 200, 6, 6);
    image (venus, 150, 200, 10, 10);
    image (earth, 180, 200, 13, 13);
    image (mars, 210, 200, 8, 8);
    image (jupiter, 300, 200, 100, 100);
    image (saturn, 430, 200, 150, 80);
    image (uranus, 530, 200, 30, 50);
    image (neptune, 575, 200, 30, 30);
    textSize(20);
    text ('Click for Individual Planets', 300, 350);
  } 
} //WHOLE SOLAR SYSTEM VIEW

function showSymbol(){
   if (mainMenuPage == false){
  globalIndex++;
  if(globalIndex > symbol.length-1) {
    globalIndex = 0;
  }
  console.log('Showing Symbol');
    
  } else if (solarSystemView == true){

  }
} //SHOW SYMBOLS

//START INDIVIDUAL VIEWS

function sunPage(){
  background(6,16,46);
  textSize(30);
  text ('The Sun', 300, 50);
  image (sun, 330, 200, 300, 250);
  image (rightArrow, 550, 200, 60, 60);
  image(symbol[globalIndex], width/2,height/2,150,150);

} //DRAW IND SUN

function mercuryPage(){
    background(6,16,46);
    textSize(30);
    text('Mercury', 300, 50);
    image (mercury, 300, 200, 250, 250);
    image (rightArrow, 550, 200, 60, 60);
    image (leftArrow, 50, 200, 60, 60);
    image(symbol[globalIndex], width/2,height/2,150,150);
  
} //DRAW IND MERCURY

function venusPage(){
    background(6,16,46);
    textSize(30);
    text('Venus', 300, 50);
    image (venus, 300, 200, 250, 250);
    image (rightArrow, 550, 200, 60, 60);
    image (leftArrow, 50, 200, 60, 60);
    image(symbol[globalIndex], width/2,height/2,150,150);
  
} //DRAW IND VENUS

function earthPage(){
    background(6,16,46);
    textSize(30);
    text('Earth', 300, 50);
    image (earth, 300, 200, 250, 250);
    image (rightArrow, 550, 200, 60, 60);
    image (leftArrow, 50, 200, 60, 60);
    image(symbol[globalIndex], width/2,height/2,150,150);
  
} //DRAW IND EARTH

function marsPage(){
    background(6,16,46);
    textSize(30);
    text('Mars', 300, 50);
    image (mars, 300, 200, 250, 250);
    image (rightArrow, 550, 200, 60, 60);
    image (leftArrow, 50, 200, 60, 60);
    image(symbol[globalIndex], width/2,height/2,150,150);
  
} //DRAW IND MARS

function jupiterPage(){
    background(6,16,46);
    textSize(30);
    text('Jupiter', 300, 50);
    image (jupiter, 300, 200, 250, 250);
    image (rightArrow, 550, 200, 60, 60);
    image (leftArrow, 50, 200, 60, 60);
    image(symbol[globalIndex], width/2,height/2,150,150);
  
} //DRAW IND JUPITER

function saturnPage(){
    background(6,16,46);
    textSize(30);
    text('Saturn', 300, 50);
    image (saturn, 300, 200, 430, 220);
    image (rightArrow, 550, 200, 60, 60);
    image (leftArrow, 50, 200, 60, 60);
    image(symbol[globalIndex], width/2,height/2,150,150);
  
} //DRAW IND SATURN

function uranusPage(){
    background(6,16,46);
    textSize(30);
    text('Uranus', 300, 50);
    image (uranus, 300, 200, 170, 270);
    image (rightArrow, 550, 200, 60, 60);
    image (leftArrow, 50, 200, 60, 60);
    image(symbol[globalIndex], width/2,height/2,100,100);
  
} //DRAW IND URANUS

function neptunePage(){
    background(6,16,46);
    textSize(30);
    text('Neptune', 300, 50);
    textSize(20);
    text('Back to Whole View', 300, 380);
    image (neptune, 300, 200, 250, 250);
    image (leftArrow, 50, 200, 60, 60);
    image(symbol[globalIndex], width/2,height/2,150,150);
  
} //DRAW IND NEPTUNE