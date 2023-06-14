//Es parecido al if pero en una sola linea
const boleto = "vip";

// let codigoDeAcceso;

// if (boleto ==='vip'){
//     codigoDeAcceso = 'VIP-897-114'
// }else{
//     codigoDeAcceso = 'REGULAR-458-588'
// }

const codigoDeAcceso = boleto === "vip" ? "VIP-897-117" : "REGULAR-458-588";

boleto === "vip" ? console.log("Boleto VIP") : console.log("Boleto Regular");
