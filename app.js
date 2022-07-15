// Assigning varialbes
const x1 = document.querySelector("#x1");
const y1 = document.querySelector("#y1");
const z1 = document.querySelector("#z1");
const a1 = document.querySelector("#a1");

const y2 = document.querySelector("#y2");
const x2 = document.querySelector("#x2");
const z2 = document.querySelector("#z2");
const a2 = document.querySelector("#a2");

const y3 = document.querySelector("#y3");
const x3 = document.querySelector("#x3");
const z3 = document.querySelector("#z3");
const a3 = document.querySelector("#a3");

const sovle = document.querySelector("#sovle");

let x1Ans = document.querySelector("#x1Ans");
let y1Ans = document.querySelector("#y1Ans");
let z1Ans = document.querySelector("#z1Ans");
let a1Ans = document.querySelector("#a1Ans");

let y2Ans = document.querySelector("#y2Ans");
let x2Ans = document.querySelector("#x2Ans");
let z2Ans = document.querySelector("#z2Ans");
let a2Ans = document.querySelector("#a2Ans");

let y3Ans = document.querySelector("#y3Ans");
let x3Ans = document.querySelector("#x3Ans");
let z3Ans = document.querySelector("#z3Ans");
let a3Ans = document.querySelector("#a3Ans");

const echolenForm = document.querySelector("#echolenForm");

let ansX = document.querySelector("#ansX");
let ansY = document.querySelector("#ansY");
let ansZ = document.querySelector("#ansZ");
let ansR = document.querySelector("#ansR");

echolenForm.style.display = "none";

sovle.addEventListener("click", ()=>{
    // Assigning Values to an array
    let row1 = [parseFloat(x1.value), parseFloat(y1.value), parseFloat(z1.value), parseFloat(a1.value)]; 
    let row2 = [parseFloat(x2.value), parseFloat(y2.value), parseFloat(z2.value), parseFloat(a2.value)]; 
    let row3 = [parseFloat(x3.value), parseFloat(y3.value), parseFloat(z3.value), parseFloat(a3.value)];
    //Creating magicNum
    // let magicNum1 = row2[0];
    let magicNum1 = 0;
    if(row1[0] == row2[0]){
        magicNum1 = -row1[0];
    }else{
        magicNum1 = row2[0];
    }
    // if (row1[0] == 1) {
    //     magicNum1 = row2[0];
    // } else if(row1[0] > 1){
    //     while (row1[0] < row2[0]) {
    //         row1[0]++;
    //         magicNum1++;
    //     }
    //     console.log(row1[0]);
    //     console.log(magicNum1);
    // }
    
    if (magicNum1 + magicNum1 == 0) {
        magicNum1 = magicNum1;
    }else{
        magicNum1 = -magicNum1;
    }
    //magicNum * row1
    let newRow1of2 = row1.map(num => magicNum1 * num);
    //newRow2 = row 1 + row 2 
    let newRow2 = [];
    for (let i = 0; i < 4; i++) {
        newRow2.push(newRow1of2[i] + row2[i]);
    }
    //newRow3a = (row 1 || row 2) + row 3 
    let magicNum2 = 0;
    if(row2[0] == row3[0]){
        magicNum2 = -row2[0];
    }else{
        magicNum2 = row3[0];
    }
    
    
    if (magicNum2 + magicNum2 == 0) {
        magicNum2 = magicNum2;
    }else{
        magicNum2 = -magicNum2;
    }
    //magicNum * row1
    let newRow1of3 = row1.map(num => magicNum2 * num);
    //newRow3a = row 1 + row 3
    let newRow3a = [];
    for (let i = 0; i < 4; i++) {
        newRow3a.push(newRow1of3[i] + row3[i]);
    }
    //newRow3b = (row 1 || row 2) + row 3 
    let magicNum3 = newRow3a[1];
    // if(row2[1] == row3[1]){
    //     magicNum3 = -row2[1];
    // }else{
    //     magicNum3 = row3[1];
    // }
    
    
    if(newRow2[1] + newRow3a[1] == 0) {
        magicNum3 = 1;
    }else if(-newRow2[1] + newRow3a[1] == 0) {
        magicNum3 = -1;
    }else if(magicNum3 + magicNum3 == 0) {
        magicNum3 = magicNum3;
    }else if(-magicNum3 + magicNum3 == 0 && newRow2[1] > 0) {
        magicNum3 = -magicNum3;
    }else if(-magicNum3 + magicNum3 == 0 && newRow2[1] < 0) {
        magicNum3 = magicNum3;
    }else{
        magicNum3 = -magicNum3;
    }
    console.log(magicNum3);
    //magicNum * row1
    let newRow2of3 = newRow2.map(num => magicNum3 * num);
    //newRow3b = row 1 + row 3
    let newRow3b = [];
    for (let i = 0; i < 4; i++) {
        newRow3b.push(newRow2of3[i] + newRow3a[i]);
    }
    console.log(row1);
    console.log(newRow2);
    console.log(newRow3a);
    console.log(newRow3b);
    
    // Creating new array for echolen answer
    const echolenFormArray = [...row1, ...newRow2, ...newRow3b];
    //Echolen form answer
    for (let i = 0; i < echolenFormArray.length; i++) {
        x1Ans.value = echolenFormArray[i];
        i++;
        y1Ans.value = echolenFormArray[i];
        i++;
        z1Ans.value = echolenFormArray[i];
        i++;
        a1Ans.value = echolenFormArray[i];
        i++;

        x2Ans.value = echolenFormArray[i];
        i++;
        y2Ans.value = echolenFormArray[i];
        i++;
        z2Ans.value = echolenFormArray[i];
        i++;
        a2Ans.value = echolenFormArray[i];
        i++;

        x3Ans.value = echolenFormArray[i];
        i++;
        y3Ans.value = echolenFormArray[i];
        i++;
        z3Ans.value = echolenFormArray[i];
        i++;
        a3Ans.value = echolenFormArray[i];
        i++;
    }

    let x, y, z, R;
    if(z3Ans.value == 1){
        z = parseFloat(a3Ans.value);
        R = "Unique Solution";
    }else if(z3Ans.value == 0){
        z = 'Zero';
        R = "No Solution - it's Inconsistent";
    }else{
        z = parseFloat(a3Ans.value)/parseFloat(z3Ans.value);
        R = "Unique Solution";
    }
    y = parseFloat(a2Ans.value) - (parseFloat(z2Ans.value) * z);
    x = parseFloat(a1Ans.value) - (parseFloat(y1Ans.value) * y) - (parseFloat(z1Ans.value) * z);

    ansX.innerHTML = x;
    ansY.innerHTML = y;
    ansZ.innerHTML = z;
    ansR.innerHTML = R;
    
    echolenForm.style.display = "block";
    
});

