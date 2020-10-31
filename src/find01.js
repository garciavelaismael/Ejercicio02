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

/*Cuando el campo es el mismo no hace falta repetirlo. Con and ímplicito*/
db.inventory.find({
    qty: {$lt: 60, $gt: 45}
}).pretty()

/*No tienen el status "A"*/
db.inventory.find({
	status: {$not: {$eq: "A"}}
}).pretty()

/*Muestra todos los que no tengan cantidad 5 o 15. En este caso se muestran todos*/
db.inventory.find({
	 qty: { $nin: [ 5, 15 ]}
}).pretty()

/*Busca los item que empiecen por n*/
db.inventory.find({
	item: {$regex: /^n/} 
})

/*Muestra los que terminan en r*/
db.inventory.find({
	item: {$regex: /r$/} 
}).pretty()

/*Los que tienen qty > 45 y < 60. Con and explícito, con el operador $and*/
db.inventory.find({
    $and: [ {qty: {$lt: 60}}, {qty: {$gt: 45}}]    
}).pretty()
/*Me devuelve el documento:
{
	"_id" : ObjectId("5f9875108799aa98e071a13b"),
	"item" : "notebook",
	"qty" : 50,
	"size" : {
		"h" : 8.5,
		"w" : 11,
		"uom" : "in"
	},
	"status" : "A"
}

