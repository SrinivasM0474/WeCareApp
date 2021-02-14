import React from 'react'
import ReactDOM from 'react-dom'

const AppTextField = props => {
    return (
        <TextField 
            id={props.id}
            value={props.value}
            variant={props.variant}
        />
    )

}