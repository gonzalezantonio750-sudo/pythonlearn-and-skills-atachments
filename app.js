function esc(s){ return s.replace(/</g,'&lt;'); }

function renderMenu(){
  const menu = document.getElementById("menu");
  menu.innerHTML = LECCIONES.map((l,i)=>
    `<button onclick="cargar(${i})">${l.titulo}</button>`
  ).join("");
}

function renderContenido(lec){
  const cont = document.getElementById("contenido");

  let html = "";

  lec.contenido.forEach(b=>{
    if(b.tipo==="explicacion"){
      html += `<div class="concept-block"><b>${b.titulo}</b><br>${b.texto}</div>`;
    }
    if(b.tipo==="ejemplo"){
      html += `<div class="concept-block"><b>Ejemplo</b><pre>${esc(b.codigo)}</pre>Salida: ${b.salida}</div>`;
    }
    if(b.tipo==="realidad"){
      html += `<div class="concept-block">💡 ${b.texto}</div>`;
    }
  });

  html += `
    <textarea id="code"></textarea>
    <button onclick="evaluar()">Evaluar</button>
    <pre id="output"></pre>
  `;

  cont.innerHTML = html;
}

function cargar(i){
  window.leccionActual = LECCIONES[i];
  renderContenido(window.leccionActual);
}

async function evaluar(){
  const code = document.getElementById("code").value;

  // simulación simple (sin backend real)
  let salida = "";
  try {
    if(code.includes("print('Delicias')") || code.includes('print("Delicias")')){
      salida = "Delicias";
    }
  } catch(e){}

  const ok = window.leccionActual.ejercicio.verificar(salida, code);

  document.getElementById("output").innerText = ok ? "✔ Correcto" : "❌ Intenta de nuevo";
}

renderMenu();
