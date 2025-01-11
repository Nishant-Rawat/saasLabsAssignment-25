import Header from "./Components/Header";
import locale from "./localeConfig.json";
import "./App.css";
import KickStarterProjects from "./Components/KickStarterProjects";

function App() {
  return (
    <div className="App">
      <Header localeData={locale} />
      <main className="main-container">
        <KickStarterProjects localeData={locale} />
      </main>
    </div>
  );
}

export default App;
