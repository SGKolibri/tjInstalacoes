import { motion } from "framer-motion"
import { Home } from "../../images"

export default function HomeComponent() {

    return (
        <>
            <div className="flex flex-col text-center items-center flex-grow text-balance gap-4 py-20 font-montserrat text-[#606060]">
                <div className="w-full relative flex bg-black text-center">
                    <div className="absolute flex gap-2 font-medium flex-col inset-0 z-10 justify-center items-center text-white">
                        <p className="text-4xl">
                            Transformando seu sonho em realidade
                        </p>
                        <p className="text-3xl">
                            Serviços elétricos e hidráulicos
                        </p>

                    </div>
                    <div className="w-full flex text-white absolute inset-0 z-10 items-end px-3 pb-10 justify-between md:justify-around">
                        <motion.button whileHover={{ scale: 1.01, backgroundColor: '#6C0000' }} whileTap={{ scale: 0.95 }}
                            className="px-5 py-2 rounded-md bg-[#982727]"
                        >
                            <label className="hidden md:block cursor-pointer">Veja nossos serviços</label>
                            <label className="block md:hidden cursor-pointer">Serviços</label>
                        </motion.button>

                        <motion.button whileHover={{ scale: 1.01, backgroundColor: '#6C0000' }} whileTap={{ scale: 0.95 }}
                            className="px-5 py-2 rounded-md bg-[#982727]"
                        >
                            <label className="block md:hidden cursor-pointer">Agendar</label>
                            <label className="hidden md:block cursor-pointer">Agende sua visita</label>
                        </motion.button>
                    </div>
                    <img src={Home} alt="Home" className="w-full h-[450px] opacity-45 object-cover" />
                </div>

                <div className="w-full flex flex-col pt-2 justify-center items-center">
                    <h1 className="text-4xl">
                        TJ Instalações
                    </h1>
                    <div className="w-1/5 h-[2px] mb-4 bg-[#6C0000]" />
                    <p className="text-xl text-balance">
                        Empresa prestadora de serviços especializados em instalações elétricas e hidráulicas para construtoras.
                    </p>
                </div>
            </div>
        </>
    )
}