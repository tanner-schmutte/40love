import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';

import moment from 'moment';

import { requestHit } from '../../../../services/players';
import CourtPicker from './CourtPicker';

import 'react-datepicker/dist/react-datepicker.css';

import './Request.css';

const Request = () => {
    const { id } = useParams();
    const [date, setDate] = useState(new Date());

    const user = useSelector((state) => state.session.user);
    const courtId = useSelector((state) => state.court.court.id);

    console.log('unformatted date', date);
    console.log('date', moment(date).format('YYYY-MM-DD HH:mm:ss'));
    console.log('userId', user?.id);
    console.log('id', id);
    console.log('courtId', courtId);

    const handleDateChange = (date) => {
        setDate(date);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await requestHit(
            moment(date).format('YYYY-MM-DD HH:mm:ss'),
            courtId
        );
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
                <CourtPicker />
                <button onClick={onSubmit}>Submit</button>
            </form>
        </>
    );
};

export default Request;
