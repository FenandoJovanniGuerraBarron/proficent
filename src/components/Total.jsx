import React from 'react'

const Total = ({ total, title, clas }) => {
    return (
        <div className='list__div' >
            <h5 className={`list__div-title ${clas} `} >{title}</h5>
            <span className={`list__div-p ${clas} `} >{total}</span>
        </div>
    )
}

export default Total