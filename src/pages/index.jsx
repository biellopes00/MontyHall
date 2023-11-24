import { useState } from "react";
import Door from "../../components/Door";
import DoorModel from "../../model/door";

export default function Home() {
  const [p1, setP1] = useState(new DoorModel(1))
  return (
    <div>
     <Door door={p1} />
    </div>
  )
}
