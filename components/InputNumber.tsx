import styles from '../src/styles/InputNumber.module.css'

interface InputNumberProps{
    text: string;
    value: number;
    onChange: (newValue: number) => void;
}

export default function InputNumber(props: InputNumberProps){
    const decrement = () => props.onChange(props.value - 1)
    const increase = () => props.onChange(props.value + 1)

    return(
        <div className={styles.inputNumber}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.buttons}>
                <button className={styles.btn} onClick={decrement}>-</button>
                <button className={styles.btn} onClick={increase}>+</button>
            </div>
        </div>
    )
}