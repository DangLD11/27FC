/* =========================
   PLAYER PHOTOS
========================= */

.player-card {
    padding: 0;
    overflow: hidden;
    position: relative;
}

.player-photo {
    height: 190px;
    position: relative;
    overflow: hidden;
    background:
        linear-gradient(
            180deg,
            #20262d 0%,
            #11151a 100%
        );
}

.player-photo img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center;

    transition: transform 0.35s ease;
}

.player-card:hover .player-photo img {
    transform: scale(1.05);
}

.player-photo::after {
    content: "";

    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            180deg,
            transparent 45%,
            rgba(8, 10, 13, 0.85) 100%
        );

    pointer-events: none;
}

.player-photo-placeholder {
    position: absolute;

    inset: 0;

    display: none;

    align-items: center;
    justify-content: center;

    font-size: 55px;

    opacity: 0.15;
}

.player-number {
    position: absolute;

    left: 14px;
    bottom: 10px;

    z-index: 3;

    color: #d9ff00;

    font-family: "Barlow Condensed", sans-serif;
    font-size: 34px;
    font-weight: 800;

    text-shadow:
        0 2px 8px rgba(0, 0, 0, 0.8);
}

.player-card-info {
    padding: 16px 18px 18px;
}

.player-card h3 {
    margin-top: 0;
    font-size: 15px;
    line-height: 1.3;
}

.player-position {
    margin-top: 8px;
}

.player-wanted {
    margin-top: 12px;
}


/* MOBILE */

@media (max-width: 650px) {

    .player-photo {
        height: 165px;
    }

    .player-number {
        font-size: 29px;
        left: 11px;
        bottom: 7px;
    }

    .player-card-info {
        padding: 13px;
    }

    .player-card h3 {
        font-size: 13px;
    }

}

@media (max-width: 400px) {

    .player-photo {
        height: 210px;
    }

}
