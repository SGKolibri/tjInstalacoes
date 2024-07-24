import React, { useState } from 'react'
import { useSignIn } from 'react-auth-kit';
import { motion } from 'framer-motion';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Logo1, Opus } from '../../images';
import { Link } from 'react-router-dom';

export default function LoginComponent() {

    const backendURL = process.env.REACT_APP_BACKEND_URL;

    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");

    const muiSnackAlert = (severity, message) => {
        setSeverity(severity);
        setMessage(message);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = useSignIn();

    const handleLogin = async (e) => {
        e.preventDefault();

        muiSnackAlert("info", "Trabalho em progresso. Ainda não é possível realizar login.")

        // if (!email || !password) {
        //     muiSnackAlert("warning", "Preencha todos os campos.")
        //     return
        // }

        // try {
        //     const response = await axios.post(`${backendURL}/login-user`, {
        //         email: email,
        //         password: password
        //     });

        //     if (response.data.error !== undefined) {
        //         muiSnackAlert("error", response.data.error)
        //         return;
        //     }

        //     const userDetails = {
        //         name: response.data.name,
        //         surname: response.data.surname,
        //         email: response.data.email,
        //         role: response.data.role,
        //     }

        //     if (response.data.token !== undefined) {
        //         signIn({
        //             user: response.data,
        //             token: response.data.token,
        //             expiresIn: 3600,
        //             tokenType: 'Bearer',
        //             authState: { userDetail: userDetails }
        //         });
        //         window.location.href = "/home/reg-ocorrencia";
        //     }

        // } catch (error) {
        //     muiSnackAlert("error", "Erro ao realizar login.")
        // }
    };


    return (
        <>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert
                    severity={severity}
                    sx={{ width: '100%' }}
                    onClose={handleClose}
                >
                    {message}
                </Alert>
            </Snackbar>
            <div className="bg-gradient-md md:bg-gradient-bg w-screen h-screen place-items-center flex">
                <div className='hidden md:block w-3/4 h-5/6 ml-16 lg:ml-32 custom14:ml-64 relative'>
                    <div className='w-full bg-white h-full md:rounded-l-3xl' >
                        <img src={Opus} className="absolute rounded-l-3xl rounded-r-3xl top-0 left-0 w-full h-full object-cover" alt="background" ></img>
                    </div>
                </div>
                <div className=' w-full md:h-5/6 pt-4 md:pt-0 ml-8 mr-8 sm:ml-16 md:ml-0 sm:mr-16 lg:mr-32 custom14:mr-64 rounded-l-none rounded-r-none md:rounded-l-none md:rounded-r-3xl justify-start place-items-center text-center bg-white flex flex-col'>
                    <div className='w-full flex justify-center items-center'>
                        <Link className='w-full flex justify-center items-center' to='/'>
                            <img src={Logo1} alt="logo" className='w-[40%] md:w-1/4 py-3' title='Voltar para a homepage' />
                        </Link>
                    </div>

                    <div className="w-full flex flex-col py-4 md:py-2 gap-5">
                        <label className='text-2xl font-semibold block md:hidden'>
                            Log-In
                        </label>
                        <form onSubmit={(e) => handleLogin(e)} className="flex flex-col gap-[20px] items-center">
                            <div className='w-full md:w-3/5 flex flex-col items-center'>
                                <div className='w-full'>
                                    <label className='block md:hidden text-[#555] py-1 font-normal text-sm'>
                                        Usuário
                                    </label>
                                </div>
                                <div className='w-3/4 rounded-md'>
                                    <TextField variant='standard' type='email' onChange={(e) => setEmail(e.target.value)} label="E-mail" />
                                </div>
                            </div>
                            <div className='w-full md:w-3/5 flex flex-col items-center'>
                                <div className='w-full'>
                                    <label className='block md:hidden text-[#555] py-1 font-normal text-sm'>
                                        Senha
                                    </label>
                                </div>
                                <div className='w-3/4 border-[#aaa] rounded-md'>
                                    <TextField variant='standard' type='password' onChange={(e) => setPassword(e.target.value)} label="Senha" />
                                </div>
                            </div>
                            <div className='w-1/2 md:w-2/5 py-[24px] md:py-2'>
                                <motion.button whileTap={{ scale: 0.98 }} className="bg-[#0C5668] md:bg-black w-full text-white font-bold py-2 rounded-md">
                                    Entrar
                                </motion.button>
                            </div>
                        </form>
                    </div>
                    <div className='hidden md:flex font-lg font-normal flex-col px-2'>
                        <label>Não possui cadastro?</label>
                        <label>Contate o administrador do sistema.</label>
                    </div>
                    <div>
                        <label className='hidden md:block text-sm font-bold py-3'>
                            © 2024 - Todos os direitos reservados TJ Instalações
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}