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
            padding: 15px;
            background-color: var(--blanco);
            color: var(--texto-oscuro);
            line-height: 1.6;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            background-color: var(--blanco);
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 5px 15px var(--sombra-suave);
        }

        .header {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 20px;
            padding: 15px;
            background-color: var(--navy-primario);
            border-radius: 8px;
        }

        .logo {
            width: 150px;
            height: auto;
            margin-right: 20px;
        }

        .titulo {
            flex-grow: 1;
        }

        h1 {
            color: var(--blanco);
            margin: 0;
            font-size: clamp(20px, 5vw, 32px);
            font-weight: 700;
            text-transform: uppercase;
        }

        h2 {
            color: var(--navy-primario);
            font-size: clamp(18px, 4vw, 24px);
            font-weight: 600;
            margin-top: 20px;
        }

        .form-section {
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            border: 1px solid var(--gris-plata);
        }

        .form-group {
            margin-bottom: 15px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-weight: 500;
            color: var(--navy-primario);
            font-size: 14px;
        }

        input, select, textarea {
            padding: 10px;
            border: 1px solid var(--gris-plata);
            border-radius: 6px;
            width: 100%;
            font-size: 14px;
            background-color: var(--blanco);
            transition: border-color 0.3s;
        }

        input:focus, select:focus, textarea:focus {
            border-color: var(--navy-primario);
            outline: none;
        }

        textarea {
            resize: vertical;
            min-height: 80px;
        }

        button {
            background-color: var(--navy-primario);
            color: var(--blanco);
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: var(--gris-plata);
        }

        .button-group {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 20px;
            gap: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            border: 1px solid var(--gris-plata);
            font-size: 12px;
        }

        th {
            background-color: var(--navy-primario);
            color: var(--blanco);
            padding: 10px;
            text-align: left;
            font-weight: 600;
            font-size: 12px;
        }

        td {
            padding: 10px;
            border-bottom: 1px solid var(--gold-acentuado);
            font-size: 12px;
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
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
            border: 1px solid var(--gris-plata);
        }

        .total-section label {
            color: var(--blanco);
            font-size: 14px;
        }

        #total {
            font-size: clamp(20px, 5vw, 28px);
            font-weight: 700;
            margin-top: 10px;
            display: block;
            text-align: right;
        }

        .remove-btn {
            background-color: var(--gris-plata);
            color: var(--navy-primario);
            padding: 6px 12px;
            font-size: 12px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .remove-btn:hover {
            background-color: #90a4ae;
        }

        .item-controls {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
            margin-bottom: 15px;
        }

        .item-select {
            flex-grow: 1;
            min-width: 150px;
        }

        .footer {
            text-align: center;
            margin-top: 20px;
            padding: 10px;
            background-color: var(--gris-plata);
            border-radius: 8px;
            color: var(--navy-primario);
            font-size: 10px;
        }

        .footer a {
            color: var(--navy-primario);
            text-decoration: none;
        }

        .footer a:hover {
            color: var(--gold-acentuado);
        }

        @media (max-width: 768px) {
            .container {
                padding: 15px;
            }

            .header {
                flex-direction: column;
                text-align: center;
            }

            .logo {
                margin-right: 0;
                margin-bottom: 10px;
                width: 120px;
            }

            .form-section, .total-section {
                padding: 10px;
            }

            input, select, textarea {
                max-width: 100%;
            }

            table {
                font-size: 10px;
            }

            th, td {
                padding: 8px;
            }

            .button-group {
                flex-direction: column;
            }

            button {
                width: 100%;
                padding: 12px;
            }
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
                        <th>Cantidad</th>
                        <th>Concepto</th>
                        <th>Vehículo/Servicio</th>
                        <th>P. Unitario</th>
                        <th>Total</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>

        <div class="total-section">
            <div class="form-group">
                <label for="tax">Impuestos (%)</label>
                <input type="number" id="tax" value="16" min="0" step="0.1">
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
        document.addEventListener('DOMContentLoaded', () => {
            const { jsPDF } = window.jspdf;
            let logoData = null;

            const itemsContainer = document.querySelector('#items tbody');
            const itemSelect = document.getElementById('item-select');
            const addItemBtn = document.getElementById('add-item-btn');
            const taxInput = document.getElementById('tax');
            const totalDisplay = document.getElementById('total');

            function preloadLogo() {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = 'logo.png';
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        canvas.getContext('2d').drawImage(img, 0, 0);
                        logoData = canvas.toDataURL('image/png');
                        resolve();
                    };
                    img.onerror = () => {
                        logoData = null;
                        resolve();
                    };
                });
            }

            function addItem() {
                const selectedItem = itemSelect.value;
                if (!selectedItem) {
                    alert('Por favor, selecciona un ítem antes de agregar.');
                    return;
                }

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><input type="number" class="unit" min="1" value="1"></td>
                    <td>Servicio de Transportación Ejecutiva</td>
                    <td>${selectedItem}</td>
                    <td><input type="number" class="unit-price" min="0" step="0.01" value="0"></td>
                    <td class="price">$0.00</td>
                    <td><button class="remove-btn">Eliminar</button></td>
                `;
                itemsContainer.appendChild(row);

                row.querySelector('.unit').addEventListener('input', calculateTotal);
                row.querySelector('.unit-price').addEventListener('input', calculateTotal);
                row.querySelector('.remove-btn').addEventListener('click', () => {
                    row.remove();
                    calculateTotal();
                });

                itemSelect.value = '';
                calculateTotal();
            }

            function calculateTotal() {
                let subtotal = 0;
                const rows = itemsContainer.querySelectorAll('tr');

                rows.forEach(row => {
                    const unit = parseFloat(row.querySelector('.unit').value) || 0;
                    const unitPrice = parseFloat(row.querySelector('.unit-price').value) || 0;
                    const total = unit * unitPrice;
                    row.querySelector('.price').textContent = `$${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
                    subtotal += total;
                });

                const taxRate = parseFloat(taxInput.value) || 0;
                const taxAmount = subtotal * (taxRate / 100);
                const total = subtotal + taxAmount;

                totalDisplay.textContent = `$${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
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
                    if (integerPart > 0 && integerPart < 100) words += "";
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
                return `${words} pesos ${decimalPart.toString().padStart(2, '0')}/100`;
            }

            window.generatePDF = function() {
                const doc = new jsPDF({
                    orientation: 'portrait',
                    unit: 'mm',
                    format: 'a4'
                });

                const marginLeft = 10;
                const marginRight = 10;
                const pageWidth = doc.internal.pageSize.getWidth() - marginLeft - marginRight;

                doc.setFillColor(13, 17, 32);
                doc.rect(0, 0, doc.internal.pageSize.getWidth(), 40, 'F');
                if (logoData) {
                    doc.addImage(logoData, 'PNG', marginLeft, 5, 30, 25);
                    doc.setFont("helvetica", "bold");
                    doc.setFontSize(12);
                    doc.setTextColor(255, 255, 255);
                    doc.text("Richy Entertainment", marginLeft + 35, 20);
                } else {
                    doc.setFont("helvetica", "bold");
                    doc.setFontSize(14);
                    doc.setTextColor(255, 255, 255);
                    doc.text("Richy Entertainment", doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });
                }

                let y = 45;
                const folio = document.getElementById('folio-number').value || 'Sin folio';
                const date = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
                doc.setFont("helvetica", "normal");
                doc.setFontSize(9);
                doc.setTextColor(51, 51, 51);
                doc.text(`Folio: ${folio}`, marginLeft, y);
                doc.text(`Fecha: ${date}`, doc.internal.pageSize.getWidth() - marginRight, y, { align: 'right' });
                y += 10;

                doc.setFont("helvetica", "bold");
                doc.setFontSize(14);
                doc.setTextColor(13, 17, 32);
                doc.text("Cotización", doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
                y += 15;

                doc.setFontSize(12);
                doc.text("Datos del Cliente", marginLeft, y);
                y += 8;
                const clientName = document.getElementById('client-name').value || 'No especificado';
                const clientCity = document.getElementById('client-city').value || 'No especificado';
                const clientPhone = document.getElementById('client-phone').value || 'No especificado';
                const clientEmail = document.getElementById('client-email').value || 'No especificado';
                doc.setFont("helvetica", "normal");
                doc.setFontSize(9);
                doc.setTextColor(51, 51, 51);
                doc.text(`Nombre: ${clientName}`, marginLeft, y);
                y += 5;
                doc.text(`Ciudad: ${clientCity}`, marginLeft, y);
                y += 5;
                doc.text(`Teléfono: ${clientPhone}`, marginLeft, y);
                y += 5;
                doc.text(`Email: ${clientEmail}`, marginLeft, y);
                y += 10;

                const tableData = Array.from(itemsContainer.querySelectorAll('tr')).map(row => [
                    parseFloat(row.querySelector('.unit').value) || 1,
                    'Servicio de Transportación Ejecutiva',
                    row.cells[2].textContent,
                    `$${parseFloat(row.querySelector('.unit-price').value || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
                    row.querySelector('.price').textContent
                ]);

                doc.autoTable({
                    head: [['Cant.', 'Concepto', 'Descripción', 'P. Unitario', 'Total']],
                    body: tableData,
                    startY: y,
                    headStyles: {
                        fillColor: [13, 17, 32],
                        textColor: [255, 255, 255],
                        fontSize: 9,
                        halign: 'center'
                    },
                    bodyStyles: {
                        fontSize: 8,
                        textColor: [51, 51, 51]
                    },
                    columnStyles: {
                        0: { cellWidth: 15, halign: 'center' },
                        1: { cellWidth: 40 },
                        2: { cellWidth: 60 },
                        3: { cellWidth: 30, halign: 'right' },
                        4: { cellWidth: 30, halign: 'right' }
                    },
                    margin: { left: marginLeft, right: marginRight },
                    didDrawPage: (data) => {
                        y = data.cursor.y + 10;
                    }
                });

                y = doc.lastAutoTable.finalY + 10;

                const notes = document.getElementById('notes').value;
                if (notes) {
                    doc.setFont("helvetica", "bold");
                    doc.setFontSize(10);
                    doc.setTextColor(13, 17, 32);
                    doc.text("Anotaciones", marginLeft, y);
                    y += 5;
                    doc.setFont("helvetica", "normal");
                    doc.setFontSize(8);
                    doc.setTextColor(51, 51, 51);
                    const splitNotes = doc.splitTextToSize(notes, pageWidth - 20);
                    doc.text(splitNotes, marginLeft, y);
                    y += splitNotes.length * 4;
                }

                const taxRate = parseFloat(taxInput.value) || 0;
                const totalNum = parseFloat(totalDisplay.textContent.replace('$', '').replace(/,/g, '')) || 0;
                const subtotal = totalNum / (1 + taxRate / 100);
                const taxAmount = totalNum - subtotal;

                if (y > 240) {
                    doc.addPage();
                    y = 20;
                }

                doc.setFont("helvetica", "bold");
                doc.setFontSize(10);
                doc.setTextColor(13, 17, 32);
                doc.text("Resumen de Pago", marginLeft, y);
                y += 5;
                doc.setFont("helvetica", "normal");
                doc.setFontSize(9);
                doc.setTextColor(51, 51, 51);
                doc.text(`Subtotal: $${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, marginLeft, y);
                y += 5;
                doc.text(`Impuestos (${taxRate}%): $${taxAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, marginLeft, y);
                y += 5;
                doc.setFont("helvetica", "bold");
                doc.setFontSize(10);
                doc.text(`Total: $${totalNum.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, marginLeft, y);
                y += 5;
                doc.setFont("helvetica", "italic");
                doc.setFontSize(8);
                const totalInWords = numberToWordsSpanish(totalNum);
                const splitTotalInWords = doc.splitTextToSize(totalInWords, pageWidth - 20);
                doc.text(splitTotalInWords, marginLeft, y);

                doc.setFont("helvetica", "normal");
                doc.setFontSize(8);
                doc.setTextColor(51, 51, 51);
                doc.text("Richy Entertainment • Tel: 52 55 7341 3969 • Email: transpo_rick@hotmail.com", 
                    doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - 15, { align: 'center' });
                doc.text("© 2025 Richy Entertainment - Todos los derechos reservados", 
                    doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - 10, { align: 'center' });

                doc.save(`Cotización_${folio}_${clientName.replace(/[^a-z0-9]/gi, '_')}.pdf`);
            }

            preloadLogo().then(() => {
                addItemBtn.addEventListener('click', addItem);
                taxInput.addEventListener('input', calculateTotal);
                calculateTotal();
            }).catch(err => console.error('Error loading logo:', err));
        });
    </script>
</body>
</html>
