export default function Checkbox(props) {
    return (
        <>
            <input 
                type="checkbox"
                name={props.name}
                checked={props.isChecked}
                onChange={props.handleChange}
                id={props.id}
                // key={props.key}
            />
            <label htmlFor={props.name}>
                {props.name}
            </label>
        </>
    )
}