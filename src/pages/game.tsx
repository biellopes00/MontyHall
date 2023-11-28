import { useState } from "react"
import { createDoors, updateDoors } from "../../functions/doors"
import Door from "../../components/Door"
import styles from "../styles/Game.module.css"

export default function game() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [doors, setDoors] = useState(createDoors(5, 2))

    function renderDoor() {
        return doors.map(door => {

            return <Door key={door.number}
                value={door}
                onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
        })
    }

    return (
        <div className={styles.game}>
            <div className={styles.doors}>
                {renderDoor()}
            </div>
            <div className={styles.buttons}>
                
            </div>
        </div>
    )
}