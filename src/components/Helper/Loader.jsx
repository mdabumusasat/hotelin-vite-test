import React from "react";

function Loader() {
    return (
        <div className="">
            <div id="preloader">
                <div className="preloader-loaded light">
                <div className="text-preloader-outer">
                    <div className="text-preloading">
                    <span className="text-split" data-text="D">D</span>
                    <span className="text-split" data-text="I">I</span>
                    <span className="text-split" data-text="G">G</span>
                    <span className="text-split" data-text="I">I</span>
                    <span className="text-split" data-text="T">T</span>
                    <span className="text-split" data-text="A">A</span>
                    <span className="text-split" data-text="A">A</span>
                    <span className="text-split" data-text="L">L</span>
                    </div>
                </div>
                <div className="preloader-slide slide-left"></div>
                <div className="preloader-slide slide-right"></div>
                </div>
            </div>
            <div className="page-wrapper-shape">
                <div className="anim-icons">
                <div className="image-1"><img src={LoaderImage1} alt="Image" /></div>
                <div className="image-2"><img src={LoaderImage2} alt="Image" /></div>
                </div>
            </div>
        </div>
    );
}

export default Loader;
