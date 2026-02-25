import React, { useState, useEffect } from 'react';
import { OperatorProfile, FlightData, Vehicle } from '../types';
import { UserPlus, AlertTriangle } from 'lucide-react';

interface DesigOprProps {
    isOpen: boolean;
    onClose: () => void;
    flight?: FlightData | null;
    vehicle?: Vehicle | null;
    operators: OperatorProfile[];
    onConfirm: (operatorId: string) => void;
}

export const DesigOpr: React.FC<DesigOprProps> = ({ isOpen, onClose, flight, vehicle, operators, onConfirm }) => {
    const [selectedOperatorId, setSelectedOperatorId] = useState<string | null>(null);

    const handleConfirm = () => {
        if (selectedOperatorId) {
            onConfirm(selectedOperatorId);
            setSelectedOperatorId(null);
        }
    };

    const handleClose = () => {
        setSelectedOperatorId(null);
        onClose();
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter' && isOpen && selectedOperatorId) {
                handleConfirm();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, selectedOperatorId, handleConfirm]);

    if (!isOpen || (!flight && !vehicle)) return null;

    const title = "Designação de Operador";
    let subtitle = "";
    if (flight) {
        subtitle = `Voo ${flight.flightNumber} • ${flight.vehicleType === 'CTA' ? 'REQ. CTA' : 'REQ. SERVIDOR'}`;
    } else if (vehicle) {
        subtitle = `Frota ${vehicle.id} • ${vehicle.type}`;
    }

    return (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center animate-in fade-in">
            <div className="bg-slate-900 border border-indigo-500/30 w-full max-w-sm rounded-2xl p-6 shadow-[0_0_50px_rgba(79,70,229,0.2)] animate-in zoom-in-95 flex flex-col">
                
                <div className="flex items-center gap-3 mb-5 border-b border-indigo-500/20 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 border border-indigo-500/30">
                        <UserPlus size={20} />
                    </div>
                    <div>
                        <h3 className="text-base font-black text-white uppercase tracking-tight">{title}</h3>
                        <p className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest">
                            {subtitle}
                        </p>
                    </div>
                </div>

                <div className="space-y-2.5 mb-6 max-h-64 overflow-y-auto custom-scrollbar pr-2">
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block">Equipe Compatível Disponível</span>
                    
                    {operators.length > 0 ? operators.map(op => {
                        const isBusy = op.status !== 'DISPONÍVEL';
                        const isSelected = selectedOperatorId === op.id;
                        
                        return (
                            <button 
                                key={op.id}
                                onClick={() => setSelectedOperatorId(op.id)}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl border transition-all ${
                                    isSelected 
                                        ? 'bg-indigo-500 text-white border-indigo-400 shadow-lg' 
                                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                                        isSelected ? 'bg-white text-indigo-600' : 'bg-slate-900 text-slate-500'
                                    }`}>
                                        {op.warName.charAt(0)}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="text-[11px] font-black uppercase">{op.warName}</div>
                                        <div className={`text-[7px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm ${
                                            isSelected ? 'bg-indigo-400/30 text-indigo-100' : isBusy ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500/10 text-emerald-500'
                                        }`}>
                                            {isBusy ? op.status : 'DISPONÍVEL'}
                                        </div>
                                    </div>
                                </div>
                                
                                {isBusy && (
                                    <AlertTriangle size={12} className={isSelected ? 'text-indigo-200' : 'text-amber-500'} />
                                )}
                            </button>
                        );
                    }) : (
                        <div className="text-center py-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                            Nenhum operador disponível
                        </div>
                    )}
                </div>

                {selectedOperatorId && (() => {
                    const op = operators.find(o => o.id === selectedOperatorId);
                    return op && op.status !== 'DISPONÍVEL' ? (
                        <div className="bg-amber-500/10 border border-amber-500/30 p-2.5 rounded-lg mb-5 flex items-start gap-2">
                            <AlertTriangle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                            <p className="text-[9px] text-amber-200 leading-relaxed font-bold">
                                ATENÇÃO: O operador {op.warName} está atualmente {op.status}. Confirmar a designação criará uma fila na tarefa dele.
                            </p>
                        </div>
                    ) : null;
                })()}

                <div className="flex gap-2 mt-auto">
                    <button 
                        onClick={handleClose}
                        className="flex-1 py-2.5 rounded-xl border border-slate-700 text-slate-400 font-bold text-[10px] hover:bg-slate-800 transition-all uppercase"
                    >
                        Cancelar
                    </button>
                    <button 
                        onClick={handleConfirm}
                        disabled={!selectedOperatorId}
                        className="flex-1 py-2.5 rounded-xl bg-indigo-500 text-white font-black text-[10px] hover:bg-indigo-400 transition-all uppercase shadow-lg shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
};
