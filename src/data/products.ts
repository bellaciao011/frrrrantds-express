// Catálogo
import img1 from "@/assets/triciclo/triciclo-1.png";
import img2 from "@/assets/triciclo/triciclo-2.png";
import img3 from "@/assets/triciclo/triciclo-3.png";
import red1 from "@/assets/triciclo/triciclo-red-50.png";
import red2 from "@/assets/triciclo/triciclo-red-51.png";
import red3 from "@/assets/triciclo/triciclo-red-52.png";
import red4 from "@/assets/triciclo/triciclo-red-53.png";
import red5 from "@/assets/triciclo/triciclo-red-54.png";
import caqui1 from "@/assets/triciclo/triciclo-caqui-55.png";
import caqui2 from "@/assets/triciclo/triciclo-caqui-56.png";
import caqui3 from "@/assets/triciclo/triciclo-caqui-57.png";
import caqui4 from "@/assets/triciclo/triciclo-caqui-58.png";
import caqui5 from "@/assets/triciclo/triciclo-caqui-59.png";
import c3a from "@/assets/scooter-c3/c3-79.png";
import c3b from "@/assets/scooter-c3/c3-80.png";
import c3c from "@/assets/scooter-c3/c3-81.png";
import c3d from "@/assets/scooter-c3/c3-82.png";
import c3pa from "@/assets/scooter-c3pro/c3pro-83.png";
import c3pb from "@/assets/scooter-c3pro/c3pro-84.png";
import c3pc from "@/assets/scooter-c3pro/c3pro-85.png";
import c3pd from "@/assets/scooter-c3pro/c3pro-86.png";
import c3pe from "@/assets/scooter-c3pro/c3pro-87.png";
import ae8a from "@/assets/ebike-ae8/ae8-88.png";
import ae8b from "@/assets/ebike-ae8/ae8-89.png";
import ae8c from "@/assets/ebike-ae8/ae8-90.png";
import ae8d from "@/assets/ebike-ae8/ae8-91.png";
import ae8e from "@/assets/ebike-ae8/ae8-92.png";
import zs1 from "@/assets/spinning-zs290/zs290-93.png";
import zs2 from "@/assets/spinning-zs290/zs290-94.png";
import zs3 from "@/assets/spinning-zs290/zs290-95.png";
import zs4 from "@/assets/spinning-zs290/zs290-96.png";
import zs5 from "@/assets/spinning-zs290/zs290-97.png";
import zs6 from "@/assets/spinning-zs290/zs290-98.png";
import zs7 from "@/assets/spinning-zs290/zs290-99.png";

export interface ProductVariation {
  titulo: string;
  imagem: string;
  tipo: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  images: string[];
  price: number;
  originalPrice: number;
  discount: number;
  description: string;
  variacoes: ProductVariation[];
  sold?: number;
}

const IMAGES = [img1, img2, img3];
const RED_IMAGES = [red1, red2, red3, red4, red5];
const CAQUI_IMAGES = [caqui1, caqui2, caqui3, caqui4, caqui5];

const DESCRIPTION =
  "Triciclo elétrico adulto T3 com excelente estabilidade e conforto. Ideal para mobilidade urbana, conta com freio hidráulico, amortecedor reforçado, antena potente e amplo espaço para transportes generosos.\n\nMobilidade urbana segura e estável: três rodas com pneus sem câmara garantem mais equilíbrio e confiança para o dia a dia, ideal para iniciantes e idosos.\n\nBateria removível e recarga fácil: bateria de lítio 60V 20Ah pode ser retirada para recarregar em casa ou no trabalho, sem complicações.\n\nConforto em ruas irregulares graças ao amortecedor reforçado.\n\nLEGISLAÇÃO SOBRE O PRODUTO:\n• Produto autopropelido, sem necessidade de CNH;\n• Sem exigência de homologação ou emplacamento;\n• Recomendação: Resolução 996/23 do CONTRAN;\n• Respeite as normas de trânsito (use capacete, limite de velocidade e legislação vigente).";

export const products: Product[] = [
  {
    id: "triciclo-eletrico-t3",
    name: "T3 Triciclo Elétrico Para Mobilidade Urbana — Bateria 60V 20Ah, Freio Hidráulico, Sem CNH",
    image: IMAGES[0],
    images: [...IMAGES, ...RED_IMAGES, ...CAQUI_IMAGES],
    price: 92.9,
    originalPrice: 897.9,
    discount: 90,
    description: DESCRIPTION,
    variacoes: [
      { titulo: "Azul-Marinho", imagem: IMAGES[0], tipo: "cor" },
      { titulo: "Red", imagem: RED_IMAGES[0], tipo: "cor" },
      { titulo: "Cáqui", imagem: CAQUI_IMAGES[0], tipo: "cor" },
    ],
    sold: 5561,
  },
  {
    id: "scooter-eletrico-c3",
    name: "C3 Scooter Elétrico Para Ciclovia — Motor 800W, Bateria 48V 24Ah, Autonomia 75km, Sem CNH",
    image: c3a,
    images: [c3a, c3b, c3c, c3d],
    price: 84,
    originalPrice: 840,
    discount: 90,
    description:
      "A bicicleta elétrica C3 combina potência e praticidade. Equipada com motor de 800W e bateria de lítio de alta capacidade, atinge velocidade máxima limitada a 32 km/h para maior segurança. Com autonomia de até 75 km e capacidade de subida de até 20°, permite viagens mais longas e percursos mais desafiadores com conforto.\n\nMotor Elétrico Potente para Subidas Urbanas: motor de 800W enfrenta ladeiras de até 20° com estabilidade. Ideal para quem busca moto elétrica adulto, scooter elétrica ou alternativa urbana eficiente às motos tradicionais.\n\nBateria de Longa Autonomia para Uso Diário: bateria 48V 24Ah com até 75km de autonomia, reduz a necessidade de recargas frequentes. Perfeita para trabalho, compras e deslocamentos diários.\n\nConforto Superior em Ruas Irregulares: suspensão dianteira e traseira absorve impactos, garantindo condução suave em trajetos urbanos longos.\n\nFreio a Tambor e Visibilidade Reforçada: freios a tambor dianteiro e traseiro, iluminação potente e retrovisores oferecem mais controle e segurança no trânsito.\n\nCompacto e Funcional: opção prática e moderna para quem busca bicicleta elétrica barata, scooty elétrico ou motoneta elétrica para o dia a dia.\n\nESPECIFICAÇÕES TÉCNICAS:\n• Modelo: C3\n• Potência do motor: 800 W\n• Velocidade máxima: 32 km/h\n• Autonomia máxima: 75 km\n• Capacidade de carga: 120 kg\n• Bateria: lítio 48V/24AH\n• Capacidade de subida: 20°\n• Pneu: a vácuo 60/100-10''\n• Dimensões: 145*65*101 cm\n• Peso: 49 kg\n• Freios: a tambor dianteiro e traseiro\n• Suspensão: molas dianteiras e traseiras\n• Tempo de carregamento: 8 horas\n• Garantia: 6 meses\n\nLEGISLAÇÃO SOBRE O PRODUTO:\n• Produto autopropelido, sem necessidade de CNH;\n• Sem exigência de homologação ou emplacamento;\n• Recomendação: Resolução 996/23 do CONTRAN;\n• Respeite as normas de trânsito (use capacete, limite de velocidade e legislação vigente).",
    variacoes: [
      { titulo: "Preto", imagem: c3a, tipo: "cor" },
      { titulo: "Azul", imagem: c3a, tipo: "cor" },
      { titulo: "Cinza", imagem: c3a, tipo: "cor" },
    ],
    sold: 3820,
  },
  {
    id: "scooter-eletrico-c3-pro",
    name: "C3 Pro Scooter Elétrica com App e GPS — Antifurto, Motor 800W, Bateria 48V 24Ah, Autonomia 75km",
    image: c3pa,
    images: [c3pa, c3pb, c3pc, c3pd, c3pe],
    price: 78,
    originalPrice: 780,
    discount: 90,
    description:
      "Scooter elétrica inteligente com controle via app, sistema antifurto e GPS em tempo real. Potente para subidas, leve e fácil de usar, oferece longa autonomia e conforto no dia a dia.\n\nSistema Antifurto Inteligente: controle pelo app com bloqueio remoto, alarme e rastreamento GPS em tempo real para máxima segurança.\n\nControle Total via App: gerencie travamento, status da bateria e localização do veículo diretamente no seu smartphone.\n\nAlta Performance em Subidas (20°): motor de 800W com excelente torque, capaz de enfrentar subidas de até 20° com estabilidade e eficiência.\n\nLeve e Compacta (1450mm): design pequeno e ágil, perfeito para trânsito urbano e fácil de estacionar em espaços reduzidos.\n\nBateria de Lítio + Longa Autonomia (75km): equipada com bateria de lítio 48V 24Ah, oferece até 75 km de autonomia, perfeita para uso diário sem preocupações.\n\nSegurança e Confiabilidade: freios a tambor dianteiro e traseiro dupla garantem condução estável e segura em diferentes terrenos.\n\nESPECIFICAÇÕES TÉCNICAS:\n• Modelo: C3 Pro\n• Potência do motor: 800 W\n• Velocidade máxima: 32 km/h\n• Autonomia máxima: 75 km\n• Bateria: lítio 48V/24AH\n• Capacidade de subida: 20°\n• Dimensões: 1450mm\n• Freios: a tambor dianteiro e traseiro duplo\n• App com GPS, alarme e bloqueio remoto\n• Garantia: 6 meses\n\nLEGISLAÇÃO SOBRE O PRODUTO:\n• Produto autopropelido, sem necessidade de CNH;\n• Sem exigência de homologação ou emplacamento;\n• Recomendação: Resolução 996/23 do CONTRAN;\n• Respeite as normas de trânsito (use capacete, limite de velocidade e legislação vigente).",
    variacoes: [
      { titulo: "Preto", imagem: c3pa, tipo: "cor" },
    ],
    sold: 2410,
  },
  {
    id: "ebike-ae8",
    name: "AE8 Bicicleta Elétrica 1000W Para Mobilidade Urbana — Autonomia 80km, Freios Hidráulicos, Sem CNH",
    image: ae8a,
    images: [ae8a, ae8b, ae8c, ae8d, ae8e],
    price: 78,
    originalPrice: 780,
    discount: 90,
    description:
      "E-bike Cavalletta AE8 para deslocamento diário, dispensa CNH e emplacamento. Potência máxima 1000W, autonomia 80km, freios hidráulicos, suspensão dupla e sistema antifurto completo com alarme remoto, ideal para cidade e passeios curtos.\n\nMotor 1000W, bicicleta elétrica sem CNH e sem placa: motor potente de 1000W, velocidade 32km/h, sobe ladeiras de 20° e suporta até 150kg. Segue regulamentação CONTRAN, sem burocracia para deslocamento urbano.\n\nBateria lítio removível 48V15Ah, autonomia de 80km: bateria portátil para recarga em casa/escritório, tempo de carga 7-8h. Autonomia ampla para trajetos diários, elimina ansiedade de bateria baixa.\n\nFreios hidráulicos + sistema de segurança com alarme por controle remoto: freios a disco hidráulicos com frenagem estável mesmo em dias chuvosos, conta com destravamento NFC, alarme via controle remoto e disco antifurto integrado para proteção total.\n\nSuspensão hidráulica + mola regulável e pneu largo 4.0-20” para muito conforto: amortecedor hidráulico na frente e suspensão com mola ajustável na roda traseira, somado ao pneu largo 4.0-20\" anti-derrapante, conforto em qualquer tipo de pista urbana.\n\nDesign esportivo aerodinâmico, diversas opções de cores exclusivas: e-bike urbana com linhas modernas, visual diferenciado dos modelos convencionais.\n\nESPECIFICAÇÕES TÉCNICAS:\n• Modelo: AE8\n• Potência do motor: 1000 W\n• Velocidade máxima: 32 km/h\n• Autonomia máxima: 80 km\n• Capacidade de carga: 150 kg\n• Bateria: lítio 48V/15AH\n• Capacidade de subida: 20°\n• Pneu: 4.0-20''\n• Dimensões: 1750*700*1120mm\n• Peso: 45.5 kg\n• Freios: a disco hidráulicos\n• Suspensão: dianteira hidráulica / traseira mola ajustável\n• Tempo de carregamento: ≈7-8 horas\n• Suporte NFC: Sim\n• Garantia: 6 meses\n\nLEGISLAÇÃO SOBRE O PRODUTO:\n• Produto autopropelido, sem necessidade de CNH;\n• Sem exigência de homologação ou emplacamento;\n• Recomendação: Resolução 996/23 do CONTRAN;\n• Respeite as normas de trânsito (use capacete, limite de velocidade e legislação vigente).",
    variacoes: [
      { titulo: "Preto", imagem: ae8a, tipo: "cor" },
    ],
    sold: 1875,
  },
  {
    id: "bicicleta-ergometrica-zs290",
    name: "Bicicleta Ergométrica Spinning Cavalletta ZS-290 — Roda de Inércia 13kg, Suporta 150kg, 30 Níveis",
    image: zs1,
    images: [zs1, zs2, zs3, zs4, zs5, zs6, zs7],
    price: 55,
    originalPrice: 550,
    discount: 90,
    description:
      "Bicicleta Ergométrica Spinning Cavalletta ZS-290 com roda de inércia 13kg, estrutura arqueada, alta estabilidade, suporta até 150kg e ajuste fácil.\n\nSpinning Profissional em Casa: ideal para quem busca bicicleta spinning para academia em casa, ajudando na queima de calorias, melhora do condicionamento físico e fortalecimento das pernas. Suporta usuários de até 150 kg.\n\nRoda de Inércia de 13 kg: proporciona pedalada suave, estável e silenciosa, ideal para treinos leves, moderados ou HIIT de alta intensidade.\n\nEstrutura Estável e Reforçada: base com estrutura arqueada garante maior estabilidade e segurança durante o treino, mesmo em pedaladas em pé ou exercícios intensos.\n\nAjuste Personalizado de Selim e Guidão: selim com ajuste vertical e horizontal e guidão com múltiplos níveis de altura, adaptando-se a diferentes usuários e estilos de treino.\n\nMonitor Digital com Sensor Cardíaco: acompanhe tempo, velocidade, distância, calorias e frequência cardíaca em tempo real para controlar melhor seus treinos.\n\nPedais Antiderrapantes e Resistência Ajustável: pedais com tiras de segurança e resistência ajustável por knob permitem treinos seguros e adaptados a todos os níveis.\n\n30 NÍVEIS • 1 DESAFIO:\n• 1-10 — Queima suave\n• 11-20 — HIIT & Resistência\n• 21-30 — Treinamento Muscular\n• Sentido horário (+) / anti-horário (−)\n• Botão PUSH TO STOP — disjuntor de segurança urgente\n\nESPECIFICAÇÕES TÉCNICAS:\n• Modelo: ZS-290\n• Roda de inércia: 13 kg\n• Capacidade de carga: 150 kg (estrutura reforçada até 190 kg)\n• Estrutura: tubo engrossado, suporte em U atualizado\n• Monitor digital com sensor cardíaco\n• Resistência: ajustável por knob (30 níveis)\n• Ajustes: selim vertical e horizontal, guidão multinível\n• Pedais antiderrapantes com tiras de segurança\n• Garantia: 6 meses",
    variacoes: [
      { titulo: "Preto/Amarelo", imagem: zs1, tipo: "cor" },
    ],
    sold: 2340,
  },
];

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export const listingProducts: Product[] = products;
