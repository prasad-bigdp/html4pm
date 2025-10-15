class Fruit
{
    name; taste; shape; color;
    //There is default method which gets called automatically when object is created to initalize new values
    constructor(a,b,c,d)
    {
        this.name = a;
        this.taste = b;
        this.shape = c;
        this.color = d;
    }
}
let apple = new Fruit("appple","sweet","round","red")
console.log(apple)
let banana = new Fruit("banana","sweet","cylinder","yellow")
console.log(typeof Fruit) // function
