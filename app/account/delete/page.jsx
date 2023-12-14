"use client";

import { deleteUser } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/components/firebase";
import { useRouter } from "next/navigation";

export default function DeleteAccount() {
  const [user, loading] = useAuthState(auth);

  const router = useRouter();

  function deleteCurrentUser() {
    deleteUser(user)
      .then(() => {
        console.log(
          "Account with the email of " +
            user.email +
            " was successfully deleted."
        );
        router.push("/account/deleted");
      })
      .catch((error) => {
        throw new Error("Error while deleting account: " + error);
      });
  }

  return (
    <div>
      <h1>Delete Account</h1>
      <button onClick={deleteCurrentUser}>Delete</button>
    </div>
  );
}
