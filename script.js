
// Task 1 - იპოვეთ ყველაზე დიდი რიცხვი მოცემულ მასივში let arr = [1, 3, 5, 7, 2]

var arr = [1, 3, 5, 7, 2];
var max_num = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max_num) {
        max_num = arr[i];
    }
}

console.log(max_num);


// Task 2 - შეაბრუნეთ reverse მასივი let arr = [1, 2, 3, 4, 5];

var arr = [1, 2, 3, 4, 5];
var rev_arr = [];

for (var i = 0; i < arr.length; i++) {
    rev_arr[i] = arr[arr.length-i-1]
}

console.log(rev_arr);


// Task 3 - მოცემულ ერეიში დააჯამეთ მონაცემები let arr = [1, 2, 3, 4, 5]

var arr = [1, 2, 3, 4, 5];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}

console.log(sum);



// Task 4 - მოცემული ორი ერეიდან იპოვეთ მსგავსი რიცხვები 

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let sim = []

for (var i = 0; i < arr1.length; i++){
    for (var j = 0; j < arr2.length; j++){
        if(arr1[i] == arr2[j]) {
            sim.push(arr1[i])
        }
    }
} 

console.log(sim);

// Task 5 -  შექმენით ფუნქცია სადაც ერთ ფუნქციას გამოიყენებთ მოერე ფუნქციის პარამეტრად და ifelse მეშვეობით 
// დაბეჭდეთ რამე ინფორმაცია 
// (მაგ: თუ რამე ნივთის ფასი მაღაზიაში არის 50 ლარზე მეტი ესეიგი ძვირია 
// თუ 20-50 დიაპაზონშია მოქცეული საშუალო 
// თუ ნაკლები იაფი)

function display(x,shefasebisfunc){
    let result = shefasebisfunc(x);
    console.log(result);
}

function shefasebisfunc(price){
    if (price > 50){
        return "ძვირია";
    }
    if (price <= 50 & price >= 20){
        return "საშუალოა";
    }
    if (price < 20){
        return "იაფია";
    }
}

display (10,shefasebisfunc)
display (40, shefasebisfunc)
display (100, shefasebisfunc)
