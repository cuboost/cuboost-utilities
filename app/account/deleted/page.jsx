import Link from "next/link";

export default function AccountDeleted() {
  return (
    <div>
      <h1>Your Account was Deleted</h1>
      <p>
        Your account was permanently deleted... We hope that you still got the
        most out of Cuboost Utilities, and that you will maybe consider joining
        us back. Thank you for being one of our users!
      </p>
      <Link href={"/sign-up"}>
        <button>Create a new account</button>
      </Link>
    </div>
  );
}
