import { signIn } from "@/auth";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";

        await signIn("google");
      }}
    >
      <button type="submit">
        Continue with Google
      </button>
    </form>
  );
}