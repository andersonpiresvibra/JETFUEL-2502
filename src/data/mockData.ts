
import { FlightData, FlightStatus, Operator, OperatorProfile, FlightLog, ChatMessage, Vehicle } from '../types';

// Helper para criar logs
const createLog = (minutesAgo: number, type: 'SISTEMA' | 'MANUAL' | 'OBSERVACAO' | 'ALERTA', message: string, author: string = 'SISTEMA'): FlightLog => ({
    id: Math.random().toString(36).substr(2, 9),
    timestamp: new Date(new Date().getTime() - minutesAgo * 60000),
    type,
    message,
    author
});

// Helper para criar mensagens de chat
const createMsg = (minutesAgo: number, sender: string, text: string, isManager: boolean = false): ChatMessage => ({
    id: Math.random().toString(36).substr(2, 9),
    timestamp: new Date(new Date().getTime() - minutesAgo * 60000),
    sender,
    text,
    isManager
});



export const GOL_B737_7_PREFIXES = [
  'PR-GEA', 'PR-GEC', 'PR-GED', 'PR-GEH', 'PR-GEI', 'PR-GEJ', 'PR-GEK', 'PR-GEQ', 'PR-GIH', 'PR-GOQ', 'PR-GOR', 'PR-VBQ'
];

export const GOL_B737_8_PREFIXES = [
  'PR-GGE', 'PR-GGF', 'PR-GGH', 'PR-GGL', 'PR-GGM', 'PR-GGP', 'PR-GGQ', 'PR-GGR', 'PR-GGX', 'PR-GKA', 'PR-GKB', 'PR-GKC', 'PR-GKD', 'PR-GKE', 'PR-GTC', 'PR-GTE', 'PR-GTG', 'PR-GTH', 'PR-GTL', 'PR-GTM', 'PR-GUB', 'PR-GUC', 'PR-GUE', 'PR-GUF', 'PR-GUH', 'PR-GUI', 'PR-GUJ', 'PR-GUK', 'PR-GUL', 'PR-GUM', 'PR-GUN', 'PR-GUP', 'PR-GUR', 'PR-GUT', 'PR-GUU', 'PR-GUV', 'PR-GUX', 'PR-GUY', 'PR-GUZ', 'PR-GXA', 'PR-GXB', 'PR-GXC', 'PR-GXD', 'PR-GXE', 'PR-GXH', 'PR-GXI', 'PR-GXJ', 'PR-GXL', 'PR-GXM', 'PR-GXN', 'PR-GXP', 'PR-GXQ', 'PR-GXR', 'PR-GXT', 'PR-GXU', 'PR-GXV', 'PR-GXW', 'PR-GXX', 'PR-GYA', 'PR-GYD', 'PR-GZH', 'PR-GZI', 'PR-GZS', 'PR-GZU', 'PR-GZV', 'PR-VBF', 'PR-VBG', 'PR-VBK', 'PS-GFA', 'PS-GFB', 'PS-GFC', 'PS-GFD', 'PS-GFE', 'PS-GFF', 'PS-GFG', 'PS-GFH', 'PS-GFI', 'PR-XMA', 'PR-XMB', 'PR-XMC', 'PR-XMD', 'PR-XME', 'PR-XMF', 'PR-XMG', 'PR-XMH', 'PR-XMI', 'PR-XMJ', 'PR-XMK', 'PR-XML', 'PR-XMM', 'PR-XMN', 'PR-XMO', 'PR-XMP', 'PR-XMQ', 'PR-XMR', 'PR-XMS', 'PR-XMT', 'PR-XMU', 'PR-XMV', 'PR-XMW', 'PR-XMX', 'PR-XMY', 'PR-XMX', 'PR-XMY', 'PR-XMZ', 'PS-GOL', 'PS-GPA', 'PS-GPB', 'PS-GPC', 'PS-GPD', 'PS-GPE', 'PS-GPF', 'PS-GPG', 'PS-GPH', 'PS-GPI', 'PS-GPJ', 'PS-GPK', 'PS-GPL', 'PS-GPM', 'PS-GPN', 'PS-GPO', 'PS-GPP', 'PS-GPQ', 'PS-GPR', 'PS-GRA', 'PS-GRB', 'PS-GRC', 'PS-GRD', 'PS-GRE', 'PS-GRF', 'PS-GRG', 'PS-GRH', 'PS-GRI', 'PS-GRJ', 'PS-GRK', 'PS-GRL', 'PS-GRO', 'PS-GRQ', 'PS-GRR', 'PS-GRS', 'PS-GRT', 'PS-GRU', 'PS-GRV', 'PS-GRW', 'PS-GRY', 'PS-GRZ'
];

// === LISTA DE OPERADORES ===
export const MOCK_OPERATORS: Operator[] = [
    { id: 'op_horacio', name: 'Horácio', status: 'OCUPADO', vehicleType: 'SERVIDOR' },
    { id: 'op_carlos', name: 'Carlos', status: 'OCUPADO', vehicleType: 'SERVIDOR' },
    { id: 'op_bruno', name: 'Bruno', status: 'OCUPADO', vehicleType: 'SERVIDOR' },
    { id: 'op_felipe', name: 'Felipe', status: 'DISPONÍVEL', vehicleType: 'SERVIDOR' },
    { id: 'op_andre', name: 'André', status: 'OCUPADO', vehicleType: 'SERVIDOR' },
    { id: 'op_gabriel', name: 'Gabriel', status: 'OCUPADO', vehicleType: 'SERVIDOR' },
    { id: 'op_rodrigo', name: 'Rodrigo', status: 'OCUPADO', vehicleType: 'SERVIDOR' },
    { id: 'op_marcelo', name: 'Marcelo', status: 'DISPONÍVEL', vehicleType: 'SERVIDOR' },
    { id: 'op_sergio', name: 'Sérgio', status: 'DISPONÍVEL', vehicleType: 'SERVIDOR' },
    { id: 'op_ricardo', name: 'Ricardo', status: 'OCUPADO', vehicleType: 'SERVIDOR' },
    { id: 'op_betao', name: 'Betão', status: 'ENCHIMENTO', vehicleType: 'CTA' },
    { id: 'op_tiago', name: 'Tiago', status: 'ENCHIMENTO', vehicleType: 'CTA' },
    { id: 'op_lucas', name: 'Lucas', status: 'DISPONÍVEL', vehicleType: 'CTA' },
    { id: 'op_eduardo', name: 'Eduardo', status: 'OCUPADO', vehicleType: 'CTA' },
    { id: 'op_roberto', name: 'Roberto', status: 'DISPONÍVEL', vehicleType: 'CTA' },
    { id: 'op_mariana', name: 'Mariana', status: 'OCUPADO', vehicleType: 'CTA' },
];

// === CONFIGURAÇÃO DAS SUAS IMAGENS LOCAIS ===
// Mapeamento direto das imagens fornecidas para os operadores
// SALVE AS IMAGENS NA PASTA /public/avatars/ COM OS NOMES ABAIXO
const USER_DEFINED_AVATARS: Record<string, string> = {
    'Horácio': 'face_1.png',
    'Carlos': 'face_2.png',
    'Bruno': 'face_3.png',
    'Felipe': 'face_4.png',
    'André': 'face_5.png',
    'Gabriel': 'face_6.png',
    'Rodrigo': 'face_7.png',
    'Marcelo': 'face_8.png',
    'Sérgio': 'face_9.png',
    'Ricardo': 'face_10.png',
    'Betão': 'face_11.png',
    'Tiago': 'face_12.png',
    'Lucas': 'face_13.png',
    'Eduardo': 'face_14.png',
    'Roberto': 'face_15.png',
    'Mariana': 'face_16.png',
    // Novos mapeamentos para sincronia
    'Paulo': 'face_1.png',
    'Alex': 'face_2.png',
    'Douglas': 'face_3.png',
    'Tavares': 'face_4.png',
    'Julio': 'face_5.png',
    'Sandro': 'face_6.png',
    'Cléber': 'face_7.png',
    'Jose': 'face_8.png',
    'Calazans': 'face_9.png',
    'Silva': 'face_10.png',
    'Manoel': 'face_11.png',
    'Ronald': 'face_12.png',
    'Vinicius': 'face_14.png',
    'Rodolfo': 'face_15.png',
    'Leonardo': 'face_16.png',
    'Michel': 'face_1.png',
    'Joao': 'face_2.png',
    'Adauto': 'face_3.png',
    'Ewerton': 'face_4.png',
    'Guilherme': 'face_5.png',
    'Ildo': 'face_6.png',
    'Peterson': 'face_7.png',
    'Renilson': 'face_8.png',
    'Vagner': 'face_9.png',
    'Medeiros': 'face_10.png',
    'Cesar': 'face_11.png',
    'Flavio': 'face_12.png',
    'Ramos': 'face_13.png',
    'Belentani': 'face_14.png',
    'Eules': 'face_15.png',
    'Souza': 'face_16.png',
    'Luna': 'face_1.png',
    'Huan': 'face_2.png',
    'Luis': 'face_3.png',
    'Luciano': 'face_4.png',
    'Idenilson': 'face_5.png',
    'Kleysson': 'face_6.png',
    'Bastos': 'face_7.png',
    'Elton': 'face_8.png',
    'Wesley': 'face_9.png',
    'Junior': 'face_10.png',
    'Caio': 'face_11.png',
    'Pettinelli': 'face_12.png',
    'Fredison': 'face_13.png',
    'Alves': 'face_14.png',
    'Leandro': 'face_15.png',
    'Feitosa': 'face_16.png',
    'Lopes': 'face_1.png',
    'Givani': 'face_2.png',
    'Renato': 'face_3.png',
    'Costa': 'face_4.png',
    'Gilvan': 'face_5.png',
    'Marques': 'face_6.png',
    'Horacio': 'face_1.png',
    'Laercio': 'face_7.png',
    'Milton': 'face_8.png',
    'Norman': 'face_9.png',
    'Rafael': 'face_10.png',
    'Dourado': 'face_11.png',
    'Venancio': 'face_12.png',
    'Diogo': 'face_13.png',
    'Willian': 'face_14.png',
    'Silverio': 'face_15.png',
    'Regis': 'face_16.png',
    'Cesario': 'face_1.png',
    'Martinez': 'face_2.png',
    'Paschoal': 'face_3.png',
    'Spedini': 'face_4.png',
    'Jonatana': 'face_5.png',
    'Pereira': 'face_6.png',
    'Gustavo': 'face_7.png',
    'Fernando': 'face_8.png',
    'Valdina': 'face_9.png',
    'Renata': 'face_10.png',
    'Zago': 'face_11.png',
    'Torres': 'face_12.png',
    'Solange': 'face_13.png',
    'Loyola': 'face_14.png',
    'Norival': 'face_15.png',
    'Pires': 'face_16.png'
};

// Função para buscar a imagem local
const getAvatarPath = (warName: string) => {
    const filename = USER_DEFINED_AVATARS[warName];
    if (filename) {
        return `/avatars/${filename}`; // Caminho absoluto para a pasta public/avatars
    }
    return ''; // Retorna vazio se não encontrar, o componente usará o ícone padrão
};

// Gerador de perfis usando as imagens locais
const createProfile = (id: string, name: string, warName: string, category: 'AERODROMO' | 'VIP' | 'ILHA', status: any, shift: any): OperatorProfile => {
    // Determine fleet capability based on category
    let fleetCapability: 'CTA' | 'SRV' | 'BOTH' = 'BOTH';
    if (category === 'VIP') fleetCapability = 'CTA';
    if (category === 'ILHA') fleetCapability = 'CTA';
    if (category === 'AERODROMO') fleetCapability = Math.random() > 0.3 ? 'SRV' : 'BOTH';

    // Random last flight end time within last 2 hours
    const lastFlightEnd = new Date(Date.now() - Math.floor(Math.random() * 120) * 60000);

    return {
        id, fullName: name, warName, companyId: `FUNC-${Math.floor(Math.random()*9000)+1000}`, gruId: '237293', vestNumber: '0000', 
        
        // AQUI ESTÁ A MUDANÇA: Usando a função que busca seu arquivo local
        photoUrl: getAvatarPath(warName), 
        
        status, category, lastPosition: 'SBGR',
        shift: { cycle: shift, start: '06:00', end: '15:00' }, airlines: ['LATAM'], ratings: { speed: 5, safety: 5, airlineSpecific: {} }, expertise: { servidor: 95, cta: 60 },
        stats: { flightsWeekly: 42, flightsMonthly: 180, volumeWeekly: 650000, volumeMonthly: 2800000 },
        fleetCapability,
        lastFlightEnd
    };
};

export const MOCK_TEAM_PROFILES: OperatorProfile[] = [
    // --- 05:00 - 14:00 (MANHÃ) ---
    createProfile('op_michel', 'Michel', 'Michel', 'AERODROMO', 'INATIVO', 'MANHÃ'),
    createProfile('op_joao', 'Joao', 'Joao', 'AERODROMO', 'INATIVO', 'MANHÃ'),
    createProfile('op_adauto', 'Adauto', 'Adauto', 'AERODROMO', 'INATIVO', 'MANHÃ'),
    createProfile('op_ewerton', 'Ewerton', 'Ewerton', 'AERODROMO', 'INATIVO', 'MANHÃ'),

    // --- 06:00 - 15:00 (MANHÃ) ---
    createProfile('op_paulo', 'Paulo', 'Paulo', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_alex', 'Alex Barbosa', 'Alex', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_douglas', 'Douglas', 'Douglas', 'AERODROMO', 'DISPONÍVEL', 'MANHÃ'),
    createProfile('op_tavares', 'Tavares', 'Tavares', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_julio', 'Julio', 'Julio', 'AERODROMO', 'DISPONÍVEL', 'MANHÃ'),
    createProfile('op_sandro', 'Sandro', 'Sandro', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_cleber', 'Cléber', 'Cléber', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_jose', 'Jose', 'Jose', 'AERODROMO', 'DISPONÍVEL', 'MANHÃ'),
    createProfile('op_calazans', 'Calazans', 'Calazans', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_silva', 'Silva', 'Silva', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_guilherme', 'Guilherme', 'Guilherme', 'AERODROMO', 'DISPONÍVEL', 'MANHÃ'),
    createProfile('op_ildo', 'Ildo', 'Ildo', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_peterson', 'Peterson', 'Peterson', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_renilson', 'Renilson', 'Renilson', 'AERODROMO', 'DISPONÍVEL', 'MANHÃ'),
    createProfile('op_carlos_m', 'Carlos', 'Carlos', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_vagner', 'Vagner', 'Vagner', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_medeiros', 'Medeiros', 'Medeiros', 'AERODROMO', 'DISPONÍVEL', 'MANHÃ'),
    createProfile('op_cesar', 'Cesar JC', 'Cesar', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_flavio', 'Flavio', 'Flavio', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_ramos', 'Ramos', 'Ramos', 'AERODROMO', 'DISPONÍVEL', 'MANHÃ'),
    createProfile('op_belentani', 'Belentani', 'Belentani', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_eules', 'Eules', 'Eules', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_souza', 'Souza', 'Souza', 'AERODROMO', 'DISPONÍVEL', 'MANHÃ'),
    createProfile('op_luna', 'Luna', 'Luna', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_huan', 'Huan', 'Huan', 'AERODROMO', 'OCUPADO', 'MANHÃ'),

    // --- 06:00 - 16:00 (MANHÃ) ---
    createProfile('op_luis', 'Luis', 'Luis', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_luciano', 'Luciano', 'Luciano', 'AERODROMO', 'DISPONÍVEL', 'MANHÃ'),
    createProfile('op_idenilson', 'Idenilson', 'Idenilson', 'AERODROMO', 'OCUPADO', 'MANHÃ'),

    // --- 14:30 - 23:30 (TARDE - ILHA/AERODROMO) ---
    createProfile('op_manoel', 'Manoel', 'Manoel', 'ILHA', 'ENCHIMENTO', 'TARDE'),
    createProfile('op_ronald', 'Ronald', 'Ronald', 'ILHA', 'ENCHIMENTO', 'TARDE'),
    createProfile('op_kleysson', 'Kleysson', 'Kleysson', 'ILHA', 'DISPONÍVEL', 'TARDE'),
    createProfile('op_vinicius', 'Vinicius', 'Vinicius', 'ILHA', 'ENCHIMENTO', 'TARDE'),
    createProfile('op_bastos', 'Bastos', 'Bastos', 'ILHA', 'DISPONÍVEL', 'TARDE'),
    createProfile('op_elton', 'Elton', 'Elton', 'ILHA', 'ENCHIMENTO', 'TARDE'),

    // --- 14:42 - 23:30 (TARDE) ---
    createProfile('op_rodolfo', 'Rodolfo', 'Rodolfo', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_leonardo', 'Leonardo', 'Leonardo', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_wesley', 'Wesley', 'Wesley', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_junior', 'Junior', 'Junior', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_lucas_t', 'Lucas', 'Lucas', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_caio', 'Caio', 'Caio', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_pettinelli', 'Pettinelli', 'Pettinelli', 'AERODROMO', 'INATIVO', 'TARDE'),

    // --- 15:15 - 00:00 (TARDE) ---
    createProfile('op_fredison', 'Fredison', 'Fredison', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_alves', 'Alves', 'Alves', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_leandro', 'Leandro Eufra', 'Leandro', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_jose_edson', 'Jose Edson', 'Jose', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_feitosa', 'Feitosa', 'Feitosa', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_lopes', 'Lopes', 'Lopes', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_givani', 'Givani', 'Givani', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_renato', 'Renato', 'Renato', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_costa', 'Costa', 'Costa', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_gilvan', 'Gilvan', 'Gilvan', 'AERODROMO', 'INATIVO', 'TARDE'),

    // --- 16:00 - 00:37 (TARDE) ---
    createProfile('op_marques', 'Marques', 'Marques', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_horacio_t', 'Horacio', 'Horacio', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_laercio', 'Laercio', 'Laercio', 'AERODROMO', 'INATIVO', 'TARDE'),

    // --- 21:12 - 06:00 (NOITE) ---
    createProfile('op_milton', 'Milton', 'Milton', 'AERODROMO', 'INATIVO', 'NOITE'),
    createProfile('op_norman', 'Norman', 'Norman', 'AERODROMO', 'INATIVO', 'NOITE'),
    createProfile('op_rafael', 'Rafael', 'Rafael', 'AERODROMO', 'INATIVO', 'NOITE'),
    createProfile('op_dourado', 'Dourado', 'Dourado', 'AERODROMO', 'INATIVO', 'NOITE'),
    createProfile('op_venancio', 'Venancio', 'Venancio', 'AERODROMO', 'INATIVO', 'NOITE'),
    createProfile('op_diogo', 'Diogo', 'Diogo', 'AERODROMO', 'INATIVO', 'NOITE'),
    createProfile('op_willian', 'Willian', 'Willian', 'AERODROMO', 'INATIVO', 'NOITE'),
    createProfile('op_silverio', 'Silverio', 'Silverio', 'AERODROMO', 'INATIVO', 'NOITE'),
    createProfile('op_regis', 'Regis', 'Regis', 'AERODROMO', 'INATIVO', 'NOITE'),

    // --- LIDERES ---
    createProfile('op_cesario', 'Cesario', 'Cesario', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_martinez', 'Martinez', 'Martinez', 'AERODROMO', 'DISPONÍVEL', 'MANHÃ'),
    createProfile('op_paschoal', 'Paschoal', 'Paschoal', 'AERODROMO', 'OCUPADO', 'MANHÃ'),
    createProfile('op_spedini', 'Spedini', 'Spedini', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_jonatana', 'Jonatana', 'Jonatana', 'AERODROMO', 'INATIVO', 'TARDE'),
    createProfile('op_pereira', 'Pereira', 'Pereira', 'AERODROMO', 'INATIVO', 'NOITE'),
    createProfile('op_gustavo', 'Gustavo', 'Gustavo', 'AERODROMO', 'INATIVO', 'NOITE'),

    // --- PATIO VIP ---
    createProfile('op_fernando', 'Fernando', 'Fernando', 'VIP', 'OCUPADO', 'MANHÃ'),
    createProfile('op_valdina', 'Valdina', 'Valdina', 'VIP', 'DISPONÍVEL', 'MANHÃ'),
    createProfile('op_renata', 'Renata', 'Renata', 'VIP', 'OCUPADO', 'MANHÃ'),
    createProfile('op_zago', 'Zago', 'Zago', 'VIP', 'DISPONÍVEL', 'MANHÃ'),
    createProfile('op_torres', 'Torres', 'Torres', 'VIP', 'INATIVO', 'TARDE'),
    createProfile('op_solange', 'Solange', 'Solange', 'VIP', 'INATIVO', 'TARDE'),
    createProfile('op_loyola', 'Loyola', 'Loyola', 'VIP', 'INATIVO', 'TARDE'),
    createProfile('op_norival', 'Norival', 'Norival', 'VIP', 'INATIVO', 'NOITE'),
    createProfile('op_pires', 'Pires', 'Pires', 'VIP', 'INATIVO', 'NOITE'),
].map(p => {
    // Ajustar horários específicos
    if (['Michel', 'Joao', 'Adauto', 'Ewerton'].includes(p.warName)) { p.shift = { cycle: 'MANHÃ', start: '05:00', end: '14:00' }; }
    else if (['Luis', 'Luciano', 'Idenilson'].includes(p.warName)) { p.shift = { cycle: 'MANHÃ', start: '06:00', end: '16:00' }; }
    else if (['Manoel', 'Ronald', 'Kleysson', 'Vinicius', 'Bastos', 'Elton'].includes(p.warName)) { p.shift = { cycle: 'TARDE', start: '14:30', end: '23:30' }; }
    else if (['Rodolfo', 'Leonardo', 'Wesley', 'Junior', 'Lucas', 'Caio', 'Pettinelli'].includes(p.warName)) { p.shift = { cycle: 'TARDE', start: '14:42', end: '23:30' }; }
    else if (['Fredison', 'Alves', 'Leandro', 'Jose', 'Feitosa', 'Lopes', 'Givani', 'Renato', 'Costa', 'Gilvan'].includes(p.warName)) { p.shift = { cycle: 'TARDE', start: '15:15', end: '00:00' }; }
    else if (['Marques', 'Horacio', 'Laercio'].includes(p.warName)) { p.shift = { cycle: 'TARDE', start: '16:00', end: '00:37' }; }
    else if (['Milton', 'Norman', 'Rafael', 'Dourado', 'Venancio', 'Diogo', 'Willian', 'Silverio', 'Regis'].includes(p.warName)) { p.shift = { cycle: 'NOITE', start: '21:12', end: '06:00' }; }
    else if (['Norival'].includes(p.warName)) { p.shift = { cycle: 'NOITE', start: '21:00', end: '06:00' }; }
    else if (['Pires'].includes(p.warName)) { p.shift = { cycle: 'NOITE', start: '22:00', end: '06:00' }; }
    
    return p;
});

// Função auxiliar para verificar se um operador está no turno em um dado horário
const isOperatorInShift = (operator: OperatorProfile, date: Date): boolean => {
    const [sH, sM] = operator.shift.start.split(':').map(Number);
    const [eH, eM] = operator.shift.end.split(':').map(Number);
    
    const startMins = sH * 60 + sM;
    const endMins = eH * 60 + eM;
    const currentMins = date.getHours() * 60 + date.getMinutes();

    if (startMins < endMins) {
        return currentMins >= startMins && currentMins <= endMins;
    } else {
        // Turno noturno (ex: 21:00 - 06:00)
        return currentMins >= startMins || currentMins <= endMins;
    }
};

// Função para obter um operador aleatório válido para o horário
const getRandomOperatorForTime = (date: Date, vehicleType: 'CTA' | 'SERVIDOR' = 'SERVIDOR'): OperatorProfile | undefined => {
    const validOperators = MOCK_TEAM_PROFILES.filter(op => {
        // Verifica turno
        if (!isOperatorInShift(op, date)) return false;
        
        // Verifica capacidade do veículo (simplificado)
        if (vehicleType === 'CTA' && op.fleetCapability === 'SRV') return false;
        if (vehicleType === 'SERVIDOR' && op.fleetCapability === 'CTA') return false;
        
        return true;
    });

    if (validOperators.length === 0) return undefined;
    return validOperators[Math.floor(Math.random() * validOperators.length)];
};

// Gerador de Voos Massivo
const generateMockFlights = (): FlightData[] => {
    const flights: FlightData[] = [];
    const airlines = [
        { code: 'G3', name: 'GOL', models: ['B737-800', 'B737-MAX8'] },
        { code: 'LA', name: 'LATAM', models: ['A320', 'A321', 'B767'] },
        { code: 'AD', name: 'AZUL', models: ['A320neo', 'E195-E2'] },
        { code: 'TP', name: 'TAP', models: ['A330-900'] },
        { code: 'AF', name: 'AIR FRANCE', models: ['B777-300'] },
        { code: 'LH', name: 'LUFTHANSA', models: ['B747-8'] },
        { code: 'CM', name: 'COPA', models: ['B737-800'] },
        { code: 'UA', name: 'UNITED', models: ['B777-200'] },
        { code: 'AA', name: 'AMERICAN', models: ['B777-300'] },
        { code: 'KL', name: 'KLM', models: ['B787-9'] },
    ];

    const origins = ['SBGR', 'SBSP', 'SBRJ', 'SBGL', 'SBCF', 'SBSV', 'SBNT', 'SBPA', 'SBCT', 'KMIA', 'KJFK', 'EGLL', 'LFPG', 'EDDF', 'LEMD', 'LPPT'];
    
    const now = new Date();
    let flightCounter = 1000;

    // Helper para gerar lote de voos
    const generateBatch = (startHour: number, endHour: number, count: number) => {
        const startTime = new Date(now);
        startTime.setHours(startHour, 0, 0, 0);
        
        const endTime = new Date(now);
        if (endHour === 24) {
            endTime.setHours(23, 59, 59, 999);
        } else {
            endTime.setHours(endHour, 0, 0, 0);
        }
        
        const durationMs = endTime.getTime() - startTime.getTime();
        const intervalMs = durationMs / count;

        for (let i = 0; i < count; i++) {
            flightCounter++;
            const airline = airlines[Math.floor(Math.random() * airlines.length)];
            const model = airline.models[Math.floor(Math.random() * airline.models.length)];
            const isInternational = ['TP', 'AF', 'LH', 'UA', 'AA', 'KL', 'CM'].includes(airline.code);
            
            // ETA e ETD
            // Distribui uniformemente no intervalo
            const flightTime = new Date(startTime.getTime() + (i * intervalMs) + (Math.random() * intervalMs * 0.5));
            
            const eta = new Date(flightTime);
            // Tempo de solo varia: Doméstico 45-90min, Inter 120-240min
            const groundTime = isInternational ? (120 + Math.random() * 120) : (45 + Math.random() * 45);
            const etd = new Date(eta.getTime() + groundTime * 60000);

            // Determinar Status baseado no "Agora"
            let status: FlightStatus;
            let operator: OperatorProfile | undefined = undefined;
            let designationTime: Date | undefined = undefined;
            let startTimeAb: Date | undefined = undefined;
            let endTimeAb: Date | undefined = undefined;
            let logs: FlightLog[] = [];
            let fuelStatus = 0;
            let volume = 0;

            const minutesDiff = (now.getTime() - etd.getTime()) / 60000; // Negativo = Futuro, Positivo = Passado
            const minutesToEta = (eta.getTime() - now.getTime()) / 60000;

            if (minutesDiff > 15) {
                // Voo já partiu (FINALIZADO)
                status = FlightStatus.FINALIZADO;
                fuelStatus = 100;
                volume = isInternational ? Math.floor(Math.random() * 50000 + 20000) : Math.floor(Math.random() * 10000 + 2000);
                
                // Tenta designar operador do turno correto
                // Abastecimento ocorre ~40 min antes do ETD
                const fuelingTime = new Date(etd.getTime() - 40 * 60000);
                operator = getRandomOperatorForTime(fuelingTime, isInternational ? 'SERVIDOR' : 'SERVIDOR');
                
                if (operator) {
                    designationTime = new Date(fuelingTime.getTime() - 20 * 60000);
                    startTimeAb = fuelingTime;
                    endTimeAb = new Date(fuelingTime.getTime() + (isInternational ? 40 : 20) * 60000);
                    logs.push(createLog(0, 'SISTEMA', 'Abastecimento finalizado com sucesso.', operator.warName));
                }

            } else if (minutesDiff > -20 && minutesDiff <= 15) {
                // Voo saindo agora ou recém saído (FINALIZANDO ou ABASTECENDO atrasado)
                status = Math.random() > 0.5 ? FlightStatus.FINALIZADO : FlightStatus.ABASTECENDO;
                fuelStatus = 95;
                operator = getRandomOperatorForTime(now);
                if (operator) {
                    designationTime = new Date(now.getTime() - 40 * 60000);
                    startTimeAb = new Date(now.getTime() - 20 * 60000);
                }
            } else if (minutesDiff > -60 && minutesDiff <= -20) {
                // 20 a 60 min para partir (ABASTECENDO ou DESIGNADO)
                status = Math.random() > 0.3 ? FlightStatus.ABASTECENDO : FlightStatus.DESIGNADO;
                fuelStatus = Math.floor(Math.random() * 50);
                operator = getRandomOperatorForTime(now);
                if (operator) {
                    designationTime = new Date(now.getTime() - 20 * 60000);
                    if (status === FlightStatus.ABASTECENDO) {
                        startTimeAb = new Date(now.getTime() - 10 * 60000);
                    }
                } else {
                    status = FlightStatus.FILA; // Sem operador vira FILA
                }
            } else if (minutesDiff > -120 && minutesDiff <= -60) {
                // 1h a 2h para partir (FILA ou CHEGADA)
                // Se já pousou (ETA < Agora), então FILA ou CHEGADA (Calço)
                if (minutesToEta < 0) {
                    status = Math.random() > 0.4 ? FlightStatus.FILA : FlightStatus.CHEGADA;
                } else {
                    status = FlightStatus.CHEGADA;
                }
            } else {
                // Mais de 2h para partir
                status = FlightStatus.CHEGADA;
            }

            // Ajustes finos
            if (status === FlightStatus.ABASTECENDO && !operator) status = FlightStatus.FILA;
            if (status === FlightStatus.DESIGNADO && !operator) status = FlightStatus.FILA;

            flights.push({
                id: `flt-${flightCounter}`,
                flightNumber: `${airline.code}-${flightCounter}`,
                departureFlightNumber: `${airline.code}-${flightCounter + 1}`,
                airline: airline.name,
                airlineCode: airline.code,
                model: model,
                registration: `PR-${Math.random().toString(36).substr(2, 3).toUpperCase()}`,
                origin: origins[Math.floor(Math.random() * origins.length)],
                destination: origins[Math.floor(Math.random() * origins.length)],
                eta: eta.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                etd: etd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                positionId: `${Math.floor(Math.random() * 100) + 200}`,
                fuelStatus: fuelStatus,
                status: status,
                operator: operator?.warName,
                vehicleType: isInternational ? 'SERVIDOR' : 'SERVIDOR', // Simplificação
                volume: volume,
                designationTime: designationTime,
                startTime: startTimeAb,
                endTime: endTimeAb,
                messages: [],
                logs: logs,
                isOnGround: minutesToEta < 0
            });
        }
    };

    // --- GERAR VOOS POR TURNO ---
    
    // MANHÃ: 135 voos (06:00 - 14:00)
    generateBatch(6, 14, 135);

    // TARDE: 135 voos (14:00 - 21:00)
    generateBatch(14, 21, 135);

    // NOITE: 15 voos (21:00 - 06:00)
    // Dividido em: 21:00-23:59 (Hoje) e 00:00-06:00 (Hoje cedo)
    // Total 9h. Proporção 1/3 (3h) e 2/3 (6h).
    // 15 voos total -> ~5 voos (21-24h) e ~10 voos (00-06h)
    generateBatch(21, 24, 5);
    generateBatch(0, 6, 10);

    return flights.sort((a, b) => {
        // Ordenar por ETD
        const dateA = new Date();
        const [hA, mA] = a.etd.split(':').map(Number);
        dateA.setHours(hA, mA, 0, 0);
        
        const dateB = new Date();
        const [hB, mB] = b.etd.split(':').map(Number);
        dateB.setHours(hB, mB, 0, 0);
        
        return dateA.getTime() - dateB.getTime();
    });
};

export const MOCK_FLIGHTS: FlightData[] = generateMockFlights();
