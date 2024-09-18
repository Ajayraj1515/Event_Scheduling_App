import React from "react";

const EventList = ({ events, deleteEvent }) => {
  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.eventName}</h3>
            <p>
              {event.date} {event.time}
            </p>
            <p>{event.description}</p>
            <button onClick={() => deleteEvent(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
