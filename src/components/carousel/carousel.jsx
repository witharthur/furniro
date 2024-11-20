import React, {useState} from "react";
import {ChevronRight} from "lucide-react";
import "./Carousel.css";
import {assets} from "../../assets/assets.js";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: "01",
            type: "Bed Room",
            title: "Inner Peace",
            image: assets.slide_photo_1,
        },
        {
            id: "02",
            image: assets.slide_photo_2,
        },
        {
            id: "03",
            image: assets.slide_photo_3,
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-grid">
                {/* Left content */}
                <div className="content-section">
                    <h1 className="main-title">50+ Beautiful rooms inspiration</h1>
                    <p className="main-description">
                        Our designer already made a lot of beautiful prototypes of rooms
                        that inspire you.
                    </p>
                    <button className="explore-button">Explore More</button>
                </div>

                {/* Right slider */}
                <div className="slider-section">
                    <div className="slider-overflow">
                        <div
                            className="slider-track"
                            style={{transform: `translateX(-${currentSlide * 72}%)`}}
                        >
                            {slides.map((slide, index) => (
                                <div key={slide.id} className="slide">
                                    <img
                                        src={slide.image}
                                        alt={slide.title || "Slide Image"}
                                        className="slide-image"
                                    />
                                    {index === 0 && (
                                        <div className="slide-info-overlay">
                                            <div className="slide-info-content">
                                                {/* <p className="slide-meta">01 — Bed Room</p>
                                                <h3 className="slide-title">Inner Peace</h3> */}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation button */}
                    <button className="slide-arrow" onClick={nextSlide}>
                        <ChevronRight className="icon"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
