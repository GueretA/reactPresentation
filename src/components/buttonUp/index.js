import React, { useEffect, useState } from "react";
import {Button} from "@nextui-org/react";
import { GoUp } from '../../assets/go-up.jsx'

function ButtonUp() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
	  const toggleVisibility = () => {
		// if the user scrolls down, show the button
		window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
	  }
	  // listen for scroll events
	  window.addEventListener("scroll", toggleVisibility)
  
	  // clear the listener on component unmount
	  return () => {
		window.removeEventListener("scroll", toggleVisibility)
	  }
	}, [])

	  // handles the animation when scrolling to the top
	  const scrollToTop = () => {
		isVisible &&
		  window.scrollTo({
			top: 0,
			behavior: "smooth",
		  })
	  }

	return (
		<div className="flex gap-4 items-right">
			<Button isIconOnly color="warning" variant="faded" aria-label="Retour en haut"  className={`fixed bottom-4 right-4 rounded-full p-2 outline-none transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}>
				<GoUp />
			</Button>
		</div>
	)
};

export default ButtonUp;