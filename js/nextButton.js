function validateInfo() { 
    document.getElementById('passenger-name').addEventListener('keyup', function(event) {
        const name = event.target.value;
        if (name !== "") {
            document.getElementById('phone-no').addEventListener('keyup', function(event) {
                const phoneNo = event.target.value;
                if (!isNaN(phoneNo) && phoneNo.length === 11) {
                    document.getElementById('book-next-btn').removeAttribute('disabled');
                }
                else {
                    document.getElementById('book-next-btn').setAttribute('disabled', true);
                }
            })
        }
        else {
            document.getElementById('book-next-btn').setAttribute('disabled', true);
        }
    })
}

document.getElementById('book-next-btn').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('my_modal_1').showModal();
    
    document.getElementById('passenger-name').value = "";
    document.getElementById('phone-no').value = "";
    document.getElementById('email-add').value = "";
})