const LECCIONES = [
{
  titulo: "Variables",
  contenido: [
    { tipo: "explicacion", titulo: "¿Qué es una variable?", texto: "Una variable guarda datos." },
    { tipo: "ejemplo", codigo: "ciudad = 'Delicias'\nprint(ciudad)", salida: "Delicias" },
    { tipo: "realidad", texto: "Es como etiquetar una caja con un nombre." }
  ],
  ejercicio: {
    instruccion: "Crea una variable ciudad='Delicias' e imprímela",
    verificar: (salida, codigo) =>
      salida.trim().toLowerCase() === "delicias" &&
      codigo.includes("ciudad") &&
      codigo.includes("print")
  }
}
];
