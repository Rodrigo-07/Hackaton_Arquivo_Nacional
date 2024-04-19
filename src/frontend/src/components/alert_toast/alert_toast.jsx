// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// const AlertToast = ({ message, type, timeout = 3000 }) => {
//     const [visible, setVisible] = useState(true);
//     const icon = type === 'success' ? faCheckCircle : faTimesCircle;

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setVisible(false);
//         }, timeout);

//         return () => clearTimeout(timer);
//     }, [timeout]);

//     if (!visible) {
//         return null;
//     }

//     return (
//         <div className={`fixed top-0 right-0 m-6 p-4 rounded shadow-lg bg-white z-50`}>
//             <p className={type === 'success' ? 'text-20D468-500' : 'text-red-500'}>{message}</p>
//             <div className="flex justify-end">
//                 <span className="text-2xl">
//                     <FontAwesomeIcon icon={icon} color={type === 'success' ? '#20D468' : '#E52207'} />
//                 </span>
//             </div>
//         </div>
//     );
// }

// export default AlertToast;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const AlertToast = ({ message, type, timeout = 3000 }) => {
    const [visible, setVisible] = useState(true);
    const icon = type === 'success' ? faCheckCircle : faTimesCircle;

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, timeout);

        return () => clearTimeout(timer);
    }, [timeout]);

    if (!visible) {
        return null;
    }

    return (
        <div className={`flex justify-between absolute top-12 left-1/2 transform -translate-x-1/2 w-4/5 mx-auto p-3 rounded shadow-lg bg-white z-50 gap-1 transition-all duration-500 ease-in-out ${visible ? 'translate-y-0 opacity-95' : 'translate-y-[-50%] opacity-0'}`}>
            <p className={type === 'success' ? 'text-green-1000' : 'text-red-500'}>{message}</p>
                <span className="text-2xl flex">
                    <FontAwesomeIcon icon={icon} color={type === 'success' ? '#20D468' : '#E52207'} />
                </span>
        </div>
    );
}

export default AlertToast;