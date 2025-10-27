document.addEventListener("mousemove", function (dets) {
    console.log("hey");
});

// 2. GSAP animation for the navigation bar
gsap.to(".nav", {
    backgroundColor: "#000000b4",
    duration: 0.5,
    height: "50px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: true
    }
});

// 3. GSAP animation for the main section background
gsap.to("#main", {
    backgroundColor: "#fa1111ff",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -50%",
        end: "top -100%",
        scrub: true // optional, adds smooth transition while scrolling
}
});
VanillaTilt.init(document.querySelector(".your-element"), {
		max: 25,
		speed: 400
	});
	
	//It also supports NodeList
	VanillaTilt.init(document.querySelectorAll(".your-element"));
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});