import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../services/auth';

import Home from '../Home';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginForm = ({ authenticated, setAuthenticated }) => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(true);
    const history = useHistory();

    const handleClose = () => {
        setOpen(false);
        history.push('/');
    };

    const onLogin = async (e) => {
        e.preventDefault();
        const user = await login(email, password);
        if (!user.errors) {
            setAuthenticated(true);
        } else {
            setErrors(user.errors);
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (authenticated) {
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
                            label="Email"
                            type="text"
                            value={email}
                            onChange={updateEmail}
                        />
                        <br />
                        {/* <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={updateEmail}
                        /> */}

                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={updatePassword}
                        />
                        {/* <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={updatePassword}
                        /> */}

                        {/* <button type="submit">Login</button> */}
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
