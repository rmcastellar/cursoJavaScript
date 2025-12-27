let airportName = "GIG"; // Código do aeroporto de São Paulo




console.log("Código do Aeroporto: " + airportName); 
switch (airportName) {
    case "GRU":
        console.log("Aeroporto Internacional de São Paulo - Guarulhos");
        break;
    case "GIG":
        console.log("Aeroporto Internacional Tom Jobim - Rio de Janeiro");
        break;
    case "BSB":
        console.log("Aeroporto Internacional de Brasília");
        break;
    case "SSA":
        console.log("Aeroporto Internacional de Salvador");
        break;
    case "REC":
        console.log("Aeroporto Internacional do Recife");
        break;
    default:
        console.log("Código de aeroporto desconhecido");
        break;
}           