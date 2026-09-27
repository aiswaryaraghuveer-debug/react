import React from "react";
import { ArrowUp } from "lucide-react";
function Footer({ scrollTo }) {
    return(
       <footer>
        <span>Ash ♥</span>
        <span>Built with React · Designed by me · 2026</span>
        <button onClick={() => scrollTo("home")} aria-label="Back to top"><ArrowUp /></button>
      </footer>
    );
}
export default Footer;
