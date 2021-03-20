import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import './Request.css';

const Request = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (date) => {
        setDate(date);
    };

    const onSubmit = () => {
        
    }

    return (
        <>
            <div>Request</div>
            <form>
                <DatePicker
                    selected={date}
                    onChange={handleDateChange}
                    showTimeSelect
                    dateFormat="Pp"
                />
                <div onClick={onSubmit}>Submit</div>
            </form>
        </>
    );
};

export default Request;
