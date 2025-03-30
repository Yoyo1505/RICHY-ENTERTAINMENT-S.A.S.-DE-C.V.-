<!DOCTYPE<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generador de Cotizaciones | Richy Entertainment</title>
    <style>
        :root {
            --azul-marino: #002366;
            --rojo: #d10000;
            --blanco: #ffffff;
            --gris-claro: #f5f5f5;
            --gris-oscuro: #2e2e2e;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            background-color: var(--gris-claro);
            color: #333;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background-color: var(--blanco);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid var(--rojo);
        }
        
        .logo {
            width: 180px;
            height: auto;
            margin-right: 30px;
        }
        
        .titulo {
            flex-grow: 1;
        }
        
        h1 {
            color: var(--azul-marino);
            margin: 0;
            font-size: 28px;
        }
        
        h2 {
            color: var(--azul-marino);
            border-bottom: 2px solid var(--rojo);
            padding-bottom: 8px;
            margin-top: 30px;
        }
        
        .form-section {
            background-color: var(--gris-claro);
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: var(--azul-marino);
        }
        
        input, select, textarea {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            width: 100%;
            max-width: 300px;
        }
        
        textarea {
            max-width: 100%;
            resize: vertical;
        }
        
        button {
            background-color: var(--azul-marino);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
            margin-top: 10px;
        }
        
        button:hover {
            background-color: var(--rojo);
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        
        th {
            background-color: var(--azul-marino);
            color: white;
            padding: 12px;
            text-align: left;
        }
        
        td {
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        
        tr:nth-child(even) {
            background-color: var(--gris-claro);
        }
        
        .price {
            text-align: right;
        }
        
        .total-section {
            background-color: var(--azul-marino);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
        }
        
        .total-section label {
            color: white;
        }
        
        #total {
            font-size: 24px;
            font-weight: bold;
        }
        
        .remove-btn {
            background-color: var(--rojo);
            padding: 5px 10px;
            font-size: 14px;
        }
        
        .remove-btn:hover {
            background-color: #b00000;
        }
        
        .item-controls {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        
        .item-select {
            flex-grow: 1;
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
            <img class="logo" src="https://raw.githubusercontent.com/Yoyo1505/Cotizaciones/main/logo.png" alt="Richy Entertainment" id="logo" onerror="this.src='logo.png'">
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

        <button onclick="generatePDF()">Generar PDF</button>
        <button onclick="window.print()" style="margin-left: 10px;">Imprimir</button>
    </div>

    <div id="pdf-container" style="display: none;"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.23/jspdf.plugin.autotable.min.js"></script>
    <script>
        const { jsPDF } = window.jspdf;
        let logoData = null;

        function preloadLogo() {
            return new Promise((resolve, reject) => {
                const logo = document.getElementById('logo');
                const img = new Image();
                img.crossOrigin = "Anonymous";
                img.src = logo.src;
                
                img.onload = function() {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    logoData = canvas.toDataURL('image/png');
                    resolve();
                };
                
                img.onerror = function() {
                    console.log("Logo no cargado, se usará texto alternativo");
                    resolve();
                };
            });
        }

        preloadLogo();

        const itemsContainer = document.querySelector('#items tbody');
        const itemSelect = document.getElementById('item-select');
        const addItemBtn = document.getElementById('add-item-btn');

        addItemBtn.addEventListener('click', addItem);

        function addItem() {
            const selectedItem = itemSelect.value;
            if (selectedItem) {
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
                itemSelect.value = '';
                calculateTotal();
            } else {
                alert('Por favor, selecciona un ítem antes de agregar.');
            }
        }

        function removeItem(button) {
            const row = button.closest('tr');
            row.remove();
            calculateTotal();
        }

        function calculateTotal() {
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
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            
            const marginLeft = 15;
            const marginRight = 15;
            const pageWidth = doc.internal.pageSize.getWidth() - marginLeft - marginRight;
            const pageHeight = doc.internal.pageSize.getHeight();

            // Encabezado estilizado
            function addHeader() {
                if (logoData) {
                    doc.setFillColor(0, 35, 102);
                    doc.rect(0, 0, doc.internal.pageSize.getWidth(), 50, 'F');
                    for (let i = 0; i < 50; i++) {
                        doc.setFillColor(0, 35 + i, 102 + i/2);
                        doc.rect(0, i, doc.internal.pageSize.getWidth(), 1, 'F');
                    }

                    const logoWidth = 45;
                    const logoHeight = (document.getElementById('logo').naturalHeight / document.getElementById('logo').naturalWidth) * logoWidth;
                    doc.addImage(logoData, 'PNG', marginLeft + 5, 10, logoWidth, logoHeight);
                    
                    doc.setFont("times", "italic");
                    doc.setFontSize(12);
                    doc.setTextColor(220, 220, 220);
                    doc.text("Soluciones de Transportación Ejecutiva", marginLeft + logoWidth + 15, 35);
                    
                    doc.setDrawColor(209, 0, 0);
                    doc.setLineWidth(1.2);
                    doc.line(marginLeft, 55, doc.internal.pageSize.getWidth() - marginRight, 55);
                    return 60;
                } else {
                    doc.setFillColor(0, 35, 102);
                    doc.rect(0, 0, doc.internal.pageSize.getWidth(), 50, 'F');
                    for (let i = 0; i < 50; i++) {
                        doc.setFillColor(0, 35 + i/2, 102 + i);
                        doc.rect(0, i, doc.internal.pageSize.getWidth(), 1, 'F');
                    }
                    
                    doc.setFont("times", "italic");
                    doc.setFontSize(14);
                    doc.setTextColor(220, 220, 220);
                    doc.text("Soluciones de Transportación Ejecutiva", doc.internal.pageSize.getWidth() / 2, 38, { align: 'center' });
                    
                    doc.setDrawColor(209, 0, 0);
                    doc.setLineWidth(1.5);
                    doc.line(marginLeft, 55, doc.internal.pageSize.getWidth() - marginRight, 55);
                    
                    doc.setFillColor(209, 0, 0);
                    doc.circle(doc.internal.pageSize.getWidth() / 2, 55, 2, 'F');
                    return 65;
                }
            }

            const headerHeight = addHeader();

            // Datos de folio y fecha
            const folio = document.getElementById('folio-number').value || 'Sin folio';
            const date = new Date().toLocaleDateString('es-MX', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            doc.setFont("helvetica", "normal");
            doc.setFontSize(9);
            doc.setTextColor(100, 100, 100);
            doc.text(`Folio: ${folio}`, marginLeft, headerHeight + 5);
            doc.text(`Fecha: ${date}`, doc.internal.pageSize.getWidth() - marginRight, headerHeight + 5, { align: 'right' });

            // Título de la cotización (tamaño reducido)
            doc.setFont("times", "bold");
            doc.setFontSize(16);
            doc.setTextColor(0, 35, 102);
            doc.text("Cotización", doc.internal.pageSize.getWidth() / 2, headerHeight + 20, { align: 'center' });
            
            doc.setDrawColor(209, 0, 0);
            doc.setLineWidth(0.5);
            doc.line(marginLeft + 20, headerHeight + 22, doc.internal.pageSize.getWidth() - marginRight - 20, headerHeight + 22);

            // Datos del cliente
            doc.setFont("times", "bold");
            doc.setFontSize(14);
            doc.setTextColor(0, 35, 102);
            doc.text("Datos del Cliente", marginLeft, headerHeight + 35);

            const clientName = document.getElementById('client-name').value || 'No especificado';
            const clientCity = document.getElementById('client-city').value || 'No especificado';
            const clientPhone = document.getElementById('client-phone').value || 'No especificado';
            const clientEmail = document.getElementById('client-email').value || 'No especificado';

            doc.setFillColor(240, 245, 250);
            doc.roundedRect(marginLeft, headerHeight + 40, pageWidth, 40, 5, 5, 'F');
            doc.setDrawColor(0, 35, 102);
            doc.setLineWidth(0.3);
            doc.roundedRect(marginLeft, headerHeight + 40, pageWidth, 40, 5, 5);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(11);
            doc.setTextColor(50, 50, 50);
            doc.text(`Nombre: ${clientName}`, marginLeft + 5, headerHeight + 50);
            doc.text(`Ciudad: ${clientCity}`, marginLeft + 5, headerHeight + 57);
            doc.text(`Teléfono: ${clientPhone}`, marginLeft + 5, headerHeight + 64);
            doc.text(`Email: ${clientEmail}`, marginLeft + 5, headerHeight + 71);

            // Tabla de ítems
            const tableData = [];
            const rows = document.querySelectorAll('#items tbody tr');

            rows.forEach(row => {
                const quantity = row.querySelector('.unit').value || '1';
                const concept = 'Servicio de Transportación Ejecutiva';
                const item = row.cells[2].textContent;
                const unitPrice = parseFloat(row.querySelector('.unit-price').value) || 0;
                const total = parseFloat(row.querySelector('.price').textContent.replace('$', '')) || 0;

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
                startY: headerHeight + 85,
                headStyles: {
                    fillColor: [0, 35, 102],
                    textColor: [255, 255, 255],
                    fontSize: 11,
                    font: "times",
                    fontStyle: 'bold',
                    halign: 'center',
                    cellPadding: 4
                },
                bodyStyles: {
                    fontSize: 10,
                    textColor: [50, 50, 50],
                    font: "helvetica"
                },
                columnStyles: {
                    0: { cellWidth: 15, halign: 'center' },
                    1: { cellWidth: 40, halign: 'left' },
                    2: { cellWidth: 60, halign: 'left' },
                    3: { cellWidth: 30, halign: 'right' },
                    4: { cellWidth: 30, halign: 'right' }
                },
                margin: { left: marginLeft, right: marginRight },
                styles: {
                    cellPadding: 3,
                    lineWidth: 0.1,
                    lineColor: [150, 150, 150],
                    overflow: 'linebreak'
                },
                alternateRowStyles: {
                    fillColor: [245, 248, 250]
                },
                didDrawPage: function(data) {
                    const pageCount = doc.internal.getNumberOfPages();
                    doc.setFont("helvetica", "italic");
                    doc.setFontSize(8);
                    doc.setTextColor(120, 120, 120);
                    doc.text(`Página ${data.pageNumber} de ${pageCount}`, doc.internal.pageSize.getWidth() - marginRight - 10, pageHeight - 5, { align: 'right' });
                }
            });

            // Anotaciones
            const notes = document.getElementById('notes').value;
            if (notes) {
                const notesY = doc.lastAutoTable.finalY + 10;
                doc.setFont("times", "bold");
                doc.setFontSize(12);
                doc.setTextColor(0, 35, 102);
                doc.text("Anotaciones", marginLeft, notesY);

                doc.setFont("helvetica", "normal");
                doc.setFontSize(10);
                doc.setTextColor(50, 50, 50);
                const splitNotes = doc.splitTextToSize(notes, pageWidth);
                doc.text(splitNotes, marginLeft, notesY + 7);
            }

            // Totales con número en letras solo para el total
            const finalY = (notes ? doc.lastAutoTable.finalY + 20 + (doc.splitTextToSize(notes, pageWidth).length * 5) : doc.lastAutoTable.finalY + 20);
            const taxRate = parseFloat(document.getElementById('tax').value) || 0;
            const totalText = document.getElementById('total').textContent;
            const total = parseFloat(totalText.replace('$', '')) || 0;
            const subtotal = total / (1 + taxRate/100);
            const taxAmount = total - subtotal;
            const totalInWords = numberToWordsSpanish(total);

            doc.setFillColor(0, 35, 102);
            doc.roundedRect(marginLeft, finalY, pageWidth, 45, 8, 8, 'F');
            doc.setDrawColor(255, 255, 255);
            doc.setLineWidth(0.5);
            doc.roundedRect(marginLeft + 2, finalY + 2, pageWidth - 4, 41, 6, 6);

            doc.setFont("times", "bold");
            doc.setFontSize(16);
            doc.setTextColor(255, 255, 255);
            doc.text("Resumen de Pago", marginLeft + 10, finalY + 12);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);
            doc.text(`Subtotal:`, marginLeft + pageWidth - 80, finalY + 25);
            doc.text(`$${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, marginLeft + pageWidth - 10, finalY + 25, { align: 'right' });
            
            doc.text(`Impuestos (${taxRate.toLocaleString('en-US')}%):`, marginLeft + pageWidth - 80, finalY + 34);
            doc.text(`$${taxAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, marginLeft + pageWidth - 10, finalY + 34, { align: 'right' });
            
            doc.setFont("times", "bold");
            doc.setFontSize(14);
            doc.text(`Total:`, marginLeft + pageWidth - 80, finalY + 43);
            doc.text(`${totalText}`, marginLeft + pageWidth - 10, finalY + 43, { align: 'right' });

            doc.setFont("helvetica", "italic");
            doc.setFontSize(10);
            const splitTotalInWords = doc.splitTextToSize(totalInWords, pageWidth - 20);
            doc.text(splitTotalInWords, marginLeft + 10, finalY + 50);

            // Pie de página estilizado
            const footerY = pageHeight - 35;
            doc.setFillColor(0, 35, 102);
            doc.rect(0, footerY, doc.internal.pageSize.getWidth(), 35, 'F');
            for (let i = 0; i < 35; i++) {
                doc.setFillColor(0, 35 + i/2, 102 + i);
                doc.rect(0, footerY + i, doc.internal.pageSize.getWidth(), 1, 'F');
            }

            doc.setFont("helvetica", "normal");
            doc.setFontSize(7);
            doc.setTextColor(220, 220, 220);
            doc.text("Richy Entertainment S.A.S. de C.V.  •  Teléfono: 52 55 7341 3969  •  Email: transpo_rick@hotmail.com", doc.internal.pageSize.getWidth() / 2, footerY + 12, { align: 'center' });
            doc.text("Banco: Santander  •  Cuenta: 65-51041870-7  •  CLABE: 014180655104187070", doc.internal.pageSize.getWidth() / 2, footerY + 18, { align: 'center' });
            
            doc.setFont("times", "italic");
            doc.setFontSize(8);
            doc.setTextColor(255, 255, 255);
            doc.text("© 2025 Richy Entertainment - Todos los derechos reservados", doc.internal.pageSize.getWidth() / 2, footerY + 28, { align: 'center' });

            // Detalles decorativos laterales
            doc.setDrawColor(209, 0, 0);
            doc.setLineWidth(0.8);
            doc.line(5, 10, 5, pageHeight - 10);
            doc.line(doc.internal.pageSize.getWidth() - 5, 10, doc.internal.pageSize.getWidth() - 5, pageHeight - 10);

            createPrintPreview(doc);
            const fileName = `Cotización_${folio}_${clientName.replace(/[^a-z0-9]/gi, '_')}.pdf`;
            doc.save(fileName);
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
    </script>
</body>
</html>
