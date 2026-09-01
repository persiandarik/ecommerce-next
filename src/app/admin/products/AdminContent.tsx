import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminContent() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <p>Welcome {session.user?.name}</p>
    </div>
  );
}