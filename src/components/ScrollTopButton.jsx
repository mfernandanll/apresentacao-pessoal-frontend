import { animateScroll } from "react-scroll";
import { ArrowUp } from "phosphor-react";

// eslint-disable-next-line react/prop-types
export function ScrollTopButton({ isPageScrolled }) {
  const options = {
    duration: 800,
    smooth: true,
  };
  
  function handleScroll() {
    animateScroll.scrollToTop(options);
  }

  return (
    <>
      {
        isPageScrolled &&
        <button 
          className="
            fixed 
            bottom-6 right-6 z-10 
            text-xl py-3 px-3 
            bg-bg-secondary text-bg-white 
            border-none rounded-md 
            cursor-pointer 
            transition-opacity ease-in 
            hover:opacity-80 max-[425px]:hidden"
          onClick={handleScroll}>
          <ArrowUp weight='bold' />
        </button>
      }
    </>
  )
}