
import React, { useState } from "react";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const FormDate = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
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
                    onChange={handleDateChange}
                    value={selectedDate}
                />
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default FormDate;