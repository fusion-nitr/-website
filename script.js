const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li");

window.addEventListener('mousemove', cursor);

function cursor(e){
	mouseCursor.style.top = e.pageY + 'px'
	mouseCursor.style.left = e.pageX + 'px'
}

Array.from(navLinks).forEach(link => {
	link.addEventListener('mouseleave', () => {
		mouseCursor.classList.remove('link-grow');
		link.classList.remove('hovered-link');
	})

	link.addEventListener('mouseover', () => {
		mouseCursor.classList.add('link-grow');
		link.classList.add('hovered-link');
	})
});

$(window).load(function() {
	$(".loader").fadeOut("slow");;
});