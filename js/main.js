function createScrollTrigger(item, endValue) {
  let color = item.getAttribute("data-bgcolor");

  ScrollTrigger.create({
      trigger: item,
      start: "0% 10%",
      end: endValue,
      toggleClass: ".sec-gsap",
      markers: false,

      onEnter: () => gsap.to("#container", {
          backgroundColor: color,
          duration: 1.1
      }),
      onEnterBack: () => gsap.to("#container", {
          backgroundColor: color,
          duration: 1.1
      }),
      onLeave: () => gsap.to("#container", {
          backgroundColor: "#000",
          duration: 1.1
      }),
      onLeaveBack: () => gsap.to("#container", {
          backgroundColor: "#000",
          duration: 1.1
      }),
  });

  const tl = gsap.timeline({
      scrollTrigger: {
          trigger: item,
          start: "0% 0%",
          end: endValue,
          markers: false,
          scrub: 1,
          pin: true,
      },
  });

  tl.to(item.querySelector(".sec-right"), {
      x: 0,
      duration: 1.1,
  });
}

if (window.innerWidth >= 768) {
  gsap.utils.toArray(".sec-gsap").forEach((item) => {
      createScrollTrigger(item, "+=400%");
  });
} else {
  gsap.utils.toArray(".sec-gsap").forEach((item) => {
      createScrollTrigger(item, "100%");
  });
}