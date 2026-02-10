import { Aniversariante } from '@/types';

interface BirthdayListProps {
    aniversariantes: Aniversariante[];
}

export function BirthdayList({ aniversariantes }: BirthdayListProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">🎉 Aniversariantes do Mês</h3>
            <ul className="space-y-4">
                {aniversariantes.map((aniversariante) => (
                    <li key={aniversariante.id} className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${aniversariante.corFundo} flex items-center justify-center ${aniversariante.corTexto} font-bold`}>
                            {aniversariante.iniciais}
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-800">{aniversariante.nome}</p>
                            <p className="text-xs text-gray-500">Dia {aniversariante.dia} - {aniversariante.setor}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <button className="w-full mt-4 text-center text-sm text-sotrigo-orange font-medium hover:underline">
                Ver todos
            </button>
        </div>
    );
}
