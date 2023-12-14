import UserDisplayName from "./UserDisplayName";
import UserPhoto from "./UserPhoto";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Loader from "../Loader";

export default function UserProfile() {
  const [user, loading] = useAuthState(auth);

  if (!user) return <h1>Sign In</h1>;
  if (loading) return <Loader />;
  return (
    <div className=" flex justify-center items-center flex-col text-center">
      <UserPhoto user={user} />
      <UserDisplayName user={user} />
    </div>
  );
}
