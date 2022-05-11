export default function Checkbox(props) {
    return (
        <>
            <input 
                type="checkbox"
                name={props.name}
                checked={props}
                onChange={props.handleChange}
                id={props.id}
                key={props.key}
            />
        </>
    )
}