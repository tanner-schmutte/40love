import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import { useSelector, useDispatch } from 'react-redux';

import Home from '../Home';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const SignUpForm = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);

    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState('');
    const [ntrp, setNtrp] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [open, setOpen] = useState(true);
    const history = useHistory();

    const handleClose = () => {
        setOpen(false);
        history.push('/');
    };

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            dispatch(signUp(username, ntrp, password)).catch((err) => {
                setErrors([...err.errors]);
            });
        }
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateNtrp = (e) => {
        setNtrp(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    if (user) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <Home />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Get started.</DialogTitle>
                <DialogContent>
                    <form onSubmit={onSignUp}>
                        <div>
                            {errors.map((error) => (
                                <div>{error}</div>
                            ))}
                        </div>
                        <TextField
                            label="Username"
                            type="text"
                            name="username"
                            onChange={updateUsername}
                            value={username}
                        />
                        <br />
                        <TextField
                            id="select"
                            label="ntrp"
                            select
                            onChange={updateNtrp}
                            value={ntrp}
                        >
                            <MenuItem value="1.5">1.5</MenuItem>
                            <MenuItem value="2.0">2.0</MenuItem>
                            <MenuItem value="2.5">2.5</MenuItem>
                            <MenuItem value="3.0">3.0</MenuItem>
                            <MenuItem value="3.5">3.5</MenuItem>
                            <MenuItem value="4.0">4.0</MenuItem>
                            <MenuItem value="4.5">4.5</MenuItem>
                            <MenuItem value="5.0">5.0</MenuItem>
                            <MenuItem value="5.5">5.5</MenuItem>
                            <MenuItem value="6.0">6.0</MenuItem>
                            <MenuItem value="6.5">6.5</MenuItem>
                            <MenuItem value="7.0">7.0</MenuItem>
                            <MenuItem value="7.5">7.5</MenuItem>
                        </TextField>
                        <br />
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            onChange={updatePassword}
                            value={password}
                        />
                        <br />
                        <TextField
                            label="Confirm Password"
                            type="password"
                            name="repeat_password"
                            onChange={updateRepeatPassword}
                            value={repeatPassword}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onSignUp}>Sign up</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default SignUpForm;
