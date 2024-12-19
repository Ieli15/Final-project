## Cryptocurrency Tracker
Description
This project is a simple cryptocurrency tracker application that allows users to view, add, edit, delete, and search for cryptocurrencies. It supports sorting by price or name, as well as a dark mode toggle. The data is fetched and stored on a backend API, and the frontend is built using HTML, CSS, and JavaScript.

Features
View Cryptocurrencies: Displays a list of cryptocurrencies with their names, symbols, and prices.
Add Cryptocurrencies: Allows users to add new cryptocurrencies with a name, symbol, and price.
Edit Cryptocurrencies: Users can update the price of an existing cryptocurrency.
Delete Cryptocurrencies: Users can delete cryptocurrencies from the list.
Search Cryptocurrencies: Allows users to search for cryptocurrencies by name.
Sort Cryptocurrencies: Users can sort the list by price (ascending order) or alphabetically by name.
Dark Mode Toggle: Users can switch between light and dark modes for the app interface.
Installation
To run this project locally, follow the steps below:

1. Clone the repository:
bash
Copy code
git clone https://github.com/your-username/crypto-tracker.git
2. Install Dependencies (for backend):
Make sure you have Node.js installed on your machine. Navigate to the project folder and install the required dependencies.

bash
Copy code
cd crypto-tracker
npm install
3. Start the Server:
Run the backend API server to serve cryptocurrency data. For this example, you can use json-server for a simple mock API:

bash
Copy code
npm run server
This will start the server at http://localhost:3000, which will serve the data from cryptos.json.

4. Open the Frontend:
You can open the index.html file in a browser to start using the cryptocurrency tracker.

Usage
Once the app is loaded in your browser:

1. Add Cryptocurrency:
Use the form at the top to add a new cryptocurrency by entering its name, symbol, and price.
Click Add Cryptocurrency to submit the form, and the cryptocurrency will be added to the list.
2. Edit Cryptocurrency:
Click the Edit button next to a cryptocurrency to update its price.
You will be prompted to enter the new price, and the list will update.
3. Delete Cryptocurrency:
Click the Delete button next to a cryptocurrency to remove it from the list.
4. Search Cryptocurrencies:
Use the search bar to filter the cryptocurrencies by name. As you type, the list will automatically update.
5. Sort Cryptocurrencies:
Use the Sort by Price or Sort Alphabetically dropdown to sort the list in ascending order by price or alphabetically by name.
6. Dark Mode Toggle:
Click the Dark Mode button in the top-right corner to toggle between dark and light modes for the interface.
