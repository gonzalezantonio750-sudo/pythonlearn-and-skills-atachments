# Tutor Python — Local

App web local para aprender Python, impulsada por Claude.

## Inicio rápido

1. Abre `index.html` en tu navegador (doble clic, o arrástralo a Chrome/Firefox).
2. Ingresa tu API key de Anthropic (la puedes obtener en https://console.anthropic.com/keys).
3. ¡Listo! La key se guarda en el navegador y no tienes que volver a ingresarla.

## Agregar lecciones

Edita **`lessons.js`** — es el único archivo que necesitas tocar.

Al final del array `LECCIONES`, agrega una coma al bloque anterior y pega:

```js
{
  titulo: "Tu tema",
  contenido: [
    {
      titulo: "Subtítulo de la sección",
      texto:
`Explicación con ejemplo de código.

variable = "ejemplo"
print(variable)`
    }
  ],
  ejercicio: {
    objetivo: "qué debe lograr el alumno",
    instruccion: "Instrucción clara para el alumno",
    pista: "# Código de solución sugerido\nprint('hola')",
    verificar: (salida, codigo) =>
      salida.trim() === "hola" &&   // ← valida la salida
      codigo.includes("print")       // ← valida el código usado
  }
}
```

### Función `verificar`

Recibe dos argumentos:
- `salida` — el stdout que produjo el código del alumno
- `codigo` — el texto del código escrito

Retorna `true` si el ejercicio está correcto. Ejemplos:

```js
// Salida exacta
verificar: (salida) => salida.trim() === "35"

// Salida + operador usado
verificar: (salida, codigo) => salida.trim() === "35" && codigo.includes("*")

// Salida que empieza con algo
verificar: (salida) => salida.trim().startsWith("Hola,")

// Múltiples líneas
verificar: (salida) => salida.trim() === "1\n2\n3\n4\n5"
```

## Archivos

```
tutor-web/
├── index.html   ← app (no necesitas editar)
├── lessons.js   ← aquí agregas lecciones
└── README.md
```

## Progreso

El progreso se guarda en `localStorage` del navegador.
Para reiniciarlo: abre DevTools → Application → Local Storage → borra `tutor_progreso`.
