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
    const courtId = useSelector(state => state.court.court.id)


    console.log('date', date)
    console.log('userId', user?.id)
    console.log('id', id)
    console.log('courtId', courtId)


    const handleDateChange = (date) => {
        setDate(date);
    };

    const onSubmit = async (e) => {
        await requestHit(date, user.id, id, courtId);
    };

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
                <button onClick={onSubmit}>Submit</button>
            </form>
        </>
    );
};

export default Request;
