const LATAM_AIRLINES_BRASIL = "LATAM AIRLINES BRASIL";

// Query 1
db.voos.count({ "empresa.nome": LATAM_AIRLINES_BRASIL, natureza: "Doméstica" });
db.resumoVoos.insertOne({ empresa: LATAM_AIRLINES_BRASIL, totalVoosDomesticos: 20026 });

// Query 2
db.resumoVoos.findOne({ empresa: LATAM_AIRLINES_BRASIL }, { _id: 0 });
