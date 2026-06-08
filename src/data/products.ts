// Catálogo gerado automaticamente
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

const SIZES: ProductVariation[] = [
  { titulo: "38", imagem: "", tipo: "tamanho" },
  { titulo: "39", imagem: "", tipo: "tamanho" },
  { titulo: "40", imagem: "", tipo: "tamanho" },
  { titulo: "41", imagem: "", tipo: "tamanho" },
  { titulo: "42", imagem: "", tipo: "tamanho" },
  { titulo: "43", imagem: "", tipo: "tamanho" },
];

const DESCRIPTION =
  "Tênis Olympikus desenvolvido para corredores que buscam alto desempenho, conforto e durabilidade. Cabedal em mesh respirável, entressola com tecnologia de amortecimento responsivo e solado de borracha de alta resistência para máxima aderência e estabilidade no asfalto.";

const IMG = (file: string) => `https://abrilchegou.shop/tenis/img/${file}`;
const G = (files: string[]) => files.map(IMG);

// Galerias completas extraídas do site de origem (cada produto tem várias fotos)
const GAL = {
  g19: ["g_19_7a1094b9fb.webp","g_19_112f274da6.webp","g_19_349ac28812.webp","g_19_4a12d1b77d.png","g_19_7b9288f11d.jpg","g_19_96aced7870.webp","g_19_b6e3499c33.webp","g_19_bf25c58e3b.webp","g_19_c0bc577a52.webp","g_19_c842baba08.webp"],
  g20: ["g_20_0cf2dd3373.webp","g_20_4ca8f64d81.webp","g_20_82e36b7ed6.webp","g_20_973ce9922f.webp","g_20_a1de574cc5.webp","g_20_ab198a1bb5.webp","g_20_e1cfb4c38f.webp","g_20_f77d8784f1.webp"],
  g42: ["g_42_2e2bb2c960.webp","g_42_2425f9a385.webp","g_42_35ff656236.webp","g_42_43dbac0f55.webp","g_42_4584a76019.webp","g_42_6f0ba5b2e9.webp","g_42_89913bd2b6.webp","g_42_bb71a060bb.webp"],
  g44: ["g_44_cf9e58e5e1.webp","g_44_02d920e02d.webp","g_44_9a49edc4c3.webp","g_44_af644b0ed9.webp","g_44_d06bbc808a.webp"],
  g45: ["g_45_9e1270bd9c.webp","g_45_8b28c1ce86.webp","g_45_963de6d0a5.webp","g_45_bcdd91d3bf.webp","g_45_d01a03d79b.webp"],
  g46: ["g_46_b92f50a4e4.webp","g_46_3465f1cefd.webp","g_46_59804de14f.webp","g_46_75dcfd822a.webp","g_46_7f368cb1b9.webp","g_46_805dfc1b36.webp","g_46_b6d58d77c8.webp","g_46_de7f573186.webp"],
  g47: ["g_47_917b9a33dd.webp","g_47_112f7dc1a1.webp","g_47_19af747e4a.webp","g_47_234e1b34f8.webp","g_47_3221b77fd4.webp","g_47_46ef7cf146.webp","g_47_47a69448dc.webp","g_47_4b373ae0c9.webp","g_47_606d359924.jpg","g_47_6260922f12.webp","g_47_690aa1ee4e.webp","g_47_6bba36fc9d.webp","g_47_896c9cb28f.webp","g_47_aaac1e12da.webp","g_47_b7ef3ddcec.webp","g_47_d75f7ed08f.webp","g_47_e6d7f1ad30.webp","g_47_efa693fc96.webp"],
  g50: ["g_50_aac1db7134.jpg","g_50_1842e60120.webp","g_50_197e5d15f4.webp","g_50_1bb13c39a2.webp","g_50_3f011bdf3c.webp","g_50_713651d82e.webp","g_50_841973c842.webp","g_50_9f4e7dd66f.webp","g_50_a6bc50c430.webp","g_50_ac401e3d2c.webp","g_50_ba318880d4.webp","g_50_bde461c4f5.webp","g_50_ce0ad3aa10.webp","g_50_e46795a64e.webp","g_50_f81e35b96c.jpg"],
  g104: ["g_104_73f5b47aae.jpg","g_104_1f10ac7acd.webp","g_104_38bf695ec8.webp","g_104_422290fb99.jpg","g_104_6e0e101bf2.webp","g_104_7aa53b1e1c.webp","g_104_86c285a133.webp","g_104_9ff6230c75.webp","g_104_ef6c103247.webp"],
  g193: ["g_193_9be185af36.webp","g_193_0d121029b3.webp","g_193_1d3edb92fb.webp","g_193_2c0fe2633f.webp","g_193_642c041083.webp","g_193_b313b179c6.webp","g_193_c7d0daa03e.webp"],
  g194: ["g_194_06e55bbd3c.jpg","g_194_358a1d328f.webp","g_194_525405da3a.webp","g_194_6f973779c9.webp","g_194_e8cbf49c2a.webp","g_194_e95dac3d6f.webp"],
  g195: ["g_195_fb2bfdf839.jpg","g_195_091ac74d49.webp","g_195_504985ee22.webp","g_195_59cbf1be21.webp","g_195_9c0e0f72fc.webp","g_195_d6f3d84a85.webp"],
  g196: ["g_196_0f2dd9d6d4.webp","g_196_1b8723ab02.webp","g_196_20e488928a.webp","g_196_7255dba6a8.webp","g_196_dc2afe3743.webp","g_196_f6103ef2e3.webp"],
  g337: ["g_337_446755cadc.jpg","g_337_09c7efcaee.jpg","g_337_11cd042915.jpg","g_337_30b0d088a2.jpg","g_337_345e23319c.jpg","g_337_4b6f409f6d.jpg","g_337_572a102c66.jpg","g_337_6437a60719.jpg","g_337_db866c3f12.jpg"],
};

const mk = (
  id: string,
  name: string,
  gal: string[],
  price: number,
  originalPrice: number,
  discount: number,
  sold = 732,
): Product => ({
  id,
  name,
  image: IMG(gal[0]),
  images: G(gal),
  price,
  originalPrice,
  discount,
  description: DESCRIPTION,
  variacoes: SIZES,
  sold,
});

// Ordenado do mais caro para o mais barato
export const products: Product[] = [
  mk("olympikus-corre-supra-2", "Tênis Olympikus Corre Supra 2", GAL.g50, 121.97, 1299.0, 70, 543),
  mk("olympikus-corre-5", "Tênis de Corrida Olympikus Corre 5", GAL.g337, 91.68, 569.99, 60, 732),
  mk("olympikus-corre-grafeno-3", "Tênis Olympikus Corre Grafeno 3", GAL.g47, 89.82, 799.99, 80, 3521),
  mk("olympikus-corre-trilha-2", "Tênis Olympikus Corre Trilha 2", GAL.g104, 88.34, 599.99, 60, 134),
  mk("olympikus-corre-turbo", "Tênis Olympikus Corre Turbo", GAL.g195, 67.39, 669.99, 60, 7321),
  mk("olympikus-corre-4-v1", "Tênis Olympikus Corre 4", GAL.g19, 62.21, 569.99, 60, 732),
  mk("olympikus-corre-4-v2", "Tênis Olympikus Corre 4", GAL.g20, 62.21, 599.99, 60, 528),
  mk("olympikus-corre-4-v3", "Tênis Olympikus Corre 4", GAL.g44, 62.21, 569.99, 60, 732),
  mk("olympikus-corre-4-v4", "Tênis Olympikus Corre 4", GAL.g45, 62.21, 569.99, 60, 732),
  mk("olympikus-corre-4-v5", "Tênis Olympikus Corre 4", GAL.g46, 62.21, 569.99, 60, 732),
  mk("olympikus-corre-4-v6", "Tênis Olympikus Corre 4", GAL.g193, 62.21, 569.99, 60, 732),
  mk("olympikus-corre-4-v7", "Tênis Olympikus Corre 4", GAL.g42, 62.21, 569.99, 60, 732),
  mk("olympikus-corre-4-v8", "Tênis Olympikus Corre 4", GAL.g194, 62.21, 569.99, 60, 732),
  mk("olympikus-corre-4-v9", "Tênis Olympikus Corre 4", GAL.g196, 62.21, 569.99, 60, 732),
];

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
