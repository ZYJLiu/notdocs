import { useState } from "react";
import { Button } from "./ui/button"; // Import the Button component

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <Button
        className="my-3 px-2 py-1"
        variant="secondary"
        onClick={handleClick}
      >
        Clicked {count} times
      </Button>
    </div>
  );
}
