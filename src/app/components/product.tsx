import Image from "next/image";
import React from "react";


const Product = () => {
  return (
    <section className="productSection" id="product">
      <h3 className="sectionTitle">Coffee Shop</h3>
      <div className="productGrid">
        
        <article className="productItem">
          <h4 className="productTitle">Midnight Ember</h4>
          <p className="productDescription">
            A dark roast blend with deep, smoky flavors and hints of dark chocolate.
          </p>
          <div className="imageContainer">
            <Image src="/images/coffee01.jpg" height={400} width={300} alt="Midnight Ember coffee blend" />
          </div>
        </article>

        <article className="productItem">
          <h4 className="productTitle">Cloud Nine</h4>
          <p className="productDescription">
            A silky, delicate light roast with floral notes and hints of vanilla.
          </p>
          <div className="imageContainer">
            <Image src="/images/coffee02.jpg" height={400} width={300} alt="Cloud Nine coffee blend" />
          </div>
        </article>

        <article className="productItem">
          <h4 className="productTitle">Ironwood Bold</h4>
          <p className="productDescription">
            A robust, intense dark roast with earthy notes of cedar and a smoky finish.
          </p>
          <div className="imageContainer">
            <Image src="/images/coffee03.jpg" height={400} width={300} alt="Ironwood Bold coffee blend" />
          </div>
        </article>
        
      </div>
    </section>
  );
};

export default Product;
