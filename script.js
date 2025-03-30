<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generador de Cotizaciones | Richy Entertainment</title>
    <style>
        :root {
            --navy-primario: #0d1120;
            --gold-acentuado: #c9c197;
            --blanco: #ffffff;
            --gris-plata: #b0bec5;
            --texto-oscuro: #333;
            --sombra-suave: rgba(0, 0, 0, 0.05);
        }

        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 30px;
            background-color: var(--blanco);
            color: var(--texto-oscuro);
            line-height: 1.6;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            background-color: var(--blanco);
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 5px 15px var(--sombra-suave);
        }

        .header {
            display: flex;
            align-items: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            background-color: var(--navy-primario);
            border-radius: 8px;
            padding: 15px;
        }

        .logo {
            width: 200px;
            height: auto;
            margin-right: 40px;
        }

        .titulo {
            flex-grow: 1;
        }

        h1 {
            color: var(--blanco);
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            text-transform: uppercase;
        }

        h2 {
            color: var(--navy-primario);
            font-size: 24px;
            font-weight: 600;
            margin-top: 40px;
        }

        .form-section {
            padding: 25px;
            border-radius: 8px;
            margin-bottom: 40px;
            border: 1px solid var(--gris-plata);
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: var(--navy-primario);
            font-size: 14px;
        }

        input, select, textarea {
            padding: 12px;
            border: 1px solid var(--gris-plata);
            border-radius: 6px;
            width: 100%;
            max-width: 350px;
            font-size: 14px;
            background-color: var(--blanco);
            transition: border-color 0.3s;
        }

        input:focus, select:focus, textarea:focus {
            border-color: var(--navy-primario);
            outline: none;
        }

        textarea {
            max-width: 100%;
            resize: vertical;
            min-height: 100px;
        }

        button {
            background-color: var(--navy-primario);
            color: var(--blanco);
            border: none;
            padding: 12px 25px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 15px;
            font-weight: 600;
            transition: background-color 0.3s;
            margin-right: 15px;
        }

        button:hover {
            background-color: var(--gris-plata);
        }

        .button-group {
            display: flex;
            justify-content: center;
            margin-top: 40px;
            gap: 15px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 30px 0;
            border: 1px solid var(--gris-plata);
        }

        th {
            background-color: var(--navy-primario);
            color: var(--blanco);
            padding: 12px;
            text-align: left;
            font-weight: 600;
            font-size: 14px;
        }

        td {
            padding: 12px;
            border-bottom: 1px solid var(--gold-acentuado);
            font-size: 14px;
        }

        tr:nth-child(even) {
            background-color: rgba(176, 190, 197, 0.1);
        }

        .price {
            text-align: right;
        }

        .total-section {
            background-color: var(--navy-primario);
            color: var(--blanco);
            padding: 30px;
            border-radius: 8px;
            margin-top: 40px;
            border: 1px solid var(--gris-plata);
        }

        .total-section label {
            color: var(--blanco);
            font-size: 14px;
        }

        #total {
            font-size: 28px;
            font-weight: 700;
            margin-top: 15px;
            display: block;
            text-align: right;
        }

        .remove-btn {
            background-color: var(--gris-plata);
            color: var(--navy-primario);
            padding: 8px 15px;
            font-size: 13px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .remove-btn:hover {
            background-color: #90a4ae;
        }

        .item-controls {
            display: flex;
            gap: 20px;
            align-items: center;
            margin-bottom: 20px;
        }

        .item-select {
            flex-grow: 1;
        }

        .footer {
            text-align: center;
            margin-top: 40px;
            padding: 15px;
            background-color: var(--gris-plata);
            border-radius: 8px;
            color: var(--navy-primario);
            font-size: 12px;
        }

        .footer a {
            color: var(--navy-primario);
            text-decoration: none;
        }

        .footer a:hover {
            color: var(--gold-acentuado);
        }

        @media print {
            body * {
                visibility: hidden;
            }
            #pdf-container, #pdf-container * {
                visibility: visible;
            }
            #pdf-container {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img class="logo" src="logo.png" alt="Richy Entertainment" id="logo">
            <div class="titulo">
                <h1>Richy Entertainment</h1>
                <p>Sistema de Generación de Cotizaciones</p>
            </div>
        </div>

        <div class="form-section">
            <h2>Datos del Cliente</h2>
            <div class="form-group">
                <label for="folio-number">Número de Folio</label>
                <input type="text" id="folio-number" placeholder="Ej: COT-2023-001">
            </div>
            <div class="form-group">
                <label for="client-name">Nombre del Cliente</label>
                <input type="text" id="client-name" placeholder="Nombre completo">
            </div>
            <div class="form-group">
                <label for="client-city">Ciudad</label>
                <input type="text" id="client-city" placeholder="Ciudad">
            </div>
            <div class="form-group">
                <label for="client-phone">Teléfono</label>
                <input type="text" id="client-phone" placeholder="Teléfono">
            </div>
            <div class="form-group">
                <label for="client-email">Email</label>
                <input type="email" id="client-email" placeholder="Email">
            </div>
        </div>

        <div class="form-section">
            <h2>Ítems de la Cotización</h2>
            <div class="item-controls">
                <select id="item-select" class="item-select">
                    <option value="">Selecciona un ítem</option>
                    <option value="AUTOBUS 45 PLAZAS">AUTOBUS 45 PLAZAS</option>
                    <option value="CAMIONETA CARGA">CAMIONETA CARGA</option>
                    <option value="CAMIONETA VAN">CAMIONETA VAN</option>
                    <option value="COMIDAS DEL OPERADOR">COMIDAS DEL OPERADOR</option>
                    <option value="COORDINADOR">COORDINADOR</option>
                    <option value="DERECHOS DE PISO">DERECHOS DE PISO</option>
                    <option value="HORAS EXTRA">HORAS EXTRA</option>
                    <option value="HOSPEDAJE">HOSPEDAJE</option>
                    <option value="MINIBUS 31 PLAZAS">MINIBUS 31 PLAZAS</option>
                    <option value="PARKING">PARKING</option>
                    <option value="SEDAN">SEDAN</option>
                    <option value="SPRINTER">SPRINTER</option>
                    <option value="SUBURBAN">SUBURBAN</option>
                    <option value="SUBURBAN ADVANCE">SUBURBAN ADVANCE</option>
                    <option value="SUBURBAN BLINDADA NIVEL 3">SUBURBAN BLINDADA NIVEL 3</option>
                    <option value="SUBURBAN HIGH COUNTRY">SUBURBAN HIGH COUNTRY</option>
                    <option value="TOYOTA HIACE">TOYOTA HIACE</option>
                    <option value="TRAMO CARRETERO">TRAMO CARRETERO</option>
                    <option value="VAN DE CARGA">VAN DE CARGA</option>
                    <option value="VIATICOS">VIATICOS</option>
                </select>
                <button id="add-item-btn">Agregar Ítem</button>
            </div>
            <div class="form-group">
                <label for="notes">Anotaciones</label>
                <textarea id="notes" rows="3" placeholder="Escribe aquí notas adicionales..."></textarea>
            </div>

            <table id="items">
                <thead>
                    <tr>
                        <th width="80px">Cantidad</th>
                        <th>Concepto</th>
                        <th>Vehículo/Servicio</th>
                        <th width="120px">P. Unitario</th>
                        <th width="120px">Total</th>
                        <th width="100px">Acción</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>

        <div class="total-section">
            <div class="form-group">
                <label for="tax">Impuestos (%)</label>
                <input type="number" id="tax" value="16" min="0" step="0.1" onchange="calculateTotal()">
            </div>
            <div>
                <strong>TOTAL: <span id="total">$0.00</span></strong>
            </div>
        </div>

        <div class="button-group">
            <button onclick="generatePDF()">Generar PDF</button>
            <button onclick="window.print()">Imprimir</button>
        </div>

        <div class="footer">
            <p>Contacto: <a href="mailto:transpo_rick@hotmail.com">transpo_rick@hotmail.com</a> | Tel: 52 55 7341 3969</p>
            <p>Banco: Santander | Cuenta: 65-51041870-7 | CLABE: 014180655104187070</p>
            <p>© 2025 Richy Entertainment - Todos los derechos reservados</p>
        </div>
    </div>

    <div id="pdf-container" style="display: none;"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.23/jspdf.plugin.autotable.min.js"></script>
    <script>
        // Ensure DOM is fully loaded before attaching event listeners
        document.addEventListener('DOMContentLoaded', function() {
            console.log("DOM fully loaded and parsed");

            const { jsPDF } = window.jspdf;
            let logoData = null;

            // Preload logo
            function preloadLogo() {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = 'logo.png';
                    img.onload = function() {
                        const canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);
                        logoData = canvas.toDataURL('image/png');
                        console.log("Logo preloaded successfully");
                        resolve();
                    };
                    img.onerror = () => {
                        console.log("Logo not loaded, using fallback");
                        logoData = null;
                        resolve();
                    };
                });
            }

            preloadLogo().then(() => {
                console.log("Logo preload complete");
            }).catch(err => {
                console.error("Error preloading logo:", err);
            });

            // Add item functionality
            const itemsContainer = document.querySelector('#items tbody');
            const itemSelect = document.getElementById('item-select');
            const addItemBtn = document.getElementById('add-item-btn');

            if (!itemsContainer) {
                console.error("Items container (tbody) not found!");
                return;
            }
            if (!itemSelect) {
                console.error("Item select dropdown not found!");
                return;
            }
            if (!addItemBtn) {
                console.error("Add item button not found!");
                return;
            }

            console.log("All elements found, attaching event listener to add-item-btn");
            addItemBtn.addEventListener('click', function() {
                console.log("Add item button clicked");
                addItem();
            });

            function addItem() {
                console.log("addItem function called");
                const selectedItem = itemSelect.value;
                console.log("Selected item:", selectedItem);

                if (selectedItem) {
                    console.log("Adding item to table:", selectedItem);
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td><input type="number" class="unit" min="1" value="1" onchange="calculateTotal()"></td>
                        <td>Servicio de Transportación Ejecutiva</td>
                        <td>${selectedItem}</td>
                        <td><input type="number" class="unit-price" min="0" step="0.01" value="0" onchange="calculateTotal()"></td>
                        <td class="price">$0.00</td>
                        <td><button class="remove-btn" onclick="removeItem(this)">Eliminar</button></td>
                    `;
                    itemsContainer.appendChild(row);
                    console.log("Row added to table");
                    itemSelect.value = '';
                    calculateTotal();
                    console.log("Item added successfully");
                } else {
                    alert('Por favor, selecciona un ítem antes de agregar.');
                    console.log("No item selected");
                }
            }

            function removeItem(button) {
                console.log("removeItem function called");
                const row = button.closest('tr');
                if (row) {
                    row.remove();
                    console.log("Row removed");
                    calculateTotal();
                } else {
                    console.error("Row not found for removal");
                }
            }

            function calculateTotal() {
                console.log("calculateTotal function called");
                let subtotal = 0;
                const rows = document.querySelectorAll('#items tbody tr');
                
                rows.forEach(row => {
                    const unit = parseFloat(row.querySelector('.unit').value) || 0;
                    const unitPrice = parseFloat(row.querySelector('.unit-price').value) || 0;
                    const total = unit * unitPrice;
                    row.querySelector('.price').textContent = `$${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
                    subtotal += total;
                });
                
                const taxRate = parseFloat(document.getElementById('tax').value) || 0;
                const taxAmount = subtotal * (taxRate / 100);
                const total = subtotal + taxAmount;
                
                document.getElementById('total').textContent = `$${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
                console.log("Total calculated:", total);
            }

            function numberToWordsSpanish(num) {
                const units = ["", "un", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
                const teens = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
                const tens = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
                const hundreds = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];
                const thousands = ["mil", "millón", "millones"];

                if (num === 0) return "cero pesos";

                let integerPart = Math.floor(num);
                let decimalPart = Math.round((num - integerPart) * 100);
                let words = "";

                if (integerPart >= 1000000) {
                    let millions = Math.floor(integerPart / 1000000);
                    integerPart %= 1000000;
                    words += (millions === 1 ? "un " : numberToWordsSpanish(millions)) + (millions === 1 ? "millón " : " millones ");
                }

                if (integerPart >= 1000) {
                    let thousandsPart = Math.floor(integerPart / 1000);
                    integerPart %= 1000;
                    words += (thousandsPart === 1 ? "mil" : numberToWordsSpanish(thousandsPart) + " mil") + " ";
                }

                if (integerPart >= 100) {
                    let hundredPart = Math.floor(integerPart / 100);
                    integerPart %= 100;
                    words += hundreds[hundredPart] + " ";
                    if (integerPart > 0) words += integerPart === 1 ? "un" : "";
                }

                if (integerPart >= 20) {
                    let tenPart = Math.floor(integerPart / 10);
                    integerPart %= 10;
                    words += tens[tenPart] + (integerPart > 0 ? " y " + units[integerPart] : "");
                } else if (integerPart >= 10) {
                    words += teens[integerPart - 10];
                } else if (integerPart > 0) {
                    words += units[integerPart];
                }

                words = words.trim();
                if (decimalPart > 0) {
                    words += ` pesos con ${decimalPart}/100`;
                } else {
                    words += " pesos";
                }

                return words;
            }

            async function generatePDF() {
                try {
                    const doc = new jsPDF({
                        orientation: 'portrait',
                        unit: 'mm',
                        format: 'a4'
                    });
                    
                    const marginLeft = 15;
                    const marginRight = 15;
                    const pageWidth = doc.internal.pageSize.getWidth() - marginLeft - marginRight;
                    const pageHeight = doc.internal.pageSize.getHeight();

                    function addHeader() {
                        if (logoData) {
                            doc.setFillColor(13, 17, 32);
                            doc.rect(0, 0, doc.internal.pageSize.getWidth(), 50, 'F');
                            const logoWidth = 50;
                            const logoHeight = (document.getElementById('logo').naturalHeight / document.getElementById('logo').naturalWidth) * logoWidth;
                            doc.addImage(logoData, 'PNG', marginLeft, 5, logoWidth, logoHeight);

                            doc.setFont("times", "italic");
                            doc.setFontSize(14);
                            doc.setTextColor(255, 255, 255);
                            doc.text("Soluciones de Transportación Ejecutiva", marginLeft + logoWidth + 10, 35);
                            return 60;
                        } else {
                            doc.setFillColor(13, 17, 32);
                            doc.rect(0, 0, doc.internal.pageSize.getWidth(), 50, 'F');
                            doc.setFont("times", "italic");
                            doc.setFontSize(16);
                            doc.setTextColor(255, 255, 255);
                            doc.text("Soluciones de Transportación Ejecutiva", doc.internal.pageSize.getWidth() / 2, 38, { align: 'center' });
                            return 60;
                        }
                    }

                    const headerHeight = addHeader();

                    const folio = document.getElementById('folio-number').value || 'Sin folio';
                    const date = new Date().toLocaleDateString('es-MX', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });

                    doc.setFont("helvetica", "normal");
                    doc.setFontSize(10);
                    doc.setTextColor(51, 51, 51);
                    doc.text(`Folio: ${folio}`, marginLeft, headerHeight + 5);
                    doc.text(`Fecha: ${date}`, doc.internal.pageSize.getWidth() - marginRight, headerHeight + 5, { align: 'right' });

                    doc.setFont("times", "bold");
                    doc.setFontSize(20);
                    doc.setTextColor(13, 17, 32);
                    doc.text("Cotización", doc.internal.pageSize.getWidth() / 2, headerHeight + 20, { align: 'center' });

                    doc.setFont("times", "bold");
                    doc.setFontSize(16);
                    doc.setTextColor(13, 17, 32);
                    doc.text("Datos del Cliente", marginLeft, headerHeight + 35);

                    const clientName = document.getElementById('client-name').value || 'No especificado';
                    const clientCity = document.getElementById('client-city').value || 'No especificado';
                    const clientPhone = document.getElementById('client-phone').value || 'No especificado';
                    const clientEmail = document.getElementById('client-email').value || 'No especificado';

                    doc.setFillColor(255, 255, 255);
                    doc.rect(marginLeft, headerHeight + 40, pageWidth, 50, 'F');
                    doc.setDrawColor(176, 190, 197);
                    doc.setLineWidth(0.5);
                    doc.rect(marginLeft, headerHeight + 40, pageWidth, 50);

                    doc.setFont("helvetica", "normal");
                    doc.setFontSize(12);
                    doc.setTextColor(51, 51, 51);
                    doc.text(`Nombre: ${clientName}`, marginLeft + 10, headerHeight + 50);
                    doc.text(`Ciudad: ${clientCity}`, marginLeft + 10, headerHeight + 60);
                    doc.text(`Teléfono: ${clientPhone}`, marginLeft + 10, headerHeight + 70);
                    doc.text(`Email: ${clientEmail}`, marginLeft + 10, headerHeight + 80);

                    const tableData = [];
                    const rows = document.querySelectorAll('#items tbody tr');

                    rows.forEach(row => {
                        const quantity = parseFloat(row.querySelector('.unit').value).toLocaleString('en-US') || '1';
                        const concept = 'Servicio de Transportación Ejecutiva';
                        const item = row.cells[2].textContent;
                        const unitPrice = parseFloat(row.querySelector('.unit-price').value) || 0;
                        const total = parseFloat(row.querySelector('.price').textContent.replace('$', '').replace(/,/g, '')) || 0;

                        tableData.push([
                            quantity,
                            concept,
                            item,
                            `$${unitPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
                            `$${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
                        ]);
                    });

                    doc.autoTable({
                        head: [['Cant.', 'Concepto', 'Descripción', 'P. Unitario', 'Total']],
                        body: tableData,
                        startY: headerHeight + 95,
                        headStyles: {
                            fillColor: [13, 17, 32],
                            textColor: [255, 255, 255],
                            fontSize: 12,
                            font: "times",
                            fontStyle: 'bold',
                            halign: 'center',
                            cellPadding: 5
                        },
                        bodyStyles: {
                            fontSize: 11,
                            textColor: [51, 51, 51],
                            font: "helvetica"
                        },
                        columnStyles: {
                            0: { cellWidth: 20, halign: 'center' },
                            1: { cellWidth: 45, halign: 'left' },
                            2: { cellWidth: 65, halign: 'left' },
                            3: { cellWidth: 35, halign: 'right' },
                            4: { cellWidth: 35, halign: 'right' }
                        },
                        margin: { left: marginLeft, right: marginRight },
                        styles: {
                            cellPadding: 4,
                            lineWidth: 0.2,
                            lineColor: [201, 193, 151],
                            overflow: 'linebreak'
                        },
                        alternateRowStyles: {
                            fillColor: [255, 255, 255]
                        },
                        didDrawPage: function(data) {
                            const pageCount = doc.internal.getNumberOfPages();
                            doc.setFont("helvetica", "italic");
                            doc.setFontSize(8);
                            doc.setTextColor(51, 51, 51);
                            doc.text(`Página ${data.pageNumber} de ${pageCount}`, doc.internal.pageSize.getWidth() - marginRight - 10, pageHeight - 10, { align: 'right' });
                        }
                    });

                    const notes = document.getElementById('notes').value;
                    if (notes) {
                        const notesY = doc.lastAutoTable.finalY + 15;
                        doc.setFont("times", "bold");
                        doc.setFontSize(14);
                        doc.setTextColor(13, 17, 32);
                        doc.text("Anotaciones", marginLeft, notesY);

                        doc.setFont("helvetica", "normal");
                        doc.setFontSize(11);
                        doc.setTextColor(51, 51, 51);
                        const splitNotes = doc.splitTextToSize(notes, pageWidth - 20);
                        doc.text(splitNotes, marginLeft + 10, notesY + 10);
                    }

                    const finalY = (notes ? doc.lastAutoTable.finalY + 30 + (doc.splitTextToSize(notes, pageWidth - 20).length * 6) : doc.lastAutoTable.finalY + 30);
                    const taxRate = parseFloat(document.getElementById('tax').value) || 0;
                    const totalText = document.getElementById('total').textContent;
                    const total = parseFloat(totalText.replace('$', '').replace(/,/g, '')) || 0;
                    const subtotal = total / (1 + taxRate/100);
                    const taxAmount = total - subtotal;
                    const totalInWords = numberToWordsSpanish(total);

                    doc.setFillColor(13, 17, 32);
                    doc.rect(marginLeft, finalY, pageWidth, 50, 'F');
                    doc.setDrawColor(176, 190, 197);
                    doc.setLineWidth(0.5);
                    doc.rect(marginLeft + 5, finalY + 5, pageWidth - 10, 40);

                    doc.setFont("times", "bold");
                    doc.setFontSize(16);
                    doc.setTextColor(255, 255, 255);
                    doc.text("Resumen de Pago", marginLeft + 10, finalY + 15);

                    doc.setFont("helvetica", "normal");
                    doc.setFontSize(12);
                    doc.text(`Subtotal:`, marginLeft + pageWidth - 90, finalY + 25);
                    doc.text(`$${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, marginLeft + pageWidth - 20, finalY + 25, { align: 'right' });
                    
                    doc.text(`Impuestos (${taxRate.toLocaleString('en-US')}%):`, marginLeft + pageWidth - 90, finalY + 35);
                    doc.text(`$${taxAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, marginLeft + pageWidth - 20, finalY + 35, { align: 'right' });
                    
                    doc.setFont("times", "bold");
                    doc.setFontSize(14);
                    doc.text(`Total:`, marginLeft + pageWidth - 90, finalY + 45);
                    doc.text(`${totalText}`, marginLeft + pageWidth - 20, finalY + 45, { align: 'right' });

                    doc.setFont("helvetica", "italic");
                    doc.setFontSize(10);
                    const splitTotalInWords = doc.splitTextToSize(totalInWords, pageWidth - 30);
                    doc.text(splitTotalInWords, marginLeft + 10, finalY + 55);

                    const footerY = pageHeight - 40;
                    doc.setFillColor(13, 17, 32);
                    doc.rect(0, footerY, doc.internal.pageSize.getWidth(), 40, 'F');
                    doc.setFont("helvetica", "normal");
                    doc.setFontSize(8);
                    doc.setTextColor(255, 255, 255);
                    doc.text("Richy Entertainment S.A.S. de C.V.  •  Tel: 52 55 7341 3969  •  Email: transpo_rick@hotmail.com", doc.internal.pageSize.getWidth() / 2, footerY + 15, { align: 'center' });
                    doc.text("Banco: Santander  •  Cuenta: 65-51041870-7  •  CLABE: 014180655104187070", doc.internal.pageSize.getWidth() / 2, footerY + 22, { align: 'center' });
                    doc.text("© 2025 Richy Entertainment - Todos los derechos reservados", doc.internal.pageSize.getWidth() / 2, footerY + 30, { align: 'center' });

                    createPrintPreview(doc);
                    const fileName = `Cotización_${folio}_${clientName.replace(/[^a-z0-9]/gi, '_')}.pdf`;
                    doc.save(fileName);
                    console.log("PDF generated successfully");
                } catch (error) {
                    console.error("Error generating PDF:", error);
                    alert("Error generating PDF. Check console for details.");
                }
            }

            function createPrintPreview(pdf) {
                const pdfContainer = document.getElementById('pdf-container');
                pdfContainer.innerHTML = '';
                
                const iframe = document.createElement('iframe');
                iframe.style.width = '100%';
                iframe.style.height = '800px';
                iframe.style.border = 'none';
                
                pdfContainer.appendChild(iframe);
                
                iframe.src = pdf.output('datauristring');
                pdfContainer.style.display = 'block';
            }

            calculateTotal();
        });
    </script>
</body>
</html>
