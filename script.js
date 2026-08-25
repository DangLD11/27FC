/* =========================
   27FC PLAYER DATA
========================= */

const players = [

    {
        name: "Nguyễn Minh Đăng",
        number: 16,
        position: ["Fixo", "Ala"],
        image: "Minhdang.jpg",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Nguyễn Gia Bảo",
        number: 20,
        position: ["Pivot"],
        image: "Giabao.jpg",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Phạm Đăng Vương",
        number: 36,
        position: ["Pivot", "Ala"],
        image: "Dangvuong.jpg",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Nguyễn Đức Toàn",
        number: 12,
        position: ["Fixo"],
        image: "Ductoan.jpg",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Hoàng Gia Nguyễn",
        number: 5,
        position: ["Fixo"],
        image: "Gianguyen.jpg",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Nguyễn Trung Kiên",
        number: 1,
        position: ["GK", "Fixo"],
        image: "Trungkien.jpg",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Lữ Triều Minh",
        number: 7,
        position: ["Fixo", "Pivot"],
        image: "Trieuminh.jpg",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Nguyễn Bá Khôi",
        number: 2,
        position: ["GK", "Fixo"],
        image: "Bakhoi.jpg",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Phạm Huỳnh Trường Giang",
        number: 67,
        position: ["Fixo"],
        image: "Truonggiang.jpg",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Hồ Hữu Khôi Nguyên",
        number: 10,
        position: ["Ala", "Fixo"],
        image: "Khoinguyen.jpg",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Trần Uy Dũng",
        number: 15,
        position: ["Pivot", "Fixo"],
        image: "Uydung.jpg",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Nguyễn Hải Lân",
        number: 17,
        position: ["Fixo", "Ala"],
        image: "Hailan.jpg",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Nguyễn Đăng Phong",
        number: 3,
        position: ["Fixo", "GK"],
        image: "Dangphong.jpg",
        goals: 0,
        assists: 0,
        rating: 0
    },

    {
        name: "Trần Quang Vinh",
        number: 26,
        position: ["Pivot", "Fixo"],
        image: "Quangvinh.jpg",
        goals: 0,
        assists: 0,
        rating: 0
    }

];


/* =========================
   POSITION ICON
========================= */

function getPositionIcon(position) {

    if (position === "GK") return "🧤";
    if (position === "Fixo") return "🛡️";
    if (position === "Ala") return "⚡";
    if (position === "Pivot") return "🎯";

    return "⚽";
}


/* =========================
   POSITION TEXT
========================= */

function getPositionText(positions) {

    return positions.map(position => {
        return getPositionIcon(position) + " " + position;
    }).join(" · ");
}


/* =========================
   RENDER PLAYERS
========================= */

function renderPlayers(list) {

    const container = document.getElementById("playersGrid");

    if (!container) return;

    container.innerHTML = "";

    list.forEach(player => {

        const card = document.createElement("div");

        card.className = "player-card";

        card.innerHTML = `
            <div class="player-photo">

                <img
                    src="players/${player.image}"
                    alt="${player.name}"
                    onerror="this.style.display='none';"
                >

                <div class="player-number">
                    #${player.number}
                </div>

            </div>

            <div class="player-card-info">

                <h3>${player.name}</h3>

                <span class="player-position">
                    ${getPositionText(player.position)}
                </span>

                <div class="player-wanted">
                    Số áo:
                    <b>#${player.number}</b>
                </div>

            </div>
        `;

        container.appendChild(card);
    });
}


/* =========================
   FILTER PLAYERS
========================= */

function filterPlayers(position, button) {

    document.querySelectorAll(".filter").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    if (position === "all") {
        renderPlayers(players);
        return;
    }

    const filtered = players.filter(player =>
        player.position.includes(position)
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

    const playerCountElement =
        document.getElementById("playerCount");

    const goalCountElement =
        document.getElementById("goalCount");

    const matchCountElement =
        document.getElementById("matchCount");

    if (playerCountElement) {
        playerCountElement.textContent = playerCount;
    }

    if (goalCountElement) {
        goalCountElement.textContent = goalCount;
    }

    if (matchCountElement) {
        matchCountElement.textContent = "1";
    }
}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const menu =
        document.getElementById("mobileMenu");

    if (menu) {
        menu.classList.toggle("show");
    }
}


function closeMenu() {

    const menu =
        document.getElementById("mobileMenu");

    if (menu) {
        menu.classList.remove("show");
    }
}


/* =========================
   START
========================= */

document.addEventListener("DOMContentLoaded", function () {

    renderPlayers(players);

    updateStats();

});
