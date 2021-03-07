import './spinner.css';
import spinner_logo from '../../logo.svg';

export function Spinner() {
    return(
        <div className="spinner_wrapper">
            <img src={spinner_logo} className="spinner" />
        </div>
    )
}