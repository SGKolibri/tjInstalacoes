import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { Logo1 } from '../../images/index'
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { Drawer } from '@mui/material';
import { motion } from 'framer-motion';
import './style.css';


const drawerStyle = {
    width: "275px",
    flexShrink: 0,
    "& .MuiDrawer-paper": {
        width: "275px", // Adjust the width as needed
        backgroundColor: "#f2f2f2", // Drawer background color
        border: "none", // Remove the border
        color: "#fff", // Text color
        "& h1": {
            fontSize: "24px", // Adjust the font size as needed
            margin: "20px", // Adjust the margin as needed
        },
    },
}

export default function NavbarComponent() {

    const location = useLocation();

    const linkNames = {
        'home': 'Home',
        'about': 'Sobre nós',
        'services': 'Serviços',
        'location': 'Localização',
        'contact': 'Contato'
    };

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    return (
        <>
            <nav className={`w-full flex py-[12px] md:py-[10px] fixed-top justify-between font-montserrat items-center border-b-2 border-[#B6B6B6] bg-[#f2f2f2] select-none`}>
                <div className='w-full flex justify-start items-start px-[16px] md:px-[0px] md:justify-center md:items-center'>
                    <Link className='text-white text-2xl font-semibold no-underline' to={'/'}>
                        <img src={Logo1} alt='Logo' className='h-10' />
                    </Link>
                </div>

                <div className='w-full justify-center hidden items-center gap-4 md:flex'>
                    {
                        !location.pathname.includes('/modulo/') && Object.keys(linkNames).map((key, index) => {
                            return (
                                <ScrollLink
                                    key={index}
                                    className={`scroll-link text-[#6A6A6A] no-underline font-base text-lg my-1 cursor-pointer hover:text-[#333]`}
                                    to={key}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    {linkNames[key]}
                                </ScrollLink>
                            )
                        })
                    }
                </div>
                <div className='w-full hidden md:flex justify-center items-center text-white'>
                    <Link to='/login'>
                        <motion.button
                            whileTap={{ scale: 0.99 }}
                            className="px-[16px] md:px-[60px] py-2 shadow-md bg-[#982727] text-white rounded-[4px]"
                        >
                            Fazer login
                        </motion.button>
                    </Link>
                </div>

                <div className='w-full flex justify-end items-center px-4 md:hidden'>
                    <FaBars className='text-[#06082B] text-3xl cursor-pointer' onClick={handleClickOpen} />
                    <Drawer
                        anchor='right'
                        open={open}
                        onClose={handleClose}
                        sx={drawerStyle}
                    >
                        <div className='w-full flex items-end justify-end py-2 px-2'>
                            <IoClose className='text-black w-10 h-10 cursor-pointer' onClick={handleClose} />
                        </div>
                        <div className='w-full flex flex-col pl-10 gap-4'>
                            {
                                !location.pathname.includes('/modulo/') && Object.keys(linkNames).map((key, index) => {
                                    return (
                                        <ScrollLink
                                            key={index}
                                            className={`scroll-link text-[#363636] no-underline font-base text-lg my-1 cursor-pointer hover:text-[#333]`}
                                            to={key}
                                            smooth={true}
                                            offset={-50}
                                            duration={500}
                                            onClick={handleClose}
                                        >
                                            {linkNames[key]}
                                        </ScrollLink>
                                    )
                                }
                                )
                            }
                        </div>
                        <div className='w-full flex justify-center items-center pt-4 pl-10 text-white'>
                            <Link to='/login' className='w-full no-underline text-lg text-[#982727]'>
                                Fazer login
                            </Link>
                        </div>
                    </Drawer>
                </div>

            </nav>
        </>
    )
}