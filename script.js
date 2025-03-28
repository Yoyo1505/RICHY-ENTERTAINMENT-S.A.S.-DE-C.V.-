const items = [
    "AUTOBUS 45 PLAZAS", "CAMIONETA CARGA", "CAMIONETA VAN", "COMIDAS DEL OPERADOR",
    "COMISION BANCARIA 0.5%", "COORDINADOR", "DERECHOS DE PISO", "HORAS EXTRA",
    "HOSPEDAJE", "MINIBUS 31 PLAZAS", "PARKING", "SEDAN", "SPRINTER", "SUBURBAN",
    "SUBURBAN ADVANCE", "SUBURBAN BLINDADA NIVEL 3", "SUBURBAN HIGW COUNTRY",
    "SUBURBAN LINEA ANTIGUA", "TOYOTA HIENCE", "TRAMO CARRETERO", "VAN DE CARGA", "VIATICOS"
];

const itemsContainer = document.querySelector('#items tbody');
const itemSelect = document.getElementById('item-select');

// Llenar el menú desplegable con los conceptos
items.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    itemSelect.appendChild(option);
});

function addItem() {
    const selectedItem = itemSelect.value;
    if (selectedItem) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="number" placeholder="Cantidad" class="unit"></td>
            <td>Servicio de Transportación Ejecutiva</td>
            <td>${selectedItem}</td>
            <td><input type="number" placeholder="P.U." class="unit-price"></td>
            <td class="price">$0.00</td>
        `;
        itemsContainer.appendChild(row);
        itemSelect.value = ''; // Resetear el menú desplegable
    }
}

function calculateTotal() {
    let total = 0;
    const rows = document.querySelectorAll('#items tbody tr');

    rows.forEach(row => {
        const unitInput = row.querySelector('.unit').value || 0;
        const unitPriceInput = row.querySelector('.unit-price').value || 0;
        const priceCell = row.querySelector('.price');
        const price = unitInput * unitPriceInput;
        priceCell.textContent = `$${price.toFixed(2)}`;
        total += price;
    });

    const taxRate = parseFloat(document.getElementById('tax').value) || 0;
    total += total * (taxRate / 100);

    document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Información del cliente y del vendedor con el mismo tamaño de fuente
    doc.setFontSize(10);
    const clientName = document.getElementById('client-name').value || 'Nombre del Cliente';
    const clientCity = document.getElementById('client-city').value || 'Ciudad';
    const clientPhone = document.getElementById('client-phone').value || 'Teléfono';
    const clientEmail = document.getElementById('client-email').value || 'Email';

    doc.text("COTIZACIÓN", 10, 10);
    doc.text(`Nombre del Cliente: ${clientName}`, 10, 20);
    doc.text(`Ciudad: ${clientCity}`, 10, 25);
    doc.text(`Teléfono: ${clientPhone}`, 10, 30);
    doc.text(`Email: ${clientEmail}`, 10, 35);

    doc.text("RICHY ENTERTAINMENT S.A.S. DE C.V.", 150, 10);
    doc.text("CDMX", 150, 15);
    doc.text("52 55 7341 3969", 150, 20);
    doc.text("transpo_rick@hotmail.com", 150, 25);

    let y = 45;

    const tableData = [];
    const rows = document.querySelectorAll('#items tbody tr');
    rows.forEach(row => {
        const unit = row.querySelector('.unit').value || '';
        const concept = 'Servicio de Transportación Ejecutiva';
        const vehicle = row.cells[2].textContent;
        const unitPrice = row.querySelector('.unit-price').value || 0;
        const price = row.querySelector('.price').textContent || 0;
        if (unit && unitPrice && price) {
            tableData.push([unit, concept, vehicle, unitPrice, price]);
        }
    });

    doc.autoTable({
        head: [['Unidad', 'Concepto', 'Vehículo', 'P.U.', 'Precio']],
        body: tableData,
        startY: y
    });

    y += tableData.length * 10 + 10;
    const taxRate = document.getElementById('tax').value || 0;
    const total = document.getElementById('total').innerText;
    doc.text(`Impuestos: ${taxRate}%`, 150, y);
    y += 10;
    doc.text(`Total: ${total}`, 150, y);

    doc.save("presupuesto.pdf");
}

// Registrar el Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
            console.log('Error al registrar el Service Worker:', error);
        });
}
