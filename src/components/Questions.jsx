import React from 'react'
import { useState } from 'react';

function Questions(props) {
    const { name, ques, options } = props.data;
    const { index, totalQes, handleChange } = props;
console.log(props.data)

    return (
        <>
            <h2>Question No: {index + 1}</h2>
            <h5>Question: {ques}</h5>
            <div className='d-flex justify-content-between'>
                {options.map((op, optionIndex) => (
                    <div key={optionIndex}>
                        <input
                            onChange={handleChange}
                            name={`question${index+1}`}
                            id={`box-${optionIndex}`}
                            type="checkbox"
                            className='checkbox'
                            value={op}
                        />
                        <label htmlFor={`box-${optionIndex}`}>{op}</label>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Questions