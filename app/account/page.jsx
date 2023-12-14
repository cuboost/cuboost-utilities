"use client";

import { deleteUser, signOut, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import UserProfile from "../components/account/UserProfile";
import { auth } from "../components/firebase";
import SettingsContainer from "./SettingsContainer";
import { IoLogOut } from "react-icons/io5";
import { MdAccountCircle, MdDelete } from "react-icons/md";
import Link from "next/link";

export default function Account() {
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
      })
      .catch((error) => {
        throw new Error("Error while deleting account: " + error);
      });
  }

  function signOutCurrentUser() {
    signOut(auth)
      .then(() => {
        console.log(
          "Account with the email of " +
            user.email +
            " was successfully signed out."
        );
      })
      .catch((error) => {
        throw new Error("Error while signing out account: " + error);
      });
  }

  function updateCurrentUser() {
    updateProfile(auth.currentUser, {
      displayName: "Cuboost",
    })
      .then(() => {
        console.log(
          "Profile Updated: new name is " +
            user.displayName +
            " and new email is " +
            user.email
        );
      })
      .catch((error) => {
        throw new Error("Error while updating current user info: " + error);
      });
  }

  if (loading) if (!user) router.push("/sign-up");
  if (user)
    return (
      <div>
        <div className=" w-5/6 mx-auto bg-gradient-to-br from-slate-100/30 to-slate-300/50 backdrop-blur-2xl rounded-3xl px-6 py-7 mb-10">
          <UserProfile />

          <p>
            You are sign in{" "}
            {user.displayName ? (
              <span>
                as <span className="text-cyan-700">{user.displayName}</span>
              </span>
            ) : (
              ""
            )}{" "}
            with the email <span className="text-cyan-700">{user.email}</span>.
          </p>
        </div>

        <SettingsContainer
          title="Sign Out"
          descrition="Sign out of your current account..."
          whenClicked={signOutCurrentUser}
          icon={<IoLogOut />}
        />

        <Link href="/account/update">
          <SettingsContainer
            title="Update Account"
            descrition="Update your account's info..."
            icon={<MdAccountCircle />}
          />
        </Link>

        <Link href="/account/delete">
          <SettingsContainer
            title="Delete Account"
            descrition="Permanently delete your account..."
            icon={<MdDelete />}
          />
        </Link>
      </div>
    );
}
