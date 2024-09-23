var count = 0;

function clickSeat(event) {
  
        if (event.className.includes('bg-[#F7F8F8]')) {

            if (count >= 4) {
                alert("You can't add more than 4 seats.");
                return;
            }
            else {
                count++;

                event.classList.remove('bg-[#F7F8F8]');
                event.classList.add('bg-[#1DD100]'); 
                event.classList.remove('text-[#030712]/[0.5]');
                event.classList.add('text-white');
    
                const ticketInput = document.getElementById('ticket-input');
                const newElement = document.createElement('div');
                newElement.className = " w-full flex justify-between items-center text-[#030712]/[0.6] text-sm sm:text-base font-normal";
                newElement.id = event.innerText;
                newElement.innerHTML =`
                <p>${event.innerText}</p>
                <p>Economy</p>
                <p>550</p>
                `
                ticketInput.append(newElement);
    
                let totalBooked = parseInt(document.getElementById('total-booked').innerText);
                totalBooked += 1;
                document.getElementById('total-booked').innerText = String(totalBooked);

                let totalSeats = parseInt(document.getElementById('total-seats').innerText);
                totalSeats -= 1;
                document.getElementById('total-seats').innerText = String(totalSeats);
    
                let totalPrice = parseInt(document.getElementById('total-price').innerText);
                totalPrice += 550;
                document.getElementById('total-price').innerText = String(totalPrice);
                document.getElementById('grand-total').innerText = String(totalPrice);

                if (count > 0) {
                    validateInfo();
                }
                else {
                    document.getElementById('book-next-btn').setAttribute('disabled', true);
                }
    
                return;
            }
        }

        if (event.className.includes('bg-[#1DD100]')) {
            count--;

            event.classList.remove('bg-[#1DD100]');
            event.classList.add('bg-[#F7F8F8]'); 
            event.classList.remove('text-white');
            event.classList.add('text-[#030712]/[0.5]');

            const ticketInput = document.getElementById('ticket-input');
            const removeElementId = event.innerText;
            const removeElement = document.getElementById(removeElementId);
            ticketInput.removeChild(removeElement);

            let totalBooked = parseInt(document.getElementById('total-booked').innerText);
            totalBooked -= 1;
            document.getElementById('total-booked').innerText = String(totalBooked);

            let totalSeats = parseInt(document.getElementById('total-seats').innerText);
            totalSeats += 1;
            document.getElementById('total-seats').innerText = String(totalSeats);

            let totalPrice = parseInt(document.getElementById('total-price').innerText);
            totalPrice -= 550;
            document.getElementById('total-price').innerText = String(totalPrice);
            document.getElementById('grand-total').innerText = String(totalPrice);

            return;
        }
}
