# NS Price Tracker

NS Price Tracker is a web application designed to help users track the prices of Nintendo Switch games available on the eShop. It provides a user-friendly interface for browsing through a list of games, adding them to a cart, and searching for specific titles. Built with React and leveraging Vite for fast development, this project aims to offer a seamless experience for users interested in keeping an eye on the latest deals and updates on Nintendo Switch games.

## Features

- **Game Listing:** Browse through a comprehensive list of Nintendo Switch games with details such as title, price, and availability.
- **Search Functionality:** Easily find games by searching through the database using keywords.
- **Cart System:** Add games to a cart to keep track of prices and manage a wishlist of desired titles.
- **Responsive Design:** Enjoy a seamless experience on both desktop and mobile devices.
- **Theme Toggle:** Switch between light and dark themes for comfortable browsing at any time of day.
- **Modal Cart View:** Quickly view items added to the cart and remove them as needed.

## Technologies Used

- **Frontend:** React for building interactive UI components.
- **State Management:** Context API for managing global state, specifically the shopping cart.
- **Styling:** CSS for styling, with some components utilizing Flexbox for layout.
- **Routing:** React Router Dom for navigating between pages.
- **Data Fetching:** Nintendo-switch-eshop dependency to fetch game data.
- **Development & Bundling:** Vite for fast development and efficient bundling.
- **Code Quality:** ESLint for maintaining clean and consistent code.

## Getting Started

To run NS Price Tracker locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Start the development server with `npm run dev`.

## Project Structure

The project is organized into several directories and files for modular development:

- `src/components`: Contains reusable UI components like Header, Footer, GameCard, etc.
- `src/context`: Manages global state, specifically the shopping cart.
- `src/pages`: Holds different pages of the application, including Home and Search.
- `src/styles`: CSS files for styling components.
- `vite.config.js`: Configures Vite for the project setup.

## Usage

Upon launching the app, users are greeted with a homepage showcasing featured, latest, and on-sale games. Users can add games to their cart and search for specific titles using the search functionality. The cart can be accessed via a modal, allowing users to review their selections and remove items as needed.

## Contributing

Contributions are welcome! Please feel free to fork the repository, make changes, and submit a pull request.

## License

This project is open source under the MIT license.
