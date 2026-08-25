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
        rating: 80
    },

    {
        name: "Nguyễn Gia Bảo",
        number: 20,
        position: ["Pivot"],
        image: "Giabao.jpg",
        goals: 0,
        assists: 0,
        rating: 80
    },

    {
        name: "Phạm Đăng Vương",
        number: 36,
        position: ["Pivot", "Ala"],
        image: "Dangvuong.jpg",
        goals: 0,
        assists: 0,
        rating: 80
    },

    {
        name: "Nguyễn Đức Toàn",
        number: 12,
        position: ["Fixo"],
        image: "Ductoan.jpg",
        goals: 0,
        assists: 0,
        rating: 80
    },

    {
        name: "Hoàng Gia Nguyễn",
        number: 5,
        position: ["Fixo"],
        image: "Gianguyen.jpg",
        goals: 0,
        assists: 0,
        rating: 80
    },

    {
        name: "Nguyễn Trung Kiên",
        number: 1,
        position: ["GK", "Fixo"],
        image: "Trungkien.jpg",
        goals: 0,
        assists: 0,
        rating: 80
    },

    {
        name: "Lữ Triều Minh",
        number: 7,
        position: ["Fixo", "Pivot"],
        image: "Trieuminh.jpg",
        goals: 0,
        assists: 0,
        rating: 80
    },

    {
        name: "Nguyễn Bá Khôi",
        number: 2,
        position: ["GK", "Fixo"],
        image: "Bakhoi.jpg",
        goals: 0,
        assists: 0,
        rating: 80
    },

    {
        name: "Phạm Huỳnh Trường Giang",
        number: 67,
        position: ["Fixo"],
        image: "Truonggiang.jpg",
        goals: 0,
        assists: 0,
        rating: 80
    },

    {
        name: "Hồ Hữu Khôi Nguyên",
        number: 10,
        position: ["Ala", "Fixo"],
        image: "Khoinguyen.jpg",
        goals: 0,
        assists: 0,
        rating: 80
    },

    {
        name: "Trần Uy Dũng",
        number: 15,
        position: ["Pivot", "Fixo"],
        image: "Uydung.jpg",
        goals: 0,
        assists: 0,
        rating: 80
    },

    {
        name: "Nguyễn Hải Lân",
        number: 17,
        position: ["Fixo", "Ala"],
        image: "Hailan.jpg",
        goals: 0,
        assists: 0,
        rating: 80
    },

    {
        name: "Nguyễn Đăng Phong",
        number: 3,
        position: ["Fixo", "GK"],
        image: "Dangphong.jpg",
        goals: 0,
        assists: 0,
        rating: 80
    },

    {
        name: "Trần Quang Vinh",
        number: 26,
        position: ["Pivot", "Fixo"],
        image: "Quangvinh.jpg",
        goals: 0,
        assists: 0,
        rating: 80
    }

];


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

    const container =
        document.getElementById("playersGrid");

    if (!container) return;

    container.innerHTML = "";

    list.forEach(player => {

        const card =
            document.createElement("div");

        card.className = "player-card";

        card.style.cursor = "pointer";

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

        card.addEventListener("click", function () {

            openPlayerProfile(player);

        });

        container.appendChild(card);

    });
}


/* =========================
   PLAYER PROFILE
========================= */

function openPlayerProfile(player) {

    const oldPopup =
        document.getElementById("playerProfilePopup");

    if (oldPopup) {
        oldPopup.remove();
    }


    const popup =
        document.createElement("div");

    popup.id = "playerProfilePopup";

    popup.style.cssText = `
        position: fixed;
        inset: 0;
        z-index: 9999;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 20px;

        background: rgba(0,0,0,0.75);

        backdrop-filter: blur(8px);
    `;


    popup.innerHTML = `

        <div
            class="player-profile-box"
            style="
                position: relative;
                width: min(420px, 100%);
                max-height: 90vh;
                overflow-y: auto;

                background: #101419;
                border: 1px solid #30363d;
                border-radius: 18px;

                box-shadow:
                    0 20px 70px rgba(0,0,0,0.6);
            "
        >

            <!-- CLOSE -->

            <button
                id="closePlayerProfile"
                style="
                    position: absolute;
                    right: 15px;
                    top: 15px;
                    z-index: 5;

                    width: 36px;
                    height: 36px;

                    border: none;
                    border-radius: 50%;

                    background: rgba(0,0,0,0.65);
                    color: white;

                    font-size: 20px;
                    cursor: pointer;
                "
            >
                ×
            </button>


            <!-- PLAYER IMAGE -->

            <div
                style="
                    height: 300px;
                    position: relative;
                    overflow: hidden;

                    border-radius: 18px 18px 0 0;

                    background: #171c21;
                "
            >

                <img
                    src="players/${player.image}"
                    alt="${player.name}"
                    style="
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    "
                    onerror="
                        this.style.display='none';
                    "
                >

                <div
                    style="
                        position: absolute;
                        left: 20px;
                        bottom: 15px;

                        color: #d9ff00;

                        font-family:
                            'Barlow Condensed',
                            sans-serif;

                        font-size: 65px;
                        font-weight: 800;

                        text-shadow:
                            0 3px 12px rgba(0,0,0,0.8);
                    "
                >
                    #${player.number}
                </div>

            </div>


            <!-- PLAYER INFO -->

            <div style="padding: 25px;">

                <span
                    style="
                        color: #d9ff00;

                        font-size: 10px;
                        font-weight: 800;

                        letter-spacing: 1.5px;
                    "
                >
                    27FC PLAYER
                </span>


                <h2
                    style="
                        margin-top: 5px;

                        font-family:
                            'Barlow Condensed',
                            sans-serif;

                        font-size: 34px;
                        line-height: 1;
                    "
                >
                    ${player.name}
                </h2>


                <div
                    style="
                        margin-top: 15px;

                        display: inline-block;

                        padding: 7px 11px;

                        border-radius: 6px;

                        background: #20262d;

                        color: #ddd;

                        font-size: 11px;
                        font-weight: 700;
                    "
                >
                    ${getPositionText(player.position)}
                </div>


                <!-- STATS -->

                <div
                    style="
                        display: grid;

                        grid-template-columns:
                            repeat(3, 1fr);

                        gap: 8px;

                        margin-top: 25px;
                    "
                >

                    <!-- GOALS -->

                    <div
                        style="
                            padding: 15px 8px;

                            text-align: center;

                            background: #171c21;

                            border-radius: 10px;
                        "
                    >

                        <strong
                            style="
                                display: block;

                                color: #d9ff00;

                                font-family:
                                    'Barlow Condensed',
                                    sans-serif;

                                font-size: 28px;
                            "
                        >
                            ${player.goals}
                        </strong>

                        <small
                            style="
                                color: #777f88;
                                font-size: 9px;
                            "
                        >
                            BÀN THẮNG
                        </small>

                    </div>


                    <!-- ASSISTS -->

                    <div
                        style="
                            padding: 15px 8px;

                            text-align: center;

                            background: #171c21;

                            border-radius: 10px;
                        "
                    >

                        <strong
                            style="
                                display: block;

                                color: #d9ff00;

                                font-family:
                                    'Barlow Condensed',
                                    sans-serif;

                                font-size: 28px;
                            "
                        >
                            ${player.assists}
                        </strong>

                        <small
                            style="
                                color: #777f88;
                                font-size: 9px;
                            "
                        >
                            KIẾN TẠO
                        </small>

                    </div>


                    <!-- OVR -->

                    <div
                        style="
                            padding: 15px 8px;

                            text-align: center;

                            background: #171c21;

                            border-radius: 10px;
                        "
                    >

                        <strong
                            style="
                                display: block;

                                color: #d9ff00;

                                font-family:
                                    'Barlow Condensed',
                                    sans-serif;

                                font-size: 28px;
                            "
                        >
                            ${player.rating}
                        </strong>

                        <small
                            style="
                                color: #777f88;
                                font-size: 9px;
                            "
                        >
                            OVR
                        </small>

                    </div>

                </div>

            </div>

        </div>
    `;


    document.body.appendChild(popup);


    /* =========================
       CLOSE BUTTON
    ========================= */

    document
        .getElementById("closePlayerProfile")
        .addEventListener(
            "click",
            function () {

                popup.remove();

            }
        );


    /* =========================
       CLICK OUTSIDE
    ========================= */

    popup.addEventListener(
        "click",
        function (event) {

            if (event.target === popup) {

                popup.remove();

            }

        }
    );


    /* =========================
       ESC KEY
    ========================= */

    document.addEventListener(
        "keydown",
        function closeWithEscape(event) {

            if (event.key === "Escape") {

                popup.remove();

                document.removeEventListener(
                    "keydown",
                    closeWithEscape
                );

            }

        }
    );

}


/* =========================
   FILTER PLAYERS
========================= */

function filterPlayers(position, button) {

    document
        .querySelectorAll(".filter")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    if (position === "all") {

        renderPlayers(players);

        return;

    }


    const filtered =
        players.filter(player =>
            player.position.includes(position)
        );


    renderPlayers(filtered);

}


/* =========================
   QUICK STATS
========================= */

function updateStats() {

    const playerCount =
        players.length;


    const goalCount =
        players.reduce(
            (total, player) =>
                total + player.goals,
            0
        );


    const playerCountElement =
        document.getElementById("playerCount");

    const goalCountElement =
        document.getElementById("goalCount");

    const matchCountElement =
        document.getElementById("matchCount");


    if (playerCountElement) {

        playerCountElement.textContent =
            playerCount;

    }


    if (goalCountElement) {

        goalCountElement.textContent =
            goalCount;

    }


    if (matchCountElement) {

        matchCountElement.textContent =
            "1";

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

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderPlayers(players);

        updateStats();

    }
);
