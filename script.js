// let sum=0;
// for(let i=1;i<=100;i++){
//     sum=sum+i;
// }
// console.log("Sum of all numbers from 1 to 100 is:"+sum)


// var num=0
//  for(var i=100;i>=1;i--){
//     console.log(i)
//  }

// var price=[200,550,120,280,200]
// var total=0

// for(var i=0;i<price.length;i++){
//     console.log("Product"+(i+1)+"price:"+price[i]);
//     total=total+price[i];
// }

// console.log("Total Bill:",total);

// var discount=0;
// if(total>1000){
//     discount=total*10/100;
//     console.log("discount(10%):",discount);
    
// }
// var finalb=total-discount;
// console.log("Final bill:"+finalb);



// for (let num =1 ; num<=50 ; num ++){
// if(num %10==0){
//     console.log("Get Ready")
// }else if(num ==1){
//     console.log("Start"); 
// }else{
//     console.log(num); 
// }
// }


// Write a program to check whether a given number is prime using a for loop.
// - If it has only two factors, print Prime Number.
// - Otherwise, print Not a Prime Number. 



// var num = prompt=("enter a number")
// var count=0
// for (let i =1 ; i<=num ; i++){

// if(num%i == 0){
//     count++
// }
// }

// if(count=2){
//     console.log("prime number");
    
// }


for(let i = 1; i <= 30; i++){

    if(i % 3 == 0 && i % 5 == 0){
        console.log("Green");
    }
    else if(i % 3 == 0){
        console.log("Red");
    }
    else if(i % 5 == 0){
        console.log("Yellow");
    }
    else{
        console.log(i);
    }

}
