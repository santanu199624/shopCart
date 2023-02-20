import { ProductCard } from "../components";

export const Home = () => {

  const products = [
    {
      "id": 1,
      "name": "sony",
      "price": 999,
      "image": "/assets/images/p1.jpg"
    },

    {
      "id": 2,
      "name": "boat",
      "price": 9999,
      "image": "/assets/images/p2.jpg"
    },
    
  ]
  return (
    <main>
      <section className="products">
        { products.map((product)=>(

      <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}


