/*Todos los documentos de la colección inventory*/
db.inventory.find( {} )

/*Todos los documentos de la colección inventory presentados con otra estructura*/
db.inventory.find( {} ).pretty()

/*El número de documentos de la colección inventory*/
db.inventory.find( {} ).count()

/*Los que tienen qty = 75 y status = "D". Hecho con un and implícito*/
db.inventory.find({
    qty: 75,
    status: "D"    
}).pretty()

/*Los que tienen qty = 75 y status = "D". Hecho con un and explícito*/
db.inventory.find(
    { $and: [  {qty: 75}, {status: "D" } ] }
).pretty()

/*Los que tienen qty > 45 y < 60. No funciona con el mismo campo el and implícito*/
db.inventory.find({
    qty: {$lt: 60},
    qty: {$gt: 45}
}).pretty()

/*Los que tienen qty > 45 y < 60. Con and explícito, con el operador $and*/
db.inventory.find({
    $and: [ {qty: {$lt: 60}}, {qty: {$gt: 45}}]    
}).pretty()

/*Me devuelve el documento:
{
        "_id" : ObjectId("5f9817f7a08505f9256ffcaa"),
        "item" : "notebook",
        "qty" : 50,
        "size" : {
                "h" : 8.5,
                "w" : 11,
                "uom" : "in"
        },
        "status" : "A"
}

/*Lo mismo que el anterior pero sin repetir qty*/
db.inventory.find({
    qty: {$lt: 60, $gt: 45}
}).pretty()

