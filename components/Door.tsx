import styles from '../src/styles/Door.module.css';
import DoorModel from '../model/door'
import Gift from './Gift'

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}
export default function Door(props: DoorProps) {
    const door = props.value
    const selected = door.selected && !door.open ? styles.selected : ''
    const toggleSelection = e => props.onChange(door.toggleSelection())
    const openDoor = e => {
        e.stopPropagation()
        props.onChange(door.openDoor())
    }
    function doorRenderer() {
        return (

            <div className={styles.door}>
                <div className={styles.number}>
                    {door.number}
                </div>
                <div className={styles.knob} onClick={openDoor}></div>

            </div>

        )
    }
    return (
        <div className={styles.area} onClick={toggleSelection}>
            <div className={`${styles.structure} ${selected}`}>
                {door.closed ?
                    doorRenderer() : door.hasGift ? <Gift /> : false}
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}