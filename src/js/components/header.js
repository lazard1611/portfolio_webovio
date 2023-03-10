import { exist } from 'utils';
import gsap from 'gsap';
import { onWindowScroll } from '../utils/index';

const header = () => {
	const selectors = {
		header: '.js-header',
		burger: '.js-header-burger',
		menu: '.js-header-nav',
		linkMenu: '.js-header-link',
	};
	const classNames = {
		openMenu: 'body--open_menu',
		headerScrollState: 'header--scroll_state',
	};

	const $body = document.body;
	if (!exist($body)) return;
	const $burger = document.querySelector(selectors.burger);
	if (!exist($burger)) return;

	const $html = document.documentElement;

	// $burger.addEventListener('click', () => {
	// 	$body.classList.toggle(classNames.openMenu);
	// });

	const $header = document.querySelector(selectors.header);
	if (!exist($header)) return;

	const $nav = document.querySelector(selectors.menu);
	if (!exist($nav)) return;

	function initAnim(section) {
		const $fadeItems = section.querySelectorAll('.js-fade-item');
		$fadeItems.forEach(($elem, index) => {
			gsap.fromTo(
				$elem,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.8,
					delay: index * 0.3,
					ease: 'none',
				},
			);
		});
	}

	initAnim($header);

	let prevScrollPos = window.pageYOffset;

	function headerScroll() {
		prevScrollPos = window.pageYOffset;

		if (prevScrollPos > 0 && !$header.classList.contains(classNames.headerScrollState)) {
			$header.classList.add(classNames.headerScrollState);
		} else if (prevScrollPos === 0) {
			$header.classList.remove(classNames.headerScrollState);
		}
	}

	document.addEventListener('click', (e) => {
		const targetElement = e.target;

		if (targetElement.closest(selectors.burger)) {
			$body.classList.toggle(classNames.openMenu);
			initAnim($nav);
		}

		if (targetElement.closest(selectors.linkMenu)) {
			$body.classList.remove(classNames.openMenu);

			const goTo = targetElement.closest(selectors.linkMenu).dataset.goto;
			const goToElement = document.querySelector(goTo);
			const headerHeight = $header.offsetHeight;

			if (goToElement) {
				window.scrollTo({
					top: goToElement.offsetTop - headerHeight,
					behavior: 'smooth',
				});
			}
			e.preventDefault();
		}
	});

	onWindowScroll(headerScroll);
};

export default header;
