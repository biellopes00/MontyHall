import { useState } from "react";
import Card from "../../components/Card";
import InputNumber from "../../components/InputNumber";
import styles from "../styles/Form.module.css"
import Link from "next/link";

export default function Form() {

  const [quantityDoor, setQuantityDoors] = useState(8)
  const [doorWithGift, setDoorWithGift] = useState(1)
  return (
    <div className={styles.form}>
      <div>

        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <InputNumber text="Door Quantity?"
            value={quantityDoor}
            onChange={newQuantity => setQuantityDoors(newQuantity)} />
        </Card>
      </div>
      <div>
        <Card>
          <InputNumber text="Gift Door?"
            value={doorWithGift}
            onChange={newDoorWithGift => setDoorWithGift(newDoorWithGift)} />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${quantityDoor}/${doorWithGift}`} className={styles.link}>
            <h2>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
