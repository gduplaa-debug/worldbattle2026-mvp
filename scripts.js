async function verPaises() {
  const resp = await fetch("countries.json");
  const countries = await resp.json();

  const div = document.getElementById("paises");
  div.style.display = "block";
  div.innerHTML = "<h2>Países (MVP)</h2>";

  countries.forEach(c => {
    div.innerHTML += `
      <div class="country-card">
        <strong>${c.name}</strong><br>
        Slots: ${c.slots}/5 ocupados<br>
        <button onclick="verSlots('${c.code}')">Ver slots</button>
      </div>
    `;
  });
}

async function verSlots(code) {
  const resp = await fetch("countries.json");
  const countries = await resp.json();
  const country = countries.find(c => c.code === code);

  const cont = document.getElementById("slots");
  cont.style.display = "block";
  cont.innerHTML = `<h2>Slots de ${country.name}</h2>`;

  for (let i = 1; i <= 5; i++) {
    const ocupado = country.owned.includes(i);

    cont.innerHTML += `
      <div class="slot-card">
        Slot #${i} – ${ocupado ? "Ocupado" : "Libre"}
        ${ocupado ? "" : `<button onclick="comprarSlot('${code}', ${i})">Comprar Slot (30 USDT)</button>`}
      </div>
    `;
  }
}

function comprarSlot(code, slot) {
  alert(`Acá va el mint del slot ${slot} del país ${code}. (30 USDT equivalente)`);

  // Esta parte la reemplazamos con el contrato real.
}
