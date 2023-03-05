import React from 'react'

const Corn = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top: "50%",
                left: "50%",
                cursor: "pointer",
                zIndex: 9,
                transform: 'translate(-50%,-50%)'
            }}
        >
            <img src="/assets/images/plant/cornseeding.png" style={{ transform: 'scale(1.5)' }} />
        </div>
    )
}

export default Corn