let button = document.querySelector("button");
let BODY = document.querySelector('body');
let tint = document.querySelector('.tint');
let div1 = document.querySelector('.tint1');
let div2 = document.querySelector('.tint2');
let div3 = document.querySelector('.tint3');
let copyText = document.querySelector("#input");

button.addEventListener("click", () => {

tint.style.display = 'flex';
let Random1 = Math.floor((Math.random()*255)-1);
let  Random2 = Math.floor((Math.random()*255)-2);
let  Random3 = Math.floor((Math.random()*255)-3); 
let colorCode = `rgb(${Random1},${Random2},${Random3})`;


 BODY.style.backgroundColor = colorCode;
    copyText.value = colorCode; 
    
    
   /* Tint color generater based on radom color */
let RandomDarkTint1 = Math.floor(Random1+(0.115*(255-Random1)));
let RandomDarkTint2 = Math.floor(Random2+(0.115*(255-Random2)));
let RandomDarkTint3 = Math.floor(Random3+(0.115*(255-Random3)));
let RandomDarkTintColorCode = `rgb(${RandomDarkTint1},${RandomDarkTint2},${RandomDarkTint3})`;

let RandomLightTint1 = Math.floor(Random1+(0.35*(255-Random1)));
let RandomLightTint2 = Math.floor(Random2+(0.35*(255-Random2)));
let RandomLightTint3 = Math.floor(Random3+(0.35*(255-Random3)));
let RandomLightTintColorCode = `rgb(${RandomLightTint1},${RandomLightTint2},${RandomLightTint3})`;



   div1.style.backgroundColor = RandomDarkTintColorCode; 
   div1.innerHTML =  RandomDarkTintColorCode; 
    div2.style.backgroundColor = RandomLightTintColorCode; 
    div2.innerHTML =  RandomLightTintColorCode; 
    
    
    
    
   
    let Random11 = Math.floor(Random1*0.5);
let  Random21 = Math.floor(Random2*0.5);
let  Random31 =Math.floor(Random3*0.5);
let colorCode1 = `rgb(${Random11},${Random21},${Random31})`;
     div3.style.backgroundColor = colorCode1;
     div3.innerHTML =   colorCode1;
  }); 





function copy() {
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);

