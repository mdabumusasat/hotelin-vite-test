import { useEffect, useState } from "react";
import BackToTop from "../components/BackToTop";

// Import all footer components
import Footer from "../components/Footers/Footer";
import Footer2 from "../components/Footers/Footer2";
import Footer3 from "../components/Footers/Footer3";

// Import all header components
import Header from "../components/Headers/Header";
import Header2 from "../components/Headers/Header2";
import Header3 from "../components/Headers/Header3";

const Layout = ({ children, HeaderStyle, FooterStyle, styleMode }) => {
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState(0);
    const handleToggle = () => setSearchToggled(!searchToggle);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    }, [scroll]);

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-visible");
    };
    const handleRemove = () => {
        document.body.classList.remove("mobile-menu-visible");
    };

    useEffect(() => {
        if (styleMode === "Blue") {
            document.body.classList.add("blue-mode");
            document.body.classList.remove("green-mode", "cyan-mode", "coral-mode");
        } else if (styleMode === "Green") {
            document.body.classList.add("green-mode");
            document.body.classList.remove("blue-mode", "cyan-mode", "coral-mode");
        } else if (styleMode === "Cyan") {
            document.body.classList.add("cyan-mode");
            document.body.classList.remove("blue-mode", "green-mode", "coral-mode");
        } else if (styleMode === "Coral") {
            document.body.classList.add("coral-mode");
            document.body.classList.remove("blue-mode", "green-mode", "cyan-mode");
        }else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("blue-mode", "green-mode", "cyan-mode", "coral-mode");
        }
    }, [styleMode]);


    // **Header Selection**
    const renderHeader = () => {
        switch (HeaderStyle) {
            default: return <Header handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "two": return <Header2 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "three": return <Header3 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
        }
    };

    // **Footer Selection**
    const renderFooter = () => {
        switch (FooterStyle) {
            default: return <Footer />;
            case "two": return <Footer2 />;
            case "three": return <Footer3 />;
        }
    };

    return (
        <>
            {renderHeader()}
            {children}
            {renderFooter()}
            <BackToTop />
        </>
    );
};

export default Layout;
