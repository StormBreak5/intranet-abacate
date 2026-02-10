import Image from "next/image";

export function WelcomeBanner() {
    return (
        <div className="bg-gradient-to-r from-sotrigo-orange to-orange-500 rounded-2xl p-8 text-white shadow-lg flex items-center justify-between relative overflow-hidden">
            <div className="z-10 max-w-lg">
                <h1 className="text-4xl font-bold mb-2">Olá, Colaborador!</h1>
                <p className="text-orange-100 text-lg mb-6">
                    Bem-vindo à nova Intranet Sotrigo. Tudo o que você precisa, em um só lugar.
                </p>
                <button className="bg-white text-sotrigo-orange px-6 py-2 rounded-full font-bold shadow hover:bg-gray-100 transition">
                    Ver meus avisos
                </button>
            </div>

            <div className="hidden md:block absolute right-10 -bottom-10 opacity-90">
                <Image
                    src="/sotriguinho-sotrigo-alimentos.png"
                    alt="Mascote Sotrigo"
                    width={250}
                    height={250}
                    className="object-contain"
                />
            </div>
        </div>
    );
}
