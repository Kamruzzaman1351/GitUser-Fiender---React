import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContect";
function Alert() {
    const {alert} = useContext(AlertContext);
    return alert !== null && (
            <div className={`flex items-start mb-4 space-x-2 px-4 py-2 rounded bg-red-600`}>
                <p className='flex-1 text-base font-semibold leading-7 text-white'>
                    <strong>{alert.msg}</strong>
                </p> 
            </div>
        )
    
  
}

export default Alert