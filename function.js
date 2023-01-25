//every function has a this Object

//value of this value depends how the function is called

function Product(title, price) {
    this.title = title
    this.price = price
    console.log(this)
}

// var a = Product("xyz", 55)   //print the this as Global object of nodejs  //attaches argument in global Object


function Product1(title, price) {
    this.title = title
    this.price = price
    console.log(this)
}

Product1('tit', 55)   //callling function (function Product() {...} ) as a function ( Product('xyz', 55) )  ==> function invocation pattern

//////////////////////////////

