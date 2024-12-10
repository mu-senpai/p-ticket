# P-Ticket

P-Ticket is an interactive web-based application for bus ticket booking. This platform enables users to select their desired seats, apply discount coupons, and make a reservation conveniently. The project leverages modern frontend technologies to deliver an intuitive and responsive user interface.

## Features

- **Responsive Design**: The layout is optimized for desktop, tablet, and mobile devices.
- **Seat Selection**: Users can select up to 4 seats per booking.
- **Coupon Application**: Offers coupon codes for discounts (e.g., `NEW15` for 15% off and `COUP20` for 20% off).
- **Dynamic Updates**: Real-time updates for seat availability and pricing.
- **Success Dialog**: Displays a confirmation modal after successful booking.

## Technologies Used

- **HTML5**: For structuring the web pages.
- **CSS (Tailwind CSS & DaisyUI)**: For styling and responsive design.
- **JavaScript**: For interactivity and dynamic updates.
- **FontAwesome**: For icons and visuals.
- **Google Fonts**: For typography.

## File Structure

- `index.html`: Contains the structure of the website, including the navbar, banner, and main content.
- `js/seatSelect.js`: Handles seat selection logic and updates the UI dynamically.
- `js/applyCoupon.js`: Manages the coupon application process and adjusts the total price accordingly.
- `js/nextButton.js`: Validates passenger details and triggers booking confirmation.

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory**:
    ```bash
    cd p-ticket
    ```

3. **Open the project in a browser**:
    Open `index.html` in your preferred web browser to view the application.

## Usage

1. Open the `index.html` file in a browser.
2. Select your desired seats (up to 4 seats allowed per booking).
3. Enter a valid coupon code (e.g., `NEW15` or `COUP20`) and click "Apply" to get a discount.
4. Enter passenger details and click the "Next" button to confirm your booking.
5. A success modal will appear upon successful booking.

## Code Overview

### Seat Selection (`seatSelect.js`)
- Users can toggle seat selection.
- Updates total seats selected, remaining seats, and price dynamically.
- Limits the selection to a maximum of 4 seats.

### Coupon Application (`applyCoupon.js`)
- Users can apply discount coupons.
- Supported coupons:
  - `NEW15`: 15% discount.
  - `COUP20`: 20% discount.
- Displays an alert for invalid or empty coupons.
- Ensures that at least one seat is selected before applying a coupon.

### Passenger Validation and Confirmation (`nextButton.js`)
- Validates passenger name and phone number inputs.
  - Ensures the passenger name does not contain numeric characters.
  - Requires a minimum of 11 digits for the phone number.
- Checks if at least one seat is booked before proceeding.
- Displays a confirmation modal on successful validation and booking.
- Resets the page upon confirmation closure.
