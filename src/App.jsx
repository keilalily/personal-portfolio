import { useRef, useEffect } from 'react';
import { About, Experiences, Hero, Header, Projects, SkillSet } from './components';

function App() {
	const glowRef = useRef(null);

	// Cursor glow with smooth trailing
	useEffect(() => {
		let mouseX = 0, mouseY = 0;
		let glowX = 0, glowY = 0;

		const handleMouseMove = (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
		};

		document.addEventListener('mousemove', handleMouseMove);

		const animateGlow = () => {
			glowX += (mouseX - glowX) * 0.15; // smooth easing
			glowY += (mouseY - glowY) * 0.15;

			const glow = glowRef.current;
			if (glow) {
				glow.style.left = glowX + 'px';
				glow.style.top = glowY + 'px';
				glow.style.opacity = '1';
			}

			requestAnimationFrame(animateGlow);
		};

		animateGlow();

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	// Scroll reveal & smooth nav scrolling
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) entry.target.classList.add('visible');
				});
			},
			{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
		);

		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

		const anchors = document.querySelectorAll('a[href^="#"]');
		const handleClick = (e) => {
			e.preventDefault();
			const target = document.querySelector(e.currentTarget.getAttribute('href'));
			if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		};
		anchors.forEach((anchor) => anchor.addEventListener('click', handleClick));

		return () => {
			observer.disconnect();
			anchors.forEach((anchor) => anchor.removeEventListener('click', handleClick));
		};
	}, []);

	return (
		<main className="flex flex-col">
			<div
				ref={glowRef}
				className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-0"
				style={{
				background:
					'radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)',
				transform: 'translate(-50%, -50%)',
				transition: 'opacity 0.3s',
				}}
			></div>

			<Header />
			<Hero />
			<About />
			<SkillSet />
			<Experiences />
		</main>
	);
}

export default App;