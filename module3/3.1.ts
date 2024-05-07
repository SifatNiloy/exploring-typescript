{
//oop  - class

class Animal{
    // public name: string;
    // public species: string;
    // public sound: string;

   

    // constructor (name: string, species: string, sound: string){
    //     this.name= name;
    //     this.species= species;
    //     this.sound= sound
    // }


    constructor (public name: string, public species: string, public sound: string){
        
    }

    makeSound(){
        console.log(`the ${this.name} says ${this.sound}`)
    }
}

const dog= new Animal("German Shepard", "dog", "ghew ghew")
const cat = new Animal("Parsian", "cat", "mew meaw")
cat.makeSound()



}