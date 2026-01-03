function add(a , b,...x ){

console.log(a + b ,"<br>", x,"<br>")
console.log(x)
for(let value of x){
    document.write(value,"<br>")
}                                                                                                            

}
add(10 ,20 ,30, 40, 50)

// default parameters

function newApp(a = 20 , b = 40 ){
    document.write("welcome",a + b)

}
newApp( 80 ,50)

    -
    