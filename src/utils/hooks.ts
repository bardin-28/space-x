import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

export const useScrollToElement = () => {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		// if not a hash link scroll to top
		if (hash === "") {
			window.scrollTo(0, 0);
		} else {
			// window.history.pushState("", "", " ");
			const id = hash.replace("#", "");
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [pathname, hash]); // do this on route change
};
