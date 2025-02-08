class Amor {
    constructor(amor) {
        this.amor = document.getElementById(amor);
        this.mensajeElemento = document.getElementById("mensaje");
        this.mensajes = [
            "Eres lo mejor que me ha pasado ❤️",
            "Cada día a tu lado es un regalo 🎁",
            "Tu sonrisa ilumina mi mundo ☀️",
            "Te amo más de lo que las palabras pueden expresar 💕",
            "Eres mi persona favorita en el universo 🌎💖",
            "Tu amor ilumina mi vida como el sol ilumina el día ☀️💖",
            "Cada latido de mi corazón susurra tu nombre ❤️",
            "A tu lado, todos los momentos son mágicos ✨",
            "Eres mi sueño hecho realidad 💫",
            "Tu amor es la melodía más hermosa en mi vida 🎶",
            "Cada beso tuyo es un viaje a la felicidad 😘",
            "Amo cada instante que paso a tu lado 💕",
            "Eres mi refugio, mi paz y mi alegría 🌈",
            "Tu amor es el regalo más hermoso que la vida me ha dado 🎁",
            "Eres mi estrella en la noche más oscura ⭐",
            "Cuando estoy contigo, el mundo se detiene 🌍💖",
            "Mi amor por ti no tiene límites ni fronteras 🚀",
            "Eres el latido más dulce de mi corazón ❤️",
            "Cada abrazo tuyo es mi hogar 🏡💖",
            "Eres mi todo, mi razón de ser 💞",
            "Cada palabra tuya es una caricia para mi alma ✨",
            "Eres el poema más hermoso que jamás se ha escrito 📜💖",
            "Sin ti, mi vida no tendría color ni alegría 🎨💘",
            "Eres mi persona favorita en el mundo entero 🌍❤️",
            "Tus ojos reflejan la belleza del universo ✨",
            "Contigo, cada día es una nueva aventura 💕",
            "Tu risa es mi sonido favorito 🎶😍",
            "Me enamoro de ti más y más cada día 💗",
            "Eres mi destino, mi presente y mi futuro 💞",
            "Mi amor por ti es eterno, sin final ni principio 💖",
            "Cada palabra de amor que digo es solo para ti 💬💕"
        ];
        
        this.amor.addEventListener("click", () => this.mostrarMensaje());
    }

    mostrarMensaje() {
        const mensajeAleatorio = this.mensajes[Math.floor(Math.random() * this.mensajes.length)];
        this.mensajeElemento.textContent = mensajeAleatorio;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    new Amor('amor');
});
