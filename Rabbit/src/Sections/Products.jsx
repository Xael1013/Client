import {React, useState, useEffect} from 'react'

const products = [
  { id: 1, name: "Product 1", image: "/assets/rabbit1.jpg" },
  { id: 2, name: "Product 2", image: "/assets/rabbit2.jpg" },
  { id: 3, name: "Product 3", image: "/assets/rabbit3.jpg" },
  { id: 4, name: "Product 4", image: "/assets/rabbit1.jpg" },
  { id: 5, name: "Product 5", image: "/assets/rabbit2.jpg" },
  { id: 6, name: "Product 6", image: "/assets/rabbit3.jpg" },
];



export default function Products() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);
    // const maxIndex = products.length - itemsPerView;

useEffect(() => {
  const handleResize = () => {
    setItemsPerView(window.innerWidth >= 768 ? 3 : 1);
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

    const nextSlide = () => {
  setCurrentIndex((prev) =>
    prev >= products.length - itemsPerView ? 0 : prev + 1
  );
};

    const prevSlide = () => {
  setCurrentIndex((prev) =>
    prev <= 0 ? products.length - itemsPerView : prev - 1
  );
};

return (
    <section className='products-hero' id='products'>
        <div className='product-content'>
            <h1 className='product-title'>Do you want MORE  information? Contact US Now!</h1>

            <div className="carousel-wrapper">
                <button className="arrow left" onClick={prevSlide}>
                    ❮
                </button>

                <div className="carousel">
                    <div
                    className="carousel-track"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
                    }}
                    >
                    {products.map((product) => (
                        <div className="product" key={product.id}>
                        <div className="product-name">{product.name}</div>
                        <img
                            className="product-image"
                            src={product.image}
                            alt={product.name}
                        />
                        </div>
                    ))}
                    </div>
                </div>

                <button className="arrow right" onClick={nextSlide}>
                    ❯
                </button>
            </div>
        </div>
    </section>
  )
}
