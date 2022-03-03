import "./App.css";

function StatCard({ label, icon, number }) {
  return (
    <div className="stat-card">
      <div className="stat-line">
        <span>{icon}</span>
        <strong>{label}</strong>
      </div>
      <p>{number.toLocaleString()}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2>Use components and props in React</h2>

      <StatCard icon="👉🏾" label="Points" number={2000} />
      <StatCard icon="⚡️" label="Lightnings" number={3567} />
      <StatCard icon="🤙🏿" label="Shakas" number={4242} />
      <StatCard icon="👽" label="Aliens" number={69420} />
    </div>
  );
}

export default App;
