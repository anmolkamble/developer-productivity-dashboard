import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
const [metrics, setMetrics] = useState([]);

useEffect(() => {
axios
.get("http://localhost:5000/metrics")
.then((res) => setMetrics(res.data.data))
.catch((err) => console.log(err));
}, []);

const chartData = [3, 4, 5, 4, 6];

return (
<div className="container">
<h1>Developer Productivity Dashboard</h1>
<p className="subtitle">Analyzing performance for Anmol</p>

  <div className="grid">
    {metrics.map((m, i) => (
      <div className="card" key={i}>
        <h2>{m.name}</h2>
        <p><b>Value:</b> {m.value}</p>
        <p><b>Trend:</b> {m.trend}</p>

        <div className="insight">{m.insight}</div>
        <div className="suggestion">{m.suggestion}</div>
      </div>
    ))}
  </div>

  <h2 className="chart-title">Productivity Trend</h2>

  <div className="chart">
    {chartData.map((val, i) => (
      <div
        key={i}
        className="bar"
        style={{ height: `${val * 30}px` }}
      ></div>
    ))}
  </div>
</div>

);
}
export default App;