import MoviesScreen from "./components/movies/MoviesScreen.tsx";
import SideBar from "./components/sideBar/SideBar.tsx";

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <SideBar />
      <MoviesScreen />
    </div>
  );
}


export default App;
