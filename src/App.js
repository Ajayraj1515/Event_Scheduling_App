import React, { useState } from "react";
import EventForm from "./components/EventtForm";
import EventList from "./components/EventList";
import FilterBar from "./components/FilterBar";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("");

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const filteredEvents = filter
    ? events.filter((event) => event.date === filter)
    : events;

  return (
    <div className="App">
      <h1>Event Scheduling App</h1>
      <EventForm addEvent={addEvent} />
      <FilterBar setFilter={setFilter} />
      <EventList events={filteredEvents} deleteEvent={deleteEvent} />
    </div>
  );
}

export default App;
