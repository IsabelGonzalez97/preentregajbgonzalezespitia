window.onload = function() {
    // Solicitar al usuario el monto total y el número de cuotas utilizando prompt
    let monto = parseFloat(prompt("Ingrese el monto total:"));
    let cuotas = parseInt(prompt("Ingrese el número de cuotas:"));

    // Verificar si los valores ingresados son numéricos
    if (isNaN(monto) || isNaN(cuotas)) {
        alert("Por favor ingrese valores numéricos válidos.");
        return;
    }

    // Calcular el pago por cuota
    let pagoPorCuota = monto / cuotas;

    // Construir el resultado como una cadena de texto
    let resultadoTexto = "Monto Total: $" + monto.toFixed(2) + "\n";
    resultadoTexto += "Número de Cuotas: " + cuotas + "\n";
    resultadoTexto += "Pago por Cuota: $" + pagoPorCuota.toFixed(2);

    // Mostrar el resultado en la consola
    alert(resultadoTexto);
};