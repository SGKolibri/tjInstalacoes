import React, { useState } from 'react'
import { useSignIn } from 'react-auth-kit';
import { motion } from 'framer-motion';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FrontView, Logo1, Opus } from '../../images';
import { TiArrowLeft } from "react-icons/ti";
import { Link } from 'react-router-dom';
// import axios from 'axios';

export default function LoginComponent() {

    // const backendURL = process.env.REACT_APP_BACKEND_URL;

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

    // const signIn = useSignIn();

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
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert
                    severity={severity}
                    sx={{ width: '100%' }}
                    onClose={handleClose}
                >
                    {message}
                </Alert>
            </Snackbar>
            <div className="w-screen h-screen place-items-center flex bg-[#d9d9d9] md:bg-[#f2f2f2]">
                <div className='fixed top-4 left-4 font-montserrat items-center justify-center'>
                    <Link to="/" className='flex text-[#000] no-underline'>
                        <TiArrowLeft className=" text-3xl" />
                        <p className='text-lg'>
                            Voltar
                        </p>
                    </Link>
                </div>

                <div className='w-3/4 h-5/6 hidden md:block ml-16 lg:ml-32 custom14:ml-64 relative'>
                    <div className='w-full bg-[#f2f2f2] h-full md:rounded-l-full' >
                        <img src={FrontView} className="absolute rounded-l-3xl rounded-r-3xl top-0 left-0 w-full h-full object-cover" alt="background" ></img>
                    </div>
                </div>
                <div className='w-full h-5/6 pt-[20px] md:pt-[0px] ml-8 mr-8 sm:ml-16 md:ml-0 sm:mr-16 lg:mr-32 custom14:mr-64 rounded-l-none rounded-r-none md:rounded-l-none md:rounded-r-3xl justify-start place-items-center text-center bg-[#f2f2f2] flex flex-col'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <img src={Logo1} alt="logo" className='w-56 py-3' />
                    </div>

                    <div className="w-full h-full flex flex-col py-[30px] md:py-[10px]">
                        <label className='text-2xl font-semibold block md:hidden'>
                            Log-In
                        </label>
                        <form onSubmit={(e) => handleLogin(e)} className="flex flex-col py-[30px] md:py-[10px] gap-[20px] items-center">
                            <div className='w-full md:w-3/5 flex flex-col items-center'>
                                <div className='w-full'>
                                    <label className='block md:hidden py-1 font-normal text-md'>
                                        Usuário
                                    </label>
                                </div>
                                <div className='w-full rounded-md'>
                                    <TextField className='w-[70%]' variant='standard' type='email' onChange={(e) => setEmail(e.target.value)} label="E-mail" />
                                </div>
                            </div>
                            <div className='w-full md:w-3/5 flex flex-col items-center'>
                                <div className='w-full'>
                                    <label className='block md:hidden py-1 font-normal text-md'>
                                        Senha
                                    </label>
                                </div>
                                <div className='w-full rounded-md'>
                                    <TextField className='w-[70%]' variant='standard' type='password' onChange={(e) => setPassword(e.target.value)} label="Senha" />
                                </div>
                            </div>
                            <div className='w-3/4 md:w-2/5 py-[24px] md:py-2'>
                                <motion.button whileTap={{ scale: 0.98 }} className="bg-black w-full text-white py-2 rounded-[4px]">
                                    Entrar
                                </motion.button>
                            </div>
                        </form>
                    </div>

                    <div className='w-full h-full hidden md:flex font-lg font-normal flex-col px-2 justify-end items-center'>
                        <label>Não possui cadastro?</label>
                        <label>Contate o administrador do sistema.</label>
                        <span className="flex font-bold">
                            © 2024 TJ Instalações
                            <span className="hidden md:block">
                                &nbsp;- Todos direitos reservados
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}