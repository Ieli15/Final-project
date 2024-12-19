const API_URL = "http://localhost:3000/cryptos";

document.addEventListener("DOMContentLoaded", () => {
  const cryptoContainer = document.getElementById("crypto-container");
  const cryptoForm = document.getElementById("crypto-form");
  const searchBar = document.getElementById("search-bar");
  const sortDropdown = document.getElementById("sort-options");
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  let cryptos = []; // Hold the fetched cryptos in a variable

  // Fetch and display cryptocurrencies
  function fetchCryptos() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        cryptos = data; // Store fetched cryptos
        renderCryptos(cryptos);
      });
  }

  function renderCryptos(cryptos) {
    cryptoContainer.innerHTML = "";
    cryptos.forEach((crypto) => {
      const cryptoCard = document.createElement("div");
      cryptoCard.className = "crypto-card";
      cryptoCard.innerHTML = `
        <span><strong>${crypto.name}</strong> (${crypto.symbol}) - $${crypto.price}</span>
        <div>
          <button class="edit-btn" data-id="${crypto.id}">Edit</button>
          <button class="delete-btn" data-id="${crypto.id}">Delete</button>
        </div>
      `;
      cryptoContainer.appendChild(cryptoCard);
    });

    // Add event listeners to edit and delete buttons
    document.querySelectorAll(".edit-btn").forEach((btn) =>
      btn.addEventListener("click", handleEdit)
    );
    document.querySelectorAll(".delete-btn").forEach((btn) =>
      btn.addEventListener("click", handleDelete)
    );
  }

  // Add cryptocurrency
  cryptoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("crypto-name").value;
    const price = document.getElementById("crypto-price").value;
    const symbol = document.getElementById("crypto-symbol").value;

    const newCrypto = { name, price: parseFloat(price), symbol };

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCrypto),
    })
      .then(() => {
        cryptoForm.reset();
        fetchCryptos();
      })
      .catch((err) => console.error(err));
  });

  // Edit cryptocurrency
  function handleEdit(e) {
    const id = e.target.dataset.id;
    const newPrice = prompt("Enter new price:");

    if (newPrice) {
      fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price: parseFloat(newPrice) }),
      }).then(fetchCryptos);
    }
  }

  // Delete cryptocurrency
  function handleDelete(e) {
    const id = e.target.dataset.id;

    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).then(fetchCryptos);
  }

  // Search functionality
  searchBar.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredCryptos = cryptos.filter((crypto) =>
      crypto.name.toLowerCase().includes(query)
    );
    renderCryptos(filteredCryptos);
  });

  // Sort functionality based on selected option (price or name)
  sortDropdown.addEventListener("change", () => {
    const sortBy = sortDropdown.value;
    let sortedCryptos;

    if (sortBy === "price") {
      sortedCryptos = [...cryptos].sort((a, b) => a.price - b.price); // Sort by price
    } else if (sortBy === "name") {
      sortedCryptos = [...cryptos].sort((a, b) => a.name.localeCompare(b.name)); // Sort by name (alphabetically)
    }

    renderCryptos(sortedCryptos);
  });

  // Toggle Dark Mode
  darkModeToggle.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    // Change button text based on mode
    darkModeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  });

  // Initial fetch
  fetchCryptos();
});
