import React, { useEffect, useState } from "react";

const rooms = [
  {
    id: 1,
    name: "Master Bedroom",
    description: "A beatiful bedroom with a King sized bed",
  },
];

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(async () => {
    const result = await fetch("http://localhost:3001/rooms");
    const data = await result.json();

    setRooms(data);
  }, []);

  return (
    <div>
      {rooms.map(({ name, description }) => (
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default RoomList;
