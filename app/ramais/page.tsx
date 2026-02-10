import RamaisList from "@/components/RamaisList";

//dados mockados
const mockData = [
    { id: 1, nome: "João da Silva", setor: "TI", ramal: "2020", email: "joao@sotrigo.com.br" },
    { id: 2, nome: "Maria Souza", setor: "RH", ramal: "2035", email: "maria@sotrigo.com.br" },
    { id: 3, nome: "Carlos Vendas", setor: "Comercial", ramal: "2040", email: "carlos@sotrigo.com.br" },
    { id: 4, nome: "Ana Financeiro", setor: "Financeiro", ramal: "2050", email: "ana@sotrigo.com.br" },
];

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
            <RamaisList colaboradores={mockData} />
        </div>
    );
}