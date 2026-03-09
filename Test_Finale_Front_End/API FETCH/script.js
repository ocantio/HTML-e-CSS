// Funzione per caricare gli utenti
const loadData = () => {
    const usersContainer = document.getElementById('users');
    usersContainer.innerHTML = '<em>Caricamento in corso...</em>';

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            usersContainer.innerHTML = ''; // Pulisce il messaggio di caricamento
            users.forEach(user => {
                const card = document.createElement('div');
                card.className = 'user';
                card.innerHTML = `
                    <strong>${user.name}</strong><br>
                    <span>${user.email}</span>
                `;
                usersContainer.appendChild(card);
            });
        })
        .catch(error => {
            usersContainer.textContent = 'Errore nel caricamento dei dati.';
            console.error('Errore:', error);
        });
};

// Funzione per cambiare il colore di sfondo delle card caricate
const changeColor = () => {
    const cards = document.querySelectorAll('.user');
    
    if (cards.length === 0) {
        console.warn("Nessun utente caricato. Carica prima gli utenti!");
        return;
    }

    // Genera un colore HSL casuale (luminosità alta per leggere bene il testo)
    const randomColor = `hsl(${Math.random() * 360}, 70%, 90%)`;

    cards.forEach(card => {
        card.style.backgroundColor = randomColor;
    });
};

// Associazione eventi
document.addEventListener('DOMContentLoaded', () => {
    const loadBtn = document.getElementById('load-users');
    const colorBtn = document.getElementById('change-color');

    if (loadBtn) loadBtn.addEventListener('click', loadData);
    if (colorBtn) colorBtn.addEventListener('click', changeColor);
});