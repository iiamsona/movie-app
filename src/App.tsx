import MoviesScreen from "./components/MoviesScreen.tsx";
import SideBar from "./components/SideBar.tsx";

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <SideBar />
      <MoviesScreen />
    </div>
  );
}


export default App;
