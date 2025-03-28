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
        itemSelect.value = '';
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

    // Agregar la marca de agua con el logo
    const logo = 'data:image/jpeg;base64,tu_contenido_base64_aqui';
    doc.addImage(logo, 'JPEG', 75, 5, 60, 30, '', 'FAST');

    doc.setFontSize(10);
    const clientName = document.getElementById('client-name').value || 'Nombre del Cliente';
    const clientCity = document.getElementById('client-city').value || 'Ciudad';
    const clientPhone = document.getElementById('client-phone').value || 'Teléfono';
    const clientEmail = document.getElementById('client-email').value || 'Email';

    doc.text("COTIZACIÓN", 10, 50);
    doc.text(`Nombre del Cliente: ${clientName}`, 10, 60);
    doc.text(`Ciudad: ${clientCity}`, 10, 65);
    doc.text(`Teléfono: ${clientPhone}`, 10, 70);
    doc.text(`Email: ${clientEmail}`, 10, 75);

    doc.text(`RICHY ENTERTAINMENT S.A.S. DE C.V.`, 10, 85);
    doc.text(`CDMX`, 10, 90);
    doc.text(`52 55 7341 3969`, 10, 95);
    doc.text(`transpo_rick@hotmail.com`, 10, 100);

    let y = 110;
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

    // Espacio para nombre y firma del cliente
    y += 20;
    doc.line(10, y, 200, y); // Línea sobre el nombre y firma del cliente
    y += 5;
    doc.text("Nombre y Firma del Cliente:", 10, y);

    doc.save("presupuesto.pdf");
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
            console.log('Error al registrar el Service Worker:', error);
        });
}
