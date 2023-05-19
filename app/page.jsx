import Search from "./Search";
import NewUtilities from "./NewUtilities";

export default function Home() {
  return (
    <main className="flex">

      <div className="w-full">
        <h1>Cuboost Utilities</h1>

        <Search />

        <NewUtilities />

        <h2>Recent</h2>
      </div>
    </main>
  );
}
