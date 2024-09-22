document.getElementById('apply-coupon').addEventListener('click', function() {
    let grandTotal = parseInt(document.getElementById('grand-total').innerText);
    const coupon = document.getElementById('coupon').value;

    if (coupon === 'NEW15') {
        grandTotal = grandTotal - (grandTotal * 0.15);
        alert("Congratulations! Price is 15% reduced for using 'NEW15' coupon!");
    }
    if (coupon === 'COUP20') {
        grandTotal = grandTotal - (grandTotal * 0.2);
        alert("Congratulations! Price is 20% reduced for using 'COUP20' coupon!");
    }

    document.getElementById('grand-total').innerText = String(grandTotal);
    document.getElementById('coupon').value = "";
})