const images = document.querySelectorAll(".lazy");

const lazyLoad = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-src");
        img.setAttribute("src", src);
        img.classList.remove("lazy");
        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

images.forEach(lazyLoad);
