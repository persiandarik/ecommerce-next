export default async function ProductReviews({
  productId,
}: {
  productId: number;
}) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <h2>Reviews</h2>
      <p>Reviews loaded!</p>
    </div>
  );
}