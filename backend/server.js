const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

const metrics = {
    developer: "Anmol",
    data: [{
            name: "Cycle Time",
            value: "5 days",
            trend: "increasing",
            insight: "Cycle time is increasing, indicating delays in development or reviews.",
            suggestion: "Break tasks into smaller chunks and improve PR turnaround time."
        },
        {
            name: "Deployment Frequency",
            value: "2 per week",
            trend: "stable",
            insight: "Deployment frequency is consistent.",
            suggestion: "Maintain current release process."
        },
        {
            name: "Bug Rate",
            value: "8%",
            trend: "increasing",
            insight: "Bug rate is rising, indicating possible quality issues.",
            suggestion: "Improve testing coverage and code reviews."
        }
    ]
};

app.get("/metrics", (req, res) => {
    res.json(metrics);
});

app.listen(PORT, () => {
    console.log(Server running on port $ { PORT });
});