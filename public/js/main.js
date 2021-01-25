let personne = {
    nom : 'Adame',
    lieu : 'maison',
    argent : 15000,
    mainDroite : [],
    mainGauche : [],
    sedeplacer(x){
        this.lieu = x
        console.log(`${this.nom } se déplace à ${this.lieu.nom}`);
    },
    payerArticle(ingredients){
        this.argent = this.argent - ingredients.prix
        console.log(`${this.nom} paye ses article`);
    },
    couper(ingredients){
        ingredients.etat = "coupé"
        console.log(`l'${ingredients.nom} est maintenant ${ingredients.etat}`);
    }
}

// personne.sedeplacer();

let maison = {
    nom : 'maison',
    personnes : [],
}


let outil = {
    nom : "couteau",
    action : "coupé"
}

class Ingredients {
    constructor(nom,etat,prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    };
}
let oignon = new Ingredients('oignon', 'entier', 0,50)
let oeuf = new Ingredients('oeuf', 'entier', 1.20 )
let epice = new Ingredients('epice', 'moulu', 0.25)
let fromage = new Ingredients('fromage', 'coupé', 1.65)

let epicerie = {
    nom : "epicerie",
    personnes : [],
    paniers : [panier ={
        type : "panier",
        contenu : [],
    }],
    ingredients : [oignon, oeuf, epice, fromage]
}


let poele = {
    contenu: [],
    cuire() {
        setTimeout(()=> {
            this.contenu[0].etat = "cuit";
            console.log(`l'omelette est cuite`);
        }, 4000)
    }
}

// poele.cuir()



let bol = {
    contenu: [],
    melanger(nomMelange){
        newMelange = {
            nom  : nomMelange,
            etat : "pas cuit"
        }
        this.contenu.splice(0,4,newMelange)
    }
}
// bol.melanger('omelette')
// console.log(bol);

//  OMELETTE

console.log(personne.nom + " est actuellement à la " + personne.lieu);

// BALADE AU MAGASIN

personne.sedeplacer(epicerie)


console.log(personne.nom + " récupère le " + panier.type +  " et le met dans sa main droite");
epicerie.paniers[panier.contenu.splice(0,1)]

// ACHETER

personne.mainDroite.push(epicerie.paniers[0])
console.log(`${personne.nom} a pris un ${panier.type}`);



epicerie.ingredients.forEach(element => {
    personne.mainDroite[0].contenu.push(element);
    console.log(`${personne.nom} a pris un ${element.nom}`);
})

// PAYER

personne.mainDroite[0].contenu.forEach(element => {
    personne.payerArticle(element)
});
console.log(personne.argent);

// DE EPICERIE A LA MAISON

personne.sedeplacer(maison)

personne.mainDroite[0].contenu.forEach(element => {
    bol.contenu.push(element)
    personne.mainDroite[0].contenu = personne.mainDroite[0].contenu.filter(item => item !== element)
    console.log(`l'${element.nom} a été ajouté dans le bol`);
});
// RETOUR AU MAGASIN

personne.sedeplacer(epicerie)

personne.mainDroite.splice(epicerie.paniers[0])
console.log(`${personne.nom} a remis le ${panier.type}`);

// RETOUR A LA MAISON

personne.sedeplacer(maison)

// PREPARATION 

personne.couper(bol.contenu[1])
console.log(bol.contenu);


bol.melanger('omelette')
console.log(bol.contenu);
console.log(`Les ingrédients sont mélangés : ${bol.contenu}`);

bol.contenu.push(poele)
console.log(poele);
console.log(bol);
console.log(`le bol est vidé dans la poele`);

// CUISSON

// poele.cuir()

console.log(poele);
let prete = {
    contenue : [0],
    cuir2() {
        setTimeout(()=> {
            if (this.contenue[0] == 0) {
                console.log('votre omelette est cuite');
            }
        }, 5000)
    }
}
prete.cuir2()