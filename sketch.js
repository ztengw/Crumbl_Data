let font;
let bg;
let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33;
let data;
let headerID = 0;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vStTLPOsoyWBjalww7zmK_5N5NjJ0ytDSmx8unrArz6ZkWVGkmwcM0qKnkAo52lV7LEoWvGKY4O9XIv/pub?gid=0&single=true&output=csv";

function preload(){
  data = loadTable(url, "csv", "header");
  font = loadFont("ChangaOne-Regular.ttf");

  bg= loadImage("crumbl background3.jpg");

  img1 = loadImage("cookieimg/img1.webp");
  img2 = loadImage("cookieimg/img2.webp");
  img3 = loadImage("cookieimg/img3.webp");
  img4 = loadImage("cookieimg/img4.webp");
  img5 = loadImage("cookieimg/img5.webp");
  img6 = loadImage("cookieimg/img6.webp");
  img7 = loadImage("cookieimg/img7.webp");
  img8 = loadImage("cookieimg/img8.webp");
  img9 = loadImage("cookieimg/img9.webp");
  img10 = loadImage("cookieimg/img10.webp");
  img11 = loadImage("cookieimg/img11.webp");
  img12 = loadImage("cookieimg/img12.webp");
  img13 = loadImage("cookieimg/img13.webp");
  img14 = loadImage("cookieimg/img14.webp");
  img15 = loadImage("cookieimg/img15.webp");
  img16 = loadImage("cookieimg/img16.webp");
  img17 = loadImage("cookieimg/img17.webp");
  img18 = loadImage("cookieimg/img18.webp");
  img19 = loadImage("cookieimg/img19.webp");
  img20 = loadImage("cookieimg/img20.webp");
  img21 = loadImage("cookieimg/img21.webp");
  img22 = loadImage("cookieimg/img22.webp");
  img23 = loadImage("cookieimg/img23.webp");
  img24 = loadImage("cookieimg/img24.webp");
  img25 = loadImage("cookieimg/img25.webp");
  img26 = loadImage("cookieimg/img26.webp");
  img27 = loadImage("cookieimg/img27.webp");
  img28 = loadImage("cookieimg/img28.webp");
  img29 = loadImage("cookieimg/img29.webp");
  img30 = loadImage("cookieimg/img30.webp");
  img31 = loadImage("cookieimg/img31.webp");
  img32 = loadImage("cookieimg/img32.webp");
  img33 = loadImage("cookieimg/img33.webp");

}

////// Preload Here ///////

function setup() {
  createCanvas(2200, 980);
 
  textFont(font);
}

function draw() {
  // background(255, 185, 205);
  image(bg, 0, 0, width, height);

  fill(0);
  textSize(50);
  textAlign(LEFT);
  text("Choose Your Cookie", 270, 70);
 
  textSize(30);
  // text("Dubai Chocolate Brownie cookie", 740, 500, 100);

    noStroke();
    fill(0,0,0, 210);
    rect(45, 90, 900, 860, 20);

  
      
  // rect(20, 30, 100, 100);
  fill(255);
  // first row
  rect(70, 110, 125, 140, 20);
   image(img1, 75, 120, 115, 115);

  rect(215, 110, 125, 140, 20); 
   image(img2, 220, 120, 115, 115);

  rect(360, 110, 125, 140, 20);
   image(img3, 375, 130, 90, 90);

  rect(505, 110, 125, 140, 20);
   image(img4, 510, 120, 115, 115);

  rect(650, 110, 125, 140, 20);
   image(img5, 655, 120, 115, 115);

  rect(795, 110, 125, 140, 20); 
   image(img6, 815, 130, 90, 90);

  // second row
  rect(70, 280, 125, 140, 20);
   image(img7, 75, 290, 115, 115);

  rect(215, 280, 125, 140, 20);
   image(img8, 230, 300, 90, 90); 

  rect(360, 280, 125, 140, 20); 
   image(img9, 365, 290, 115, 115);

  rect(505, 280, 125, 140, 20);
   image(img10, 520, 300, 90, 90); 

  rect(650, 280, 125, 140, 20); 
    image(img11, 655, 290, 115, 115);
  
  rect(795, 280, 125, 140, 20);
   image(img12, 815, 300, 90, 90); 

  // third row
  rect(70, 450, 125, 140, 20);
   image(img13, 75, 460, 115, 115);

  rect(215, 450, 125, 140, 20);  
   image(img14, 230, 475, 90, 90);

  rect(360, 450, 125, 140, 20);
   image(img15, 365, 460, 115, 115);

  rect(505, 450, 125, 140, 20);
   image(img16, 525, 475, 90, 90);

  rect(650, 450, 125, 140, 20);
   image(img17, 655, 465, 115, 115);

  rect(795, 450, 125, 140, 20); 
   image(img18, 815, 475, 90, 90);

  //forth row
  rect(70, 620, 125, 140, 20);  
   image(img19, 75, 635, 115, 115);

  rect(215, 620, 125, 140, 20); 
    image(img20, 230, 645, 90, 90);

  rect(360, 620, 125, 140, 20); 
    image(img21, 365, 635, 115, 115);

  rect(505, 620, 125, 140, 20);  
    image(img22, 510, 635, 115, 115);

  rect(650, 620, 125, 140, 20); 
    image(img23, 670, 645, 90, 90); 

  rect(795, 620, 125, 140, 20); 
    image(img24, 800, 635, 115, 115); 
  
  //fifth row
  rect(70, 790, 125, 140, 20);  
    image(img25, 85, 815, 90, 90); 

  rect(215, 790, 125, 140, 20);
    image(img26, 220, 805, 115, 115);

  rect(360, 790, 125, 140, 20);
    image(img27, 375, 815, 90, 90);

  rect(505, 790, 125, 140, 20);
    image(img28, 510, 805, 115, 115);

  rect(650, 790, 125, 140, 20);
    image(img29, 665, 815, 90, 90); 

  rect(795, 790, 125, 140, 20); 
    image(img30, 800, 805, 115, 115);


  if (data){
    //nutritional box
  fill(255);
  rect(1050, 490, 330, 400, 20);

    let numRows = data.getRowCount();
    let rowData = data.getRow(headerID);
    // let calories = data.getColumn('Calories');

    fill(0);

    // name of cookie
    textAlign(RIGHT);
    textSize(90);
    text(rowData.getString(0), 1000, 120, 1150);

    //Calorie Data
    textSize(35);
    textAlign(RIGHT);
    text(rowData.getString(1), 1370, 540);
    text("Calories (cal)", 1270, 540);

    
    //for loop 
    for (let i = 0; i < 5; i++){
        let x = 1070;
        let y = 600 + i * 60;
        let w = rowData.getString(i + 2);
        let h = 15;

      rectMode(LEFT);
      rect(x, y, w, h);
      textAlign(LEFT);
      fill(0);
      textSize(35);
      text(data.columns[i + 2], x, y-15);
      textAlign(RIGHT);
      text(rowData.getString(i + 2), x + 290, y+15);
    }
  }


  // clickBoard();
  biscuits();
  // hover();

  console.log(mouseX, mouseY);

 
}
//////  End of Draw  ///////

function mousePressed(){

    if(
    mouseX > 70 &&
    mouseX < 200 &&
    mouseY > 110 &&
    mouseY < 250 && 
    mouseIsPressed   
  ){
      console.log("hi")
    headerID = 0;
  } if (
    mouseX > 215 &&
    mouseX < 345 &&
    mouseY > 110 &&
    mouseY < 250 &&
    mouseIsPressed 
  ){
    headerID = 1;
  } if (
    mouseX > 360 &&
    mouseX < 490 &&
    mouseY > 110 &&
    mouseY < 250 &&
    mouseIsPressed 
  ){
    headerID = 2;
  } if (
    mouseX > 505 &&
    mouseX < 625 &&
    mouseY > 110 &&
    mouseY < 250 &&
    mouseIsPressed 
  ){
    headerID = 3;
  } if (
    mouseX > 650 &&
    mouseX < 770 &&
    mouseY > 110 &&
    mouseY < 250 &&
    mouseIsPressed 
  ){
    headerID = 4;
  } if (
    mouseX > 800 &&
    mouseX < 920 &&
    mouseY > 110 &&
    mouseY < 250 &&
    mouseIsPressed 
  ){
    headerID = 5;
  } if(
    mouseX > 70 &&
    mouseX < 200 &&
    mouseY > 280 &&
    mouseY < 420 && 
    mouseIsPressed   
  ){
      console.log("hi")
    headerID = 6;
  } if (
    mouseX > 215 &&
    mouseX < 345 &&
    mouseY > 280 &&
    mouseY < 420 &&
    mouseIsPressed 
  ){
    headerID = 7;
  } if (
    mouseX > 360 &&
    mouseX < 490 &&
    mouseY > 280 &&
    mouseY < 420 &&
    mouseIsPressed 
  ){
    headerID = 8;
  } if (
    mouseX > 505 &&
    mouseX < 625 &&
    mouseY > 280 &&
    mouseY < 420 &&
    mouseIsPressed 
  ){
    headerID = 9;
  } if (
    mouseX > 650 &&
    mouseX < 770 &&
    mouseY > 280 &&
    mouseY < 420 &&
    mouseIsPressed 
  ){
    headerID = 10;
  } if (
    mouseX > 800 &&
    mouseX < 920 &&
    mouseY > 280 &&
    mouseY < 420 &&
    mouseIsPressed 
  ){
    headerID = 11;
  } if(
    mouseX > 70 &&
    mouseX < 200 &&
    mouseY > 445 &&
    mouseY < 595 && 
    mouseIsPressed   
  ){
      console.log("hi")
    headerID = 12;
  } if (
    mouseX > 215 &&
    mouseX < 345 &&
    mouseY > 445 &&
    mouseY < 595 &&
    mouseIsPressed 
  ){
    headerID = 13;
  } if (
    mouseX > 360 &&
    mouseX < 490 &&
    mouseY > 445 &&
    mouseY < 595 &&
    mouseIsPressed 
  ){
    headerID = 14;
  } if (
    mouseX > 505 &&
    mouseX < 625 &&
    mouseY > 445 &&
    mouseY < 595 &&
    mouseIsPressed 
  ){
    headerID = 15;
  } if (
    mouseX > 650 &&
    mouseX < 770 &&
    mouseY > 445 &&
    mouseY < 595 &&
    mouseIsPressed 
  ){
    headerID = 16;
  } if (
    mouseX > 800 &&
    mouseX < 920 &&
    mouseY > 445 &&
    mouseY < 595 &&
    mouseIsPressed 
  ){
    headerID = 17;
  } if(
    mouseX > 70 &&
    mouseX < 200 &&
    mouseY > 620 &&
    mouseY < 755 && 
    mouseIsPressed   
  ){
      console.log("hi")
    headerID = 18;
  } if (
    mouseX > 215 &&
    mouseX < 345 &&
    mouseY > 620 &&
    mouseY < 755 &&
    mouseIsPressed 
  ){
    headerID = 19;
  } if (
    mouseX > 360 &&
    mouseX < 490 &&
    mouseY > 620 &&
    mouseY < 755 &&
    mouseIsPressed 
  ){
    headerID = 20;
  } if (
    mouseX > 505 &&
    mouseX < 625 &&
    mouseY > 620 &&
    mouseY < 755 &&
    mouseIsPressed 
  ){
    headerID =21;
  } if (
    mouseX > 650 &&
    mouseX < 770 &&
    mouseY > 620 &&
    mouseY < 755 &&
    mouseIsPressed 
  ){
    headerID = 22;
  } if (
    mouseX > 800 &&
    mouseX < 920 &&
    mouseY > 620 &&
    mouseY < 755 &&
    mouseIsPressed 
  ){
    headerID = 23;
  } if(
    mouseX > 70 &&
    mouseX < 200 &&
    mouseY > 790 &&
    mouseY < 930 && 
    mouseIsPressed   
  ){
    headerID = 24;
  } if (
    mouseX > 215 &&
    mouseX < 345 &&
    mouseY > 790 &&
    mouseY < 930 &&
    mouseIsPressed 
  ){
    headerID = 25;
  } if (
    mouseX > 360 &&
    mouseX < 490 &&
    mouseY > 790 &&
    mouseY < 930 &&
    mouseIsPressed 
  ){
    headerID = 26;
  } if (
    mouseX > 505 &&
    mouseX < 625 &&
    mouseY > 790 &&
    mouseY < 930 &&
    mouseIsPressed 
  ){
    headerID = 27;
  } if (
    mouseX > 650 &&
    mouseX < 770 &&
    mouseY > 790 &&
    mouseY < 930 &&
    mouseIsPressed 
  ){
    headerID = 28;
  } if (
    mouseX > 800 &&
    mouseX < 920 &&
    mouseY > 790 &&
    mouseY < 930 &&
    mouseIsPressed 
  ){
    headerID = 29;
  } 
}
  //////  End of Mousepressed //////

//   function hover(){

//     if(
//     mouseX > 70 &&
//     mouseX < 200 &&
//     mouseY > 110 &&
//     mouseY < 250   
//   ){
//     fill(255, 185, 205, 20);
//     rect(70, 110, 125, 140, 20);
//    image(img1, 75, 120, 115, 115);

    
//   } if (
//     mouseX > 215 &&
//     mouseX < 345 &&
//     mouseY > 110 &&
//     mouseY < 250 &&
//     mouseIsPressed 
//   ){
//     headerID = 1;
//   } if (
//     mouseX > 360 &&
//     mouseX < 490 &&
//     mouseY > 110 &&
//     mouseY < 250 &&
//     mouseIsPressed 
//   ){
//     headerID = 2;
//   } if (
//     mouseX > 505 &&
//     mouseX < 625 &&
//     mouseY > 110 &&
//     mouseY < 250 &&
//     mouseIsPressed 
//   ){
//     headerID = 3;
//   } if (
//     mouseX > 650 &&
//     mouseX < 770 &&
//     mouseY > 110 &&
//     mouseY < 250 &&
//     mouseIsPressed 
//   ){
//     headerID = 4;
//   } if (
//     mouseX > 800 &&
//     mouseX < 920 &&
//     mouseY > 110 &&
//     mouseY < 250 &&
//     mouseIsPressed 
//   ){
//     headerID = 5;
//   } if(
//     mouseX > 70 &&
//     mouseX < 200 &&
//     mouseY > 280 &&
//     mouseY < 420 && 
//     mouseIsPressed   
//   ){
//       console.log("hi")
//     headerID = 6;
//   } if (
//     mouseX > 215 &&
//     mouseX < 345 &&
//     mouseY > 280 &&
//     mouseY < 420 &&
//     mouseIsPressed 
//   ){
//     headerID = 7;
//   } if (
//     mouseX > 360 &&
//     mouseX < 490 &&
//     mouseY > 280 &&
//     mouseY < 420 &&
//     mouseIsPressed 
//   ){
//     headerID = 8;
//   } if (
//     mouseX > 505 &&
//     mouseX < 625 &&
//     mouseY > 280 &&
//     mouseY < 420 &&
//     mouseIsPressed 
//   ){
//     headerID = 9;
//   } if (
//     mouseX > 650 &&
//     mouseX < 770 &&
//     mouseY > 280 &&
//     mouseY < 420 &&
//     mouseIsPressed 
//   ){
//     headerID = 10;
//   } if (
//     mouseX > 800 &&
//     mouseX < 920 &&
//     mouseY > 280 &&
//     mouseY < 420 &&
//     mouseIsPressed 
//   ){
//     headerID = 11;
//   } if(
//     mouseX > 70 &&
//     mouseX < 200 &&
//     mouseY > 445 &&
//     mouseY < 595 && 
//     mouseIsPressed   
//   ){
//       console.log("hi")
//     headerID = 12;
//   } if (
//     mouseX > 215 &&
//     mouseX < 345 &&
//     mouseY > 445 &&
//     mouseY < 595 &&
//     mouseIsPressed 
//   ){
//     headerID = 13;
//   } if (
//     mouseX > 360 &&
//     mouseX < 490 &&
//     mouseY > 445 &&
//     mouseY < 595 &&
//     mouseIsPressed 
//   ){
//     headerID = 14;
//   } if (
//     mouseX > 505 &&
//     mouseX < 625 &&
//     mouseY > 445 &&
//     mouseY < 595 &&
//     mouseIsPressed 
//   ){
//     headerID = 15;
//   } if (
//     mouseX > 650 &&
//     mouseX < 770 &&
//     mouseY > 445 &&
//     mouseY < 595 &&
//     mouseIsPressed 
//   ){
//     headerID = 16;
//   } if (
//     mouseX > 800 &&
//     mouseX < 920 &&
//     mouseY > 445 &&
//     mouseY < 595 &&
//     mouseIsPressed 
//   ){
//     headerID = 17;
//   } if(
//     mouseX > 70 &&
//     mouseX < 200 &&
//     mouseY > 620 &&
//     mouseY < 755 && 
//     mouseIsPressed   
//   ){
//       console.log("hi")
//     headerID = 18;
//   } if (
//     mouseX > 215 &&
//     mouseX < 345 &&
//     mouseY > 620 &&
//     mouseY < 755 &&
//     mouseIsPressed 
//   ){
//     headerID = 19;
//   } if (
//     mouseX > 360 &&
//     mouseX < 490 &&
//     mouseY > 620 &&
//     mouseY < 755 &&
//     mouseIsPressed 
//   ){
//     headerID = 20;
//   } if (
//     mouseX > 505 &&
//     mouseX < 625 &&
//     mouseY > 620 &&
//     mouseY < 755 &&
//     mouseIsPressed 
//   ){
//     headerID =21;
//   } if (
//     mouseX > 650 &&
//     mouseX < 770 &&
//     mouseY > 620 &&
//     mouseY < 755 &&
//     mouseIsPressed 
//   ){
//     headerID = 22;
//   } if (
//     mouseX > 800 &&
//     mouseX < 920 &&
//     mouseY > 620 &&
//     mouseY < 755 &&
//     mouseIsPressed 
//   ){
//     headerID = 23;
//   } if(
//     mouseX > 70 &&
//     mouseX < 200 &&
//     mouseY > 790 &&
//     mouseY < 930 && 
//     mouseIsPressed   
//   ){
//     headerID = 24;
//   } if (
//     mouseX > 215 &&
//     mouseX < 345 &&
//     mouseY > 790 &&
//     mouseY < 930 &&
//     mouseIsPressed 
//   ){
//     headerID = 25;
//   } if (
//     mouseX > 360 &&
//     mouseX < 490 &&
//     mouseY > 790 &&
//     mouseY < 930 &&
//     mouseIsPressed 
//   ){
//     headerID = 26;
//   } if (
//     mouseX > 505 &&
//     mouseX < 625 &&
//     mouseY > 790 &&
//     mouseY < 930 &&
//     mouseIsPressed 
//   ){
//     headerID = 27;
//   } if (
//     mouseX > 650 &&
//     mouseX < 770 &&
//     mouseY > 790 &&
//     mouseY < 930 &&
//     mouseIsPressed 
//   ){
//     headerID = 28;
//   } if (
//     mouseX > 800 &&
//     mouseX < 920 &&
//     mouseY > 790 &&
//     mouseY < 930 &&
//     mouseIsPressed 
//   ){
//     headerID = 29;
//   } 


// }
// }
//////  End of Hover  //////

function biscuits(){
  if (headerID == 0){
        image(img1, 1450, 290, 600, 600);
    } else if (headerID == 1){
       image(img2, 1400, 250, 600, 600);
    } else if (headerID == 2){
       image(img3, 1500, 370, 450, 450);
    } else if (headerID == 3){
       image(img4, 1450, 250, 600, 600);
    } else if (headerID == 4){
       image(img5, 1400, 250, 600, 600);
    } else if (headerID == 5){
       image(img6, 1500, 370, 450, 450);
    } else if (headerID == 6){
       image(img7, 1400, 250, 600, 600);
    } else if (headerID == 7){
       image(img8, 1500, 370, 450, 450);
    } else if (headerID == 8){
       image(img9, 1400, 250, 600, 600);
    } else if (headerID == 9){
       image(img10, 1500, 370, 450, 450);
    } else if (headerID == 10){
       image(img11, 1400, 250, 600, 600);
    } else if (headerID == 11){
       image(img12, 1500, 370, 450, 450);
    } else if (headerID == 12){
       image(img13, 1400, 250, 600, 600);
    } else if (headerID == 13){
       image(img14, 1500, 370, 450, 450);
    } else if (headerID == 14){
       image(img15, 1400, 250, 600, 600);
    } else if (headerID == 15){
       image(img16, 1500, 370, 450, 450);
    } else if (headerID == 16){
       image(img17, 1400, 250, 600, 600);
    } else if (headerID == 17){
       image(img18, 1500, 370, 450, 450);
    } else if (headerID == 18){
       image(img19, 1400, 250, 600, 600);
    } else if (headerID == 19){
       image(img20, 1500, 370, 450, 450);
    } else if (headerID == 20){
       image(img21, 1450, 290, 600, 600);
    } else if (headerID == 21){
       image(img22, 1400, 250, 600, 600);
    } else if (headerID == 22){
       image(img23, 1500, 370, 450, 450);
    } else if (headerID == 23){
       image(img24, 1400, 250, 600, 600);
    } else if (headerID == 24){
       image(img25, 1500, 370, 450, 450);
    } else if (headerID == 25){
       image(img26, 1400, 250, 600, 600);
    } else if (headerID == 26){
       image(img27, 1500, 370, 450, 450);
    } else if (headerID == 27){
       image(img28, 1400, 250, 600, 600);
    } else if (headerID == 28){
       image(img29, 1500, 370, 450, 450);
    } else if (headerID == 29){
       image(img30, 1400, 250, 600, 600);
    } else if (headerID == 30){
       image(img31, 1500, 370, 450, 450);
    } else if (headerID == 31){
       image(img32, 1250, 650, 300, 300);
    } else if (headerID == 32){
       image(img33, 1250, 650, 300, 300);
    } 
}