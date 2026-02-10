import Image from "next/image";

export function WelcomeBanner() {
    return (
        <div className="bg-gradient-to-r from-sotrigo-orange to-orange-500 rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-lg flex items-center justify-between relative overflow-visible">
            <div className="z-10 max-w-lg pr-4 md:pr-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Olá, Colaborador!</h1>
                <p className="text-orange-100 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                    Bem-vindo à nova Intranet Sotrigo. Tudo o que você precisa, em um só lugar.
                </p>
                <button className="bg-white text-sotrigo-orange px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-bold shadow hover:bg-gray-100 transition">
                    Ver meus avisos
                </button>
            </div>

            <div className="hidden lg:block absolute right-8 -bottom-16 opacity-90 z-20">
                <Image
                    src="/sotriguinho-sotrigo-alimentos.png"
                    alt="Mascote Sotrigo"
                    width={180}
                    height={180}
                    className="object-contain drop-shadow-2xl"
                />
            </div>
        </div>
    );
}
