import DoorModel from "../model/door";

export function createDoors(quantity: number, withGift: number): DoorModel[] {
    return Array.from({length: quantity}, (_, i) => {
        const number = i + 1
        const hasGift = number === withGift
        return new DoorModel(number, hasGift)
    } )
}

export function updateDoors(doors: DoorModel[], modifyDoor: DoorModel){
    return doors.map(currentDoor => {
        const sameModifyDoor = currentDoor.number === modifyDoor.number

        if(sameModifyDoor){
            return modifyDoor
        } else {
            return modifyDoor.open ? currentDoor : currentDoor.deselect()
        }
    })
}