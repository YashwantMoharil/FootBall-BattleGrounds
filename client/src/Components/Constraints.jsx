import React  from 'react';
function Constraints({className, message}) {
    return (  
        <div className={`tile ${className}`}>
             <div className="messages">{message}</div>
            </div>
    );
}

export default Constraints;