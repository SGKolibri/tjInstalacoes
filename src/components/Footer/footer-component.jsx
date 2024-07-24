import React, { useRef, useState } from "react";
import { Alert, Fab, Snackbar, TextField } from "@mui/material";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { WhatsApp } from '../../images/index';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const CustomTextField = (props) => {
    return (
        <TextField
            {...props}
            variant="filled"
            InputLabelProps={{
                style: { color: 'white' },
            }}
            InputProps={{
                style: { color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                ...props.InputProps,
            }}
            sx={{
                '& .MuiFilledInput-underline:after': {
                    borderBottomColor: 'white',
                },
                '& .MuiFilledInput-root': {
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    },
                    '&.Mui-focused': {
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    },
                },
                ...props.sx,
            }}
        />
    );
};

const fabGreenStyle = {
};

export default function Footer() {

    const contactNumber = "(62) 9 9999-9999";
    const callCenterNumber = "(62) 9 9999-9999";
    const contactEmail = "atendimento@tjinstalacoes.com.br";

    const whatsappLink = 'https://wa.me/5562995047887'

    const form = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [sendingEmail, setSendingEmail] = useState(false);

    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");

    const SnackAlert = (severity, message) => {
        setSeverity(severity);
        setMessage(message);
        setOpen(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        SnackAlert("info", `${type === 'email' ? "Email" : "Número"} copiado para a área de transferência`);
    }

    const handleSendEmail = async (e) => {
        e.preventDefault();
        console.log(name, email, text);

        if (!name || !email || !text) {
            SnackAlert("info", "Preencha todos os campos.");
            return;
        }

        setSendingEmail(true);

        await emailjs
            .sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID,
                form.current, {
                publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
            })
            .then(
                () => {
                    SnackAlert("success", "Mensagem enviada com sucesso!");
                },
                (error) => {
                    SnackAlert("error", `Erro ao enviar a mensagem: ${error.text}`);
                },
                clearInputs(),
                form.current.reset(),
                setSendingEmail(false),
            );
    };

    const clearInputs = () => {
        setName("");
        setEmail("");
        setText("");
        const inputs = document.querySelectorAll('TextField, CustomTextField');
        inputs.forEach(input => input.value = '');
    }

    return (
        <>

            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>

            <footer className="w-full h-full flex flex-col pt-2 pb-4 items-center justify-center font-montserrat bg-[#191919] text-[#f2f2f2] bottom-0">
                <div className="w-full flex flex-col py-4 gap-1 items-center justify-center text-center">
                    <h1 className="text-white font-normal text-4xl">
                        Entre em contato conosco
                    </h1>
                    <span className="font-light text-sm md:text-base">
                        Entre em contato pelo formulário ao lado ou, se preferir, pelo número/email de atendimento:
                    </span>
                </div>

                <div className="w-full h-full flex flex-col md:flex-row justify-between text-start pb-8 px-2">

                    <div className="w-full md:w-1/2 flex flex-col items-center pl-[0px] md:pl-[128px] pb-[30px] md:pb-[0px]">
                        <h1 className="w-full text-2xl flex font-semibold justify-center text-center md:justify-start select-none">
                            Contatos
                        </h1>
                        <div className="w-full flex flex-col items-center md:items-start gap-3 md:gap-4 text-center">
                            <div className="gap-1 md:gap-2 flex flex-col md:flex-row">
                                <span className="select-none font-semibold">
                                    Telefone de contato:
                                </span>
                                <span className="font-light flex cursor-pointer"
                                    onClick={() => handleCopy(contactNumber)}
                                >
                                    &nbsp;
                                    {contactNumber}
                                    &nbsp;
                                    <motion.button className="cursor-pointer" title="Conversar pelo WhatsApp">
                                        <FaSquareWhatsapp className="w-6 h-6" />
                                    </motion.button>
                                </span>
                            </div>
                            <div className="gap-1 md:gap-2 flex flex-col md:flex-row">
                                <span className="select-none font-semibold">
                                    Central de atendimento:
                                </span>
                                <span className="font-light flex items-center cursor-pointer"
                                    onClick={() => handleCopy(callCenterNumber)}
                                >
                                    &nbsp;
                                    {callCenterNumber}
                                    &nbsp;
                                    <motion.button className="cursor-pointer" title="Conversar pelo WhatsApp">
                                        <FaSquareWhatsapp className="w-6 h-6" />
                                    </motion.button>
                                </span>
                            </div>
                            <div className="gap-1 md:gap-2 flex flex-col md:flex-row">
                                <span className="select-none font-semibold">
                                    Email para contato:
                                </span>
                                <span className="font-light flex items-center cursor-pointer"
                                    onClick={() => handleCopy(contactEmail, 'email')}
                                >
                                    {contactEmail}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col gap-3 items-center place-content-center">
                        <h1 className="text-2xl flex gap-2 font-semibold select-none">
                            <span className="flex items-center">
                                <IoIosMail className="w-8 h-8 inline text-3xl" />
                            </span>
                            Contato por e-mail
                        </h1>
                        <form ref={form} className="w-full flex flex-col gap-3 items-center justify-center text-[#f2f2f2]">
                            <CustomTextField
                                label="Seu nome"
                                id="nome"
                                className="w-full md:w-3/4"
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <CustomTextField
                                label="Seu e-mail"
                                id="email"
                                type="email"
                                className="w-full md:w-3/4"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <CustomTextField
                                multiline
                                rows={4}
                                label="Sua mensagem"
                                id="message"
                                className="w-full md:w-3/4"
                                name="text  "
                                onChange={(e) => setText(e.target.value)}
                            />
                            <div className="w-full flex pb-1 justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="w-1/2 h-full py-2 rounded-lg border-2 border-black bg-[#f2f2f2] text-black"
                                    onClick={handleSendEmail}
                                >
                                    Enviar
                                </motion.button>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="w-full flex px-3 md:px-5 justify-center select-none">
                    <span className="flex">
                        © 2024 TJ Instalações
                        <span className="hidden md:block">
                            &nbsp;- Todos direitos reservados
                        </span>
                    </span>
                </div>

                <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="fixed bottom-4 right-4 md:bottom-4 md:right-4 z-50 sm:right-2 sm:bottom-2"
                    onClick={() => window.open(whatsappLink, '_blank')}
                >
                    <Fab
                        size="large"
                        sx={{
                            ...fabGreenStyle,
                            width: '60px', // Custom width
                            height: '60px', // Custom height
                            '& svg': {
                                fontSize: '3rem', // Adjust icon size
                            },
                        }}
                        // sx={fabGreenStyle}
                        className="bg-[#f2f2f2]"
                    >
                        <img src={WhatsApp} alt="WhatsApp" className="w-10 h-10" />
                    </Fab>
                </motion.div>
            </footer >
        </>
    )
}