import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../services/auth';

import Home from '../Home';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignUpForm = ({ authenticated, setAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
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
            const user = await signUp(username, email, password);
            if (!user.errors) {
                setAuthenticated(true);
            }
        }
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
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
                <DialogTitle id="form-dialog-title">Get started.</DialogTitle>
                <DialogContent>
                    <form onSubmit={onSignUp}>
                        {/* <div>
                            <label>User Name</label>
                            <input
                                type="text"
                                name="username"
                                onChange={updateUsername}
                                value={username}
                            ></input>
                        </div> */}
                        <TextField
                            label="Username"
                            type="text"
                            name="username"
                            onChange={updateUsername}
                            value={username}
                            required={true}
                        />
                        <br />
                        <TextField
                            label="Email"
                            type="text"
                            name="email"
                            onChange={updateEmail}
                            value={email}
                            required={true}
                        />
                        <br />

                        {/* <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            onChange={updateEmail}
                            value={email}
                        ></input> */}

                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            onChange={updatePassword}
                            value={password}
                            required={true}
                        />
                        <br />

                        {/* <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={updatePassword}
                            value={password}
                        ></input> */}
                        <TextField
                            label="Confirm Password"
                            type="password"
                            name="repeat_password"
                            onChange={updateRepeatPassword}
                            value={repeatPassword}
                            required={true}
                        />
                        {/* <label>Repeat Password</label>
                        <input
                            type="password"
                            name="repeat_password"
                            onChange={updateRepeatPassword}
                            value={repeatPassword}
                            required={true}
                        ></input> */}

                        {/* <button type="submit">Sign Up</button> */}
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
