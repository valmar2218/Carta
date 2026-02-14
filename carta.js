function cambiar(imagenPresionada) {

    imagenPresionada.classList.add("fade-out");

    setTimeout(() => {

        if (imagenPresionada.src.includes("1.png")) {
            imagenPresionada.src = "2.png";

        } else if (imagenPresionada.src.includes("2.png")) {
            imagenPresionada.src = "3.png";

        } else if (imagenPresionada.src.includes("3.png")) {
            imagenPresionada.src = "4.png";

        } else if (imagenPresionada.src.includes("4.png")) {
            imagenPresionada.src = "1.png";
        }

        imagenPresionada.classList.remove("fade-out");

    }, 300);
}
