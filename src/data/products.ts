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
}

export const products: Product[] = [
  {
    id: "melissa-x-beat",
    name: "Melissa X Beat",
    image: "/products/melissa-x-beat.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-beat/0-8c9682affdda.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-beat/1-8ee59571a5c7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-beat/2-ba1492904316.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-beat/3-bb5f870d8509.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-beat/4-5bc6a5ac1caf.jpg"],
    price: 49.99,
    originalPrice: 499.9,
    discount: 90.0,
    description: "O transformador de todo look. O sneaker Melissa X Beat é inesquecível por seu acabamento com DNA Melissa, opções de cor cheias de personalidade e tecnologia do conforto da palmilha ao calce.Com materiais premium e um acabamento impecável, este tênis destaca-se pela sua versatilidade, sendo perfeito tanto para ocasiões casuais quanto para eventos mais refinados. Seu design único e estiloso faz dele uma escolha perfeita para aqueles que valorizam não apenas o conforto, mas também a expressão individual através da moda!",
    variacoes: [
      {
        titulo: "Azul",
        imagem: "/products/var_ba1759faf6b3.jpg",
        tipo: "cor"
      },
      {
        titulo: "Off white",
        imagem: "/products/var_0668e68b2297.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/rosa",
        imagem: "/products/var_6f418d152d02.jpg",
        tipo: "cor"
      },
      {
        titulo: "cinza/bege",
        imagem: "/products/var_4529f4afa5a6.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/vermelho",
        imagem: "/products/var_23e55435fd09.jpg",
        tipo: "cor"
      },
      {
        titulo: "34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-x-rush",
    name: "Melissa X Rush",
    image: "/products/melissa-x-rush.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-rush/0-dbd7dd08f92c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-rush/1-9579e433f220.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-rush/2-128d3207d783.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-rush/3-0bfd40aa80e7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-rush/4-2c31478cbad5.jpg"],
    price: 79.99,
    originalPrice: 799.9,
    discount: 90.0,
    description: "O Melissa X Rush é a combinação perfeita entre inovação, conforto e design ousado. Com um solado robusto feito com a tecnologia Melfree – um EVA ultraleve e macio desenvolvido pela Melissa – este modelo garante conforto extremo para o dia a dia. O cabedal apresenta uma fusão de materiais, unindo tecido e elementos plásticos que remetem à identidade única da marca. A estética futurista se destaca pelo solado volumoso e pelas texturas diferenciadas, proporcionando um visual autêntico e moderno.",
    variacoes: [
      {
        titulo: "Rosa",
        imagem: "/products/var_d61d2392e452.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_d7bb8d9d2b49.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/verde",
        imagem: "/products/var_497b26fc5b67.jpg",
        tipo: "cor"
      },
      {
        titulo: "34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "mini-melissa-welly-toy-story-baby",
    name: "Mini Melissa Welly + Toy Story Baby",
    image: "/products/mini-melissa-welly-toy-story-baby.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-welly-toy-story-baby/0-340bf34629d8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-welly-toy-story-baby/1-c374250c349d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-welly-toy-story-baby/2-f7e59a6de990.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-welly-toy-story-baby/3-27fb452c72f3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-welly-toy-story-baby/4-e2c919183517.jpg"],
    price: 24.99,
    originalPrice: 249.9,
    discount: 90.0,
    description: "Botinha de Bebê Mini Melissa Welly + Toy Story BabyA Mini Melissa Welly + Toy Story Baby transforma cada aventura em pura diversão. Inspirada no universo de Toy Story, ela traz detalhes lúdicos dos personagens Buzz, Jessie e Woody, conectando o encanto do novo filme com o dia a dia dos pequenos.Com design estilo galocha e acabamento brilhante, a botinha une proteção e estilo em qualquer ocasião. Produzida em Melflex®, oferece leveza, flexibilidade e uma palmilha macia que garante conforto durante todo o uso, perfeita para acompanhar as descobertas da infância, faça chuva ou faça sol.Divertida, confortável e cheia de personalidade, é o modelo ideal para deixar os looks ainda mais criativos e encantadores.Principais características:• Personagens favoritos: Buzz, Jessie e Woody• Palmilha macia e confortável• Material leve, flexível e resistente• Estilo galocha, ideal para todas as ocasiõesA Mini Melissa Welly + Toy Story Baby é pura imaginação e conforto, pronta para viver novas aventuras a cada passo.",
    variacoes: [
      {
        titulo: "verde/azul",
        imagem: "/products/var_dfe1d6c5c55f.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom/amarelo",
        imagem: "/products/var_ebaff08a6663.jpg",
        tipo: "cor"
      },
      {
        titulo: "vermelho/marrom",
        imagem: "/products/var_95577773f0b1.jpg",
        tipo: "cor"
      },
      {
        titulo: "17/18-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "19-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "20/21-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "22-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "23/24-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "25-10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "26/27-11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "28-12",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "mini-melissa-hop-bluey-baby",
    name: "Mini Melissa Hop + Bluey Baby",
    image: "/products/mini-melissa-hop-bluey-baby.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-hop-bluey-baby/0-0b37ebbd8d15.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-hop-bluey-baby/1-658a19357929.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-hop-bluey-baby/2-8e40b9bf6f77.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-hop-bluey-baby/3-dc2843bde805.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-hop-bluey-baby/4-70ab8e46b130.jpg"],
    price: 17.99,
    originalPrice: 179.9,
    discount: 90.0,
    description: "A Mini Melissa Hop + Bluey Baby transforma cada passo em uma nova brincadeira! Inspirada nas aventuras da série que conquistou os pequenos, essa sandália traz estampas alegres e os apliques em plastisol das irmãs Bluey e Bingo, em um divertido efeito twin. Leve, confortável e fácil de calçar, é perfeita para acompanhar os momentos de diversão com muito estilo e as personagens favoritas sempre por perto.",
    variacoes: [
      {
        titulo: "verde/azul/laranja",
        imagem: "/products/var_237bcda54d2a.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/rosa/vermelho",
        imagem: "/products/var_2084223ba06b.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul/laranja",
        imagem: "/products/var_fb78782187a2.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/rosa/amarelo",
        imagem: "/products/var_6a42cf0f1302.jpg",
        tipo: "cor"
      },
      {
        titulo: "17/18-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "19-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "20/21-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "22-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "23/24-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "25-10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "26/27-11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "28-12",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-x-bend",
    name: "Melissa X Bend",
    image: "/products/melissa-x-bend.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-bend/0-ec936b240dfd.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-bend/1-b85c78ad1d32.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-bend/2-f35cebd9bd52.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-bend/3-bf6d5142ba23.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-bend/4-1c4051658c2a.jpg"],
    price: 54.99,
    originalPrice: 549.9,
    discount: 90.0,
    description: "Melissa X Bend nasce da tendência dos retro sneakers, resgatando silhuetas clássicas de perfil baixo e reinterpretando esse visual icônico sob a ótica ousada e contemporânea do Melissa X. O modelo combina referências nostálgicas com um design atual, traduzido em cores bold, assinatura da marca, e acabamentos que reforçam sua identidade fashion e urbana.Com estética retrô atualizada, o Melissa X Bend conecta memória, atitude e moda em um único produto. Seu visual expressivo dialoga com o passado sem perder relevância no presente, tornando-se a escolha ideal para quem busca um tênis versátil, cheio de personalidade e alinhado às principais tendências do street style contemporâneo.Perfeito para transformar qualquer look, o Melissa X Bend é mais do que um tênis: é uma peça-chave para quem valoriza design, identidade e autenticidade.",
    variacoes: [
      {
        titulo: "bege/marrom",
        imagem: "/products/var_99dc7d993da1.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto/bege",
        imagem: "/products/var_124891374ccd.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/azul/vermelho",
        imagem: "/products/var_750e09158782.jpg",
        tipo: "cor"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "40",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "34",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-x-heat-bag",
    name: "Melissa X Heat Bag",
    image: "/products/melissa-x-heat-bag.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-heat-bag/0-be938c0f0f12.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-heat-bag/1-a3dd4d1c72b3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-heat-bag/2-a57c9c083a55.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-heat-bag/3-6f9311fd7b39.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-heat-bag/4-2b2cf88bc0f0.jpg"],
    price: 35.99,
    originalPrice: 359.9,
    discount: 90.0,
    description: "A Melissa X Heat Bag chegou para dar aquele up no seu estilo com uma boa dose de praticidade e muito charme! Super versátil, ela pode ser usada como bolsa tradicional ou como pochete transversal, adaptando-se ao seu ritmo e dando aquele toque extra de atitude no visual. Com um design super moderno e o icônico DNA da Melissa, a Heat Bag mistura o clássico toque da marca com materiais inovadores, garantindo leveza para compor os looks contemporâneos que a gente ama. Perfeita tanto para os looks descomplicados do dia a dia quanto para arrasar nas produções mais fashion, a Melissa X Heat Bag é a escolha ideal para quem quer muito mais que estilo – quer funcionalidade também!",
    variacoes: [
      {
        titulo: "Preto/prata",
        imagem: "/products/var_5ce5dfd9a838.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/verde",
        imagem: "/products/var_ebc1a3fed6d5.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul/amarelo",
        imagem: "/products/var_41c8cf315cff.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/marrom",
        imagem: "/products/var_c93a9884ea0b.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-x-loop",
    name: "Melissa X Loop",
    image: "/products/melissa-x-loop.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-loop/0-4ac44355ee4a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-loop/1-25e009487625.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-loop/2-dd830478acc4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-loop/3-a1ecf6bef416.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-loop/4-94fe0f73bd70.jpg"],
    price: 69.99,
    originalPrice: 699.9,
    discount: 90.0,
    description: "O tênis Melissa X Loop representa a continuidade da Família Melissa X, mantendo o DNA de inovação, estilo e identidade marcante que consagrou a linha. Com um visual futurista e volumoso, o modelo explora o mix de texturas ao unir tecido mesh com aplicações fusionadas (sem costuras) a detalhes frequenciados, que criam relevos no cabedal, valorizando o design robusto. A paleta vibrante reforça o caráter ousado da coleção, enquanto o solado maxi com aberturas esculturais garante conforto e atitude em cada passo. Ideal para quem busca moda com personalidade, o Melissa X Loop reafirma o compromisso da Melissa X com a estética experimental e urbana.",
    variacoes: [
      {
        titulo: "laranja/verde/rosa",
        imagem: "/products/var_5a15de9174d7.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege/preto",
        imagem: "/products/var_c99298bd4154.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_2d543c203381.jpg",
        tipo: "cor"
      },
      {
        titulo: "34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-x-icon",
    name: "Melissa X Icon",
    image: "/products/melissa-x-icon.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-icon/0-c0bdc8bf550e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-icon/1-7033d186f989.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-icon/2-fcb31ae8650b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-icon/3-25554657e189.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-icon/4-f4a9d5d72f67.jpg"],
    price: 149.99,
    originalPrice: 1499.9,
    discount: 90.0,
    description: "Extraordinário e audacioso, o Melissa X Icon é o grande protagonista da sua coleção de sneakers. Com visual bold e estrutura futurista, ele une estilo arrojado e a transparência emblemática do DNA Melissa, graças à revolucionária tecnologia Melbubble. O design mistura formas orgânicas e impactantes, realçadas pelo efeito translúcido do solado, combinando volume expressivo, cores vibrantes e detalhes que chamam a atenção. Os detalhes em tecido acrescentam um toque extra de conforto ao calce. Este sneaker é a escolha definitiva para quem busca personalidade nas combinações.Prepare-se para caminhar rumo ao futuro com estilo e conforto incomparáveis.",
    variacoes: [
      {
        titulo: "preto/preto/prata",
        imagem: "/products/var_be8e9c18f97f.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/bege/verde",
        imagem: "/products/var_c81b591da910.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul/lilas",
        imagem: "/products/var_fa22578d28b6.jpg",
        tipo: "cor"
      },
      {
        titulo: "34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "mini-melissa-x-beat-infantil",
    name: "Mini Melissa X Beat Infantil",
    image: "/products/mini-melissa-x-beat-infantil.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-x-beat-infantil/0-956c7cf25f97.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-x-beat-infantil/1-ce2d964503be.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-x-beat-infantil/2-1118504b6773.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-x-beat-infantil/3-04df1fa4c3b0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-x-beat-infantil/4-ba4996775b15.jpg"],
    price: 39.99,
    originalPrice: 399.9,
    discount: 90.0,
    description: "Tênis Mini Melissa X Beat Infantil A Mini Melissa X Beat Infantil é um tênis feito em Melflex® e EVA, materiais flexíveis e resistentes, que juntam conforto e diversão com muito estilo.Ideal para acompanhar no dia a dia, seja na escola, passeio ou nas melhores brincadeiras, o tênis infantil ultraleve garante conforto e personalidade para acompanhar a rotina dos pequenos. Principais características: - Material Melflex®: resistente e macio;- Longa durabilidade;- Fácil de limpar; Garanta a combinação perfeita de inovação e conforto com o tênis Melissa X Beat Infantil para os pequenos.",
    variacoes: [
      {
        titulo: "begerosa",
        imagem: "/products/var_0530e3682f27.jpg",
        tipo: "cor"
      },
      {
        titulo: "Off white",
        imagem: "/products/var_7ec364b07850.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_6f715da3200f.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosavermelho",
        imagem: "/products/var_eccc29c0ac81.jpg",
        tipo: "cor"
      },
      {
        titulo: "cinzabege",
        imagem: "/products/var_de84773eef50.jpg",
        tipo: "cor"
      },
      {
        titulo: "27",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "28",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "29",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "30",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "31",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "32",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "33",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "mini-melissa-x-beat-baby",
    name: "Mini Melissa X Beat Baby",
    image: "/products/mini-melissa-x-beat-baby.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-x-beat-baby/0-91418b9133fe.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-x-beat-baby/1-2fbca901adfa.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-x-beat-baby/2-824d98bc46f4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-x-beat-baby/3-75be1b2fb7ef.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-x-beat-baby/4-42378ae00b23.jpg"],
    price: 32.99,
    originalPrice: 329.9,
    discount: 90.0,
    description: "Tênis Mini Melissa X Beat Baby A Mini Melissa X Beat Baby é um tênis de bebê feito em Melflex®, material flexível e com tecido respirável, que une segurança e conforto nos primeiros passos. Perfeito para as primeiras aventuras, para engatinhar e correr, esse tênis garante estabilidade e equilíbrio em todas as horas.Principais características: - Material Melflex®: flexível, resistente e confortável;- Estabilidade e equilíbrio;- Solado antiderrapante para segurança nos primeiros passos- Fechamento em velcro para segurança; Proporcione conforto e estilo para o seu bebê com o tênis Mini Melissa X Beat Baby, a combinação perfeita de inovação e cuidado para os primeiros momentos de caminhada.",
    variacoes: [
      {
        titulo: "Azul",
        imagem: "/products/var_e2fbf2c59e80.jpg",
        tipo: "cor"
      },
      {
        titulo: "Off white",
        imagem: "/products/var_c6ff381038f1.jpg",
        tipo: "cor"
      },
      {
        titulo: "begerosa",
        imagem: "/products/var_be3e27f0a253.jpg",
        tipo: "cor"
      },
      {
        titulo: "cinzabege",
        imagem: "/products/var_44c8e673b209.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosavermelho",
        imagem: "/products/var_4cd35c84bb93.jpg",
        tipo: "cor"
      },
      {
        titulo: "20",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "21",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "22",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "23",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "24",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "25",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "26",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-x-icon-sandal",
    name: "Melissa X Icon Sandal",
    image: "/products/melissa-x-icon-sandal.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-icon-sandal/0-0d51a1ba58fd.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-icon-sandal/1-5ff5345aa0af.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-icon-sandal/2-935df5b119d0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-icon-sandal/3-ca6007c64c82.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-icon-sandal/4-ef31b4e2a5d5.jpg"],
    price: 59.99,
    originalPrice: 599.9,
    discount: 90.0,
    description: "A Melissa X Icon Sandal traz o visual marcante da família Icon para uma proposta ainda mais ousada e divertida. Com cabedal em Melflex e formas recortadas que evocam uma estética utilitária com toque asiático, a sandália ganha destaque pela sola plataforma translúcida com tecnologia Melbubble (a mesma do sneaker Melissa Icon X).",
    variacoes: [
      {
        titulo: "preto/vidro",
        imagem: "/products/var_5dd95300f38c.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/verde",
        imagem: "/products/var_b177b0ce5612.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege/laranja",
        imagem: "/products/var_6a136b6e48e3.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-x-mood",
    name: "Melissa X Mood",
    image: "/products/melissa-x-mood.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-mood/0-879480c200af.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-mood/1-7d094a771a57.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-mood/2-8b69999f86ac.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-mood/3-39c733cdbf95.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-mood/4-bf4cb2125fa8.jpg"],
    price: 39.99,
    originalPrice: 399.9,
    discount: 90.0,
    description: "Todo dia combina com o Melissa X Mood. Ultraleve, com calce fácil e conforto extremo por sua palmilha de EVA, esse sneaker é o ápice versatilidade.Seu design se adapta facilmente a diferentes gostos e momentos do dia, garantindo não apenas estilo, mas também funcionalidade em cada passo!Mais características sobre o Melissa X Mood:Sola em EVA Cabedal em tecido confortável e respirávelPalmilha em EVA conformado com dublagem de tecidoAltura da sola: 4cm",
    variacoes: [
      {
        titulo: "Branco",
        imagem: "/products/var_33db77301106.jpg",
        tipo: "cor"
      },
      {
        titulo: "lilas ametista",
        imagem: "/products/var_dda72738fb54.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_f9319f050b6a.jpg",
        tipo: "cor"
      },
      {
        titulo: "34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-x-mood-ii",
    name: "Melissa X Mood II",
    image: "/products/melissa-x-mood-ii.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-mood-ii/0-24f16eed3545.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-mood-ii/1-2427572797a5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-mood-ii/2-81ce6f2d7096.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-mood-ii/3-ffe3e7dc5f4c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-mood-ii/4-f0d66711fbdd.jpg"],
    price: 44.99,
    originalPrice: 449.9,
    discount: 90.0,
    description: "O Melissa X Mood voltou ainda mais ousado e estiloso! Mantendo o design ultraleve, o calce fácil e a palmilha de EVA para conforto extremo, esse sneaker se reinventa em uma nova versão animal print, perfeita para quem quer se destacar com personalidade e atitude. Versatilidade continua sendo a palavra-chave deste modelo, que combina com diferentes estilos e acompanha você em todos os momentos do dia. O Melissa X Mood II é feito com tecido respirável e vem com duas cores diferentes de cadarços pra você escolher a que mais combina com você e trocar sempre que quiser.",
    variacoes: [
      {
        titulo: "Bege/vermelho",
        imagem: "/products/var_01f0a7bc918c.jpg",
        tipo: "cor"
      },
      {
        titulo: "34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-platform-slide-hello-kitty-and-friends",
    name: "Melissa Free Platform Slide + Hello Kitty and Friends",
    image: "/products/melissa-free-platform-slide-hello-kitty-and-friends.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-hello-kitty-and-friends/0-01a511ecfcba.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-hello-kitty-and-friends/1-4f9835e5a450.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-hello-kitty-and-friends/2-ab7665f62dd6.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-hello-kitty-and-friends/3-a9a00f541f3c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-hello-kitty-and-friends/4-085277f76b89.jpg"],
    price: 37.99,
    originalPrice: 379.9,
    discount: 90.0,
    description: "A Melissa Free Platform Slide + Hello Kitty & Friends é a união do estilo marcante da plataforma com a alegria das personagens mais queridas da Sanrio. Em uma explosão de cores e estampas cheias de personalidade, o modelo transforma o mood divertido em um acessório de moda versátil e cheio de atitude. Confortável, irreverente e com o toque lúdico que só a collab Melissa + Hello Kitty & Friends poderia trazer, essa slide é a escolha perfeita para quem ama brincar com estilo e ousar nas combinações do dia a dia.",
    variacoes: [
      {
        titulo: "bege/marrom",
        imagem: "/products/var_e24ef800cd9d.jpg",
        tipo: "cor"
      },
      {
        titulo: "vermelho/branco",
        imagem: "/products/var_f7e3a3896985.jpg",
        tipo: "cor"
      },
      {
        titulo: "lilas/amarelo",
        imagem: "/products/var_d9a00629c2a8.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_21c2d9cfae53.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-kick-off-sandal-hello-kitty",
    name: "Melissa Kick Off Sandal + Hello Kitty",
    image: "/products/melissa-kick-off-sandal-hello-kitty.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off-sandal-hello-kitty/0-660ccc2fa52c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off-sandal-hello-kitty/1-497ac5288f3e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off-sandal-hello-kitty/2-b130286be75b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off-sandal-hello-kitty/3-29c9d626cb96.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off-sandal-hello-kitty/4-84e5f0914bd1.jpg"],
    price: 37.99,
    originalPrice: 379.9,
    discount: 90.0,
    description: "Melissa Kick Off Sandal + Hello Kitty, a combinação perfeita entre conforto e charme icônico! Esta sandália une o estilo inovador da Melissa com a doçura das personagens Hello Kitty & Friends, trazendo um toque lúdico que vai conquistar todos os fãs. Cada detalhe foi pensado para proporcionar uma experiência única de uso, com design arrojado e tecnologia que garante leveza e maciez a cada passo. Ideal para quem quer expressar sua personalidade divertida e autêntica, com qualidade e estilo. Seja para um passeio casual ou para destacar seu look com um toque exclusivo, essa sandália é a escolha certa para quem ama estar na moda com atitude e conforto.",
    variacoes: [
      {
        titulo: "Vermelho",
        imagem: "/products/var_6bcf03279946.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_17e5b6fc6280.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_b5e8d04b5acc.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-possession-hello-kitty-and-friends",
    name: "Melissa Possession + Hello Kitty and Friends",
    image: "/products/melissa-possession-hello-kitty-and-friends.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-hello-kitty-and-friends/0-27c248d0b823.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-hello-kitty-and-friends/1-8d96f3659a8d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-hello-kitty-and-friends/2-5abad9789608.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-hello-kitty-and-friends/3-baf9b59fa7fd.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-hello-kitty-and-friends/4-8b58b69315ec.jpg"],
    price: 21.99,
    originalPrice: 219.9,
    discount: 90.0,
    description: "A Melissa Possession + Hello Kitty and Friends combina o design icônico da Melissa com a fofura lúdica das personagens Hello Kitty & Friends. Com acabamento brilhante e detalhes exclusivos, essa sandália traz um equilíbrio perfeito entre estilo vintage e contemporâneo. Seu design prático e confortável oferece ajuste seguro e facilidade para o dia a dia, enquanto as figuras da Hello Kitty, Cinnamoroll, Kuromi e My Melody, adicionam personalidade única ao visual. Um produto que traduz autenticidade, qualidade e a essência da collab.",
    variacoes: [
      {
        titulo: "Bege",
        imagem: "/products/var_e2bfb3c6848e.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_b35e8f8f8744.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho",
        imagem: "/products/var_5e2649844ae1.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cute-bag-hello-kitty",
    name: "Melissa Cute Bag + Hello Kitty",
    image: "/products/melissa-cute-bag-hello-kitty.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cute-bag-hello-kitty/0-034cef4826c5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cute-bag-hello-kitty/1-f3bfe4491e76.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cute-bag-hello-kitty/2-a208b267ada9.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cute-bag-hello-kitty/3-e0358d0c342e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cute-bag-hello-kitty/4-f5b387974d7a.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "A Melissa Cute Bag + Hello Kitty é o encontro entre moda e afeto em forma de acessório. Com design inspirado na personagem mais icônica do universo Hello Kitty & Friends, a bolsa traz linhas modernas e um toque lúdico que se adapta a diferentes estilos. Compacta e versátil, é perfeita para acompanhar a rotina com praticidade sem abrir mão do charme. Um item desejo da collab Melissa + Hello Kitty, que une autenticidade, criatividade e um visual marcante capaz de transformar qualquer look em uma expressão única de estilo.",
    variacoes: [
      {
        titulo: "Vermelho",
        imagem: "/products/var_fb8f2d07b5dd.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_354727286e15.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_5b5e5c635029.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "mini-melissa-free-platform-slide-hello-kitty-and-friends-infantil",
    name: "Mini Melissa Free Platform Slide + Hello Kitty and Friends Infantil",
    image: "/products/mini-melissa-free-platform-slide-hello-kitty-and-friends-infantil.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-free-platform-slide-hello-kitty-and-friends-infantil/0-bce0d0b27b78.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-free-platform-slide-hello-kitty-and-friends-infantil/1-9cdc9a4d5d60.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-free-platform-slide-hello-kitty-and-friends-infantil/2-ddd2b682757d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-free-platform-slide-hello-kitty-and-friends-infantil/3-c86f81f2ae41.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-free-platform-slide-hello-kitty-and-friends-infantil/4-c01169bfd742.jpg"],
    price: 34.99,
    originalPrice: 349.9,
    discount: 90.0,
    description: "A Mini Melissa Free Platform Slide + Hello Kitty & Friends Infantil une conforto e fofura para acompanhar cada instante com muita alegria. A plataforma infantil ganha vida com estampas cheias de cores, símbolos divertidos e a fofura única do universo Sanrio, transformando o calçado em uma peça que combina conforto e muita imaginação. Fácil de calçar e superconfortável, é o par ideal para deixar cada look infantil ainda mais divertido.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_e4e5c7d96b4d.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/marrom",
        imagem: "/products/var_49e9526c54f7.jpg",
        tipo: "cor"
      },
      {
        titulo: "lilas/amarelo",
        imagem: "/products/var_57ac8cb64bcd.jpg",
        tipo: "cor"
      },
      {
        titulo: "vermelho/branco",
        imagem: "/products/var_e3bf929e8533.jpg",
        tipo: "cor"
      },
      {
        titulo: "29-13",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "30-1",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "31-2",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "32-3",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "33-4",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "mini-melissa-ultragirl-hello-kitty-baby",
    name: "Mini Melissa Ultragirl + Hello Kitty Baby",
    image: "/products/mini-melissa-ultragirl-hello-kitty-baby.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-ultragirl-hello-kitty-baby/0-58db50e4e496.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-ultragirl-hello-kitty-baby/1-a06a8c66e037.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-ultragirl-hello-kitty-baby/2-7df62d479c4d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-ultragirl-hello-kitty-baby/3-4337e1c6d525.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-ultragirl-hello-kitty-baby/4-97f726ba0da2.jpg"],
    price: 15.99,
    originalPrice: 159.9,
    discount: 90.0,
    description: "A Mini Melissa Ultragirl + Hello Kitty é o encontro entre dois ícones que marcaram gerações. O clássico modelo Melissa ganha nova vida com aplicações exclusivas dos personagens mais amados da Sanrio, trazendo cores, diversão e um toque de nostalgia em versão inovadora. Com design criativo e cheio de detalhes encantadores, a Ultragirl se transforma em um acessório de estilo e afeto, feito para acompanhar cada momento da infância com conforto e muita personalidade. Um must-have da collab Melissa + Hello Kitty & Friends que vai conquistar corações de todas as idades.",
    variacoes: [
      {
        titulo: "Rosa",
        imagem: "/products/var_44fdaf48417f.jpg",
        tipo: "cor"
      },
      {
        titulo: "lilas/rosa",
        imagem: "/products/var_320be6515687.jpg",
        tipo: "cor"
      },
      {
        titulo: "17/18-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "19-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "20/21-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "22-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "23/24-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "25-10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "26/27-11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "28-12",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "mini-melissa-hip-hello-kitty-baby",
    name: "Mini Melissa Hip + Hello Kitty Baby",
    image: "/products/mini-melissa-hip-hello-kitty-baby.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-hip-hello-kitty-baby/0-a0284e257e86.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-hip-hello-kitty-baby/1-5246e2cca5a3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-hip-hello-kitty-baby/2-4c75d820e346.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-hip-hello-kitty-baby/3-da2aeb9326a3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-hip-hello-kitty-baby/4-9d68faa03cd1.jpg"],
    price: 14.99,
    originalPrice: 149.9,
    discount: 90.0,
    description: "A Mini Melissa Hip + Hello Kitty Baby encanta desde os primeiros passos. A clássica sandália da família hip ganha ainda mais destaque com a aplicação 3D da icônica Hello Kitty, transformando o modelo em um ícone de estilo e fofura. Criada para unir conforto e praticidade, ela possui tiras macias, fechamento fácil e muito charme para acompanhar cada descoberta dos pequenos.",
    variacoes: [
      {
        titulo: "vermelho/branco",
        imagem: "/products/var_d36df2a2d4cf.jpg",
        tipo: "cor"
      },
      {
        titulo: "branco/branco",
        imagem: "/products/var_e559b17ce111.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto/branco",
        imagem: "/products/var_7f570fe2631f.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/branco",
        imagem: "/products/var_3cd47d3f068b.jpg",
        tipo: "cor"
      },
      {
        titulo: "17/18-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "19-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "20/21-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "22-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "23/24-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "25-10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "26/27-11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "28-12",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-charm-hello-kitty-and-friends",
    name: "Melissa Charm + Hello Kitty and Friends",
    image: "/products/melissa-charm-hello-kitty-and-friends.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-charm-hello-kitty-and-friends/0-5e8ad7803afb.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-charm-hello-kitty-and-friends/1-745eba855ed2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-charm-hello-kitty-and-friends/2-d25ac6cf925d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-charm-hello-kitty-and-friends/3-2f412d603d4b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-charm-hello-kitty-and-friends/4-be16526860d8.jpg"],
    price: 5.99,
    originalPrice: 59.9,
    discount: 90.0,
    description: "O Melissa Charm + Hello Kitty and Friends é a tradução perfeita da união entre estilo e fofura. Reunindo os personagens mais amados da Sanrio em um design exclusivo, o acessório traz a irreverência criativa da Melissa com o carisma único de Hello Kitty & Friends. Versátil e cheio de personalidade, pode ser usado em bolsas, mochilas ou até no dia a dia como detalhe divertido que transforma qualquer look. Um must-have da collab que celebra autenticidade, leveza e muito estilo.",
    variacoes: [
      {
        titulo: "branco/rosa",
        imagem: "/products/var_9a11a4b377c6.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-golden",
    name: "Melissa Golden",
    image: "/products/melissa-golden.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-golden/0-1545a0a6898d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-golden/1-96b357eed37f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-golden/2-adb3f4bce066.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-golden/3-eb7cafe2f232.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-golden/4-7053316c22a7.jpg"],
    price: 14.99,
    originalPrice: 149.9,
    discount: 90.0,
    description: "A Melissa Golden é o slide que vai ser seu novo queridinho da temporada. Com tiras que trazem detalhes metalizados e texturas que adicionam um toque de sofisticação, esse modelo é perfeito para elevar qualquer look. Disponível em diversas cores, A Melissa Golden é fácil de calçar e super versátil para acompanhar as M-Lovers em qualquer ocasião. E o melhor: ela vem com uma bolsa icônica que vai completar seu visual e promete dar aquele toque de estilo que você ama. Seja para você ou para dar de presente, a Melissa Golden é uma excelente opção.",
    variacoes: [
      {
        titulo: "verde/verde metalizado",
        imagem: "/products/var_9e1f8f4baa8f.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto/dourado",
        imagem: "/products/var_2ccdd60e45a7.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/ouro",
        imagem: "/products/var_07c3f9eee932.jpg",
        tipo: "cor"
      },
      {
        titulo: "branco/prata",
        imagem: "/products/var_04ca7ce55de7.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/rosa metalizado",
        imagem: "/products/var_823ecc2e5001.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-heat-sandal",
    name: "Melissa Heat Sandal",
    image: "/products/melissa-heat-sandal.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-heat-sandal/0-6d54d0d3dc87.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-heat-sandal/1-6c481148f84f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-heat-sandal/2-73e7cdcee935.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-heat-sandal/3-f8072470147d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-heat-sandal/4-884b49d9abdf.jpg"],
    price: 15.99,
    originalPrice: 159.9,
    discount: 90.0,
    description: "A Melissa Heat Sandal é a opção perfeita para as M-Lovers que valorizam conforto e praticidade sem abrir mão do estilo. Ideal para eventos especiais ou dias em que você quer se destacar com sutileza, essa rasteira transforma qualquer produção com seu design fashionista e atemporal. A paleta de cores versátil permite criações infinitas, do clássico ao moderno, enquanto o fechamento ajustável garante o ajuste perfeito. Reinvente seus looks com a Melissa Heat Sandal, a parceira ideal para momentos inesquecíveis.",
    variacoes: [
      {
        titulo: "Verde",
        imagem: "/products/var_62c5db8c44a8.jpg",
        tipo: "cor"
      },
      {
        titulo: "lilas/laranja",
        imagem: "/products/var_c41b55838f6c.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_6d54d0d3dc87.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_599d543c1915.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-mare-platform",
    name: "Melissa Mare Platform",
    image: "/products/melissa-mare-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mare-platform/0-1413d2df9afa.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mare-platform/1-55670852ebf1.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mare-platform/2-4f591477f2e3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mare-platform/3-9dcfe81a8fd6.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mare-platform/4-752e1288db7b.jpg"],
    price: 25.99,
    originalPrice: 259.9,
    discount: 90.0,
    description: "A Melissa Mare Platform é a escolha ideal para os dias quentes em que leveza é prioridade. Com uma plataforma que adiciona um toque urbano e contemporâneo aos looks, ela é perfeita para quem busca estilo e praticidade em todos os momentos. O cabedal em X abraça os pés, enquanto o fechamento traseiro com fivela ajustável garante segurança e conforto no dia a dia. Pronta para explorar a estação mais vibrante com uma plataforma que acompanha seu ritmo? Viva o verão sem limites com a Melissa Mare Platform!",
    variacoes: [
      {
        titulo: "laranja/lilas",
        imagem: "/products/var_5e5315b3f021.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_b32bdc70bab1.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom/preto",
        imagem: "/products/var_129aa99249ec.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-flatform-m-lover-deluxe",
    name: "Melissa Flatform M-Lover Deluxe",
    image: "/products/melissa-flatform-m-lover-deluxe.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flatform-m-lover-deluxe/0-24fad0c7e6d0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flatform-m-lover-deluxe/1-237f490d93fa.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flatform-m-lover-deluxe/2-26e3fa95f48e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flatform-m-lover-deluxe/3-18d97c36e889.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flatform-m-lover-deluxe/4-6eba22e25668.jpg"],
    price: 31.99,
    originalPrice: 319.9,
    discount: 90.0,
    description: "A Melissa Flatform M-Lover Deluxe traz o brilho que seus looks merecem. A palmilha em EVA garante leveza a cada passo, enquanto os cristais aplicados adicionam um toque de glamour que transforma qualquer produção. Perfeita para quem ama um visual autêntico e descontraído, sem abrir mão do conforto.",
    variacoes: [
      {
        titulo: "preto/cristal",
        imagem: "/products/var_a9e4ae42d61f.jpg",
        tipo: "cor"
      },
      {
        titulo: "branco/cristal",
        imagem: "/products/var_1f924e6172f5.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/cristal",
        imagem: "/products/var_24fad0c7e6d0.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-anastasia",
    name: "Melissa Anastasia",
    image: "/products/melissa-anastasia.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-anastasia/0-34ce2fbb99af.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-anastasia/1-67ab7f4ab37f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-anastasia/2-21ef08cae7c1.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-anastasia/3-6d630a7f6747.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-anastasia/4-65d48d47a428.jpg"],
    price: 17.99,
    originalPrice: 179.9,
    discount: 90.0,
    description: "A Melissa Anastasia é um clássico repaginado que une a elegância do business core ao inconfundível DNA Melissa. Com design mule e bico quadrado, o modelo esbanja modernidade e praticidade. As tiras com fivela acrescentam sofisticação, enquanto a palmilha com espuma soft proporciona conforto ao caminhar. A Melissa Anastasia é versátil e indispensável para as M-Lovers que amam estar na moda sem abrir mão do conforto. Seja para o dia a dia ou para momentos especiais, essa é a escolha perfeita!",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_b368d9427942.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho",
        imagem: "/products/var_34ce2fbb99af.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_83e7c78cad7d.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_85fc1f4431da.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bronze",
        imagem: "/products/var_f8ed11757b9c.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-party-heel",
    name: "Melissa Party Heel",
    image: "/products/melissa-party-heel.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-party-heel/0-730c95b38ee2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-party-heel/1-d6bfeb42a68c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-party-heel/2-79a4bff7ab5b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-party-heel/3-5aee0331c029.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-party-heel/4-bc45aa76603a.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "A Melissa Party Heel é aquele salto nada básico para celebrar momentos extraordinários! Além do cabedal aranhado clássico do DNA Melissa, um dos destaques é o salto bloco ultra alto, que segue as tendências da temporada. Essa combinação resulta em um modelo imponente e icônico, que tem tudo para ser o novo queridinho para as m-lovers arrasarem por aí!",
    variacoes: [
      {
        titulo: "Rosa Glitter",
        imagem: "/products/var_4176e20f8edc.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vidro Glitter",
        imagem: "/products/var_038386f18d66.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege glitter ouro",
        imagem: "/products/var_07c410f900b8.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-aranha-quadrada",
    name: "Melissa Aranha Quadrada",
    image: "/products/melissa-aranha-quadrada.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-aranha-quadrada/0-f1d324ce65cc.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-aranha-quadrada/1-c7759336cf11.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-aranha-quadrada/2-0515b983e41f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-aranha-quadrada/3-fd62859cdf1f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-aranha-quadrada/4-cf42f9371eb6.jpg"],
    price: 15.99,
    originalPrice: 159.9,
    discount: 90.0,
    description: "A Melissa Aranha Quadrada volta ainda mais apaixonante. O shape possui fechamento em fivela no tornozelo e palmilha confort Grenflex. Cheia de estilo, o clássico da Melissa é perfeito para compor looks divertidos sem deixar de lado o conforto.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_c8566f71bd69.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_fe21132ae3e3.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_750453d47028.jpg",
        tipo: "cor"
      },
      {
        titulo: "Branco",
        imagem: "/products/var_3455b7a3cd09.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho",
        imagem: "/products/var_affa4006fd93.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-kick-off",
    name: "Melissa Kick Off",
    image: "/products/melissa-kick-off.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off/0-c526ea0536d8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off/1-44adcc60b9b8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off/2-a3dc7ecf5682.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off/3-7168e20c9f16.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off/4-ba3b73dee733.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "A Melissa Kick Off tem um shape transgressor que, combina o DNA da marca com a potência do streetwear. A evolução do estilo chuncky está presente no solado de EVA que torna o produto leve sem perder personalidade.",
    variacoes: [
      {
        titulo: "s:branco/branco",
        imagem: "/products/var_8a6548c98382.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-stellar-ii",
    name: "Melissa Stellar II",
    image: "/products/melissa-stellar-ii.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-stellar-ii/0-bf715a353a20.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-stellar-ii/1-cd97afd99502.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-stellar-ii/2-ea74d77d62a0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-stellar-ii/3-b162be79ec28.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-stellar-ii/4-56a2375aeb64.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "A Melissa Stellar é um reboot do shape irreverente e versátil, com um salto mais leve e descomplicado. O mood fica por conta do solado estiloso e confortável para compor os mais variados looks. Além do salto bloco, a Melissa Stellar também conta com uma palmilha fofinha em Grenflex.*Altura aproximada, pode variar conforme a numeração",
    variacoes: [
      {
        titulo: "Bege fosco",
        imagem: "/products/var_191f5355e747.jpg",
        tipo: "cor"
      },
      {
        titulo: "s:preto fosco",
        imagem: "/products/var_ca062b92132a.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa cameo opaco",
        imagem: "/products/var_f52a0283a067.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde apolo ff op",
        imagem: "/products/var_3489c5362d33.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom mundi opaco",
        imagem: "/products/var_185f9d8d3ea2.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa fosco",
        imagem: "/products/var_79a1e66d9450.jpg",
        tipo: "cor"
      },
      {
        titulo: "vidro fosco",
        imagem: "/products/var_6cbebbcb797d.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde/preto",
        imagem: "/products/var_2e7bb8312f71.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege/preto",
        imagem: "/products/var_124bb07f29ed.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-coturno",
    name: "Melissa Coturno",
    image: "/products/melissa-coturno.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-coturno/0-6cac40438624.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-coturno/1-6a5a646747fa.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-coturno/2-06d97b0dc239.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-coturno/3-dd5d2f937290.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-coturno/4-b26018bcd24e.jpg"],
    price: 36.99,
    originalPrice: 369.9,
    discount: 90.0,
    description: "Already a hit for Melissa, the Coturno boot will be available in more basic colors as well as matte and transparent Melflex PVC. In addition to classic colors, the Coturno boot will be available in tea-pink and transparent with golden glitter options.",
    variacoes: [
      {
        titulo: "S:preto/preto",
        imagem: "/products/var_bc0ad00d3f84.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa transparente/rosa",
        imagem: "/products/var_054ac92459f7.jpg",
        tipo: "cor"
      },
      {
        titulo: "lilas/prata glitter",
        imagem: "/products/var_f5bb6525ae70.jpg",
        tipo: "cor"
      },
      {
        titulo: "amarelo transparente/verde",
        imagem: "/products/var_f07e56b7f530.jpg",
        tipo: "cor"
      },
      {
        titulo: "lilas perolado",
        imagem: "/products/var_d1fa37239726.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_6cac40438624.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_76118d41bd37.jpg",
        tipo: "cor"
      },
      {
        titulo: "multi colorido glitter/bordo",
        imagem: "/products/var_f379136cda6a.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/vermelho transparent",
        imagem: "/products/var_3f88ec3c5fb1.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto/vidro casca arroz",
        imagem: "/products/var_bff209dfd526.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege/bege",
        imagem: "/products/var_be2e38c81832.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "40-M9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "41-M10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "42-M11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "43/44-M12",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-street",
    name: "Melissa Street",
    image: "/products/melissa-street.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-street/0-76a875977ad2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-street/1-d48e18edde3b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-street/2-5514be67fda4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-street/3-96dc895593c5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-street/4-c30a0aaec813.jpg"],
    price: 21.99,
    originalPrice: 219.9,
    discount: 90.0,
    description: "Uma mesma Melissa pode ser usada por diferentes pessoas e em diferentes situações e etapas da vida. Esse é o mote que inspirou a linha Pop: uma curadoria dos nossos best-sellers com cartela de cores exclusiva. A seleção dos shapes foi pensada carinhosamente para reforçar o DNA versátil e atemporal da Melissa. Pares com mood curinga e necessários para ornar os looks mais descolados tanto na rotina do trabalho quanto no rolê no final de semana.",
    variacoes: [
      {
        titulo: "s:branco/branco",
        imagem: "/products/var_95bb43450258.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/branco",
        imagem: "/products/var_d0348ab9b198.jpg",
        tipo: "cor"
      },
      {
        titulo: "s:azul/vermelho",
        imagem: "/products/var_872034251275.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/branco/amarelo",
        imagem: "/products/var_35d3439d40d9.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/branco/lilas",
        imagem: "/products/var_5bb305314f74.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "40-M9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "41-M10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "42-M11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "43/44-M12",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "S-TAM",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-ultragirl-basic",
    name: "Melissa Ultragirl Basic",
    image: "/products/melissa-ultragirl-basic.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ultragirl-basic/0-17c11c700cb3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ultragirl-basic/1-6fc28a6dfc0b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ultragirl-basic/2-c81bcda80dfe.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ultragirl-basic/3-d0708f9add48.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ultragirl-basic/4-5f6bed355faa.jpg"],
    price: 11.99,
    originalPrice: 119.9,
    discount: 90.0,
    description: "A Melissa Ultragirl Basic foi pensada carinhosamente para reforçar o DNA versátil e atemporal da marca. Toda essa ideia se espelha na macro tendência de que os clássicos e básicos são o novo luxo. Fazer escolhas inteligentes e duradouras é cool, além de ser super fácil.",
    variacoes: [
      {
        titulo: "rosa cameo opaco",
        imagem: "/products/var_1f43ce1c34af.jpg",
        tipo: "cor"
      },
      {
        titulo: "vermelho intenso doch tp",
        imagem: "/products/var_eab8706f2664.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto opaco",
        imagem: "/products/var_6801aa22bbc5.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa candy leitoso",
        imagem: "/products/var_0ceb66720baf.jpg",
        tipo: "cor"
      },
      {
        titulo: "lilas iris doch leitoso",
        imagem: "/products/var_6fc28a6dfc0b.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "40-M9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "41-M10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "42-M11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "43/44-M12",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cosmo-boot",
    name: "Melissa Cosmo Boot",
    image: "/products/melissa-cosmo-boot.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cosmo-boot/0-db8a040706d3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cosmo-boot/1-be568abadca1.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cosmo-boot/2-f42c0f584560.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cosmo-boot/3-7dd88a311be0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cosmo-boot/4-ef359044729d.jpg"],
    price: 35.99,
    originalPrice: 359.9,
    discount: 90.0,
    description: "Inspirada nos movimentos punk, grunge e gótico, a Melissa Cosmo Boot é uma bota cheia de irreverência. O modelo conta com cano médio, cabedal em Melflex, palmilha sequinha que absorve a umidade e sola em EVA biobased (mais sustentável). O fechamento em cadarço de material têxtil traz potência para o shape que tem tudo para se tornar o queridinho das fashionistas de atitude. Destaque para a paleta de cores, que traz tons mais fechados e sóbrios.",
    variacoes: [
      {
        titulo: "Preto/preto",
        imagem: "/products/var_5b3b6cbcd063.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto/verde",
        imagem: "/products/var_225520932f81.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom/rosa",
        imagem: "/products/var_004ab2132cf1.jpg",
        tipo: "cor"
      },
      {
        titulo: "bronze/bege",
        imagem: "/products/var_0ff836032622.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_d40565ea6fbd.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde/preto",
        imagem: "/products/var_2e9c81bf1215.jpg",
        tipo: "cor"
      },
      {
        titulo: "vermelho/bordo",
        imagem: "/products/var_3d9dc3f519a7.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-player-sneaker",
    name: "Melissa Player Sneaker",
    image: "/products/melissa-player-sneaker.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-player-sneaker/0-1e198833c1c0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-player-sneaker/1-ca128721b965.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-player-sneaker/2-ea07f97f2489.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-player-sneaker/3-a08fd4656d66.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-player-sneaker/4-72244535ebf4.jpg"],
    price: 35.99,
    originalPrice: 359.9,
    discount: 90.0,
    description: "Irreverente e super original, a Melissa Player Sneaker chega na nova coleção trazendo um espírito jovem e urbano. O modelo é repleto de detalhes: sua estrutura é fabricada em Melflex e conta com um revestimento interno em material têxtil, que garante máximo conforto. Com uma personalidade cool e contemporânea, tem formato botinha e conta com fechamento em cadarço. É um tênis infalível que inspira a criatividade e nos faz desejar ter vários no armário!Tênis Melissa Player Sneaker vermelho, rosa e branco produzido em plástico PVC Melflex®️ e material têxtil. O modelo tem bico arredondado, formato de bota de cano curto e estrutura com detalhes vazados nas laterais. A parte interna é revestida com material têxtil que fica aparente nas aberturas. Conta com cadarço têxtil que permite o ajuste ao pé. A palmilha e a lingueta contam com o logotipo da marca estampado.Forma regular, sugerimos tamanho padrão. Melflex®️ é um material revolucionário em forma de PVC, 100% reciclável e que proporciona mais flexibilidade, resistência e conforto aos pés. Material: PVC Melflex®️ e material têxtil.",
    variacoes: [
      {
        titulo: "bege/branco/lilas",
        imagem: "/products/var_418ba106a65e.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde/branco",
        imagem: "/products/var_ee6f25e4c5a0.jpg",
        tipo: "cor"
      },
      {
        titulo: "branco/prata",
        imagem: "/products/var_ec7dc3528d3f.jpg",
        tipo: "cor"
      },
      {
        titulo: "branco/vermelho",
        imagem: "/products/var_2abf16b877c3.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "40-M9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "41-M10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "42-M11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "43/44-M12",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-royal",
    name: "Melissa Royal",
    image: "/products/melissa-royal.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-royal/0-78a304dffa70.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-royal/1-bc7929f247f4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-royal/2-7cb1194b137d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-royal/3-705284453b3f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-royal/4-9264f7401e4c.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "O shape mais querido das fashionistas nas últimas temporadas ganhou uma versão da Melissa com cheirinho de tutti-fruti! A Melissa Royal tem design com estilo Loafer e seu shape é inspirado nos sapatos clássicos que voltaram com tudo para complementar os l",
    variacoes: [
      {
        titulo: "Rosa",
        imagem: "/products/var_2742aceff01d.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_78a304dffa70.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa fosco",
        imagem: "/products/var_6e6b3d6a1a75.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-soft-ballerina",
    name: "Melissa Soft Ballerina",
    image: "/products/melissa-soft-ballerina.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-soft-ballerina/0-d1a749a66f92.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-soft-ballerina/1-d0746f9fdd47.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-soft-ballerina/2-50db5280d70b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-soft-ballerina/3-34dd76b5888c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-soft-ballerina/4-44396a59f1be.jpg"],
    price: 19.99,
    originalPrice: 199.9,
    discount: 90.0,
    description: "A Melissa Soft Ballerina é a escolha perfeita para quem deseja se destacar no universo balletcore com muito estilo e conforto. Sua tira ajustável em pin permite um ajuste perfeito, e o design versátil fica incrível tanto com meia quanto sem. Feita em Melf",
    variacoes: [
      {
        titulo: "rosarosa",
        imagem: "/products/var_d1a749a66f92.jpg",
        tipo: "cor"
      },
      {
        titulo: "begebege",
        imagem: "/products/var_5659fbf1f696.jpg",
        tipo: "cor"
      },
      {
        titulo: "pretopreto",
        imagem: "/products/var_7e4b6c9cbc36.jpg",
        tipo: "cor"
      },
      {
        titulo: "verdebege",
        imagem: "/products/var_2071512dcd3c.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom transparente",
        imagem: "/products/var_01868e761cf6.jpg",
        tipo: "cor"
      },
      {
        titulo: "prata",
        imagem: "/products/var_81add6fad9c5.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_97661a78e18c.jpg",
        tipo: "cor"
      },
      {
        titulo: "fume",
        imagem: "/products/var_8ca7ec636893.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho",
        imagem: "/products/var_a72657ae5a10.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_b7aa3a9d834b.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_ab073cbe4857.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa transparente",
        imagem: "/products/var_ea00725f3300.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bordo",
        imagem: "/products/var_1c2be0074bfd.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_928302bc84bf.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-possession-glitter",
    name: "Melissa Possession Glitter",
    image: "/products/melissa-possession-glitter.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-glitter/0-1c0052afc7e4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-glitter/1-32ea6304cf9d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-glitter/2-07a58b1928dc.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-glitter/3-3f6b4cb70782.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-glitter/4-b29c71ed3a3e.jpg"],
    price: 19.99,
    originalPrice: 199.9,
    discount: 90.0,
    description: "A sandália mais adorada de todos os tempos com brilho extra! A Melissa Possession Glitter promete entregar looks cheio de vida e brilho para quem não tem medo de se destacar. Esta versão preserva o design clássico do modelo, com seu cabedal texturizado, fechamento por fivela e bico arredondado, mantendo a essência dos icônicos jelly shoes que estão no DNA da Melissa. É um must-have para as M-Lovers que adoram brilhar!",
    variacoes: [
      {
        titulo: "Dourado Glitter",
        imagem: "/products/var_1d8492f90c13.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vidro Glitter",
        imagem: "/products/var_7ede638e91ec.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa Glitter",
        imagem: "/products/var_d5c59c24dee5.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto glitter",
        imagem: "/products/var_59de405219f1.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa glitter prata",
        imagem: "/products/var_20efafa2ece4.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto glitter bronze",
        imagem: "/products/var_0cca726255a2.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul/rosa/glitter",
        imagem: "/products/var_cbffe818fa6c.jpg",
        tipo: "cor"
      },
      {
        titulo: "Laranja glitter",
        imagem: "/products/var_29c69dc6c9f8.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-float",
    name: "Melissa Float",
    image: "/products/melissa-float.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-float/0-b3d80169f6b6.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-float/1-e582562628e4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-float/2-5bb00293d6f8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-float/3-cd77420a54a1.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-float/4-80cbf6d8d8c1.jpg"],
    price: 19.99,
    originalPrice: 199.9,
    discount: 90.0,
    description: "Se tem um modelo que faz sucesso entre as M-Lovers, são os flip flops! A Melissa Float é mais uma candidata a ser sua bestie, unindo conforto, leveza e o cheirinho inconfundível de tutti-frutti. Com design descomplicado e toque macio, ela é perfeita para um look relax, sem abrir mão do estilo.",
    variacoes: [
      {
        titulo: "Verde",
        imagem: "/products/var_a9f211c75493.jpg",
        tipo: "cor"
      },
      {
        titulo: "branco/vidro",
        imagem: "/products/var_d6e1b4aec3e9.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_3f4a6f8d0b00.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/rosa transparente",
        imagem: "/products/var_62798f2126ba.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_3f8b6beedc6f.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom/bege transparente",
        imagem: "/products/var_7f2396e054f9.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-possession-heel",
    name: "Melissa Possession Heel",
    image: "/products/melissa-possession-heel.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-heel/0-91b6f425cdd4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-heel/1-3dfa6bf9c539.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-heel/2-15e3a0e3233e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-heel/3-6c4de6c46e13.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-heel/4-d1e59ad29e30.jpg"],
    price: 21.99,
    originalPrice: 219.9,
    discount: 90.0,
    description: "Na versão Melissa Possession Heel, a clássica Melissa Possession ganha um salto médio, sem perder seu DNA, esse modelo adiciona um toque a mais de feminilidade e estilo. A parte superior traz o famoso cabedal aranhado que todas amam. O fechamento em fivela garante ajuste perfeito e segurança em cada passo. Ideal para quem não quer descer do salto, mas deseja muito conforto para todos os momentos do dia!",
    variacoes: [
      {
        titulo: "Vidro Glitter",
        imagem: "/products/var_3dfa6bf9c539.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_0ed9dbdf8f51.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_9e3a7ae91d3b.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa||BC191",
        imagem: "/products/var_7d90e1e5122e.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-ella",
    name: "Melissa Ella",
    image: "/products/melissa-ella.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ella/0-ce9a54e51743.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ella/1-3f6a32972e1a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ella/2-a6957c1bdfe6.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ella/3-842d14a59627.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ella/4-da87b968b464.jpg"],
    price: 24.99,
    originalPrice: 249.9,
    discount: 90.0,
    description: "A Melissa Ella é sinônimo de estilo e praticidade. Com sola tratorada e design imponente, ela traz a energia do streetwear para o dia a dia. O encaixe confortável e a estrutura robusta garantem um visual marcante sem abrir mão do bem-estar a cada passo.",
    variacoes: [
      {
        titulo: "Rosa",
        imagem: "/products/var_4c16902a5da3.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_b771a995a90d.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_7e3eb5cf06db.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_4024d170b8ed.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa||BA583",
        imagem: "/products/var_cb60657f35f0.jpg",
        tipo: "cor"
      },
      {
        titulo: "Laranja",
        imagem: "/products/var_2767f299ec28.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde||BK418",
        imagem: "/products/var_f300d217a59a.jpg",
        tipo: "cor"
      },
      {
        titulo: "Lilas",
        imagem: "/products/var_3ef913365449.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-flatform-m-lover",
    name: "Melissa Flatform M-Lover",
    image: "/products/melissa-flatform-m-lover.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flatform-m-lover/0-a710d7004415.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flatform-m-lover/1-2336cfe4a720.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flatform-m-lover/2-45659bbaa6cf.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flatform-m-lover/3-3e20cfa1cf1c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flatform-m-lover/4-053a8838798a.jpg"],
    price: 17.99,
    originalPrice: 179.9,
    discount: 90.0,
    description: "As tiras com volumetria são uma tendência que veio para ficar. Na Melissa Platform M-Lover elas surgem em uma proposta mais larga e envolvem o um estilo super fashionista. É aquela plataforma que transforma o look básico em uma produção fashionista! O modelo tem sola em EVA , que proporciona um visual imponente, mas sem deixar de ser leve e confortável. Um item super autêntico que funciona bem em diversas ocasiões.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_79ba10799e29.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_2d248b893c3b.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_f12f762b8211.jpg",
        tipo: "cor"
      },
      {
        titulo: "Branco",
        imagem: "/products/var_0e8c2f55d980.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_288734f975eb.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho",
        imagem: "/products/var_a710d7004415.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_06459b407829.jpg",
        tipo: "cor"
      },
      {
        titulo: "Lilas",
        imagem: "/products/var_d5f571c330c1.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa Claro",
        imagem: "/products/var_ff78b81f3889.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege claro",
        imagem: "/products/var_a1872906a573.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_1f61b56c81ef.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-dulce-bag",
    name: "Melissa Dulce Bag",
    image: "/products/melissa-dulce-bag.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-dulce-bag/0-6c01b6b7959e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-dulce-bag/1-5a9fe8610a78.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-dulce-bag/2-83d446e7a302.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-dulce-bag/3-19c86471803d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-dulce-bag/4-037e8aedc85a.jpg"],
    price: 36.99,
    originalPrice: 369.9,
    discount: 90.0,
    description: "A Melissa Dulce é ideal para quem gosta de bolsas curingas, fáceis de combinar e práticas. É um modelo super fashionista, que tem como destaque as alças que se estendem em formato de tira por toda a bolsa, com o logo da marca estampado. Além de complementar as produções com atitude, a Melissa Dulce é espaçosa e funcional para o dia a dia. O material da Dulce Bag é composto por Melflex.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_0e7aa353fbd2.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege/preto",
        imagem: "/products/var_cdba3b38a3fc.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho",
        imagem: "/products/var_90a6817db538.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_141922606551.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_e5cb37d05ade.jpg",
        tipo: "cor"
      },
      {
        titulo: "bordo/marrom",
        imagem: "/products/var_73b9030ffa96.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom/bege",
        imagem: "/products/var_7beba4ceef16.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-hoop-bag",
    name: "Melissa Hoop Bag",
    image: "/products/melissa-hoop-bag.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-hoop-bag/0-fa1bdcd6323d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-hoop-bag/1-72f92d23404d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-hoop-bag/2-e8f369343b09.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-hoop-bag/3-46f7a2f60474.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-hoop-bag/4-f5cb64cba830.jpg"],
    price: 28.99,
    originalPrice: 289.9,
    discount: 90.0,
    description: "A Melissa Hoop Bag tem 28cm de comprimento, 7cm de profundidade e 15cm de altura, ou seja, ideal para levar o celular, um gloss e headphones. Um charme! Veja.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_449ffd0137cd.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-explorer",
    name: "Melissa Explorer",
    image: "/products/melissa-explorer.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-explorer/0-aabca1a6ba8c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-explorer/1-4324d2fbb290.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-explorer/2-0999152fb62b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-explorer/3-77ba1c6fa8b1.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-explorer/4-6afceafea1e1.jpg"],
    price: 17.99,
    originalPrice: 179.9,
    discount: 90.0,
    description: "Uma bag para explorar novos horizontes e viver grandes aventuras!",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_aabca1a6ba8c.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_752217def0fa.jpg",
        tipo: "cor"
      },
      {
        titulo: "lilas/verde/azul",
        imagem: "/products/var_3067bb20d148.jpg",
        tipo: "cor"
      },
      {
        titulo: "Lilas",
        imagem: "/products/var_1d80e7d56a58.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-mary-bag",
    name: "Melissa Mary Bag",
    image: "/products/melissa-mary-bag.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mary-bag/0-3e00255d8196.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mary-bag/1-009bcf5e703f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mary-bag/2-c61da72f3568.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mary-bag/3-45f217c77448.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mary-bag/4-177e2c0b23ed.jpg"],
    price: 22.99,
    originalPrice: 229.9,
    discount: 90.0,
    description: "Quem é fã da Melissa Sac Bag tem uma nova opção de bolsa para ser a queridinha do momento. Chegou a Melissa Mary Bag: básica, versátil, com muito espaço interno e linda, é claro! Fabricada em Melflex, conta com detalhe da alça reguladora com pino em metal. Destaque para a versão em vidro glitter para quem não dispensa a oportunidade de brilhar!",
    variacoes: [
      {
        titulo: "Unico",
        imagem: "/products/var_276064c7a4fb.jpg",
        tipo: "cor"
      }
    ]
  },
  {
    id: "melissa-perfection",
    name: "Melissa Perfection",
    image: "/products/melissa-perfection.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-perfection/0-02a1d3b4deaa.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-perfection/1-50c8926d4962.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-perfection/2-ab74e86dcf4e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-perfection/3-d923995f70fa.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-perfection/4-e725a025d664.jpg"],
    price: 13.99,
    originalPrice: 139.9,
    discount: 90.0,
    description: "Para surpreender alguém especial ou para ser sua companheira em todas as ocasiões, a Melissa Perfection é um conjunto de necessaire e slide, que exibe design clássico como destaque principal. A paleta de cores modernas, torna impossível escolher apenas uma. Tanto a necessaire quanto o slide podem ser usados juntos ou separadamente, adaptando-se perfeitamente ao seu estilo de look! A Melissa Perfection vai estar sempre preparada para dar um toque original nas suas produções.",
    variacoes: [
      {
        titulo: "Vermelho",
        imagem: "/products/var_8067f125dd09.jpg",
        tipo: "cor"
      },
      {
        titulo: "Cinza",
        imagem: "/products/var_4fc5d61f4b28.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_b741f20cf8d6.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-vibe-bag",
    name: "Melissa Vibe Bag",
    image: "/products/melissa-vibe-bag.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-vibe-bag/0-fe8b2ef5aa6a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-vibe-bag/1-8423cf334267.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-vibe-bag/2-c19f259188b0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-vibe-bag/3-f94fc689a8f8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-vibe-bag/4-940ecdbdaaac.jpg"],
    price: 27.99,
    originalPrice: 279.9,
    discount: 90.0,
    description: "O que você vai levar na inédita Melissa Vibe Bag? A nova bag da Melissa, além do seu design minimalista e sofisticado, é um acessório prático com um amplo espaço interno e fechamento em zíper, ou seja, perfeita para acompanhar você em todos os momentos extraordinários. Mais características sobre a Vibe Bag:Bolsa monobloco de EVA injetadoFechamento em ZíperAlça de ombroDetalhe de coração em relevo que dão o charme",
    variacoes: [
      {
        titulo: "Bege",
        imagem: "/products/var_4989c5044fac.jpg",
        tipo: "cor"
      },
      {
        titulo: "Branco/preto",
        imagem: "/products/var_99051fda5198.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/vermelho",
        imagem: "/products/var_76d34f3d2dc6.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde/marrom",
        imagem: "/products/var_aa7696958954.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_d80ece1e108a.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_901c6337d7b6.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde/bege",
        imagem: "/products/var_c3e9dff519a0.jpg",
        tipo: "cor"
      },
      {
        titulo: "bordo/bege",
        imagem: "/products/var_ddcb65cf9bed.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_b05ccced4c47.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-x-telfar-large-jelly-shopper-ii",
    name: "Melissa X Telfar Large Jelly Shopper II",
    image: "/products/melissa-x-telfar-large-jelly-shopper-ii.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-telfar-large-jelly-shopper-ii/0-770607ec8e2e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-telfar-large-jelly-shopper-ii/1-6f737d7544d8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-telfar-large-jelly-shopper-ii/2-c9c233495658.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-telfar-large-jelly-shopper-ii/3-1411d68943a2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-x-telfar-large-jelly-shopper-ii/4-99263d52874e.jpg"],
    price: 54.99,
    originalPrice: 549.9,
    discount: 90.0,
    description: "A coleção da Melissa com a Telfar já é um clássico para o universo fashion. As bolsas Melissa X Telfar Jelly Shopper, em Melflex, usadas por diversas celebridades, agora ganham novas cores vibrantes, translúcidas e coloridas, trazendo ainda mais DNA Melissa para a coleção. Mais características sobre a Melissa X Telfar Large Jelly Shopper II:Bolsa e alças em MelflexAlças coladas na bolsaAlça de ombro aproximadamente: 530mmDimensões: 10x30x42cmCartela de cores translúcida e vibrante",
    variacoes: [
      {
        titulo: "Laranja",
        imagem: "/products/var_770607ec8e2e.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-link-bag",
    name: "Melissa Link Bag",
    image: "/products/melissa-link-bag.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-link-bag/0-41e633d7a143.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-link-bag/1-8deb0f8579fe.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-link-bag/2-703b21267a56.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-link-bag/3-5f0d8d21a04c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-link-bag/4-3d6132919935.jpg"],
    price: 19.99,
    originalPrice: 199.9,
    discount: 90.0,
    description: "A Melissa Link Bag chegou para trazer praticidade e muito estilo para os seus dias. Compacta e cheia de personalidade, essa phone bag é perfeita para acompanhar você em qualquer ocasião. A incrível paleta de cores com efeito glitter e a alça com o logo da Melissa dão o toque fashion extra que o seu lookinho merece. A Melissa Link Bag é a escolha ideal para as M-Lovers que adoram praticidade sem abrir mão do estilo.Mais características da Melissa Link Bag:Bolsa em MelflexEfeito glitter injetadoLogo Melissa em baixo relevo na parte frontalAlça têxtilDimensões: 10 cm x 5 cm x 17.5 cm",
    variacoes: [
      {
        titulo: "verde/glitter",
        imagem: "/products/var_7ba3a3a01ee2.jpg",
        tipo: "cor"
      },
      {
        titulo: "lilas/glitter",
        imagem: "/products/var_cbeb5e56216d.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_34e0e6e99c21.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/glitter",
        imagem: "/products/var_b24ed52cf544.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul/marrom",
        imagem: "/products/var_b3b095b9f5bd.jpg",
        tipo: "cor"
      },
      {
        titulo: "cinza/glitter",
        imagem: "/products/var_41e633d7a143.jpg",
        tipo: "cor"
      },
      {
        titulo: "Lilas",
        imagem: "/products/var_f07f4b71b07b.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_f5bee3102e4d.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/verde",
        imagem: "/products/var_616780688627.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-bolsa-refraction-ii-sp",
    name: "Melissa Bolsa Refraction II SP",
    image: "/products/melissa-bolsa-refraction-ii-sp.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-bolsa-refraction-ii-sp/0-d9f07ed1bf9f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-bolsa-refraction-ii-sp/1-53a901029f6f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-bolsa-refraction-ii-sp/2-08cf5bcf0daf.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-bolsa-refraction-ii-sp/3-9b335d8b90df.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-bolsa-refraction-ii-sp/4-dd291b61d4ee.jpg"],
    price: 14.99,
    originalPrice: 149.9,
    discount: 90.0,
    description: "A Melissa Bolsa Refraction II SP é a peça que faltava para transformar seus looks em verdadeiros ícones da moda. Com um design moderno que exala o DNA Melissa, ela combina perfeitamente com a clássica e atemporal Melissa Possession, formando um duo de estilo para qualquer ocasião. Os tons de rosa trazem o frescor do verão para agregar ainda mais personalidade ao projeto Melissa Frizzante. Espaçosa e superestilosa, a Melissa Bolsa Refraction II SP promete ser sua companheira fiel, indo com você pra onde for. Não perca tempo e garanta já seu novo ícone de estilo, bestie!",
    variacoes: [
      {
        titulo: "bege dollar pe",
        imagem: "/products/var_4c3376cb67ec.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom warp pe blenda",
        imagem: "/products/var_38fb4d1aa96b.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_7f35d10ddf22.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa Claro",
        imagem: "/products/var_0ba44c785952.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-heartbeat-bag",
    name: "Melissa Heartbeat Bag",
    image: "/products/melissa-heartbeat-bag.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-heartbeat-bag/0-31640da1c237.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-heartbeat-bag/1-df2c43a0e4e2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-heartbeat-bag/2-fef3d3359cc8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-heartbeat-bag/3-fe2cc9c3e597.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-heartbeat-bag/4-703c83229e79.jpg"],
    price: 24.99,
    originalPrice: 249.9,
    discount: 90.0,
    description: "Diga que você é fã da Melissa sem precisar dizer que é fã da Melissa. A nova Melissa Heartbeat Bag chegou para se destacar nas produções de looks com o seu formato em coração. Desenvolvida em monobloco Full Plastic, tem fechamento em zíper, duas opções de alça para usar e abusar, além de possuir possui 20cm de largura, 09cm de profundidade e 18cm de altura. Aposte bestie!",
    variacoes: [
      {
        titulo: "Vermelho",
        imagem: "/products/var_31640da1c237.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_b2ffdd61d806.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-urban-bag",
    name: "Melissa Urban Bag",
    image: "/products/melissa-urban-bag.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-urban-bag/0-104ebce6f4bd.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-urban-bag/1-145bcf3fb27a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-urban-bag/2-8c4e9ee9eab2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-urban-bag/3-1dacac32e0a7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-urban-bag/4-eed0d1c0d0ce.jpg"],
    price: 21.99,
    originalPrice: 219.9,
    discount: 90.0,
    description: "A Melissa Urban Bag é uma inspiração atualizada da Tote Bag e é super ideal para quem adora a estética corpcore – que traz referências de roupas do meio corporativo. Com 20cm de largura, 12cm de profundidade e 26cm de altura, a Melissa Urban Bag é ideal para momentos que fazem parte do dia a dia.",
    variacoes: [
      {
        titulo: "Rosa",
        imagem: "/products/var_9a9dd17fbe88.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_ce7e3fe90965.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-duo-m-lover",
    name: "Melissa Duo M-Lover",
    image: "/products/melissa-duo-m-lover.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-duo-m-lover/0-71bbd8bc113f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-duo-m-lover/1-52d3fde0027f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-duo-m-lover/2-a8ac6333423a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-duo-m-lover/3-a912b9560010.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-duo-m-lover/4-46c90ae78aee.jpg"],
    price: 16.99,
    originalPrice: 169.9,
    discount: 90.0,
    description: "A Melissa Duo M Lover traz o equilíbrio perfeito entre estilo e praticidade. Com sua rasteira de duas tiras, ela combina modernidade e sofisticação em um design cheio de personalidade. O acabamento M Lover dá aquele charme extra, tornando o modelo ainda mais exclusivo. Para completar, acompanha uma bolsa com zíper, seguindo a mesma estética e oferecendo ainda mais funcionalidade ao look. Versátil, esse combo é ideal para diversas ocasiões, proporcionando um visual contemporâneo e cheio de atitude.",
    variacoes: [
      {
        titulo: "Preto/bege",
        imagem: "/products/var_cb3a04dac28d.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul/bege",
        imagem: "/products/var_9f9ad25777ae.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege/bege",
        imagem: "/products/var_184b02607b52.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho",
        imagem: "/products/var_34182063b58a.jpg",
        tipo: "cor"
      },
      {
        titulo: "lilas/rosa",
        imagem: "/products/var_71bbd8bc113f.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-nina-bag-alexandre-pavao",
    name: "Melissa Nina Bag + Alexandre Pavão",
    image: "/products/melissa-nina-bag-alexandre-pavao.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-nina-bag-alexandre-pavao/0-9653d5d4648c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-nina-bag-alexandre-pavao/1-37907f1d7bdf.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-nina-bag-alexandre-pavao/2-fd1163a4f80c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-nina-bag-alexandre-pavao/3-327ac9e30451.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-nina-bag-alexandre-pavao/4-a7c61066138f.jpg"],
    price: 49.99,
    originalPrice: 499.9,
    discount: 90.0,
    description: "Melissa Nina Bag + Alexandre Pavão: design que desafia convençõesA Melissa Nina Bag + Alexandre Pavão vai além de um simples acessório — é uma declaração de estilo para quem não abre mão de originalidade e presença marcante. Com sua linguagem maximalista, a bolsa revela texturas e acabamentos que provocam sensações táteis e visuais, convidando a explorar uma nova forma de se expressar. O shape icônico ganha vida com detalhes como o zíper e puxador que unem funcionalidade à estética, enquanto os mosquetões adicionam um toque de atitude e praticidade. Produzida em Melflex®, a peça une resistência e leveza, adaptando-se com versatilidade aos diferentes momentos do dia a dia. Essa colaboração traz a força criativa de duas marcas que transformam o vestir em experiência, fazendo da bolsa um item indispensável para quem deseja marcar presença com personalidade.",
    variacoes: [
      {
        titulo: "preto/cinza",
        imagem: "/products/var_011e7bcafa2e.jpg",
        tipo: "cor"
      },
      {
        titulo: "laranja/azul",
        imagem: "/products/var_8720f068432a.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-m-lover-charm",
    name: "Melissa M-Lover Charm",
    image: "/products/melissa-m-lover-charm.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-m-lover-charm/0-8808b4e1566f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-m-lover-charm/1-be4e6edfe5d7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-m-lover-charm/2-c9e46ad03837.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-m-lover-charm/3-e78f8ad74e9c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-m-lover-charm/4-8d2e5b5d1d3c.jpg"],
    price: 3.99,
    originalPrice: 39.9,
    discount: 90.0,
    description: "O Melissa M-Lover Charm é um acessório colecionável que une estilo e personalidade. Com formato de chaveiro, ele funciona como bag charm e é ideal para personalizar bolsas, mochilas ou onde sua criatividade quiser. Um toque divertido para levar a Melissa sempre com você, em qualquer look.",
    variacoes: [
      {
        titulo: "Verde",
        imagem: "/products/var_a8e57210fbf8.jpg",
        tipo: "cor"
      },
      {
        titulo: "Laranja",
        imagem: "/products/var_5a7eb48baf0d.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa medio",
        imagem: "/products/var_4b7f7fc7d4d2.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto/multicor",
        imagem: "/products/var_702cfd21ae93.jpg",
        tipo: "cor"
      },
      {
        titulo: "Lilas",
        imagem: "/products/var_fe8cdfe31359.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cargo-bag",
    name: "Melissa Cargo Bag",
    image: "/products/melissa-cargo-bag.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cargo-bag/0-9e1500e8cd59.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cargo-bag/1-15aafbb43791.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cargo-bag/2-5441527d4e05.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cargo-bag/3-4769865e98e9.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cargo-bag/4-edcc25a003ac.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "A Melissa Cargo Bag traduz o estilo utilitário com um toque fashion irresistível. Com bolsos frontais marcantes e design estruturado, ela carrega atitude e praticidade em cada detalhe. Seu shape contemporâneo é reforçado pela tampa com fechamento magnético e a alça regulável, que permite múltiplas formas de uso – no ombro ou transpassada. Ideal para quem busca funcionalidade sem abrir mão do estilo, essa bolsa é o match perfeito para looks urbanos, criativos e cheios de personalidade.Mais que acessório, um statement.",
    variacoes: [
      {
        titulo: "Vermelho",
        imagem: "/products/var_2a308206624d.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_73e520822e84.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_7e3faf8fa78a.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_f64d32fd32f5.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-mini-vibe-bag",
    name: "Melissa Mini Vibe Bag",
    image: "/products/melissa-mini-vibe-bag.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mini-vibe-bag/0-8de1758f9688.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mini-vibe-bag/1-ef678d0b58c5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mini-vibe-bag/2-bc1daddd0a23.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mini-vibe-bag/3-c247882f1357.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mini-vibe-bag/4-d5fbc337c21a.jpg"],
    price: 21.99,
    originalPrice: 219.9,
    discount: 90.0,
    description: "A Melissa Mini Vibe Bag chegou para provar que tamanho não limita impacto. Em uma versão compacta, mas ainda cheia de atitude, ela entrega o equilíbrio perfeito entre praticidade e estilo. Com shape minimalista e fechamento em zíper, ela é ideal para guardar o essencial com segurança. A alça personalizada com o logo Melissa dá um toque urbano e contemporâneo, permitindo diferentes formas de uso, transversal ou no ombro.Versátil, leve e cheia de personalidade: a Mini Vibe é a escolha certa para acompanhar todos os momentos com muito estilo.",
    variacoes: [
      {
        titulo: "Bege claro",
        imagem: "/products/var_0bcf6c2745f5.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa medio",
        imagem: "/products/var_57ef69e9274a.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_356c38a4a2eb.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul medio",
        imagem: "/products/var_d216183afeec.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-pulse",
    name: "Melissa Pulse",
    image: "/products/melissa-pulse.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-pulse/0-e2f9d4cd03b9.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-pulse/1-e910eebace4a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-pulse/2-5e497ed631f4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-pulse/3-a23125fe64fa.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-pulse/4-ef46e0c7dfae.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "Sandália Plataforma Melissa PulseA sandália feminina Melissa Pulse eleva seu estilo com uma plataforma imponente e design moderno que combina conforto e atitude para qualquer ocasião.O fechamento ajustável oferece praticidade no dia a dia, enquanto o logo Melissa na tira reforça a autenticidade da marca. Com um mix de materiais, essa sandália apresenta um visual fresh e cheio de personalidade.Versátil e descolada, acompanha seus looks do casual ao fashionista, acompanhando você em todos os roles, em festas, passeios no parque e até no shopping, trazendo o toque único que só a Melissa oferece.Principais características:• Plataforma confortável e imponente• Fechamento ajustável• Design moderno e autêntico• Visual fresh e versátilPara quem busca moda com conforto e estilo, a Melissa Pulse é a escolha ideal para composições cheias de personalidade.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_37ec4659b455.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto/rosa/verde",
        imagem: "/products/var_69b874b9e13a.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_de02fff53cee.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_1bd634b0011e.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/verde",
        imagem: "/products/var_d6f8011f1b23.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_95b375ec8fa0.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cross-m-lover-platform",
    name: "Melissa Cross M-Lover Platform",
    image: "/products/melissa-cross-m-lover-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cross-m-lover-platform/0-a831523839fe.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cross-m-lover-platform/1-54e51220d789.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cross-m-lover-platform/2-a9efe9a39ebb.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cross-m-lover-platform/3-1f9903439f2e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cross-m-lover-platform/4-54469c10bde1.jpg"],
    price: 27.99,
    originalPrice: 279.9,
    discount: 90.0,
    description: "Plataforma Melissa Cross M-Lover PlatformA Melissa Cross M-Lover Platform é a plataforma feminina que une altura, leveza e personalidade em cada passo. Com cabedal em formato X, palmilha com tecnologia EVA e solado tratorado, oferece conforto extremo aliado a uma pegada urbana cheia de atitude.As tiras com o nome Melissa em relevo dão um toque icônico e autêntico, reforçando o DNA fashion da marca. Versátil e marcante, essa plataforma acompanha você do passeio na cidade aos encontros com as amigas, trazendo estilo e conforto para todos os momentos.Principais características:• Cabedal em X com design moderno• Palmilha EVA para conforto prolongado• Solado tratorado para estilo urbano• Tiras com logo Melissa em relevoEleve seu visual com a plataforma feminina Melissa Cross M-Lover Platform, perfeita para quem faz do estilo uma extensão da personalidade.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_8cc0a4b045ee.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/marrom",
        imagem: "/products/var_a831523839fe.jpg",
        tipo: "cor"
      },
      {
        titulo: "Laranja",
        imagem: "/products/var_e8ce42b2f1d2.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde/bege",
        imagem: "/products/var_f7b76f2e5706.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom/marrom",
        imagem: "/products/var_216f9b94caa3.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/rosa",
        imagem: "/products/var_cb9b7c2ae8c1.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-up-platform",
    name: "Melissa Up Platform",
    image: "/products/melissa-up-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-up-platform/0-a9e019d424a3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-up-platform/1-26f60b413800.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-up-platform/2-5a76b47a6969.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-up-platform/3-b54da3ba7f20.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-up-platform/4-925ec554e7b0.jpg"],
    price: 31.99,
    originalPrice: 319.9,
    discount: 90.0,
    description: "A Melissa Up Platform é a expressão do estilo urbano em sua forma mais autêntica. Inspirada no street style, ela combina o solado plataforma imponente com o design moderno e cheio de atitude que traduz a essência da marca. Além de acrescentar altura com conforto, o modelo traz versatilidade para compor desde produções casuais até looks mais ousados, reforçando o espírito criativo e contemporâneo de quem gosta de se destacar.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_7101fad5277c.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_0221581ca6f7.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_1277f7f9c003.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege claro",
        imagem: "/products/var_a5b315c2f739.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-thong-wedge",
    name: "Melissa Free Thong Wedge",
    image: "/products/melissa-free-thong-wedge.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-thong-wedge/0-6e58ff80cf31.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-thong-wedge/1-d58f30f19f5b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-thong-wedge/2-4ce3b8135c3c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-thong-wedge/3-1d005d20192d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-thong-wedge/4-cfb681107b2a.jpg"],
    price: 34.99,
    originalPrice: 349.9,
    discount: 90.0,
    description: "Tamanco feminino Melissa Free Thong WedgeConforto e estilo se unem na perfeição com a Anabela Melissa Free Thong Wedge, uma combinação que vai transformar o seu jeito de caminhar. Com design moderno e tecnologia inovadora, esse tamanco feminino feita em EVA® ultraleve é a escolha perfeita para quem ama praticidade no dia a dia.Ideal para acompanhar seu dia a dia com facilidade, seja para um passeio casual, um encontro com amigos ou uma festa descontraída. É aquela peça curinga que se adapta a diferentes estilos, combinando perfeitamente com jeans, shorts ou vestidos leves para um visual moderno e despojado.Principais características:Tecnologia EVA®, ultraleve e confortável;Tamanco marcante com estilo moderno;Versátil para diversas ocasiões.Eleve seu visual com a Melissa Free Thong Wedge, a anabela que transforma qualquer look com conforto, atitude e muito estilo.",
    variacoes: [
      {
        titulo: "Marrom",
        imagem: "/products/var_874bd6747a15.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege claro",
        imagem: "/products/var_54dcb234393b.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_d456dce8512d.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_6e86805fc252.jpg",
        tipo: "cor"
      },
      {
        titulo: "Lilas",
        imagem: "/products/var_1d6df8357f76.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-flip-flop-airflow",
    name: "Melissa Flip Flop Airflow",
    image: "/products/melissa-flip-flop-airflow.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flip-flop-airflow/0-77865d86a75f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flip-flop-airflow/1-bab37e4f4555.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flip-flop-airflow/2-1fb921c423a8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flip-flop-airflow/3-cba6de163b68.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flip-flop-airflow/4-b3029086c8e2.jpg"],
    price: 12.99,
    originalPrice: 129.9,
    discount: 90.0,
    description: "A Melissa Flip Flop Airflow é o chinelo perfeito para quem busca leveza, conforto e estilo nos dias mais quentes. Com design minimalista e acabamento moderno, esse modelo traz a estética dos flip-flops para o cotidiano, transitando com facilidade entre produções casuais e urbanas. A forquilha com tecnologia AirBubble garante um toque extra de conforto e inovação, enquanto o shape slim deixa o visual mais clean e descomplicado. Ideal para acompanhar você da praia ao street style com muita autenticidade.",
    variacoes: [
      {
        titulo: "marromazul",
        imagem: "/products/var_77865d86a75f.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_4d45ab1b7425.jpg",
        tipo: "cor"
      },
      {
        titulo: "pretobranco",
        imagem: "/products/var_4392c2a5fcc3.jpg",
        tipo: "cor"
      },
      {
        titulo: "brancolaranja",
        imagem: "/products/var_a5b62faf7169.jpg",
        tipo: "cor"
      },
      {
        titulo: "amarelolilas",
        imagem: "/products/var_60d28fad36f0.jpg",
        tipo: "cor"
      },
      {
        titulo: "laranjaverde",
        imagem: "/products/var_14b7cd5ae0b3.jpg",
        tipo: "cor"
      },
      {
        titulo: "azulamarelo",
        imagem: "/products/var_984cb093ac7d.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-m-lover-thong-platform",
    name: "Melissa M-Lover Thong Platform",
    image: "/products/melissa-m-lover-thong-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-m-lover-thong-platform/0-583a408bb4c8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-m-lover-thong-platform/1-a922ddb723d6.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-m-lover-thong-platform/2-0a851665c724.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-m-lover-thong-platform/3-903756059c34.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-m-lover-thong-platform/4-e7f7b2e9206f.jpg"],
    price: 24.99,
    originalPrice: 249.9,
    discount: 90.0,
    description: "Plataforma Melissa M-Lover Thong PlatformA Melissa M-Lover Thong Platform é a plataforma feminina que combina o visual moderno do tamanco com o estilo despojado do chinelo de dedo (modelo thong), criando um design leve, atual e cheio de personalidade. Produzida em Melflex®, o material exclusivo da Melissa que é flexível, durável e 100% reciclável, ela entrega conforto e sustentabilidade em cada detalhe.Com solado levemente tratorado, palmilha macia e tiras largas com o nome Melissa em relevo, essa plataforma oferece altura sem perder estabilidade, garantindo um caminhar seguro e confortável. É a combinação perfeita entre estilo urbano, praticidade e aquele toque fashion que transforma qualquer look. Perfeita para o dia a dia, passeios, encontros com amigas e momentos mais descontraídosPrincipais características:• Altura aproximada: 10,2cm• Palmilha macia para conforto prolongado• Visual versátil, leve e estilosoEleve seus looks com a Melissa M-Lover Thong Platform, a plataforma feminina que une conforto, estilo e autenticidade em cada passo.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_8c13491d255b.jpg",
        tipo: "cor"
      },
      {
        titulo: "bordo/bege",
        imagem: "/products/var_e221e5632254.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom/bege",
        imagem: "/products/var_9a4ec8d06878.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_9df7a4703d21.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-tina-bag",
    name: "Melissa Tina Bag",
    image: "/products/melissa-tina-bag.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-tina-bag/0-9b2c1f2ac0fd.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-tina-bag/1-b023c7c80afb.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-tina-bag/2-15aabcf16527.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-tina-bag/3-468a8b75cc0d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-tina-bag/4-56266e7b9807.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "Bolsa Melissa Tina Bag A Melissa Tina Bag é uma bolsa feminina perfeita para o uso diário, combinando funcionalidade, versatilidade e design contemporâneo. O modelo, produzido em Melflex®, entrega a identidade da marca com muito estilo e praticidade. Leve e compacta, a bolsa feminina Melissa Tina Bag é essencial para quem busca praticidade e um acessório utilitário. O detalhe lateral transparente reforça o DNA Melissa e contribui para um visual moderno e cheio de funcionalidade. Principais características: Bolsa pequena utilitária Funcional Fácil de limpar Material resistente e prático Destaque-se com a Melissa Tina Bag, a bolsa que oferece praticidade, versatilidade e design funcional para qualquer ocasião.",
    variacoes: [
      {
        titulo: "Verde",
        imagem: "/products/var_0f8af3537303.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_1a03b7ddb96d.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_8482d9becc51.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_45e8e4d0b33c.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-becca",
    name: "Melissa Becca",
    image: "/products/melissa-becca.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-becca/0-4407d07b6ee7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-becca/1-84cb9562a4d3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-becca/2-ff56aea944e0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-becca/3-311924eb76e7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-becca/4-18750a3571a6.jpg"],
    price: 15.99,
    originalPrice: 159.9,
    discount: 90.0,
    description: "A Melissa Becca surge alinhada ao retorno cada vez mais forte do feminino na moda. Trata-se de um modelo no estilo tamanco, porém com plataforma. Inspirada nas sandálias que marcaram os anos 90 e o início dos anos 2000, é repleta de referências nostálgicas, que trazem um ar cool e super trendy! O modelo conta com salto médio robusto com altura de 3.8cm, porém super leve. Por contar com apenas uma tira larga no cabedal, é minimalista, mas ao mesmo tempo super imponente, para você brilhar muito por onde passar! Vale a pena testar, combinar, ousar e se apaixonar",
    variacoes: [
      {
        titulo: "azul/rosa",
        imagem: "/products/var_8a776872a5e5.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto/tartaruga",
        imagem: "/products/var_f453d2d8c347.jpg",
        tipo: "cor"
      },
      {
        titulo: "Branco",
        imagem: "/products/var_3481ed92e004.jpg",
        tipo: "cor"
      },
      {
        titulo: "vermelho/verde",
        imagem: "/products/var_4407d07b6ee7.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-flox-unissex",
    name: "Melissa Flox Unissex",
    image: "/products/melissa-flox-unissex.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flox-unissex/0-371eb6fad09d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flox-unissex/1-16d5c84a6001.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flox-unissex/2-2ccbbabc3d71.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flox-unissex/3-4272f3907d42.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flox-unissex/4-9c96f0ca502d.jpg"],
    price: 18.99,
    originalPrice: 189.9,
    discount: 90.0,
    description: "Um best-seller, a Melissa Flox é um dos modelos mais democráticos da marca. Além de seu conforto inegável, é versátil e genderless. Destaque para o cabedal aranhado com linhas minimalistas e para o solado com leve tratorado.",
    variacoes: [
      {
        titulo: "preto opaco",
        imagem: "/products/var_371eb6fad09d.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa cameo leitoso",
        imagem: "/products/var_174a4932fceb.jpg",
        tipo: "cor"
      },
      {
        titulo: "branco/casca arroz",
        imagem: "/products/var_eb4ecf656e59.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa Claro",
        imagem: "/products/var_10450b27188a.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_0f4ff27fe436.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul perolado",
        imagem: "/products/var_fe412db1bbf3.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde apolo ff op",
        imagem: "/products/var_cc5e48e8eb7a.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_d21e324bbf52.jpg",
        tipo: "cor"
      },
      {
        titulo: "s:verde/marrom",
        imagem: "/products/var_7ecd67ce92b2.jpg",
        tipo: "cor"
      },
      {
        titulo: "vidro doch tp c/gl max or/pta",
        imagem: "/products/var_402de7772c82.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa Transparente Fosco",
        imagem: "/products/var_217f08d8592f.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul reebok ff leitoso",
        imagem: "/products/var_64326df4a6bf.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "41-11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "42-12",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "43/44-13",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-kick-off-sandal",
    name: "Melissa Kick Off Sandal",
    image: "/products/melissa-kick-off-sandal.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off-sandal/0-467355b8b367.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off-sandal/1-9991ea252607.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off-sandal/2-ce86b239ecac.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off-sandal/3-4923826ec5ec.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off-sandal/4-e06056778ca0.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "Uma sandália plataforma tem o poder de deixar qualquer look mais estiloso, e a Kick Off Sandal é a prova disso! Não é a toa que esse modelo é um grande sucesso entre as M-lovers! Além de ter um design autêntico e lindo, ela é superconfortável, graças à sola em EVA, que é superleve. A opção perfeita para quem quer abandonar o salto por alguns momentos e mesmo assim ficar alguns centímetros mais alta.",
    variacoes: [
      {
        titulo: "s:vermelho",
        imagem: "/products/var_c24d819ce995.jpg",
        tipo: "cor"
      },
      {
        titulo: "s:branco",
        imagem: "/products/var_06b3b605f7a7.jpg",
        tipo: "cor"
      },
      {
        titulo: "s:preto",
        imagem: "/products/var_b3bbcbf7c923.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_ad59f3c23240.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom/laranja transparente",
        imagem: "/products/var_55e4918bbe15.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/rosa transparente",
        imagem: "/products/var_38caa1662567.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa/rosa",
        imagem: "/products/var_fb89bd6c5023.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_9c77f0f2f167.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul/azul",
        imagem: "/products/var_ee49017b8b9c.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/glitter",
        imagem: "/products/var_6e2104d8f5a6.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_554768cbe4ce.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-kick-off-sandal-metallic",
    name: "Melissa Kick Off Sandal Metallic",
    image: "/products/melissa-kick-off-sandal-metallic.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off-sandal-metallic/0-6617c26334c4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off-sandal-metallic/1-dbdfa8ac00a7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off-sandal-metallic/2-4f244efcd8d6.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off-sandal-metallic/3-e5ee4a7fdbeb.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-kick-off-sandal-metallic/4-e516b6e7b926.jpg"],
    price: 34.99,
    originalPrice: 349.9,
    discount: 90.0,
    description: "Prepara o coração, M-Lover! A Melissa Kick Off Sandal Metallic chegou com tudo e promete ser a sua nova favorita. Essa releitura da Melissa Kick Off Sandal possui efeito metálico, que traz um toque de elegância e atitude para qualquer look. A sola em EVA garante o conforto e a leveza que você precisa no dia a dia, enquanto o efeito metálico garante aquele toque de ousadia que amamos.Com design moderno e versátil, essa sandália é a escolha perfeita pra quem quer brilhar em qualquer ocasião. Se jogue nessa tendência e deixe seu estilo falar mais alto, bestie!Mais características da Melissa Kick Off Sandal Metallic:Altura do solado: 4 cmEfeito metalizado no cabedalPalmilha em Grenflex com logo MelissaSola em EVA injetado para máximo confortoFechamento ajustável para um calce perfeito",
    variacoes: [
      {
        titulo: "prata",
        imagem: "/products/var_bcf5f53eb2e9.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul camaleao",
        imagem: "/products/var_25d77cb7d25a.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-mule-hype",
    name: "Melissa Mule Hype",
    image: "/products/melissa-mule-hype.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mule-hype/0-229c44480501.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mule-hype/1-80f90f71ebde.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mule-hype/2-0d15bc3f79e4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mule-hype/3-e88ed9957de5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mule-hype/4-fc7e8f0ae2f9.jpg"],
    price: 28.99,
    originalPrice: 289.9,
    discount: 90.0,
    description: "A Melissa Mule Hype é a definição de atitude minimalista com impacto máximo. Seu visual clean ganha força com o salto marcante, que transforma qualquer produção em um statement de estilo. Ideal para quem ama peças versáteis com personalidade, ela transita do casual ao sofisticado com facilidade — elevando desde jeans e camiseta até vestidos fluídos. O acabamento brilhante e a construção confortável garantem presença e praticidade no mesmo passo. Uma escolha certeira para quem quer unir moda, ousadia e conforto sem esforço.*Altura aproximada, pode variar conforme a numeração.",
    variacoes: [
      {
        titulo: "azul perolado",
        imagem: "/products/var_fa58f0041ed4.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_d4b2b29efb8a.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_229c44480501.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-mule-hype-metallic",
    name: "Melissa Mule Hype Metallic",
    image: "/products/melissa-mule-hype-metallic.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mule-hype-metallic/0-a499917fd33a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mule-hype-metallic/1-9d238cdefb4b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mule-hype-metallic/2-7e271133cf37.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mule-hype-metallic/3-c8f245c5cf62.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mule-hype-metallic/4-d82c1a9f21fe.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "É hora de brilhar, bestie! A Melissa Mule Hype Metallic chegou para trazer aquele toque de brilho e o estilo que suas produções merecem. Nessa nova versão, este salto com design minimalista ganha um acabamento totalmente metalizado, combinando conforto, elegância e praticidade para elevar seus looks a um outro patamar. Para quem ama ousar com charme e personalidade, essa é a escolha perfeita! Mais características da Melissa Mule Hype Metallic:Altura aproximada do salto: 9 cmCabedal em MelflexPalmilha em Grenflex",
    variacoes: [
      {
        titulo: "prata claro",
        imagem: "/products/var_a499917fd33a.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bronze",
        imagem: "/products/var_b0b941f3d8e8.jpg",
        tipo: "cor"
      },
      {
        titulo: "Dourado",
        imagem: "/products/var_cae42add7486.jpg",
        tipo: "cor"
      },
      {
        titulo: "prata escuro",
        imagem: "/products/var_47bc5e20a620.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-possession-slide",
    name: "Melissa Possession Slide",
    image: "/products/melissa-possession-slide.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-slide/0-6ddf97ac5ca3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-slide/1-6d7ebc0ec0dd.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-slide/2-97f743ea1d3b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-slide/3-379d07e20354.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-slide/4-78c75b487b2b.jpg"],
    price: 16.99,
    originalPrice: 169.9,
    discount: 90.0,
    description: "A Melissa Possession Slide, inspirada na complexidade das teias de aranha da nossa icônica Melissa Possession, ganhou um toque preciso de sofisticação através do solado anatômico da Melissa Cozy. Com sua estética única, o slide é capaz de elevar qualquer visual!Mais características da Melissa Possession Slide:Sola em EVA expandidoCabedal em Melflex",
    variacoes: [
      {
        titulo: "Preto Fosco",
        imagem: "/products/var_5da1756d490a.jpg",
        tipo: "cor"
      },
      {
        titulo: "Lilas",
        imagem: "/products/var_f48871df1287.jpg",
        tipo: "cor"
      },
      {
        titulo: "branco transparente",
        imagem: "/products/var_d74c46c267c2.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege fosco",
        imagem: "/products/var_5c4fc4ce6ac5.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-stripes-m-lover-metallic",
    name: "Melissa Stripes M-Lover Metallic",
    image: "/products/melissa-stripes-m-lover-metallic.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-stripes-m-lover-metallic/0-f2e3b5d32b79.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-stripes-m-lover-metallic/1-8a8a38c02fc0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-stripes-m-lover-metallic/2-058003447007.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-stripes-m-lover-metallic/3-6a0f8a7ea647.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-stripes-m-lover-metallic/4-3007979bbbff.jpg"],
    price: 16.99,
    originalPrice: 169.9,
    discount: 90.0,
    description: "Melissa Stripes M-Lover Metallic: o modelo que você ama, agora com um toque extra de brilho para deixar seus looks ainda mais poderosos. Com tiras transpassadas que valorizam cada passo, esse modelo é a definição de estilo e praticidade. Seja para curtir um rolê com as besties ou um passeio ao ar livre, a Stripes M-Lover é aquela parceira que está sempre ao seu lado para criar memórias inesquecíveis.Mais características da Melissa Stripes M-Lover Metallic:Logo Melissa em alto relevo nas tirasFechamento em velcro ajustável",
    variacoes: [
      {
        titulo: "dourado/ouro",
        imagem: "/products/var_f2e3b5d32b79.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto metalizado/prata",
        imagem: "/products/var_c53308b3e06b.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_a3fac78adaad.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa metalizado/prata",
        imagem: "/products/var_bb122f60167d.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-ultragirl-classic-bow",
    name: "Melissa Ultragirl Classic Bow",
    image: "/products/melissa-ultragirl-classic-bow.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ultragirl-classic-bow/0-481da074a032.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ultragirl-classic-bow/1-fa0e263fa1f2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ultragirl-classic-bow/2-516d54cd94e1.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ultragirl-classic-bow/3-7170fb5156e5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ultragirl-classic-bow/4-2e9890322c65.jpg"],
    price: 16.99,
    originalPrice: 169.9,
    discount: 90.0,
    description: "Clássica e apaixonante, a Melissa Ultragirl Classic Bow é a sapatilha que combina delicadeza e estilo em cada detalhe. Com um laço elegante no cabedal, esse modelo é ideal para quem busca looks versáteis e cheios de charme. Perfeita para arrasar em qualquer ocasião com o toque clássico que as M-Lovers adoram.",
    variacoes: [
      {
        titulo: "Bege/preto",
        imagem: "/products/var_7cf04f082921.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto/tartaruga",
        imagem: "/products/var_481da074a032.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa Glitter",
        imagem: "/products/var_098019c0efaf.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege perolado",
        imagem: "/products/var_39838d8f6e81.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-mar-sandal-ii",
    name: "Melissa Mar Sandal II",
    image: "/products/melissa-mar-sandal-ii.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mar-sandal-ii/0-9f2959918839.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mar-sandal-ii/1-430f453487ee.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mar-sandal-ii/2-ae93b14f4c30.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mar-sandal-ii/3-35148d31e084.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-mar-sandal-ii/4-f6745c98506e.jpg"],
    price: 15.99,
    originalPrice: 159.9,
    discount: 90.0,
    description: "Comfy e básica, a Melissa Mar Sandal combina com todos os momentos. Com palmilha que proporciona um calce fofinho, enquanto o fechamento em fivela garante ainda mais praticidade para o dia a dia.",
    variacoes: [
      {
        titulo: "bege/amarelo",
        imagem: "/products/var_4dbfb476d5d2.jpg",
        tipo: "cor"
      },
      {
        titulo: "lilas/azul perolado",
        imagem: "/products/var_a35c35e3f376.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_b01a51fb0c51.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto/marrom",
        imagem: "/products/var_bfe04b41e377.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/rosa",
        imagem: "/products/var_f437c3380e9c.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege/bege",
        imagem: "/products/var_430f453487ee.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa Claro",
        imagem: "/products/var_86601c374772.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_8a2e82440137.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-possession-slip",
    name: "Melissa Possession Slip",
    image: "/products/melissa-possession-slip.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-slip/0-0afc84df8b82.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-slip/1-3e90843ae080.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-slip/2-fd951663e672.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-slip/3-e88ca51939bb.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-slip/4-bff8a5602309.jpg"],
    price: 21.99,
    originalPrice: 219.9,
    discount: 90.0,
    description: "Chinelo Slide Melissa Possession SlipA Melissa Possession Slip é um slide feminino que reinventa um clássico da marca em uma versão prática, moderna e fácil de usar. Produzida em Melflex®, o modelo oferece flexibilidade, conforto e resistência para acompanhar a rotina com leveza.Com design slide e tiras largas, o modelo traz, em algumas cores, o inconfundível efeito jelly, ou opções de cores sólidas que garantem um visual clean, atual e versátil.Ideal para o dia a dia, passeios, viagens ou momentos de lazer, a Melissa Possession Slip combina perfeitamente com looks casuais, sendo uma escolha prática para quem busca conforto e identidade fashion.Principais características• Design slide com tiras largas• Efeito jelly com acabamento brilhante• Cores sólidas que facilitam combinações• Estilo moderno e icônicoFinalize seus looks com atitude e conforto usando a Melissa Possession Slip, o slide feminino que traduz o DNA Melissa em um modelo prático, estiloso e cheio de personalidade",
    variacoes: [
      {
        titulo: "Bege fosco",
        imagem: "/products/var_09e48b755328.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde fosco",
        imagem: "/products/var_63082ea9446c.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_94fc73707ef9.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_32d18a2980bf.jpg",
        tipo: "cor"
      },
      {
        titulo: "Laranja",
        imagem: "/products/var_64322946885a.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-aranha-79-ii",
    name: "Melissa Aranha 79 II",
    image: "/products/melissa-aranha-79-ii.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-aranha-79-ii/0-d2e10532c0d8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-aranha-79-ii/1-506895b297c2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-aranha-79-ii/2-a998a3a25287.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-aranha-79-ii/3-6bd53b497718.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-aranha-79-ii/4-7ecf5286b4db.jpg"],
    price: 19.99,
    originalPrice: 199.9,
    discount: 90.0,
    description: "Sandália Melissa Aranha 79 IIA Melissa Aranha 1979 é um verdadeiro ícone que marcou o início da história da marca e atravessa gerações com sua identidade única e atemporal. Clássica e cheia de personalidade, ela retorna repaginada, com linhas atualizadas que dialogam com a contemporaneidade sem perder sua essência original, a Melissa Aranha 79 II é um verdadeiro statement de moda.Produzida em Melflex®, material flexível e confortável característico da Melissa, o modelo une leveza, praticidade e estilo para o dia a dia. A sandália feminina é perfeita para montar looks icônicos, combine com calças jeans, saias ou vestidos.Principais características:• Ícone clássico da Melissa desde 1979• Design atemporal • Disponível nas versões adulto, infantil e babyA Melissa Aranha 1979 é mais do que um clássico, é uma história que se reinventa e conecta gerações.",
    variacoes: [
      {
        titulo: "vidrobranco",
        imagem: "/products/var_5da923d68c33.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_dc231d57d5ce.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege transparente fosco",
        imagem: "/products/var_2c7fa9746be6.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto Fosco",
        imagem: "/products/var_172fb33b75f1.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-campana-papel",
    name: "Melissa Campana Papel",
    image: "/products/melissa-campana-papel.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-campana-papel/0-5c24568ce3a2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-campana-papel/1-f164433322d7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-campana-papel/2-df33556652a4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-campana-papel/3-de73a0841a59.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-campana-papel/4-c8b885d08110.jpg"],
    price: 21.99,
    originalPrice: 219.9,
    discount: 90.0,
    description: "Um dos grandes clássicos da Melissa, a Melissa Campana Papel VII SP. Assinada pelos Irmãos Campana, a sapatilha é marcada pelas tramas orgânicas que evocam a textura do papelão ondulado — característica icônica da collab. Leve, confortável e cheia de estilo, ela é perfeita para compor looks versáteis e autênticos, mantendo o equilíbrio entre simplicidade e ousadia.",
    variacoes: [
      {
        titulo: "s:bege/glitter",
        imagem: "/products/var_ce6cb6ce925c.jpg",
        tipo: "cor"
      },
      {
        titulo: "s:prata glitter",
        imagem: "/products/var_c9a4ec45acbc.jpg",
        tipo: "cor"
      },
      {
        titulo: "s:preto glitter",
        imagem: "/products/var_98b785cbde9a.jpg",
        tipo: "cor"
      },
      {
        titulo: "s:dourado glitter",
        imagem: "/products/var_d5823dad7244.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul vinil doch op",
        imagem: "/products/var_938b69dd59d7.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa pink glitter",
        imagem: "/products/var_28a78c1c3259.jpg",
        tipo: "cor"
      },
      {
        titulo: "s:cinza glitter",
        imagem: "/products/var_f7bbc6f4ae64.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul/glitter",
        imagem: "/products/var_7507de855995.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto glitter bronze",
        imagem: "/products/var_b88b89f615f5.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa claro glitter",
        imagem: "/products/var_8c59c8970d7a.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vidro Glitter",
        imagem: "/products/var_6001e2db72e7.jpg",
        tipo: "cor"
      },
      {
        titulo: "s:vermelho glitter",
        imagem: "/products/var_ee9f951b58b4.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde glitter",
        imagem: "/products/var_18591826281f.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-daphnis-ballerina-susan-fang",
    name: "Melissa Daphnis Ballerina + Susan Fang",
    image: "/products/melissa-daphnis-ballerina-susan-fang.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-daphnis-ballerina-susan-fang/0-3435b07c1ef9.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-daphnis-ballerina-susan-fang/1-ce1a0f6ce010.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-daphnis-ballerina-susan-fang/2-09e0cc6ed276.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-daphnis-ballerina-susan-fang/3-60b1a065814a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-daphnis-ballerina-susan-fang/4-be547a6e4a2c.jpg"],
    price: 27.99,
    originalPrice: 279.9,
    discount: 90.0,
    description: "Sapatilha Melissa Daphnis Ballerina + Susan FangA Melissa Daphnis Ballerina + Susan Fang traduz a união entre design autoral e a estética icônica da Melissa. Resultado da colaboração com a designer Susan Fang, o modelo traz uma releitura contemporânea das clássicas jelly shoes, combinando transparência, leveza e detalhes delicados que refletem o estilo orgânico e fluido característico da designer.A sapatilha apresenta uma textura rica em vazados com formas florais que percorrem todo o cabedal, criando um efeito visual sofisticado e cheio de personalidade. Leve e confortável, perfeita para montar looks do casual ao fashion, fácil de combinar.Destaques do produto:• Collab exclusiva com Susan Fang• Acabamento translúcido• Textura floral com vazados• Fechamento em fivela diferenciadoA Melissa Daphnis Ballerina + Susan Fang é um verdadeiro encontro entre moda, arte e inovação, criando um acessório marcante, contemporâneo e atemporal. Qual a cor que vai elevar seu look hoje?",
    variacoes: [
      {
        titulo: "lilas transparente",
        imagem: "/products/var_2b29da7b8e1d.jpg",
        tipo: "cor"
      },
      {
        titulo: "fume transparente",
        imagem: "/products/var_338645066aaa.jpg",
        tipo: "cor"
      },
      {
        titulo: "vidro/branco",
        imagem: "/products/var_6ec59ec2db1a.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde transparente",
        imagem: "/products/var_b8578cc6eb48.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-nabeela",
    name: "Melissa Nabeela",
    image: "/products/melissa-nabeela.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-nabeela/0-ab135a95bf45.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-nabeela/1-36ee899bc1b3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-nabeela/2-774672a849e7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-nabeela/3-045a42dd226d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-nabeela/4-50b28d375466.jpg"],
    price: 34.99,
    originalPrice: 349.9,
    discount: 90.0,
    description: "Salto Melissa NabeelaO salto feminino Melissa Nabeela é um verdadeiro statement de estilo que transforma qualquer look. Inspirada no universo dos jelly shoes, ela ganha uma leitura fashion e irresistível com seu salto transparente icônico, criando um efeito visual único e cheio de atitude. O pingente no cabedal e os símbolos astrais na sola reforçam a estética mística, trazendo um toque de exclusividade para quem ama se destacar.Produzida em Melflex®, material flexível, confortável e resistente, a Melissa Nabeela vai além da beleza: é perfeita para acompanhar você em momentos especiais ou elevar produções do dia a dia com personalidade. Um modelo que equilibra leveza, design marcante e versatilidade, ideal para quem busca um salto feminino diferente de tudo.Principais características:Salto: transparente icônico com efeito modernoDetalhes: pingente no cabedal e símbolos astrais na solaEstilo: Sapatinho de cristal, jelly fashion com inspiração místicaUso: perfeito para ocasiões especiais ou looks cheios de atitudeImpossível passar despercebida: o salto Melissa Nabeela é o salto que une design icônico, personalidade e desejo em cada passo.",
    variacoes: [
      {
        titulo: "rosa transparente",
        imagem: "/products/var_d7b9f7e633a1.jpg",
        tipo: "cor"
      },
      {
        titulo: "cinza transparente",
        imagem: "/products/var_1b85829aaa06.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto transparente",
        imagem: "/products/var_62af6070e819.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom transparente",
        imagem: "/products/var_cc688c5b15e1.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-pescura-heel-scholl",
    name: "Melissa Pescura Heel + Scholl",
    image: "/products/melissa-pescura-heel-scholl.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-pescura-heel-scholl/0-43532c5629d5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-pescura-heel-scholl/1-0c5758946216.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-pescura-heel-scholl/2-c348c080f60a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-pescura-heel-scholl/3-b5dd1bb1494c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-pescura-heel-scholl/4-26822a4bb0db.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "A colaboração entre Scholl e Melissa resultou em uma versão repaginada da icônica Pescura, unindo o conforto tradicional da Scholl com o design inovador da Melissa. A Melissa Pescura Heel + Scholl traz um toque moderno ao clássico modelo, mantendo a essência prática e ergonômica, mas com detalhes que ressaltam a sofisticação e a versatilidade da marca. A Pescura da colaboração apresenta cores e acabamentos mais contemporâneos, garantindo que o calçado continue sendo sinônimo de conforto, mas agora com um apelo mais fashion e atual. Essa parceria é a combinação perfeita de funcionalidade e estilo, proporcionando uma opção elegante e confortável para o dia a dia.",
    variacoes: [
      {
        titulo: "Preto transparente",
        imagem: "/products/var_94967c8ab406.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vidro",
        imagem: "/products/var_fc8049adea48.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul transparente",
        imagem: "/products/var_8adaf7ada450.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom transparente",
        imagem: "/products/var_731acb61b0b2.jpg",
        tipo: "cor"
      },
      {
        titulo: "lilas transparente",
        imagem: "/products/var_85a951e9641e.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-possession",
    name: "Melissa Possession",
    image: "/products/melissa-possession.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession/0-e52e1dd6b4f9.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession/1-ff8b64959a0f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession/2-0fc96c61ff06.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession/3-7ea2f4b73bd8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession/4-1fc15e5d348d.jpg"],
    price: 18.99,
    originalPrice: 189.9,
    discount: 90.0,
    description: "Melissa Possession: o clássico que nunca sai de modaIcônica e atemporal, a Melissa Possession é um dos modelos clássicos que atravessa gerações. Seu design aranhado é um verdadeiro símbolo de estilo, combinando autenticidade e versatilidade para qualquer ocasião. Com fechamento ajustável e palmilha macia, esse modelo proporciona conforto a cada passo.Uma escolha indispensável para quem ama um look cheio de personalidade e com o DNA Melissa. Também disponível nas versões Baby e Infantil, perfeita para combinações Mom & Me.",
    variacoes: [
      {
        titulo: "bordo fosco",
        imagem: "/products/var_9911b6d486ff.jpg",
        tipo: "cor"
      },
      {
        titulo: "caramelo fosco",
        imagem: "/products/var_550fa3aa9cbd.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa medio transparente",
        imagem: "/products/var_efd47e934fc5.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege fosco",
        imagem: "/products/var_6a583985e52e.jpg",
        tipo: "cor"
      },
      {
        titulo: "laranja transparente",
        imagem: "/products/var_fa6136e99005.jpg",
        tipo: "cor"
      },
      {
        titulo: "s:preto fosco",
        imagem: "/products/var_4a6489842bfa.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa Claro",
        imagem: "/products/var_13fbca57329e.jpg",
        tipo: "cor"
      },
      {
        titulo: "amarelo transparente",
        imagem: "/products/var_69d7b23d3b21.jpg",
        tipo: "cor"
      },
      {
        titulo: "vidro transparente",
        imagem: "/products/var_ddd3c44f2267.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde claro",
        imagem: "/products/var_76701c0e49f1.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul perolado",
        imagem: "/products/var_8d8531d055ae.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa Escuro",
        imagem: "/products/var_24d3363c0d40.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde escuro",
        imagem: "/products/var_118935eb5cf8.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_94b373aee0f8.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa||54145",
        imagem: "/products/var_c87dc34f44dd.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto opaco",
        imagem: "/products/var_a36bb9165674.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa transparente",
        imagem: "/products/var_8bfb4cea6012.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa claro transparente",
        imagem: "/products/var_e52e1dd6b4f9.jpg",
        tipo: "cor"
      },
      {
        titulo: "Cinza",
        imagem: "/products/var_982e821ea2ff.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege claro",
        imagem: "/products/var_70d2f806ae9c.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho",
        imagem: "/products/var_4f7d93ab9eb4.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa medio",
        imagem: "/products/var_d25d44c3d0cb.jpg",
        tipo: "cor"
      },
      {
        titulo: "vermelho jaspe op",
        imagem: "/products/var_a2ed29ed430e.jpg",
        tipo: "cor"
      },
      {
        titulo: "Lilas",
        imagem: "/products/var_5097d89606df.jpg",
        tipo: "cor"
      },
      {
        titulo: "Amarelo",
        imagem: "/products/var_b847a4ccf959.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa happy ii doch fluorescente",
        imagem: "/products/var_61330d86cb49.jpg",
        tipo: "cor"
      },
      {
        titulo: "branco polido",
        imagem: "/products/var_d5d099f14ce4.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa||AF258",
        imagem: "/products/var_c07430e2499c.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul wave op",
        imagem: "/products/var_343522eed092.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom conhaque transparente",
        imagem: "/products/var_6c1942dcb4b1.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_41addcd04d47.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde||AJ860",
        imagem: "/products/var_8a3689037a95.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_177a4193a1f3.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa fosco",
        imagem: "/products/var_2737845d1eee.jpg",
        tipo: "cor"
      },
      {
        titulo: "VIDRO C/Gl PTA",
        imagem: "/products/var_bfd1821addfa.jpg",
        tipo: "cor"
      },
      {
        titulo: "s:marrom",
        imagem: "/products/var_2b10a88a39c9.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege dodge tp",
        imagem: "/products/var_9f1dda2de4cb.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege clarotransparente",
        imagem: "/products/var_e4e5704a5cae.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde transparente",
        imagem: "/products/var_d9ca8bda4999.jpg",
        tipo: "cor"
      },
      {
        titulo: "Lilas Glitter",
        imagem: "/products/var_c622b7e65687.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde glitter",
        imagem: "/products/var_8e38318553db.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "41-11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "42-12",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "43/44-13",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-possession-crystals",
    name: "Melissa Possession Crystals",
    image: "/products/melissa-possession-crystals.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-crystals/0-bf7e32525288.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-crystals/1-78056a29ccf8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-crystals/2-2f8fa8c275c7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-crystals/3-3814e7e005aa.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-crystals/4-2f0f18ec0833.jpg"],
    price: 159.99,
    originalPrice: 1599.9,
    discount: 90.0,
    description: "A Melissa Possession Crystals chega para encantar as M-Lovers que não abrem mão do glamour e da exclusividade. Decorada com cristais Swarovski aplicados um a um, esta edição especial da clássica Melissa Possession combina elegância e ousadia, transformando o brilho em protagonista. Disponível nas cores transparente e fumê, a Melissa Possession Crystals é a escolha perfeita para quem quer elevar o estilo com um toque de sofisticação. Mais características da Melissa Possession Crystals:Aplicação de cristais Swarovski em tamanhos variados na parte externaFechamento em fivela ajustávelPalmilha confortável com logo Melissa",
    variacoes: [
      {
        titulo: "fume",
        imagem: "/products/var_eb2810095455.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vidro",
        imagem: "/products/var_bf7e32525288.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "41-11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "42-12",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "43/44-13",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-possession-mule",
    name: "Melissa Possession Mule",
    image: "/products/melissa-possession-mule.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-mule/0-30889e1056db.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-mule/1-3bb846e22947.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-mule/2-c1e3eb091311.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-mule/3-c06cbb000376.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-mule/4-362f52101759.jpg"],
    price: 16.99,
    originalPrice: 169.9,
    discount: 90.0,
    description: "Melissa Possession MuleA Melissa Possession Mule é a versão mule dos jelly shoes, prática, moderna e simplesmente irresistível. Com o tradicional Melflex®, material flexível e confortável exclusivo da Melissa, essa mule feminina combina nostalgia fashion com a tendências que domina as ruas. O resultado? Um shape icônico, cheio de personalidade, que transforma qualquer look básico em produção de impacto.Perfeita para quem ama moda com atitude, a Melissa Possession Mule é fácil de calçar, versátil e ideal para acompanhar do dia a dia aos momentos de lazer com muito estilo. É aquele modelo que chama atenção sem esforço — e que nunca sai de cena.Principais características:• Jelly shoe em versão mule• Calce prático com fivela ajustável• Perfeito para looks urbanos e fashionistasA Melissa Possession Mule não é só uma mule feminina, é um clássico reinventado. Um ícone que atravessa gerações e continua ditando tendência.",
    variacoes: [
      {
        titulo: "Vermelho",
        imagem: "/products/var_05375774bcca.jpg",
        tipo: "cor"
      },
      {
        titulo: "vidro foscobranco",
        imagem: "/products/var_6967a52b92b1.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_583b8d804d25.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto Fosco",
        imagem: "/products/var_c0f24e1e1b1b.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-possession-pescura-heel-scholl",
    name: "Melissa Possession Pescura Heel + Scholl",
    image: "/products/melissa-possession-pescura-heel-scholl.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-pescura-heel-scholl/0-1c221fc7ea0d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-pescura-heel-scholl/1-7fc229133619.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-pescura-heel-scholl/2-f539bfcbc90a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-pescura-heel-scholl/3-3ff358a3febb.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-pescura-heel-scholl/4-d2a4706ff2ab.jpg"],
    price: 33.99,
    originalPrice: 339.9,
    discount: 90.0,
    description: "A colaboração entre Scholl e Melissa resultou em uma versão inovadora que mescla dois ícones das marcas: a Pescura e a Possession. O modelo une a ergonomia e o conforto característicos da Scholl com o design moderno e arrojado da Melissa, criando uma sandália versátil e estilosa. A base da Pescura garante o conforto e suporte, enquanto o cabedal da Possession traz um toque contemporâneo e cheio de atitude. Essa fusão resulta em um calçado único, que alia praticidade e sofisticação, perfeito para quem busca estilo sem abrir mão do bem-estar, tornando-se uma opção ideal para o dia a dia.",
    variacoes: [
      {
        titulo: "Vidro",
        imagem: "/products/var_c16ad76c253b.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul transparente",
        imagem: "/products/var_7384e6c0b202.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto transparente",
        imagem: "/products/var_c5391d6dd7dc.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom transparente",
        imagem: "/products/var_2ad7cb540660.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-quantum-sneaker-diesel",
    name: "Melissa Quantum Sneaker + Diesel",
    image: "/products/melissa-quantum-sneaker-diesel.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-quantum-sneaker-diesel/0-86423935fda7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-quantum-sneaker-diesel/1-e264c452dbba.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-quantum-sneaker-diesel/2-97de57cd15cc.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-quantum-sneaker-diesel/3-22cd8dd2abff.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-quantum-sneaker-diesel/4-af980cb0c482.jpg"],
    price: 99.99,
    originalPrice: 999.9,
    discount: 90.0,
    description: "MELISSA QUANTUM SNEAKER + DIESEL ​A colaboração entre Melissa e Diesel se inspira em diversos aspectos da moda, arte e design, incorporando elementos como design paramétrico e optical art. O resultado são três produtos com um visual futurista que combinam a essência de ambas as marcas. O monograma \"D\" da Diesel é utilizado como um elemento estético e assinatura dessa parceria, dialogando com as tendências da moda jovem e com a geração Z. O Melissa Quantum Sneaker + Diesel, é um monobloco de Melflex com palmilha de EVA, que além de disruptivo é um produto confortável e facil de calçar.",
    variacoes: [
      {
        titulo: "vermelho transparente",
        imagem: "/products/var_a47e09d98a20.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_9fa901bec984.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul transparente",
        imagem: "/products/var_da11e738cb5f.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "41-11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "42-12",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "43/44-13",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-ring-sandal",
    name: "Melissa Ring Sandal",
    image: "/products/melissa-ring-sandal.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ring-sandal/0-c75fffae5f64.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ring-sandal/1-fedcaecd1618.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ring-sandal/2-506d8907347b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ring-sandal/3-5c25fee6d0e2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-ring-sandal/4-22fcad3d8539.jpg"],
    price: 15.99,
    originalPrice: 159.9,
    discount: 90.0,
    description: "Sandália Melissa Ring SandalConheça a Melissa Ring Sandal, a sandália feminina que é a escolha perfeita para quem ama um design minimalista com toque fashion. O grande destaque é o detalhe de toe ring com monograma Melissa, que adiciona identidade e sofisticação ao modelo.Com opções em cores com efeito jelly e transparência e versões em cores sólidas, a sandália transita entre o fresh e o urbano com facilidade. A palmilha almofadada, com maciez extra no calcanhar, garante conforto prolongado. Versátil e moderna, a Melissa Ring Sandal combina com looks de verão ou composições mais elegantes, trazendo personalidade em cada passo.Principais características:• Tendência toe ring• Monograma Melissa aplicado no anel• Jellys shoes, efeito vidro• Palmilha macia no calcanharA Melissa Ring Sandal é o equilíbrio perfeito entre tendência, conforto e o DNA icônico da Melissa. Que tal elevar seus looks com um toque moderno e confortável da Melissa Ring Sandal?",
    variacoes: [
      {
        titulo: "Marrom",
        imagem: "/products/var_205e7336210d.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vidro",
        imagem: "/products/var_9577ce6552be.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_0360132b14a3.jpg",
        tipo: "cor"
      },
      {
        titulo: "amarelo neon",
        imagem: "/products/var_79a55eeb0ba3.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-thong-kitten-heel",
    name: "Melissa Thong Kitten Heel",
    image: "/products/melissa-thong-kitten-heel.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-thong-kitten-heel/0-137a2b9dc3e6.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-thong-kitten-heel/1-20aff2f95e9e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-thong-kitten-heel/2-bee4f6989793.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-thong-kitten-heel/3-be6b5c90ed7f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-thong-kitten-heel/4-34f3b80b9866.jpg"],
    price: 22.99,
    originalPrice: 229.9,
    discount: 90.0,
    description: "Melissa Thong Kitten HeelElegância e conforto que acompanha seu ritmo: a Melissa Thong Kitten Heel é feita para quem valoriza estilo com atitude natural. Desenvolvida em Melflex®, material flexível que se adapta aos seus pés, essa sandália une um salto baixo delicado a uma tira “thong” moderna, trazendo um visual minimalista e cheio de personalidade.Perfeita para qualquer ocasião, ela transita do café com amigas ao evento mais casual, adicionando um toque contemporâneo aos seus looks sem esforço. Para quem gosta de se destacar com simplicidade, essa é a escolha certa para caminhar com charme e liberdade.Principais características:• Material: Melflex® que oferece flexibilidade e conforto• Design: salto kitten heel com tira “thong” estilosa• Versatilidade: do casual ao elegante, em qualquer momentoDescubra o equilíbrio perfeito entre estilo e conforto com a Melissa Thong Kitten Heel, seu novo segredo para looks incríveis.",
    variacoes: [
      {
        titulo: "azullilas",
        imagem: "/products/var_6ca45d661aff.jpg",
        tipo: "cor"
      },
      {
        titulo: "vidrobranco",
        imagem: "/products/var_ccdbc7c1ccfe.jpg",
        tipo: "cor"
      },
      {
        titulo: "marromlaranja",
        imagem: "/products/var_4816d9c8fccb.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_9f0dd4c24ade.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_246e70c96436.jpg",
        tipo: "cor"
      },
      {
        titulo: "laranjaverde",
        imagem: "/products/var_05cb4d74186b.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege transparente",
        imagem: "/products/var_07af441e0cd0.jpg",
        tipo: "cor"
      },
      {
        titulo: "vermelho transparente",
        imagem: "/products/var_db135a2091a3.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-vixen",
    name: "Melissa Vixen",
    image: "/products/melissa-vixen.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-vixen/0-f39fc863df5c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-vixen/1-1ebad98e346f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-vixen/2-5b0c1afeba58.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-vixen/3-a06738809f0b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-vixen/4-25cbaf829165.jpg"],
    price: 27.99,
    originalPrice: 279.9,
    discount: 90.0,
    description: "Um clássico que nunca perde seu destaque! A Melissa Vixen retornou ao catálogo da marca a pedido das m-lovers, trazendo seu cabedal arranhado que tem tudo a ver com o DNA da Melissa. Agora repaginada, a sandália feminina conta com solado reforçado, palmilha macia, fechamento em fivela e um salto de 9.5cm. Destaque para a paleta de cores, que traz os clássicos rosa e preto e uma versão perolada apaixonante.Sandália feminina Melissa Vixen preta produzida em plástico PVC Melflex®️. Com salto de 9.5cm, possui o cabedal arranhado clássico da marca e conta com fechamento em fivela. Possui palmilha macia com o logotipo da marca estampado.Melflex®️ é um material revolucionário em forma de PVC, 100% reciclável e que proporciona mais flexibilidade, resistência e conforto aos pés.Material: PVC Melflex®️.",
    variacoes: [
      {
        titulo: "vidro transparente",
        imagem: "/products/var_57ea955bbfd7.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto opaco",
        imagem: "/products/var_89998bdcf263.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa transparente",
        imagem: "/products/var_9e7e1aa5b1fc.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul perolado",
        imagem: "/products/var_c58d2e9cee79.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/glitter",
        imagem: "/products/var_bd4f4b401bac.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-vixen-kitten-heel",
    name: "Melissa Vixen Kitten Heel",
    image: "/products/melissa-vixen-kitten-heel.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-vixen-kitten-heel/0-e3d7673a4b14.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-vixen-kitten-heel/1-965caa16c743.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-vixen-kitten-heel/2-c1c62f0d63f4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-vixen-kitten-heel/3-21725a3a9c81.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-vixen-kitten-heel/4-e3b1fc7088a8.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "Salto baixo Melissa Vixen Kitten Heel A Sandália Melissa Vixen Kitten Heel traz de volta um clássico muito amado pelas M-Lovers, agora com o moderno salto kitten heel. O modelo mantém o cabedal arranhado em textura Jelly Shoes, um elemento icônico do DNA Melissa, e ganha uma nova interpretação mais delicada e atual.Com palmilha macia e solado reforçado, a Melissa Vixen Kitten Heel oferece conforto e durabilidade. O fechamento em fivela garante ajuste perfeito, equilibrando atitude e elegância para compor looks versáteis. Ideal para acompanhar diferentes momentos do dia a dia com muita personalidade e estilo, do escritório ao happy hour.Principais características:• Cabedal arranhado• Jelly Shoes• Palmilha macia para conforto prolongado• Fechamento em fivela Realce seu estilo com a Sandália Melissa Vixen Kitten Heel, perfeita para quem busca conforto, elegância e personalidade em um só produto.",
    variacoes: [
      {
        titulo: "Vidro",
        imagem: "/products/var_4dd6b355d6d9.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom transparente",
        imagem: "/products/var_b531e3efb782.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege leitoso",
        imagem: "/products/var_b2e58a04ec32.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto transparente",
        imagem: "/products/var_adc6e6960f5e.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-downtown",
    name: "Melissa Sun Downtown",
    image: "/products/melissa-sun-downtown.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown/0-f50cb4c7c8af.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown/1-079f51c01b45.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown/2-f07ce05a4344.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown/3-71289d6976cb.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown/4-e86811de4db0.jpg"],
    price: 9.99,
    originalPrice: 99.9,
    discount: 90.0,
    description: "A papete Melissa Sun Downtown nasce com mood versátil, perfeita para ornar com todas as produções leves e descontraídas de qualquer momento da agenda de verão. Uma proposta vibrante, recheadas de DNA Melissa.",
    variacoes: [
      {
        titulo: "s:branco/branco",
        imagem: "/products/var_3a17e59334ea.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa/rosa",
        imagem: "/products/var_788268f4fd6b.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul claro",
        imagem: "/products/var_f5b81434c27d.jpg",
        tipo: "cor"
      },
      {
        titulo: "lilas/lilas transparente",
        imagem: "/products/var_f1ab0e66c5b7.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/rosa transparente",
        imagem: "/products/var_79caa1de8408.jpg",
        tipo: "cor"
      },
      {
        titulo: "laranja/laranja||af175",
        imagem: "/products/var_77bac4c416c7.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa/rosa||AF177",
        imagem: "/products/var_90d7ee9ceb98.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde/verde",
        imagem: "/products/var_869b1c25f4a9.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_2f93235dcb01.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-downtown-platform",
    name: "Melissa Sun Downtown Platform",
    image: "/products/melissa-sun-downtown-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown-platform/0-d19924991d27.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown-platform/1-8e89063924c1.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown-platform/2-113f80e6862a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown-platform/3-1706dce4417e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown-platform/4-edc55994c47d.jpg"],
    price: 15.99,
    originalPrice: 159.9,
    discount: 90.0,
    description: "A icônica Melissa Sun Downtown, que já é um clássico nos modelos papete, ganhou um novo shape de platform para ousar muito em qualquer momento do ano! A sandália chegou em um novo drop trazendo toda a vibe anos 1970 que a gente ama.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_880ac764e315.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_d84373b5f925.jpg",
        tipo: "cor"
      },
      {
        titulo: "Branco",
        imagem: "/products/var_0a5094c2175e.jpg",
        tipo: "cor"
      },
      {
        titulo: "Laranja",
        imagem: "/products/var_bd3c541bbe67.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa Escuro",
        imagem: "/products/var_ccc188bc4dfb.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde claro",
        imagem: "/products/var_8e89063924c1.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-treasure-bag",
    name: "Melissa Sun Treasure Bag",
    image: "/products/melissa-sun-treasure-bag.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-treasure-bag/0-93b1c26cdb1e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-treasure-bag/1-f2a1062c15d8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-treasure-bag/2-6a590cb9bc08.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-treasure-bag/3-10ff08d2b881.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-treasure-bag/4-b973ca03a7ca.jpg"],
    price: 10.99,
    originalPrice: 109.9,
    discount: 90.0,
    description: "Melissa Sun Treasure Bag: A companheira perfeita para os essenciais do dia a dia. Esta bolsa pequena, com tramas delicadas e o icônico logo da Melissa Sun, combina praticidade e estilo. Uma excelente opção para carregar o necessário com elegância, destacando a tendência das bolsas compactas.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_55154c5daeb9.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_ef3a147a5e46.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_4ec3abc126a8.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho",
        imagem: "/products/var_b2f80282dd66.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege medio",
        imagem: "/products/var_62ba0f81dbee.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_b253a0dc6757.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde medio",
        imagem: "/products/var_93b1c26cdb1e.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-long-beach-ii",
    name: "Melissa Sun Long Beach II",
    image: "/products/melissa-sun-long-beach-ii.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-long-beach-ii/0-c4c2cb0354c5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-long-beach-ii/1-3bd71955b8ee.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-long-beach-ii/2-ec11dcaf8b4e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-long-beach-ii/3-cd170bc3dd97.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-long-beach-ii/4-67a082ce5009.jpg"],
    price: 9.99,
    originalPrice: 99.9,
    discount: 90.0,
    description: "O Melissa Sun Long Beach II é aquele chinelinho que não pode faltar no closet das M-Lovers. Leve, confortável e perfeito pro dia a dia, ele promete ser seu companheiro nos dias de calor. As tiras com aplicação de glitter dão um toque de charme especial ao modelo. Corre pra garantir o seu, bestie!",
    variacoes: [
      {
        titulo: "branco/vidro glitter",
        imagem: "/products/var_dac823f355c5.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto/prata",
        imagem: "/products/var_c4c2cb0354c5.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/bronze",
        imagem: "/products/var_cb2a1288629e.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/rosa glitter",
        imagem: "/products/var_6d1fe3312b19.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa claro/rosa glitter",
        imagem: "/products/var_7b67f053cebd.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde glitter",
        imagem: "/products/var_604537ea69b6.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom glitter",
        imagem: "/products/var_c91c9348f664.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/glitter prata",
        imagem: "/products/var_ed2a505e1966.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde/verde glitter",
        imagem: "/products/var_1dedb071caa4.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-rodeo-platform",
    name: "Melissa Sun Rodeo Platform",
    image: "/products/melissa-sun-rodeo-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-rodeo-platform/0-930a9686b355.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-rodeo-platform/1-8723419cfea8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-rodeo-platform/2-6529ec0ddc9d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-rodeo-platform/3-9f442a8c3d4b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-rodeo-platform/4-e0b234b557f7.jpg"],
    price: 14.99,
    originalPrice: 149.9,
    discount: 90.0,
    description: "A Melissa Sun Rodeo Platform é uma sandália gladiadora inspirada em um dos maiores sucessos da Melissa: a Flox. Com formas simples, a prioridade é o conforto e a praticidade, tudo o que você precisa para os dias de calor. O novo modelo vem para elevar ainda mais as produções de verão, com leveza sem abrir mão das tendências. Destaque para a aplicação do logo retrô da marca na tira, que garante um charme especial.",
    variacoes: [
      {
        titulo: "Bege",
        imagem: "/products/var_81eb5ce0c302.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_337c8ee601fd.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_01dfd280ef63.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_de6686335c3f.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-leme",
    name: "Melissa Sun Leme",
    image: "/products/melissa-sun-leme.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-leme/0-9af4705d9f6a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-leme/1-5dbc6866973f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-leme/2-e35ea9bb2335.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-leme/3-76d8b7663211.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-leme/4-5336f16dedf2.jpg"],
    price: 7.99,
    originalPrice: 79.9,
    discount: 90.0,
    description: "A família Melissa Sun não para de crescer, né? O lançamento da vez é a Sun Leme. Esse novo hit já possui tudo que você precisa para curtir o verão ao máximo: cor, conforto e estilo. Da praia para outro rolê, a Melissa Sun Leme vai estar sempre preparada para elevar o seu look.",
    variacoes: [
      {
        titulo: "Amarelo",
        imagem: "/products/var_8400d7c33afa.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_544a8e5f6583.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_4d8da5ffb795.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_dc8024fbf982.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-resort",
    name: "Melissa Sun Resort",
    image: "/products/melissa-sun-resort.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-resort/0-c8c58a7022a1.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-resort/1-34d896333653.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-resort/2-7a9f3c601106.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-resort/3-62950bb63954.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-resort/4-69d631eb9349.jpg"],
    price: 13.99,
    originalPrice: 139.9,
    discount: 90.0,
    description: "A Melissa Sun Resort é a escolha perfeita para quem busca um look sofisticado e confortável. Com amarração ajustável e sola elevada, ela traz um design único que combina com qualquer ocasião. Inspirada no verão dos anos 80 no Rio de Janeiro, suas cores e formas vibrantes refletem a energia da estação. Ideal para transitar entre o dia e a noite, ela garante estilo e praticidade em cada passo.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_34d896333653.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_71230637ec9d.jpg",
        tipo: "cor"
      },
      {
        titulo: "Laranja",
        imagem: "/products/var_afcba2c5309c.jpg",
        tipo: "cor"
      },
      {
        titulo: "Branco",
        imagem: "/products/var_8d6683fe9963.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-cruise",
    name: "Melissa Sun Cruise",
    image: "/products/melissa-sun-cruise.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-cruise/0-9edf5842dcc8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-cruise/1-a7640a9c58d3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-cruise/2-be617deb9f18.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-cruise/3-afb2f705be9e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-cruise/4-c687ddd910ac.jpg"],
    price: 9.99,
    originalPrice: 99.9,
    discount: 90.0,
    description: "Mais um ícone de estilo da família Melissa Sun! Inspirada no verão carioca dos anos 80, a Melissa Sun Cruise é a combinação perfeita de leveza, conforto e personalidade. Seu design descomplicado e versátil se adapta a qualquer mood – dos looks coloridos e vibrantes aos mais minimalistas e neutros. Seja para um dia de sol na praia ou para trazer um toque fresh ao dia a dia, esse slide é a escolha ideal para quem busca praticidade sem abrir mão do estilo.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_092a3cde2463.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_15a60e58443a.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-leme-platform",
    name: "Melissa Sun Leme Platform",
    image: "/products/melissa-sun-leme-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-leme-platform/0-f6d0ffbdb874.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-leme-platform/1-56274e83b37b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-leme-platform/2-68bc70b06bc8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-leme-platform/3-c92f6eaf76f7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-leme-platform/4-2210ee38b225.jpg"],
    price: 14.99,
    originalPrice: 149.9,
    discount: 90.0,
    description: "A família Melissa Sun não para de crescer. A nova Melissa Sun Leme Platform promete elevar seus passos e a temperatura por onde você passar. Com muita personalidade, a funcionalidade e conforto do modelo garantem um verão prático e moderno em todos os rolês. Com suas cores vibrantes, o verão vai ser muito mais extraordinário e colorido. Mais caracteristicas da Melissa Sun Leme Platform:Sandália plataformaCabedal assandalhado com tira T em Melfelx com acabamento de textura e fechamento por velcroSolado plataforma com pintura totalAltura de sola: 35mm",
    variacoes: [
      {
        titulo: "Verde",
        imagem: "/products/var_0b2dd47dc08e.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_f6d0ffbdb874.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_3cddb16240a9.jpg",
        tipo: "cor"
      },
      {
        titulo: "Lilas",
        imagem: "/products/var_5aec9310f963.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-downtown-ii",
    name: "Melissa Sun Downtown II",
    image: "/products/melissa-sun-downtown-ii.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown-ii/0-eb8a892b1ecb.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown-ii/1-b6dfa63b6451.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown-ii/2-6a0a4c786e0d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown-ii/3-14cf13578604.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown-ii/4-57aeb364b4ef.jpg"],
    price: 11.99,
    originalPrice: 119.9,
    discount: 90.0,
    description: "A Melissa Sun Downtown II chega ainda mais extraordinária! Agora, o modelo ganha tiras com efeito glitter, trazendo um toque de brilho que é a cara do verão. Essa papete é perfeita para produções leves e descontraídas, acompanhando você em todos os momentos da estação. As cores vibrantes e o pin metálico no cabedal adicionam um charme extra a essa sandália que combina conforto, praticidade e o DNA único da Melissa.",
    variacoes: [
      {
        titulo: "branco/vidro glitter",
        imagem: "/products/var_2235552426c1.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde/verde glitter",
        imagem: "/products/var_83ac003ed35a.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa medio/rosa glitter",
        imagem: "/products/var_eb8a892b1ecb.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto/preto glitter",
        imagem: "/products/var_4b7d1694d8d5.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-downtown-platform-ii",
    name: "Melissa Sun Downtown Platform II",
    image: "/products/melissa-sun-downtown-platform-ii.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown-platform-ii/0-98a9c1773f01.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown-platform-ii/1-9243a7f3b4b8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown-platform-ii/2-49a9695050bb.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown-platform-ii/3-88b8dbfb35d0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-downtown-platform-ii/4-124a8b47c831.jpg"],
    price: 21.99,
    originalPrice: 219.9,
    discount: 90.0,
    description: "A Melissa Sun Downtown Platform II chegou para elevar o seu verão – literalmente! Essa nova versão traz o destaque da plataforma, unindo estilo e conforto em um design que é puro charme. Com fechamento em velcro ajustável, acabamento em glitter na parte externa e uma pegada sporty, o modelo é perfeito para acompanhar você do nascer ao pôr do sol, seja na praia ou no rooftop. Experimente o verão em novas alturas com a Melissa Sun Downtown Platform II, bestie!Mais características da Melissa Sun Downtown Platform II:Altura da sola: 4 cmFechamento em velcro ajustávelAplicação de glitter flocado na parte externa",
    variacoes: [
      {
        titulo: "Branco",
        imagem: "/products/var_98a9c1773f01.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_4f97f993a9ba.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_3a2e262fec01.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-aurora",
    name: "Melissa Sun Aurora",
    image: "/products/melissa-sun-aurora.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-aurora/0-e6c28de27ef6.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-aurora/1-b95f365a3d77.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-aurora/2-4200210e7cc9.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-aurora/3-df28003b1a12.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-aurora/4-d510d1b00c7b.jpg"],
    price: 11.99,
    originalPrice: 119.9,
    discount: 90.0,
    description: "A Sun Family não para de crescer! A Melissa Sun Aurora chegou pra deixar o seu verão ainda mais bonito. Com design moderno e funcional, esse modelo une conforto e estilo pra você arrasar nos dias de calor. A paleta com cores vibrantes e cheias de personalidade prometem deixar seus dias ainda mais extraordinários. E o melhor: ela vem acompanhada de uma bolsa super charmosa que combina perfeitamente com o calçado. A Melissa Sun Aurora é o match perfeito para um verão prático, colorido e inesquecível! Garanta já a sua, bestie!",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_00a57962ead9.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_e6c28de27ef6.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_c79511681047.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_bd87cf5e2757.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-sunset-ii",
    name: "Melissa Sun Sunset II",
    image: "/products/melissa-sun-sunset-ii.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-sunset-ii/0-6f1a62495266.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-sunset-ii/1-b1b850f0841b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-sunset-ii/2-5553c5919ea5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-sunset-ii/3-8c4111cb9c1e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-sunset-ii/4-ee3fadddbf26.jpg"],
    price: 11.99,
    originalPrice: 119.9,
    discount: 90.0,
    description: "A Família Sun ganhou mais uma integrante! A Melissa Sun Sunset II é um slide com formas simples, que prioriza o conforto e a praticidade – tudo o que as M-Lovers precisam para os dias de calor. A paleta de cores também segue o mood da praticidade, com tons versáteis fáceis de combinar e aplicação de glitter no cabedal, que dá aquele up no visual. Esse modelo é indispensável para as M-Lovers que amam conforto sem precisar abrir mão do estilo. Você está preparada pra arrasar com a Melissa Sun Sunset II?",
    variacoes: [
      {
        titulo: "Rosa Claro",
        imagem: "/products/var_b6a85b4817ec.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_49cde1637bed.jpg",
        tipo: "cor"
      },
      {
        titulo: "Branco",
        imagem: "/products/var_0a8cf22690fc.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_6f1a62495266.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-ginga",
    name: "Melissa Sun Ginga",
    image: "/products/melissa-sun-ginga.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-ginga/0-edea53824c8e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-ginga/1-aaea078c7bed.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-ginga/2-59cd7f509206.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-ginga/3-719558a7afe4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-ginga/4-293dfaeca62b.jpg"],
    price: 10.99,
    originalPrice: 109.9,
    discount: 90.0,
    description: "Leve e descolada, a Melissa Sun Ginga é tudo que você precisa para os dias de calor. Feita em Melflex e com tiras transpassadas no cabedal, ela traz conforto e praticidade para te acompanhar em todos os momentos. As cores versáteis são perfeitas para combinar com qualquer estilo, seja para um passeio na cidade ou um dia relax na praia. A Melissa Ginga é a escolha certa para as M-Lovers que buscam conforto e autenticidade no verão.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_059481937d56.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_ff81b8a4ed13.jpg",
        tipo: "cor"
      },
      {
        titulo: "Lilas",
        imagem: "/products/var_edea53824c8e.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_6f1f848d25ab.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-sandiego",
    name: "Melissa Sun Sandiego",
    image: "/products/melissa-sun-sandiego.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-sandiego/0-d296fd7d4200.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-sandiego/1-1ecd284d1cb0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-sandiego/2-1e7d24a05d45.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-sandiego/3-77384af1adf0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-sandiego/4-284ee0c3a7ef.jpg"],
    price: 15.99,
    originalPrice: 159.9,
    discount: 90.0,
    description: "A Melissa Sun Sandiego é um sneaker inédito e superautêntico. Suas laterais possuem uma trama vazada, que proporcionam uma excelente ventilação aos pés. Fabricado em Melflex, possui cadarço em material têxtil para um ajuste perfeito ao pé, garantindo conforto durante o uso. É a escolha perfeita para quem busca um calçado estiloso e diferenciado! Como não amar?!",
    variacoes: [
      {
        titulo: "Verde",
        imagem: "/products/var_c7fe21f5106a.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-sunset-platform",
    name: "Melissa Sun Sunset Platform",
    image: "/products/melissa-sun-sunset-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-sunset-platform/0-16c9e75850fd.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-sunset-platform/1-ac0de3fd4560.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-sunset-platform/2-eaaf4d632f14.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-sunset-platform/3-ca6a5cff48c7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-sunset-platform/4-699d2ed1bd8a.jpg"],
    price: 17.99,
    originalPrice: 179.9,
    discount: 90.0,
    description: "A Melissa Sun Sunset Platform é o slide com plataforma que vai do sol na areia ao brilho das ruas com a mesma elegância. Com sola robusta e anatômica, ela entrega conforto sem esforço, enquanto o shape marcante traduz as tendências mais quentes em cada detalhe. Minimalista, mas poderosa, essa plataforma foi feita para quem transforma o simples ato de caminhar em pura expressão de estilo. Um convite ao verão permanente, onde quer que você vá.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_3d45dfb5f459.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_903479e987c0.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_64e12462b0d4.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_e25f974f8b6e.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-samba",
    name: "Melissa Sun Samba",
    image: "/products/melissa-sun-samba.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-samba/0-ef44e0cf6ff6.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-samba/1-83873050255a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-samba/2-5adf9c5840cd.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-samba/3-a6e658f198fa.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-samba/4-3811c0f096c9.jpg"],
    price: 10.99,
    originalPrice: 109.9,
    discount: 90.0,
    description: "A Melissa Sun Samba é a definição de leveza e estilo para os dias de sol. Com design minimalista e visual elegante, essa sandália aposta no clássico formato de forquilha com fechamento traseiro, garantindo mais segurança e conforto ao caminhar. Seu cabedal de linhas limpas se ajusta com delicadeza ao pé, enquanto a palmilha texturizada oferece bem-estar o dia todo. Atemporal e versátil, ela é perfeita para quem busca praticidade sem abrir mão de um visual moderno, funcionando como peça-chave em looks casuais e sofisticados.",
    variacoes: [
      {
        titulo: "Bege claro",
        imagem: "/products/var_f5d5025ab7e1.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege medio",
        imagem: "/products/var_d231ca3f21cb.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_6981491ef003.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_ebde50e08eb7.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-carioca",
    name: "Melissa Sun Carioca",
    image: "/products/melissa-sun-carioca.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-carioca/0-d89e7f3b5cf2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-carioca/1-0a90168d0332.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-carioca/2-1576dd081afa.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-carioca/3-af3e816a1394.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-carioca/4-51b5a032fc2a.jpg"],
    price: 8.99,
    originalPrice: 89.9,
    discount: 90.0,
    description: "A Melissa Sun Carioca é a escolha perfeita para quem busca leveza, liberdade e praticidade. Com um design atemporal e palmilha texturizada que se adapta ao pé, ela traduz o conforto com estilo em todos os momentos — do passeio na orla aos dias corridos da cidade. Esse chinelo reforça o essencial da Melissa, valorizando o que é simples, funcional e bonito, sem abrir mão da identidade única da marca. Ideal para acompanhar você em cada passo da sua rotina sob o sol.",
    variacoes: [
      {
        titulo: "Lilas",
        imagem: "/products/var_d89e7f3b5cf2.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_30b2c11a76bb.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_bb10a26161ab.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_772f627405da.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-barra-platform-ii",
    name: "Melissa Sun Barra Platform II",
    image: "/products/melissa-sun-barra-platform-ii.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-barra-platform-ii/0-637312ecb6d9.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-barra-platform-ii/1-f10b70669924.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-barra-platform-ii/2-59dde14f2643.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-barra-platform-ii/3-6aba035a9d87.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-barra-platform-ii/4-3894ccaafb0e.jpg"],
    price: 21.99,
    originalPrice: 219.9,
    discount: 90.0,
    description: "Sandália plataforma Melissa Sun Barra Platform IIA sandália plataforma feminina que une brilho, estilo e praticidade para os dias quentes. A Melissa Sun Barra Platform II apresenta acabamento com glitter em todas as cores, proporcionando um visual sofisticado e cheio de personalidade.Com sola antiderrapante e fechamento ajustável no tornozelo, oferece segurança e facilidade para calçar, garantindo estabilidade a cada passo. Seu design versátil e confortável faz dela a escolha perfeita para compor looks despojados e elegantes, ideal para acompanhar o ritmo acelerado da rotina.Principais características:• Acabamento em glitter;• Sola leve, que proporciona pisadas suaves e reduz o impacto;• Fechamento ajustável no tornozelo para melhor ajuste e segurança;• Plataforma que eleva a postura com praticidade;• Design feminino, versátil e confortável para uso prolongado.Eleve seu estilo e aproveite o máximo de conforto com a Melissa Sun Barra Platform II, a sandália plataforma feminina que combina beleza, funcionalidade e atitude para os seus dias de verão.",
    variacoes: [
      {
        titulo: "bege/bege glitter",
        imagem: "/products/var_5d243b033c54.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom/marrom glitter",
        imagem: "/products/var_4534206298db.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto/preto glitter",
        imagem: "/products/var_e87596215063.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde/verde glitter",
        imagem: "/products/var_ea940d42c051.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-flip-flop-platform",
    name: "Melissa Sun Flip Flop Platform",
    image: "/products/melissa-sun-flip-flop-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-flip-flop-platform/0-5e092c7e32f8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-flip-flop-platform/1-469fbedc5b5b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-flip-flop-platform/2-f38056d25b3e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-flip-flop-platform/3-12bae7b905c2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-flip-flop-platform/4-05dfd659b27a.jpg"],
    price: 15.99,
    originalPrice: 159.9,
    discount: 90.0,
    description: "Chinelo Melissa Sun Flip Flop PlatformA Melissa Sun Flip Flop Platform, o chinelo feminino perfeito para quem quer conforto e estilo nos dias quentes. Com design moderno de dedo e tiras com recorte cavado, combina leveza e atitude em um único modelo.Ideal para a rotina do dia a dia, o chinelo Melissa oferece praticidade e o conforto característico do material exclusivo da marca. Versátil, acompanha looks casuais, descomplicados e cheios de personalidade para o verão.Principais características:• Fabricado em Melflex®, material exclusivo da Melissa• Fácil de calçar e perfeito para uso diário• Cores sólidas e vibrantes para o verão Destaque-se nos dias quentes com o Chinelo Melissa Sun Flip Flop Platform, a opção que une conforto, estilo e praticidade para todos os momentos do seu verão.",
    variacoes: [
      {
        titulo: "Amarelo",
        imagem: "/products/var_7112fb95d361.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_dbc4ed986409.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_db5a1f66d9d3.jpg",
        tipo: "cor"
      },
      {
        titulo: "Branco",
        imagem: "/products/var_69cadee1d41a.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-sun-leblon",
    name: "Melissa Sun Leblon",
    image: "/products/melissa-sun-leblon.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-leblon/0-dd578dcc14e3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-leblon/1-a77c8e73e2b3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-leblon/2-a5acd2baf64b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-leblon/3-cc5270af9451.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-sun-leblon/4-47e8d42138da.jpg"],
    price: 19.99,
    originalPrice: 199.9,
    discount: 90.0,
    description: "Sandália Melissa Sun Leblon A Melissa Sun Leblon é uma sandália feminina que combina estilo e praticidade, ideal para os dias quentes. Com design de dedo e delicado detalhe de toe ring, o modelo traz um visual moderno e elegante. É ideal para compor looks leves, frescos e descomplicados, seja em passeios, compromissos do dia a dia ou momentos de lazer. Pensada para a rotina, a sandália conta com sola antiderrapante e fechamento ajustável no tornozelo, garantindo mais segurança, estabilidade e facilidade ao calçar. Produzida em Melflex®, oferece o conforto característico da Melissa, acompanhando você ao longo do dia com bem-estar. Principais características: Detalhe moderno de toe ring Sola antiderrapante para mais segurança Fechamento ajustável no tornozelo Aposte na sua cor favorita da Melissa Sun Leblon e eleve o seu visual com a sandália que une muito conforto, estilo e praticidade para todos os momentos.",
    variacoes: [
      {
        titulo: "Bege",
        imagem: "/products/var_21738df4055a.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho",
        imagem: "/products/var_8a22ff5a4fb2.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_18689b970182.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_c1c2e2d08c68.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-print-slide",
    name: "Melissa Free Print Slide",
    image: "/products/melissa-free-print-slide.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-print-slide/0-910df97692ab.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-print-slide/1-fa720ad53acf.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-print-slide/2-a7dbcd6764a5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-print-slide/3-6c25fc20d678.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-print-slide/4-16ba4de594c0.jpg"],
    price: 19.99,
    originalPrice: 199.9,
    discount: 90.0,
    description: "Que a linha Melissa Free é um sucesso, isso todo mundo já sabe, mas que a nova Melissa Free Print Slide é o modelo que as M-lovers apaixonadas por estampas coloridas precisam, isso você está sabendo agora. Destaque para a tecnolgia do EVA que compõe o modelo: é sustentável e superleve, para você sentir que está caminhando entre nuvens coloridas e com cheirinho de tutti-frutti. Mais caracteristicas da Melissa Free Print:Slide Cabedal em EVA com aplicação de 3DB nas versões estampadasPin M de nylon na lateral",
    variacoes: [
      {
        titulo: "preto/branco/amarelo",
        imagem: "/products/var_5ba71eb61b44.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/marrom/preto",
        imagem: "/products/var_eb27ab085a0d.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/branco/amarelo",
        imagem: "/products/var_268f2699175c.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_aff93c190632.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_8c4934b6c5ea.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_3e96ee515177.jpg",
        tipo: "cor"
      },
      {
        titulo: "Lilas",
        imagem: "/products/var_fa720ad53acf.jpg",
        tipo: "cor"
      },
      {
        titulo: "Branco/preto",
        imagem: "/products/var_4b2d857979c9.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_20f6646be1c5.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_96706fe70be3.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_f7c69c6333e8.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-print-platform",
    name: "Melissa Free Print Platform",
    image: "/products/melissa-free-print-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-print-platform/0-932aad7bf588.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-print-platform/1-328776e9b157.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-print-platform/2-102f185f6e2f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-print-platform/3-1d2209269993.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-print-platform/4-5e3521420c8e.jpg"],
    price: 22.99,
    originalPrice: 229.9,
    discount: 90.0,
    description: "A slide Melissa Free Platform, que faz parte da linha Melissa Free, surge com uma proposta de alegrar qualquer look com suas estampas florais e animal print. Super leve e confortável, possui um design robusto e com personalidade, ou seja, não tenha medo de explorar o seu lado dopamine aesthetic de maneira extraordinária. Mais caracteristicas da Melissa Free Print Platform:Slide plataformaCabedal em EVA com aplicação de 3DB nas versões estampadasPalmilha em Grenflex com serigrafia do logo MelissaPin M de nylon na lateral",
    variacoes: [
      {
        titulo: "bege/marrom/preto",
        imagem: "/products/var_72554a17edf4.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege/preto",
        imagem: "/products/var_5a6dce02a5b5.jpg",
        tipo: "cor"
      },
      {
        titulo: "amarelo/branco",
        imagem: "/products/var_2785dfd12e42.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/preto",
        imagem: "/products/var_d94a317587d3.jpg",
        tipo: "cor"
      },
      {
        titulo: "Branco/preto",
        imagem: "/products/var_328776e9b157.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-fuzzy-platform",
    name: "Melissa Free Fuzzy Platform",
    image: "/products/melissa-free-fuzzy-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-fuzzy-platform/0-a687102e8189.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-fuzzy-platform/1-38d10464d729.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-fuzzy-platform/2-8617adba4ed7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-fuzzy-platform/3-53d4af9537dc.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-fuzzy-platform/4-37e42cc08c88.jpg"],
    price: 22.99,
    originalPrice: 229.9,
    discount: 90.0,
    description: "A Melissa Free Fuzzy Platform, é um chinelo que une design contemporâneo e conforto. Sua plataforma em EVA proporciona leveza ao caminhar, com um toque de estilo descontraído. Versátil e moderno, este modelo é a escolha ideal para quem busca praticidade sem abrir mão do charme.",
    variacoes: [
      {
        titulo: "Bege",
        imagem: "/products/var_ff88e8e130cd.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_b509f96930ce.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_a687102e8189.jpg",
        tipo: "cor"
      },
      {
        titulo: "Lilas",
        imagem: "/products/var_5cc598069b8c.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_e6f24fdc6df6.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa medio",
        imagem: "/products/var_bc99d9397dc3.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-fuzzy-printed-platform",
    name: "Melissa Free Fuzzy Printed Platform",
    image: "/products/melissa-free-fuzzy-printed-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-fuzzy-printed-platform/0-45e85472e02a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-fuzzy-printed-platform/1-a66916506526.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-fuzzy-printed-platform/2-d06e1876d0d5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-fuzzy-printed-platform/3-6ffc1f8e2ad0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-fuzzy-printed-platform/4-a331174c18bc.jpg"],
    price: 27.99,
    originalPrice: 279.9,
    discount: 90.0,
    description: "A Melissa Free Fuzzy Platform, é um chinelo que une design contemporâneo e conforto. Sua plataforma em EVA proporciona leveza ao caminhar, com um toque de estilo descontraído. Versátil e moderno, este modelo é a escolha ideal para quem busca praticidade sem abrir mão do charme. Destaque para as versões com estampas que adicionam elementos de personalidade ao seu estilo cotidiano!",
    variacoes: [
      {
        titulo: "laranja/azul",
        imagem: "/products/var_238babc608e6.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege/preto",
        imagem: "/products/var_a66916506526.jpg",
        tipo: "cor"
      },
      {
        titulo: "vermelho/branco",
        imagem: "/products/var_ae99ff53e6d7.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-clog-platform",
    name: "Melissa Free Clog Platform",
    image: "/products/melissa-free-clog-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-clog-platform/0-ca8539135e89.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-clog-platform/1-562219611df2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-clog-platform/2-f88596499e00.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-clog-platform/3-052b4ce21dfc.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-clog-platform/4-1236fb53790d.jpg"],
    price: 26.99,
    originalPrice: 269.9,
    discount: 90.0,
    description: "A nova clog do momento é a Melissa Free Clog Platform, que possui um calce seguro e confortável devido ao EVA do cabedal, ou seja, é garantido que você pode passear à vontade! Além disso, a sola antiderrapante garante maior segurança no caminhar. Para os looks, aposte em misturas de cores e texturas de tecidos, o importante é abraçar a criatividade.",
    variacoes: [
      {
        titulo: "Cinza",
        imagem: "/products/var_ca8539135e89.jpg",
        tipo: "cor"
      },
      {
        titulo: "violeta",
        imagem: "/products/var_f5354cd3025f.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_4bab08e6aebb.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-clog-printed-platform",
    name: "Melissa Free Clog Printed Platform",
    image: "/products/melissa-free-clog-printed-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-clog-printed-platform/0-897838337b40.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-clog-printed-platform/1-b5f31f160466.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-clog-printed-platform/2-149df5a2c1fd.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-clog-printed-platform/3-714ae7e29ad9.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-clog-printed-platform/4-1de483e47278.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "A Melissa Free Clog Printed é uma clog cheia de informações de moda! O modelo tem aparência robusta, mas é superleve e confortável para todos os momentos do dia. Destaque para as versões com estampas de flores e animal print.",
    variacoes: [
      {
        titulo: "brancopreto",
        imagem: "/products/var_bc010b707a93.jpg",
        tipo: "cor"
      },
      {
        titulo: "begeverde",
        imagem: "/products/var_36bb69fc34ac.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-platform-slide",
    name: "Melissa Free Platform Slide",
    image: "/products/melissa-free-platform-slide.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide/0-4f4466e94064.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide/1-6ed1abcabcce.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide/2-a1ee139792e6.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide/3-48c9e25b69d0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide/4-6fa017eb7e24.jpg"],
    price: 27.99,
    originalPrice: 279.9,
    discount: 90.0,
    description: "A Melissa Free Platform Slide é o tipo de peça que não se explica — se sente. Um verdadeiro hit do universo fashion que garante a sensação de estar caminhando nas nuvens a cada passo. Esse modelo icônico da Free Family, feito em EVA entrega conforto e leveza para acompanhar as M-Lovers em todas as ocasiões. Dos looks descomplicados aos mais ousados, é a plataforma perfeita para quem busca autenticidade sem abrir mão do estilo. Escolha a sua e leve seu visual a outro nível.",
    variacoes: [
      {
        titulo: "Rosa",
        imagem: "/products/var_43b2a4971891.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_7a32c5c92f9c.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_4f4466e94064.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho",
        imagem: "/products/var_f01c70d903ed.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa Claro",
        imagem: "/products/var_c898d429e3ea.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bronze",
        imagem: "/products/var_9853a8af9db7.jpg",
        tipo: "cor"
      },
      {
        titulo: "Amarelo",
        imagem: "/products/var_e0b7b5cd5148.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege escuro",
        imagem: "/products/var_c3ee0f0318d2.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_6f6dcf05121d.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bordo",
        imagem: "/products/var_ab439abc4966.jpg",
        tipo: "cor"
      },
      {
        titulo: "Cinza",
        imagem: "/products/var_8d1836a9db6e.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-fuzzy-slide",
    name: "Melissa Free Fuzzy Slide",
    image: "/products/melissa-free-fuzzy-slide.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-fuzzy-slide/0-94b53ba49ff4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-fuzzy-slide/1-c0608c268394.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-fuzzy-slide/2-9e2a64c0b1bd.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-fuzzy-slide/3-d6e028369403.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-fuzzy-slide/4-93863df082ad.jpg"],
    price: 19.99,
    originalPrice: 199.9,
    discount: 90.0,
    description: "A Melissa Free Fuzzy Slide é um modelo descomplicado e único, que carrega em seu DNA o conforto dos modelos da linha Melissa Free. Ideal para lookinhos despojados e práticos do dia a dia, a nova Melissa Free Fuzzy Slide é leve, free e extraordinária. Mais caracteristicas da Melissa Free Fuzzy Slide:Cabedal monobloco em EVA ComfyFechamento em VelcroDetalhe em Plastisol com logo Melissa",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_f276be6be627.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_c547ed2cf41e.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_cfe168355bb6.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_1982e39f3645.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul claro",
        imagem: "/products/var_32ae3587a2a8.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-platform-thong",
    name: "Melissa Free Platform Thong",
    image: "/products/melissa-free-platform-thong.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-thong/0-0a6eaf960715.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-thong/1-459c8d515799.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-thong/2-a5038c9a6c3f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-thong/3-c4e634744a6b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-thong/4-0cb0a2dd7f0a.jpg"],
    price: 27.99,
    originalPrice: 279.9,
    discount: 90.0,
    description: "Plataforma Melissa Free Platform ThongUm must have de estilo da Free Family! A plataforma feminina Melissa Free Platform Thong conta com um shape anatômico e estrutura monobloco feita em EVA, material superleve e confortável, que garante uma sensação única de caminhar nas nuvens.Com sua plataforma ousada e design marcante, esse chinelo transforma qualquer look básico em um verdadeiro statement. Seja em dias ensolarados na praia ou em festas sunset, ela eleva qualquer produção com atitude e estilo.Principais características:• Shape anatômico em EVA superleve• Plataforma ousada e confortável• Versátil para diversas ocasiõesPrepare-se para fazer sucesso: esse best-seller não vai sair dos seus pés!",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_5f46d019dd0e.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho",
        imagem: "/products/var_7598da6a4f9b.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bronze",
        imagem: "/products/var_0a6eaf960715.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_9926cdc6d5a4.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege medio",
        imagem: "/products/var_fab718febe99.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_35b45cdc0986.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa Claro",
        imagem: "/products/var_35442c948c82.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa medio",
        imagem: "/products/var_353192f20954.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde escuro",
        imagem: "/products/var_831c787443c0.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_8fc6c84e54ae.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bordo",
        imagem: "/products/var_b752b1be59b7.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-rise",
    name: "Melissa Free Rise",
    image: "/products/melissa-free-rise.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-rise/0-52ffda8eaea2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-rise/1-49c0b5a05831.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-rise/2-be15df2f8996.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-rise/3-d7380709d8b8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-rise/4-93a4640f8228.jpg"],
    price: 24.99,
    originalPrice: 249.9,
    discount: 90.0,
    description: "A Melissa Free Rise é um modelo plataforma de 5 cm com uma estética nostálgica dos anos Y2K, mas com uma releitura moderna e urbana. Ideal para looks em que a criatividade e o amor pela moda falam mais alto. O cabedal em \"X\" garante maior segurança no caminhar.Mais caracteristicas da Melissa Free Rise:Monobloco em EVA injetadoPalmilha em PUPin M em NylonLogo Melissa e Monograma serigrafados na palmilhaAltura do salto 5 cm",
    variacoes: [
      {
        titulo: "Verde",
        imagem: "/products/var_9d84d2c74d40.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_af3e16675925.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_52ffda8eaea2.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_3a97deda5476.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-platform-slide-denim",
    name: "Melissa Free Platform Slide Denim",
    image: "/products/melissa-free-platform-slide-denim.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-denim/0-ebb7ba5818eb.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-denim/1-c88b61853138.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-denim/2-db58b7d3579e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-denim/3-27a4ac772999.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-denim/4-4b3ff00523e3.jpg"],
    price: 26.99,
    originalPrice: 269.9,
    discount: 90.0,
    description: "Os anos 2000 estão de volta e a coleção Total Denim faz com que as M-Lovers expressem seu próprio estilo através desse revival. Com design moderno e cheio de atitude, a Melissa Free Platform Slide Denim chega agora na versão Denim. O toque visual do jeans transforma essa plataforma icônica em uma peça ainda mais versátil e fashion. Feito em EVA, o modelo permanece leve e confortável, perfeito para o dia a dia, mas com um toque diferenciado graças ao acabamento inspirado no jeans.",
    variacoes: [
      {
        titulo: "azul jeans",
        imagem: "/products/var_8721182c4bfb.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto jeans",
        imagem: "/products/var_ebb7ba5818eb.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-possession",
    name: "Melissa Free Possession",
    image: "/products/melissa-free-possession.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-possession/0-48ee7a3a6c96.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-possession/1-163bee330ad3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-possession/2-c2d17a0e190d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-possession/3-0d3fc6fbf165.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-possession/4-eaa4990da45e.jpg"],
    price: 19.99,
    originalPrice: 199.9,
    discount: 90.0,
    description: "A icônica sandália Melissa Possession, com ainda mais leveza e conforto nessa versão Free. A Melissa Free Possession combina a irreverência do design aranhado clássico com a tecnologia de EVA ultra-soft, garantindo um toque inovador que promete conquistar as M-Lovers. O calce fica ainda mais fácil com o fechamento ajustável e seus looks ganham cores incríveis que combinam com diferentes estilos. Essa é a opção perfeita pra você arrasar por onde for, bestie!Mais características da Melissa Free Possession:Fabricada em EVA Ultrasoft que garante leveza ao calce.Fechamento ajustável.Grade estendida.",
    variacoes: [
      {
        titulo: "Bege",
        imagem: "/products/var_585c30219152.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_48ee7a3a6c96.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bronze",
        imagem: "/products/var_4a09d22e5770.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho",
        imagem: "/products/var_9f85387b65cb.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_ed39973af1c6.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "40-M9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "41-M10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "42-M11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "43/44-M12",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-platform-slide-glitter",
    name: "Melissa Free Platform Slide Glitter",
    image: "/products/melissa-free-platform-slide-glitter.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-glitter/0-64d457a2e73b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-glitter/1-ad129cdbc0dc.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-glitter/2-13da94753a60.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-glitter/3-996f966ecf10.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-glitter/4-9096c59f6c76.jpg"],
    price: 34.99,
    originalPrice: 349.9,
    discount: 90.0,
    description: "A Melissa Free Platform Slide Glitter chegou para redefinir o conceito de glamour e conforto. A nova integrante da família Free combina o design moderno com a leveza do EVA, proporcionando uma experiência superconfortável e elegante para o dia a dia das M-Lovers. Com um acabamento todo em glitter, essa nova versão da Free Platform Slide promete ser a peça-chave para você brilhar com estilo em qualquer ocasião. Mais características da Melissa Free Platform Slide Glitter:Palmilha confortável com logo MelissaMonograma da marca na lateralSola com tecnologia EVA",
    variacoes: [
      {
        titulo: "Cinza Glitter",
        imagem: "/products/var_9efb4915063f.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho Glitter",
        imagem: "/products/var_d6c7180afce0.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-high",
    name: "Melissa Free High",
    image: "/products/melissa-free-high.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-high/0-3439f401aa42.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-high/1-66f9208cf90d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-high/2-1829dc652ba7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-high/3-fceeee3375eb.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-high/4-be1eb1cd920f.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "Os tamancos estão de volta, e a Melissa Free High promete ser um dos hits da temporada. Feita com a tecnologia do EVA, ela é superleve, fácil de usar e perfeita para quem ama um look descomplicado, mas cheio de personalidade. Combine com jeans, vestidos ou até aquele conjuntinho comfy—não tem erro! Conforto e estilo na medida certa pra você arrasar por onde for.*Altura aproximada, pode variar conforme a numeração",
    variacoes: [
      {
        titulo: "Bege claro",
        imagem: "/products/var_89553a755454.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege medio",
        imagem: "/products/var_558ddd12bcee.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_8ed1f54df281.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_839e60936f77.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-heart-flip-flop",
    name: "Melissa Free Heart Flip Flop",
    image: "/products/melissa-free-heart-flip-flop.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-heart-flip-flop/0-703cf77ffca5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-heart-flip-flop/1-db0475f35470.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-heart-flip-flop/2-ce3091971e43.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-heart-flip-flop/3-66e15954a104.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-heart-flip-flop/4-5005dc62d751.jpg"],
    price: 17.99,
    originalPrice: 179.9,
    discount: 90.0,
    description: "Uma Melissa Flip Flop para calçar o DNA Melissa e caminhar nas nuvens! Visando cada vez mais conforto, uma nova tecnologia de EVA super confortável chegou na família free, afinal, a família free além de sustentabilidade, também é conforto e leveza.",
    variacoes: [
      {
        titulo: "Verde",
        imagem: "/products/var_4d302adb2245.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-line-platform",
    name: "Melissa Free Line Platform",
    image: "/products/melissa-free-line-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-line-platform/0-fe1c218d3d72.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-line-platform/1-0b92cf1be932.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-line-platform/2-7b405340beb7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-line-platform/3-fb6e2a0f4ae0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-line-platform/4-86fc5cba2f51.jpg"],
    price: 27.99,
    originalPrice: 279.9,
    discount: 90.0,
    description: "A Melissa Free Line Platform chegou para elevar o conforto e o estilo a outro nível! Leve, moderna e superprática, essa queridinha mantém o DNA da linha Free, garantindo um calce fácil e um visual fashionista. Perfeita para acompanhar a rotina com leveza e autenticidade, é aquele must-have que combina com tudo!",
    variacoes: [
      {
        titulo: "Lilas",
        imagem: "/products/var_077e6f02438e.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_561d9e95d2df.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bronze",
        imagem: "/products/var_8251319d5739.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_015572283848.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-out",
    name: "Melissa Free Out",
    image: "/products/melissa-free-out.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-out/0-f54508f0a64c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-out/1-8ffae6afb164.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-out/2-fc673c039dbe.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-out/3-b852fd80158b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-out/4-cb3a8a71b34b.jpg"],
    price: 42.99,
    originalPrice: 429.9,
    discount: 90.0,
    description: "A Melissa Free Out é a união perfeita entre estilo e praticidade! Leve, flexível e superconfortável, ela acompanha a rotina com muito mais liberdade. Com solado tratorado e linhas orgânicas, traz um toque moderno e fashionista, garantindo um visual cheio de atitude. Um essencial para quem ama tendência sem abrir mão do conforto!",
    variacoes: [
      {
        titulo: "Verde",
        imagem: "/products/var_6921c26a9b12.jpg",
        tipo: "cor"
      },
      {
        titulo: "Amarelo",
        imagem: "/products/var_d57c2fd633da.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_ff98c114edd0.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_a14431faf48d.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-platform-slide-velvet",
    name: "Melissa Free Platform Slide Velvet",
    image: "/products/melissa-free-platform-slide-velvet.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-velvet/0-289398670d26.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-velvet/1-e433cd2935bc.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-velvet/2-6d4615c55558.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-velvet/3-5f444073a88a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-platform-slide-velvet/4-723f44b9add7.jpg"],
    price: 34.99,
    originalPrice: 349.9,
    discount: 90.0,
    description: "Um toque de veludo para transformar cada passo! A Melissa Free Platform Slide Velvet traz uma nova experiência de conforto e estilo, unindo a leveza do EVA a uma textura macia e sofisticada. O design imponente e moderno eleva qualquer look, enquanto a sensação ultraconfortável faz você se sentir flutuando. Para as M-Lovers que amam ousar sem abrir mão do bem-estar, essa plataforma é a definição de moda com atitude!",
    variacoes: [
      {
        titulo: "Preto Flocado",
        imagem: "/products/var_a99669180d2e.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde flocado",
        imagem: "/products/var_ec93fca72344.jpg",
        tipo: "cor"
      },
      {
        titulo: "vermelho flocado",
        imagem: "/products/var_3dc4fea9fd87.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-low-print",
    name: "Melissa Free Low Print",
    image: "/products/melissa-free-low-print.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-low-print/0-788d3776f171.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-low-print/1-b42eab787c8a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-low-print/2-41db24ce2ca5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-low-print/3-f235fa292e1e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-low-print/4-f1839d36142a.jpg"],
    price: 24.99,
    originalPrice: 249.9,
    discount: 90.0,
    description: "A Melissa Free Low Print é a releitura da icônica Melissa Free Low. Ideal para quem ama estampas coloridas e animal print, este modelo de chinelo é indispensável no guarda-roupa! Feito em EVA e com o DNA Melissa, não é segredo que seu design une conforto, leveza e personalidade, compondo looks autênticos para qualquer ocasião. Perfeito para usar em casa, na praia ou em passeios descontraídos, ele adiciona um toque único de charme e originalidade ao seu visual",
    variacoes: [
      {
        titulo: "preto/marrom",
        imagem: "/products/var_fcd25e17195a.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto/multicor",
        imagem: "/products/var_c78eb583f2f7.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-puff-slide",
    name: "Melissa Free Puff Slide",
    image: "/products/melissa-free-puff-slide.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-slide/0-753ff926fd5b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-slide/1-a827691221c3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-slide/2-737babfdc1ba.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-slide/3-36c22c78d62b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-slide/4-265dbc41b51b.jpg"],
    price: 19.99,
    originalPrice: 199.9,
    discount: 90.0,
    description: "A Melissa Free Puff Slide combina visual aconchegante com tecnologia em EVA, garantindo leveza, conforto e flexibilidade. Esse slide com efeito puffer com acabamento quilted traz textura e volume ao design, reforçando o toque moderno. Um modelo prático e estiloso, ideal para acompanhar looks casuais com personalidade.",
    variacoes: [
      {
        titulo: "Bege",
        imagem: "/products/var_9f3fd60f5ea6.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_95353cdbe978.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bronze",
        imagem: "/products/var_fb1300d08c27.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_60e482283963.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-cross",
    name: "Melissa Free Cross",
    image: "/products/melissa-free-cross.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-cross/0-31c353d94f65.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-cross/1-b97e5676be97.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-cross/2-7607ddc8e4dc.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-cross/3-b5d0b5d8d4f5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-cross/4-451e83edc135.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "A Melissa Free Cross é a plataforma slide perfeita para quem busca conforto e leveza em um visual moderno. Com design minimalista e estrutura monobloco em EVA, esse modelo da Free Family entrega a sensação de caminhar nas nuvens a cada passo. As tiras largas cruzadas garantem segurança, enquanto o solado robusto e ultraleve proporciona estabilidade e maciez. Ideal para compor looks descomplicados com atitude, essa plataforma combina praticidade e estilo em uma só peça.",
    variacoes: [
      {
        titulo: "Bege",
        imagem: "/products/var_952d5b850fad.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_5a08eeb5c4e2.jpg",
        tipo: "cor"
      },
      {
        titulo: "Laranja",
        imagem: "/products/var_efe61e41cde8.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_acef28bb3160.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_a487eae35db9.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege claro",
        imagem: "/products/var_ec7259390278.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bronze",
        imagem: "/products/var_f881e463b2d7.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-puff-platform",
    name: "Melissa Free Puff Platform",
    image: "/products/melissa-free-puff-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-platform/0-d1e09e664b84.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-platform/1-595f9e448c6a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-platform/2-cc589b50fa8e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-platform/3-d6b0dcf7110a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-platform/4-c4f70a1970a7.jpg"],
    price: 29.99,
    originalPrice: 299.9,
    discount: 90.0,
    description: "A Melissa Free Puff Platform une visual marcante com máximo conforto. Com estrutura em EVA, esse slide plataforma é extremamente leve, fácil de calçar e oferece bem-estar o dia todo. O cabedal traz o efeito acolchoado inspirado na estética puffer, combinado ao toque do design quilted, criando um visual moderno e cheio de personalidade. A base robusta adiciona altura e atitude ao look, sem pesar nos pés. Uma escolha prática e cheia de estilo para quem não abre mão de conforto.",
    variacoes: [
      {
        titulo: "Lilas",
        imagem: "/products/var_a031ed9fd113.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_439e2337118c.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_94cc789ee018.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bronze",
        imagem: "/products/var_8fd218f0766f.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho",
        imagem: "/products/var_6dd55075fbac.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-slip",
    name: "Melissa Free Slip",
    image: "/products/melissa-free-slip.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-slip/0-70c40eb007f5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-slip/1-38c3eb59d378.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-slip/2-a4665775f07b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-slip/3-5e9872485416.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-slip/4-c347f73f54b9.jpg"],
    price: 32.99,
    originalPrice: 329.9,
    discount: 90.0,
    description: "A Melissa Free Slip é a plataforma anabela que faltava: alta, leve e cheia de atitude. Com design minimalista e efeito monobloco, o modelo combina a leveza do EVA com conforto extremo, graças à gáspea em EVA Soft que abraça os pés com suavidade. A sola firme e estável garante segurança no caminhar, mesmo com o salto mais elevado. Ideal para quem busca altura, estilo e praticidade em um único calçado.*Altura aproximada, pode variar conforme a numeração.",
    variacoes: [
      {
        titulo: "Bege",
        imagem: "/products/var_69979dc5397c.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_247404b537b9.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_9a19562658af.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_5f132b42d5a5.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-puff-papete",
    name: "Melissa Free Puff Papete",
    image: "/products/melissa-free-puff-papete.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-papete/0-55b770ac615f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-papete/1-6d7beb882389.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-papete/2-a85a877c4107.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-papete/3-279c6d0c2107.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-papete/4-8d2151dcf6a5.jpg"],
    price: 32.99,
    originalPrice: 329.9,
    discount: 90.0,
    description: "A Melissa Free Puff Papete aposta no shape volumoso e no visual moderno para transformar produções casuais com muita atitude. A plataforma em EVA garante leveza e conforto para todos os momentos, enquanto o design acolchoado inspirado na tendência puffer adiciona um toque fashion. O efeito quilted traz sofisticação, e o fechamento em velcro proporciona ajuste seguro. Uma escolha prática e cheia de personalidade para quem ama unir estilo e funcionalidade no dia a dia.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_c27d1493bfe0.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_5bcb47d881a7.jpg",
        tipo: "cor"
      },
      {
        titulo: "Lilas",
        imagem: "/products/var_3f9f0910a38d.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bronze",
        imagem: "/products/var_0f1926394ac7.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-muse-platform",
    name: "Melissa Free Muse Platform",
    image: "/products/melissa-free-muse-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-muse-platform/0-05925d6edb75.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-muse-platform/1-8e2efee38251.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-muse-platform/2-57c4068eb100.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-muse-platform/3-162e648f34ef.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-muse-platform/4-6532b8053ce2.jpg"],
    price: 34.99,
    originalPrice: 349.9,
    discount: 90.0,
    description: "Slide plataforma em EVA que combina conforto extremo com informação de moda. O design acolchoado no estilo puffer envolve os pés com maciez, enquanto o efeito quilted acrescenta textura e sofisticação ao visual. A plataforma leve garante atitude e moderni",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_9bd2a57fe3e8.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_6af091fdee3e.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bronze",
        imagem: "/products/var_05925d6edb75.jpg",
        tipo: "cor"
      },
      {
        titulo: "vermelholilas",
        imagem: "/products/var_22c1388b7bb3.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege claro",
        imagem: "/products/var_5de6f3932b9f.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_e495dac1ce58.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-stripes",
    name: "Melissa Cozy Stripes",
    image: "/products/melissa-cozy-stripes.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-stripes/0-11477d7177c7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-stripes/1-3f76d41b9922.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-stripes/2-cb5c71738c1d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-stripes/3-bf2e22369fdd.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-stripes/4-af306823e747.jpg"],
    price: 16.99,
    originalPrice: 169.9,
    discount: 90.0,
    description: "A nova Melissa Cozy Stripes já chegou entregando o que sempre prometeu: conforto, estilo e muita cor. Com fechamento em fivelas, o modelo fornece mais segurança no calce, além de estar também disponível em combinações tanto monocolores como bicolores. É ideal para quem não tem medo de ser criativo quando o assunto é moda.",
    variacoes: [
      {
        titulo: "preto/vidro tartaruga",
        imagem: "/products/var_6319a2d3624f.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_6ad9d9c183e0.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/laranja",
        imagem: "/products/var_87411e2b3896.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-slide-m-lover",
    name: "Melissa Cozy Slide M-Lover",
    image: "/products/melissa-cozy-slide-m-lover.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-m-lover/0-27edd7c6f592.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-m-lover/1-cee468c462c5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-m-lover/2-9ae8ff453f6f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-m-lover/3-7506955fbd48.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-m-lover/4-0a52dcb25bfd.jpg"],
    price: 19.99,
    originalPrice: 199.9,
    discount: 90.0,
    description: "Com design marcante e energia urbana, a Melissa Cozy Slide M-Lover eleva o conceito de slide ao misturar conforto extremo com atitude fashion. As tiras largas com fivelas dão o tom utilitário do modelo, enquanto a sola garante uma pisada leve e macia, perfeita para quem não abre mão de praticidade. Do look relax ao visual ousado, esse slide é a escolha certa para quem faz da personalidade sua maior tendência.",
    variacoes: [
      {
        titulo: "Verde",
        imagem: "/products/var_2e820d91426a.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul",
        imagem: "/products/var_79f5f7c56880.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_405d8374c55c.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_25a94bd81e7d.jpg",
        tipo: "cor"
      },
      {
        titulo: "Branco",
        imagem: "/products/var_9119660ac054.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_785ee6a3ae8d.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul medio",
        imagem: "/products/var_a5e009531c7e.jpg",
        tipo: "cor"
      },
      {
        titulo: "Vermelho",
        imagem: "/products/var_9c91cf650f58.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege claro",
        imagem: "/products/var_68f481622a57.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom/bege",
        imagem: "/products/var_c6dbbabeaac6.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-connection-slide",
    name: "Melissa Cozy Connection Slide",
    image: "/products/melissa-cozy-connection-slide.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-connection-slide/0-c401ad7b5ad2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-connection-slide/1-d1d726819b50.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-connection-slide/2-a3cadd81a530.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-connection-slide/3-f180193b8bfc.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-connection-slide/4-70cc4e476297.jpg"],
    price: 17.99,
    originalPrice: 179.9,
    discount: 90.0,
    description: "Chegou o slide com uma nova proposta supercolorida e fashionista: conheça o Melissa Cozy Connection Slide, um lançamento que vai conquistar o coração de quem não resiste a um modelo com cores divertidas. Visando oferecer máximo conforto, é superleve para você sentir que está caminhando nas nuvens. Já é um sucesso entre as M-Lovers",
    variacoes: [
      {
        titulo: "Vermelho",
        imagem: "/products/var_1dd51bc35d64.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_99630fb75aed.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/branco",
        imagem: "/products/var_834bbf44e9bd.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_d1d726819b50.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "40-M9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "41-M10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "42-M11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "43/44-M12",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-clog",
    name: "Melissa Cozy Clog",
    image: "/products/melissa-cozy-clog.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-clog/0-b16a5e53b3c3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-clog/1-35d6b605f332.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-clog/2-2874767ca314.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-clog/3-5004535ce61f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-clog/4-42c86df20170.jpg"],
    price: 21.99,
    originalPrice: 219.9,
    discount: 90.0,
    description: "A Melissa Cozy Clog é a perfeita combinação de conforto e design único. Seu calce traduz o real significado de COZY, proporcionando uma experiência incomparável. Com cabedal em Melflex e sola em EVA injetado, o modelo é fácil de manter limpo e oferece maior segurança com a sola antiderrapante. Versátil e fácil de combinar, é ideal para looks urbanos e mega confortáveis. Além disso, conta com o logo Melissa serigrafado na palmilha.",
    variacoes: [
      {
        titulo: "Azul",
        imagem: "/products/var_236938f10b9c.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde/marrom",
        imagem: "/products/var_35d6b605f332.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_a6056c9d13bd.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_ed926fd15fb9.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege medio",
        imagem: "/products/var_d701ca5ddcc7.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-flip-flop",
    name: "Melissa Cozy Flip Flop",
    image: "/products/melissa-cozy-flip-flop.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-flip-flop/0-644914763772.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-flip-flop/1-dd5cbeee519c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-flip-flop/2-a71cecbc40a6.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-flip-flop/3-cb1e5f2a61cc.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-flip-flop/4-01ec0129e3f3.jpg"],
    price: 16.99,
    originalPrice: 169.9,
    discount: 90.0,
    description: "O próprio nome já diz: confortável. Essa é a proposta da Melissa Cozy Flip Flop, criada para entregar conforto e suporte adequado para os seus momentos em que o bem-estar é o principal objetivo. Com uma fivela personalizada, o modelo também acompanha as últimas tendências de moda. Mais caracteristicas da Melissa Cozy Flip Flop:Chinelo AnatômicoCabedal em MelflexSola em EVA expandidoFechamento com fivela em nylon personalizadas com pinturaSerigrafia com o logo e monograma",
    variacoes: [
      {
        titulo: "cinza/azul perolado",
        imagem: "/products/var_26b804a6b1ff.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_4fcd6decb2ed.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_37f1027c3d13.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-m-lover-platform",
    name: "Melissa Cozy M-Lover Platform",
    image: "/products/melissa-cozy-m-lover-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-platform/0-2e733b85aa06.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-platform/1-d7372dcf84a1.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-platform/2-af9212dcae3f.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-platform/3-fce40d1dff55.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-platform/4-e7b487da727e.jpg"],
    price: 27.99,
    originalPrice: 279.9,
    discount: 90.0,
    description: "Plataforma Melissa Cozy M-Lover PlatformA Melissa Cozy M-Lover Platform é a plataforma feminina para quem ama a sensação de caminhar nas nuvens. Com palmilha em EVA texturizada, proporciona conforto prolongado para momentos descontraídos e alegres, perfeita para curtir o rolê sem pressa.Seu solado tratorado reforça o DNA Melissa, unindo conforto, leveza e atitude em um design marcante. Versátil, ela acompanha você do passeio casual à festa informal, elevando qualquer produção com estilo e personalidade.Principais características:• Palmilha EVA texturizada para conforto• Solado tratorado com estilo marcante• Leve e confortável para o dia a dia• Versátil para diversas ocasiõesCurta o dia com conforto e estilo na plataforma feminina Melissa Cozy M-Lover, sua escolha certa para estar sempre pronta para o próximo rolê.",
    variacoes: [
      {
        titulo: "bege/verde",
        imagem: "/products/var_1a37f25fdc50.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_2e733b85aa06.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_ee188728f501.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege/preto",
        imagem: "/products/var_953e68712f19.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/vermelho",
        imagem: "/products/var_19e9ad3b689d.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/bege",
        imagem: "/products/var_6e19819a8ea1.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege medio",
        imagem: "/products/var_0c759a6786f6.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_df65605c4d41.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-m-lover-slide-denim",
    name: "Melissa Cozy M-Lover Slide Denim",
    image: "/products/melissa-cozy-m-lover-slide-denim.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-slide-denim/0-93f5a81da3a6.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-slide-denim/1-9538f12e010e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-slide-denim/2-9f69652c7d27.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-slide-denim/3-813e15bce436.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-slide-denim/4-c15ed2a39692.jpg"],
    price: 18.99,
    originalPrice: 189.9,
    discount: 90.0,
    description: "Os anos 2000 estão de volta e a coleção Total Denim faz com que as M-Lovers expressem seu próprio estilo através desse revival. A Melissa Cozy M-Lover Slide ganha uma nova cara com a versão Denim, trazendo ainda mais estilo para esta best-seller. As fivelas marcantes sobre as tiras com acabamento em jeans reforçam a tendência retrô, mas com um toque moderno. Além disso, a sola em EVA oferece o conforto e a leveza que todo look casual precisa. Disponível em uma variedade de combinações de cores, esse slide é a pedida certa para quem quer aliar a praticidade ao charme nostálgico do denim.",
    variacoes: [
      {
        titulo: "azul jeans",
        imagem: "/products/var_43ee7b697b17.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto jeans",
        imagem: "/products/var_93f5a81da3a6.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-m-lover-deluxe",
    name: "Melissa Cozy M-Lover Deluxe",
    image: "/products/melissa-cozy-m-lover-deluxe.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-deluxe/0-1966c2190935.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-deluxe/1-97671f5a8b74.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-deluxe/2-3566b49a9e24.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-deluxe/3-c687455cd93c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-deluxe/4-e2d57fc0e6ee.jpg"],
    price: 39.99,
    originalPrice: 399.9,
    discount: 90.0,
    description: "A Melissa Cozy Slide M-Lover Deluxe é a combinação perfeita de conforto e sofisticação. Esse modelo clássico ganhou uma nova versão, agora com aplicação de pedrarias nas tiras, transformando-o em um item cheio de informação de moda. A sola em EVA garante leveza para acompanhar você em todos os momentos. A Melissa Cozy Slide M-Lover Deluxe é a escolha ideal para quem busca um toque de glamour que vai além do básico. Garanta a sua e brilhe por onde for, bestie!",
    variacoes: [
      {
        titulo: "branco/cristal",
        imagem: "/products/var_72318cb6ab9e.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde/cristal",
        imagem: "/products/var_1966c2190935.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto/cristal",
        imagem: "/products/var_6229d2543aaa.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-slide-m-lover-ii",
    name: "Melissa Cozy Slide M-Lover II",
    image: "/products/melissa-cozy-slide-m-lover-ii.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-m-lover-ii/0-baa9c720998e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-m-lover-ii/1-c63fdd853e1a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-m-lover-ii/2-b1d340c518a7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-m-lover-ii/3-65df4a0eb84e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-m-lover-ii/4-030455dbf407.jpg"],
    price: 21.99,
    originalPrice: 219.9,
    discount: 90.0,
    description: "Slide Melissa Cozy Slide M-Lover IIA Melissa Cozy Slide M-Lover II é o slide feminino que une conforto e estilo com o puro DNA Melissa. Feito em Melflex®, material leve e flexível, traz tiras transpassadas e o icônico logo da marca em destaque, garantindo personalidade em cada detalhe.Com linhas texturizadas que adicionam movimento e modernidade, esse slide é perfeito para elevar qualquer look. Versátil e leve, acompanha você do passeio na cidade ao café com as amigas, em diversas cores que conquistam o coração das M-Lovers.Principais características:• Material Melflex® leve e flexível• Tiras transpassadas com design moderno• Logo Melissa em destaque• Versátil para diversas ocasiõesEleve seu estilo com o slide feminino Melissa Cozy Slide M-Lover II, o toque final para looks cheios de atitude.",
    variacoes: [
      {
        titulo: "Laranja",
        imagem: "/products/var_65abe5de579a.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde escuro",
        imagem: "/products/var_a21258988d37.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_baa9c720998e.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_352cc01fc380.jpg",
        tipo: "cor"
      },
      {
        titulo: "Verde",
        imagem: "/products/var_4ab575a7c3c3.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_823aa01f7a56.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa Claro",
        imagem: "/products/var_c773cf63943d.jpg",
        tipo: "cor"
      },
      {
        titulo: "begeglitter",
        imagem: "/products/var_cc514b8d9d4e.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosaperolado",
        imagem: "/products/var_ceac8684a4a5.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-clog-warm",
    name: "Melissa Cozy Clog Warm",
    image: "/products/melissa-cozy-clog-warm.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-clog-warm/0-3fd2ebacb997.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-clog-warm/1-eaf3913f4841.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-clog-warm/2-80cd4b03a361.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-clog-warm/3-a415296c9ee4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-clog-warm/4-10e261144b1f.jpg"],
    price: 41.99,
    originalPrice: 419.9,
    discount: 90.0,
    description: "A Melissa Cozy Clog Warm é puro aconchego para os seus pés! Com revestimento interno de pelinhos macios, ela envolve cada passo em conforto e bem-estar. Leve, estilosa e perfeita para os dias frios, combina praticidade e charme em um só modelo. O toque extra de segurança fica por conta da sola antiderrapante, garantindo liberdade para você curtir cada momento sem preocupações!",
    variacoes: [
      {
        titulo: "Bege",
        imagem: "/products/var_9c3071a3bf67.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_3ad14def3a2e.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_1904e585fc46.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-slide-warm",
    name: "Melissa Cozy Slide Warm",
    image: "/products/melissa-cozy-slide-warm.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-warm/0-986ba87fcc7d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-warm/1-cb9952d996f3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-warm/2-e41957a1f498.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-warm/3-d9b7420d10b6.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-warm/4-8e060b74ef68.jpg"],
    price: 39.99,
    originalPrice: 399.9,
    discount: 90.0,
    description: "A Melissa Cozy Slide Warm é a escolha certa para quem ama conforto nos dias frios. Com tiras e fivelas cobertas por pelos macios, envolve os pés em uma sensação acolhedora, sem perder o charme. O solado em EVA garante leveza a cada passo, enquanto o PVC Melflex assegura resistência e durabilidade. Com um design sofisticado e um toque invernal irresistível, esse slide traz praticidade e estilo para qualquer momento.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_197c53ae97fc.jpg",
        tipo: "cor"
      },
      {
        titulo: "amarelo/bege",
        imagem: "/products/var_fe1f153baa5a.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_fec49555db7a.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-sandal",
    name: "Melissa Cozy Sandal",
    image: "/products/melissa-cozy-sandal.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-sandal/0-50186fda17eb.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-sandal/1-03b03e818ff7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-sandal/2-94321257bfdc.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-sandal/3-e130787628ba.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-sandal/4-49a23ce4865d.jpg"],
    price: 19.99,
    originalPrice: 199.9,
    discount: 90.0,
    description: "Ícone de conforto e estilo casual, a Melissa Cozy Sandal conquista os corações de quem ama praticidade com personalidade. Com tiras largas e fivelas ajustáveis, ela garante um ajuste firme e um visual cheio de atitude. O design robusto traz aquele toque urbano que combina com tudo, ideal para acompanhar o ritmo dos seus dias com leveza e autenticidade.",
    variacoes: [
      {
        titulo: "Verde medio",
        imagem: "/products/var_22ff5409b693.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_eca4e9b5d754.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa",
        imagem: "/products/var_18c3b1c56ec9.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_3970e4edc685.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-platform",
    name: "Melissa Cozy Platform",
    image: "/products/melissa-cozy-platform.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-platform/0-be9eff2f8012.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-platform/1-698a7374d814.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-platform/2-488d0e2b6b00.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-platform/3-76dfb1f86ed2.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-platform/4-e807213bc204.jpg"],
    price: 28.99,
    originalPrice: 289.9,
    discount: 90.0,
    description: "A Melissa Cozy Platform é tudo menos básica. Com solado tratorado e plataforma que chama atenção, esse slide reinterpreta o DNA Melissa com uma pegada utilitária e moderna. As tiras largas com fivelas bold marcantes trazem personalidade de sobra, enquanto o toque macio da palmilha em EVA garante aquela leveza que acompanha você em qualquer ocasião com a sensação de caminhar nas nuvens. Um modelo versátil que não passa despercebido e transforma qualquer look com simplicidade ousada.",
    variacoes: [
      {
        titulo: "Rosa",
        imagem: "/products/var_33580ac19b90.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto/bege",
        imagem: "/products/var_bb3a61252b91.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto/tartaruga",
        imagem: "/products/var_d5bcbf7f404f.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-thong",
    name: "Melissa Cozy Thong",
    image: "/products/melissa-cozy-thong.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-thong/0-cdee0168de36.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-thong/1-8f7e1d26b1f5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-thong/2-02a58521f7ee.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-thong/3-41b63201486b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-thong/4-ae7280f15256.jpg"],
    price: 19.99,
    originalPrice: 199.9,
    discount: 90.0,
    description: "A Melissa Cozy Thong entrega praticidade e leveza, além de ser um item indispensável para o dia a dia, ainda combina um mix de materiais que explora diferentes acabamentos no PVC, que unidos, trazem uma estética visual fluida e limpa.",
    variacoes: [
      {
        titulo: "Verde/verde",
        imagem: "/products/var_9c23d4c9c7b2.jpg",
        tipo: "cor"
      },
      {
        titulo: "marrom/vidro casca arroz",
        imagem: "/products/var_bcd4908413d7.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa/rosa",
        imagem: "/products/var_47965d7ba7a1.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto/vidro",
        imagem: "/products/var_618bd02c27a5.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-slide-disney",
    name: "Melissa Cozy Slide + Disney",
    image: "/products/melissa-cozy-slide-disney.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-disney/0-90e57a27bb38.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-disney/1-c29f54baab23.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-disney/2-7bba1f2eb6cf.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-disney/3-049b40bf23f8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-slide-disney/4-0195e076ad53.jpg"],
    price: 24.99,
    originalPrice: 249.9,
    discount: 90.0,
    description: "A Melissa Cozy Slide + Disney é um slide feminino que combina o encanto dos personagens mais queridos da Disney com o conforto funcional da Melissa. Disponível nos personagens Mickey & Friends e Stitch, o modelo aposta em cores marcantes e um visual icônico.Perfeita para o uso cotidiano, a peça conta com sola em EVA leve, estrutura confortável e design aberto que garante praticidade em qualquer rotina, do dia a dia urbano aos momentos de lazer. Esse chinelo slide é uma união de estilo, nostalgia e versatilidade que transforma qualquer look.Principais características:• Collab Melissa x Disney• Personagens queridinhos• Fivela em destaqueEleve seu visual com a magia da Disney e o toque fashion da Melissa com a Melissa Cozy Slide + Disney",
    variacoes: [
      {
        titulo: "Azul/azul",
        imagem: "/products/var_82d0150021b3.jpg",
        tipo: "cor"
      },
      {
        titulo: "preto/multicor",
        imagem: "/products/var_23d928d4c62c.jpg",
        tipo: "cor"
      },
      {
        titulo: "bege/azul",
        imagem: "/products/var_7305942926b7.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cozy-m-lover-beauty",
    name: "Melissa Cozy M-Lover Beauty",
    image: "/products/melissa-cozy-m-lover-beauty.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-beauty/0-df6390da7967.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-beauty/1-e9532e9fa84c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-beauty/2-2833f6f3e7b0.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-beauty/3-ee320717e564.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cozy-m-lover-beauty/4-d4c1bf6dd9d9.jpg"],
    price: 19.99,
    originalPrice: 199.9,
    discount: 90.0,
    description: "Chinelo Slide Melissa Cozy M-Lover BeautyA Melissa Cozy M-Lover Beauty é um chinelo slide feminino que combina conforto absoluto com um design moderno e minimalista. Desenvolvido em Melflex®, material exclusivo da Melissa, o modelo se destaca pelo toe ring (anel para o dedo), detalhe que garante mais estilo e segurança ao caminhar, além de um visual atemporal e sofisticado.Ideal para quem busca praticidade no dia a dia, o chinelo slide Melissa Cozy M-Lover Beauty é perfeito para momentos de descanso, passeios casuais ou looks comfy com um toque fashion. As cores sólidas tornam o modelo versátil e fácil de combinar, enquanto o calce confortável proporciona bem-estar durante o uso prolongado.Principais características:• Toe ring (anel para o dedo)• Cores sólidas e sofisticadas• Assinatura Melissa em relevoFinalize seus looks com conforto e atitude usando a Melissa Cozy M-Lover Beauty, o chinelo slide feminino que une design moderno, praticidade e o DNA fashion da Melissa.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_e9c6c1488b76.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_b4a8f8c7910b.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_2ebdbdbff6ec.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bordo",
        imagem: "/products/var_128f418ee423.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-warm-boot",
    name: "Melissa Warm Boot",
    image: "/products/melissa-warm-boot.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-warm-boot/0-3c63c256bb76.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-warm-boot/1-f7b54df7821a.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-warm-boot/2-9902885aa87d.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-warm-boot/3-cf7fded7ae69.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-warm-boot/4-494bcc40f9c9.jpg"],
    price: 56.99,
    originalPrice: 569.9,
    discount: 90.0,
    description: "Bateu aquele frio? A Melissa Warm Boot é a escolha perfeita para manter os pés aquecidos com muito estilo! Com interior e cano revestidos por pelinhos macios, garante conforto térmico e uma sensação aconchegante. Feita em PVC Melflex e com sola em EVA, combina leveza e resistência para te acompanhar nos dias mais frios. O acabamento sofisticado e os detalhes cuidadosamente trabalhados fazem dela a bota ideal para compor looks cheios de elegância e personalidade.",
    variacoes: [
      {
        titulo: "Preto",
        imagem: "/products/var_e33378674b7b.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_fb0fa7af03ee.jpg",
        tipo: "cor"
      },
      {
        titulo: "Marrom",
        imagem: "/products/var_159ff6ecd39c.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-possession-warm",
    name: "Melissa Possession Warm",
    image: "/products/melissa-possession-warm.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-warm/0-db7375a00e40.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-warm/1-0f99dc678664.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-warm/2-4ebdc85ea10e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-warm/3-51b5aed95754.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-possession-warm/4-211c4d979e9a.jpg"],
    price: 34.99,
    originalPrice: 349.9,
    discount: 90.0,
    description: "Envolva seus pés em conforto e estilo com a Melissa Possession Warm Look! Sua superfície coberta por pelos macios proporciona um toque aconchegante, mantendo o calor sem abrir mão da leveza. Feita em PVC Melflex, combina a durabilidade característica da Melissa com um design irresistível, perfeito para quem busca moda e bem-estar em cada passo.",
    variacoes: [
      {
        titulo: "cinza flocado/bege",
        imagem: "/products/var_e58db370e511.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto Flocado",
        imagem: "/products/var_c45dc4fe3e62.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa flocado",
        imagem: "/products/var_872068d5f3d2.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-flatform-hello-kitty",
    name: "Melissa Flatform + Hello Kitty",
    image: "/products/melissa-flatform-hello-kitty.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flatform-hello-kitty/0-900d0c45b61c.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flatform-hello-kitty/1-ddf6405aabc8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flatform-hello-kitty/2-fc0d2ff6e7d1.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flatform-hello-kitty/3-ed6b287607fc.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flatform-hello-kitty/4-a2b35f3f68c5.jpg"],
    price: 21.99,
    originalPrice: 219.9,
    discount: 90.0,
    description: "Melissa Flatform + Hello KittyA combinação perfeita entre estilo moderno e o charme icônico da Hello Kitty! A Melissa Flatform + Hello Kitty une o design arrojado da plataforma Melissa com a doçura da personagem que conquistou gerações, trazendo um toque lúdico e cheio de personalidade para seus looks.Cada detalhe é pensado para oferecer leveza e maciez a cada passo, graças à tecnologia exclusiva do Melflex®. A flatform proporciona altura na medida certa, com muita praticidade e da versatilidade, ideal para quem quer expressar seu estilo divertido e autêntico em qualquer ocasião.Seja para um passeio descontraído ou para dar aquele destaque especial ao visual, essa flatform é a escolha perfeita para fãs que querem aliar moda, conforto e atitude.Principais características:• Design exclusivo com detalhes da Hello Kitty;• Plataforma que une altura e praticidade;• Produzida em Melflex®, com leveza e maciez;• Visual divertido e cheio de personalidade;• Ideal para looks casuais com um toque especial.Destaque-se com a Melissa Flatform + Hello Kitty, aproveite o máximo de conforto, funcionalidade e atitude.",
    variacoes: [
      {
        titulo: "Bege/preto",
        imagem: "/products/var_c925ace33c11.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto/branco",
        imagem: "/products/var_172e04180550.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "mini-melissa-hip-ballerina-hello-kitty-and-friends-baby",
    name: "Mini Melissa Hip Ballerina + Hello Kitty and Friends Baby",
    image: "/products/mini-melissa-hip-ballerina-hello-kitty-and-friends-baby.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-hip-ballerina-hello-kitty-and-friends-baby/0-a928e2fea87e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-hip-ballerina-hello-kitty-and-friends-baby/1-5697dc0608cc.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-hip-ballerina-hello-kitty-and-friends-baby/2-19c25725578b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-hip-ballerina-hello-kitty-and-friends-baby/3-0557f9531525.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-hip-ballerina-hello-kitty-and-friends-baby/4-09348eaa90f4.jpg"],
    price: 17.99,
    originalPrice: 179.9,
    discount: 90.0,
    description: "Sapatilha Mini Melissa Hip Ballerina + Hello Kitty and Friends BabyDireto do universo Mini Melissa para os pezinhos dos pequenos, a Mini Melissa Hip Ballerina + Hello Kitty and Friends Baby é a mistura perfeita de charme, diversão e liberdade para os babies. Inspirada nas personagens queridinhas Hello Kitty, Cinnamoroll, Kuromi e My Melody, traz detalhes lúdicos que encantam e um design pensado para abraçar os pés com delicadeza.Ela proporciona total liberdade para os primeiros passos, permitindo que os pequenos explorem o mundo com conforto e segurança. As cores vibrantes e o acabamento delicado tornam a sapatilha de bebê a escolha ideal para deixar qualquer look ainda mais fofo e cheio de personalidade.Principais características:• Material leve e flexível;• Design confortável;• Perfeita para o dia a dia Proporcione aos bebês conforto e segurança com a turma da Hello Kitty and Friends com a Melissa Hip Ballerina + Hello Kitty and Friends Baby",
    variacoes: [
      {
        titulo: "Preto/vermelho",
        imagem: "/products/var_b5e4e9807772.jpg",
        tipo: "cor"
      },
      {
        titulo: "lilas perolado",
        imagem: "/products/var_3b0af918adaa.jpg",
        tipo: "cor"
      },
      {
        titulo: "branco/vermelho",
        imagem: "/products/var_78186c5df285.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul perolado",
        imagem: "/products/var_91858bf5ebbd.jpg",
        tipo: "cor"
      },
      {
        titulo: "17/18-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "19-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "20/21-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "22-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "23/24-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "25-10",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "26/27-11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "28-12",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-cute-bag-hello-kitty-special-edition",
    name: "Melissa Cute Bag + Hello Kitty Special Edition",
    image: "/products/melissa-cute-bag-hello-kitty-special-edition.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cute-bag-hello-kitty-special-edition/0-b01c7d67b385.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cute-bag-hello-kitty-special-edition/1-e2f458b24056.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cute-bag-hello-kitty-special-edition/2-c49c111f1aa8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cute-bag-hello-kitty-special-edition/3-826c13c36253.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-cute-bag-hello-kitty-special-edition/4-999339cdb70e.jpg"],
    price: 119.99,
    originalPrice: 1199.9,
    discount: 90.0,
    description: "Melissa Cute Bag + Hello Kitty Special Edition – a peça colecionável A Melissa Cute Bag + Hello Kitty Special Edition é mais que uma bolsa: é um marco estético, técnico e cultural dentro do universo Melissa. Primeiro modelo da marca a receber um acabamento totalmente cromado, ela eleva um dos ícones do portfólio a um novo patamar de sofisticação por meio de um processo premium de metalização aplicado ao policarbonato.Seguindo o movimento global das bolsas rígidas com efeito chrome, a peça combina brilho de alto impacto, fechamento em ímã e presença cênica. Feita para quem busca peças que contam histórias, carregam inovação e se destacam pela irreverência elegante, a Melissa Cute Bag + Hello Kitty Special Edition celebra um encontro entre nostalgia, tecnologia e design de luxo.Principais características:• Edição limitada• Bolsa cromada com acabamento inédito na Melissa• Shape rígido e efeito chrome de alto impacto• Collab com Hello Kitty and FriendsEleve sua coleção com a Melissa Cute Bag + Hello Kitty Special Edition. Uma peça rara que combina moda, arte e inovação em sua forma mais brilhante.",
    variacoes: [
      {
        titulo: "prata",
        imagem: "/products/var_3640a44b3638.jpg",
        tipo: "cor"
      },
      {
        titulo: "ÚNICO",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-flowing-slide-stitch",
    name: "Melissa Flowing Slide + Stitch",
    image: "/products/melissa-flowing-slide-stitch.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flowing-slide-stitch/0-da7f3705c178.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flowing-slide-stitch/1-86d9b7568b2b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flowing-slide-stitch/2-69980807a232.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flowing-slide-stitch/3-fa78398b3641.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-flowing-slide-stitch/4-6e50a0f6b376.jpg"],
    price: 23.99,
    originalPrice: 239.9,
    discount: 90.0,
    description: "A Melissa Flowing Slide + Stitch leva o encanto e a diversão do personagem mais carismático da Disney direto para os seus pés. Com a aplicação do Stitch no cabedal, essa slide combina leveza, conforto e um toque descontraído para os seus looks. Perfeita para quem ama praticidade e estilo com personalidade. Mais características da Melissa Flowing Slide + Stitch:Sola em EVACabedal em plastisol",
    variacoes: [
      {
        titulo: "Azul/azul",
        imagem: "/products/var_86d9b7568b2b.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/azul",
        imagem: "/products/var_9aac78ec7963.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34-5",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35-6",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36-7",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37-8",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38-9",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40-10",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "melissa-free-puff-slide-disney",
    name: "Melissa Free Puff Slide + Disney",
    image: "/products/melissa-free-puff-slide-disney.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-slide-disney/0-f01854ffc595.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-slide-disney/1-b58c3a5bb847.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-slide-disney/2-422b6fa87488.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-slide-disney/3-3d17a2b704c7.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/melissa-free-puff-slide-disney/4-a8ce2555fdae.jpg"],
    price: 24.99,
    originalPrice: 249.9,
    discount: 90.0,
    description: "Chinelo Slide Melissa Free Puff Slide + DisneyA Melissa Free Puff Slide + Disney é um chinelo slide feminino feito em EVA, um material ultraleve e flexível, que proporciona conforto verdadeiro ao unir funcionalidade com o universo lúdico dos personagens mais icônicos da Disney: Mickey, Minnie e Stitch. Essa collab celebra o estilo Kidult, tendência que valoriza elementos nostálgicos como forma de expressão e autenticidade no look.Ideal para momentos de lazer, dias de descanso ou produções casuais com um toque divertido, esse slide combina design moderno com conforto absoluto, sendo uma escolha perfeita para quem busca versatilidade e identidade visual no dia a dia.Principais características:Material EVA, leveza e conforto;Design aberto e anatômico;Personagens clássicos: Mickey, Minnie e Stitch;Estilo Kidult: visual divertido que conecta moda e nostalgiaTransforme sua rotina com um toque de magia e personalidade com a Melissa Free Puff Slide + Disney, o slide feminino que combina conforto, estilo e memória afetiva em uma peça só.",
    variacoes: [
      {
        titulo: "Rosa",
        imagem: "/products/var_b38f01de21a6.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul medio",
        imagem: "/products/var_a8ff48451500.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto",
        imagem: "/products/var_88e53db7da47.jpg",
        tipo: "cor"
      },
      {
        titulo: "Bege",
        imagem: "/products/var_b4218f9a8e4c.jpg",
        tipo: "cor"
      },
      {
        titulo: "33/34",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "35",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "36",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "37",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "38",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "39/40",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "mini-melissa-mix-disney-baby",
    name: "Mini Melissa Mix + Disney Baby",
    image: "/products/mini-melissa-mix-disney-baby.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-mix-disney-baby/0-0fcaa5d104d8.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-mix-disney-baby/1-bb25c36f5e58.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-mix-disney-baby/2-70d3e3e0283e.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-mix-disney-baby/3-117a49e3bf99.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-mix-disney-baby/4-43c5abba1e27.jpg"],
    price: 17.99,
    originalPrice: 179.9,
    discount: 90.0,
    description: "Mini Melissa Mix + Disney BabyA Mini Melissa Mix + Disney Baby é uma papete de bebê feita em Melflex®, material resistente e confortável, com sola em EVA que proporciona leveza e amortecimento. Com tiras em material têxtil ajustável, oferece segurança e facilidade para calçar. Essa papete traz o charme dos personagens icônicos da Disney: Mickey, Minnie e Stitch, unindo conforto, funcionalidade e uma dose de nostalgia para os pequenos.Perfeita para as primeiras aventuras e descobertas dos bebês, essa papete garante um caminhar seguro e confortável, ideal para o dia a dia dos pequenos exploradores.Principais características:Tiras em material têxtil ajustável: calce fácil e seguroDesign com personagens Disney: Mickey, Minnie e StitchFácil de limpar, prática para o uso diárioGaranta conforto, segurança e estilo para seu bebê com a Mini Melissa Mix + Disney Baby, a papete que acompanha cada passo das primeiras descobertas com muito charme e proteção.",
    variacoes: [
      {
        titulo: "rosa/azul",
        imagem: "/products/var_e049e2b5d072.jpg",
        tipo: "cor"
      },
      {
        titulo: "Preto/amarelo",
        imagem: "/products/var_77ade5c5eaff.jpg",
        tipo: "cor"
      },
      {
        titulo: "amarelo/azul",
        imagem: "/products/var_95d4c30ab396.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/vermelho",
        imagem: "/products/var_b2d411b5e37d.jpg",
        tipo: "cor"
      },
      {
        titulo: "17/18",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "19",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "20/21",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "22",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "23/24",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "25",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "26/27",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "28",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "mini-melissa-solar-disney-princess-infantil",
    name: "Mini Melissa Solar + Disney Princess Infantil",
    image: "/products/mini-melissa-solar-disney-princess-infantil.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-solar-disney-princess-infantil/0-0f89f7a04031.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-solar-disney-princess-infantil/1-4934ad158491.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-solar-disney-princess-infantil/2-400f24fce030.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-solar-disney-princess-infantil/3-66cc92e4ed67.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-solar-disney-princess-infantil/4-a10d8bbab165.jpg"],
    price: 19.99,
    originalPrice: 199.9,
    discount: 90.0,
    description: "Mini Melissa Solar + Disney Princess Infantil – Sandália Infantil EncantadaA Mini Melissa Solar + Disney Princess Infantil é a sandália perfeita para as meninas que amam o universo mágico das princesas. Inspirada em personagens icônicas como Ariel, Bela e Cinderela, essa versão traz uma releitura encantadora que combina fantasia, estilo e todo o conforto característico da Melissa.Com um design delicado e sofisticado, o destaque fica por conta do laço com coroa, um charme que deixa o visual arrumadinho e cheio de personalidade. Fabricada em material leve e seguro, conta ainda com palmilha em Greenflex, garantindo maciez, flexibilidade e bem-estar durante todo o dia, ideal para acompanhar as pequenas em passeios, brincadeiras e momentos especiais.Principais características• Princesas Disney• Palmilha confortável, macia e segura• Material leve, resistente e fácil de limparEncante sua pequena com a Mini Melissa Solar + Disney Princess Infantil, uma sandália que une magia, conforto e estilo. Perfeita para transformar cada passo em um momento especial.",
    variacoes: [
      {
        titulo: "bege metalizado",
        imagem: "/products/var_7f8ea157d09c.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul perolado",
        imagem: "/products/var_6e98f3bf30e9.jpg",
        tipo: "cor"
      },
      {
        titulo: "Rosa perolado",
        imagem: "/products/var_66c38975110a.jpg",
        tipo: "cor"
      },
      {
        titulo: "26/27-11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "28-12",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "29-13",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "30-1",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "31-2",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "32-3",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "33-4",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "mini-melissa-ultragirl-disney-baby",
    name: "Mini Melissa Ultragirl + Disney Baby",
    image: "/products/mini-melissa-ultragirl-disney-baby.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-ultragirl-disney-baby/0-96858e3f446b.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-ultragirl-disney-baby/1-9a4e20f73902.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-ultragirl-disney-baby/2-da9d1df3d607.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-ultragirl-disney-baby/3-e4ecc004f077.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-ultragirl-disney-baby/4-6b136a74aa51.jpg"],
    price: 17.99,
    originalPrice: 179.9,
    discount: 90.0,
    description: "Mini Melissa Ultragirl + Disney Baby – Sapatilha de Bebê MelissaA Mini Melissa Ultragirl + Disney Baby é a sapatilha de bebê que une todo o encanto da Disney ao conforto já conhecido da Melissa. Nesta edição especial, a clássica Ultragirl ganha versões inspiradas em Ariel, Ana e Elsa, e Minnie, cada uma com detalhes lúdicos que deixam o visual ainda mais fofo, como a concha aplicada sobre o laço da Ariel, o floco de neve da Elsa e o laço icônico da Minnie.Produzida em Melflex®, material macio, seguro e confortável, essa sapatilha foi pensada para acompanhar os primeiros passinhos com suavidade, além de proporcionar um calce fácil que se adapta bem ao pezinho do bebê. É perfeita para o dia a dia, festinhas, passeios ou qualquer ocasião em que estilo e conforto precisam andar juntos.Principais características• Seguro e fácil de limpar• Collab exclusiva Disney• Detalhes temáticos• Palmilha confortável e cheirinho característico Melissa• Pequena Sereia, Frozen e MinnieTransforme cada passo do seu bebê em um momento mágico com a Mini Melissa Ultragirl + Disney Baby, a sapatilha que combina fofura, conforto e a magia da Disney.",
    variacoes: [
      {
        titulo: "Rosa",
        imagem: "/products/var_f00159179392.jpg",
        tipo: "cor"
      },
      {
        titulo: "verde claro",
        imagem: "/products/var_0c4d8d3a2e26.jpg",
        tipo: "cor"
      },
      {
        titulo: "Azul claro",
        imagem: "/products/var_cca796844964.jpg",
        tipo: "cor"
      },
      {
        titulo: "17/18",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "19",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "20/21",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "22",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "23/24",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "25",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "26/27",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "28",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
  {
    id: "mini-melissa-flowing-slide-disney-infantil",
    name: "Mini Melissa Flowing Slide + Disney Infantil",
    image: "/products/mini-melissa-flowing-slide-disney-infantil.jpg",
    images: ["https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-flowing-slide-disney-infantil/0-b8a695209184.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-flowing-slide-disney-infantil/1-35f6eaf5e0f3.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-flowing-slide-disney-infantil/2-7d028f7eb2d4.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-flowing-slide-disney-infantil/3-d2d9ca1b49b5.jpg", "https://xcofbaxshihrwlsduwpn.supabase.co/storage/v1/object/public/product-images/mini-melissa-flowing-slide-disney-infantil/4-7e95682c3ff1.jpg"],
    price: 21.99,
    originalPrice: 219.9,
    discount: 90.0,
    description: "Chinelo Slide Infantil Mini Melissa Flowing + DisneyA Mini Melissa Flowing + Disney é um slide infantil que une conforto, praticidade e muita personalidade, trazendo o universo mágico da Disney para o dia a dia dos pequenos. Desenvolvida em Melflex®, material sustentável, ela garante leveza, flexibilidade e conforto para acompanhar todas as brincadeiras.Perfeita para o uso diário, passeios e momentos de lazer, a Mini Melissa Flowing + Disney oferece segurança e conforto para os pezinhos, além de um design divertido que conquista crianças e adultos. Com os personagens Disney amados pelas crianças, o Stitch, a Angel e a Ariel, o chinelo slide infantil traz muita cor, diversão e personalidade.Principais características:• Personagens amados: Stitch, Angel e Ariel• Calce fácil• Seguro e fácil de limparEncante os pequenos com a Mini Melissa Flowing + Disney, o slide infantil que combina conforto, praticidade e a magia do mundo Disney em cada passo.",
    variacoes: [
      {
        titulo: "verde/lilas",
        imagem: "/products/var_e7a400825b68.jpg",
        tipo: "cor"
      },
      {
        titulo: "rosa/lilas",
        imagem: "/products/var_96abbf7fc2fa.jpg",
        tipo: "cor"
      },
      {
        titulo: "azul/rosa",
        imagem: "/products/var_5248a11463cc.jpg",
        tipo: "cor"
      },
      {
        titulo: "26/27-11",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "28-12",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "29-13",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "30-1",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "31-2",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "32-3",
        imagem: "",
        tipo: "tamanho"
      },
      {
        titulo: "33-4",
        imagem: "",
        tipo: "tamanho"
      }
    ]
  },
];

export const formatBRL = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
