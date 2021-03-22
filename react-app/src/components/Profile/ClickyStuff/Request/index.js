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
    const [requestClicked, setRequestClicked] = useState(false);
    const [date, setDate] = useState(new Date());

    const courtId = useSelector((state) => state.court.court.id);

    const handleRequestClick = () => {
        setRequestClicked(true);
    };

    const handleCancel = () => {
        setRequestClicked(false);
    };

    const handleDateChange = (date) => {
        setDate(date);
    };

    const onSubmit = async (e) => {
        if (window.confirm('Do you want to request a hit with this player?')) {
            e.preventDefault();
            await requestHit(
                moment(date).format('YYYY-MM-DD HH:mm:ss'),
                id,
                courtId
            );
        }
    };

    return (
        <>
            {!requestClicked && (
                <div id="request-hit-button" onClick={handleRequestClick}>
                    Request a Hit
                </div>
            )}
            {requestClicked && (
                <form>
                    <DatePicker
                        selected={date}
                        onChange={handleDateChange}
                        showTimeSelect
                        dateFormat="Pp"
                    />
                    <CourtPicker />
                    <button onClick={onSubmit}>Submit</button>
                    <button onClick={handleCancel}>Cancel</button>
                </form>
            )}
        </>
    );
};

export default Request;
