document.getElementById('apply-coupon').addEventListener('click', function() {
    const totalBooked = parseInt(document.getElementById('total-booked').innerText);
    let grandTotal = parseInt(document.getElementById('grand-total').innerText);
    const coupon = document.getElementById('coupon').value;

    if (totalBooked > 0) {    
        if (coupon === 'NEW15') {
            grandTotal = grandTotal - (grandTotal * 0.15);
            document.getElementById('grand-total').innerText = String(grandTotal);
            document.getElementById('coupon').value = "";
            alert("Congratulations! Price is 15% reduced for using 'NEW15' coupon!");
            document.getElementById('apply-coupon').setAttribute('disabled', true);
        }
        else if (coupon === 'COUP20') {
            grandTotal = grandTotal - (grandTotal * 0.2);
            document.getElementById('grand-total').innerText = String(grandTotal);
            document.getElementById('coupon').value = "";
            alert("Congratulations! Price is 20% reduced for using 'COUP20' coupon!");
            document.getElementById('apply-coupon').setAttribute('disabled', true);
        }
        else {
            document.getElementById('coupon').value = "";
            alert("Coupon code is not valid");
        }
    } else {
        alert("Select at least one seat to apply coupon code.")
    }
})