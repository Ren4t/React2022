import { useState } from "react";
import { Message } from "./components/Message";

export const App = () => {
  const [message, setMessage] = useState("geek");
  return (
    <div className="App">
      <Message message={message} />
    </div>
  );
};
