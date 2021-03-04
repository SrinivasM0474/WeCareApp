
import React, { useState } from "react";
import MaskedInput from 'react-text-mask';

const Ssn = (props) => {
    return (
        <div className="input-block">
            <div className='floating_labels'>
                <MaskedInput
                    mask={[/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    className="floating-input"
                    autoComplete='off'
                    guide={false}
                    id="my-input-id"
                    onBlur={() => { }}
                    required
                />
                <label>{props.title}</label>
            </div>

        </div>
    );
};

export default Ssn;