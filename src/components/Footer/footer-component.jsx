import { FaDiscord, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {

    return (
        <>
            <footer className="w-full py-2 bg-gray-100 bg-opacity-25 backdrop-blur-sm  bottom-0 mt-auto">
                <div className="w-full flex text-white font-montserrat px-3 md:px-5 justify-between select-none">
                    <span className="flex text-black">
                        © 2024 EduCode
                        <span className="hidden md:block">
                            &nbsp;- Todos direitos reservados
                        </span>
                    </span>
                    <span className="gap-3 flex text-black">
                        <FaWhatsapp className="w-6 h-6 cursor-pointer" />
                        <FaInstagram className="w-6 h-6 cursor-pointer" />
                        <FaDiscord className="w-6 h-6 cursor-pointer" />
                        <FaGithub className="w-6 h-6 cursor-pointer" />
                    </span>
                </div>
            </footer>
        </>
    )
}