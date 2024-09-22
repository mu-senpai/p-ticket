document.getElementById('book-next-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const passegerName = document.getElementById('passenger-name').value;

    alert(`Thank you ${passegerName} for booking tickets from us! Shortly you will find a confirmation in your email.`);
})