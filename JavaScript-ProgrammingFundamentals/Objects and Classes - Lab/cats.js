function cats(input) {
    class Cats {
        constructor(catName, age) {
            this.catName = catName;
            this.age = age;
        }

        meow() {
            console.log(`${this.catName}, age ${this.age} says Meow`);
        }
    }

    for (let kitty of input) {
        let infoHolder = kitty.split(" ");
        let catName = infoHolder[0];
        let age = infoHolder[1];

        let myCat = new Cats (catName, age);
        myCat.meow();
    }

}

cats(['Mellow 2', 'Tom 5']);
/*
Mellow, age 2 says Meow
Tom, age 5 says Meow
*/

cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
/*
Candy, age 1 says Meow
Poppy, age 3 says Meow
Nyx, age 2 says Meow
*/