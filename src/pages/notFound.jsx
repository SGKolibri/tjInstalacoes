export default function NotFound() {

    return (
        <>
            <div className="w-full h-screen flex flex-col text-white bg-black justify-center items-center">
                <span className="text-9xl font-bold font-montserrat">404</span>
                <span className="text-4xl font-bold font-montserrat">Página não encontrada</span>
                <button onClick={() => {
                    window.location.href = "/"
                }}>
                    /
                </button>
            </div>
        </>
    )
}