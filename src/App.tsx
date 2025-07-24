import FirstScreen from "./components/FirstScreen.tsx";
import SideBar from "./components/SideBar.tsx";

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <SideBar />
      <FirstScreen />
    </div>
  );
}


export default App;
