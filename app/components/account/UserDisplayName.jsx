export default function UserDisplayName({ user }) {
  return <h2>{user.displayName ? user.displayName : "Cuboost User"}</h2>;
}
