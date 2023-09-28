/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
import events from "events";

export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

/* Меню второго порядка */
export function subMenu(){
	const subMenuToggle = document.querySelector('.header .login_buttons .profile');
	const subMenuElement = document.querySelector('.header .user_menu');

	if (subMenuToggle) {
		subMenuToggle.addEventListener("click", (e) => {
			if (subMenuElement.classList.contains("open")) {
				subMenuElement.classList.remove("open");
			} else {
				subMenuElement.classList.add("open");
			}
		});

		document.addEventListener( 'click', (e) => {
			const withinBoundaries = e.composedPath().includes(subMenuToggle);
		 
			if ( ! withinBoundaries ) subMenuElement.classList.remove("open");
		})

	}

}