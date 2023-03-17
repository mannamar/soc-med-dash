import './Switch.css'

// Toggle switch function taken from: https://www.w3schools.com/howto/howto_css_switch.asp
export default function Switch(props) {
    return (
        <label className="switch toggle">
            <input onChange={() => props.function()} type="checkbox" />
            <span className="slider round"></span>
        </label>
    )
}