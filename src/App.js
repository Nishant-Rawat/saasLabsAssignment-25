import Header from "./Components/Header";
import locale from "./localeConfig.json";
import "./App.css";
import KickStarterProjects from "./Components/KickStarterProjects";

function App() {
  return (
    <div className="App">
      <Header localeData={locale} />
      <main className="main-container">
        <section className="kick-starter-table">
          <KickStarterProjects localeData={locale} />
        </section>
      </main>
    </div>
  );
}

export default App;
