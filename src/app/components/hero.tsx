import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
       <section className="heroSection" id="home">
            <div className="imageContainer">
                <Image src="/images/titlepic.jpg" alt="A coffee cup and beans" height={400} width={400} />
            </div>
            <div className="textContainer">
                <h1>Bean & Blossom</h1>
                <p>
                At Nest &amp; Nectar, we believe coffee is more than just a drink – it&apos;s a ritual, a moment of warmth, and a spark for inspiration. Every cup we serve begins its journey in the world&apos;s most celebrated coffee-growing regions, where each bean is carefully handpicked and expertly roasted to bring out its unique character and depth.
                </p>
            </div>
       </section>
    );
};

export default Hero;

