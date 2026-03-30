window.addEventListener("load", () => {

  gsap.registerPlugin(Flip);

  const img = document.querySelector(".profile-img");

  // salva estado inicial (centralizado com position fixed)
  const state = Flip.getState(img);

  // 🔥 REMOVE o estilo que centraliza (volta pro grid)
  img.style.position = "static";
  img.style.top = "auto";
  img.style.left = "auto";
  img.style.transform = "none";

  // anima transição
  Flip.from(state, {
    duration: 1.2,
    ease: "power3.inOut"
  });

  // mostra o resto depois
  gsap.to(".container > *:not(.profile-img)", {
    opacity: 1,
    delay: 1.5,
    stagger: 0.1
  });

});