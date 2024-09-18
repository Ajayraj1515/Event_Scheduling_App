import React from "react";

const EventDetail = ({ event, editEvent, deleteEvent }) => {
  return (
    <div>
      <h3>{event.eventName}</h3>
      <p>
        {event.date} {event.time}
      </p>
      <p>{event.description}</p>
      <button onClick={() => editEvent(event.id)}>Edit</button>
      <button onClick={() => deleteEvent(event.id)}>Delete</button>
    </div>
  );
};

export default EventDetail;
