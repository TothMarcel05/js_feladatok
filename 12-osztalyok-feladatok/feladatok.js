//1.
console.log("\n1. feladat");

class Termek {
  constructor(nev, ar) {
    this.nev = nev;   
    this.ar = ar;
  }
    leiras() {
    return `${this.nev} - ${this.ar} Ft`;
  }
    akciosAr(szazalek) {                                
    return Math.round(this.ar * szazalek / 100);
  }
  
  get brutto() {                     // getter: számított „mező"
    return Math.round(this.ar * 1.27);
  }

}

const eger = new Termek("Egér", 6990);   
const kabel = new Termek("Monitor", 54990); 

console.log(eger);
console.log(kabel.nev);

//2.
console.log("\n2. feladat");

console.log(eger.leiras());
console.log(kabel.leiras());

//3.
console.log("\n3. feladat");

console.log(eger.akciosAr(10));
console.log(eger.akciosAr(25));

//4.
console.log("\n4. feladat");

class Szamlalo {
  constructor(ertek = 0) {
    this.ertek = ertek;
  }

  novel(ertek) {
    ertek += 1;
    return ertek;
  }

    csokkent(ertek) {
    if (ertek-1 > 0) ertek -= 1;
    return ertek;
  }
  nullaz(ertek) {
    ertek = 0;
    return ertek;
  }

}

let ertek = 0;
ertek = Szamlalo.prototype.novel(ertek);
ertek = Szamlalo.prototype.novel(ertek);
ertek = Szamlalo.prototype.novel(ertek);
ertek = Szamlalo.prototype.csokkent(ertek);
console.log(ertek);
ertek = Szamlalo.prototype.nullaz(ertek);
ertek = Szamlalo.prototype.csokkent(ertek);
console.log(ertek);

//5.
console.log("\n5. feladat");

let a = new Szamlalo(); 
a = novel();  
a = novel();  
a = novel();  
a = novel();  
a = novel(); 
let b = 0;
b = novel();  
b = novel();  

console.log(a);
console.log(b);
console.log(a instanceof Szamlalo, typeof a); 

//6.
console.log("\n6. feladat");

class Pont{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    tavolsag(masik) 
    {
        return Math.sqrt(x-y)
    }
    eltol(dx, dy)
    {
        return this.x + dx, this.y + dy
    }
}

//7.
console.log("\n7. feladat");

console.log(eger.brutto);
eger.ar = 7990;
console.log(eger.brutto);

//8.
console.log("\n8. feladat");

class Homero {
    constructor (celsius){
        this.celsius = celsius
    }
    get fahrenheit() {                  
    return  celsius * 9 / 5 + 32;
    }
    set fahrenheit(fahrenheit) {        
    this.celsius = fahrenheit / 9 * 5 - 32
  }
}

let homero = 25
console.log(homero.fahrenheit)
homero.fahrenheit = homero;
console.log(homero)

//9.
console.log("\n9. feladat");