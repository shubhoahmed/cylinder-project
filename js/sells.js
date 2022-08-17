document.getElementById('btn-sells').addEventListener('click', function () {
    const newSells = getInputFieldValueById('sells-field');
    const previousSellsQuantity = getElementValueById('old-sells');

    const newSellsQuantity = previousSellsQuantity + newSells;



    const previousStock = document.getElementById('old-stock');
    const oldStockQuantity = previousStock.innerText;
    const finalStock = parseFloat(oldStockQuantity);
    const newStockQuantity = finalStock - newSells;

    if (newSells > oldStockQuantity) {
        alert('You have not sufficient stock.')
        return;
    }
    setTextValueById('old-sells', newSellsQuantity);
    setTextValueById('old-stock', newStockQuantity);

})