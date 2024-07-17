import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { Logo1 } from '../../images/index'
import { motion } from 'framer-motion';
import { Drawer } from '@mui/material';

const drawerStyle = {
    width: "275px",
    flexShrink: 0,
    "& .MuiDrawer-paper": {
        width: "275px", // Adjust the width as needed
        backgroundColor: "#00060C", // Drawer background color
        border: "none", // Remove the border
        color: "#FFF", // Text color
        "& h1": {
            fontSize: "24px", // Adjust the font size as needed
            margin: "20px", // Adjust the margin as needed
        },
    },
}

export default function Navbar() {

    const location = useLocation();

    const linkNames = {
        'home': 'Home',
        'services': 'Serviços',
        'about': 'Sobre nós',
        'location': 'Localização',
    };

    const linkActive = 'text-[#333] no-underline text-lg my-1 cursor-pointer';
    const linkInactive = 'text-[#6A6A6A] no-underline text-lg my-1 cursor-pointer hover:text-[#333]';

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return (
        <>
            <nav className={`w-full flex py-2.5 fixed-top justify-between items-center border-b-2 border-[#B6B6B6] bg-[#F0F0F0] select-none`}>
                <div className='w-full flex justify-center items-center'>
                    <Link className='ml-8 text-white text-2xl font-semibold font-montserrat no-underline' to={'/'}>
                        <img src={Logo1} alt='Logo' className='h-10' />
                    </Link>
                </div>

                <div className='w-full justify-center hidden items-center pl-5 pr-1 ml-10 gap-12 md:flex'>
                    {
                        !location.pathname.includes('/modulo/') && Object.keys(linkNames).map((key, index) => {
                            return (
                                <ScrollLink
                                    key={index}
                                    className={location.pathname === `/${key}` ? linkActive : linkInactive}
                                    to={key}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    {linkNames[key]}
                                </ScrollLink>)
                        })
                    }
                </div>

                <div className='w-full flex justify-center items-center text-white'>
                    <motion.button whileHover={{ backgroundColor: '#6C0000' }}
                        className="px-4 py-2 rounded-lg bg-[#982727]"
                    >
                        Contate-nos
                    </motion.button>
                </div>
            </nav >

            <Drawer anchor='left' open={open} onClose={handleClose} sx={drawerStyle}>
                <span className='w-full justify-center text-center pt-5 pb-1 text-3xl font-semibold'>
                    <img src={Logo1} alt='Logo' className='h-12' />
                </span>
                <div className='text-white flex flex-col px-5 py-4'>
                    <div className='w-full bg-white text-black p-2 rounded-md'>
                        \
                    </div>

                    <div className='w-full flex flex-col gap-3 py-4'>
                        {
                            Object.keys(linkNames).map((key, index) => {
                                return (
                                    <ScrollLink
                                        key={index} className='text-xl text-white no-underline font-montserrat'
                                        to={key}
                                        smooth={true}
                                        duration={500}
                                        onClick={handleClose}
                                    >
                                        {linkNames[key]}
                                    </ScrollLink>
                                )
                            })
                        }
                    </div>
                    <div className='fixed bottom-0 pb-4 flex font-montserrat gap-1 items-center '>\
                        <span>
                            Sair
                        </span>
                    </div>
                </div>
            </Drawer>

        </>
    )
}