import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'vendors/SplitText';
import { ScrollSmoother } from 'vendors/ScrollSmoother';
import { onWindowResize, getWindowSize, isTouchDevice } from '../../utils';
import { BREAKPOINTS } from '../../utils/constants';

const animationInit = (
	section = '.js-fade-trigger',
	heroSection = '.js-hero',
	partnersSection = '.js-partners',
	item = '.js-fade-item',
	subTitle = '.js-subtitle-fade',
	quote = '.js-quote',
	decorText = '.decor_text_in',
	description = '.js-description-fade',
	link = '.js-link-fade',
	bg = '.js-bg-fade',
	img = '.js-img-parallax',
) => {
	gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

	const $sections = document.querySelectorAll(section);
	if (!$sections.length) return;
	const $heroSections = document.querySelector(heroSection);
	if (!$heroSections) return;
	const $partnersSections = document.querySelector(partnersSection);
	if (!$partnersSections) return;
	const $imgParallax = document.querySelectorAll(img);
	if (!$imgParallax.length) return;

	let array = [];

	$sections.forEach(($section, index) => {
		const $item = $section.querySelectorAll(item);
		const $subTitle = $section.querySelector(subTitle);
		const $quote = $section.querySelector(quote);
		if (!$quote) return;
		const mySplitText = new SplitText($quote, {
			type: 'lines,words,chars',
			linesClass: 'split-line',
		});
		const $textDecor = $section.querySelector(decorText);
		const $description = $section.querySelectorAll(description);
		const $link = $section.querySelectorAll(link);
		const $imgParallax = $section.querySelectorAll(img);

		let obj = {
			$section,
			$item: Array.from($item),
			$subTitle,
			mySplitText,
			$description: Array.from($description),
			$link: Array.from($link),
			$imgParallax: Array.from($imgParallax),
			$textDecor,
		};

		array.push(obj);
	});

	let isDesktopScreen;
	let { windowWidth } = getWindowSize();
	let scrollSmootherInited = false;
	let smoother;

	const initScrollSmoother = () => {
		smoother = ScrollSmoother.create({
			wrapper: '.wrapper',
			content: '.wrapper_in',
			smooth: 2,
			effects: true,
		});

		smoother.effects(Array.from($imgParallax), {
			speed: 'auto',
		});
	};

	const killScrollSmoother = () => {
		smoother.kill();
	};

	onWindowResize(() => {
		windowWidth = getWindowSize().windowWidth;
		isDesktopScreen = windowWidth > BREAKPOINTS.mediaPoint1;

		if (isDesktopScreen) {
			if (!scrollSmootherInited) {
				initScrollSmoother();
				scrollSmootherInited = true;
			}
		} else {
			if (scrollSmootherInited) {
				killScrollSmoother();
				scrollSmootherInited = false;
			}
		}
	});

	const initHero = () => {
		const $quote = $heroSections.querySelectorAll(quote);
		const $bg = $heroSections.querySelectorAll(bg);
		const $subTitle = $heroSections.querySelectorAll(subTitle);
		const $description = $heroSections.querySelectorAll(description);
		const $link = $heroSections.querySelectorAll(link);
		const mySplitText = new SplitText($quote, {
			type: 'lines,words,chars',
			linesClass: 'split-line',
		});
		const { chars } = mySplitText;
		const allDone = () => {
			mySplitText.revert();
		};

		const tl = gsap.timeline({
			onComplete: allDone,
		});

		const setHeroState = (el) => {
			gsap.set(el, {
				opacity: 0,
			});
		};
		setHeroState($bg);
		setHeroState($subTitle);
		setHeroState($description);
		setHeroState($link);
		gsap.set(chars, {
			opacity: 0,
			y: 80,
		});

		tl
			.to($bg, {
				opacity: 1,
				duration: 0.5,
			})
			.to($subTitle, {
				opacity: 1,
				delay: 0.2,
				duration: 0.5,
			})
			.to(chars, {
				opacity: 1,
				duration: 0.5,
				delay: 0.1,
				ease: 'circ.out',
				y: 0,
				stagger: 0.02,
			})
			.to($description, {
				opacity: 1,
				delay: 0.1,
				duration: 0.4,
			})
			.to($link, {
				opacity: 1,
				duration: 0.4,
			});
	};
	initHero();

	const initPartners = () => {
		const $item = $partnersSections.querySelectorAll(item);
		if (!$item.length) return;

		const tl = gsap.timeline();

		if ($item.length) {
			tl.fromTo($item, {
				opacity: 0,
				y: 50,
			}, {
				opacity: 1,
				y: 0,
				duration: 0.4,
				stagger: 0.2,
			});
		}
	};
	initPartners();

	array.forEach((section, index) => {
		const tl = gsap.timeline({
			paused: true,
		});
		const { chars } = section.mySplitText;
		const allDone = () => {
			section.mySplitText.revert();
		};

		ScrollTrigger.create({
			trigger: section.$section,
			start: 'top 65%',
			end: 'bottom center',
			markers: true,
			animation: tl,
		});

		tl.addLabel('step_1');

		if (section.$subTitle) {
			tl.fromTo(section.$subTitle, {
				opacity: 0,
			}, {
				opacity: 1,
				delay: 0.2,
				duration: 0.4,
			}, 'step_1');
		}

		if (section.$item.length) {
			tl.fromTo(section.$item, {
				opacity: 0,
				y: 100,
			}, {
				opacity: 1,
				duration: 0.4,
				delay: 0.3,
				y: 0,
				stagger: 0.6,
			}, 'step_1+=0.6');
		}
		// tl.addLabel('step_2');
		if (chars) {
			tl.fromTo(chars, {
				opacity: 0,
				y: 80,
			}, {
				opacity: 1,
				duration: 0.4,
				delay: 0.2,
				ease: 'circ.out',
				y: 0,
				stagger: 0.02,
			}, 'step_1+=0.4');
		}
		// tl.addLabel('step_3');
		if (section.$description.length) {
			tl.fromTo(section.$description, {
				opacity: 0,
			}, {
				opacity: 1,
				delay: 0.2,
				duration: 0.4,
			}, 'step_1+=0.8');
		}

		tl.addLabel('step_4');
		if (section.$link.length) {
			tl.fromTo(section.$link, {
				opacity: 0,
			}, {
				opacity: 1,
				duration: 0.4,
			}, 'step_4');
		}
		if (section.$textDecor) {
			tl.fromTo(section.$textDecor, {
				opacity: 0,
				y: 60,
			}, {
				opacity: 1,
				duration: 0.4,
				y: 0,
				onComplete: allDone,
			}, 'step_4');
		}
	});
};

export default animationInit;
