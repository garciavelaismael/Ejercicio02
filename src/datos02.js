/*Datos posteriores, se añaden junto a los iniciales*/
db.inventory.insertMany([
    { 
        item: "ebook", 
        qty: 60, 
        size: { 
            h: 10, 
            w: 15, 
            uom: "cm" 
        }, 
        status: "B"
     },
     { item:"pencil", qty: 75,size: {h:13,w:2,uom:"cm"},status: "B"}
]);
