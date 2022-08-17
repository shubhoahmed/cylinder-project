document.getElementById('btn-purches').addEventListener('click', function () {
    const newPurches = getInputFieldValueById('purches-field');
    const previousPurchesQuantity = getElementValueById('old-purches');
    const newPurchesQuantity = previousPurchesQuantity + newPurches;

    setTextValueById('old-purches', newPurchesQuantity);

    const previousStock = document.getElementById('old-stock');
    const oldStockQuantity = previousStock.innerText;
    const finalStock = parseFloat(oldStockQuantity);
    const newStockQuantity = finalStock + newPurches;

    setTextValueById('old-stock', newStockQuantity);

})