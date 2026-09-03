import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminContent() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/products");
  }

  return (
    <div>
      <h1>Admin Products</h1>

      <p>Welcome {session.user.name}</p>
    </div>
  );
}