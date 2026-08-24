/* =========================
   27FC PLAYER DATA
========================= */

const players = [
    {
        name: "Nguyễn Văn A",
        number: 10,
        position: "Pivot",
        wanted1: "Pivot",
        wanted2: "Ala",
        goals: 8,
        assists: 4,
        rating: 9.2
    },

    {
        name: "Trần Văn B",
        number: 7,
        position: "Ala",
        wanted1: "Ala",
        wanted2: "Pivot",
        goals: 6,
        assists: 5,
        rating: 8.8
    },

    {
        name: "Lê Văn C",
        number: 11,
        position: "Ala",
        wanted1: "Ala",
        wanted2: "Fixo",
        goals: 4,
        assists: 2,
        rating: 8.2
    },

    {
        name: "Nguyễn Văn D",
        number: 4,
        position: "Fixo",
        wanted1: "Fixo",
        wanted2: "Ala",
        goals: 2,
        assists: 3,
        rating: 8.5
    },

    {
        name: "Trần Văn E",
        number: 1,
        position: "GK",
        wanted1: "GK",
        wanted2: "Fixo",
        goals: 0,
        assists: 1,
        rating: 8.7
    },

    {
        name: "Phạm Văn F",
        number: 8,
        position: "Ala",
        wanted1: "Ala",
        wanted2: "Pivot",
        goals: 3,
        assists: 3,
        rating: 8.1
    },

    {
        name: "Nguyễn Văn G",
        number: 5,
        position: "Fixo",
        wanted1: "Fixo",
        wanted2: "Ala",
        goals: 1,
        assists: 2,
        rating: 7.9
    },

    {
        name: "Lê Văn H",
        number: 9,
        position: "Pivot",
        wanted1: "Pivot",
        wanted2: "Ala",
        goals: 3,
        assists: 1,
        rating: 8.0
    }
];


/* =========================
   RENDER PLAYERS
========================= */

function renderPlayers(list) {

    const container = document.getElementById("playersGrid");

    container.innerHTML = "";

    list.forEach(player => {

        const card = document.createElement("div");

        card.className = "player-card";

        card.innerHTML = `
            <div class="player-number">
                ${String(player.number).padStart(2, "0")}
            </div>

            <h3>${player.name}</h3>

            <span class="player-position">
                ${getPositionIcon(player.position)} ${player.position}
            </span>

            <div class="player-wanted">
                Vị trí mong muốn:<br>
                <b>${player.wanted1}</b>
                ·
                <b>${player.wanted2}</b>
            </div>
        `;

        container.appendChild(card);
    });
}


/* =========================
   POSITION ICON
========================= */

function getPositionIcon(position) {

    switch (position) {

        case "GK":
            return "🧤";

        case "Fixo":
            return "🛡️";

        case "Ala":
            return "⚡";

        case "Pivot":
            return "🎯";

        default:
            return "⚽";
    }
}


/* =========================
   FILTER PLAYERS
========================= */

function filterPlayers(position, button) {

    const buttons = document.querySelectorAll(".filter");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    if (position === "all") {

        renderPlayers(players);

        return;
    }

    const filtered = players.filter(
        player => player.position === position
    );

    renderPlayers(filtered);
}


/* =========================
   QUICK STATS
========================= */

function updateStats() {

    const playerCount = players.length;

    const goalCount = players.reduce(
        (total, player) => total + player.goals,
        0
    );

    document.getElementById("playerCount").textContent =
        playerCount;

    document.getElementById("goalCount").textContent =
        goalCount;

    document.getElementById("matchCount").textContent =
        "1";
}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    menu.classList.toggle("show");
}


function closeMenu() {

    const menu = document.getElementById("mobileMenu");

    menu.classList.remove("show");
}


/* =========================
   START
========================= */

document.addEventListener("DOMContentLoaded", () => {

    renderPlayers(players);

    updateStats();

});
