import React, { useState, useEffect } from "react";

import { io } from "socket.io-client";

import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [user, setUser] = useState({});
  const [room, setRoom] = useState({});

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("connect", () => {
      console.log(`Connected with Socket ID: ${socket.id}`);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col mx-2 min-h-screen">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
