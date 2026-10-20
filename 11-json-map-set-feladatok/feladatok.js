const termek = { id: 3, nev: 'Monitor', ar: 54990, cimkek: ['4K', '27 col'], raktaron: true };
const szamok = [5, 3, 8, 3, 1, 8, 5, 9, 1, 5];

//1.
console.log("\n1. feladat");
JSON.stringify(termek);

//2.
console.log("\n2. feladat");
console.log(JSON.stringify(termek, null, 2));

//3.
console.log("\n3. feladat");
const szoveg = '{"nev":"Webkamera","ar":12990,"cimkek":["Full HD","USB"]}';
let atlakitottszoveg = JSON.parse(szoveg);
console.log(atlakitottszoveg.nev, atlakitottszoveg.ar + 1, atlakitottszoveg.cimkek[1]);

//4.
console.log("\n4. feladat");
const felhasznalo = {
nev: 'Anna',
jelszo: undefined,
kor: 17,
koszon() { return 'Szia!'; }
};

console.log(JSON.stringify(felhasznalo));

const mennyiseg = new Map();
mennyiseg.set(felhasznalo);
console.log("Eredeti kulcsok:", JSON.stringify(mennyiseg.size));
console.log("Visszaalakított kulcsok:", JSON.stringify(JSON.parse(mennyiseg.size)));

//5.
console.log("\n5. feladat");
const mely = JSON.parse(JSON.stringify(termek));
mely.cimkek.push("HDMI");
console.log(termek.cimkek);
console.log(mely.cimkek);

//6.
console.log("\n6. feladat");
const keszlet = new Map();
keszlet.set("Egér", 12);         
keszlet.set("Monitor", 3);
keszlet.set("Kábel", 40);

console.log(keszlet.get("Monitor"));  
console.log(keszlet.has("Billentyűzet"));  
console.log(keszlet.size); 

//7.
console.log("\n7. feladat");
keszlet.delete("Kábel");
keszlet.set("Monitor", keszlet.get("Monitor") + 2);

for (i of keszlet) {
console.log(i[0] + ": " + i[1] + " db");
}

//8.
console.log("\n8. feladat");

const arak = { alma: 450, korte: 690, szilva: 520 };
const arakMap = new Map(Object.entries(arak));
console.log(arakMap);
arakMap.set("barack", 790);
const vissza = Object.fromEntries(arakMap);
console.log(vissza);

//9.
console.log("\n9. feladat");

const egyediszamok = new Set(szamok);
console.log(egyediszamok.size);
console.log(egyediszamok);

//10.
console.log("\n10. feladat");

const latogatok = new Set();
latogatok.add("Anna");
latogatok.add("Béla");
latogatok.add("Anna");
latogatok.add("Csilla");
latogatok.add("Béla");

console.log(latogatok.size);
console.log(latogatok.has("Dávid"));
latogatok.delete("Béla");
console.log(latogatok);

//11.
console.log("\n11. feladat");

const napNevek = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'];

const date = new Date("2026-09-07");  
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(napNevek[date.getDay()]);

//12.
console.log("\n12. feladat");

function formaz(datum) {
    let ev = datum.getFullYear();
    let honap = datum.getMonth() + 1;
    let nap = datum.getDate();
    return `${ev}.${honap.toString().padStart(2, '0')}.${nap.toString().padStart(2, '0')}`;
}

console.log(formaz(new Date("2026-03-05")));
console.log(formaz(new Date("2026-12-24")));

//13.
console.log("\n13. feladat");

const kezdet = new Date("2026-09-05");
const hatarido = new Date("2026-12-24");
const napok = Math.round((hatarido - kezdet) / 86400000);
console.log(napok);   

//14.
console.log("\n14. feladat");

console.log(Math.round(-2.7), " ", Math.floor(-2.7), " ", Math.ceil(-2.7), " ", Math.trunc(-2.7));
let kerekpi = Math.round(3.14159 * 10 ** 2) / 100;

console.log(kerekpi);
console.log(typeof kerekpi);

//15.
console.log("\n15. feladat");

function korlatoz(x, min, max) {
  return Math.min(Math.max(x, min), max);
}

console.log(korlatoz(15, 0, 10));
console.log(korlatoz(-3, 0, 10));
console.log(korlatoz(7, 0, 10));

//16.
console.log("\n16. feladat");
const szamokk = new Set();
function veletlen(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//(1000 db)
for (let i = 0; i < 10 ; i++) 
{
    let dobas = veletlen(1, 6);
    szamokk.add(dobas);
    console.log(dobas, dobas >= 1 && dobas <= 6 ? true : false);
}
console.log(szamokk.size == 6 ? "Minden szám előfordult" : "Nem minden szám fordult elő");