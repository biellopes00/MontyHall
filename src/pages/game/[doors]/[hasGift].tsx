import { useEffect, useState } from "react"
import { createDoors, updateDoors } from "../../../../functions/doors"
import Door from "../../../../components/Door"
import styles from "../../../styles/Game.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function game() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [doors, setDoors] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [valid, setValid] = useState(false)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const doors = +router.query.doors
        const hasGift = +router.query.hasGift
        const quantityValidDoors = doors >= 3 && doors <= 100
        const hasValidGift = hasGift >= 1 && hasGift <= doors
        setValid(quantityValidDoors && hasValidGift)
    }, [doors])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const doors = +router.query.doors
        const hasGift = +router.query.hasGift
        setDoors(createDoors(doors, hasGift))
    }, [router.query])



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
                {valid ? renderDoor() :
                    <h1>Invalid Values</h1>
                }
            </div>
            <div className={styles.buttons}>
                <Link href="/">
                    <button>Reset</button>
                </Link>
            </div>
        </div>
    )
}