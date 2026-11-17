// Arquivo: dados.js
const WHATSAPP = '5516997854876';

const maquinas = [
    {
        id: 1,
        nome: "Trator John Deere 8270R (Transmissão e motor revisados em 2026) - Único dono",
        marca: "John Deere",
        ano: 2018,
        horas: 18967,
        preco: 610000,
        local: "Região de Botucatu-SP",
        imagens: [
            "imagens/JD 8270r-01.jpg.jpg", "imagens/JD 8270r-02.jpg.jpg", "imagens/JD 8270r-03.jpg.jpg",
            "imagens/JD 8270r-04.jpg.jpg", "imagens/JD 8270r-05.jpg.jpg", "imagens/JD 8270r-06.jpg.jpg",
            "imagens/JD 8270r-07.jpg.jpg", "imagens/JD 8270r-08.jpg.jpg", "imagens/JD 8270r-09.jpg.jpg",
            "imagens/JD 8270r-10.jpg.jpg"
        ],
        tipo: "Trator",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 2,
        nome: "Trator Valtra A850 (Único Dono)",
        marca: "Valtra",
        ano: 2012,
        horas: 6500,
        preco: 110000,
        local: "Região de Itaporanga-SP",
        imagens: [
            "imagens/Valtra A850-2.jpg.jpeg", "imagens/Valtra A850-3.jpg.jpeg",
            "imagens/Valtra A850-4.jpg.jpeg", "imagens/Valtra A850-6.jpg.jpeg", "imagens/Valtra A850-1.jpg.jpeg"
        ],
        tipo: "Trator",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 3,
        nome: "Trator Ford 7610 (Transmissão e motor revisados)",
        marca: "Ford",
        ano: 1990,
        preco: 95000,
        local: "Região de Marília-SP",
        imagens: ["imagens/Ford7610.jpg.jpeg"],
        tipo: "Trator",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 4,
        nome: "Trator TS 110  - New Holland (Com Reversor)",
        marca: "New Holland",
        ano: 2004,
        horas: 11400,
        preco: 100000,
        local: "Região de Santa Cruz do Rio Pardo-SP",
        imagens: [
            "imagens/TratorTS110-1.jpg.jpeg", "imagens/TratorTS110-2.jpg.jpeg", "imagens/TratorTS110-3.jpg.jpeg"
        ],
        tipo: "Trator",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 5,
        nome: "Colheitadeira John Deere S440 + Plataforma de Corte 625F - 25 Pés (Colhedora de Soja) - Único dono",
        marca: "John Deere",
        ano: 2017,
        horas: 3186,
        preco: 540000,
        local: "Região de Botucatu-SP",
        imagens: [
            "Cliente Raphael/ColhedoraS440_05.jpg.jpeg", "Cliente Raphael/ColhedoraS440_01.jpg.jpeg",
            "Cliente Raphael/ColhedoraS440_02.jpg.jpeg", "Cliente Raphael/ColhedoraS440_03.jpg.jpeg",
            "Cliente Raphael/ColhedoraS440_04.jpg.jpeg", "Cliente Raphael/ColhedoraS440_06.jpg.jpeg",
            "Cliente Raphael/ColhedoraS440_07.jpg.jpeg", "Cliente Raphael/ColhedoraS440_08.jpg.jpeg",
            "Cliente Raphael/Plataforma625F_1.jpg.jpeg"
        ],
        tipo: "Colhedoras",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 6,
        nome: "Quadriciclo Honda TRX/420 - Herbicida",
        marca: "Honda",
        ano: 2010,
        horas: 6439,
        preco: 37000,
        local: "Região de Botucatu-SP",
        imagens: [
            "Cliente Raphael/Quadriciclo TRX_420_1.jpg.jpeg", "Cliente Raphael/Quadriciclo TRX_420_2.jpg.jpeg",
            "Cliente Raphael/Quadriciclo TRX_420_3.jpg.jpeg", "Cliente Raphael/Quadriciclo TRX_420_4.jpg.jpeg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 7,
        nome: "Pulverizador Jacto Condor 800 - Barra de 14 metros (Elétrico eletrônico, 4 sessões)",
        marca: "Jacto",
        ano: 2024,
        preco: 70000,
        local: "Região de Marília-SP",
        imagens: [
            "Cliente_Douglas/Pulverizador Jacto_Condor 800_1.jpg.jpeg", "Cliente_Douglas/Pulverizador Jacto_Condor 800_2.jpg.jpeg",
            "Cliente_Douglas/Pulverizador Jacto_Condor 800_3.jpg.jpeg", "Cliente_Douglas/Pulverizador Jacto_Condor 800_4.jpg.jpeg",
            "Cliente_Douglas/Pulverizador Jacto_Condor 800_5.jpg.jpeg", "Cliente_Douglas/Pulverizador Jacto_Condor 800_6.jpg.jpeg",
            "Cliente_Douglas/Pulverizador Jacto_Condor 800_7.jpg.jpeg", "Cliente_Douglas/Pulverizador Jacto_Condor 800_8.jpg.jpeg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 8,
        nome: "Plantadora Adubadora de Soja COP CA 9/9",
        marca: "Tatu Marchesan",
        ano: 2019,
        preco: 165000,
        local: "Região de Botucatu-SP",
        imagens: [
            "Cliente Raphael/97291-PLANTADORA ADUBADORA DE SOJA COP CA 99-1.jpg.jpeg",
            "Cliente Raphael/97291-PLANTADORA ADUBADORA DE SOJA COP CA 99-2.jpg.jpeg",
            "Cliente Raphael/97291-PLANTADORA ADUBADORA DE SOJA COP CA 99-3.jpg.jpeg",
            "Cliente Raphael/97291-PLANTADORA ADUBADORA DE SOJA COP CA 99-4.jpg.jpeg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 9,
        nome: "CARREGADEIRA CBT 8060 4X4",
        marca: "CBT",
        ano: 1990,
        horas: 2477,
        preco: 110000,
        local: "Região de Botucatu-SP",
        imagens: [
            "Cliente Raphael/CarregaderiaCBT8060-2477h_1.jpg.jpg", "Cliente Raphael/CarregaderiaCBT8060-2477h_2.jpg.jpg",
            "Cliente Raphael/CarregaderiaCBT8060-2477h_3.jpg.jpg", "Cliente Raphael/CarregaderiaCBT8060-2477h_4.jpg.jpg",
            "Cliente Raphael/CarregaderiaCBT8060-2477h_5.jpg.jpg", "Cliente Raphael/CarregaderiaCBT8060-2477h_6.jpg.jpg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 10,
        nome: "Plantadeira de Cana TT 8022BT (Automatizada)",
        marca: "TT do Brasil",
        ano: 2023,
        preco: 430000,
        local: "Região de Botucatu-SP",
        imagens: [
            "Cliente Raphael/97319-PLANTADEIRA CANA TT 8022BT-1.jpg.jpeg", "Cliente Raphael/97319-PLANTADEIRA CANA TT 8022BT-2.jpg.jpeg",
            "Cliente Raphael/97319-PLANTADEIRA CANA TT 8022BT-3.jpg.jpeg", "Cliente Raphael/97319-PLANTADEIRA CANA TT 8022BT-4.jpg.jpeg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 11,
        nome: "Plantadeira de Cana TT 8022 (Automatizada)",
        marca: "TT do Brasil",
        ano: 2020,
        preco: 375000,
        local: "Região de Botucatu-SP",
        imagens: [
            "Cliente Raphael/97311-PLANTADEIRA DE CANA  TT 8022-1.jpg.jpeg", "Cliente Raphael/97311-PLANTADEIRA DE CANA  TT 8022-2.jpg.jpeg",
            "Cliente Raphael/97311-PLANTADEIRA DE CANA  TT 8022-3.jpg.jpeg", "Cliente Raphael/97311-PLANTADEIRA DE CANA  TT 8022-4.jpg.jpeg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 12,
        nome: "Plantadeira de Cana DMB",
        marca: "DMB",
        ano: 2009,
        preco: 270000,
        local: "Região de Botucatu-SP",
        imagens: [
            "Cliente Raphael/97150-PLANTADEIRA DE CANA DMB_1.jpg.jpeg", "Cliente Raphael/97150-PLANTADEIRA DE CANA DMB_2.jpg.jpeg",
            "Cliente Raphael/97150-PLANTADEIRA DE CANA DMB_3.jpg.jpeg", "Cliente Raphael/97150-PLANTADEIRA DE CANA DMB_4.jpg.jpeg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 13,
        nome: "TRANSBORDO SE 10500",
        marca: "Sermag",
        ano: 2011,
        preco: 40000,
        local: "Região de Botucatu-SP",
        imagens: [
            "Cliente Raphael/97181-TRANSBORDO SE 10500 - 1.jpg.jpeg", "Cliente Raphael/97181-TRANSBORDO SE 10500 - 2.jpg.jpeg",
            "Cliente Raphael/97181-TRANSBORDO SE 10500 - 3.jpg.jpeg", "Cliente Raphael/97181-TRANSBORDO SE 10500 - 4.jpg.jpeg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 14,
        nome: "CARRETA SULCADORA TORTA 150MM",
        marca: "CARDEROLI",
        ano: 2023,
        preco: 130000,
        local: "Região de Botucatu-SP",
        imagens: [
            "Cliente Raphael/97122-CARRETA SULCADORA TORTA150MM_1.jpg .jpeg", "Cliente Raphael/97122-CARRETA SULCADORA TORTA150MM_2.jpg .jpeg",
            "Cliente Raphael/97122-CARRETA SULCADORA TORTA150MM_3.jpg .jpeg", "Cliente Raphael/97122-CARRETA SULCADORA TORTA150MM_4.jpg .jpeg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 15,
        nome: "Plantadeira Valtra Hitech 11 linhas - Espaçamento 0,6m (60cm) ",
        marca: "Valtra",
        ano: 2012,
        preco: 110000,
        local: "Região de Marília-SP",
        imagens: [
            "imagens/Plantadeira-Valtra-01.jpg.jpg", "imagens/Plantadeira-Valtra-02.jpg.jpg", "imagens/Plantadeira-Valtra-03.jpg.jpg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 16,
        nome: "DISTRIBUIDOR DE FERTILIZANTES IPACOL DFD 1300",
        marca: "IPACOL",
        ano: 2020,
        preco: 10000,
        local: "Região de Botucatu-SP",
        imagens: ["Cliente Raphael/97313-DISTRIBUIDOR DE FERTILIZANTES IPACOL DFD 1300-1.jpg.jpeg"],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 17,
        nome: "DISTRIBUIDOR DE TORTA DAMASCENO",
        marca: "DAMASCENO",
        ano: 2005,
        preco: 28000,
        local: "Região de Botucatu-SP",
        imagens: [
            "Cliente Raphael/97078-CARRETA DISTR TORTA DAMASCENO_1.jpg.jpeg", "Cliente Raphael/97078-CARRETA DISTR TORTA DAMASCENO_2.jpg.jpeg",
            "Cliente Raphael/97078-CARRETA DISTR TORTA DAMASCENO_3.jpg.jpeg", "Cliente Raphael/97078-CARRETA DISTR TORTA DAMASCENO_4.jpg.jpeg",
            "Cliente Raphael/97078-CARRETA DISTR TORTA DAMASCENO_5.jpg.jpeg", "Cliente Raphael/97078-CARRETA DISTR TORTA DAMASCENO_6.jpg.jpeg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 18,
        nome: "Arado Aiveca 4 bicos - Tatu Marchesan ",
        marca: "Tatu Marchesan",
        ano: 2023,
        preco: 16000,
        local: "Região de Marília-SP",
        imagens: [
            "Cliente_Douglas/Arado 4 bicos_marchesan_1.jpg.jpeg", "Cliente_Douglas/Arado 4 bicos_marchesan_2.jpg.jpeg",
            "Cliente_Douglas/Arado 4 bicos_marchesan_3.jpg.jpeg", "Cliente_Douglas/Arado 4 bicos_marchesan_4.jpg.jpeg",
            "Cliente_Douglas/Arado 4 bicos_marchesan_5.jpg.jpeg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 19,
        nome: "Arado Aiveca 3 bicos - Tatu Marchesan ",
        marca: "Tatu Marchesan",
        ano: 2023,
        preco: 14000,
        local: "Região de Marília-SP",
        imagens: [
            "Cliente_Douglas/Arado 3 bicos_marchesan_3.jpg.jpeg", "Cliente_Douglas/Arado 3 bicos_marchesan_2.jpg.jpeg", "Cliente_Douglas/Arado 3 bicos_marchesan_1.jpg.jpeg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 20,
        nome: "Arrancadeira de Mandioca e Batata ",
        marca: "CLK",
        ano: 2025,
        preco: 45000,
        local: "Região de Marília-SP",
        imagens: [
            "Cliente_Douglas/Arrancadeira de mandioca_1.jpg.jpeg", "Cliente_Douglas/Arrancadeira de mandioca_2.jpg.jpeg",
            "Cliente_Douglas/Arrancadeira de mandioca_3.jpg.jpeg", "Cliente_Douglas/Arrancadeira de mandioca_4.jpg.jpeg",
            "Cliente_Douglas/Arrancadeira de mandioca_5.jpg.jpeg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 22,
        nome: "Trator Valtra A52s (57cv)",
        marca: "Valtra",
        ano: 2022,
        horas: 898,
        preco: 124000,
        local: "Região de Itaporanga-SP",
        imagens: [
            "imagens/Valtra A52s.01.jpg.jpg", "imagens/Valtra A52s.02.jpg.jpg", "imagens/Valtra A52s.03.jpg.jpg",
            "imagens/Valtra A52s.04.jpg.jpg", "imagens/Valtra A52s.05.jpg.jpg", "imagens/Valtra A52s.06.jpg.jpg"
        ],
        tipo: "Trator",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 23,
        nome: "Trator Valtra BM 125 (Cabine Original) ",
        marca: "Valtra",
        ano: 2013,
        horas: 9853,
        preco: 150000,
        local: "Região de Santa Cruz do Rio Pardo-SP",
        imagens: [
            "imagens/Valtra BM125-1.jpg.jpeg", "imagens/Valtra BM125-2.jpg.jpeg", "imagens/Valtra BM125-3.jpg.jpeg",
            "imagens/Valtra BM125-4.jpg.jpeg", "imagens/Valtra BM125-5.jpg.jpeg", "imagens/Valtra BM125-6.jpg.jpeg",
            "imagens/Valtra BM125-7.jpg.jpeg", "imagens/Valtra BM125-8.jpg.jpeg"
        ],
        tipo: "Trator",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 24,
        nome: "Trator Massey Fergunson 6713",
        marca: "Massey Fergunson",
        ano: 2020,
        horas: 6000,
        preco: 235000,
        local: "Região de Ibiúna-SP",
        imagens: [
            "imagens/MF6713.01.jpg.jpeg", "imagens/MF6713.02.jpg.jpeg", "imagens/MF6713.03.jpg.jpeg",
            "imagens/MF6713.04.jpg.jpeg", "imagens/MF6713.05.jpg.jpeg"
        ],
        tipo: "Trator",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 25,
        nome: "Trator Massey Fergunson 290 (Original/3 Alavancas)",
        marca: "Massey Fergunson",
        ano: 1994,
        preco: 90000,
        local: "Região de Marília-SP",
        imagens: [
            "imagens/MF 290-01.jpg.jpg", "imagens/MF 290-02.jpg.jpg", "imagens/MF 290-03.jpg.jpg", "imagens/MF 290-04.jpg.jpg"
        ],
        tipo: "Trator",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 26,
        nome: "PÁ CARREGADEIRA VOLVO LF70",
        marca: "Volvo",
        ano: 2013,
        horas: 20601,
        preco: 305000,
        local: "Região de Botucatu-SP",
        imagens: [
            "Cliente Raphael/pa_carregaderia_LF70_7.jpg.jpeg", "Cliente Raphael/pa_carregaderia_LF70_6.jpg.jpeg",
            "Cliente Raphael/pa_carregaderia_LF70_5.jpg.jpeg", "Cliente Raphael/pa_carregaderia_LF70_4.jpg.jpeg",
            "Cliente Raphael/pa_carregaderia_LF70_3.jpg.jpeg", "Cliente Raphael/pa_carregaderia_LF70_2.jpg.jpeg",
            "Cliente Raphael/pa_carregaderia_LF70_1.jpg.jpeg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 27,
        nome: "Bobcat E35 (Único Dono)",
        marca: "Bobcat",
        ano: 2018,
        horas: 3200,
        preco: 185000,
        local: "Região de Marília-SP",
        imagens: [
            "imagens/BobcatE35-1.jpg.jpeg", "imagens/BobcatE35-2.jpg.jpeg", "imagens/BobcatE35-3.jpg.jpeg",
            "imagens/BobcatE35-4.jpg.jpeg", "imagens/BobcatE35-5.jpg.jpeg", "imagens/BobcatE35-6.jpg.jpeg",
            "imagens/BobcatE35-7.jpg.jpeg", "imagens/BobcatE35-8.jpg.jpeg", "imagens/BobcatE35-9.jpg.jpeg"
        ],
        tipo: "Implementos",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 28,
        nome: "Trator Valtra BM110",
        marca: "Valtra",
        ano: 2004,
        horas: 10900,
        preco: 110000,
        local: "Região de Marília-SP",
        imagens: [
            "imagens/Valtra-BM-01.jpg.jpeg", "imagens/Valtra-BM-02.jpg.jpeg", "imagens/Valtra-BM-03.jpg.jpeg"
        ],
        tipo: "Trator",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    },
    {
        id: 29,
        nome: "Trator MF 4275 - Lâmina e concha com bomba independente (Único Dono)",
        marca: "Massey Fergunson",
        ano: 2013,
        preco: 155000,
        local: "Região de Marília-SP",
        imagens: [
            "imagens/MF 4275-1.jpg.jpeg", "imagens/MF 4275-2.jpg.jpeg", "imagens/MF 4275-3.jpg.jpeg"
        ],
        tipo: "Trator",
        vendedor: { telefone: "16 99785-4876", email: "contato.agrogiro@gmail.com" }
    }
];
