import RamaisList from "@/components/RamaisList";
import { mockColaboradores } from "@/types/mocks";

export default function RamaisPage() {
    return (
        <div className="p-8 max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Lista de Ramais</h1>
                    <p className="text-gray-500 mt-1">Encontre rapidamente seus colegas.</p>
                </div>
                <button className="bg-sotrigo-green hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition">
                    + Novo Ramal (Admin)
                </button>
            </div>
            <RamaisList colaboradores={mockColaboradores} />
        </div>
    );
}
