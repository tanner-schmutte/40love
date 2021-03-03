import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import { useSelector, useDispatch } from 'react-redux';

import Home from '../Home';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginForm = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);

    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(true);
    const history = useHistory();

    const handleClose = () => {
        setOpen(false);
        history.push('/');
    };

    const onLogin = async (e) => {
        e.preventDefault();
        dispatch(login(username, password)).catch((err) => {
            setErrors([...err.errors]);
        });
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
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
                <DialogTitle id="form-dialog-title">Welcome back.</DialogTitle>
                <DialogContent>
                    <form onSubmit={onLogin}>
                        <div>
                            {errors.map((error) => (
                                <div>{error}</div>
                            ))}
                        </div>
                        <TextField
                            label="Username"
                            type="text"
                            onChange={updateUsername}
                            value={username}
                        />
                        <br />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={updatePassword}
                            value={password}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onLogin}>Login</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default LoginForm;
