import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useSelector } from 'react-redux';

import { requestHit } from '../../../../services/players';
import CourtPicker from './CourtPicker'

import 'react-datepicker/dist/react-datepicker.css';

import './Request.css';

const Request = () => {
    const { id } = useParams();
    const [date, setDate] = useState(new Date());

    const user = useSelector((state) => state.session.user);

    const handleDateChange = (date) => {
        setDate(date);
    };

    // const onSubmit = async (e) => {
    //     await requestHit(date, user.id, id, courtId);
    // };

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
                <CourtPicker/>
                {/* <div onClick={onSubmit}>Submit</div> */}
            </form>
        </>
    );
};

export default Request;
