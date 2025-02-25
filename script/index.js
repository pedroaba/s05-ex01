const user = {
  name: "Raphael",
  registration: "123456",
  hasPendingReservation: false,
  accessibility: true,
};

const cabinets = [
  { id: 1, type: "standard", available: true, accessible: false, reservedAt: null, deliveryDate: null },
  { id: 2, type: "standard", available: true, accessible: false, reservedAt: null, deliveryDate: null },
  { id: 3, type: "standard", available: true, accessible: false, reservedAt: null, deliveryDate: null },
  { id: 4, type: "standard", available: false, accessible: true, reservedAt: null, deliveryDate: null },
  { id: 5, type: "standard", available: false, accessible: true, reservedAt: null, deliveryDate: null },
  { id: 6, type: "double", available: true, accessible: true, reservedAt: null, deliveryDate: null },
  { id: 7, type: "double", available: false, accessible: true, reservedAt: null, deliveryDate: null },
  { id: 8, type: "double", available: false, accessible: true, reservedAt: null, deliveryDate: null },
];

const statusClasses = [
  "success",
  "error"
]

if (!String.prototype.formatDigits) {
  String.prototype.formatDigits = function () {
    return this.padStart(2, '0')
  };
}

if (!Date.prototype.format) {
  Date.prototype.format = function () {
    return `${this.getDate().toString().formatDigits()}/${(this.getMonth() + 1).toString().formatDigits()}/${this.getFullYear()} ${this.getHours().toString().formatDigits()}:${this.getMinutes().toString().formatDigits()}`;
  };
}

function bootstrap() {
  document.getElementById("reserve-button").addEventListener("click", reserveCabinet);
}

function reserveCabinet() {
  document.getElementById("error-message").classList.remove("hide")

  for (const statusClass of statusClasses) {
    document.getElementById("error-message").classList.remove(statusClass);
  }

  if (user.hasPendingReservation) {
    document.getElementById("error-message").classList.add("error");
    document.getElementById("error-message").innerText = `Olá, ${user.name}! Você já possui uma reserva pendente.`;
    return;
  }
  
  const selectedType = document.getElementById("cabinetType").value;
  const availableCabinets = cabinets.filter(
    (cabinet) =>
      cabinet.type === selectedType &&
      cabinet.available &&
      user.accessibility === cabinet.accessible
  );

  if (availableCabinets.length === 0) {
    document.getElementById("error-message").classList.add("error");
    document.getElementById("error-message").innerText = `Olá, ${user.name}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }

  const randomIndex = Math.floor(Math.random() * availableCabinets.length);
  const selectedCabinet = availableCabinets[randomIndex];

  const cabinetToReserve = cabinets.find((cabinet) => cabinet.id === selectedCabinet.id);
  if (cabinetToReserve) {
    cabinetToReserve.available = false;
  }

  user.hasPendingReservation = true;

  const currentDate = new Date();
  cabinetToReserve.reservedAt = new Date(currentDate);

  currentDate.setDate(currentDate.getDate() + 1);
  cabinetToReserve.deliveryDate = new Date(currentDate);

  document.getElementById("error-message").innerText = `
    \n
    Olá, ${user.name}! O armário ${selectedCabinet.id} foi reservado com sucesso!
    
    Data de retirada: ${cabinetToReserve.reservedAt.format()}
    Data de entrega: ${cabinetToReserve.deliveryDate.format()}
  `.trim();
  document.getElementById("error-message").classList.add("success");
}

bootstrap()
