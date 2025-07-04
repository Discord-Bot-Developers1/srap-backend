const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let events = [];
let massSchedules = [];

app.get('/', (req, res) => {
  res.send('SRAP Backend is running');
});

// EVENTS
app.get('/events', (req, res) => {
  res.json(events);
});

app.post('/events', (req, res) => {
  const event = { id: Date.now().toString(), ...req.body };
  events.push(event);
  res.status(201).json(event);
});

app.delete('/events/:id', (req, res) => {
  events = events.filter(e => e.id !== req.params.id);
  res.status(204).end();
});

// MASS SCHEDULES
app.get('/mass-schedules', (req, res) => {
  res.json(massSchedules);
});

app.post('/mass-schedules', (req, res) => {
  const schedule = { id: Date.now().toString(), ...req.body };
  massSchedules.push(schedule);
  res.status(201).json(schedule);
});

app.delete('/mass-schedules/:id', (req, res) => {
  massSchedules = massSchedules.filter(m => m.id !== req.params.id);
  res.status(204).end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
