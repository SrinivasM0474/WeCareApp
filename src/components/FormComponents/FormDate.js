
import React, { useState } from "react";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const FormDate = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const handleDateChange = (date) => {
        console.log('date', date)
        setSelectedDate(date);
        if (date !== null) {
            let validDate = date.toDateString() == 'Invalid Date' ? { date: '' } : { date: 'valid' };
            props.formValidation(validDate)

        } else {
            props.formValidation({ date: '' })
        }


    };
    const handleDateClick = (date) => {
        setSelectedDate(date);
        console.log('date', date)
        props.formValidation({ date: 'valid' })
    }
    return (
        <div className="full-width input-block about-date date-pick">
            <label>{props.title}</label>
            <MuiPickersUtilsProvider
                utils={DateFnsUtils}
                className="full-width"
            >
                <KeyboardDatePicker
                    placeholder="MM/DD/YYYY"
                    format={"MM/dd/yyyy"}
                    autoOk={false}
                    onClick={handleDateClick}
                    onChange={handleDateChange}
                    value={selectedDate}
                />
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default FormDate;