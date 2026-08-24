/* =========================
   27FC PLAYER DATA
========================= */

const players = [
    {
        name: "Nguyễn Minh Đăng",
        number: "--",
        position: "Chưa chọn",
        wanted1: "Chưa chọn",
        wanted2: "Chưa chọn",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Nguyễn Gia Bảo",
        number: "--",
        position: "Chưa chọn",
        wanted1: "Chưa chọn",
        wanted2: "Chưa chọn",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Lữ Triều Minh",
        number: "--",
        position: "Chưa chọn",
        wanted1: "Chưa chọn",
        wanted2: "Chưa chọn",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Phạm Đăng Vương",
        number: "--",
        position: "Chưa chọn",
        wanted1: "Chưa chọn",
        wanted2: "Chưa chọn",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Phạm Huỳnh Trường Giang",
        number: "--",
        position: "Chưa chọn",
        wanted1: "Chưa chọn",
        wanted2: "Chưa chọn",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Hoàng Gia Nguyễn",
        number: "--",
        position: "Chưa chọn",
        wanted1: "Chưa chọn",
        wanted2: "Chưa chọn",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Nguyễn Hải Lân",
        number: "--",
        position: "Chưa chọn",
        wanted1: "Chưa chọn",
        wanted2: "Chưa chọn",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Nguyễn Trung Kiên",
        number: "--",
        position: "Chưa chọn",
        wanted1: "Chưa chọn",
        wanted2: "Chưa chọn",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Trần Uy Dũng",
        number: "--",
        position: "Chưa chọn",
        wanted1: "Chưa chọn",
        wanted2: "Chưa chọn",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Nguyễn Đăng Phong",
        number: "--",
        position: "Chưa chọn",
        wanted1: "Chưa chọn",
        wanted2: "Chưa chọn",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Nguyễn Đức Toàn",
        number: "--",
        position: "Chưa chọn",
        wanted1: "Chưa chọn",
        wanted2: "Chưa chọn",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Trần Quang Vinh",
        number: "--",
        position: "Chưa chọn",
        wanted1: "Chưa chọn",
        wanted2: "Chưa chọn",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Hồ Hữu Khôi Nguyên",
        number: "--",
        position: "Chưa chọn",
        wanted1: "Chưa chọn",
        wanted2: "Chưa chọn",
        goals: 0,
        assists: 0,
        rating: 0
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
                ${player.number}
            </div>

            <h3>${player.name}</h3>

            <span class="player-position">
                ⚽ ${player.position}
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
