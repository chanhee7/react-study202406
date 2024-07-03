import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "1",
    title: "여름",
    image:
      "https://www.nhis.or.kr/static/alim/paper/oldpaper/202109/assets/images/sub/event01_mo.jpg",
    date: "24-07-20",
    description: "여름이요",
  },
  {
    id: "2",
    title: "여름",
    image:
      "https://m.puroluna.com/file_data/iffl8888/2019/06/18/e6a78ac2fbfa26acf240feb86380a47f.jpg",
    date: "24-07-25",
    description: "여름",
  },
];

const Events = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8282/events");
      const jsonData = await response.json();
      setEventList(jsonData);
    })();
  }, []);

  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {eventList.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Events;
