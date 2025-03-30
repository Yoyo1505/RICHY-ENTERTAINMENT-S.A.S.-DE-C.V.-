<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generador de Cotizaciones | Richy Entertainment</title>
    <style>
        /* El CSS se mantiene igual al original */
        :root {
            --navy-primario: #0d1120;
            --gold-acentuado: #c9c197;
            --blanco: #ffffff;
            --gris-plata: #b0bec5;
            --texto-oscuro: #333;
            --sombra-suave: rgba(0, 0, 0, 0.05);
        }

        /* Resto del CSS se mantiene igual ... */
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
                    <!-- Opciones se mantienen igual -->
                </select>
                <button id="add-item-btn">Agregar Ítem</button>
            </div>
            <div class="form-group">
                <label for="notes">Anotaciones</label>
                <textarea id="notes" rows="3" placeholder="Escribe aquí notas adicionales..."></textarea>
            </div>

            <table id="items-table">
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
                <tbody id="items-body"></tbody>
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
            <button id="generate-pdf-btn">Generar PDF</button>
            <button id="print-btn">Imprimir</button>
        </div>

        <div class="footer">
            <p>Contacto: <a href="mailto:transpo_rick@hotmail.com">transpo_rick@hotmail.com</a> | Tel: 52 55 7341 3969</p>
            <p>Banco: Santander | Cuenta: 65-51041870-7 | CLABE: 014180655104187070</p>
            <p>© 2025 Richy Entertainment - Todos los derechos reservados</p>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.23/jspdf.plugin.autotable.min.js"></script>
    <script>
        (function() {
            const { jsPDF } = window.jspdf;
            let items = [];

            // Elementos del DOM
            const itemsBody = document.getElementById('items-body');
            const itemSelect = document.getElementById('item-select');
            const addItemBtn = document.getElementById('add-item-btn');
            const taxInput = document.getElementById('tax');
            const totalSpan = document.getElementById('total');
            const generatePdfBtn = document.getElementById('generate-pdf-btn');

            // Añadir ítem
            addItemBtn.addEventListener('click', () => {
                const selectedItem = itemSelect.value;
                if (!selectedItem) {
                    alert('Por favor, selecciona un ítem');
                    return;
                }

                const item = {
                    id: Date.now(),
                    quantity: 1,
                    concept: 'Servicio de Transportación Ejecutiva',
                    description: selectedItem,
                    unitPrice: 0,
                    total: 0
                };

                items.push(item);
                renderItems();
                itemSelect.value = '';
                calculateTotal();
            });

            // Renderizar ítems
            function renderItems() {
                itemsBody.innerHTML = '';
                items.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td><input type="number" min="1" value="${item.quantity}" class="quantity-input" data-id="${item.id}"></td>
                        <td>${item.concept}</td>
                        <td>${item.description}</td>
                        <td><input type="number" min="0" step="0.01" value="${item.unitPrice}" class="price-input" data-id="${item.id}"></td>
                        <td class="price">$${item.total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                        <td><button class="remove-btn" data-id="${item.id}">Eliminar</button></td>
                    `;
                    itemsBody.appendChild(row);
                });

                // Añadir event listeners
                document.querySelectorAll('.quantity-input, .price-input').forEach(input => {
                    input.addEventListener('input', handleInputChange);
                });
                document.querySelectorAll('.remove-btn').forEach(btn => {
                    btn.addEventListener('click', handleRemove);
                });
            }

            // Manejar cambios en inputs
            function handleInputChange(e) {
                const id = parseInt(e.target.dataset.id);
                const item = items.find(i => i.id === id);
                if (item) {
                    if (e.target.classList.contains('quantity-input')) {
                        item.quantity = parseFloat(e.target.value) || 1;
                    } else {
                        item.unitPrice = parseFloat(e.target.value) || 0;
                    }
                    calculateTotal();
                    renderItems();
                }
            }

            // Eliminar ítem
            function handleRemove(e) {
                const id = parseInt(e.target.dataset.id);
                items = items.filter(item => item.id !== id);
                renderItems();
                calculateTotal();
            }

            // Calcular total
            function calculateTotal() {
                let subtotal = 0;
                items.forEach(item => {
                    item.total = item.quantity * item.unitPrice;
                    subtotal += item.total;
                });

                const taxRate = parseFloat(taxInput.value) || 0;
                const tax = subtotal * (taxRate / 100);
                const total = subtotal + tax;
                totalSpan.textContent = `$${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
                return { subtotal, tax, total };
            }

            // Convertir número a palabras en español
            function numberToWordsSpanish(num) {
                const units = ["", "un", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
                const teens = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
                const tens = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
                const hundreds = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

                if (num === 0) return "cero pesos";

                let integer = Math.floor(num);
                let decimal = Math.round((num - integer) * 100);
                let words = "";

                if (integer >= 1000) {
                    let thousands = Math.floor(integer / 1000);
                    integer %= 1000;
                    words += (thousands === 1 ? "mil" : `${numberToWordsSpanish(thousands)} mil`) + " ";
                }

                if (integer >= 100) {
                    words += hundreds[Math.floor(integer / 100)] + " ";
                    integer %= 100;
                }

                if (integer >= 20) {
                    words += tens[Math.floor(integer / 10)];
                    integer %= 10;
                    if (integer > 0) words += " y " + units[integer];
                } else if (integer >= 10) {
                    words += teens[integer - 10];
                } else if (integer > 0) {
                    words += units[integer];
                }

                words = words.trim();
                return `${words} pesos ${decimal.toString().padStart(2, '0')}/100`;
            }

            // Generar PDF
            generatePdfBtn.addEventListener('click', () => {
                const doc = new jsPDF();
                const margin = 15;
                let y = 15;

                // Header
                doc.setFillColor(13, 17, 32);
                doc.rect(0, 0, 210, 30, 'F');
                doc.setTextColor(255);
                doc.setFontSize(16);
                doc.text('Richy Entertainment', 105, 20, { align: 'center' });
                y = 35;

                // Datos del cliente
                doc.setTextColor(51);
                doc.setFontSize(12);
                doc.text(`Folio: ${document.getElementById('folio-number').value || 'N/A'}`, margin, y);
                doc.text(`Fecha: ${new Date().toLocaleDateString('es-MX')}`, 195, y, { align: 'right' });
                y += 10;

                doc.setFontSize(14);
                doc.text('Datos del Cliente', margin, y);
                y += 7;
                doc.setFontSize(10);
                doc.text(`Nombre: ${document.getElementById('client-name').value || 'N/A'}`, margin, y);
                y += 5;
                doc.text(`Ciudad: ${document.getElementById('client-city').value || 'N/A'}`, margin, y);
                y += 5;
                doc.text(`Teléfono: ${document.getElementById('client-phone').value || 'N/A'}`, margin, y);
                y += 5;
                doc.text(`Email: ${document.getElementById('client-email').value || 'N/A'}`, margin, y);
                y += 10;

                // Tabla de ítems
                doc.autoTable({
                    startY: y,
                    head: [['Cant.', 'Concepto', 'Descripción', 'P. Unitario', 'Total']],
                    body: items.map(item => [
                        item.quantity,
                        item.concept,
                        item.description,
                        `$${item.unitPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
                        `$${item.total.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
                    ]),
                    theme: 'grid',
                    headStyles: { fillColor: [13, 17, 32] },
                    margin: { left: margin, right: margin }
                });

                y = doc.lastAutoTable.finalY + 10;

                // Notas
                const notes = document.getElementById('notes').value;
                if (notes) {
                    doc.setFontSize(12);
                    doc.text('Anotaciones:', margin, y);
                    y += 5;
                    doc.setFontSize(10);
                    const splitNotes = doc.splitTextToSize(notes, 180);
                    doc.text(splitNotes, margin, y);
                    y += splitNotes.length * 5 + 5;
                }

                // Totales
                const totals = calculateTotal();
                doc.setFontSize(12);
                doc.text(`Subtotal: $${totals.subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, 150, y, { align: 'right' });
                y += 5;
                doc.text(`IVA (${taxInput.value}%): $${totals.tax.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, 150, y, { align: 'right' });
                y += 5;
                doc.setFontSize(14);
                doc.text(`Total: $${totals.total.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, 150, y, { align: 'right' });
                y += 7;
                doc.setFontSize(10);
                doc.text(`(${numberToWordsSpanish(totals.total)})`, margin, y);

                // Footer
                doc.setFontSize(8);
                doc.text('Richy Entertainment • Tel: 52 55 7341 3969 • transpo_rick@hotmail.com', 105, 280, { align: 'center' });

                doc.save(`Cotización_${document.getElementById('folio-number').value || 'N/A'}.pdf`);
            });

            // Evento para el impuesto
            taxInput.addEventListener('input', calculateTotal);
        })();
    </script>
</body>
</html>
