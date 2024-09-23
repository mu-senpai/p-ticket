document.getElementById('book-next-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const totalBooked = parseInt(document.getElementById('total-booked').innerText);
    const passengerName = document.getElementById('passenger-name').value;
    const phoneNo = document.getElementById('phone-no').value;
    
    let nameValidate = false;
    let phoneValidate = false;
    
    if (passengerName !== "") {
        nameValidate = true;
        
        if (passengerName.includes(' ')) {
            const passengerNameWords = passengerName.split(' ');
            let chCheck;
            for (let i = 0; i < passengerNameWords.length; i++) {
                chCheck = passengerNameWords[i].split('');
                for (const element of chCheck) {
                    if (!isNaN(element)) {
                        nameValidate = false;
                    }
                }
            }
        } else {
            const passengerNameCh = passengerName.split('');
            for (const element of passengerNameCh) {
                if (!isNaN(element)) {
                    nameValidate = false;
                }
            }
        }
    } else{
        nameValidate = false;
    }

    if (phoneNo !== "") {
        if (phoneNo.length >= 11 && !isNaN(phoneNo)) {
            phoneValidate = true;
        } else {
            phoneValidate = false;
        }
    } else {
        phoneValidate = false;
    }

    if (totalBooked > 0) {
        if (nameValidate && phoneValidate) {
            document.getElementById('my_modal_1').showModal();
        } else {
            alert("Invalid passenger name or phone number input.");
        }  
    } else {
        alert('Please select at least one seat to confirm your booking.')
    }
})

document.getElementById('modal-btn').addEventListener('click', function() {
    window.location.reload();
})