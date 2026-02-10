import RamaisList from "@/components/RamaisList";
import { mockColaboradores } from "@/types/mocks";

export default function RamaisPage() {
    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 lg:mb-8">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Lista de Ramais</h1>
                    <p className="text-sm sm:text-base text-gray-500 mt-1">Encontre rapidamente seus colegas.</p>
                </div>
                <button className="bg-sotrigo-green hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition text-sm sm:text-base w-full sm:w-auto">
                    + Novo Ramal (Admin)
                </button>
            </div>
            <RamaisList colaboradores={mockColaboradores} />
        </div>
    );
}
