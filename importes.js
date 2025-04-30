function numeroAletras(num) {
    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const especiales = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
    const decenas = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const centenas = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

    if (num === 0) return "cero";
    
    let letras = "";
    
    if (num >= 1000) {
        const miles = Math.floor(num / 1000);
        if (miles === 1) {
            letras += "mil";
        } else {
            letras += numeroAletras(miles) + " mil";
        }
        num %= 1000;
        if (num > 0) letras += " ";
    }

    if (num >= 100) {
        const centena = Math.floor(num / 100);
        letras += (centena === 1 && num % 100 === 0) ? "cien" : centenas[centena];
        num %= 100;
        if (num > 0) letras += " ";
    }

    if (num >= 10 && num < 20) {
        letras += especiales[num - 10];
        return letras;
    }

    if (num >= 20) {
        const decena = Math.floor(num / 10);
        letras += decenas[decena];
        num %= 10;
        if (num > 0) letras += " y ";
    }

    if (num > 0 && num < 10) {
        letras += unidades[num];
    }

    if (letras == "uno") {
        letras = letras.slice(0, -3) + "un";
    }
    

    return letras;
}

function convertirPesos(num) {
    const partes = num.toFixed(2).split(".");
    const pesos = parseInt(partes[0]);
    const centavos = parseInt(partes[1]);
    let resultado;
    if (pesos == 1) {
        resultado = numeroAletras(pesos) + " peso";
    }else{
        resultado = numeroAletras(pesos) + " pesos";
    }
    
    if (centavos > 0) {
        resultado += " con " + numeroAletras(centavos) + " centavos";
    }
    return resultado.charAt(0).toUpperCase() + resultado.slice(1);
}

console.log(convertirPesos(101.99)); 