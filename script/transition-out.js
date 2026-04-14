document.addEventListener("DOMContentLoaded", () => {

  let isAnimating = false;

  document.querySelectorAll(".page-transition").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      if (isAnimating) return;
      isAnimating = true;

      const targetUrl = this.getAttribute("href");

      const tl = gsap.timeline({
        onComplete: () => {
          window.location.href = targetUrl;
        }
      });

      tl.to(".transition-item:not(.transition-zoom-out)", {
        opacity: 0,
        y: 30,
        filter: "blur(8px)",
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.in"
      });

      tl.to(".transition-zoom-out", {
        scale: 0.5,
        opacity: 0,
        filter: "blur(14px)",
        y: 20,
        duration: 1,
        ease: "power4.inOut"
      }, "-=0.2");
    });
  });

});