# Proyecto estudio find
Basado en el ejemplo:
https://docs.mongodb.com/manual/tutorial/query-documents/
------------------------------------------------------------
· Estos son los documentos a insertar:
db.inventory.insertMany([
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
]);

// Con este query seleccionaremos todos los documentos de una colección.
db.inventory.find( {} )

// El siguiente seleccionara de la colleción todos los documentos donde el status sea "D".
db.inventory.find({ status: "D" })

// Este selecciona todos los documentos donde status sea "A" o "D"
db.inventory.find({ status: { $in: [ "A", "D" ]}})

// Muestra todos los documentos que tengan status "A" y que la cantidad es menor a "30"
db.inventory.find({ status: "A", qty: { $lt: 30 }})

// Muestra todos los documentos que tengan status "A" o que la cantidad es menor a "30"
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

