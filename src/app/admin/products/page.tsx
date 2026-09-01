import { Suspense } from "react";

import AdminContent from "./AdminContent";

export default function AdminProductsPage() {
  return (
    <div>
      <h1>Admin Products</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <AdminContent />
      </Suspense>
    </div>
  );
}