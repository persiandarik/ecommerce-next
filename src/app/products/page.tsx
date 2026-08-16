import prisma from "@/lib/prisma"

export default async function ProductsPage() {

  const products = await prisma.product.findMany()
  // console.log(products);
  
  return (
    <div>
      <h1>Products</h1>

      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}