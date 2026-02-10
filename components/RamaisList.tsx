'use client';

import { useState } from "react";

interface Colaborador {
    id: number;
    nome: string;
    ramal: string;
    setor: string;
    email: string;
}

export default function RamaisList({ colaboradores }: { colaboradores: Colaborador[] }) {
    const [busca, setBusca] = useState('');

    const filtrados = colaboradores.filter((c) =>
        c.nome.toLowerCase().includes(busca.toLowerCase()) ||
        c.setor.toLowerCase().includes(busca.toLowerCase()) ||
        c.ramal.includes(busca)
    );

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-6">
                <input type="text" placeholder="Busque por nome, setor ou ramal..." className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sotrigo-orange" value={busca} onChange={(e) => setBusca(e.target.value)} />
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="p-3 font-semibold text-sotrigo-green">Nome</th>
                            <th className="p-3 font-semibold text-gray-600">Setor</th>
                            <th className="p-3 font-semibold text-gray-600">Ramal</th>
                            <th className="p-3 font-semibold text-gray-600">E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtrados.map((item) => (
                            <tr key={item.id} className="border-b last:border-0 hover:bg-orange-50 transition-colors">
                                <td className="p-3 font-medium text-gray-800">{item.nome}</td>
                                <td className="p-3 text-gray-600">
                                    <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-bold">
                                        {item.setor}
                                    </span>
                                </td>
                                <td className="p-3 text-sotrigo-orange font-bold text-lg">{item.ramal}</td>
                                <td className="p-3 text-blue-600 underline text-sm">{item.email}</td>
                            </tr>
                        ))}
                        {filtrados.length === 0 && (
                            <tr>
                                <td colSpan={4} className="p-8 text-center text-gray-500">
                                    Nenhum colaborador encontrado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}