import Search from "./components/home-page/Search";
import NewUtilities from "./components/home-page/NewUtilities";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-full">
        <h1>Cuboost Utilities</h1>

        <Search />

        <NewUtilities />

        <h2>Recent</h2>
      </div>
    </div>
  );
}
