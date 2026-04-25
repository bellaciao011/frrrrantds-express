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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6863484653664529496/products/cor.39505.39505BM35010_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1025404267787152812/products/cor.39505.39505BM35011_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1409334402689526563/products/39505.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1446124144776690486/products/39505.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5470564830709243190/products/cor.39505.39505BI98112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5651662970403913108/products/cor.39505.39505BI98111_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6024789174762231197/products/cor.39505.39505BI98110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8086334610475281444/products/cor.39505.39505BI98113_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1587430432020966053/products/cor.39505.39505BI98114_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5437532041325638088/products/cor.39505.39505BI98115_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v350565333306925558/products/cor.39505.39505BI98116_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.39505.39505BI98112_o.jpg", "https://www.melissa.com.br/p/melissa-x-beat/cor.39505.39505BI98112_o.jpg", "https://www.melissa.com.br/file/v5470564830709243190/products/cor.39505.39505BI98112_o.jpg", "https://www.melissa.com.br/products/cor.39505.39505BI98111_o.jpg", "https://www.melissa.com.br/p/melissa-x-beat/cor.39505.39505BI98111_o.jpg", "https://www.melissa.com.br/file/v5651662970403913108/products/cor.39505.39505BI98111_o.jpg", "https://www.melissa.com.br/products/cor.39505.39505BI98110_o.jpg", "https://www.melissa.com.br/p/melissa-x-beat/cor.39505.39505BI98110_o.jpg", "https://www.melissa.com.br/file/v6024789174762231197/products/cor.39505.39505BI98110_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4023060901717272019/products/39501.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5057964002199452187/products/39501.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4393051419195942842/products/cor.39501.39501BK42710_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8560131231073208731/products/cor.39501.39501BK42712_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5875173078460683744/products/cor.39501.39501BK42713_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.39501.39501BK42710_o.jpg", "https://www.melissa.com.br/p/melissa-x-rush/cor.39501.39501BK42710_o.jpg", "https://www.melissa.com.br/file/v4393051419195942842/products/cor.39501.39501BK42710_o.jpg", "https://www.melissa.com.br/products/cor.39501.39501BK42712_o.jpg", "https://www.melissa.com.br/p/melissa-x-rush/cor.39501.39501BK42712_o.jpg", "https://www.melissa.com.br/file/v8560131231073208731/products/cor.39501.39501BK42712_o.jpg", "https://www.melissa.com.br/products/cor.39501.39501BK42713_o.jpg", "https://www.melissa.com.br/p/melissa-x-rush/cor.39501.39501BK42713_o.jpg", "https://www.melissa.com.br/file/v5875173078460683744/products/cor.39501.39501BK42713_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v185845532099950877/products/cor.39501.39501BK40210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3132328275253483068/products/cor.39501.39501BK40211_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7890590969769791117/products/cor.39501.39501BK40212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1243077596748125676/products/cor.39501.39501BK40213_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4434459302248786049/products/cor.39501.39501BK40214_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1833678922325018861/products/cor.39501.39501BK40215_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4917299453268766522/products/37971.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7595787366505879540/products/cor.37971.37971BU58010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4529252402360914640/products/cor.37971.37971BU58012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7065379333005880882/products/cor.37971.37971BU58013_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37971.37971BU58010_o.jpg", "https://www.melissa.com.br/p/mini-melissa-welly-toy-story-baby/cor.37971.37971BU58010_o.jpg", "https://www.melissa.com.br/file/v7595787366505879540/products/cor.37971.37971BU58010_o.jpg", "https://www.melissa.com.br/products/cor.37971.37971BU58012_o.jpg", "https://www.melissa.com.br/p/mini-melissa-welly-toy-story-baby/cor.37971.37971BU58012_o.jpg", "https://www.melissa.com.br/file/v4529252402360914640/products/cor.37971.37971BU58012_o.jpg", "https://www.melissa.com.br/products/cor.37971.37971BU58013_o.jpg", "https://www.melissa.com.br/p/mini-melissa-welly-toy-story-baby/cor.37971.37971BU58013_o.jpg", "https://www.melissa.com.br/file/v7065379333005880882/products/cor.37971.37971BU58013_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v216148135299324225/products/cor.37971.37971BU58110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1658776996313710980/products/cor.37971.37971BU58112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7542938562320410149/products/cor.37971.37971BU58113_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37971.37971BU58110_o.jpg", "https://www.melissa.com.br/p/mini-melissa-welly-toy-story-baby/cor.37971.37971BU58110_o.jpg", "https://www.melissa.com.br/file/v216148135299324225/products/cor.37971.37971BU58110_o.jpg", "https://www.melissa.com.br/products/cor.37971.37971BU58112_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2914190830618929670/products/36176.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5105726986097525139/products/36176.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5339465284697371911/products/cor.36176.36176BM87010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3258150697522388423/products/cor.36176.36176BM87011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v495020573053325327/products/cor.36176.36176BM87013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8240339830453160011/products/cor.36176.36176BM87014_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4646862513185031061/products/cor.36176.36176BM87015_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3770755102732433955/products/cor.36176.36176BM87016_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8281015514402902465/products/cor.36176.36176BM87017_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6050606502498276603/products/cor.36176.36176BM87018_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3348044246037554319/products/cor.36176.36176BM87019_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36176.36176BM87010_o.jpg", "https://www.melissa.com.br/p/mini-melissa-hop-bluey-baby/cor.36176.36176BM87010_o.jpg", "https://www.melissa.com.br/file/v5339465284697371911/products/cor.36176.36176BM87010_o.jpg", "https://www.melissa.com.br/products/cor.36176.36176BM87011_o.jpg", "https://www.melissa.com.br/p/mini-melissa-hop-bluey-baby/cor.36176.36176BM87011_o.jpg", "https://www.melissa.com.br/file/v3258150697522388423/products/cor.36176.36176BM87011_o.jpg", "https://www.melissa.com.br/products/cor.36176.36176BM87013_o.jpg", "https://www.melissa.com.br/p/mini-melissa-hop-bluey-baby/cor.36176.36176BM87013_o.jpg", "https://www.melissa.com.br/file/v495020573053325327/products/cor.36176.36176BM87013_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5763843552233056723/products/39510.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4408253936806833254/products/cor.39510.39510BV72310_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v410734136966892458/products/cor.39510.39510BV72312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7581155085255022422/products/cor.39510.39510BV72313_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.39510.39510BV72310_o.jpg", "https://www.melissa.com.br/p/melissa-x-bend/cor.39510.39510BV72310_o.jpg", "https://www.melissa.com.br/file/v4408253936806833254/products/cor.39510.39510BV72310_o.jpg", "https://www.melissa.com.br/products/cor.39510.39510BV72312_o.jpg", "https://www.melissa.com.br/p/melissa-x-bend/cor.39510.39510BV72312_o.jpg", "https://www.melissa.com.br/file/v410734136966892458/products/cor.39510.39510BV72312_o.jpg", "https://www.melissa.com.br/products/cor.39510.39510BV72313_o.jpg", "https://www.melissa.com.br/p/melissa-x-bend/cor.39510.39510BV72313_o.jpg", "https://www.melissa.com.br/file/v7581155085255022422/products/cor.39510.39510BV72313_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8406207298871451399/products/cor.39510.39510BS48110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5169512816298923805/products/cor.39510.39510BS48112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2039914019224036503/products/cor.39510.39510BS48113_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.39510.39510BS48110_o.jpg", "https://www.melissa.com.br/p/melissa-x-bend/cor.39510.39510BS48110_o.jpg", "https://www.melissa.com.br/file/v8406207298871451399/products/cor.39510.39510BS48110_o.jpg", "https://www.melissa.com.br/products/cor.39510.39510BS48112_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5458961561452391977/products/34458.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7683822632478483496/products/34458.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6329295004313821301/products/cor.34458.34458BH57810_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6608783572862431404/products/cor.34458.34458BH57811_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5957001072657654655/products/cor.34458.34458BH57812_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7515138355722249974/products/cor.34458.34458BH57813_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2824707091082344535/products/cor.34458.34458BH57814_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3347926557109081780/products/cor.34458.34458BH57815_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6182145850009045646/products/cor.34458.34458BH57816_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34458.34458BH57810_o.jpg", "https://www.melissa.com.br/p/melissa-x-heat-bag/cor.34458.34458BH57810_o.jpg", "https://www.melissa.com.br/file/v6329295004313821301/products/cor.34458.34458BH57810_o.jpg", "https://www.melissa.com.br/products/cor.34458.34458BH57811_o.jpg", "https://www.melissa.com.br/p/melissa-x-heat-bag/cor.34458.34458BH57811_o.jpg", "https://www.melissa.com.br/file/v6608783572862431404/products/cor.34458.34458BH57811_o.jpg", "https://www.melissa.com.br/products/cor.34458.34458BH57812_o.jpg", "https://www.melissa.com.br/p/melissa-x-heat-bag/cor.34458.34458BH57812_o.jpg", "https://www.melissa.com.br/file/v5957001072657654655/products/cor.34458.34458BH57812_o.jpg", "https://www.melissa.com.br/products/cor.34458.34458BH57813_o.jpg", "https://www.melissa.com.br/p/melissa-x-heat-bag/cor.34458.34458BH57813_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7065426601974100208/products/39507.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7302785232742133001/products/39507.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3004507397870730873/products/cor.39507.39507BR23410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8322953527635012304/products/cor.39507.39507BR23411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9023094523432636537/products/cor.39507.39507BR23412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8275188679626145153/products/cor.39507.39507BR23413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1082700520853913110/products/cor.39507.39507BR23414_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9151794501057211342/products/cor.39507.39507BR23415_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7181181174258620121/products/cor.39507.39507BR23416_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6594463520757395103/products/cor.39507.39507BR23417_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6898231545061648600/products/cor.39507.39507BR23418_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1093575407718390937/products/cor.39507.39507BR23419_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5361652343788121235/products/cor.39507.39507BR23420_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2101770115457652534/products/cor.39507.39507BR23421_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.39507.39507BR23410_o.jpg", "https://www.melissa.com.br/p/melissa-x-loop/cor.39507.39507BR23410_o.jpg", "https://www.melissa.com.br/file/v3004507397870730873/products/cor.39507.39507BR23410_o.jpg", "https://www.melissa.com.br/products/cor.39507.39507BR23411_o.jpg", "https://www.melissa.com.br/p/melissa-x-loop/cor.39507.39507BR23411_o.jpg", "https://www.melissa.com.br/file/v8322953527635012304/products/cor.39507.39507BR23411_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2155150893706405453/products/39500.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2230966190522607553/products/39500.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4809250306855256478/products/cor.39500.39500BG58510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6455084612555104271/products/cor.39500.39500BG58511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5770518563631872565/products/cor.39500.39500BG58513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6818292139877797379/products/cor.39500.39500BG58512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4079189395538683323/products/cor.39500.39500BG58514_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4809250306855256478/products/cor.39500.39500BG58520_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.39500.39500BG58510_o.jpg", "https://www.melissa.com.br/file/v4809250306855256478/products/cor.39500.39500BG58510_o.jpg", "https://www.melissa.com.br/products/cor.39500.39500BG58511_o.jpg", "https://www.melissa.com.br/file/v6455084612555104271/products/cor.39500.39500BG58511_o.jpg", "https://www.melissa.com.br/products/cor.39500.39500BG58513_o.jpg", "https://www.melissa.com.br/file/v5770518563631872565/products/cor.39500.39500BG58513_o.jpg", "https://www.melissa.com.br/products/cor.39500.39500BG58512_o.jpg", "https://www.melissa.com.br/file/v6818292139877797379/products/cor.39500.39500BG58512_o.jpg", "https://www.melissa.com.br/products/cor.39500.39500BG58514_o.jpg", "https://www.melissa.com.br/file/v4079189395538683323/products/cor.39500.39500BG58514_o.jpg", "https://www.melissa.com.br/products/cor.39500.39500BG58520_o.jpg", "https://www.melissa.com.br/file/v4809250306855256478/products/cor.39500.39500BG58520_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2202833516197819573/products/39512.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4078857235823743694/products/39512.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6520247882905947986/products/cor.39512.39512BP63310_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7388244936470354029/products/cor.39512.39512BP63311_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7465051582113466863/products/cor.39512.39512BP63312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9092052945569472810/products/cor.39512.39512BP63313_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.39512.39512BP63310_o.jpg", "https://www.melissa.com.br/p/mini-melissa-x-beat-infantil/cor.39512.39512BP63310_o.jpg", "https://www.melissa.com.br/file/v6520247882905947986/products/cor.39512.39512BP63310_o.jpg", "https://www.melissa.com.br/products/cor.39512.39512BP63311_o.jpg", "https://www.melissa.com.br/p/mini-melissa-x-beat-infantil/cor.39512.39512BP63311_o.jpg", "https://www.melissa.com.br/file/v7388244936470354029/products/cor.39512.39512BP63311_o.jpg", "https://www.melissa.com.br/products/cor.39512.39512BP63312_o.jpg", "https://www.melissa.com.br/p/mini-melissa-x-beat-infantil/cor.39512.39512BP63312_o.jpg", "https://www.melissa.com.br/file/v7465051582113466863/products/cor.39512.39512BP63312_o.jpg", "https://www.melissa.com.br/products/cor.39512.39512BP63313_o.jpg", "https://www.melissa.com.br/p/mini-melissa-x-beat-infantil/cor.39512.39512BP63313_o.jpg", "https://www.melissa.com.br/file/v9092052945569472810/products/cor.39512.39512BP63313_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4765230926925338820/products/cor.39512.39512BP63110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5847378341219850273/products/cor.39512.39512BP63111_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4508349281369133047/products/39511.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7229425899320545919/products/39511.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3551670915454947350/products/cor.39511.39511BQ53910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2812953438107758204/products/cor.39511.39511BQ53912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7457510133889544856/products/cor.39511.39511BQ53913_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.39511.39511BQ53910_o.jpg", "https://www.melissa.com.br/p/mini-melissa-x-beat-baby/cor.39511.39511BQ53910_o.jpg", "https://www.melissa.com.br/file/v3551670915454947350/products/cor.39511.39511BQ53910_o.jpg", "https://www.melissa.com.br/products/cor.39511.39511BQ53912_o.jpg", "https://www.melissa.com.br/p/mini-melissa-x-beat-baby/cor.39511.39511BQ53912_o.jpg", "https://www.melissa.com.br/file/v2812953438107758204/products/cor.39511.39511BQ53912_o.jpg", "https://www.melissa.com.br/products/cor.39511.39511BQ53913_o.jpg", "https://www.melissa.com.br/p/mini-melissa-x-beat-baby/cor.39511.39511BQ53913_o.jpg", "https://www.melissa.com.br/file/v7457510133889544856/products/cor.39511.39511BQ53913_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v38999401465018484/products/cor.39511.39511BQ53710_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2615256705301230857/products/cor.39511.39511BQ53711_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6977081271604480672/products/cor.39511.39511BQ53712_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5257059302823424169/products/cor.39511.39511BQ53713_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.39511.39511BQ53710_o.jpg", "https://www.melissa.com.br/p/mini-melissa-x-beat-baby/cor.39511.39511BQ53710_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7930126111007211868/products/36138.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2623989594703839019/products/36138.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v215839729020374048/products/cor.36138.36138BM10510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3332917132267959263/products/cor.36138.36138BM10511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6099566708131927336/products/cor.36138.36138BM10512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8892460160272085945/products/cor.36138.36138BM10513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8637437268072935415/products/cor.36138.36138BM10514_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36138.36138BM10510_o.jpg", "https://www.melissa.com.br/file/v215839729020374048/products/cor.36138.36138BM10510_o.jpg", "https://www.melissa.com.br/products/cor.36138.36138BM10511_o.jpg", "https://www.melissa.com.br/file/v3332917132267959263/products/cor.36138.36138BM10511_o.jpg", "https://www.melissa.com.br/products/cor.36138.36138BM10512_o.jpg", "https://www.melissa.com.br/file/v6099566708131927336/products/cor.36138.36138BM10512_o.jpg", "https://www.melissa.com.br/products/cor.36138.36138BM10513_o.jpg", "https://www.melissa.com.br/file/v8892460160272085945/products/cor.36138.36138BM10513_o.jpg", "https://www.melissa.com.br/products/cor.36138.36138BM10514_o.jpg", "https://www.melissa.com.br/file/v8637437268072935415/products/cor.36138.36138BM10514_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2755938953452367014/products/cor.36138.36138BR88510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2807135402901505966/products/cor.36138.36138BR88511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2205443394015830195/products/cor.36138.36138BR88512_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5865903041174470031/products/56049BC12310_Original.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3226521219440398930/products/56049.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8393831638178843040/products/cor.56049.560490684412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7284332754462751475/products/cor.56049.560490684411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3226521219440398930/products/cor.56049.560490684410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v584478849832723543/products/cor.56049.560490684413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2111082624376302341/products/cor.56049.560490684414_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v966923398853184419/products/cor.56049.560490684415_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v969203870688459314/products/cor.56049.560490684416_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.56049.560490684412_o.jpg", "https://www.melissa.com.br/p/melissa-x-mood/cor.56049.560490684412_o.jpg", "https://www.melissa.com.br/file/v8393831638178843040/products/cor.56049.560490684412_o.jpg", "https://www.melissa.com.br/products/cor.56049.560490684411_o.jpg", "https://www.melissa.com.br/p/melissa-x-mood/cor.56049.560490684411_o.jpg", "https://www.melissa.com.br/file/v7284332754462751475/products/cor.56049.560490684411_o.jpg", "https://www.melissa.com.br/products/cor.56049.560490684410_o.jpg", "https://www.melissa.com.br/p/melissa-x-mood/cor.56049.560490684410_o.jpg", "https://www.melissa.com.br/file/v3226521219440398930/products/cor.56049.560490684410_o.jpg", "https://www.melissa.com.br/products/cor.56049.560490684413_o.jpg", "https://www.melissa.com.br/p/melissa-x-mood/cor.56049.560490684413_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6756627600634682322/products/39503.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7301939726300536663/products/39503.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6756627600634682322/products/cor.39503.39503BK34610_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7301939726300536663/products/cor.39503.39503BK34611_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4026074827290689751/products/cor.39503.39503BK34612_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8537982955988847628/products/cor.39503.39503BK34613_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9162701712413840252/products/cor.39503.39503BK34614_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1039988489480603161/products/cor.39503.39503BK34615_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.39503.39503BK34610_o.jpg", "https://www.melissa.com.br/p/melissa-x-mood-ii/cor.39503.39503BK34610_o.jpg", "https://www.melissa.com.br/file/v6756627600634682322/products/cor.39503.39503BK34610_o.jpg", "https://www.melissa.com.br/products/cor.39503.39503BK34611_o.jpg", "https://www.melissa.com.br/p/melissa-x-mood-ii/cor.39503.39503BK34611_o.jpg", "https://www.melissa.com.br/file/v7301939726300536663/products/cor.39503.39503BK34611_o.jpg", "https://www.melissa.com.br/products/cor.39503.39503BK34612_o.jpg", "https://www.melissa.com.br/p/melissa-x-mood-ii/cor.39503.39503BK34612_o.jpg", "https://www.melissa.com.br/file/v4026074827290689751/products/cor.39503.39503BK34612_o.jpg", "https://www.melissa.com.br/products/cor.39503.39503BK34613_o.jpg", "https://www.melissa.com.br/p/melissa-x-mood-ii/cor.39503.39503BK34613_o.jpg", "https://www.melissa.com.br/file/v8537982955988847628/products/cor.39503.39503BK34613_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3667789815121468743/products/37874.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1331342463759010641/products/37874.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4172175789474554227/products/cor.37874.37874BS34510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9134373627868533855/products/cor.37874.37874BS34511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6318403403128309816/products/cor.37874.37874BS34512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8648029659686379015/products/cor.37874.37874BS34513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5644593188134444384/products/cor.37874.37874BS34514_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37874.37874BS34510_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-hello-kitty-and-friends/cor.37874.37874BS34510_o.jpg", "https://www.melissa.com.br/file/v4172175789474554227/products/cor.37874.37874BS34510_o.jpg", "https://www.melissa.com.br/products/cor.37874.37874BS34511_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-hello-kitty-and-friends/cor.37874.37874BS34511_o.jpg", "https://www.melissa.com.br/file/v9134373627868533855/products/cor.37874.37874BS34511_o.jpg", "https://www.melissa.com.br/products/cor.37874.37874BS34512_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-hello-kitty-and-friends/cor.37874.37874BS34512_o.jpg", "https://www.melissa.com.br/file/v6318403403128309816/products/cor.37874.37874BS34512_o.jpg", "https://www.melissa.com.br/products/cor.37874.37874BS34513_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-hello-kitty-and-friends/cor.37874.37874BS34513_o.jpg", "https://www.melissa.com.br/file/v8648029659686379015/products/cor.37874.37874BS34513_o.jpg", "https://www.melissa.com.br/products/cor.37874.37874BS34514_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8740419145826431783/products/37876.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6756262706520425627/products/37876.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2590111960409705471/products/cor.37876.37876BS18110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7187984190713090817/products/cor.37876.37876BS18111_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2734330577462723063/products/cor.37876.37876BS18112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3763669038512923561/products/cor.37876.37876BS18113_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v991514680726410946/products/cor.37876.37876BS18114_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37876.37876BS18110_o.jpg", "https://www.melissa.com.br/p/melissa-kick-off-sandal-hello-kitty/cor.37876.37876BS18110_o.jpg", "https://www.melissa.com.br/file/v2590111960409705471/products/cor.37876.37876BS18110_o.jpg", "https://www.melissa.com.br/products/cor.37876.37876BS18111_o.jpg", "https://www.melissa.com.br/p/melissa-kick-off-sandal-hello-kitty/cor.37876.37876BS18111_o.jpg", "https://www.melissa.com.br/file/v7187984190713090817/products/cor.37876.37876BS18111_o.jpg", "https://www.melissa.com.br/products/cor.37876.37876BS18112_o.jpg", "https://www.melissa.com.br/p/melissa-kick-off-sandal-hello-kitty/cor.37876.37876BS18112_o.jpg", "https://www.melissa.com.br/file/v2734330577462723063/products/cor.37876.37876BS18112_o.jpg", "https://www.melissa.com.br/products/cor.37876.37876BS18113_o.jpg", "https://www.melissa.com.br/p/melissa-kick-off-sandal-hello-kitty/cor.37876.37876BS18113_o.jpg", "https://www.melissa.com.br/file/v3763669038512923561/products/cor.37876.37876BS18113_o.jpg", "https://www.melissa.com.br/products/cor.37876.37876BS18114_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6881542673785422280/products/37877.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6190209276883848014/products/37877.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8454770222077878517/products/cor.37877.37877BS33710_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6903977144190388806/products/cor.37877.37877BS33711_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8659659329677014921/products/cor.37877.37877BS33712_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8759238944983458092/products/cor.37877.37877BS33713_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4153382638079489561/products/cor.37877.37877BS33714_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37877.37877BS33710_o.jpg", "https://www.melissa.com.br/p/melissa-possession-hello-kitty-and-friends/cor.37877.37877BS33710_o.jpg", "https://www.melissa.com.br/file/v8454770222077878517/products/cor.37877.37877BS33710_o.jpg", "https://www.melissa.com.br/products/cor.37877.37877BS33711_o.jpg", "https://www.melissa.com.br/p/melissa-possession-hello-kitty-and-friends/cor.37877.37877BS33711_o.jpg", "https://www.melissa.com.br/file/v6903977144190388806/products/cor.37877.37877BS33711_o.jpg", "https://www.melissa.com.br/products/cor.37877.37877BS33712_o.jpg", "https://www.melissa.com.br/p/melissa-possession-hello-kitty-and-friends/cor.37877.37877BS33712_o.jpg", "https://www.melissa.com.br/file/v8659659329677014921/products/cor.37877.37877BS33712_o.jpg", "https://www.melissa.com.br/products/cor.37877.37877BS33713_o.jpg", "https://www.melissa.com.br/p/melissa-possession-hello-kitty-and-friends/cor.37877.37877BS33713_o.jpg", "https://www.melissa.com.br/file/v8759238944983458092/products/cor.37877.37877BS33713_o.jpg", "https://www.melissa.com.br/products/cor.37877.37877BS33714_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5750240947861639820/products/34488.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5290059623391254871/products/34488.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7493528568464181432/products/cor.34488.34488BT98110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4646957963291265338/products/cor.34488.34488BT98111_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7746445162233333360/products/cor.34488.34488BT98112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8036780442607442195/products/cor.34488.34488BT98113_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7535885731150407413/products/cor.34488.34488BT98114_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8528592485334628231/products/cor.34488.34488BT98115_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7169071035182494020/products/cor.34488.34488BT98116_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34488.34488BT98110_o.jpg", "https://www.melissa.com.br/p/melissa-cute-bag-hello-kitty/cor.34488.34488BT98110_o.jpg", "https://www.melissa.com.br/file/v7493528568464181432/products/cor.34488.34488BT98110_o.jpg", "https://www.melissa.com.br/products/cor.34488.34488BT98111_o.jpg", "https://www.melissa.com.br/p/melissa-cute-bag-hello-kitty/cor.34488.34488BT98111_o.jpg", "https://www.melissa.com.br/file/v4646957963291265338/products/cor.34488.34488BT98111_o.jpg", "https://www.melissa.com.br/products/cor.34488.34488BT98112_o.jpg", "https://www.melissa.com.br/p/melissa-cute-bag-hello-kitty/cor.34488.34488BT98112_o.jpg", "https://www.melissa.com.br/file/v7746445162233333360/products/cor.34488.34488BT98112_o.jpg", "https://www.melissa.com.br/products/cor.34488.34488BT98113_o.jpg", "https://www.melissa.com.br/p/melissa-cute-bag-hello-kitty/cor.34488.34488BT98113_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1120106461470341673/products/37875.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3662594123491684793/products/37875.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5121374939314068624/products/cor.37875.37875BS33810_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v681669141733831085/products/cor.37875.37875BS33811_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6779844674954332939/products/cor.37875.37875BS33812_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5238273262301907599/products/cor.37875.37875BS33813_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37875.37875BS33810_o.jpg", "https://www.melissa.com.br/p/mini-melissa-free-platform-slide-hello-kitty-and-friends-infantil/cor.37875.37875BS33810_o.jpg", "https://www.melissa.com.br/file/v5121374939314068624/products/cor.37875.37875BS33810_o.jpg", "https://www.melissa.com.br/products/cor.37875.37875BS33811_o.jpg", "https://www.melissa.com.br/p/mini-melissa-free-platform-slide-hello-kitty-and-friends-infantil/cor.37875.37875BS33811_o.jpg", "https://www.melissa.com.br/file/v681669141733831085/products/cor.37875.37875BS33811_o.jpg", "https://www.melissa.com.br/products/cor.37875.37875BS33812_o.jpg", "https://www.melissa.com.br/p/mini-melissa-free-platform-slide-hello-kitty-and-friends-infantil/cor.37875.37875BS33812_o.jpg", "https://www.melissa.com.br/file/v6779844674954332939/products/cor.37875.37875BS33812_o.jpg", "https://www.melissa.com.br/products/cor.37875.37875BS33813_o.jpg", "https://www.melissa.com.br/p/mini-melissa-free-platform-slide-hello-kitty-and-friends-infantil/cor.37875.37875BS33813_o.jpg", "https://www.melissa.com.br/file/v5238273262301907599/products/cor.37875.37875BS33813_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6721001178209161664/products/cor.37875.37875BS34010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v838313940507556860/products/cor.37875.37875BS34011_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4482746645334278438/products/37873.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7875067413888762722/products/37873.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v975151327005096871/products/cor.37873.37873BS71210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7512691210028290956/products/cor.37873.37873BS71211_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1111513457515086613/products/cor.37873.37873BS71212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3143204812889770006/products/cor.37873.37873BS71213_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37873.37873BS71210_o.jpg", "https://www.melissa.com.br/p/mini-melissa-ultragirl-hello-kitty-baby/cor.37873.37873BS71210_o.jpg", "https://www.melissa.com.br/file/v975151327005096871/products/cor.37873.37873BS71210_o.jpg", "https://www.melissa.com.br/products/cor.37873.37873BS71211_o.jpg", "https://www.melissa.com.br/p/mini-melissa-ultragirl-hello-kitty-baby/cor.37873.37873BS71211_o.jpg", "https://www.melissa.com.br/file/v7512691210028290956/products/cor.37873.37873BS71211_o.jpg", "https://www.melissa.com.br/products/cor.37873.37873BS71212_o.jpg", "https://www.melissa.com.br/p/mini-melissa-ultragirl-hello-kitty-baby/cor.37873.37873BS71212_o.jpg", "https://www.melissa.com.br/file/v1111513457515086613/products/cor.37873.37873BS71212_o.jpg", "https://www.melissa.com.br/products/cor.37873.37873BS71213_o.jpg", "https://www.melissa.com.br/p/mini-melissa-ultragirl-hello-kitty-baby/cor.37873.37873BS71213_o.jpg", "https://www.melissa.com.br/file/v3143204812889770006/products/cor.37873.37873BS71213_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4482746645334278438/products/cor.37873.37873BS72210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7875067413888762722/products/cor.37873.37873BS72211_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v925870568396726293/products/37872.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8308781857295810234/products/37872.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4996008472914317127/products/cor.37872.37872BS13710_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5586439644322485014/products/cor.37872.37872BS13711_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2109532284625278041/products/cor.37872.37872BS13712_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4208396973151721940/products/cor.37872.37872BS13713_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37872.37872BS13710_o.jpg", "https://www.melissa.com.br/p/mini-melissa-hip-hello-kitty-baby/cor.37872.37872BS13710_o.jpg", "https://www.melissa.com.br/file/v4996008472914317127/products/cor.37872.37872BS13710_o.jpg", "https://www.melissa.com.br/products/cor.37872.37872BS13711_o.jpg", "https://www.melissa.com.br/p/mini-melissa-hip-hello-kitty-baby/cor.37872.37872BS13711_o.jpg", "https://www.melissa.com.br/file/v5586439644322485014/products/cor.37872.37872BS13711_o.jpg", "https://www.melissa.com.br/products/cor.37872.37872BS13712_o.jpg", "https://www.melissa.com.br/p/mini-melissa-hip-hello-kitty-baby/cor.37872.37872BS13712_o.jpg", "https://www.melissa.com.br/file/v2109532284625278041/products/cor.37872.37872BS13712_o.jpg", "https://www.melissa.com.br/products/cor.37872.37872BS13713_o.jpg", "https://www.melissa.com.br/p/mini-melissa-hip-hello-kitty-baby/cor.37872.37872BS13713_o.jpg", "https://www.melissa.com.br/file/v4208396973151721940/products/cor.37872.37872BS13713_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2326695863310366318/products/cor.37872.37872BS17010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1666634636965557087/products/cor.37872.37872BS17011_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7593205631002018798/products/34489.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3085994690306482611/products/34489.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7593205631002018798/products/cor.34489.34489BR98110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3085994690306482611/products/cor.34489.34489BR98111_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v254332868615721215/products/cor.34489.34489BR98112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7369836564469125752/products/cor.34489.34489BR98113_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4625077788727987684/products/cor.34489.34489BR98114_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34489.34489BR98110_o.jpg", "https://www.melissa.com.br/p/melissa-charm-hello-kitty-and-friends/cor.34489.34489BR98110_o.jpg", "https://www.melissa.com.br/file/v7593205631002018798/products/cor.34489.34489BR98110_o.jpg", "https://www.melissa.com.br/products/cor.34489.34489BR98111_o.jpg", "https://www.melissa.com.br/p/melissa-charm-hello-kitty-and-friends/cor.34489.34489BR98111_o.jpg", "https://www.melissa.com.br/file/v3085994690306482611/products/cor.34489.34489BR98111_o.jpg", "https://www.melissa.com.br/products/cor.34489.34489BR98112_o.jpg", "https://www.melissa.com.br/p/melissa-charm-hello-kitty-and-friends/cor.34489.34489BR98112_o.jpg", "https://www.melissa.com.br/file/v254332868615721215/products/cor.34489.34489BR98112_o.jpg", "https://www.melissa.com.br/products/cor.34489.34489BR98113_o.jpg", "https://www.melissa.com.br/p/melissa-charm-hello-kitty-and-friends/cor.34489.34489BR98113_o.jpg", "https://www.melissa.com.br/file/v7369836564469125752/products/cor.34489.34489BR98113_o.jpg", "https://www.melissa.com.br/products/cor.34489.34489BR98114_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3606256781829021553/products/36016.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5087923184091457353/products/36016.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4471587624264046136/products/cor.36016.36016BF64510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2793732654175788630/products/cor.36016.36016BF64511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1202244967121462830/products/cor.36016.36016BF64512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2081634910049544554/products/cor.36016.36016BF64513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8286053937679816284/products/cor.36016.36016BF64514_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6011522449915340359/products/cor.36016.36016BF64515_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36016.36016BF64510_o.jpg", "https://www.melissa.com.br/p/melissa-golden/cor.36016.36016BF64510_o.jpg", "https://www.melissa.com.br/file/v4471587624264046136/products/cor.36016.36016BF64510_o.jpg", "https://www.melissa.com.br/products/cor.36016.36016BF64511_o.jpg", "https://www.melissa.com.br/p/melissa-golden/cor.36016.36016BF64511_o.jpg", "https://www.melissa.com.br/file/v2793732654175788630/products/cor.36016.36016BF64511_o.jpg", "https://www.melissa.com.br/products/cor.36016.36016BF64512_o.jpg", "https://www.melissa.com.br/p/melissa-golden/cor.36016.36016BF64512_o.jpg", "https://www.melissa.com.br/file/v1202244967121462830/products/cor.36016.36016BF64512_o.jpg", "https://www.melissa.com.br/products/cor.36016.36016BF64513_o.jpg", "https://www.melissa.com.br/p/melissa-golden/cor.36016.36016BF64513_o.jpg", "https://www.melissa.com.br/file/v2081634910049544554/products/cor.36016.36016BF64513_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2774593495118868828/products/cor.36044.36044BH70210_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8730434212631356925/products/cor.36044.36044BH70212_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2774593495118868828/products/36044.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1271137394303458819/products/cor.36044.36044BH70510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5382800757985888212/products/cor.36044.36044BH70512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6368800839113275624/products/cor.36044.36044BH70513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9073363781983392399/products/cor.36044.36044BH70516_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36044.36044BH70510_o.jpg", "https://www.melissa.com.br/p/melissa-heat-sandal/cor.36044.36044BH70510_o.jpg", "https://www.melissa.com.br/file/v1271137394303458819/products/cor.36044.36044BH70510_o.jpg", "https://www.melissa.com.br/products/cor.36044.36044BH70512_o.jpg", "https://www.melissa.com.br/p/melissa-heat-sandal/cor.36044.36044BH70512_o.jpg", "https://www.melissa.com.br/file/v5382800757985888212/products/cor.36044.36044BH70512_o.jpg", "https://www.melissa.com.br/products/cor.36044.36044BH70513_o.jpg", "https://www.melissa.com.br/p/melissa-heat-sandal/cor.36044.36044BH70513_o.jpg", "https://www.melissa.com.br/file/v6368800839113275624/products/cor.36044.36044BH70513_o.jpg", "https://www.melissa.com.br/products/cor.36044.36044BH70516_o.jpg", "https://www.melissa.com.br/p/melissa-heat-sandal/cor.36044.36044BH70516_o.jpg", "https://www.melissa.com.br/file/v9073363781983392399/products/cor.36044.36044BH70516_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7665979527810318872/products/cor.36044.36044BH70110_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1026530766716772395/products/36047.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5709625219804922125/products/cor.36047.36047BH66512_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6732222663329108440/products/cor.36047.36047BH66210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1848222466782458077/products/cor.36047.36047BH66212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1305069886755258108/products/cor.36047.36047BH66213_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1885254242286278713/products/cor.36047.36047BH66215_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36047.36047BH66210_o.jpg", "https://www.melissa.com.br/p/melissa-mare-platform/cor.36047.36047BH66210_o.jpg", "https://www.melissa.com.br/file/v6732222663329108440/products/cor.36047.36047BH66210_o.jpg", "https://www.melissa.com.br/products/cor.36047.36047BH66212_o.jpg", "https://www.melissa.com.br/p/melissa-mare-platform/cor.36047.36047BH66212_o.jpg", "https://www.melissa.com.br/file/v1848222466782458077/products/cor.36047.36047BH66212_o.jpg", "https://www.melissa.com.br/products/cor.36047.36047BH66213_o.jpg", "https://www.melissa.com.br/p/melissa-mare-platform/cor.36047.36047BH66213_o.jpg", "https://www.melissa.com.br/file/v1305069886755258108/products/cor.36047.36047BH66213_o.jpg", "https://www.melissa.com.br/products/cor.36047.36047BH66215_o.jpg", "https://www.melissa.com.br/p/melissa-mare-platform/cor.36047.36047BH66215_o.jpg", "https://www.melissa.com.br/file/v1885254242286278713/products/cor.36047.36047BH66215_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1026530766716772395/products/cor.36047.36047BH66510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3983782921189235036/products/cor.36047.36047BH66513_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1071598850381034826/products/cor.36977.36977BJ86910_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1583622746662828511/products/cor.36977.36977BJ86911_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v561268784777319745/products/cor.36977.36977BJ86410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6907767296865848316/products/cor.36977.36977BJ86411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8593986819791650676/products/cor.36977.36977BJ86412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v26660931483675443/products/cor.36977.36977BJ86413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4029706186042266030/products/cor.36977.36977BJ86414_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36977.36977BJ86410_o.jpg", "https://www.melissa.com.br/p/melissa-flatform-mlover-deluxe/cor.36977.36977BJ86410_o.jpg", "https://www.melissa.com.br/file/v561268784777319745/products/cor.36977.36977BJ86410_o.jpg", "https://www.melissa.com.br/products/cor.36977.36977BJ86411_o.jpg", "https://www.melissa.com.br/p/melissa-flatform-mlover-deluxe/cor.36977.36977BJ86411_o.jpg", "https://www.melissa.com.br/file/v6907767296865848316/products/cor.36977.36977BJ86411_o.jpg", "https://www.melissa.com.br/products/cor.36977.36977BJ86412_o.jpg", "https://www.melissa.com.br/p/melissa-flatform-mlover-deluxe/cor.36977.36977BJ86412_o.jpg", "https://www.melissa.com.br/file/v8593986819791650676/products/cor.36977.36977BJ86412_o.jpg", "https://www.melissa.com.br/products/cor.36977.36977BJ86413_o.jpg", "https://www.melissa.com.br/p/melissa-flatform-mlover-deluxe/cor.36977.36977BJ86413_o.jpg", "https://www.melissa.com.br/file/v26660931483675443/products/cor.36977.36977BJ86413_o.jpg", "https://www.melissa.com.br/products/cor.36977.36977BJ86414_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8809144433772390161/products/cor.36122.36122BM56810_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v552550463191835778/products/cor.36122.36122BM56811_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v693805027195806566/products/cor.36122.36122BH95410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4364822440875275316/products/cor.36122.36122BH95411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6227581689627563666/products/cor.36122.36122BH95412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6156246584803285299/products/cor.36122.36122BH95413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4302647597938510788/products/cor.36122.36122BH95414_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36122.36122BH95410_o.jpg", "https://www.melissa.com.br/p/melissa-anastasia/cor.36122.36122BH95410_o.jpg", "https://www.melissa.com.br/file/v693805027195806566/products/cor.36122.36122BH95410_o.jpg", "https://www.melissa.com.br/products/cor.36122.36122BH95411_o.jpg", "https://www.melissa.com.br/p/melissa-anastasia/cor.36122.36122BH95411_o.jpg", "https://www.melissa.com.br/file/v4364822440875275316/products/cor.36122.36122BH95411_o.jpg", "https://www.melissa.com.br/products/cor.36122.36122BH95412_o.jpg", "https://www.melissa.com.br/p/melissa-anastasia/cor.36122.36122BH95412_o.jpg", "https://www.melissa.com.br/file/v6227581689627563666/products/cor.36122.36122BH95412_o.jpg", "https://www.melissa.com.br/products/cor.36122.36122BH95413_o.jpg", "https://www.melissa.com.br/p/melissa-anastasia/cor.36122.36122BH95413_o.jpg", "https://www.melissa.com.br/file/v6156246584803285299/products/cor.36122.36122BH95413_o.jpg", "https://www.melissa.com.br/products/cor.36122.36122BH95414_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1761013270598875844/products/cor.33818.33818AH84712_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2253185710591817534/products/cor.33818.33818AH84710_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5206072931068604556/products/33818.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7121289617029485207/products/33818.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7418408140160804778/products/cor.33818.33818AH87110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7121289617029485207/products/cor.33818.33818AH87111_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2554715061844114166/products/cor.33818.33818AH87112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7785603465888618607/products/cor.33818.33818AH87113_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5716504269289796104/products/cor.33818.33818AH87114_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2807928260520405490/products/cor.33818.33818AH87115_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.33818.33818AH87110_o.jpg", "https://www.melissa.com.br/p/melissa-party-heel/cor.33818.33818AH87110_o.jpg", "https://www.melissa.com.br/file/v7418408140160804778/products/cor.33818.33818AH87110_o.jpg", "https://www.melissa.com.br/products/cor.33818.33818AH87111_o.jpg", "https://www.melissa.com.br/p/melissa-party-heel/cor.33818.33818AH87111_o.jpg", "https://www.melissa.com.br/file/v7121289617029485207/products/cor.33818.33818AH87111_o.jpg", "https://www.melissa.com.br/products/cor.33818.33818AH87112_o.jpg", "https://www.melissa.com.br/p/melissa-party-heel/cor.33818.33818AH87112_o.jpg", "https://www.melissa.com.br/file/v2554715061844114166/products/cor.33818.33818AH87112_o.jpg", "https://www.melissa.com.br/products/cor.33818.33818AH87113_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2119231796442987611/products/cor.31953.319535071512_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2101854483605893610/products/cor.31953.319535071510_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1703200350782983272/products/31953.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v44496143332829851/products/31953.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7070278963018326705/products/cor.31953.31953AK48510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7406475168338396035/products/cor.31953.31953AK48511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2473926011072446957/products/cor.31953.31953AK48512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5653784448784979685/products/cor.31953.31953AK48513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2421205405947531572/products/cor.31953.31953AK48514_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.31953.31953AK48510_o.jpg", "https://www.melissa.com.br/p/melissa-aranha-quadrada/cor.31953.31953AK48510_o.jpg", "https://www.melissa.com.br/file/v7070278963018326705/products/cor.31953.31953AK48510_o.jpg", "https://www.melissa.com.br/products/cor.31953.31953AK48511_o.jpg", "https://www.melissa.com.br/p/melissa-aranha-quadrada/cor.31953.31953AK48511_o.jpg", "https://www.melissa.com.br/file/v7406475168338396035/products/cor.31953.31953AK48511_o.jpg", "https://www.melissa.com.br/products/cor.31953.31953AK48512_o.jpg", "https://www.melissa.com.br/p/melissa-aranha-quadrada/cor.31953.31953AK48512_o.jpg", "https://www.melissa.com.br/file/v2473926011072446957/products/cor.31953.31953AK48512_o.jpg", "https://www.melissa.com.br/products/cor.31953.31953AK48513_o.jpg", "https://www.melissa.com.br/p/melissa-aranha-quadrada/cor.31953.31953AK48513_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6235173964949530873/products/cor.32548.32548AP40512_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7101532512215021724/products/cor.32548.32548AP40510_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4893398336246380959/products/32548.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4166066765612269699/products/32548.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4893398336246380959/products/cor.32548.325485059610_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4956811239949081737/products/cor.32548.325485059612_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3922856182733736427/products/cor.32548.325485059613_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.32548.325485059610_o.jpg", "https://www.melissa.com.br/p/melissa-kick-off/cor.32548.325485059610_o.jpg", "https://www.melissa.com.br/file/v4893398336246380959/products/cor.32548.325485059610_o.jpg", "https://www.melissa.com.br/products/cor.32548.325485059612_o.jpg", "https://www.melissa.com.br/p/melissa-kick-off/cor.32548.325485059612_o.jpg", "https://www.melissa.com.br/file/v4956811239949081737/products/cor.32548.325485059612_o.jpg", "https://www.melissa.com.br/products/cor.32548.325485059613_o.jpg", "https://www.melissa.com.br/p/melissa-kick-off/cor.32548.325485059613_o.jpg", "https://www.melissa.com.br/file/v3922856182733736427/products/cor.32548.325485059613_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2071296944354361213/general/B2C_MelissaBR_NoImage.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1073769002038977638/products/cor.32676.326760137511_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3303237433154969066/products/cor.32676.326760137512_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1669602884676431853/products/32676.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4205775929731661166/products/32676.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4461799918913293917/products/cor.32676.326765329810_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8549345882513208806/products/cor.32676.326765329811_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1125724550259065465/products/cor.32676.326765329812_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.32676.326765329810_o.jpg", "https://www.melissa.com.br/p/melissa-stellar-ii/cor.32676.326765329810_o.jpg", "https://www.melissa.com.br/file/v4461799918913293917/products/cor.32676.326765329810_o.jpg", "https://www.melissa.com.br/products/cor.32676.326765329811_o.jpg", "https://www.melissa.com.br/p/melissa-stellar-ii/cor.32676.326765329811_o.jpg", "https://www.melissa.com.br/file/v8549345882513208806/products/cor.32676.326765329811_o.jpg", "https://www.melissa.com.br/products/cor.32676.326765329812_o.jpg", "https://www.melissa.com.br/p/melissa-stellar-ii/cor.32676.326765329812_o.jpg", "https://www.melissa.com.br/file/v1125724550259065465/products/cor.32676.326765329812_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2144038235887151582/products/cor.32676.326765229210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1073593051584400235/products/cor.32676.326765229211_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5774595425870548404/products/cor.32676.326765229212_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.32676.326765229210_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7261346033720744540/products/cor.32822.32822AO27410_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3632664364136342918/products/cor.32822.32822AO27412_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6928064202905670417/products/32822.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7965415433146781330/products/32822.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5694929732929755154/products/cor.32822.328225198910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1684149055847975225/products/cor.32822.328225198911_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5925275985531578085/products/cor.32822.328225198912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7451035050440617090/products/cor.32822.328225198913_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.32822.328225198910_o.jpg", "https://www.melissa.com.br/p/melissa-coturno/cor.32822.328225198910_o.jpg", "https://www.melissa.com.br/file/v5694929732929755154/products/cor.32822.328225198910_o.jpg", "https://www.melissa.com.br/products/cor.32822.328225198911_o.jpg", "https://www.melissa.com.br/p/melissa-coturno/cor.32822.328225198911_o.jpg", "https://www.melissa.com.br/file/v1684149055847975225/products/cor.32822.328225198911_o.jpg", "https://www.melissa.com.br/products/cor.32822.328225198912_o.jpg", "https://www.melissa.com.br/p/melissa-coturno/cor.32822.328225198912_o.jpg", "https://www.melissa.com.br/file/v5925275985531578085/products/cor.32822.328225198912_o.jpg", "https://www.melissa.com.br/products/cor.32822.328225198913_o.jpg", "https://www.melissa.com.br/p/melissa-coturno/cor.32822.328225198913_o.jpg", "https://www.melissa.com.br/file/v7451035050440617090/products/cor.32822.328225198913_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4207500582733234975/products/328985149210.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8827412508922343134/products/328985149212.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8407935145089605120/products/32898.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6998359916667742674/products/32898.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6589771435823020956/products/cor.32898.328985059610_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4436685365350653636/products/cor.32898.328985059611_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v856125577142926368/products/cor.32898.328985059612_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2731075232031269665/products/cor.32898.328985059613_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.32898.328985059610_o.jpg", "https://www.melissa.com.br/p/melissa-street/cor.32898.328985059610_o.jpg", "https://www.melissa.com.br/file/v6589771435823020956/products/cor.32898.328985059610_o.jpg", "https://www.melissa.com.br/products/cor.32898.328985059611_o.jpg", "https://www.melissa.com.br/p/melissa-street/cor.32898.328985059611_o.jpg", "https://www.melissa.com.br/file/v4436685365350653636/products/cor.32898.328985059611_o.jpg", "https://www.melissa.com.br/products/cor.32898.328985059612_o.jpg", "https://www.melissa.com.br/p/melissa-street/cor.32898.328985059612_o.jpg", "https://www.melissa.com.br/file/v856125577142926368/products/cor.32898.328985059612_o.jpg", "https://www.melissa.com.br/products/cor.32898.328985059613_o.jpg", "https://www.melissa.com.br/p/melissa-street/cor.32898.328985059613_o.jpg", "https://www.melissa.com.br/file/v2731075232031269665/products/cor.32898.328985059613_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1174413161243610656/products/cor.32938.329380193612_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3588231551510640841/products/cor.32938.329380193610_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7291432507026721594/products/32938.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1987655719280481697/products/32938.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v540593101635098844/products/cor.32938.329380127610_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3089094018024438228/products/cor.32938.329380127611_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8446379223773791459/products/cor.32938.329380127612_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2601890571027238797/products/cor.32938.329380127613_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.32938.329380127610_o.jpg", "https://www.melissa.com.br/p/melissa-ultragirl-basic/cor.32938.329380127610_o.jpg", "https://www.melissa.com.br/file/v540593101635098844/products/cor.32938.329380127610_o.jpg", "https://www.melissa.com.br/products/cor.32938.329380127611_o.jpg", "https://www.melissa.com.br/p/melissa-ultragirl-basic/cor.32938.329380127611_o.jpg", "https://www.melissa.com.br/file/v3089094018024438228/products/cor.32938.329380127611_o.jpg", "https://www.melissa.com.br/products/cor.32938.329380127612_o.jpg", "https://www.melissa.com.br/p/melissa-ultragirl-basic/cor.32938.329380127612_o.jpg", "https://www.melissa.com.br/file/v8446379223773791459/products/cor.32938.329380127612_o.jpg", "https://www.melissa.com.br/products/cor.32938.329380127613_o.jpg", "https://www.melissa.com.br/p/melissa-ultragirl-basic/cor.32938.329380127613_o.jpg", "https://www.melissa.com.br/file/v2601890571027238797/products/cor.32938.329380127613_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3728199349309703436/products/33594AP87112.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v719050510418696588/products/33594AP87110.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3065834831763946356/products/33594.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3328799576867737116/products/33594.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3065834831763946356/products/cor.33594.33594AD45310_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3278149718253167313/products/cor.33594.33594AD45312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2247989002328383427/products/cor.33594.33594AD45313_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.33594.33594AD45310_o.jpg", "https://www.melissa.com.br/p/melissa-cosmo-boot/cor.33594.33594AD45310_o.jpg", "https://www.melissa.com.br/file/v3065834831763946356/products/cor.33594.33594AD45310_o.jpg", "https://www.melissa.com.br/products/cor.33594.33594AD45312_o.jpg", "https://www.melissa.com.br/p/melissa-cosmo-boot/cor.33594.33594AD45312_o.jpg", "https://www.melissa.com.br/file/v3278149718253167313/products/cor.33594.33594AD45312_o.jpg", "https://www.melissa.com.br/products/cor.33594.33594AD45313_o.jpg", "https://www.melissa.com.br/p/melissa-cosmo-boot/cor.33594.33594AD45313_o.jpg", "https://www.melissa.com.br/file/v2247989002328383427/products/cor.33594.33594AD45313_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8218961514496476201/products/cor.33594.33594AD46010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1443287397226520668/products/cor.33594.33594AD46011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1812911489979540227/products/cor.33594.33594AD46012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7526924592440732297/products/cor.33594.33594AD46013_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7983956591864823557/products/cor.33909.33909AP59512_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6631412964272026856/products/cor.33909.33909AP59510_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v843663780083424848/products/33909.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8661562239902262560/products/33909.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2929420512992029683/products/cor.33909.33909AP59310_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1245518512618077775/products/cor.33909.33909AP59312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3960499079321905036/products/cor.33909.33909AP59313_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1871154831045664699/products/cor.33909.33909AP59320_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5915286641796100852/products/cor.33909.33909AP59321_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.33909.33909AP59310_o.jpg", "https://www.melissa.com.br/p/melissa-player-sneaker/cor.33909.33909AP59310_o.jpg", "https://www.melissa.com.br/file/v2929420512992029683/products/cor.33909.33909AP59310_o.jpg", "https://www.melissa.com.br/products/cor.33909.33909AP59312_o.jpg", "https://www.melissa.com.br/p/melissa-player-sneaker/cor.33909.33909AP59312_o.jpg", "https://www.melissa.com.br/file/v1245518512618077775/products/cor.33909.33909AP59312_o.jpg", "https://www.melissa.com.br/products/cor.33909.33909AP59313_o.jpg", "https://www.melissa.com.br/p/melissa-player-sneaker/cor.33909.33909AP59313_o.jpg", "https://www.melissa.com.br/file/v3960499079321905036/products/cor.33909.33909AP59313_o.jpg", "https://www.melissa.com.br/products/cor.33909.33909AP59320_o.jpg", "https://www.melissa.com.br/p/melissa-player-sneaker/cor.33909.33909AP59320_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3787198283917192309/products/cor.33914.33914AR43710_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4364863665787704263/products/cor.33914.33914AR43712_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2349472183923264492/products/33914.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7847453658792543186/products/33914.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5368812565378918308/products/cor.33914.33914AO48510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7182107491178278456/products/cor.33914.33914AO48511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6214197005778398773/products/cor.33914.33914AO48512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5612359462415703683/products/cor.33914.33914AO48513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3244912960391570858/products/cor.33914.33914AO48514_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3940489262438248381/products/cor.33914.33914AO48520_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.33914.33914AO48510_o.jpg", "https://www.melissa.com.br/p/melissa-royal/cor.33914.33914AO48510_o.jpg", "https://www.melissa.com.br/file/v5368812565378918308/products/cor.33914.33914AO48510_o.jpg", "https://www.melissa.com.br/products/cor.33914.33914AO48511_o.jpg", "https://www.melissa.com.br/p/melissa-royal/cor.33914.33914AO48511_o.jpg", "https://www.melissa.com.br/file/v7182107491178278456/products/cor.33914.33914AO48511_o.jpg", "https://www.melissa.com.br/products/cor.33914.33914AO48512_o.jpg", "https://www.melissa.com.br/p/melissa-royal/cor.33914.33914AO48512_o.jpg", "https://www.melissa.com.br/file/v6214197005778398773/products/cor.33914.33914AO48512_o.jpg", "https://www.melissa.com.br/products/cor.33914.33914AO48513_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2946455643644312992/products/cor.35785.35785AX05310_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v115455566990344708/products/cor.35785.35785AX05311_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5609927032824740493/products/35785.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1891664280339072131/products/35785.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4238090485122505866/products/cor.35785.35785AX05312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2841382963326951657/products/cor.35785.35785AX05313_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1084937887084914147/products/cor.35785.35785AX05314_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35785.35785AX05310_o.jpg", "https://www.melissa.com.br/p/melissa-soft-ballerina/cor.35785.35785AX05310_o.jpg", "https://www.melissa.com.br/file/v2946455643644312992/products/cor.35785.35785AX05310_o.jpg", "https://www.melissa.com.br/products/cor.35785.35785AX05311_o.jpg", "https://www.melissa.com.br/p/melissa-soft-ballerina/cor.35785.35785AX05311_o.jpg", "https://www.melissa.com.br/file/v115455566990344708/products/cor.35785.35785AX05311_o.jpg", "https://www.melissa.com.br/products/cor.35785.35785AX05312_o.jpg", "https://www.melissa.com.br/p/melissa-soft-ballerina/cor.35785.35785AX05312_o.jpg", "https://www.melissa.com.br/file/v4238090485122505866/products/cor.35785.35785AX05312_o.jpg", "https://www.melissa.com.br/products/cor.35785.35785AX05313_o.jpg", "https://www.melissa.com.br/p/melissa-soft-ballerina/cor.35785.35785AX05313_o.jpg", "https://www.melissa.com.br/file/v2841382963326951657/products/cor.35785.35785AX05313_o.jpg", "https://www.melissa.com.br/products/cor.35785.35785AX05314_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v826237317080217564/products/35758.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6429469360870921577/products/35758.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2095351341585495724/products/cor.35758.35758AT88810_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4499218131739896433/products/cor.35758.35758AT88811_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2396616552487161676/products/cor.35758.35758AT88812_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v806022413250016606/products/cor.35758.35758AT88814_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35758.35758AT88810_o.jpg", "https://www.melissa.com.br/p/melissa-possession-glitter/cor.35758.35758AT88810_o.jpg", "https://www.melissa.com.br/file/v2095351341585495724/products/cor.35758.35758AT88810_o.jpg", "https://www.melissa.com.br/products/cor.35758.35758AT88811_o.jpg", "https://www.melissa.com.br/p/melissa-possession-glitter/cor.35758.35758AT88811_o.jpg", "https://www.melissa.com.br/file/v4499218131739896433/products/cor.35758.35758AT88811_o.jpg", "https://www.melissa.com.br/products/cor.35758.35758AT88812_o.jpg", "https://www.melissa.com.br/p/melissa-possession-glitter/cor.35758.35758AT88812_o.jpg", "https://www.melissa.com.br/file/v2396616552487161676/products/cor.35758.35758AT88812_o.jpg", "https://www.melissa.com.br/products/cor.35758.35758AT88814_o.jpg", "https://www.melissa.com.br/p/melissa-possession-glitter/cor.35758.35758AT88814_o.jpg", "https://www.melissa.com.br/file/v806022413250016606/products/cor.35758.35758AT88814_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v826237317080217564/products/cor.35758.35758AT88910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6429469360870921577/products/cor.35758.35758AT88911_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1001886156850346425/products/33915.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6541679326732837749/products/33915.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v894916726514178353/products/cor.33915.33915BE18910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4314588029879483353/products/cor.33915.33915BE18911_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4789720067227333185/products/cor.33915.33915BE18912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2136820017963475987/products/cor.33915.33915BE18913_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.33915.33915BE18910_o.jpg", "https://www.melissa.com.br/p/melissa-float/cor.33915.33915BE18910_o.jpg", "https://www.melissa.com.br/file/v894916726514178353/products/cor.33915.33915BE18910_o.jpg", "https://www.melissa.com.br/products/cor.33915.33915BE18911_o.jpg", "https://www.melissa.com.br/p/melissa-float/cor.33915.33915BE18911_o.jpg", "https://www.melissa.com.br/file/v4314588029879483353/products/cor.33915.33915BE18911_o.jpg", "https://www.melissa.com.br/products/cor.33915.33915BE18912_o.jpg", "https://www.melissa.com.br/p/melissa-float/cor.33915.33915BE18912_o.jpg", "https://www.melissa.com.br/file/v4789720067227333185/products/cor.33915.33915BE18912_o.jpg", "https://www.melissa.com.br/products/cor.33915.33915BE18913_o.jpg", "https://www.melissa.com.br/p/melissa-float/cor.33915.33915BE18913_o.jpg", "https://www.melissa.com.br/file/v2136820017963475987/products/cor.33915.33915BE18913_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2855351556722017828/products/cor.33915.33915AO72210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7622987430348142011/products/cor.33915.33915AO72211_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5593217099860182464/products/cor.35804.35804AV67312_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1215064507138923732/products/cor.35804.35804AV67310_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7477153836704561844/products/35804.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4454522839724436024/products/35804.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4454522839724436024/products/cor.35804.35804AV67311_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8137126254662029522/products/cor.35804.35804AV67313_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8702621920240563690/products/cor.35804.35804AV67314_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2703174260744492916/products/cor.35804.35804AV67315_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35804.35804AV67310_o.jpg", "https://www.melissa.com.br/p/melissa-possession-heel/cor.35804.35804AV67310_o.jpg", "https://www.melissa.com.br/file/v1215064507138923732/products/cor.35804.35804AV67310_o.jpg", "https://www.melissa.com.br/products/cor.35804.35804AV67311_o.jpg", "https://www.melissa.com.br/p/melissa-possession-heel/cor.35804.35804AV67311_o.jpg", "https://www.melissa.com.br/file/v4454522839724436024/products/cor.35804.35804AV67311_o.jpg", "https://www.melissa.com.br/products/cor.35804.35804AV67312_o.jpg", "https://www.melissa.com.br/p/melissa-possession-heel/cor.35804.35804AV67312_o.jpg", "https://www.melissa.com.br/file/v5593217099860182464/products/cor.35804.35804AV67312_o.jpg", "https://www.melissa.com.br/products/cor.35804.35804AV67313_o.jpg", "https://www.melissa.com.br/p/melissa-possession-heel/cor.35804.35804AV67313_o.jpg", "https://www.melissa.com.br/file/v8137126254662029522/products/cor.35804.35804AV67313_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7382413960179978976/products/35791.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v953040872111222608/products/cor.35791.35791AV42012_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4344052735207511617/products/35791.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3726365452399751677/products/cor.35791.35791AV42010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3845717953509585869/products/cor.35791.35791AV42013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4117678517457570125/products/cor.35791.35791AV42014_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35791.35791AV42010_o.jpg", "https://www.melissa.com.br/p/melissa-ella/cor.35791.35791AV42010_o.jpg", "https://www.melissa.com.br/file/v3726365452399751677/products/cor.35791.35791AV42010_o.jpg", "https://www.melissa.com.br/products/cor.35791.35791AV42012_o.jpg", "https://www.melissa.com.br/p/melissa-ella/cor.35791.35791AV42012_o.jpg", "https://www.melissa.com.br/file/v953040872111222608/products/cor.35791.35791AV42012_o.jpg", "https://www.melissa.com.br/products/cor.35791.35791AV42013_o.jpg", "https://www.melissa.com.br/p/melissa-ella/cor.35791.35791AV42013_o.jpg", "https://www.melissa.com.br/file/v3845717953509585869/products/cor.35791.35791AV42013_o.jpg", "https://www.melissa.com.br/products/cor.35791.35791AV42014_o.jpg", "https://www.melissa.com.br/p/melissa-ella/cor.35791.35791AV42014_o.jpg", "https://www.melissa.com.br/file/v4117678517457570125/products/cor.35791.35791AV42014_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4909287625782327794/products/cor.35791.35791AV41910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v169271499893234864/products/cor.35791.35791AV41911_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3316450337567970440/products/cor.35858.35858BE39910_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5257370031100199678/products/cor.35858.35858BE39911_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2315653174786152850/products/35858.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v999207011313578012/products/35858.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6947291324558615900/products/cor.35858.35858AW17310_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v820172536523416772/products/cor.35858.35858AW17311_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2125533399997563201/products/cor.35858.35858AW17312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5790310881983128954/products/cor.35858.35858AW17313_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35858.35858AW17310_o.jpg", "https://www.melissa.com.br/p/melissa-flatform-mlover/cor.35858.35858AW17310_o.jpg", "https://www.melissa.com.br/file/v6947291324558615900/products/cor.35858.35858AW17310_o.jpg", "https://www.melissa.com.br/products/cor.35858.35858AW17311_o.jpg", "https://www.melissa.com.br/p/melissa-flatform-mlover/cor.35858.35858AW17311_o.jpg", "https://www.melissa.com.br/file/v820172536523416772/products/cor.35858.35858AW17311_o.jpg", "https://www.melissa.com.br/products/cor.35858.35858AW17312_o.jpg", "https://www.melissa.com.br/p/melissa-flatform-mlover/cor.35858.35858AW17312_o.jpg", "https://www.melissa.com.br/file/v2125533399997563201/products/cor.35858.35858AW17312_o.jpg", "https://www.melissa.com.br/products/cor.35858.35858AW17313_o.jpg", "https://www.melissa.com.br/p/melissa-flatform-mlover/cor.35858.35858AW17313_o.jpg", "https://www.melissa.com.br/file/v5790310881983128954/products/cor.35858.35858AW17313_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7775057716534221661/products/34365.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8100665824153469422/products/34365.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8357202884982196357/products/cor.34365.34365AM60610_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6689110938036532933/products/cor.34365.34365AM60611_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6953685436746805709/products/cor.34365.34365AM60612_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5674683696039092287/products/cor.34365.34365AM60613_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2512768840202658184/products/cor.34365.34365AM60614_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4242119061372440133/products/cor.34365.34365AM60615_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34365.34365AM60610_o.jpg", "https://www.melissa.com.br/p/melissa-dulce-bag/cor.34365.34365AM60610_o.jpg", "https://www.melissa.com.br/file/v8357202884982196357/products/cor.34365.34365AM60610_o.jpg", "https://www.melissa.com.br/products/cor.34365.34365AM60611_o.jpg", "https://www.melissa.com.br/p/melissa-dulce-bag/cor.34365.34365AM60611_o.jpg", "https://www.melissa.com.br/file/v6689110938036532933/products/cor.34365.34365AM60611_o.jpg", "https://www.melissa.com.br/products/cor.34365.34365AM60612_o.jpg", "https://www.melissa.com.br/p/melissa-dulce-bag/cor.34365.34365AM60612_o.jpg", "https://www.melissa.com.br/file/v6953685436746805709/products/cor.34365.34365AM60612_o.jpg", "https://www.melissa.com.br/products/cor.34365.34365AM60613_o.jpg", "https://www.melissa.com.br/p/melissa-dulce-bag/cor.34365.34365AM60613_o.jpg", "https://www.melissa.com.br/file/v5674683696039092287/products/cor.34365.34365AM60613_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3878546364317425032/products/cor.34432.34432AW75710_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4022188247152798335/products/cor.34432.34432AW75711_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v239176744601890930/products/cor.34432.34432AW75510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v550111040891325148/products/cor.34432.34432AW75511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8980426753637851603/products/cor.34432.34432AW75512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5605764836199790516/products/cor.34432.34432AW75513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8961471285004596418/products/cor.34432.34432AW75514_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5017811663541274374/products/cor.34432.34432AW75515_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v480022562236935127/products/cor.34432.34432AW75516_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2687777121578737625/products/cor.34432.34432AW75517_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34432.34432AW75510_o.jpg", "https://www.melissa.com.br/p/melissa-hoop-bag/cor.34432.34432AW75510_o.jpg", "https://www.melissa.com.br/file/v239176744601890930/products/cor.34432.34432AW75510_o.jpg", "https://www.melissa.com.br/products/cor.34432.34432AW75511_o.jpg", "https://www.melissa.com.br/p/melissa-hoop-bag/cor.34432.34432AW75511_o.jpg", "https://www.melissa.com.br/file/v550111040891325148/products/cor.34432.34432AW75511_o.jpg", "https://www.melissa.com.br/products/cor.34432.34432AW75512_o.jpg", "https://www.melissa.com.br/p/melissa-hoop-bag/cor.34432.34432AW75512_o.jpg", "https://www.melissa.com.br/file/v8980426753637851603/products/cor.34432.34432AW75512_o.jpg", "https://www.melissa.com.br/products/cor.34432.34432AW75513_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5971010828667891478/products/cor.34396.34396AN73610_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7404368084268005679/products/cor.34396.34396AN73611_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5563170161015116590/products/34396.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1359649760788688699/products/34396.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3027405195495810952/products/cor.34396.34396AN73612_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5464674331893924765/products/cor.34396.34396AN73613_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1157299206455499360/products/cor.34396.34396AN73614_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3193122850782124037/products/cor.34396.34396AN73615_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2927294188424509061/products/cor.34396.34396AN73616_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34396.34396AN73610_o.jpg", "https://www.melissa.com.br/p/melissa-explorer/cor.34396.34396AN73610_o.jpg", "https://www.melissa.com.br/file/v5971010828667891478/products/cor.34396.34396AN73610_o.jpg", "https://www.melissa.com.br/products/cor.34396.34396AN73611_o.jpg", "https://www.melissa.com.br/p/melissa-explorer/cor.34396.34396AN73611_o.jpg", "https://www.melissa.com.br/file/v7404368084268005679/products/cor.34396.34396AN73611_o.jpg", "https://www.melissa.com.br/products/cor.34396.34396AN73612_o.jpg", "https://www.melissa.com.br/p/melissa-explorer/cor.34396.34396AN73612_o.jpg", "https://www.melissa.com.br/file/v3027405195495810952/products/cor.34396.34396AN73612_o.jpg", "https://www.melissa.com.br/products/cor.34396.34396AN73613_o.jpg", "https://www.melissa.com.br/p/melissa-explorer/cor.34396.34396AN73613_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4008567590556932464/products/cor.34319.34319AD48210_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6917183806140156739/products/cor.34319.34319AD48211_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1741803800161950444/products/34319.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8752205394051904230/products/34319.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2071296944354361213/general/B2C_MelissaBR_NoImage.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4230380888920771204/products/35872.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6751510181678129865/products/35872.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6351917509841507246/products/cor.35872.35872BA28710_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8442345768615280529/products/cor.35872.35872BA28711_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5345889401040745795/products/cor.35872.35872BA28712_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5236004707943770144/products/cor.35872.35872BA28713_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4986596260855045292/products/cor.35872.35872BA28714_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35872.35872BA28710_o.jpg", "https://www.melissa.com.br/p/melissa-perfection/cor.35872.35872BA28710_o.jpg", "https://www.melissa.com.br/file/v6351917509841507246/products/cor.35872.35872BA28710_o.jpg", "https://www.melissa.com.br/products/cor.35872.35872BA28711_o.jpg", "https://www.melissa.com.br/p/melissa-perfection/cor.35872.35872BA28711_o.jpg", "https://www.melissa.com.br/file/v8442345768615280529/products/cor.35872.35872BA28711_o.jpg", "https://www.melissa.com.br/products/cor.35872.35872BA28712_o.jpg", "https://www.melissa.com.br/p/melissa-perfection/cor.35872.35872BA28712_o.jpg", "https://www.melissa.com.br/file/v5345889401040745795/products/cor.35872.35872BA28712_o.jpg", "https://www.melissa.com.br/products/cor.35872.35872BA28713_o.jpg", "https://www.melissa.com.br/p/melissa-perfection/cor.35872.35872BA28713_o.jpg", "https://www.melissa.com.br/file/v5236004707943770144/products/cor.35872.35872BA28713_o.jpg", "https://www.melissa.com.br/products/cor.35872.35872BA28714_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8190200312281939783/products/34441.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6595435158833896337/products/34441.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5082535855683238984/products/cor.34441.34441BB71910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2118825254945392679/products/cor.34441.34441BB71911_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7467500384161003553/products/cor.34441.34441BB71912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v843503424188541450/products/cor.34441.34441BB71913_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3751063926045242875/products/cor.34441.34441BB71914_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7800869632226284417/products/cor.34441.34441BB71915_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3882255663411067975/products/cor.34441.34441BB71916_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4055850489476864971/products/cor.34441.34441BB71917_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34441.34441BB71910_o.jpg", "https://www.melissa.com.br/p/melissa-vibe-bag/cor.34441.34441BB71910_o.jpg", "https://www.melissa.com.br/file/v5082535855683238984/products/cor.34441.34441BB71910_o.jpg", "https://www.melissa.com.br/products/cor.34441.34441BB71911_o.jpg", "https://www.melissa.com.br/p/melissa-vibe-bag/cor.34441.34441BB71911_o.jpg", "https://www.melissa.com.br/file/v2118825254945392679/products/cor.34441.34441BB71911_o.jpg", "https://www.melissa.com.br/products/cor.34441.34441BB71912_o.jpg", "https://www.melissa.com.br/p/melissa-vibe-bag/cor.34441.34441BB71912_o.jpg", "https://www.melissa.com.br/file/v7467500384161003553/products/cor.34441.34441BB71912_o.jpg", "https://www.melissa.com.br/products/cor.34441.34441BB71913_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2218563025082633323/products/cor.34456.34456BD92410_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2061669030332004064/products/cor.34456.34456BD92411_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5843976948566056512/products/34456.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8255914756229235307/products/34456.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4562238245838618620/products/cor.34456.34456BD92412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8191438094521992578/products/cor.34456.34456BD92413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8861141201521967719/products/cor.34456.34456BD92414_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7899522577439916309/products/cor.34456.34456BD92415_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5572203445423698636/products/cor.34456.34456BD92416_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5813330308419471194/products/cor.34456.34456BD92417_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34456.34456BD92410_o.jpg", "https://www.melissa.com.br/p/melissa-x-telfar-large-jelly-shopper-ii/cor.34456.34456BD92410_o.jpg", "https://www.melissa.com.br/file/v2218563025082633323/products/cor.34456.34456BD92410_o.jpg", "https://www.melissa.com.br/products/cor.34456.34456BD92411_o.jpg", "https://www.melissa.com.br/p/melissa-x-telfar-large-jelly-shopper-ii/cor.34456.34456BD92411_o.jpg", "https://www.melissa.com.br/file/v2061669030332004064/products/cor.34456.34456BD92411_o.jpg", "https://www.melissa.com.br/products/cor.34456.34456BD92412_o.jpg", "https://www.melissa.com.br/p/melissa-x-telfar-large-jelly-shopper-ii/cor.34456.34456BD92412_o.jpg", "https://www.melissa.com.br/file/v4562238245838618620/products/cor.34456.34456BD92412_o.jpg", "https://www.melissa.com.br/products/cor.34456.34456BD92413_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7684058070741543298/products/cor.34433.34433BJ98810_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7867191287157231910/products/cor.34433.34433BJ98811_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2474318442025796090/products/34433.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8608402882573178197/products/34433.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v90801986980962221/products/cor.34433.34433BJ98510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8270014353343421422/products/cor.34433.34433BJ98511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2645455082247252456/products/cor.34433.34433BJ98512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8388980186046242871/products/cor.34433.34433BJ98513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v174577214518448459/products/cor.34433.34433BJ98514_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7956025345601689802/products/cor.34433.34433BJ98515_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5174411734171141845/products/cor.34433.34433BJ98516_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34433.34433BJ98510_o.jpg", "https://www.melissa.com.br/p/melissa-link-bag/cor.34433.34433BJ98510_o.jpg", "https://www.melissa.com.br/file/v90801986980962221/products/cor.34433.34433BJ98510_o.jpg", "https://www.melissa.com.br/products/cor.34433.34433BJ98511_o.jpg", "https://www.melissa.com.br/p/melissa-link-bag/cor.34433.34433BJ98511_o.jpg", "https://www.melissa.com.br/file/v8270014353343421422/products/cor.34433.34433BJ98511_o.jpg", "https://www.melissa.com.br/products/cor.34433.34433BJ98512_o.jpg", "https://www.melissa.com.br/p/melissa-link-bag/cor.34433.34433BJ98512_o.jpg", "https://www.melissa.com.br/file/v2645455082247252456/products/cor.34433.34433BJ98512_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8375621049317515500/products/34093.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4193166192344713428/products/34093.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6649281740443325978/products/cor.34093.340931809610_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6036982334066027385/products/cor.34093.340931809611_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2226891883752554141/products/cor.34093.340931809612_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5356455177677691250/products/cor.34093.340931809613_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8651017350100901032/products/cor.34093.340931809614_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6276733907601699360/products/cor.34093.340931809615_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4827423589148786817/products/cor.34093.340931809616_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34093.340931809610_o.jpg", "https://www.melissa.com.br/p/melissa-bolsa-refraction-ii-sp/cor.34093.340931809610_o.jpg", "https://www.melissa.com.br/file/v6649281740443325978/products/cor.34093.340931809610_o.jpg", "https://www.melissa.com.br/products/cor.34093.340931809611_o.jpg", "https://www.melissa.com.br/p/melissa-bolsa-refraction-ii-sp/cor.34093.340931809611_o.jpg", "https://www.melissa.com.br/file/v6036982334066027385/products/cor.34093.340931809611_o.jpg", "https://www.melissa.com.br/products/cor.34093.340931809612_o.jpg", "https://www.melissa.com.br/p/melissa-bolsa-refraction-ii-sp/cor.34093.340931809612_o.jpg", "https://www.melissa.com.br/file/v2226891883752554141/products/cor.34093.340931809612_o.jpg", "https://www.melissa.com.br/products/cor.34093.340931809613_o.jpg", "https://www.melissa.com.br/p/melissa-bolsa-refraction-ii-sp/cor.34093.340931809613_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5429890485313298626/products/cor.34436.34436BB27010_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3799906977951798680/products/cor.34436.34436BB27011_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2630504512485499615/products/cor.34436.34436BB27012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5212988297570754582/products/cor.34436.34436BB27013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3136135967113085474/products/cor.34436.34436BB27014_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3626820305579431990/products/cor.34436.34436BB27015_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4252160703156047186/products/cor.34436.34436BB27016_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34436.34436BB27010_o.jpg", "https://www.melissa.com.br/p/melissa-heartbeat-bag/cor.34436.34436BB27010_o.jpg", "https://www.melissa.com.br/file/v5429890485313298626/products/cor.34436.34436BB27010_o.jpg", "https://www.melissa.com.br/products/cor.34436.34436BB27011_o.jpg", "https://www.melissa.com.br/p/melissa-heartbeat-bag/cor.34436.34436BB27011_o.jpg", "https://www.melissa.com.br/file/v3799906977951798680/products/cor.34436.34436BB27011_o.jpg", "https://www.melissa.com.br/products/cor.34436.34436BB27012_o.jpg", "https://www.melissa.com.br/p/melissa-heartbeat-bag/cor.34436.34436BB27012_o.jpg", "https://www.melissa.com.br/file/v2630504512485499615/products/cor.34436.34436BB27012_o.jpg", "https://www.melissa.com.br/products/cor.34436.34436BB27013_o.jpg", "https://www.melissa.com.br/p/melissa-heartbeat-bag/cor.34436.34436BB27013_o.jpg", "https://www.melissa.com.br/file/v5212988297570754582/products/cor.34436.34436BB27013_o.jpg", "https://www.melissa.com.br/products/cor.34436.34436BB27014_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2684727580812781355/products/cor.34439.34439AX02110_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v277512333272443983/products/cor.34439.34439AX02111_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7033999102222387150/products/cor.34439.34439AX02010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1129593699263359464/products/cor.34439.34439AX02011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1883735091777170748/products/cor.34439.34439AX02012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2279869380484856901/products/cor.34439.34439AX02013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1030570655396560925/products/cor.34439.34439AX02014_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8245584071646794220/products/cor.34439.34439AX02015_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v617371916699879299/products/cor.34439.34439AX02016_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34439.34439AX02010_o.jpg", "https://www.melissa.com.br/p/melissa-urban-bag/cor.34439.34439AX02010_o.jpg", "https://www.melissa.com.br/file/v7033999102222387150/products/cor.34439.34439AX02010_o.jpg", "https://www.melissa.com.br/products/cor.34439.34439AX02011_o.jpg", "https://www.melissa.com.br/p/melissa-urban-bag/cor.34439.34439AX02011_o.jpg", "https://www.melissa.com.br/file/v1129593699263359464/products/cor.34439.34439AX02011_o.jpg", "https://www.melissa.com.br/products/cor.34439.34439AX02012_o.jpg", "https://www.melissa.com.br/p/melissa-urban-bag/cor.34439.34439AX02012_o.jpg", "https://www.melissa.com.br/file/v1883735091777170748/products/cor.34439.34439AX02012_o.jpg", "https://www.melissa.com.br/products/cor.34439.34439AX02013_o.jpg", "https://www.melissa.com.br/p/melissa-urban-bag/cor.34439.34439AX02013_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9040833818725682907/products/cor.36628.36628BK86410_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8593836179154700165/products/cor.36628.36628BK86411_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v321043596304233498/products/36628.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2618994484293933584/products/36628.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v321043596304233498/products/cor.36628.36628BK86510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2618994484293933584/products/cor.36628.36628BK86511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1297088561767426166/products/cor.36628.36628BK86512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v177364874380691317/products/cor.36628.36628BK86513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6287947660547210837/products/cor.36628.36628BK86515_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36628.36628BK86510_o.jpg", "https://www.melissa.com.br/p/melissa-duo-mlover/cor.36628.36628BK86510_o.jpg", "https://www.melissa.com.br/file/v321043596304233498/products/cor.36628.36628BK86510_o.jpg", "https://www.melissa.com.br/products/cor.36628.36628BK86511_o.jpg", "https://www.melissa.com.br/p/melissa-duo-mlover/cor.36628.36628BK86511_o.jpg", "https://www.melissa.com.br/file/v2618994484293933584/products/cor.36628.36628BK86511_o.jpg", "https://www.melissa.com.br/products/cor.36628.36628BK86512_o.jpg", "https://www.melissa.com.br/p/melissa-duo-mlover/cor.36628.36628BK86512_o.jpg", "https://www.melissa.com.br/file/v1297088561767426166/products/cor.36628.36628BK86512_o.jpg", "https://www.melissa.com.br/products/cor.36628.36628BK86513_o.jpg", "https://www.melissa.com.br/p/melissa-duo-mlover/cor.36628.36628BK86513_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4729182399000781941/products/34469.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3732186860538989961/products/34469.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4729182399000781941/products/cor.34469.34469BN68310_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3732186860538989961/products/cor.34469.34469BN68311_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3575514395844047793/products/cor.34469.34469BN68313_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3749182946674794343/products/cor.34469.34469BN68314_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3008618976703072388/products/cor.34469.34469BN68315_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v879106643413954359/products/cor.34469.34469BN68316_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3158498794848556381/products/cor.34469.34469BN68317_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7197047836347691859/products/cor.34469.34469BN68318_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v53522584092261040/products/cor.34469.34469BN68319_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34469.34469BN68310_o.jpg", "https://www.melissa.com.br/p/melissa-nina-bag-alexandre-pavao/cor.34469.34469BN68310_o.jpg", "https://www.melissa.com.br/file/v4729182399000781941/products/cor.34469.34469BN68310_o.jpg", "https://www.melissa.com.br/products/cor.34469.34469BN68311_o.jpg", "https://www.melissa.com.br/p/melissa-nina-bag-alexandre-pavao/cor.34469.34469BN68311_o.jpg", "https://www.melissa.com.br/file/v3732186860538989961/products/cor.34469.34469BN68311_o.jpg", "https://www.melissa.com.br/products/cor.34469.34469BN68313_o.jpg", "https://www.melissa.com.br/p/melissa-nina-bag-alexandre-pavao/cor.34469.34469BN68313_o.jpg", "https://www.melissa.com.br/file/v3575514395844047793/products/cor.34469.34469BN68313_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v975203138261574271/products/34481.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3668139636516405634/products/34481.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6092494268171824838/products/cor.34481.34481BP68410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1257728470279682707/products/cor.34481.34481BP68411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3261796747140008543/products/cor.34481.34481BP68412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3438877762226762427/products/cor.34481.34481BP68413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3961068691731036393/products/cor.34481.34481BP68414_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8799041183597313816/products/cor.34481.34481BP68415_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v964092046433485347/products/cor.34481.34481BP68416_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34481.34481BP68410_o.jpg", "https://www.melissa.com.br/p/melissa-mlover-charm/cor.34481.34481BP68410_o.jpg", "https://www.melissa.com.br/file/v6092494268171824838/products/cor.34481.34481BP68410_o.jpg", "https://www.melissa.com.br/products/cor.34481.34481BP68411_o.jpg", "https://www.melissa.com.br/p/melissa-mlover-charm/cor.34481.34481BP68411_o.jpg", "https://www.melissa.com.br/file/v1257728470279682707/products/cor.34481.34481BP68411_o.jpg", "https://www.melissa.com.br/products/cor.34481.34481BP68412_o.jpg", "https://www.melissa.com.br/p/melissa-mlover-charm/cor.34481.34481BP68412_o.jpg", "https://www.melissa.com.br/file/v3261796747140008543/products/cor.34481.34481BP68412_o.jpg", "https://www.melissa.com.br/products/cor.34481.34481BP68413_o.jpg", "https://www.melissa.com.br/p/melissa-mlover-charm/cor.34481.34481BP68413_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3678561420981968078/products/34474.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1831832849158788184/products/34474.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3678561420981968078/products/cor.34474.34474BN81710_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1831832849158788184/products/cor.34474.34474BN81711_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4528687055575755161/products/cor.34474.34474BN81712_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v897215188921326395/products/cor.34474.34474BN81713_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v739605256807560983/products/cor.34474.34474BN81714_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3461891539714178579/products/cor.34474.34474BN81715_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2450276939828275911/products/cor.34474.34474BN81717_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34474.34474BN81710_o.jpg", "https://www.melissa.com.br/p/melissa-cargo-bag/cor.34474.34474BN81710_o.jpg", "https://www.melissa.com.br/file/v3678561420981968078/products/cor.34474.34474BN81710_o.jpg", "https://www.melissa.com.br/products/cor.34474.34474BN81711_o.jpg", "https://www.melissa.com.br/p/melissa-cargo-bag/cor.34474.34474BN81711_o.jpg", "https://www.melissa.com.br/file/v1831832849158788184/products/cor.34474.34474BN81711_o.jpg", "https://www.melissa.com.br/products/cor.34474.34474BN81712_o.jpg", "https://www.melissa.com.br/p/melissa-cargo-bag/cor.34474.34474BN81712_o.jpg", "https://www.melissa.com.br/file/v4528687055575755161/products/cor.34474.34474BN81712_o.jpg", "https://www.melissa.com.br/products/cor.34474.34474BN81713_o.jpg", "https://www.melissa.com.br/p/melissa-cargo-bag/cor.34474.34474BN81713_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7512569986246200084/products/34478.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8818898554485012638/products/34478.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5349787242534300886/products/cor.34478.34478BP11010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2300503226486869809/products/cor.34478.34478BP11011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9082855171629080411/products/cor.34478.34478BP11012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9088954900493530243/products/cor.34478.34478BP11013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6905404635371346951/products/cor.34478.34478BP11014_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1954824187081635998/products/cor.34478.34478BP11015_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4881557028660116915/products/cor.34478.34478BP11017_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34478.34478BP11010_o.jpg", "https://www.melissa.com.br/p/melissa-mini-vibe-bag/cor.34478.34478BP11010_o.jpg", "https://www.melissa.com.br/file/v5349787242534300886/products/cor.34478.34478BP11010_o.jpg", "https://www.melissa.com.br/products/cor.34478.34478BP11011_o.jpg", "https://www.melissa.com.br/p/melissa-mini-vibe-bag/cor.34478.34478BP11011_o.jpg", "https://www.melissa.com.br/file/v2300503226486869809/products/cor.34478.34478BP11011_o.jpg", "https://www.melissa.com.br/products/cor.34478.34478BP11012_o.jpg", "https://www.melissa.com.br/p/melissa-mini-vibe-bag/cor.34478.34478BP11012_o.jpg", "https://www.melissa.com.br/file/v9082855171629080411/products/cor.34478.34478BP11012_o.jpg", "https://www.melissa.com.br/products/cor.34478.34478BP11013_o.jpg", "https://www.melissa.com.br/p/melissa-mini-vibe-bag/cor.34478.34478BP11013_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5297969479136605377/products/36854BK88310.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4304713234517549013/products/36854BK88311.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8286050994790971342/products/36854.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8082191880591029646/products/36854.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3217525749802696853/products/cor.36854.36854BK88810_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1335004440160425134/products/cor.36854.36854BK88811_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1611938135041204941/products/cor.36854.36854BK88812_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3916771847314661604/products/cor.36854.36854BK88813_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6055662384851242316/products/cor.36854.36854BK88814_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36854.36854BK88810_o.jpg", "https://www.melissa.com.br/p/melissa-pulse/cor.36854.36854BK88810_o.jpg", "https://www.melissa.com.br/file/v3217525749802696853/products/cor.36854.36854BK88810_o.jpg", "https://www.melissa.com.br/products/cor.36854.36854BK88811_o.jpg", "https://www.melissa.com.br/p/melissa-pulse/cor.36854.36854BK88811_o.jpg", "https://www.melissa.com.br/file/v1335004440160425134/products/cor.36854.36854BK88811_o.jpg", "https://www.melissa.com.br/products/cor.36854.36854BK88812_o.jpg", "https://www.melissa.com.br/p/melissa-pulse/cor.36854.36854BK88812_o.jpg", "https://www.melissa.com.br/file/v1611938135041204941/products/cor.36854.36854BK88812_o.jpg", "https://www.melissa.com.br/products/cor.36854.36854BK88813_o.jpg", "https://www.melissa.com.br/p/melissa-pulse/cor.36854.36854BK88813_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1414522036031534536/products/cor.37368.37368BS18610_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6101940417077456336/products/cor.37368.37368BS18611_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9073881518931089106/products/cor.37368.37368BN65310_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v251373293249085284/products/cor.37368.37368BN65311_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2560677415454038654/products/cor.37368.37368BN65312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3803062117799212442/products/cor.37368.37368BN65313_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2251415455032908544/products/cor.37368.37368BN65314_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37368.37368BN65310_o.jpg", "https://www.melissa.com.br/p/melissa-cross-mlover-platform/cor.37368.37368BN65310_o.jpg", "https://www.melissa.com.br/file/v9073881518931089106/products/cor.37368.37368BN65310_o.jpg", "https://www.melissa.com.br/products/cor.37368.37368BN65311_o.jpg", "https://www.melissa.com.br/p/melissa-cross-mlover-platform/cor.37368.37368BN65311_o.jpg", "https://www.melissa.com.br/file/v251373293249085284/products/cor.37368.37368BN65311_o.jpg", "https://www.melissa.com.br/products/cor.37368.37368BN65312_o.jpg", "https://www.melissa.com.br/p/melissa-cross-mlover-platform/cor.37368.37368BN65312_o.jpg", "https://www.melissa.com.br/file/v2560677415454038654/products/cor.37368.37368BN65312_o.jpg", "https://www.melissa.com.br/products/cor.37368.37368BN65313_o.jpg", "https://www.melissa.com.br/p/melissa-cross-mlover-platform/cor.37368.37368BN65313_o.jpg", "https://www.melissa.com.br/file/v3803062117799212442/products/cor.37368.37368BN65313_o.jpg", "https://www.melissa.com.br/products/cor.37368.37368BN65314_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3847796524677726833/products/37065.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7885364962922004942/products/37065.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8565121515394101876/products/cor.37065.37065BS52310_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2221783942424032663/products/cor.37065.37065BS52311_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5419851328710699703/products/cor.37065.37065BS52312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4863061039507476351/products/cor.37065.37065BS52313_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v984255426371238235/products/cor.37065.37065BS52314_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37065.37065BS52310_o.jpg", "https://www.melissa.com.br/p/melissa-up-platform/cor.37065.37065BS52310_o.jpg", "https://www.melissa.com.br/file/v8565121515394101876/products/cor.37065.37065BS52310_o.jpg", "https://www.melissa.com.br/products/cor.37065.37065BS52311_o.jpg", "https://www.melissa.com.br/p/melissa-up-platform/cor.37065.37065BS52311_o.jpg", "https://www.melissa.com.br/file/v2221783942424032663/products/cor.37065.37065BS52311_o.jpg", "https://www.melissa.com.br/products/cor.37065.37065BS52312_o.jpg", "https://www.melissa.com.br/p/melissa-up-platform/cor.37065.37065BS52312_o.jpg", "https://www.melissa.com.br/file/v5419851328710699703/products/cor.37065.37065BS52312_o.jpg", "https://www.melissa.com.br/products/cor.37065.37065BS52313_o.jpg", "https://www.melissa.com.br/p/melissa-up-platform/cor.37065.37065BS52313_o.jpg", "https://www.melissa.com.br/file/v4863061039507476351/products/cor.37065.37065BS52313_o.jpg", "https://www.melissa.com.br/products/cor.37065.37065BS52314_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8315639405788925272/products/37862.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8885898191445624938/products/37862.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2072508689987324734/products/cor.37862.37862BQ64010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3176723525357292024/products/cor.37862.37862BQ64011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v711107178950585349/products/cor.37862.37862BQ64013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7845591787881769529/products/cor.37862.37862BQ64012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7321404201299470567/products/cor.37862.37862BQ64014_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37862.37862BQ64010_o.jpg", "https://www.melissa.com.br/p/melissa-free-thong-wedge/cor.37862.37862BQ64010_o.jpg", "https://www.melissa.com.br/file/v2072508689987324734/products/cor.37862.37862BQ64010_o.jpg", "https://www.melissa.com.br/products/cor.37862.37862BQ64011_o.jpg", "https://www.melissa.com.br/p/melissa-free-thong-wedge/cor.37862.37862BQ64011_o.jpg", "https://www.melissa.com.br/file/v3176723525357292024/products/cor.37862.37862BQ64011_o.jpg", "https://www.melissa.com.br/products/cor.37862.37862BQ64013_o.jpg", "https://www.melissa.com.br/p/melissa-free-thong-wedge/cor.37862.37862BQ64013_o.jpg", "https://www.melissa.com.br/file/v711107178950585349/products/cor.37862.37862BQ64013_o.jpg", "https://www.melissa.com.br/products/cor.37862.37862BQ64012_o.jpg", "https://www.melissa.com.br/p/melissa-free-thong-wedge/cor.37862.37862BQ64012_o.jpg", "https://www.melissa.com.br/file/v7845591787881769529/products/cor.37862.37862BQ64012_o.jpg", "https://www.melissa.com.br/products/cor.37862.37862BQ64014_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5797319110821213620/products/cor.37942.37942BR47810_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4557674245414977026/products/cor.37942.37942BR47811_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3096074144462364468/products/cor.37942.37942BR47812_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v863728228883969376/products/cor.37942.37942BR47813_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7139471208166148614/products/cor.37942.37942BR47814_o.jpg", "https://www.melissa.com.br/products/cor.37942.37942BR47810_o.jpg", "https://www.melissa.com.br/p/melissa-flip-flop-airflow/cor.37942.37942BR47810_o.jpg", "https://www.melissa.com.br/file/v5797319110821213620/products/cor.37942.37942BR47810_o.jpg", "https://www.melissa.com.br/products/cor.37942.37942BR47811_o.jpg", "https://www.melissa.com.br/p/melissa-flip-flop-airflow/cor.37942.37942BR47811_o.jpg", "https://www.melissa.com.br/file/v4557674245414977026/products/cor.37942.37942BR47811_o.jpg", "https://www.melissa.com.br/products/cor.37942.37942BR47812_o.jpg", "https://www.melissa.com.br/p/melissa-flip-flop-airflow/cor.37942.37942BR47812_o.jpg", "https://www.melissa.com.br/file/v3096074144462364468/products/cor.37942.37942BR47812_o.jpg", "https://www.melissa.com.br/products/cor.37942.37942BR47813_o.jpg", "https://www.melissa.com.br/p/melissa-flip-flop-airflow/cor.37942.37942BR47813_o.jpg", "https://www.melissa.com.br/file/v863728228883969376/products/cor.37942.37942BR47813_o.jpg", "https://www.melissa.com.br/products/cor.37942.37942BR47814_o.jpg", "https://www.melissa.com.br/p/melissa-flip-flop-airflow/cor.37942.37942BR47814_o.jpg", "https://www.melissa.com.br/file/v7139471208166148614/products/cor.37942.37942BR47814_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7305781871977884403/products/37914.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5952746548727350290/products/37914.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6872083076745796754/products/cor.37914.37914BV58210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4063195957971629936/products/cor.37914.37914BV58211_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7014572353736321993/products/cor.37914.37914BV58212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6723265679752397027/products/cor.37914.37914BV58213_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7237079387534189731/products/cor.37914.37914BV58214_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37914.37914BV58210_o.jpg", "https://www.melissa.com.br/p/melissa-mlover-thong-platform/cor.37914.37914BV58210_o.jpg", "https://www.melissa.com.br/file/v6872083076745796754/products/cor.37914.37914BV58210_o.jpg", "https://www.melissa.com.br/products/cor.37914.37914BV58211_o.jpg", "https://www.melissa.com.br/p/melissa-mlover-thong-platform/cor.37914.37914BV58211_o.jpg", "https://www.melissa.com.br/file/v4063195957971629936/products/cor.37914.37914BV58211_o.jpg", "https://www.melissa.com.br/products/cor.37914.37914BV58212_o.jpg", "https://www.melissa.com.br/p/melissa-mlover-thong-platform/cor.37914.37914BV58212_o.jpg", "https://www.melissa.com.br/file/v7014572353736321993/products/cor.37914.37914BV58212_o.jpg", "https://www.melissa.com.br/products/cor.37914.37914BV58213_o.jpg", "https://www.melissa.com.br/p/melissa-mlover-thong-platform/cor.37914.37914BV58213_o.jpg", "https://www.melissa.com.br/file/v6723265679752397027/products/cor.37914.37914BV58213_o.jpg", "https://www.melissa.com.br/products/cor.37914.37914BV58214_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6965657150001000602/products/34498.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8917632833551363113/products/34498.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8983887128732177334/products/cor.34498.34498BV10510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5997780431809736751/products/cor.34498.34498BV10511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3684013749370892639/products/cor.34498.34498BV10512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v916920825949117010/products/cor.34498.34498BV10513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3462420086820637604/products/cor.34498.34498BV10515_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34498.34498BV10510_o.jpg", "https://www.melissa.com.br/p/melissa-tina-bag/cor.34498.34498BV10510_o.jpg", "https://www.melissa.com.br/file/v8983887128732177334/products/cor.34498.34498BV10510_o.jpg", "https://www.melissa.com.br/products/cor.34498.34498BV10511_o.jpg", "https://www.melissa.com.br/p/melissa-tina-bag/cor.34498.34498BV10511_o.jpg", "https://www.melissa.com.br/file/v5997780431809736751/products/cor.34498.34498BV10511_o.jpg", "https://www.melissa.com.br/products/cor.34498.34498BV10512_o.jpg", "https://www.melissa.com.br/p/melissa-tina-bag/cor.34498.34498BV10512_o.jpg", "https://www.melissa.com.br/file/v3684013749370892639/products/cor.34498.34498BV10512_o.jpg", "https://www.melissa.com.br/products/cor.34498.34498BV10513_o.jpg", "https://www.melissa.com.br/p/melissa-tina-bag/cor.34498.34498BV10513_o.jpg", "https://www.melissa.com.br/file/v916920825949117010/products/cor.34498.34498BV10513_o.jpg", "https://www.melissa.com.br/products/cor.34498.34498BV10515_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5097022813514691134/products/cor.35913.35913BB65210_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5812664803683561567/products/cor.35913.35913BB65211_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1039793409408883556/products/cor.35913.35913BB65110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v102002931822136350/products/cor.35913.35913BB65111_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6583316787167431868/products/cor.35913.35913BB65112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7456511804885395399/products/cor.35913.35913BB65113_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5065844783873402023/products/cor.35913.35913BB65114_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35913.35913BB65110_o.jpg", "https://www.melissa.com.br/p/melissa-becca/cor.35913.35913BB65110_o.jpg", "https://www.melissa.com.br/file/v1039793409408883556/products/cor.35913.35913BB65110_o.jpg", "https://www.melissa.com.br/products/cor.35913.35913BB65111_o.jpg", "https://www.melissa.com.br/p/melissa-becca/cor.35913.35913BB65111_o.jpg", "https://www.melissa.com.br/file/v102002931822136350/products/cor.35913.35913BB65111_o.jpg", "https://www.melissa.com.br/products/cor.35913.35913BB65112_o.jpg", "https://www.melissa.com.br/p/melissa-becca/cor.35913.35913BB65112_o.jpg", "https://www.melissa.com.br/file/v6583316787167431868/products/cor.35913.35913BB65112_o.jpg", "https://www.melissa.com.br/products/cor.35913.35913BB65113_o.jpg", "https://www.melissa.com.br/p/melissa-becca/cor.35913.35913BB65113_o.jpg", "https://www.melissa.com.br/file/v7456511804885395399/products/cor.35913.35913BB65113_o.jpg", "https://www.melissa.com.br/products/cor.35913.35913BB65114_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5848159355680847368/products/cor.31909.319090100310_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8522288848909907393/products/cor.31909.319090100311_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9196427607026068600/products/31909.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5016857675339371566/products/31909.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3422747491860653269/products/cor.31909.319090100312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7232953108016828673/products/cor.31909.319090100313_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3277415862705752095/products/cor.31909.319090100330_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.31909.319090100310_o.jpg", "https://www.melissa.com.br/p/melissa-flox-unissex/cor.31909.319090100310_o.jpg", "https://www.melissa.com.br/file/v5848159355680847368/products/cor.31909.319090100310_o.jpg", "https://www.melissa.com.br/products/cor.31909.319090100311_o.jpg", "https://www.melissa.com.br/p/melissa-flox-unissex/cor.31909.319090100311_o.jpg", "https://www.melissa.com.br/file/v8522288848909907393/products/cor.31909.319090100311_o.jpg", "https://www.melissa.com.br/products/cor.31909.319090100312_o.jpg", "https://www.melissa.com.br/p/melissa-flox-unissex/cor.31909.319090100312_o.jpg", "https://www.melissa.com.br/file/v3422747491860653269/products/cor.31909.319090100312_o.jpg", "https://www.melissa.com.br/products/cor.31909.319090100313_o.jpg", "https://www.melissa.com.br/p/melissa-flox-unissex/cor.31909.319090100313_o.jpg", "https://www.melissa.com.br/file/v7232953108016828673/products/cor.31909.319090100313_o.jpg", "https://www.melissa.com.br/products/cor.31909.319090100330_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7335573866376308234/products/cor.32823.328235414210_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8160524425344962174/products/cor.32823.328235414211_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1552348293482926651/products/32823.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3725990186130970669/products/32823.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5348923846440344657/products/cor.32823.328235075510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6246808105670472931/products/cor.32823.328235075512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2105859658821918740/products/cor.32823.328235075513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1721531694451602093/products/cor.32823.328235075530_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8737362565456714899/products/cor.32823.328235075540_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.32823.328235075510_o.jpg", "https://www.melissa.com.br/p/melissa-kick-off-sandal/cor.32823.328235075510_o.jpg", "https://www.melissa.com.br/file/v5348923846440344657/products/cor.32823.328235075510_o.jpg", "https://www.melissa.com.br/products/cor.32823.328235075512_o.jpg", "https://www.melissa.com.br/p/melissa-kick-off-sandal/cor.32823.328235075512_o.jpg", "https://www.melissa.com.br/file/v6246808105670472931/products/cor.32823.328235075512_o.jpg", "https://www.melissa.com.br/products/cor.32823.328235075513_o.jpg", "https://www.melissa.com.br/p/melissa-kick-off-sandal/cor.32823.328235075513_o.jpg", "https://www.melissa.com.br/file/v2105859658821918740/products/cor.32823.328235075513_o.jpg", "https://www.melissa.com.br/products/cor.32823.328235075530_o.jpg", "https://www.melissa.com.br/p/melissa-kick-off-sandal/cor.32823.328235075530_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8226975446784686442/products/36081.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5901536651442580132/products/36081.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8226975446784686442/products/cor.36081.36081BE84210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5901536651442580132/products/cor.36081.36081BE84211_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3831739885268733841/products/cor.36081.36081BE84212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5591966897088746666/products/cor.36081.36081BE84213_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5443593145990391135/products/cor.36081.36081BE84214_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36081.36081BE84210_o.jpg", "https://www.melissa.com.br/p/melissa-kick-off-sandal-metallic/cor.36081.36081BE84210_o.jpg", "https://www.melissa.com.br/file/v8226975446784686442/products/cor.36081.36081BE84210_o.jpg", "https://www.melissa.com.br/products/cor.36081.36081BE84211_o.jpg", "https://www.melissa.com.br/p/melissa-kick-off-sandal-metallic/cor.36081.36081BE84211_o.jpg", "https://www.melissa.com.br/file/v5901536651442580132/products/cor.36081.36081BE84211_o.jpg", "https://www.melissa.com.br/products/cor.36081.36081BE84212_o.jpg", "https://www.melissa.com.br/p/melissa-kick-off-sandal-metallic/cor.36081.36081BE84212_o.jpg", "https://www.melissa.com.br/file/v3831739885268733841/products/cor.36081.36081BE84212_o.jpg", "https://www.melissa.com.br/products/cor.36081.36081BE84213_o.jpg", "https://www.melissa.com.br/p/melissa-kick-off-sandal-metallic/cor.36081.36081BE84213_o.jpg", "https://www.melissa.com.br/file/v5591966897088746666/products/cor.36081.36081BE84213_o.jpg", "https://www.melissa.com.br/products/cor.36081.36081BE84214_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8368811342782836800/products/cor.36026.36026BI52610_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8718127147038000703/products/cor.36026.36026BI52612_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7521804747849369393/products/36026.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8368811342782836800/products/36026.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v625888344399982485/products/cor.36026.36026BI52810_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4443691947509668826/products/cor.36026.36026BI52811_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7538021293655356985/products/cor.36026.36026BI52812_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6169991057294903171/products/cor.36026.36026BI52813_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7880141672915365129/products/cor.36026.36026BI52814_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36026.36026BI52810_o.jpg", "https://www.melissa.com.br/p/melissa-mule-hype/cor.36026.36026BI52810_o.jpg", "https://www.melissa.com.br/file/v625888344399982485/products/cor.36026.36026BI52810_o.jpg", "https://www.melissa.com.br/products/cor.36026.36026BI52811_o.jpg", "https://www.melissa.com.br/p/melissa-mule-hype/cor.36026.36026BI52811_o.jpg", "https://www.melissa.com.br/file/v4443691947509668826/products/cor.36026.36026BI52811_o.jpg", "https://www.melissa.com.br/products/cor.36026.36026BI52812_o.jpg", "https://www.melissa.com.br/p/melissa-mule-hype/cor.36026.36026BI52812_o.jpg", "https://www.melissa.com.br/file/v7538021293655356985/products/cor.36026.36026BI52812_o.jpg", "https://www.melissa.com.br/products/cor.36026.36026BI52813_o.jpg", "https://www.melissa.com.br/p/melissa-mule-hype/cor.36026.36026BI52813_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8982474293969382401/products/cor.36497.36497BI59510_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4419034159222608184/products/cor.36497.36497BI59511_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8982474293969382401/products/36497.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4419034159222608184/products/36497.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5312522544109045629/products/cor.36497.36497BI59512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v943197654637727161/products/cor.36497.36497BI59513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1457188197939934457/products/cor.36497.36497BI59514_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36497.36497BI59510_o.jpg", "https://www.melissa.com.br/p/melissa-mule-hype-metallic/cor.36497.36497BI59510_o.jpg", "https://www.melissa.com.br/file/v8982474293969382401/products/cor.36497.36497BI59510_o.jpg", "https://www.melissa.com.br/products/cor.36497.36497BI59511_o.jpg", "https://www.melissa.com.br/p/melissa-mule-hype-metallic/cor.36497.36497BI59511_o.jpg", "https://www.melissa.com.br/file/v4419034159222608184/products/cor.36497.36497BI59511_o.jpg", "https://www.melissa.com.br/products/cor.36497.36497BI59512_o.jpg", "https://www.melissa.com.br/p/melissa-mule-hype-metallic/cor.36497.36497BI59512_o.jpg", "https://www.melissa.com.br/file/v5312522544109045629/products/cor.36497.36497BI59512_o.jpg", "https://www.melissa.com.br/products/cor.36497.36497BI59513_o.jpg", "https://www.melissa.com.br/p/melissa-mule-hype-metallic/cor.36497.36497BI59513_o.jpg", "https://www.melissa.com.br/file/v943197654637727161/products/cor.36497.36497BI59513_o.jpg", "https://www.melissa.com.br/products/cor.36497.36497BI59514_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v427742088533113848/products/35869.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5365521878407154207/products/35869.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8753020238554713866/products/cor.35869.35869AY12310_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8970599189741459427/products/cor.35869.35869AY12312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4328201301360167570/products/cor.35869.35869AY12313_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35869.35869AY12310_o.jpg", "https://www.melissa.com.br/p/melissa-possession-slide/cor.35869.35869AY12310_o.jpg", "https://www.melissa.com.br/file/v8753020238554713866/products/cor.35869.35869AY12310_o.jpg", "https://www.melissa.com.br/products/cor.35869.35869AY12312_o.jpg", "https://www.melissa.com.br/p/melissa-possession-slide/cor.35869.35869AY12312_o.jpg", "https://www.melissa.com.br/file/v8970599189741459427/products/cor.35869.35869AY12312_o.jpg", "https://www.melissa.com.br/products/cor.35869.35869AY12313_o.jpg", "https://www.melissa.com.br/p/melissa-possession-slide/cor.35869.35869AY12313_o.jpg", "https://www.melissa.com.br/file/v4328201301360167570/products/cor.35869.35869AY12313_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3592052750790940814/products/cor.35869.35869AY12810_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1507541661294269315/products/cor.35869.35869AY12811_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6139203279890423663/products/cor.35869.35869AY12812_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1162779717502249041/products/cor.35869.35869AY12813_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35869.35869AY12810_o.jpg", "https://www.melissa.com.br/p/melissa-possession-slide/cor.35869.35869AY12810_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1652394784785580311/products/cor.37154.37154BK66110_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3498636435550995350/products/cor.37154.37154BK66111_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3237304683564123508/products/37154.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3498636435550995350/products/37154.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3675903461596020316/products/cor.37154.37154BK66112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8694761672303056428/products/cor.37154.37154BK66113_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v232116840864083083/products/cor.37154.37154BK66114_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37154.37154BK66110_o.jpg", "https://www.melissa.com.br/p/melissa-stripes-mlover-metallic/cor.37154.37154BK66110_o.jpg", "https://www.melissa.com.br/file/v1652394784785580311/products/cor.37154.37154BK66110_o.jpg", "https://www.melissa.com.br/products/cor.37154.37154BK66111_o.jpg", "https://www.melissa.com.br/p/melissa-stripes-mlover-metallic/cor.37154.37154BK66111_o.jpg", "https://www.melissa.com.br/file/v3498636435550995350/products/cor.37154.37154BK66111_o.jpg", "https://www.melissa.com.br/products/cor.37154.37154BK66112_o.jpg", "https://www.melissa.com.br/p/melissa-stripes-mlover-metallic/cor.37154.37154BK66112_o.jpg", "https://www.melissa.com.br/file/v3675903461596020316/products/cor.37154.37154BK66112_o.jpg", "https://www.melissa.com.br/products/cor.37154.37154BK66113_o.jpg", "https://www.melissa.com.br/p/melissa-stripes-mlover-metallic/cor.37154.37154BK66113_o.jpg", "https://www.melissa.com.br/file/v8694761672303056428/products/cor.37154.37154BK66113_o.jpg", "https://www.melissa.com.br/products/cor.37154.37154BK66114_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6648072922223889397/products/cor.35965.35965BC91710_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2848258118722270356/products/cor.35965.35965BC91711_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v796901615909132651/products/cor.35965.35965BC90110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3490453277393935999/products/cor.35965.35965BC90111_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5148456077855404922/products/cor.35965.35965BC90112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5983538394498738815/products/cor.35965.35965BC90113_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1633725508109871769/products/cor.35965.35965BC90114_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35965.35965BC90110_o.jpg", "https://www.melissa.com.br/p/melissa-ultragirl-classic-bow/cor.35965.35965BC90110_o.jpg", "https://www.melissa.com.br/file/v796901615909132651/products/cor.35965.35965BC90110_o.jpg", "https://www.melissa.com.br/products/cor.35965.35965BC90111_o.jpg", "https://www.melissa.com.br/p/melissa-ultragirl-classic-bow/cor.35965.35965BC90111_o.jpg", "https://www.melissa.com.br/file/v3490453277393935999/products/cor.35965.35965BC90111_o.jpg", "https://www.melissa.com.br/products/cor.35965.35965BC90112_o.jpg", "https://www.melissa.com.br/p/melissa-ultragirl-classic-bow/cor.35965.35965BC90112_o.jpg", "https://www.melissa.com.br/file/v5148456077855404922/products/cor.35965.35965BC90112_o.jpg", "https://www.melissa.com.br/products/cor.35965.35965BC90113_o.jpg", "https://www.melissa.com.br/p/melissa-ultragirl-classic-bow/cor.35965.35965BC90113_o.jpg", "https://www.melissa.com.br/file/v5983538394498738815/products/cor.35965.35965BC90113_o.jpg", "https://www.melissa.com.br/products/cor.35965.35965BC90114_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1806161355569350779/products/cor.33815.33815AP07712_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4308356334107456714/products/cor.33815.33815AP07710_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7975023560547344722/products/33815.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2874021258930046417/products/cor.33815.33815AH62510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5063631302787395901/products/cor.33815.33815AH62511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v172410039089223466/products/cor.33815.33815AH62512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v276402980789860050/products/cor.33815.33815AH62513_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.33815.33815AH62510_o.jpg", "https://www.melissa.com.br/p/melissa-mar-sandal-ii/cor.33815.33815AH62510_o.jpg", "https://www.melissa.com.br/file/v2874021258930046417/products/cor.33815.33815AH62510_o.jpg", "https://www.melissa.com.br/products/cor.33815.33815AH62511_o.jpg", "https://www.melissa.com.br/p/melissa-mar-sandal-ii/cor.33815.33815AH62511_o.jpg", "https://www.melissa.com.br/file/v5063631302787395901/products/cor.33815.33815AH62511_o.jpg", "https://www.melissa.com.br/products/cor.33815.33815AH62512_o.jpg", "https://www.melissa.com.br/p/melissa-mar-sandal-ii/cor.33815.33815AH62512_o.jpg", "https://www.melissa.com.br/file/v172410039089223466/products/cor.33815.33815AH62512_o.jpg", "https://www.melissa.com.br/products/cor.33815.33815AH62513_o.jpg", "https://www.melissa.com.br/p/melissa-mar-sandal-ii/cor.33815.33815AH62513_o.jpg", "https://www.melissa.com.br/file/v276402980789860050/products/cor.33815.33815AH62513_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3191265676715044876/products/cor.33815.33815AI73110_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5105125313603136629/products/37950.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4674641186151302378/products/37950.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3982956394226874932/products/cor.37950.37950BW21210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1293086729266151576/products/cor.37950.37950BW21212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4721178636073546844/products/cor.37950.37950BW21213_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6016129266372848275/products/cor.37950.37950BW21211_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v369861871750221739/products/cor.37950.37950BW21214_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37950.37950BW21210_o.jpg", "https://www.melissa.com.br/p/melissa-possession-slip/cor.37950.37950BW21210_o.jpg", "https://www.melissa.com.br/file/v3982956394226874932/products/cor.37950.37950BW21210_o.jpg", "https://www.melissa.com.br/products/cor.37950.37950BW21212_o.jpg", "https://www.melissa.com.br/p/melissa-possession-slip/cor.37950.37950BW21212_o.jpg", "https://www.melissa.com.br/file/v1293086729266151576/products/cor.37950.37950BW21212_o.jpg", "https://www.melissa.com.br/products/cor.37950.37950BW21213_o.jpg", "https://www.melissa.com.br/p/melissa-possession-slip/cor.37950.37950BW21213_o.jpg", "https://www.melissa.com.br/file/v4721178636073546844/products/cor.37950.37950BW21213_o.jpg", "https://www.melissa.com.br/products/cor.37950.37950BW21211_o.jpg", "https://www.melissa.com.br/p/melissa-possession-slip/cor.37950.37950BW21211_o.jpg", "https://www.melissa.com.br/file/v6016129266372848275/products/cor.37950.37950BW21211_o.jpg", "https://www.melissa.com.br/products/cor.37950.37950BW21214_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3281059813767928949/products/38024.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4099070468005686683/products/cor.38024.38024BU22710_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9053542658807665028/products/cor.38024.38024BU22712_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4965141011138309356/products/cor.38024.38024BU22713_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.38024.38024BU22710_o.jpg", "https://www.melissa.com.br/p/melissa-aranha-79-ii/cor.38024.38024BU22710_o.jpg", "https://www.melissa.com.br/file/v4099070468005686683/products/cor.38024.38024BU22710_o.jpg", "https://www.melissa.com.br/products/cor.38024.38024BU22712_o.jpg", "https://www.melissa.com.br/p/melissa-aranha-79-ii/cor.38024.38024BU22712_o.jpg", "https://www.melissa.com.br/file/v9053542658807665028/products/cor.38024.38024BU22712_o.jpg", "https://www.melissa.com.br/products/cor.38024.38024BU22713_o.jpg", "https://www.melissa.com.br/p/melissa-aranha-79-ii/cor.38024.38024BU22713_o.jpg", "https://www.melissa.com.br/file/v4965141011138309356/products/cor.38024.38024BU22713_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9018989183794349553/products/cor.38024.38024BU22110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2748771504852007980/products/cor.38024.38024BU22112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1922767598459720115/products/cor.38024.38024BU22113_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.38024.38024BU22110_o.jpg", "https://www.melissa.com.br/p/melissa-aranha-79-ii/cor.38024.38024BU22110_o.jpg", "https://www.melissa.com.br/file/v9018989183794349553/products/cor.38024.38024BU22110_o.jpg", "https://www.melissa.com.br/products/cor.38024.38024BU22112_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1590196761106372727/products/31512.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3362312122345766188/products/31512.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8064760649133805701/products/cor.31512.315125232610_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5069128078217977080/products/cor.31512.315125232612_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v928983650752453650/products/cor.31512.315125232613_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.31512.315125232610_o.jpg", "https://www.melissa.com.br/p/melissa-campana-papel/cor.31512.315125232610_o.jpg", "https://www.melissa.com.br/file/v8064760649133805701/products/cor.31512.315125232610_o.jpg", "https://www.melissa.com.br/products/cor.31512.315125232612_o.jpg", "https://www.melissa.com.br/p/melissa-campana-papel/cor.31512.315125232612_o.jpg", "https://www.melissa.com.br/file/v5069128078217977080/products/cor.31512.315125232612_o.jpg", "https://www.melissa.com.br/products/cor.31512.315125232613_o.jpg", "https://www.melissa.com.br/p/melissa-campana-papel/cor.31512.315125232613_o.jpg", "https://www.melissa.com.br/file/v928983650752453650/products/cor.31512.315125232613_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2458123405614028094/products/cor.31512.315125071110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1219093185206849915/products/cor.31512.315125071112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2207470400909903583/products/cor.31512.315125071113_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.31512.315125071110_o.jpg", "https://www.melissa.com.br/p/melissa-campana-papel/cor.31512.315125071110_o.jpg", "https://www.melissa.com.br/file/v2458123405614028094/products/cor.31512.315125071110_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3105384941652382150/products/37881.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7228841005107317140/products/37881.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3161770820943142929/products/cor.37881.37881BW21410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8553165692933035448/products/cor.37881.37881BW21411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2345812737025286917/products/cor.37881.37881BW21412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6838525945634085425/products/cor.37881.37881BW21413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6589698917093433186/products/cor.37881.37881BW21414_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37881.37881BW21410_o.jpg", "https://www.melissa.com.br/p/melissa-daphnis-ballerina-susan-fang/cor.37881.37881BW21410_o.jpg", "https://www.melissa.com.br/file/v3161770820943142929/products/cor.37881.37881BW21410_o.jpg", "https://www.melissa.com.br/products/cor.37881.37881BW21411_o.jpg", "https://www.melissa.com.br/p/melissa-daphnis-ballerina-susan-fang/cor.37881.37881BW21411_o.jpg", "https://www.melissa.com.br/file/v8553165692933035448/products/cor.37881.37881BW21411_o.jpg", "https://www.melissa.com.br/products/cor.37881.37881BW21412_o.jpg", "https://www.melissa.com.br/p/melissa-daphnis-ballerina-susan-fang/cor.37881.37881BW21412_o.jpg", "https://www.melissa.com.br/file/v2345812737025286917/products/cor.37881.37881BW21412_o.jpg", "https://www.melissa.com.br/products/cor.37881.37881BW21413_o.jpg", "https://www.melissa.com.br/p/melissa-daphnis-ballerina-susan-fang/cor.37881.37881BW21413_o.jpg", "https://www.melissa.com.br/file/v6838525945634085425/products/cor.37881.37881BW21413_o.jpg", "https://www.melissa.com.br/products/cor.37881.37881BW21414_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2590657166374822504/products/38083.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5009071651884765453/products/cor.38083.38083BX41910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4785678927152732111/products/cor.38083.38083BX41912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8443994688912635279/products/cor.38083.38083BX41913_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6852254567206436657/products/cor.38083.38083BX41915_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4893277562107168349/products/cor.38083.38083BX41916_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7103425166586568141/products/cor.38083.38083BX41917_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.38083.38083BX41910_o.jpg", "https://www.melissa.com.br/p/melissa-nabeela/cor.38083.38083BX41910_o.jpg", "https://www.melissa.com.br/file/v5009071651884765453/products/cor.38083.38083BX41910_o.jpg", "https://www.melissa.com.br/products/cor.38083.38083BX41912_o.jpg", "https://www.melissa.com.br/p/melissa-nabeela/cor.38083.38083BX41912_o.jpg", "https://www.melissa.com.br/file/v4785678927152732111/products/cor.38083.38083BX41912_o.jpg", "https://www.melissa.com.br/products/cor.38083.38083BX41913_o.jpg", "https://www.melissa.com.br/p/melissa-nabeela/cor.38083.38083BX41913_o.jpg", "https://www.melissa.com.br/file/v8443994688912635279/products/cor.38083.38083BX41913_o.jpg", "https://www.melissa.com.br/products/cor.38083.38083BX41915_o.jpg", "https://www.melissa.com.br/p/melissa-nabeela/cor.38083.38083BX41915_o.jpg", "https://www.melissa.com.br/file/v6852254567206436657/products/cor.38083.38083BX41915_o.jpg", "https://www.melissa.com.br/products/cor.38083.38083BX41916_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8144352672563787025/products/37840.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2965116117681640457/products/37840.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1101021029559831568/products/cor.37840.37840BS44810_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8121414346279841205/products/cor.37840.37840BS44811_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4022392699635682352/products/cor.37840.37840BS44812_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7709231912132424189/products/cor.37840.37840BS44813_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7807089475854057893/products/cor.37840.37840BS44814_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37840.37840BS44810_o.jpg", "https://www.melissa.com.br/p/melissa-pescura-heel-scholl/cor.37840.37840BS44810_o.jpg", "https://www.melissa.com.br/file/v1101021029559831568/products/cor.37840.37840BS44810_o.jpg", "https://www.melissa.com.br/products/cor.37840.37840BS44811_o.jpg", "https://www.melissa.com.br/p/melissa-pescura-heel-scholl/cor.37840.37840BS44811_o.jpg", "https://www.melissa.com.br/file/v8121414346279841205/products/cor.37840.37840BS44811_o.jpg", "https://www.melissa.com.br/products/cor.37840.37840BS44812_o.jpg", "https://www.melissa.com.br/p/melissa-pescura-heel-scholl/cor.37840.37840BS44812_o.jpg", "https://www.melissa.com.br/file/v4022392699635682352/products/cor.37840.37840BS44812_o.jpg", "https://www.melissa.com.br/products/cor.37840.37840BS44813_o.jpg", "https://www.melissa.com.br/p/melissa-pescura-heel-scholl/cor.37840.37840BS44813_o.jpg", "https://www.melissa.com.br/file/v7709231912132424189/products/cor.37840.37840BS44813_o.jpg", "https://www.melissa.com.br/products/cor.37840.37840BS44814_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1074970542485435019/products/cor.32408.32408BT89810_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3220518521825924882/products/cor.32408.32408BT89812_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1074970542485435019/products/32408.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8553461065386579733/products/32408.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1998865328615348153/products/cor.32408.32408BK19210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4568206380493013330/products/cor.32408.32408BK19211_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v11496805581112519/products/cor.32408.32408BK19212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v566951934694519977/products/cor.32408.32408BK19213_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4122884090201339242/products/cor.32408.32408BK19214_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.32408.32408BK19210_o.jpg", "https://www.melissa.com.br/p/melissa-possession/cor.32408.32408BK19210_o.jpg", "https://www.melissa.com.br/file/v1998865328615348153/products/cor.32408.32408BK19210_o.jpg", "https://www.melissa.com.br/products/cor.32408.32408BK19211_o.jpg", "https://www.melissa.com.br/p/melissa-possession/cor.32408.32408BK19211_o.jpg", "https://www.melissa.com.br/file/v4568206380493013330/products/cor.32408.32408BK19211_o.jpg", "https://www.melissa.com.br/products/cor.32408.32408BK19212_o.jpg", "https://www.melissa.com.br/p/melissa-possession/cor.32408.32408BK19212_o.jpg", "https://www.melissa.com.br/file/v11496805581112519/products/cor.32408.32408BK19212_o.jpg", "https://www.melissa.com.br/products/cor.32408.32408BK19213_o.jpg", "https://www.melissa.com.br/p/melissa-possession/cor.32408.32408BK19213_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6959443139594405358/products/cor.36089.36089BF85310_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8549418140299067201/products/cor.36089.36089BF85312_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1332191757648711594/products/cor.36089.36089BF85910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8156205629915919980/products/cor.36089.36089BF85911_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3453893798587961200/products/cor.36089.36089BF85912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7719870229401364634/products/cor.36089.36089BF85913_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4966965352362905756/products/cor.36089.36089BF85914_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36089.36089BF85910_o.jpg", "https://www.melissa.com.br/p/melissa-possession-crystals/cor.36089.36089BF85910_o.jpg", "https://www.melissa.com.br/file/v1332191757648711594/products/cor.36089.36089BF85910_o.jpg", "https://www.melissa.com.br/products/cor.36089.36089BF85911_o.jpg", "https://www.melissa.com.br/p/melissa-possession-crystals/cor.36089.36089BF85911_o.jpg", "https://www.melissa.com.br/file/v8156205629915919980/products/cor.36089.36089BF85911_o.jpg", "https://www.melissa.com.br/products/cor.36089.36089BF85912_o.jpg", "https://www.melissa.com.br/p/melissa-possession-crystals/cor.36089.36089BF85912_o.jpg", "https://www.melissa.com.br/file/v3453893798587961200/products/cor.36089.36089BF85912_o.jpg", "https://www.melissa.com.br/products/cor.36089.36089BF85913_o.jpg", "https://www.melissa.com.br/p/melissa-possession-crystals/cor.36089.36089BF85913_o.jpg", "https://www.melissa.com.br/file/v7719870229401364634/products/cor.36089.36089BF85913_o.jpg", "https://www.melissa.com.br/products/cor.36089.36089BF85914_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5473702307961857114/products/38029.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3468453741847639001/products/cor.38029.38029BW21710_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5954595393015748365/products/cor.38029.38029BW21712_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1382002278177747417/products/cor.38029.38029BW21713_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.38029.38029BW21710_o.jpg", "https://www.melissa.com.br/p/melissa-possession-mule/cor.38029.38029BW21710_o.jpg", "https://www.melissa.com.br/file/v3468453741847639001/products/cor.38029.38029BW21710_o.jpg", "https://www.melissa.com.br/products/cor.38029.38029BW21712_o.jpg", "https://www.melissa.com.br/p/melissa-possession-mule/cor.38029.38029BW21712_o.jpg", "https://www.melissa.com.br/file/v5954595393015748365/products/cor.38029.38029BW21712_o.jpg", "https://www.melissa.com.br/products/cor.38029.38029BW21713_o.jpg", "https://www.melissa.com.br/p/melissa-possession-mule/cor.38029.38029BW21713_o.jpg", "https://www.melissa.com.br/file/v1382002278177747417/products/cor.38029.38029BW21713_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8897889122174789016/products/cor.38029.38029BW22210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v967220116123256859/products/cor.38029.38029BW22212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6571512140385640847/products/cor.38029.38029BW22213_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.38029.38029BW22210_o.jpg", "https://www.melissa.com.br/p/melissa-possession-mule/cor.38029.38029BW22210_o.jpg", "https://www.melissa.com.br/file/v8897889122174789016/products/cor.38029.38029BW22210_o.jpg", "https://www.melissa.com.br/products/cor.38029.38029BW22212_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2805673506664272864/products/37839.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4462015571252972877/products/37839.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8148298831163078727/products/cor.37839.37839BS39210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8457476645827681050/products/cor.37839.37839BS39211_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v603552749686107275/products/cor.37839.37839BS39212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2016657630776037857/products/cor.37839.37839BS39213_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6644585236951679833/products/cor.37839.37839BS39214_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37839.37839BS39210_o.jpg", "https://www.melissa.com.br/p/melissa-possession-pescura-heel-scholl/cor.37839.37839BS39210_o.jpg", "https://www.melissa.com.br/file/v8148298831163078727/products/cor.37839.37839BS39210_o.jpg", "https://www.melissa.com.br/products/cor.37839.37839BS39211_o.jpg", "https://www.melissa.com.br/p/melissa-possession-pescura-heel-scholl/cor.37839.37839BS39211_o.jpg", "https://www.melissa.com.br/file/v8457476645827681050/products/cor.37839.37839BS39211_o.jpg", "https://www.melissa.com.br/products/cor.37839.37839BS39212_o.jpg", "https://www.melissa.com.br/p/melissa-possession-pescura-heel-scholl/cor.37839.37839BS39212_o.jpg", "https://www.melissa.com.br/file/v603552749686107275/products/cor.37839.37839BS39212_o.jpg", "https://www.melissa.com.br/products/cor.37839.37839BS39213_o.jpg", "https://www.melissa.com.br/p/melissa-possession-pescura-heel-scholl/cor.37839.37839BS39213_o.jpg", "https://www.melissa.com.br/file/v2016657630776037857/products/cor.37839.37839BS39213_o.jpg", "https://www.melissa.com.br/products/cor.37839.37839BS39214_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3001943053244773524/products/36147.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2856183542245905186/products/36147.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7358367908319760367/products/cor.36147.36147BP73010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6639572120291282281/products/cor.36147.36147BP73011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1878424519975525798/products/cor.36147.36147BP73012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4635114947946851027/products/cor.36147.36147BP73013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8708745772617999710/products/cor.36147.36147BP73014_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36147.36147BP73010_o.jpg", "https://www.melissa.com.br/p/melissa-quantum-sneaker-diesel/cor.36147.36147BP73010_o.jpg", "https://www.melissa.com.br/file/v7358367908319760367/products/cor.36147.36147BP73010_o.jpg", "https://www.melissa.com.br/products/cor.36147.36147BP73011_o.jpg", "https://www.melissa.com.br/p/melissa-quantum-sneaker-diesel/cor.36147.36147BP73011_o.jpg", "https://www.melissa.com.br/file/v6639572120291282281/products/cor.36147.36147BP73011_o.jpg", "https://www.melissa.com.br/products/cor.36147.36147BP73012_o.jpg", "https://www.melissa.com.br/p/melissa-quantum-sneaker-diesel/cor.36147.36147BP73012_o.jpg", "https://www.melissa.com.br/file/v1878424519975525798/products/cor.36147.36147BP73012_o.jpg", "https://www.melissa.com.br/products/cor.36147.36147BP73013_o.jpg", "https://www.melissa.com.br/p/melissa-quantum-sneaker-diesel/cor.36147.36147BP73013_o.jpg", "https://www.melissa.com.br/file/v4635114947946851027/products/cor.36147.36147BP73013_o.jpg", "https://www.melissa.com.br/products/cor.36147.36147BP73014_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8353214124911527333/products/37961.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2604306167239285750/products/37961.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v264779781701962005/products/cor.37961.37961BW09210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4693885603503550129/products/cor.37961.37961BW09211_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1252169338286473516/products/cor.37961.37961BW09212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3965269911212694717/products/cor.37961.37961BW09213_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4840774082215349360/products/cor.37961.37961BW09214_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37961.37961BW09210_o.jpg", "https://www.melissa.com.br/p/melissa-ring-sandal/cor.37961.37961BW09210_o.jpg", "https://www.melissa.com.br/file/v264779781701962005/products/cor.37961.37961BW09210_o.jpg", "https://www.melissa.com.br/products/cor.37961.37961BW09211_o.jpg", "https://www.melissa.com.br/p/melissa-ring-sandal/cor.37961.37961BW09211_o.jpg", "https://www.melissa.com.br/file/v4693885603503550129/products/cor.37961.37961BW09211_o.jpg", "https://www.melissa.com.br/products/cor.37961.37961BW09212_o.jpg", "https://www.melissa.com.br/p/melissa-ring-sandal/cor.37961.37961BW09212_o.jpg", "https://www.melissa.com.br/file/v1252169338286473516/products/cor.37961.37961BW09212_o.jpg", "https://www.melissa.com.br/products/cor.37961.37961BW09213_o.jpg", "https://www.melissa.com.br/p/melissa-ring-sandal/cor.37961.37961BW09213_o.jpg", "https://www.melissa.com.br/file/v3965269911212694717/products/cor.37961.37961BW09213_o.jpg", "https://www.melissa.com.br/products/cor.37961.37961BW09214_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5451568945056054885/products/38068.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v656032695979436920/products/38068.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1922002616110785657/products/cor.38068.38068BU42910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4551435979875574260/products/cor.38068.38068BU42911_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6191976813014926759/products/cor.38068.38068BU42912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3144812842724429335/products/cor.38068.38068BU42913_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1120462816020552160/products/cor.38068.38068BU42914_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.38068.38068BU42910_o.jpg", "https://www.melissa.com.br/p/melissa-thong-kitten-heel/cor.38068.38068BU42910_o.jpg", "https://www.melissa.com.br/file/v1922002616110785657/products/cor.38068.38068BU42910_o.jpg", "https://www.melissa.com.br/products/cor.38068.38068BU42911_o.jpg", "https://www.melissa.com.br/p/melissa-thong-kitten-heel/cor.38068.38068BU42911_o.jpg", "https://www.melissa.com.br/file/v4551435979875574260/products/cor.38068.38068BU42911_o.jpg", "https://www.melissa.com.br/products/cor.38068.38068BU42912_o.jpg", "https://www.melissa.com.br/p/melissa-thong-kitten-heel/cor.38068.38068BU42912_o.jpg", "https://www.melissa.com.br/file/v6191976813014926759/products/cor.38068.38068BU42912_o.jpg", "https://www.melissa.com.br/products/cor.38068.38068BU42913_o.jpg", "https://www.melissa.com.br/p/melissa-thong-kitten-heel/cor.38068.38068BU42913_o.jpg", "https://www.melissa.com.br/file/v3144812842724429335/products/cor.38068.38068BU42913_o.jpg", "https://www.melissa.com.br/products/cor.38068.38068BU42914_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7899378737261125695/products/32243.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1463665447633913600/products/32243.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1993330664622758266/products/cor.32243.322430600810_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8802403634583978127/products/cor.32243.322430600812_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8525198268491937817/products/cor.32243.322430600813_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.32243.322430600810_o.jpg", "https://www.melissa.com.br/p/melissa-vixen/cor.32243.322430600810_o.jpg", "https://www.melissa.com.br/file/v1993330664622758266/products/cor.32243.322430600810_o.jpg", "https://www.melissa.com.br/products/cor.32243.322430600812_o.jpg", "https://www.melissa.com.br/p/melissa-vixen/cor.32243.322430600812_o.jpg", "https://www.melissa.com.br/file/v8802403634583978127/products/cor.32243.322430600812_o.jpg", "https://www.melissa.com.br/products/cor.32243.322430600813_o.jpg", "https://www.melissa.com.br/p/melissa-vixen/cor.32243.322430600813_o.jpg", "https://www.melissa.com.br/file/v8525198268491937817/products/cor.32243.322430600813_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v365585707770641935/products/cor.32243.322430100310_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8219502757796601886/products/cor.32243.322430100312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7619750373290645615/products/cor.32243.322430100313_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.32243.322430100310_o.jpg", "https://www.melissa.com.br/p/melissa-vixen/cor.32243.322430100310_o.jpg", "https://www.melissa.com.br/file/v365585707770641935/products/cor.32243.322430100310_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4161006898828904651/products/37946.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6585318917863731022/products/37946.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3186461529658538192/products/cor.37946.37946BW86610_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2342367465547774939/products/cor.37946.37946BW86611_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6980559138453908859/products/cor.37946.37946BW86612_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7951764717765853041/products/cor.37946.37946BW86613_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6764705907492231314/products/cor.37946.37946BW86614_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37946.37946BW86610_o.jpg", "https://www.melissa.com.br/p/melissa-vixen-kitten-heel/cor.37946.37946BW86610_o.jpg", "https://www.melissa.com.br/file/v3186461529658538192/products/cor.37946.37946BW86610_o.jpg", "https://www.melissa.com.br/products/cor.37946.37946BW86611_o.jpg", "https://www.melissa.com.br/p/melissa-vixen-kitten-heel/cor.37946.37946BW86611_o.jpg", "https://www.melissa.com.br/file/v2342367465547774939/products/cor.37946.37946BW86611_o.jpg", "https://www.melissa.com.br/products/cor.37946.37946BW86612_o.jpg", "https://www.melissa.com.br/p/melissa-vixen-kitten-heel/cor.37946.37946BW86612_o.jpg", "https://www.melissa.com.br/file/v6980559138453908859/products/cor.37946.37946BW86612_o.jpg", "https://www.melissa.com.br/products/cor.37946.37946BW86613_o.jpg", "https://www.melissa.com.br/p/melissa-vixen-kitten-heel/cor.37946.37946BW86613_o.jpg", "https://www.melissa.com.br/file/v7951764717765853041/products/cor.37946.37946BW86613_o.jpg", "https://www.melissa.com.br/products/cor.37946.37946BW86614_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5790666024148227196/products/335055059610.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6279129826493702459/products/335055059613.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5519895508064069346/products/33505.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8470325238898370918/products/33505.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5790666024148227196/products/cor.33505.335055059610_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1043289588735526945/products/cor.33505.335055059611_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4722507971137775142/products/cor.33505.335055059612_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6279129826493702459/products/cor.33505.335055059613_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6997821608215959023/products/cor.33505.335055059630_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.33505.335055059610_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown/cor.33505.335055059610_o.jpg", "https://www.melissa.com.br/file/v5790666024148227196/products/cor.33505.335055059610_o.jpg", "https://www.melissa.com.br/products/cor.33505.335055059611_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown/cor.33505.335055059611_o.jpg", "https://www.melissa.com.br/file/v1043289588735526945/products/cor.33505.335055059611_o.jpg", "https://www.melissa.com.br/products/cor.33505.335055059612_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown/cor.33505.335055059612_o.jpg", "https://www.melissa.com.br/file/v4722507971137775142/products/cor.33505.335055059612_o.jpg", "https://www.melissa.com.br/products/cor.33505.335055059613_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown/cor.33505.335055059613_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5308469664428762195/products/cor.35710.35710AW69012_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8373349198519016603/products/cor.35710.35710AW69010_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3341436745515904343/products/35710.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3341436745515904343/products/cor.35710.35710AR75510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6565481657283586171/products/cor.35710.35710AR75512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8733396605746371496/products/cor.35710.35710AR75513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8530111064650002304/products/cor.35710.35710AR75514_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9160905024318981145/products/cor.35710.35710AR75515_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35710.35710AR75510_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown-platform/cor.35710.35710AR75510_o.jpg", "https://www.melissa.com.br/file/v3341436745515904343/products/cor.35710.35710AR75510_o.jpg", "https://www.melissa.com.br/products/cor.35710.35710AR75512_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown-platform/cor.35710.35710AR75512_o.jpg", "https://www.melissa.com.br/file/v6565481657283586171/products/cor.35710.35710AR75512_o.jpg", "https://www.melissa.com.br/products/cor.35710.35710AR75513_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown-platform/cor.35710.35710AR75513_o.jpg", "https://www.melissa.com.br/file/v8733396605746371496/products/cor.35710.35710AR75513_o.jpg", "https://www.melissa.com.br/products/cor.35710.35710AR75514_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown-platform/cor.35710.35710AR75514_o.jpg", "https://www.melissa.com.br/file/v8530111064650002304/products/cor.35710.35710AR75514_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3519500256522800022/products/cor.34422.34422BT62410_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6651520486550743086/products/cor.34422.34422BT62415_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6632398600606526554/products/cor.34422.34422AW01710_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2369717406212893328/products/cor.34422.34422AW01711_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1673181045404680110/products/cor.34422.34422AW01712_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6219588034900513926/products/cor.34422.34422AW01713_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2083080561097109269/products/cor.34422.34422AW01714_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3637635702314354927/products/cor.34422.34422AW01715_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3670904876724382713/products/cor.34422.34422AW01716_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34422.34422AW01710_o.jpg", "https://www.melissa.com.br/p/melissa-sun-treasure-bag/cor.34422.34422AW01710_o.jpg", "https://www.melissa.com.br/file/v6632398600606526554/products/cor.34422.34422AW01710_o.jpg", "https://www.melissa.com.br/products/cor.34422.34422AW01711_o.jpg", "https://www.melissa.com.br/p/melissa-sun-treasure-bag/cor.34422.34422AW01711_o.jpg", "https://www.melissa.com.br/file/v2369717406212893328/products/cor.34422.34422AW01711_o.jpg", "https://www.melissa.com.br/products/cor.34422.34422AW01712_o.jpg", "https://www.melissa.com.br/p/melissa-sun-treasure-bag/cor.34422.34422AW01712_o.jpg", "https://www.melissa.com.br/file/v1673181045404680110/products/cor.34422.34422AW01712_o.jpg", "https://www.melissa.com.br/products/cor.34422.34422AW01713_o.jpg", "https://www.melissa.com.br/p/melissa-sun-treasure-bag/cor.34422.34422AW01713_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5686211683577143417/products/cor.35781.35781AW13210_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3541706143864233879/products/cor.35781.35781AW13211_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2704058131982176950/products/cor.35781.35781AW13212_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6558172178706570098/products/cor.35781.35781AW13213_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7634230050851067155/products/cor.35781.35781AW13214_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5818024399997458821/products/35781.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6187520414926250574/products/35781.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8381266688947823466/products/cor.35781.35781AW14010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3022115546733683301/products/cor.35781.35781AW14011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3830050340448440645/products/cor.35781.35781AW14012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5307860238541623818/products/cor.35781.35781AW14013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3180741896888390640/products/cor.35781.35781AW14014_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35781.35781AW14010_o.jpg", "https://www.melissa.com.br/p/melissa-sun-long-beach-ii/cor.35781.35781AW14010_o.jpg", "https://www.melissa.com.br/file/v8381266688947823466/products/cor.35781.35781AW14010_o.jpg", "https://www.melissa.com.br/products/cor.35781.35781AW14011_o.jpg", "https://www.melissa.com.br/p/melissa-sun-long-beach-ii/cor.35781.35781AW14011_o.jpg", "https://www.melissa.com.br/file/v3022115546733683301/products/cor.35781.35781AW14011_o.jpg", "https://www.melissa.com.br/products/cor.35781.35781AW14012_o.jpg", "https://www.melissa.com.br/p/melissa-sun-long-beach-ii/cor.35781.35781AW14012_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7101113918202140734/products/35864.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7924478132381262370/products/35864.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7101113918202140734/products/cor.35864.35864AX35910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2522703130713396012/products/cor.35864.35864AX35912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7537368417761384273/products/cor.35864.35864AX35913_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35864.35864AX35910_o.jpg", "https://www.melissa.com.br/p/melissa-sun-rodeo-platform/cor.35864.35864AX35910_o.jpg", "https://www.melissa.com.br/file/v7101113918202140734/products/cor.35864.35864AX35910_o.jpg", "https://www.melissa.com.br/products/cor.35864.35864AX35912_o.jpg", "https://www.melissa.com.br/p/melissa-sun-rodeo-platform/cor.35864.35864AX35912_o.jpg", "https://www.melissa.com.br/file/v2522703130713396012/products/cor.35864.35864AX35912_o.jpg", "https://www.melissa.com.br/products/cor.35864.35864AX35913_o.jpg", "https://www.melissa.com.br/p/melissa-sun-rodeo-platform/cor.35864.35864AX35913_o.jpg", "https://www.melissa.com.br/file/v7537368417761384273/products/cor.35864.35864AX35913_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6539592083885994388/products/cor.35864.35864AX36010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v350017582334771859/products/cor.35864.35864AX36011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6682163779041623386/products/cor.35864.35864AX36012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2984141441694862352/products/cor.35864.35864AX36013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4452795927886788371/products/cor.35864.35864AX36014_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35864.35864AX36010_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v452370342343554471/products/35810.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4800142901017865465/products/35810.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4307241168092027443/products/cor.35810.35810AX17410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4800142901017865465/products/cor.35810.35810AX17411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v622147915836673327/products/cor.35810.35810AX17412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2662689899376781897/products/cor.35810.35810AX17413_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35810.35810AX17410_o.jpg", "https://www.melissa.com.br/p/melissa-sun-leme/cor.35810.35810AX17410_o.jpg", "https://www.melissa.com.br/file/v4307241168092027443/products/cor.35810.35810AX17410_o.jpg", "https://www.melissa.com.br/products/cor.35810.35810AX17411_o.jpg", "https://www.melissa.com.br/p/melissa-sun-leme/cor.35810.35810AX17411_o.jpg", "https://www.melissa.com.br/file/v4800142901017865465/products/cor.35810.35810AX17411_o.jpg", "https://www.melissa.com.br/products/cor.35810.35810AX17412_o.jpg", "https://www.melissa.com.br/p/melissa-sun-leme/cor.35810.35810AX17412_o.jpg", "https://www.melissa.com.br/file/v622147915836673327/products/cor.35810.35810AX17412_o.jpg", "https://www.melissa.com.br/products/cor.35810.35810AX17413_o.jpg", "https://www.melissa.com.br/p/melissa-sun-leme/cor.35810.35810AX17413_o.jpg", "https://www.melissa.com.br/file/v2662689899376781897/products/cor.35810.35810AX17413_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v176670537841124430/products/cor.35810.35810AX18010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v49111040277020731/products/cor.35810.35810AX18011_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4363583732755091956/products/cor.35960.35960BC83312_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4397228460910162248/products/cor.35960.35960BC83310_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4346551978719462675/products/35960.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8734037244490037328/products/35960.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v719245786503459130/products/cor.35960.35960BC83311_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8063103827733087804/products/cor.35960.35960BC83313_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6655321512390365035/products/cor.35960.35960BC83314_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35960.35960BC83310_o.jpg", "https://www.melissa.com.br/p/melissa-sun-resort/cor.35960.35960BC83310_o.jpg", "https://www.melissa.com.br/file/v4397228460910162248/products/cor.35960.35960BC83310_o.jpg", "https://www.melissa.com.br/products/cor.35960.35960BC83311_o.jpg", "https://www.melissa.com.br/p/melissa-sun-resort/cor.35960.35960BC83311_o.jpg", "https://www.melissa.com.br/file/v719245786503459130/products/cor.35960.35960BC83311_o.jpg", "https://www.melissa.com.br/products/cor.35960.35960BC83312_o.jpg", "https://www.melissa.com.br/p/melissa-sun-resort/cor.35960.35960BC83312_o.jpg", "https://www.melissa.com.br/file/v4363583732755091956/products/cor.35960.35960BC83312_o.jpg", "https://www.melissa.com.br/products/cor.35960.35960BC83313_o.jpg", "https://www.melissa.com.br/p/melissa-sun-resort/cor.35960.35960BC83313_o.jpg", "https://www.melissa.com.br/file/v8063103827733087804/products/cor.35960.35960BC83313_o.jpg", "https://www.melissa.com.br/products/cor.35960.35960BC83314_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8589960284909734720/products/35961.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8036551748014438762/products/35961.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2274464609897116239/products/cor.35961.35961BC75210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8080306066694385657/products/cor.35961.35961BC75211_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2538678057308683798/products/cor.35961.35961BC75212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6719445421643831781/products/cor.35961.35961BC75213_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3028318834654894635/products/cor.35961.35961BC75214_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35961.35961BC75210_o.jpg", "https://www.melissa.com.br/p/melissa-sun-cruise/cor.35961.35961BC75210_o.jpg", "https://www.melissa.com.br/file/v2274464609897116239/products/cor.35961.35961BC75210_o.jpg", "https://www.melissa.com.br/products/cor.35961.35961BC75211_o.jpg", "https://www.melissa.com.br/p/melissa-sun-cruise/cor.35961.35961BC75211_o.jpg", "https://www.melissa.com.br/file/v8080306066694385657/products/cor.35961.35961BC75211_o.jpg", "https://www.melissa.com.br/products/cor.35961.35961BC75212_o.jpg", "https://www.melissa.com.br/p/melissa-sun-cruise/cor.35961.35961BC75212_o.jpg", "https://www.melissa.com.br/file/v2538678057308683798/products/cor.35961.35961BC75212_o.jpg", "https://www.melissa.com.br/products/cor.35961.35961BC75213_o.jpg", "https://www.melissa.com.br/p/melissa-sun-cruise/cor.35961.35961BC75213_o.jpg", "https://www.melissa.com.br/file/v6719445421643831781/products/cor.35961.35961BC75213_o.jpg", "https://www.melissa.com.br/products/cor.35961.35961BC75214_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1625514862631471898/products/cor.35959.35959BC73310_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7952199826675577559/products/cor.35959.35959BC73311_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v462033054919418855/products/35959.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7746647774336808077/products/35959.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v462033054919418855/products/cor.35959.35959BC72610_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7746647774336808077/products/cor.35959.35959BC72611_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9185634956260221468/products/cor.35959.35959BC72612_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v58124010787210558/products/cor.35959.35959BC72613_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4535920393638390449/products/cor.35959.35959BC72614_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35959.35959BC72610_o.jpg", "https://www.melissa.com.br/p/melissa-sun-leme-platform/cor.35959.35959BC72610_o.jpg", "https://www.melissa.com.br/file/v462033054919418855/products/cor.35959.35959BC72610_o.jpg", "https://www.melissa.com.br/products/cor.35959.35959BC72611_o.jpg", "https://www.melissa.com.br/p/melissa-sun-leme-platform/cor.35959.35959BC72611_o.jpg", "https://www.melissa.com.br/file/v7746647774336808077/products/cor.35959.35959BC72611_o.jpg", "https://www.melissa.com.br/products/cor.35959.35959BC72612_o.jpg", "https://www.melissa.com.br/p/melissa-sun-leme-platform/cor.35959.35959BC72612_o.jpg", "https://www.melissa.com.br/file/v9185634956260221468/products/cor.35959.35959BC72612_o.jpg", "https://www.melissa.com.br/products/cor.35959.35959BC72613_o.jpg", "https://www.melissa.com.br/p/melissa-sun-leme-platform/cor.35959.35959BC72613_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7237845899277150870/products/cor.36098.36098BG38310_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7022280181799347794/products/cor.36098.36098BG38311_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8810217906865639265/products/cor.36098.36098BG38210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7978239493840866363/products/cor.36098.36098BG38211_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9070710303744549573/products/cor.36098.36098BG38212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4179820474461083719/products/cor.36098.36098BG38213_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2758233678565297676/products/cor.36098.36098BG38214_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36098.36098BG38210_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown-ii/cor.36098.36098BG38210_o.jpg", "https://www.melissa.com.br/file/v8810217906865639265/products/cor.36098.36098BG38210_o.jpg", "https://www.melissa.com.br/products/cor.36098.36098BG38211_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown-ii/cor.36098.36098BG38211_o.jpg", "https://www.melissa.com.br/file/v7978239493840866363/products/cor.36098.36098BG38211_o.jpg", "https://www.melissa.com.br/products/cor.36098.36098BG38212_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown-ii/cor.36098.36098BG38212_o.jpg", "https://www.melissa.com.br/file/v9070710303744549573/products/cor.36098.36098BG38212_o.jpg", "https://www.melissa.com.br/products/cor.36098.36098BG38213_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown-ii/cor.36098.36098BG38213_o.jpg", "https://www.melissa.com.br/file/v4179820474461083719/products/cor.36098.36098BG38213_o.jpg", "https://www.melissa.com.br/products/cor.36098.36098BG38214_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2588741358101877183/products/cor.36129.36129BG37010_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2541661054870928185/products/cor.36129.36129BG37011_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3057580937412447032/products/cor.36129.36129BG37012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6285088810088081307/products/cor.36129.36129BG37013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7871124221303958792/products/cor.36129.36129BG37014_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36129.36129BG37010_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown-platform-ii/cor.36129.36129BG37010_o.jpg", "https://www.melissa.com.br/file/v2588741358101877183/products/cor.36129.36129BG37010_o.jpg", "https://www.melissa.com.br/products/cor.36129.36129BG37011_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown-platform-ii/cor.36129.36129BG37011_o.jpg", "https://www.melissa.com.br/file/v2541661054870928185/products/cor.36129.36129BG37011_o.jpg", "https://www.melissa.com.br/products/cor.36129.36129BG37012_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown-platform-ii/cor.36129.36129BG37012_o.jpg", "https://www.melissa.com.br/file/v3057580937412447032/products/cor.36129.36129BG37012_o.jpg", "https://www.melissa.com.br/products/cor.36129.36129BG37013_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown-platform-ii/cor.36129.36129BG37013_o.jpg", "https://www.melissa.com.br/file/v6285088810088081307/products/cor.36129.36129BG37013_o.jpg", "https://www.melissa.com.br/products/cor.36129.36129BG37014_o.jpg", "https://www.melissa.com.br/p/melissa-sun-downtown-platform-ii/cor.36129.36129BG37014_o.jpg", "https://www.melissa.com.br/file/v7871124221303958792/products/cor.36129.36129BG37014_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4677637593508827911/products/cor.36060.36060BH75110_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5663703686289337702/products/cor.36060.36060BH75111_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1879543626879863695/products/36060.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8559499584304438638/products/36060.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4445503218216209039/products/cor.36060.36060BH77210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2361683709507923413/products/cor.36060.36060BH77211_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5163022589643913728/products/cor.36060.36060BH77212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3704748448249151037/products/cor.36060.36060BH77213_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6229393918715771238/products/cor.36060.36060BH77214_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9133197814228052891/products/cor.36060.36060BH77215_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36060.36060BH77210_o.jpg", "https://www.melissa.com.br/p/melissa-sun-aurora/cor.36060.36060BH77210_o.jpg", "https://www.melissa.com.br/file/v4445503218216209039/products/cor.36060.36060BH77210_o.jpg", "https://www.melissa.com.br/products/cor.36060.36060BH77211_o.jpg", "https://www.melissa.com.br/p/melissa-sun-aurora/cor.36060.36060BH77211_o.jpg", "https://www.melissa.com.br/file/v2361683709507923413/products/cor.36060.36060BH77211_o.jpg", "https://www.melissa.com.br/products/cor.36060.36060BH77212_o.jpg", "https://www.melissa.com.br/p/melissa-sun-aurora/cor.36060.36060BH77212_o.jpg", "https://www.melissa.com.br/file/v5163022589643913728/products/cor.36060.36060BH77212_o.jpg", "https://www.melissa.com.br/products/cor.36060.36060BH77213_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2369905602875327438/products/cor.36082.36082BG33710_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4904858974829875836/products/36082.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v434149213141005557/products/36082.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1661892563104945600/products/cor.36082.36082BG33910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4437721587710612673/products/cor.36082.36082BG33911_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6019438486864034636/products/cor.36082.36082BG33912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4606242921464042300/products/cor.36082.36082BG33913_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8329401164482958248/products/cor.36082.36082BG33914_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36082.36082BG33910_o.jpg", "https://www.melissa.com.br/p/melissa-sun-sunset-ii/cor.36082.36082BG33910_o.jpg", "https://www.melissa.com.br/file/v1661892563104945600/products/cor.36082.36082BG33910_o.jpg", "https://www.melissa.com.br/products/cor.36082.36082BG33911_o.jpg", "https://www.melissa.com.br/p/melissa-sun-sunset-ii/cor.36082.36082BG33911_o.jpg", "https://www.melissa.com.br/file/v4437721587710612673/products/cor.36082.36082BG33911_o.jpg", "https://www.melissa.com.br/products/cor.36082.36082BG33912_o.jpg", "https://www.melissa.com.br/p/melissa-sun-sunset-ii/cor.36082.36082BG33912_o.jpg", "https://www.melissa.com.br/file/v6019438486864034636/products/cor.36082.36082BG33912_o.jpg", "https://www.melissa.com.br/products/cor.36082.36082BG33913_o.jpg", "https://www.melissa.com.br/p/melissa-sun-sunset-ii/cor.36082.36082BG33913_o.jpg", "https://www.melissa.com.br/file/v4606242921464042300/products/cor.36082.36082BG33913_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5882878892809696696/products/cor.36063.36063BH75910_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1079351297971739926/products/cor.36063.36063BH75911_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v545302578181027226/products/cor.36063.36063BH76410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1957955323092219231/products/cor.36063.36063BH76411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6799119597558705577/products/cor.36063.36063BH76412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3167656392753879699/products/cor.36063.36063BH76413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1436589038442518405/products/cor.36063.36063BH76414_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36063.36063BH76410_o.jpg", "https://www.melissa.com.br/p/melissa-sun-ginga/cor.36063.36063BH76410_o.jpg", "https://www.melissa.com.br/file/v545302578181027226/products/cor.36063.36063BH76410_o.jpg", "https://www.melissa.com.br/products/cor.36063.36063BH76411_o.jpg", "https://www.melissa.com.br/p/melissa-sun-ginga/cor.36063.36063BH76411_o.jpg", "https://www.melissa.com.br/file/v1957955323092219231/products/cor.36063.36063BH76411_o.jpg", "https://www.melissa.com.br/products/cor.36063.36063BH76412_o.jpg", "https://www.melissa.com.br/p/melissa-sun-ginga/cor.36063.36063BH76412_o.jpg", "https://www.melissa.com.br/file/v6799119597558705577/products/cor.36063.36063BH76412_o.jpg", "https://www.melissa.com.br/products/cor.36063.36063BH76413_o.jpg", "https://www.melissa.com.br/p/melissa-sun-ginga/cor.36063.36063BH76413_o.jpg", "https://www.melissa.com.br/file/v3167656392753879699/products/cor.36063.36063BH76413_o.jpg", "https://www.melissa.com.br/products/cor.36063.36063BH76414_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5828903466791456255/products/cor.35736.35736AT01212_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3423688035801051701/products/cor.35736.35736AT01210_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3423688035801051701/products/35736.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8489711343860002589/products/cor.35736.35736AS90310_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5204004999521083395/products/cor.35736.35736AS90312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2212263675095432337/products/cor.35736.35736AS90313_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35736.35736AS90310_o.jpg", "https://www.melissa.com.br/p/melissa-sun-sandiego/cor.35736.35736AS90310_o.jpg", "https://www.melissa.com.br/file/v8489711343860002589/products/cor.35736.35736AS90310_o.jpg", "https://www.melissa.com.br/products/cor.35736.35736AS90312_o.jpg", "https://www.melissa.com.br/p/melissa-sun-sandiego/cor.35736.35736AS90312_o.jpg", "https://www.melissa.com.br/file/v5204004999521083395/products/cor.35736.35736AS90312_o.jpg", "https://www.melissa.com.br/products/cor.35736.35736AS90313_o.jpg", "https://www.melissa.com.br/p/melissa-sun-sandiego/cor.35736.35736AS90313_o.jpg", "https://www.melissa.com.br/file/v2212263675095432337/products/cor.35736.35736AS90313_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2071296944354361213/general/B2C_MelissaBR_NoImage.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9079999205776962133/products/37430.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3113066209466153485/products/37430.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2310006475341692341/products/cor.37430.37430BN72010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5249944616314760203/products/cor.37430.37430BN72011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2959045936195161733/products/cor.37430.37430BN72012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6145632172948924843/products/cor.37430.37430BN72013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3158311609947246014/products/cor.37430.37430BN72014_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37430.37430BN72010_o.jpg", "https://www.melissa.com.br/p/melissa-sun-sunset-platform/cor.37430.37430BN72010_o.jpg", "https://www.melissa.com.br/file/v2310006475341692341/products/cor.37430.37430BN72010_o.jpg", "https://www.melissa.com.br/products/cor.37430.37430BN72011_o.jpg", "https://www.melissa.com.br/p/melissa-sun-sunset-platform/cor.37430.37430BN72011_o.jpg", "https://www.melissa.com.br/file/v5249944616314760203/products/cor.37430.37430BN72011_o.jpg", "https://www.melissa.com.br/products/cor.37430.37430BN72012_o.jpg", "https://www.melissa.com.br/p/melissa-sun-sunset-platform/cor.37430.37430BN72012_o.jpg", "https://www.melissa.com.br/file/v2959045936195161733/products/cor.37430.37430BN72012_o.jpg", "https://www.melissa.com.br/products/cor.37430.37430BN72013_o.jpg", "https://www.melissa.com.br/p/melissa-sun-sunset-platform/cor.37430.37430BN72013_o.jpg", "https://www.melissa.com.br/file/v6145632172948924843/products/cor.37430.37430BN72013_o.jpg", "https://www.melissa.com.br/products/cor.37430.37430BN72014_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1814634620424066647/products/37437.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3797251927960090560/products/37437.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v283384993794931558/products/cor.37437.37437BN73910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4684081525158052907/products/cor.37437.37437BN73911_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5571861094884934828/products/cor.37437.37437BN73912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v88727358911202627/products/cor.37437.37437BN73913_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2514447987262454828/products/cor.37437.37437BN73914_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37437.37437BN73910_o.jpg", "https://www.melissa.com.br/p/melissa-sun-samba/cor.37437.37437BN73910_o.jpg", "https://www.melissa.com.br/file/v283384993794931558/products/cor.37437.37437BN73910_o.jpg", "https://www.melissa.com.br/products/cor.37437.37437BN73911_o.jpg", "https://www.melissa.com.br/p/melissa-sun-samba/cor.37437.37437BN73911_o.jpg", "https://www.melissa.com.br/file/v4684081525158052907/products/cor.37437.37437BN73911_o.jpg", "https://www.melissa.com.br/products/cor.37437.37437BN73912_o.jpg", "https://www.melissa.com.br/p/melissa-sun-samba/cor.37437.37437BN73912_o.jpg", "https://www.melissa.com.br/file/v5571861094884934828/products/cor.37437.37437BN73912_o.jpg", "https://www.melissa.com.br/products/cor.37437.37437BN73913_o.jpg", "https://www.melissa.com.br/p/melissa-sun-samba/cor.37437.37437BN73913_o.jpg", "https://www.melissa.com.br/file/v88727358911202627/products/cor.37437.37437BN73913_o.jpg", "https://www.melissa.com.br/products/cor.37437.37437BN73914_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2639409000901081700/products/cor.38067.38067BT32610_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8679146330686003061/products/cor.38067.38067BT32612_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2676690790854125546/products/cor.38067.38067BT32613_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2639409000901081700/products/38067.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2472402215655352576/products/38067.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2472402215655352576/products/cor.38067.38067BT32611_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1237010545732673693/products/cor.38067.38067BT32614_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.38067.38067BT32610_o.jpg", "https://www.melissa.com.br/p/melissa-sun-carioca/cor.38067.38067BT32610_o.jpg", "https://www.melissa.com.br/file/v2639409000901081700/products/cor.38067.38067BT32610_o.jpg", "https://www.melissa.com.br/products/cor.38067.38067BT32611_o.jpg", "https://www.melissa.com.br/p/melissa-sun-carioca/cor.38067.38067BT32611_o.jpg", "https://www.melissa.com.br/file/v2472402215655352576/products/cor.38067.38067BT32611_o.jpg", "https://www.melissa.com.br/products/cor.38067.38067BT32612_o.jpg", "https://www.melissa.com.br/p/melissa-sun-carioca/cor.38067.38067BT32612_o.jpg", "https://www.melissa.com.br/file/v8679146330686003061/products/cor.38067.38067BT32612_o.jpg", "https://www.melissa.com.br/products/cor.38067.38067BT32613_o.jpg", "https://www.melissa.com.br/p/melissa-sun-carioca/cor.38067.38067BT32613_o.jpg", "https://www.melissa.com.br/file/v2676690790854125546/products/cor.38067.38067BT32613_o.jpg", "https://www.melissa.com.br/products/cor.38067.38067BT32614_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9159214706519843987/products/38066.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1437838468603617834/products/38066.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6516528230861703973/products/cor.38066.38066BT33410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1305595727660224224/products/cor.38066.38066BT33411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4594689211167617497/products/cor.38066.38066BT33412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5287418314609894781/products/cor.38066.38066BT33413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6182126503506064377/products/cor.38066.38066BT33414_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.38066.38066BT33410_o.jpg", "https://www.melissa.com.br/p/melissa-sun-barra-platform-ii/cor.38066.38066BT33410_o.jpg", "https://www.melissa.com.br/file/v6516528230861703973/products/cor.38066.38066BT33410_o.jpg", "https://www.melissa.com.br/products/cor.38066.38066BT33411_o.jpg", "https://www.melissa.com.br/p/melissa-sun-barra-platform-ii/cor.38066.38066BT33411_o.jpg", "https://www.melissa.com.br/file/v1305595727660224224/products/cor.38066.38066BT33411_o.jpg", "https://www.melissa.com.br/products/cor.38066.38066BT33412_o.jpg", "https://www.melissa.com.br/p/melissa-sun-barra-platform-ii/cor.38066.38066BT33412_o.jpg", "https://www.melissa.com.br/file/v4594689211167617497/products/cor.38066.38066BT33412_o.jpg", "https://www.melissa.com.br/products/cor.38066.38066BT33413_o.jpg", "https://www.melissa.com.br/p/melissa-sun-barra-platform-ii/cor.38066.38066BT33413_o.jpg", "https://www.melissa.com.br/file/v5287418314609894781/products/cor.38066.38066BT33413_o.jpg", "https://www.melissa.com.br/products/cor.38066.38066BT33414_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2190820353679380725/products/37912.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v240266638801728174/products/37912.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2190820353679380725/products/cor.37912.37912BT04410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v240266638801728174/products/cor.37912.37912BT04411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1519232900716349474/products/cor.37912.37912BT04412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8603540951800244987/products/cor.37912.37912BT04413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v877779572217707842/products/cor.37912.37912BT04414_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37912.37912BT04410_o.jpg", "https://www.melissa.com.br/p/melissa-sun-flip-flop-platform/cor.37912.37912BT04410_o.jpg", "https://www.melissa.com.br/file/v2190820353679380725/products/cor.37912.37912BT04410_o.jpg", "https://www.melissa.com.br/products/cor.37912.37912BT04411_o.jpg", "https://www.melissa.com.br/p/melissa-sun-flip-flop-platform/cor.37912.37912BT04411_o.jpg", "https://www.melissa.com.br/file/v240266638801728174/products/cor.37912.37912BT04411_o.jpg", "https://www.melissa.com.br/products/cor.37912.37912BT04412_o.jpg", "https://www.melissa.com.br/p/melissa-sun-flip-flop-platform/cor.37912.37912BT04412_o.jpg", "https://www.melissa.com.br/file/v1519232900716349474/products/cor.37912.37912BT04412_o.jpg", "https://www.melissa.com.br/products/cor.37912.37912BT04413_o.jpg", "https://www.melissa.com.br/p/melissa-sun-flip-flop-platform/cor.37912.37912BT04413_o.jpg", "https://www.melissa.com.br/file/v8603540951800244987/products/cor.37912.37912BT04413_o.jpg", "https://www.melissa.com.br/products/cor.37912.37912BT04414_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4267705747676639547/products/38062.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7629963631994208389/products/38062.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4267705747676639547/products/cor.38062.38062BU74610_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7629963631994208389/products/cor.38062.38062BU74611_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4411112292824220330/products/cor.38062.38062BU74612_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4534893765987174178/products/cor.38062.38062BU74613_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v566969174498203485/products/cor.38062.38062BU74614_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.38062.38062BU74610_o.jpg", "https://www.melissa.com.br/p/melissa-sun-leblon/cor.38062.38062BU74610_o.jpg", "https://www.melissa.com.br/file/v4267705747676639547/products/cor.38062.38062BU74610_o.jpg", "https://www.melissa.com.br/products/cor.38062.38062BU74611_o.jpg", "https://www.melissa.com.br/p/melissa-sun-leblon/cor.38062.38062BU74611_o.jpg", "https://www.melissa.com.br/file/v7629963631994208389/products/cor.38062.38062BU74611_o.jpg", "https://www.melissa.com.br/products/cor.38062.38062BU74612_o.jpg", "https://www.melissa.com.br/p/melissa-sun-leblon/cor.38062.38062BU74612_o.jpg", "https://www.melissa.com.br/file/v4411112292824220330/products/cor.38062.38062BU74612_o.jpg", "https://www.melissa.com.br/products/cor.38062.38062BU74613_o.jpg", "https://www.melissa.com.br/p/melissa-sun-leblon/cor.38062.38062BU74613_o.jpg", "https://www.melissa.com.br/file/v4534893765987174178/products/cor.38062.38062BU74613_o.jpg", "https://www.melissa.com.br/products/cor.38062.38062BU74614_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v58943596619055501/products/cor.33973.33973BC25812_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v699215511433344696/products/cor.33973.33973BC25810_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v699215511433344696/products/33973.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3224459833452111174/products/33973.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4534876034245161054/products/cor.33973.33973AS38510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8815434796709423994/products/cor.33973.33973AS38511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5066802219725473507/products/cor.33973.33973AS38512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5376398041098159473/products/cor.33973.33973AS38513_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.33973.33973AS38510_o.jpg", "https://www.melissa.com.br/p/melissa-free-print-slide/cor.33973.33973AS38510_o.jpg", "https://www.melissa.com.br/file/v4534876034245161054/products/cor.33973.33973AS38510_o.jpg", "https://www.melissa.com.br/products/cor.33973.33973AS38511_o.jpg", "https://www.melissa.com.br/p/melissa-free-print-slide/cor.33973.33973AS38511_o.jpg", "https://www.melissa.com.br/file/v8815434796709423994/products/cor.33973.33973AS38511_o.jpg", "https://www.melissa.com.br/products/cor.33973.33973AS38512_o.jpg", "https://www.melissa.com.br/p/melissa-free-print-slide/cor.33973.33973AS38512_o.jpg", "https://www.melissa.com.br/file/v5066802219725473507/products/cor.33973.33973AS38512_o.jpg", "https://www.melissa.com.br/products/cor.33973.33973AS38513_o.jpg", "https://www.melissa.com.br/p/melissa-free-print-slide/cor.33973.33973AS38513_o.jpg", "https://www.melissa.com.br/file/v5376398041098159473/products/cor.33973.33973AS38513_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7203129549972308770/products/cor.33996.33996BC24912_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v601286728385042132/products/cor.33996.33996BC24910_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4392305421217946290/products/33996.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2497418431990684685/products/33996.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8712864653774508501/products/cor.33996.33996AQ64210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2497418431990684685/products/cor.33996.33996AQ64211_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7711577920440238723/products/cor.33996.33996AQ64212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7788057894948374043/products/cor.33996.33996AQ64213_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v143199071018126310/products/cor.33996.33996AQ64214_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.33996.33996AQ64210_o.jpg", "https://www.melissa.com.br/p/melissa-free-print-platform/cor.33996.33996AQ64210_o.jpg", "https://www.melissa.com.br/file/v8712864653774508501/products/cor.33996.33996AQ64210_o.jpg", "https://www.melissa.com.br/products/cor.33996.33996AQ64211_o.jpg", "https://www.melissa.com.br/p/melissa-free-print-platform/cor.33996.33996AQ64211_o.jpg", "https://www.melissa.com.br/file/v2497418431990684685/products/cor.33996.33996AQ64211_o.jpg", "https://www.melissa.com.br/products/cor.33996.33996AQ64212_o.jpg", "https://www.melissa.com.br/p/melissa-free-print-platform/cor.33996.33996AQ64212_o.jpg", "https://www.melissa.com.br/file/v7711577920440238723/products/cor.33996.33996AQ64212_o.jpg", "https://www.melissa.com.br/products/cor.33996.33996AQ64213_o.jpg", "https://www.melissa.com.br/p/melissa-free-print-platform/cor.33996.33996AQ64213_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7159494326587634622/products/cor.35875.35875AZ05310_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7456154828961547155/products/cor.35875.35875AZ05311_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7550903470860084938/products/35875.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3342400064640628262/products/35875.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4721637184340834275/products/cor.35875.35875BB48010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8658310633788602711/products/cor.35875.35875BB48011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8168466716740103811/products/cor.35875.35875BB48012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2235375831427041107/products/cor.35875.35875BB48013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1602780396024908419/products/cor.35875.35875BB48014_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35875.35875BB48010_o.jpg", "https://www.melissa.com.br/p/melissa-free-fuzzy-platform/cor.35875.35875BB48010_o.jpg", "https://www.melissa.com.br/file/v4721637184340834275/products/cor.35875.35875BB48010_o.jpg", "https://www.melissa.com.br/products/cor.35875.35875BB48011_o.jpg", "https://www.melissa.com.br/p/melissa-free-fuzzy-platform/cor.35875.35875BB48011_o.jpg", "https://www.melissa.com.br/file/v8658310633788602711/products/cor.35875.35875BB48011_o.jpg", "https://www.melissa.com.br/products/cor.35875.35875BB48012_o.jpg", "https://www.melissa.com.br/p/melissa-free-fuzzy-platform/cor.35875.35875BB48012_o.jpg", "https://www.melissa.com.br/file/v8168466716740103811/products/cor.35875.35875BB48012_o.jpg", "https://www.melissa.com.br/products/cor.35875.35875BB48013_o.jpg", "https://www.melissa.com.br/p/melissa-free-fuzzy-platform/cor.35875.35875BB48013_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2292721325862521736/products/cor.35995.35995BB90712_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7505480339266440807/products/cor.35995.35995BB90710_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6890545513124146531/products/35995.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2762619913388279997/products/35995.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6890545513124146531/products/cor.35995.35995BB90910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2762619913388279997/products/cor.35995.35995BB90911_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8368269338447224879/products/cor.35995.35995BB90912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1262106422015070002/products/cor.35995.35995BB90913_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5866506060238590896/products/cor.35995.35995BB90914_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35995.35995BB90910_o.jpg", "https://www.melissa.com.br/p/melissa-free-fuzzy-printed-platform/cor.35995.35995BB90910_o.jpg", "https://www.melissa.com.br/file/v6890545513124146531/products/cor.35995.35995BB90910_o.jpg", "https://www.melissa.com.br/products/cor.35995.35995BB90911_o.jpg", "https://www.melissa.com.br/p/melissa-free-fuzzy-printed-platform/cor.35995.35995BB90911_o.jpg", "https://www.melissa.com.br/file/v2762619913388279997/products/cor.35995.35995BB90911_o.jpg", "https://www.melissa.com.br/products/cor.35995.35995BB90912_o.jpg", "https://www.melissa.com.br/p/melissa-free-fuzzy-printed-platform/cor.35995.35995BB90912_o.jpg", "https://www.melissa.com.br/file/v8368269338447224879/products/cor.35995.35995BB90912_o.jpg", "https://www.melissa.com.br/products/cor.35995.35995BB90913_o.jpg", "https://www.melissa.com.br/p/melissa-free-fuzzy-printed-platform/cor.35995.35995BB90913_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3698596781916193237/products/cor.35939.35939BC03610_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4616090971165309425/products/cor.35939.35939BC03612_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4065497787846543721/products/35939.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5162514407572295008/products/35939.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4450712308717356944/products/cor.35939.35939BC03611_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1677451456543582719/products/cor.35939.35939BC03613_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5907067782790305141/products/cor.35939.35939BC03614_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35939.35939BC03610_o.jpg", "https://www.melissa.com.br/p/melissa-free-clog-platform/cor.35939.35939BC03610_o.jpg", "https://www.melissa.com.br/file/v3698596781916193237/products/cor.35939.35939BC03610_o.jpg", "https://www.melissa.com.br/products/cor.35939.35939BC03611_o.jpg", "https://www.melissa.com.br/p/melissa-free-clog-platform/cor.35939.35939BC03611_o.jpg", "https://www.melissa.com.br/file/v4450712308717356944/products/cor.35939.35939BC03611_o.jpg", "https://www.melissa.com.br/products/cor.35939.35939BC03612_o.jpg", "https://www.melissa.com.br/p/melissa-free-clog-platform/cor.35939.35939BC03612_o.jpg", "https://www.melissa.com.br/file/v4616090971165309425/products/cor.35939.35939BC03612_o.jpg", "https://www.melissa.com.br/products/cor.35939.35939BC03613_o.jpg", "https://www.melissa.com.br/p/melissa-free-clog-platform/cor.35939.35939BC03613_o.jpg", "https://www.melissa.com.br/file/v1677451456543582719/products/cor.35939.35939BC03613_o.jpg", "https://www.melissa.com.br/products/cor.35939.35939BC03614_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3711095620310319865/products/cor.35969.35969BB72812_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1442591689805632399/products/cor.35969.35969BB72810_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1442591689805632399/products/35969.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1677746032976903532/products/35969.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9066418989785026710/products/cor.35969.35969BB73110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1648919140738373830/products/cor.35969.35969BB73111_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v999998550515938345/products/cor.35969.35969BB73112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2663070587889819245/products/cor.35969.35969BB73113_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v488559811383016837/products/cor.35969.35969BB73114_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35969.35969BB73110_o.jpg", "https://www.melissa.com.br/p/melissa-free-clog-printed-platform/cor.35969.35969BB73110_o.jpg", "https://www.melissa.com.br/file/v9066418989785026710/products/cor.35969.35969BB73110_o.jpg", "https://www.melissa.com.br/products/cor.35969.35969BB73111_o.jpg", "https://www.melissa.com.br/p/melissa-free-clog-printed-platform/cor.35969.35969BB73111_o.jpg", "https://www.melissa.com.br/file/v1648919140738373830/products/cor.35969.35969BB73111_o.jpg", "https://www.melissa.com.br/products/cor.35969.35969BB73112_o.jpg", "https://www.melissa.com.br/p/melissa-free-clog-printed-platform/cor.35969.35969BB73112_o.jpg", "https://www.melissa.com.br/file/v999998550515938345/products/cor.35969.35969BB73112_o.jpg", "https://www.melissa.com.br/products/cor.35969.35969BB73113_o.jpg", "https://www.melissa.com.br/p/melissa-free-clog-printed-platform/cor.35969.35969BB73113_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5722316242468172505/products/cor.35859.35859AS38410_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2957618537788474254/products/cor.35859.35859AS38411_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7487212204956120948/products/35859.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6152023655640103202/products/35859.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2900380358430272980/products/cor.35859.35859AQ64010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4993612729883746162/products/cor.35859.35859AQ64011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5751984987203371640/products/cor.35859.35859AQ64012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v496051826264875190/products/cor.35859.35859AQ64013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2876036948059374954/products/cor.35859.35859AQ64014_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35859.35859AQ64010_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide/cor.35859.35859AQ64010_o.jpg", "https://www.melissa.com.br/file/v2900380358430272980/products/cor.35859.35859AQ64010_o.jpg", "https://www.melissa.com.br/products/cor.35859.35859AQ64011_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide/cor.35859.35859AQ64011_o.jpg", "https://www.melissa.com.br/file/v4993612729883746162/products/cor.35859.35859AQ64011_o.jpg", "https://www.melissa.com.br/products/cor.35859.35859AQ64012_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide/cor.35859.35859AQ64012_o.jpg", "https://www.melissa.com.br/file/v5751984987203371640/products/cor.35859.35859AQ64012_o.jpg", "https://www.melissa.com.br/products/cor.35859.35859AQ64013_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide/cor.35859.35859AQ64013_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v498731060366666363/products/cor.35867.35867BL92010_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4350272384565792456/products/cor.35867.35867BL92012_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1052406321783915991/products/35867.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2386923587966181657/products/35867.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5375497583589881113/products/cor.35867.35867AY18710_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4022702146149427318/products/cor.35867.35867AY18711_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2776720185734600142/products/cor.35867.35867AY18712_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4748707798235922686/products/cor.35867.35867AY18713_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3037687449983078499/products/cor.35867.35867AY18714_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35867.35867AY18710_o.jpg", "https://www.melissa.com.br/p/melissa-free-fuzzy-slide/cor.35867.35867AY18710_o.jpg", "https://www.melissa.com.br/file/v5375497583589881113/products/cor.35867.35867AY18710_o.jpg", "https://www.melissa.com.br/products/cor.35867.35867AY18711_o.jpg", "https://www.melissa.com.br/p/melissa-free-fuzzy-slide/cor.35867.35867AY18711_o.jpg", "https://www.melissa.com.br/file/v4022702146149427318/products/cor.35867.35867AY18711_o.jpg", "https://www.melissa.com.br/products/cor.35867.35867AY18712_o.jpg", "https://www.melissa.com.br/p/melissa-free-fuzzy-slide/cor.35867.35867AY18712_o.jpg", "https://www.melissa.com.br/file/v2776720185734600142/products/cor.35867.35867AY18712_o.jpg", "https://www.melissa.com.br/products/cor.35867.35867AY18713_o.jpg", "https://www.melissa.com.br/p/melissa-free-fuzzy-slide/cor.35867.35867AY18713_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1831618672960717028/products/cor.36088.36088BE88510_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8561085679798041985/products/cor.36088.36088BE88511_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4285870700668619595/products/36088.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v306795143801218804/products/36088.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5167596999187252344/products/cor.36088.36088BE88610_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6269505267088101564/products/cor.36088.36088BE88611_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4255574749533045081/products/cor.36088.36088BE88612_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7926469878256132410/products/cor.36088.36088BE88613_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2640361836040030735/products/cor.36088.36088BE88614_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36088.36088BE88610_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-thong/cor.36088.36088BE88610_o.jpg", "https://www.melissa.com.br/file/v5167596999187252344/products/cor.36088.36088BE88610_o.jpg", "https://www.melissa.com.br/products/cor.36088.36088BE88611_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-thong/cor.36088.36088BE88611_o.jpg", "https://www.melissa.com.br/file/v6269505267088101564/products/cor.36088.36088BE88611_o.jpg", "https://www.melissa.com.br/products/cor.36088.36088BE88612_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-thong/cor.36088.36088BE88612_o.jpg", "https://www.melissa.com.br/file/v4255574749533045081/products/cor.36088.36088BE88612_o.jpg", "https://www.melissa.com.br/products/cor.36088.36088BE88613_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-thong/cor.36088.36088BE88613_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v791200645858557427/products/cor.35927.35927BC50610_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9051449739029789568/products/cor.35927.35927BC50611_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2725026491477601739/products/35927.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2640890705878167735/products/35927.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5604042699562465946/products/cor.35927.35927BC50210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5652418723301147834/products/cor.35927.35927BC50211_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5689870847510800883/products/cor.35927.35927BC50212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3573500462837377183/products/cor.35927.35927BC50213_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7254559709858602482/products/cor.35927.35927BC50214_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35927.35927BC50210_o.jpg", "https://www.melissa.com.br/p/melissa-free-rise/cor.35927.35927BC50210_o.jpg", "https://www.melissa.com.br/file/v5604042699562465946/products/cor.35927.35927BC50210_o.jpg", "https://www.melissa.com.br/products/cor.35927.35927BC50211_o.jpg", "https://www.melissa.com.br/p/melissa-free-rise/cor.35927.35927BC50211_o.jpg", "https://www.melissa.com.br/file/v5652418723301147834/products/cor.35927.35927BC50211_o.jpg", "https://www.melissa.com.br/products/cor.35927.35927BC50212_o.jpg", "https://www.melissa.com.br/p/melissa-free-rise/cor.35927.35927BC50212_o.jpg", "https://www.melissa.com.br/file/v5689870847510800883/products/cor.35927.35927BC50212_o.jpg", "https://www.melissa.com.br/products/cor.35927.35927BC50213_o.jpg", "https://www.melissa.com.br/p/melissa-free-rise/cor.35927.35927BC50213_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8410424295243693496/products/cor.36149.36149BG69110_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7664098605398608819/products/cor.36149.36149BG69112_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2619216011132536533/products/cor.36149.36149BG68410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3893086643583610136/products/cor.36149.36149BG68411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5251317476462757040/products/cor.36149.36149BG68412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3217453274601516234/products/cor.36149.36149BG68413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6334329644537957509/products/cor.36149.36149BG68414_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36149.36149BG68410_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-denim/cor.36149.36149BG68410_o.jpg", "https://www.melissa.com.br/file/v2619216011132536533/products/cor.36149.36149BG68410_o.jpg", "https://www.melissa.com.br/products/cor.36149.36149BG68411_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-denim/cor.36149.36149BG68411_o.jpg", "https://www.melissa.com.br/file/v3893086643583610136/products/cor.36149.36149BG68411_o.jpg", "https://www.melissa.com.br/products/cor.36149.36149BG68412_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-denim/cor.36149.36149BG68412_o.jpg", "https://www.melissa.com.br/file/v5251317476462757040/products/cor.36149.36149BG68412_o.jpg", "https://www.melissa.com.br/products/cor.36149.36149BG68413_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-denim/cor.36149.36149BG68413_o.jpg", "https://www.melissa.com.br/file/v3217453274601516234/products/cor.36149.36149BG68413_o.jpg", "https://www.melissa.com.br/products/cor.36149.36149BG68414_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2989639114996248597/products/cor.36096.36096BH04210_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3654864029367357031/products/cor.36096.36096BH04211_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7623694814675571397/products/36096.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8752160970253623721/products/36096.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8357992172930632570/products/cor.36096.36096BH04510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1377178396956627314/products/cor.36096.36096BH04511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4407043202945338640/products/cor.36096.36096BH04512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v415194290011344140/products/cor.36096.36096BH04513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v163802252442828532/products/cor.36096.36096BH04514_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36096.36096BH04510_o.jpg", "https://www.melissa.com.br/p/melissa-free-possession/cor.36096.36096BH04510_o.jpg", "https://www.melissa.com.br/file/v8357992172930632570/products/cor.36096.36096BH04510_o.jpg", "https://www.melissa.com.br/products/cor.36096.36096BH04511_o.jpg", "https://www.melissa.com.br/p/melissa-free-possession/cor.36096.36096BH04511_o.jpg", "https://www.melissa.com.br/file/v1377178396956627314/products/cor.36096.36096BH04511_o.jpg", "https://www.melissa.com.br/products/cor.36096.36096BH04512_o.jpg", "https://www.melissa.com.br/p/melissa-free-possession/cor.36096.36096BH04512_o.jpg", "https://www.melissa.com.br/file/v4407043202945338640/products/cor.36096.36096BH04512_o.jpg", "https://www.melissa.com.br/products/cor.36096.36096BH04513_o.jpg", "https://www.melissa.com.br/p/melissa-free-possession/cor.36096.36096BH04513_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3769211421638868938/products/cor.36126.36126BF58010_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v805208679725155172/products/cor.36126.36126BF58012_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1088903393118144921/products/cor.36126.36126BF58110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v725941133816373386/products/cor.36126.36126BF58111_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3278894840213365054/products/cor.36126.36126BF58112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7428384469058239963/products/cor.36126.36126BF58113_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1440721836917752411/products/cor.36126.36126BF58114_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36126.36126BF58110_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-glitter/cor.36126.36126BF58110_o.jpg", "https://www.melissa.com.br/file/v1088903393118144921/products/cor.36126.36126BF58110_o.jpg", "https://www.melissa.com.br/products/cor.36126.36126BF58111_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-glitter/cor.36126.36126BF58111_o.jpg", "https://www.melissa.com.br/file/v725941133816373386/products/cor.36126.36126BF58111_o.jpg", "https://www.melissa.com.br/products/cor.36126.36126BF58112_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-glitter/cor.36126.36126BF58112_o.jpg", "https://www.melissa.com.br/file/v3278894840213365054/products/cor.36126.36126BF58112_o.jpg", "https://www.melissa.com.br/products/cor.36126.36126BF58113_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-glitter/cor.36126.36126BF58113_o.jpg", "https://www.melissa.com.br/file/v7428384469058239963/products/cor.36126.36126BF58113_o.jpg", "https://www.melissa.com.br/products/cor.36126.36126BF58114_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2165404261014149298/products/36135.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8554965458721060678/products/36135.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3139742412222022244/products/cor.36135.36135BJ50910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8192035995851627797/products/cor.36135.36135BJ50911_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8580533216246245314/products/cor.36135.36135BJ50912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v145814834114578254/products/cor.36135.36135BJ50913_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5142492601887710342/products/cor.36135.36135BJ50914_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36135.36135BJ50910_o.jpg", "https://www.melissa.com.br/p/melissa-free-high/cor.36135.36135BJ50910_o.jpg", "https://www.melissa.com.br/file/v3139742412222022244/products/cor.36135.36135BJ50910_o.jpg", "https://www.melissa.com.br/products/cor.36135.36135BJ50911_o.jpg", "https://www.melissa.com.br/p/melissa-free-high/cor.36135.36135BJ50911_o.jpg", "https://www.melissa.com.br/file/v8192035995851627797/products/cor.36135.36135BJ50911_o.jpg", "https://www.melissa.com.br/products/cor.36135.36135BJ50912_o.jpg", "https://www.melissa.com.br/p/melissa-free-high/cor.36135.36135BJ50912_o.jpg", "https://www.melissa.com.br/file/v8580533216246245314/products/cor.36135.36135BJ50912_o.jpg", "https://www.melissa.com.br/products/cor.36135.36135BJ50913_o.jpg", "https://www.melissa.com.br/p/melissa-free-high/cor.36135.36135BJ50913_o.jpg", "https://www.melissa.com.br/file/v145814834114578254/products/cor.36135.36135BJ50913_o.jpg", "https://www.melissa.com.br/products/cor.36135.36135BJ50914_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1976682122315897988/products/33853.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1616629185970435575/products/33853.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1976682122315897988/products/cor.33853.33853AO08810_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3581445345957015346/products/cor.33853.33853AO08812_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v392088885565067085/products/cor.33853.33853AO08813_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.33853.33853AO08810_o.jpg", "https://www.melissa.com.br/p/melissa-free-heart-flip-flop/cor.33853.33853AO08810_o.jpg", "https://www.melissa.com.br/file/v1976682122315897988/products/cor.33853.33853AO08810_o.jpg", "https://www.melissa.com.br/products/cor.33853.33853AO08812_o.jpg", "https://www.melissa.com.br/p/melissa-free-heart-flip-flop/cor.33853.33853AO08812_o.jpg", "https://www.melissa.com.br/file/v3581445345957015346/products/cor.33853.33853AO08812_o.jpg", "https://www.melissa.com.br/products/cor.33853.33853AO08813_o.jpg", "https://www.melissa.com.br/p/melissa-free-heart-flip-flop/cor.33853.33853AO08813_o.jpg", "https://www.melissa.com.br/file/v392088885565067085/products/cor.33853.33853AO08813_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2071296944354361213/general/B2C_MelissaBR_NoImage.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7429802084223357324/products/37824.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3092255967244857421/products/37824.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3296387348246083990/products/cor.37824.37824BN31710_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4086787854290202440/products/cor.37824.37824BN31711_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6772198122130590194/products/cor.37824.37824BN31712_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2594567701172734330/products/cor.37824.37824BN31713_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4341327295830664630/products/cor.37824.37824BN31714_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37824.37824BN31710_o.jpg", "https://www.melissa.com.br/p/melissa-free-line-platform/cor.37824.37824BN31710_o.jpg", "https://www.melissa.com.br/file/v3296387348246083990/products/cor.37824.37824BN31710_o.jpg", "https://www.melissa.com.br/products/cor.37824.37824BN31711_o.jpg", "https://www.melissa.com.br/p/melissa-free-line-platform/cor.37824.37824BN31711_o.jpg", "https://www.melissa.com.br/file/v4086787854290202440/products/cor.37824.37824BN31711_o.jpg", "https://www.melissa.com.br/products/cor.37824.37824BN31712_o.jpg", "https://www.melissa.com.br/p/melissa-free-line-platform/cor.37824.37824BN31712_o.jpg", "https://www.melissa.com.br/file/v6772198122130590194/products/cor.37824.37824BN31712_o.jpg", "https://www.melissa.com.br/products/cor.37824.37824BN31713_o.jpg", "https://www.melissa.com.br/p/melissa-free-line-platform/cor.37824.37824BN31713_o.jpg", "https://www.melissa.com.br/file/v2594567701172734330/products/cor.37824.37824BN31713_o.jpg", "https://www.melissa.com.br/products/cor.37824.37824BN31714_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5438312015821291717/products/36137.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4977410900308417071/products/36137.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5856640307906396457/products/cor.36137.36137BN12010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3328225121296189458/products/cor.36137.36137BN12011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v225118368163597212/products/cor.36137.36137BN12012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v210776602554790944/products/cor.36137.36137BN12013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6568843511930337017/products/cor.36137.36137BN12014_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36137.36137BN12010_o.jpg", "https://www.melissa.com.br/p/melissa-free-out/cor.36137.36137BN12010_o.jpg", "https://www.melissa.com.br/file/v5856640307906396457/products/cor.36137.36137BN12010_o.jpg", "https://www.melissa.com.br/products/cor.36137.36137BN12011_o.jpg", "https://www.melissa.com.br/p/melissa-free-out/cor.36137.36137BN12011_o.jpg", "https://www.melissa.com.br/file/v3328225121296189458/products/cor.36137.36137BN12011_o.jpg", "https://www.melissa.com.br/products/cor.36137.36137BN12012_o.jpg", "https://www.melissa.com.br/p/melissa-free-out/cor.36137.36137BN12012_o.jpg", "https://www.melissa.com.br/file/v225118368163597212/products/cor.36137.36137BN12012_o.jpg", "https://www.melissa.com.br/products/cor.36137.36137BN12013_o.jpg", "https://www.melissa.com.br/p/melissa-free-out/cor.36137.36137BN12013_o.jpg", "https://www.melissa.com.br/file/v210776602554790944/products/cor.36137.36137BN12013_o.jpg", "https://www.melissa.com.br/products/cor.36137.36137BN12014_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4951068240665408448/products/37846.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6487360927128230414/products/37846.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6236849879132316086/products/cor.37846.37846BN58710_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3152718932518969638/products/cor.37846.37846BN58711_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v856279546452792007/products/cor.37846.37846BN58712_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2147782781580618702/products/cor.37846.37846BN58713_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3595785411172058066/products/cor.37846.37846BN58714_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37846.37846BN58710_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-velvet/cor.37846.37846BN58710_o.jpg", "https://www.melissa.com.br/file/v6236849879132316086/products/cor.37846.37846BN58710_o.jpg", "https://www.melissa.com.br/products/cor.37846.37846BN58711_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-velvet/cor.37846.37846BN58711_o.jpg", "https://www.melissa.com.br/file/v3152718932518969638/products/cor.37846.37846BN58711_o.jpg", "https://www.melissa.com.br/products/cor.37846.37846BN58712_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-velvet/cor.37846.37846BN58712_o.jpg", "https://www.melissa.com.br/file/v856279546452792007/products/cor.37846.37846BN58712_o.jpg", "https://www.melissa.com.br/products/cor.37846.37846BN58713_o.jpg", "https://www.melissa.com.br/p/melissa-free-platform-slide-velvet/cor.37846.37846BN58713_o.jpg", "https://www.melissa.com.br/file/v2147782781580618702/products/cor.37846.37846BN58713_o.jpg", "https://www.melissa.com.br/products/cor.37846.37846BN58714_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v816679194731433790/products/37830.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2713020416049240480/products/37830.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v816679194731433790/products/cor.37830.37830BN96410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2713020416049240480/products/cor.37830.37830BN96411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8371259824515552677/products/cor.37830.37830BN96412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4967669893647337448/products/cor.37830.37830BN96413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4756587957522479071/products/cor.37830.37830BN96414_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37830.37830BN96410_o.jpg", "https://www.melissa.com.br/p/melissa-free-low-print/cor.37830.37830BN96410_o.jpg", "https://www.melissa.com.br/file/v816679194731433790/products/cor.37830.37830BN96410_o.jpg", "https://www.melissa.com.br/products/cor.37830.37830BN96411_o.jpg", "https://www.melissa.com.br/p/melissa-free-low-print/cor.37830.37830BN96411_o.jpg", "https://www.melissa.com.br/file/v2713020416049240480/products/cor.37830.37830BN96411_o.jpg", "https://www.melissa.com.br/products/cor.37830.37830BN96412_o.jpg", "https://www.melissa.com.br/p/melissa-free-low-print/cor.37830.37830BN96412_o.jpg", "https://www.melissa.com.br/file/v8371259824515552677/products/cor.37830.37830BN96412_o.jpg", "https://www.melissa.com.br/products/cor.37830.37830BN96413_o.jpg", "https://www.melissa.com.br/p/melissa-free-low-print/cor.37830.37830BN96413_o.jpg", "https://www.melissa.com.br/file/v4967669893647337448/products/cor.37830.37830BN96413_o.jpg", "https://www.melissa.com.br/products/cor.37830.37830BN96414_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3490303818883690226/products/37722.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3261843806622876493/products/37722.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4621024822005275197/products/cor.37722.37722BN61410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6189847889854929803/products/cor.37722.37722BN61411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3243163878179186316/products/cor.37722.37722BN61412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6707471703592032470/products/cor.37722.37722BN61413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5398817770191442401/products/cor.37722.37722BN61414_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37722.37722BN61410_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-slide/cor.37722.37722BN61410_o.jpg", "https://www.melissa.com.br/file/v4621024822005275197/products/cor.37722.37722BN61410_o.jpg", "https://www.melissa.com.br/products/cor.37722.37722BN61411_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-slide/cor.37722.37722BN61411_o.jpg", "https://www.melissa.com.br/file/v6189847889854929803/products/cor.37722.37722BN61411_o.jpg", "https://www.melissa.com.br/products/cor.37722.37722BN61412_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-slide/cor.37722.37722BN61412_o.jpg", "https://www.melissa.com.br/file/v3243163878179186316/products/cor.37722.37722BN61412_o.jpg", "https://www.melissa.com.br/products/cor.37722.37722BN61413_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-slide/cor.37722.37722BN61413_o.jpg", "https://www.melissa.com.br/file/v6707471703592032470/products/cor.37722.37722BN61413_o.jpg", "https://www.melissa.com.br/products/cor.37722.37722BN61414_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2891679017638528708/products/37857.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8011058181731930180/products/37857.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2495330703195367613/products/cor.37857.37857BO54410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9027328564473126055/products/cor.37857.37857BO54411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3565687723746037009/products/cor.37857.37857BO54412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3052505767594413106/products/cor.37857.37857BO54413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5317274779139595622/products/cor.37857.37857BO54414_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37857.37857BO54410_o.jpg", "https://www.melissa.com.br/p/melissa-free-cross/cor.37857.37857BO54410_o.jpg", "https://www.melissa.com.br/file/v2495330703195367613/products/cor.37857.37857BO54410_o.jpg", "https://www.melissa.com.br/products/cor.37857.37857BO54411_o.jpg", "https://www.melissa.com.br/p/melissa-free-cross/cor.37857.37857BO54411_o.jpg", "https://www.melissa.com.br/file/v9027328564473126055/products/cor.37857.37857BO54411_o.jpg", "https://www.melissa.com.br/products/cor.37857.37857BO54412_o.jpg", "https://www.melissa.com.br/p/melissa-free-cross/cor.37857.37857BO54412_o.jpg", "https://www.melissa.com.br/file/v3565687723746037009/products/cor.37857.37857BO54412_o.jpg", "https://www.melissa.com.br/products/cor.37857.37857BO54413_o.jpg", "https://www.melissa.com.br/p/melissa-free-cross/cor.37857.37857BO54413_o.jpg", "https://www.melissa.com.br/file/v3052505767594413106/products/cor.37857.37857BO54413_o.jpg", "https://www.melissa.com.br/products/cor.37857.37857BO54414_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5972368217082257592/products/37735.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5918575458626286866/products/37735.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8040268584354611712/products/cor.37735.37735BO18910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2886636039142972646/products/cor.37735.37735BO18911_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3415984679011072869/products/cor.37735.37735BO18912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4052505991444266380/products/cor.37735.37735BO18913_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2736290530272146970/products/cor.37735.37735BO18914_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37735.37735BO18910_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-platform/cor.37735.37735BO18910_o.jpg", "https://www.melissa.com.br/file/v8040268584354611712/products/cor.37735.37735BO18910_o.jpg", "https://www.melissa.com.br/products/cor.37735.37735BO18911_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-platform/cor.37735.37735BO18911_o.jpg", "https://www.melissa.com.br/file/v2886636039142972646/products/cor.37735.37735BO18911_o.jpg", "https://www.melissa.com.br/products/cor.37735.37735BO18912_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-platform/cor.37735.37735BO18912_o.jpg", "https://www.melissa.com.br/file/v3415984679011072869/products/cor.37735.37735BO18912_o.jpg", "https://www.melissa.com.br/products/cor.37735.37735BO18913_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-platform/cor.37735.37735BO18913_o.jpg", "https://www.melissa.com.br/file/v4052505991444266380/products/cor.37735.37735BO18913_o.jpg", "https://www.melissa.com.br/products/cor.37735.37735BO18914_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4463528291071488711/products/38046.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5812437663327123363/products/38046.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4754997186599976515/products/cor.38046.38046BT03910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5784890807918540012/products/cor.38046.38046BT03911_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8435356610429167576/products/cor.38046.38046BT03912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2073888729673740798/products/cor.38046.38046BT03913_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v645511216045614683/products/cor.38046.38046BT03914_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.38046.38046BT03910_o.jpg", "https://www.melissa.com.br/p/melissa-free-slip/cor.38046.38046BT03910_o.jpg", "https://www.melissa.com.br/file/v4754997186599976515/products/cor.38046.38046BT03910_o.jpg", "https://www.melissa.com.br/products/cor.38046.38046BT03911_o.jpg", "https://www.melissa.com.br/p/melissa-free-slip/cor.38046.38046BT03911_o.jpg", "https://www.melissa.com.br/file/v5784890807918540012/products/cor.38046.38046BT03911_o.jpg", "https://www.melissa.com.br/products/cor.38046.38046BT03912_o.jpg", "https://www.melissa.com.br/p/melissa-free-slip/cor.38046.38046BT03912_o.jpg", "https://www.melissa.com.br/file/v8435356610429167576/products/cor.38046.38046BT03912_o.jpg", "https://www.melissa.com.br/products/cor.38046.38046BT03913_o.jpg", "https://www.melissa.com.br/p/melissa-free-slip/cor.38046.38046BT03913_o.jpg", "https://www.melissa.com.br/file/v2073888729673740798/products/cor.38046.38046BT03913_o.jpg", "https://www.melissa.com.br/products/cor.38046.38046BT03914_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7925933093917012778/products/37727.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2720417667168328087/products/37727.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1154430746048597905/products/cor.37727.37727BO07810_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3335690406030616624/products/cor.37727.37727BO07811_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4531912322274493970/products/cor.37727.37727BO07812_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7335391533848953008/products/cor.37727.37727BO07813_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1829024596286697762/products/cor.37727.37727BO07814_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37727.37727BO07810_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-papete/cor.37727.37727BO07810_o.jpg", "https://www.melissa.com.br/file/v1154430746048597905/products/cor.37727.37727BO07810_o.jpg", "https://www.melissa.com.br/products/cor.37727.37727BO07811_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-papete/cor.37727.37727BO07811_o.jpg", "https://www.melissa.com.br/file/v3335690406030616624/products/cor.37727.37727BO07811_o.jpg", "https://www.melissa.com.br/products/cor.37727.37727BO07812_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-papete/cor.37727.37727BO07812_o.jpg", "https://www.melissa.com.br/file/v4531912322274493970/products/cor.37727.37727BO07812_o.jpg", "https://www.melissa.com.br/products/cor.37727.37727BO07813_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-papete/cor.37727.37727BO07813_o.jpg", "https://www.melissa.com.br/file/v7335391533848953008/products/cor.37727.37727BO07813_o.jpg", "https://www.melissa.com.br/products/cor.37727.37727BO07814_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7742151111431218575/products/cor.37835.37835BT84110_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v768086218664454808/products/cor.37835.37835BT84111_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v348765387139841025/products/37835.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1306025229000262337/products/37835.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7126393002361892430/products/cor.37835.37835BT83910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6189876206141955990/products/cor.37835.37835BT83911_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6879660694767560999/products/cor.37835.37835BT83912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4170137849615874822/products/cor.37835.37835BT83913_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4651999271590944208/products/cor.37835.37835BT83914_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37835.37835BT83910_o.jpg", "https://www.melissa.com.br/p/melissa-free-muse-platform/cor.37835.37835BT83910_o.jpg", "https://www.melissa.com.br/file/v7126393002361892430/products/cor.37835.37835BT83910_o.jpg", "https://www.melissa.com.br/products/cor.37835.37835BT83911_o.jpg", "https://www.melissa.com.br/p/melissa-free-muse-platform/cor.37835.37835BT83911_o.jpg", "https://www.melissa.com.br/file/v6189876206141955990/products/cor.37835.37835BT83911_o.jpg", "https://www.melissa.com.br/products/cor.37835.37835BT83912_o.jpg", "https://www.melissa.com.br/p/melissa-free-muse-platform/cor.37835.37835BT83912_o.jpg", "https://www.melissa.com.br/file/v6879660694767560999/products/cor.37835.37835BT83912_o.jpg", "https://www.melissa.com.br/products/cor.37835.37835BT83913_o.jpg", "https://www.melissa.com.br/p/melissa-free-muse-platform/cor.37835.37835BT83913_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3738657458350041/products/35943.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2887105353452300856/products/35943.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7156610156961863258/products/cor.35943.35943BC96210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1370374045734424129/products/cor.35943.35943BC96212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1363963930798032847/products/cor.35943.35943BC96213_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35943.35943BC96210_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-stripes/cor.35943.35943BC96210_o.jpg", "https://www.melissa.com.br/file/v7156610156961863258/products/cor.35943.35943BC96210_o.jpg", "https://www.melissa.com.br/products/cor.35943.35943BC96212_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-stripes/cor.35943.35943BC96212_o.jpg", "https://www.melissa.com.br/file/v1370374045734424129/products/cor.35943.35943BC96212_o.jpg", "https://www.melissa.com.br/products/cor.35943.35943BC96213_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-stripes/cor.35943.35943BC96213_o.jpg", "https://www.melissa.com.br/file/v1363963930798032847/products/cor.35943.35943BC96213_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3738657458350041/products/cor.35943.35943BF99610_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5893792793865433563/products/cor.35943.35943BF99612_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v565500734429942237/products/cor.35943.35943BF99613_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35943.35943BF99610_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-stripes/cor.35943.35943BF99610_o.jpg", "https://www.melissa.com.br/file/v3738657458350041/products/cor.35943.35943BF99610_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5630007294424124065/products/35849.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v809958753133162991/products/cor.35849.35849BB24412_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7866929763381844103/products/cor.35849.35849AW17810_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7241579509229133736/products/cor.35849.35849AW17811_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4185419312225556424/products/cor.35849.35849AW17812_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8029046808996825111/products/cor.35849.35849AW17813_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1231995555953558514/products/cor.35849.35849AW17814_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35849.35849AW17810_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-mlover/cor.35849.35849AW17810_o.jpg", "https://www.melissa.com.br/file/v7866929763381844103/products/cor.35849.35849AW17810_o.jpg", "https://www.melissa.com.br/products/cor.35849.35849AW17811_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-mlover/cor.35849.35849AW17811_o.jpg", "https://www.melissa.com.br/file/v7241579509229133736/products/cor.35849.35849AW17811_o.jpg", "https://www.melissa.com.br/products/cor.35849.35849AW17812_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-mlover/cor.35849.35849AW17812_o.jpg", "https://www.melissa.com.br/file/v4185419312225556424/products/cor.35849.35849AW17812_o.jpg", "https://www.melissa.com.br/products/cor.35849.35849AW17813_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-mlover/cor.35849.35849AW17813_o.jpg", "https://www.melissa.com.br/file/v8029046808996825111/products/cor.35849.35849AW17813_o.jpg", "https://www.melissa.com.br/products/cor.35849.35849AW17814_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5804336376721476375/products/cor.35832.35832AZ93312_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6620144608846852271/products/cor.35832.35832AZ93310_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5915144889707271892/products/35832.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1923652181694389436/products/35832.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5915144889707271892/products/cor.35832.35832AZ94510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1923652181694389436/products/cor.35832.35832AZ94511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3187734898903631070/products/cor.35832.35832AZ94512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1910624818550493032/products/cor.35832.35832AZ94513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7731664820192269043/products/cor.35832.35832AZ94514_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35832.35832AZ94510_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-connection-slide/cor.35832.35832AZ94510_o.jpg", "https://www.melissa.com.br/file/v5915144889707271892/products/cor.35832.35832AZ94510_o.jpg", "https://www.melissa.com.br/products/cor.35832.35832AZ94511_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-connection-slide/cor.35832.35832AZ94511_o.jpg", "https://www.melissa.com.br/file/v1923652181694389436/products/cor.35832.35832AZ94511_o.jpg", "https://www.melissa.com.br/products/cor.35832.35832AZ94512_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-connection-slide/cor.35832.35832AZ94512_o.jpg", "https://www.melissa.com.br/file/v3187734898903631070/products/cor.35832.35832AZ94512_o.jpg", "https://www.melissa.com.br/products/cor.35832.35832AZ94513_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-connection-slide/cor.35832.35832AZ94513_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6787733301115546315/products/cor.35898.35898BA60812_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4131537049770488113/products/cor.35898.35898BA60810_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2439894264173750238/products/35898.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v184450001699165195/products/35898.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8689586846492371438/products/cor.35898.35898BA60310_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7512298813647150514/products/cor.35898.35898BA60311_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8966343693690748351/products/cor.35898.35898BA60312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6668906875825336361/products/cor.35898.35898BA60313_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3107697410912134642/products/cor.35898.35898BA60314_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35898.35898BA60310_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-clog/cor.35898.35898BA60310_o.jpg", "https://www.melissa.com.br/file/v8689586846492371438/products/cor.35898.35898BA60310_o.jpg", "https://www.melissa.com.br/products/cor.35898.35898BA60311_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-clog/cor.35898.35898BA60311_o.jpg", "https://www.melissa.com.br/file/v7512298813647150514/products/cor.35898.35898BA60311_o.jpg", "https://www.melissa.com.br/products/cor.35898.35898BA60312_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-clog/cor.35898.35898BA60312_o.jpg", "https://www.melissa.com.br/file/v8966343693690748351/products/cor.35898.35898BA60312_o.jpg", "https://www.melissa.com.br/products/cor.35898.35898BA60313_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-clog/cor.35898.35898BA60313_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4945377738188135098/products/cor.35933.35933BC91010_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3460719584016567247/products/cor.35933.35933BC91011_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4945377738188135098/products/35933.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3460719584016567247/products/35933.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9167375434072174057/products/cor.35933.35933BC91510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8825500529787334176/products/cor.35933.35933BC91511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7760358181795698934/products/cor.35933.35933BC91512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2641684486630255844/products/cor.35933.35933BC91513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5202425659374145897/products/cor.35933.35933BC91514_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35933.35933BC91510_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-flip-flop/cor.35933.35933BC91510_o.jpg", "https://www.melissa.com.br/file/v9167375434072174057/products/cor.35933.35933BC91510_o.jpg", "https://www.melissa.com.br/products/cor.35933.35933BC91511_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-flip-flop/cor.35933.35933BC91511_o.jpg", "https://www.melissa.com.br/file/v8825500529787334176/products/cor.35933.35933BC91511_o.jpg", "https://www.melissa.com.br/products/cor.35933.35933BC91512_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-flip-flop/cor.35933.35933BC91512_o.jpg", "https://www.melissa.com.br/file/v7760358181795698934/products/cor.35933.35933BC91512_o.jpg", "https://www.melissa.com.br/products/cor.35933.35933BC91513_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-flip-flop/cor.35933.35933BC91513_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1675375501488341430/products/cor.35977.35977BI12710_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v530139880579492624/products/cor.35977.35977BI12711_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6704803778060142454/products/35977.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6011763806643379353/products/35977.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6704803778060142454/products/cor.35977.35977BI12610_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6011763806643379353/products/cor.35977.35977BI12611_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5886153351464448576/products/cor.35977.35977BI12612_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v896878432373795309/products/cor.35977.35977BI12613_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8177303012600778031/products/cor.35977.35977BI12614_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35977.35977BI12610_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-platform/cor.35977.35977BI12610_o.jpg", "https://www.melissa.com.br/file/v6704803778060142454/products/cor.35977.35977BI12610_o.jpg", "https://www.melissa.com.br/products/cor.35977.35977BI12611_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-platform/cor.35977.35977BI12611_o.jpg", "https://www.melissa.com.br/file/v6011763806643379353/products/cor.35977.35977BI12611_o.jpg", "https://www.melissa.com.br/products/cor.35977.35977BI12612_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-platform/cor.35977.35977BI12612_o.jpg", "https://www.melissa.com.br/file/v5886153351464448576/products/cor.35977.35977BI12612_o.jpg", "https://www.melissa.com.br/products/cor.35977.35977BI12613_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-platform/cor.35977.35977BI12613_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7988313609400415243/products/cor.36146.36146BG68110_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4699350624579220262/products/cor.36146.36146BG68112_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5587444638160001163/products/36146.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6153559878507386480/products/cor.36146.36146BG68010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v689720650678463777/products/cor.36146.36146BG68012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1305245930858732167/products/cor.36146.36146BG68013_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36146.36146BG68010_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-slide-denim/cor.36146.36146BG68010_o.jpg", "https://www.melissa.com.br/file/v6153559878507386480/products/cor.36146.36146BG68010_o.jpg", "https://www.melissa.com.br/products/cor.36146.36146BG68012_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-slide-denim/cor.36146.36146BG68012_o.jpg", "https://www.melissa.com.br/file/v689720650678463777/products/cor.36146.36146BG68012_o.jpg", "https://www.melissa.com.br/products/cor.36146.36146BG68013_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-slide-denim/cor.36146.36146BG68013_o.jpg", "https://www.melissa.com.br/file/v1305245930858732167/products/cor.36146.36146BG68013_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7543923522990644625/products/cor.36146.36146BG68113_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36146.36146BG68110_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-slide-denim/cor.36146.36146BG68110_o.jpg", "https://www.melissa.com.br/file/v7988313609400415243/products/cor.36146.36146BG68110_o.jpg", "https://www.melissa.com.br/products/cor.36146.36146BG68112_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1035426350689124981/products/cor.36259.36259BJ60310_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6103559722352980456/products/cor.36259.36259BJ60312_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6215498097733054724/products/cor.36259.36259BJ59910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5998527135227712201/products/cor.36259.36259BJ59912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6103755862530486711/products/cor.36259.36259BJ59913_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36259.36259BJ59910_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-deluxe/cor.36259.36259BJ59910_o.jpg", "https://www.melissa.com.br/file/v6215498097733054724/products/cor.36259.36259BJ59910_o.jpg", "https://www.melissa.com.br/products/cor.36259.36259BJ59912_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-deluxe/cor.36259.36259BJ59912_o.jpg", "https://www.melissa.com.br/file/v5998527135227712201/products/cor.36259.36259BJ59912_o.jpg", "https://www.melissa.com.br/products/cor.36259.36259BJ59913_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-deluxe/cor.36259.36259BJ59913_o.jpg", "https://www.melissa.com.br/file/v6103755862530486711/products/cor.36259.36259BJ59913_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5320050046872659772/products/cor.36259.36259BJ60313_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36259.36259BJ60310_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-deluxe/cor.36259.36259BJ60310_o.jpg", "https://www.melissa.com.br/file/v1035426350689124981/products/cor.36259.36259BJ60310_o.jpg", "https://www.melissa.com.br/products/cor.36259.36259BJ60312_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-deluxe/cor.36259.36259BJ60312_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3175736845614559449/products/cor.36118.36118BI38010_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1578848616020718943/products/cor.36118.36118BI38012_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5295299375323032386/products/36118.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4378923111593253412/products/36118.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6612813248384278026/products/cor.36118.36118BI37510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7054048573338120119/products/cor.36118.36118BI37511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8151434892751286689/products/cor.36118.36118BI37512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v248759642985368643/products/cor.36118.36118BI37513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v369686907158456817/products/cor.36118.36118BI37514_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36118.36118BI37510_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-mlover-ii/cor.36118.36118BI37510_o.jpg", "https://www.melissa.com.br/file/v6612813248384278026/products/cor.36118.36118BI37510_o.jpg", "https://www.melissa.com.br/products/cor.36118.36118BI37511_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-mlover-ii/cor.36118.36118BI37511_o.jpg", "https://www.melissa.com.br/file/v7054048573338120119/products/cor.36118.36118BI37511_o.jpg", "https://www.melissa.com.br/products/cor.36118.36118BI37512_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-mlover-ii/cor.36118.36118BI37512_o.jpg", "https://www.melissa.com.br/file/v8151434892751286689/products/cor.36118.36118BI37512_o.jpg", "https://www.melissa.com.br/products/cor.36118.36118BI37513_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-mlover-ii/cor.36118.36118BI37513_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5680052013157754164/products/36175.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4456276419022389362/products/36175.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6343646032824053199/products/cor.36175.36175BL61410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3075075125584607151/products/cor.36175.36175BL61411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1356230815594890912/products/cor.36175.36175BL61412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9109114147555235471/products/cor.36175.36175BL61413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5030580330946557177/products/cor.36175.36175BL61414_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36175.36175BL61410_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-clog-warm/cor.36175.36175BL61410_o.jpg", "https://www.melissa.com.br/file/v6343646032824053199/products/cor.36175.36175BL61410_o.jpg", "https://www.melissa.com.br/products/cor.36175.36175BL61411_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-clog-warm/cor.36175.36175BL61411_o.jpg", "https://www.melissa.com.br/file/v3075075125584607151/products/cor.36175.36175BL61411_o.jpg", "https://www.melissa.com.br/products/cor.36175.36175BL61412_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-clog-warm/cor.36175.36175BL61412_o.jpg", "https://www.melissa.com.br/file/v1356230815594890912/products/cor.36175.36175BL61412_o.jpg", "https://www.melissa.com.br/products/cor.36175.36175BL61413_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-clog-warm/cor.36175.36175BL61413_o.jpg", "https://www.melissa.com.br/file/v9109114147555235471/products/cor.36175.36175BL61413_o.jpg", "https://www.melissa.com.br/products/cor.36175.36175BL61414_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7211457836894588543/products/36173.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3809263135075027655/products/36173.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6726276904444704287/products/cor.36173.36173BL59910_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2172325576524955011/products/cor.36173.36173BL59911_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5863598626825731579/products/cor.36173.36173BL59912_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6962566861345248251/products/cor.36173.36173BL59914_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36173.36173BL59910_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-warm/cor.36173.36173BL59910_o.jpg", "https://www.melissa.com.br/file/v6726276904444704287/products/cor.36173.36173BL59910_o.jpg", "https://www.melissa.com.br/products/cor.36173.36173BL59911_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-warm/cor.36173.36173BL59911_o.jpg", "https://www.melissa.com.br/file/v2172325576524955011/products/cor.36173.36173BL59911_o.jpg", "https://www.melissa.com.br/products/cor.36173.36173BL59912_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-warm/cor.36173.36173BL59912_o.jpg", "https://www.melissa.com.br/file/v5863598626825731579/products/cor.36173.36173BL59912_o.jpg", "https://www.melissa.com.br/products/cor.36173.36173BL59914_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-warm/cor.36173.36173BL59914_o.jpg", "https://www.melissa.com.br/file/v6962566861345248251/products/cor.36173.36173BL59914_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7401454674072567497/products/cor.36173.36173BL58710_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4540705427253824357/products/cor.36173.36173BL58711_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4725082399200594736/products/36895.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5678868834439801264/products/36895.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4808099535570980191/products/cor.36895.36895BM54310_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6941732620843679089/products/cor.36895.36895BM54311_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v189196291246093639/products/cor.36895.36895BM54312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v11396751747176506/products/cor.36895.36895BM54313_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2460695322311483606/products/cor.36895.36895BM54314_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36895.36895BM54310_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-sandal/cor.36895.36895BM54310_o.jpg", "https://www.melissa.com.br/file/v4808099535570980191/products/cor.36895.36895BM54310_o.jpg", "https://www.melissa.com.br/products/cor.36895.36895BM54311_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-sandal/cor.36895.36895BM54311_o.jpg", "https://www.melissa.com.br/file/v6941732620843679089/products/cor.36895.36895BM54311_o.jpg", "https://www.melissa.com.br/products/cor.36895.36895BM54312_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-sandal/cor.36895.36895BM54312_o.jpg", "https://www.melissa.com.br/file/v189196291246093639/products/cor.36895.36895BM54312_o.jpg", "https://www.melissa.com.br/products/cor.36895.36895BM54313_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-sandal/cor.36895.36895BM54313_o.jpg", "https://www.melissa.com.br/file/v11396751747176506/products/cor.36895.36895BM54313_o.jpg", "https://www.melissa.com.br/products/cor.36895.36895BM54314_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v789681270802989279/products/36158.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6451149447712533629/products/36158.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v901481439669578271/products/cor.36158.36158BH50110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8720623158541371769/products/cor.36158.36158BH50111_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5109154539903474910/products/cor.36158.36158BH50112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1389286013296885446/products/cor.36158.36158BH50113_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v223024345909970421/products/cor.36158.36158BH50114_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36158.36158BH50110_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-platform/cor.36158.36158BH50110_o.jpg", "https://www.melissa.com.br/file/v901481439669578271/products/cor.36158.36158BH50110_o.jpg", "https://www.melissa.com.br/products/cor.36158.36158BH50111_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-platform/cor.36158.36158BH50111_o.jpg", "https://www.melissa.com.br/file/v8720623158541371769/products/cor.36158.36158BH50111_o.jpg", "https://www.melissa.com.br/products/cor.36158.36158BH50112_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-platform/cor.36158.36158BH50112_o.jpg", "https://www.melissa.com.br/file/v5109154539903474910/products/cor.36158.36158BH50112_o.jpg", "https://www.melissa.com.br/products/cor.36158.36158BH50113_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-platform/cor.36158.36158BH50113_o.jpg", "https://www.melissa.com.br/file/v1389286013296885446/products/cor.36158.36158BH50113_o.jpg", "https://www.melissa.com.br/products/cor.36158.36158BH50114_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5690286383086032674/products/37742.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1507439835137380635/products/37742.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6010169402398064641/products/cor.37742.37742BN74510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6623779884195343249/products/cor.37742.37742BN74511_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3908806863080157369/products/cor.37742.37742BN74512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8894406640818686298/products/cor.37742.37742BN74513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9005360989847446459/products/cor.37742.37742BN74514_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37742.37742BN74510_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-thong/cor.37742.37742BN74510_o.jpg", "https://www.melissa.com.br/file/v6010169402398064641/products/cor.37742.37742BN74510_o.jpg", "https://www.melissa.com.br/products/cor.37742.37742BN74511_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-thong/cor.37742.37742BN74511_o.jpg", "https://www.melissa.com.br/file/v6623779884195343249/products/cor.37742.37742BN74511_o.jpg", "https://www.melissa.com.br/products/cor.37742.37742BN74512_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-thong/cor.37742.37742BN74512_o.jpg", "https://www.melissa.com.br/file/v3908806863080157369/products/cor.37742.37742BN74512_o.jpg", "https://www.melissa.com.br/products/cor.37742.37742BN74513_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-thong/cor.37742.37742BN74513_o.jpg", "https://www.melissa.com.br/file/v8894406640818686298/products/cor.37742.37742BN74513_o.jpg", "https://www.melissa.com.br/products/cor.37742.37742BN74514_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6445654033946121358/products/37919.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6060656762758283280/products/37919.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7981088262157725475/products/cor.37919.37919BT80010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3433853938610322382/products/cor.37919.37919BT80011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4765993673737099796/products/cor.37919.37919BT80012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2897441340639853334/products/cor.37919.37919BT80013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6063267145041991988/products/cor.37919.37919BT80014_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37919.37919BT80010_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-disney/cor.37919.37919BT80010_o.jpg", "https://www.melissa.com.br/file/v7981088262157725475/products/cor.37919.37919BT80010_o.jpg", "https://www.melissa.com.br/products/cor.37919.37919BT80011_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-disney/cor.37919.37919BT80011_o.jpg", "https://www.melissa.com.br/file/v3433853938610322382/products/cor.37919.37919BT80011_o.jpg", "https://www.melissa.com.br/products/cor.37919.37919BT80012_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-disney/cor.37919.37919BT80012_o.jpg", "https://www.melissa.com.br/file/v4765993673737099796/products/cor.37919.37919BT80012_o.jpg", "https://www.melissa.com.br/products/cor.37919.37919BT80013_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-slide-disney/cor.37919.37919BT80013_o.jpg", "https://www.melissa.com.br/file/v2897441340639853334/products/cor.37919.37919BT80013_o.jpg", "https://www.melissa.com.br/products/cor.37919.37919BT80014_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8299091604039912838/products/38160.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5653242343597768078/products/38160.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5038106308203556552/products/cor.38160.38160BX19310_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5521518929991165782/products/cor.38160.38160BX19311_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8924900425071607666/products/cor.38160.38160BX19312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7042824506100975600/products/cor.38160.38160BX19313_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v745407597940580103/products/cor.38160.38160BX19314_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v644126274744168293/products/cor.38160.38160BX19317_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.38160.38160BX19310_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-beauty/cor.38160.38160BX19310_o.jpg", "https://www.melissa.com.br/file/v5038106308203556552/products/cor.38160.38160BX19310_o.jpg", "https://www.melissa.com.br/products/cor.38160.38160BX19311_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-beauty/cor.38160.38160BX19311_o.jpg", "https://www.melissa.com.br/file/v5521518929991165782/products/cor.38160.38160BX19311_o.jpg", "https://www.melissa.com.br/products/cor.38160.38160BX19312_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-beauty/cor.38160.38160BX19312_o.jpg", "https://www.melissa.com.br/file/v8924900425071607666/products/cor.38160.38160BX19312_o.jpg", "https://www.melissa.com.br/products/cor.38160.38160BX19313_o.jpg", "https://www.melissa.com.br/p/melissa-cozy-mlover-beauty/cor.38160.38160BX19313_o.jpg", "https://www.melissa.com.br/file/v7042824506100975600/products/cor.38160.38160BX19313_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2818009483291133753/products/35993.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2849456405422925975/products/35993.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2818009483291133753/products/cor.35993.35993BF17010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2849456405422925975/products/cor.35993.35993BF17011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6408889938242668543/products/cor.35993.35993BF17012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5096167278790689476/products/cor.35993.35993BF17013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8558765070975310185/products/cor.35993.35993BF17014_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3556033228466350636/products/cor.35993.35993BF17015_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35993.35993BF17010_o.jpg", "https://www.melissa.com.br/p/melissa-warm-boot/cor.35993.35993BF17010_o.jpg", "https://www.melissa.com.br/file/v2818009483291133753/products/cor.35993.35993BF17010_o.jpg", "https://www.melissa.com.br/products/cor.35993.35993BF17011_o.jpg", "https://www.melissa.com.br/p/melissa-warm-boot/cor.35993.35993BF17011_o.jpg", "https://www.melissa.com.br/file/v2849456405422925975/products/cor.35993.35993BF17011_o.jpg", "https://www.melissa.com.br/products/cor.35993.35993BF17012_o.jpg", "https://www.melissa.com.br/p/melissa-warm-boot/cor.35993.35993BF17012_o.jpg", "https://www.melissa.com.br/file/v6408889938242668543/products/cor.35993.35993BF17012_o.jpg", "https://www.melissa.com.br/products/cor.35993.35993BF17013_o.jpg", "https://www.melissa.com.br/p/melissa-warm-boot/cor.35993.35993BF17013_o.jpg", "https://www.melissa.com.br/file/v5096167278790689476/products/cor.35993.35993BF17013_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v486290884415352182/products/35992Bl65710.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6858891337532710852/products/35992Bl65610 1.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6810346534526161859/products/35992Bl65614 1.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v230297668034215574/products/35992Bl65611 1.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4760238207945949914/products/35992Bl65613 1.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6679785887070572951/products/35992Bl65612 1.jpg&height=940&width=940", "https://www.melissa.com.br/products/35992Bl65610 1.jpg", "https://www.melissa.com.br/file/v6858891337532710852/products/35992Bl65610+1.jpg", "https://www.melissa.com.br/products/35992Bl65614 1.jpg", "https://www.melissa.com.br/file/v6810346534526161859/products/35992Bl65614+1.jpg", "https://www.melissa.com.br/products/35992Bl65611 1.jpg", "https://www.melissa.com.br/file/v230297668034215574/products/35992Bl65611+1.jpg", "https://www.melissa.com.br/products/35992Bl65613 1.jpg", "https://www.melissa.com.br/file/v4760238207945949914/products/35992Bl65613+1.jpg", "https://www.melissa.com.br/products/35992Bl65612 1.jpg", "https://www.melissa.com.br/file/v6679785887070572951/products/35992Bl65612+1.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8397582403128434751/products/cor.35992.35992BL65510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v853898572318543695/products/cor.35992.35992BL65512_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2361791117707128906/products/cor.35992.35992BL65513_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.35992.35992BL65510_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v93358833213342894/products/37992.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5821609767639977356/products/37992.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5271520360926227926/products/cor.37992.37992BT63110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8998682511738960746/products/cor.37992.37992BT63111_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8504775220850859275/products/cor.37992.37992BT63112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v36216438982610063/products/cor.37992.37992BT63113_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7273491374775789387/products/cor.37992.37992BT63114_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37992.37992BT63110_o.jpg", "https://www.melissa.com.br/p/melissa-flatform-hello-kitty/cor.37992.37992BT63110_o.jpg", "https://www.melissa.com.br/file/v5271520360926227926/products/cor.37992.37992BT63110_o.jpg", "https://www.melissa.com.br/products/cor.37992.37992BT63111_o.jpg", "https://www.melissa.com.br/p/melissa-flatform-hello-kitty/cor.37992.37992BT63111_o.jpg", "https://www.melissa.com.br/file/v8998682511738960746/products/cor.37992.37992BT63111_o.jpg", "https://www.melissa.com.br/products/cor.37992.37992BT63112_o.jpg", "https://www.melissa.com.br/p/melissa-flatform-hello-kitty/cor.37992.37992BT63112_o.jpg", "https://www.melissa.com.br/file/v8504775220850859275/products/cor.37992.37992BT63112_o.jpg", "https://www.melissa.com.br/products/cor.37992.37992BT63113_o.jpg", "https://www.melissa.com.br/p/melissa-flatform-hello-kitty/cor.37992.37992BT63113_o.jpg", "https://www.melissa.com.br/file/v36216438982610063/products/cor.37992.37992BT63113_o.jpg", "https://www.melissa.com.br/products/cor.37992.37992BT63114_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1126131228281755198/products/37993.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4529863986744842527/products/37993.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1126131228281755198/products/cor.37993.37993BT67410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4529863986744842527/products/cor.37993.37993BT67411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2253310892675735056/products/cor.37993.37993BT67412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6123860610371923696/products/cor.37993.37993BT67413_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37993.37993BT67410_o.jpg", "https://www.melissa.com.br/p/mini-melissa-hip-ballerina-hello-kitty-and-friends-baby/cor.37993.37993BT67410_o.jpg", "https://www.melissa.com.br/file/v1126131228281755198/products/cor.37993.37993BT67410_o.jpg", "https://www.melissa.com.br/products/cor.37993.37993BT67411_o.jpg", "https://www.melissa.com.br/p/mini-melissa-hip-ballerina-hello-kitty-and-friends-baby/cor.37993.37993BT67411_o.jpg", "https://www.melissa.com.br/file/v4529863986744842527/products/cor.37993.37993BT67411_o.jpg", "https://www.melissa.com.br/products/cor.37993.37993BT67412_o.jpg", "https://www.melissa.com.br/p/mini-melissa-hip-ballerina-hello-kitty-and-friends-baby/cor.37993.37993BT67412_o.jpg", "https://www.melissa.com.br/file/v2253310892675735056/products/cor.37993.37993BT67412_o.jpg", "https://www.melissa.com.br/products/cor.37993.37993BT67413_o.jpg", "https://www.melissa.com.br/p/mini-melissa-hip-ballerina-hello-kitty-and-friends-baby/cor.37993.37993BT67413_o.jpg", "https://www.melissa.com.br/file/v6123860610371923696/products/cor.37993.37993BT67413_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2821501757775867343/products/cor.37993.37993BT67710_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7641295525368159449/products/cor.37993.37993BT67711_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1811984274829203035/products/34523.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8213089905441551659/products/34523.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1811984274829203035/products/cor.34523.34523BY40410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8213089905441551659/products/cor.34523.34523BY40411_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7146784442218921063/products/cor.34523.34523BY40412_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3270520017074038080/products/cor.34523.34523BY40413_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2486458090801814419/products/cor.34523.34523BY40415_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6335348755890321686/products/cor.34523.34523BY40416_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2046519283902297854/products/cor.34523.34523BY40417_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6454935136882802168/products/cor.34523.34523BY40418_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2377398652565900553/products/cor.34523.34523BY40419_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4451382618224617381/products/cor.34523.34523BY40420_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.34523.34523BY40410_o.jpg", "https://www.melissa.com.br/p/melissa-cute-bag-hello-kitty-special-edition/cor.34523.34523BY40410_o.jpg", "https://www.melissa.com.br/file/v1811984274829203035/products/cor.34523.34523BY40410_o.jpg", "https://www.melissa.com.br/products/cor.34523.34523BY40411_o.jpg", "https://www.melissa.com.br/p/melissa-cute-bag-hello-kitty-special-edition/cor.34523.34523BY40411_o.jpg", "https://www.melissa.com.br/file/v8213089905441551659/products/cor.34523.34523BY40411_o.jpg", "https://www.melissa.com.br/products/cor.34523.34523BY40412_o.jpg", "https://www.melissa.com.br/p/melissa-cute-bag-hello-kitty-special-edition/cor.34523.34523BY40412_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v4092186041953610397/products/cor.36144.36144BJ35512_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6509531319625089508/products/cor.36144.36144BJ35510_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6509531319625089508/products/36144.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7905237569934902957/products/cor.36144.36144BJ35513_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1921670572919674617/products/cor.36144.36144BJ35514_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2028490030233303977/products/cor.36144.36144BJ35515_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.36144.36144BJ35510_o.jpg", "https://www.melissa.com.br/p/melissa-flowing-slide-stitch/cor.36144.36144BJ35510_o.jpg", "https://www.melissa.com.br/file/v6509531319625089508/products/cor.36144.36144BJ35510_o.jpg", "https://www.melissa.com.br/products/cor.36144.36144BJ35512_o.jpg", "https://www.melissa.com.br/p/melissa-flowing-slide-stitch/cor.36144.36144BJ35512_o.jpg", "https://www.melissa.com.br/file/v4092186041953610397/products/cor.36144.36144BJ35512_o.jpg", "https://www.melissa.com.br/products/cor.36144.36144BJ35513_o.jpg", "https://www.melissa.com.br/p/melissa-flowing-slide-stitch/cor.36144.36144BJ35513_o.jpg", "https://www.melissa.com.br/file/v7905237569934902957/products/cor.36144.36144BJ35513_o.jpg", "https://www.melissa.com.br/products/cor.36144.36144BJ35514_o.jpg", "https://www.melissa.com.br/p/melissa-flowing-slide-stitch/cor.36144.36144BJ35514_o.jpg", "https://www.melissa.com.br/file/v1921670572919674617/products/cor.36144.36144BJ35514_o.jpg", "https://www.melissa.com.br/products/cor.36144.36144BJ35515_o.jpg", "https://www.melissa.com.br/p/melissa-flowing-slide-stitch/cor.36144.36144BJ35515_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3824921236048263095/products/37883.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2464419655030031468/products/37883.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8358225950094530303/products/cor.37883.37883BT67010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v107242861023018799/products/cor.37883.37883BT67011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v9172257142058700800/products/cor.37883.37883BT67012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1005735398525843875/products/cor.37883.37883BT67013_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6779026758642518965/products/cor.37883.37883BT67014_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37883.37883BT67010_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-slide-disney/cor.37883.37883BT67010_o.jpg", "https://www.melissa.com.br/file/v8358225950094530303/products/cor.37883.37883BT67010_o.jpg", "https://www.melissa.com.br/products/cor.37883.37883BT67011_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-slide-disney/cor.37883.37883BT67011_o.jpg", "https://www.melissa.com.br/file/v107242861023018799/products/cor.37883.37883BT67011_o.jpg", "https://www.melissa.com.br/products/cor.37883.37883BT67012_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-slide-disney/cor.37883.37883BT67012_o.jpg", "https://www.melissa.com.br/file/v9172257142058700800/products/cor.37883.37883BT67012_o.jpg", "https://www.melissa.com.br/products/cor.37883.37883BT67013_o.jpg", "https://www.melissa.com.br/p/melissa-free-puff-slide-disney/cor.37883.37883BT67013_o.jpg", "https://www.melissa.com.br/file/v1005735398525843875/products/cor.37883.37883BT67013_o.jpg", "https://www.melissa.com.br/products/cor.37883.37883BT67014_o.jpg"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2348100092790852295/products/37885.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3255123657808119496/products/37885.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2348100092790852295/products/cor.37885.37885BT03010_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3255123657808119496/products/cor.37885.37885BT03011_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2605015952295292988/products/cor.37885.37885BT03012_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7935693528799823998/products/cor.37885.37885BT03013_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37885.37885BT03010_o.jpg", "https://www.melissa.com.br/p/mini-melissa-mix-disney-baby/cor.37885.37885BT03010_o.jpg", "https://www.melissa.com.br/file/v2348100092790852295/products/cor.37885.37885BT03010_o.jpg", "https://www.melissa.com.br/products/cor.37885.37885BT03011_o.jpg", "https://www.melissa.com.br/p/mini-melissa-mix-disney-baby/cor.37885.37885BT03011_o.jpg", "https://www.melissa.com.br/file/v3255123657808119496/products/cor.37885.37885BT03011_o.jpg", "https://www.melissa.com.br/products/cor.37885.37885BT03012_o.jpg", "https://www.melissa.com.br/p/mini-melissa-mix-disney-baby/cor.37885.37885BT03012_o.jpg", "https://www.melissa.com.br/file/v2605015952295292988/products/cor.37885.37885BT03012_o.jpg", "https://www.melissa.com.br/products/cor.37885.37885BT03013_o.jpg", "https://www.melissa.com.br/p/mini-melissa-mix-disney-baby/cor.37885.37885BT03013_o.jpg", "https://www.melissa.com.br/file/v7935693528799823998/products/cor.37885.37885BT03013_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2830707059044850346/products/cor.37885.37885BT03210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v362194392159382233/products/cor.37885.37885BT03211_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7350530416888232872/products/37917.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v6147803994639626839/products/37917.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1277891203845084485/products/cor.37917.37917BT45210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5332433883443959663/products/cor.37917.37917BT45211_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7506712898683553138/products/cor.37917.37917BT45212_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v2591033094398422328/products/cor.37917.37917BT45213_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37917.37917BT45210_o.jpg", "https://www.melissa.com.br/p/mini-melissa-solar-disney-princess-infantil/cor.37917.37917BT45210_o.jpg", "https://www.melissa.com.br/file/v1277891203845084485/products/cor.37917.37917BT45210_o.jpg", "https://www.melissa.com.br/products/cor.37917.37917BT45211_o.jpg", "https://www.melissa.com.br/p/mini-melissa-solar-disney-princess-infantil/cor.37917.37917BT45211_o.jpg", "https://www.melissa.com.br/file/v5332433883443959663/products/cor.37917.37917BT45211_o.jpg", "https://www.melissa.com.br/products/cor.37917.37917BT45212_o.jpg", "https://www.melissa.com.br/p/mini-melissa-solar-disney-princess-infantil/cor.37917.37917BT45212_o.jpg", "https://www.melissa.com.br/file/v7506712898683553138/products/cor.37917.37917BT45212_o.jpg", "https://www.melissa.com.br/products/cor.37917.37917BT45213_o.jpg", "https://www.melissa.com.br/p/mini-melissa-solar-disney-princess-infantil/cor.37917.37917BT45213_o.jpg", "https://www.melissa.com.br/file/v2591033094398422328/products/cor.37917.37917BT45213_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3459410409023706909/products/cor.37917.37917BT45410_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1603837384948377056/products/cor.37917.37917BT45411_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7525794405176947220/products/37879.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v226774787480144502/products/37879.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1062297647122739873/products/cor.37879.37879BT46310_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3960826807306382645/products/cor.37879.37879BT46311_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1634781397353338563/products/cor.37879.37879BT46312_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v3969610781715347716/products/cor.37879.37879BT46313_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37879.37879BT46310_o.jpg", "https://www.melissa.com.br/p/mini-melissa-ultragirl-disney-baby/cor.37879.37879BT46310_o.jpg", "https://www.melissa.com.br/file/v1062297647122739873/products/cor.37879.37879BT46310_o.jpg", "https://www.melissa.com.br/products/cor.37879.37879BT46311_o.jpg", "https://www.melissa.com.br/p/mini-melissa-ultragirl-disney-baby/cor.37879.37879BT46311_o.jpg", "https://www.melissa.com.br/file/v3960826807306382645/products/cor.37879.37879BT46311_o.jpg", "https://www.melissa.com.br/products/cor.37879.37879BT46312_o.jpg", "https://www.melissa.com.br/p/mini-melissa-ultragirl-disney-baby/cor.37879.37879BT46312_o.jpg", "https://www.melissa.com.br/file/v1634781397353338563/products/cor.37879.37879BT46312_o.jpg", "https://www.melissa.com.br/products/cor.37879.37879BT46313_o.jpg", "https://www.melissa.com.br/p/mini-melissa-ultragirl-disney-baby/cor.37879.37879BT46313_o.jpg", "https://www.melissa.com.br/file/v3969610781715347716/products/cor.37879.37879BT46313_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v7525794405176947220/products/cor.37879.37879BT46510_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v8574378988461511668/products/cor.37879.37879BT46512_o.jpg&height=940&width=940"],
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
    images: ["https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1846002292466923574/products/37878.10_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v477733060223165095/products/37878.11_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v1846002292466923574/products/cor.37878.37878BU56110_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v477733060223165095/products/cor.37878.37878BU56111_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5077044869828162344/products/cor.37878.37878BU56112_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v281669947701096139/products/cor.37878.37878BU56113_o.jpg&height=940&width=940", "https://www.melissa.com.br/products/cor.37878.37878BU56110_o.jpg", "https://www.melissa.com.br/p/mini-melissa-flowing-slide-disney-infantil/cor.37878.37878BU56110_o.jpg", "https://www.melissa.com.br/file/v1846002292466923574/products/cor.37878.37878BU56110_o.jpg", "https://www.melissa.com.br/products/cor.37878.37878BU56111_o.jpg", "https://www.melissa.com.br/p/mini-melissa-flowing-slide-disney-infantil/cor.37878.37878BU56111_o.jpg", "https://www.melissa.com.br/file/v477733060223165095/products/cor.37878.37878BU56111_o.jpg", "https://www.melissa.com.br/products/cor.37878.37878BU56112_o.jpg", "https://www.melissa.com.br/p/mini-melissa-flowing-slide-disney-infantil/cor.37878.37878BU56112_o.jpg", "https://www.melissa.com.br/file/v5077044869828162344/products/cor.37878.37878BU56112_o.jpg", "https://www.melissa.com.br/products/cor.37878.37878BU56113_o.jpg", "https://www.melissa.com.br/p/mini-melissa-flowing-slide-disney-infantil/cor.37878.37878BU56113_o.jpg", "https://www.melissa.com.br/file/v281669947701096139/products/cor.37878.37878BU56113_o.jpg", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v5006551175335203875/products/cor.37878.37878BU56210_o.jpg&height=940&width=940", "https://www.melissa.com.br/ccstore/v1/images/?source=/file/v248034438228764997/products/cor.37878.37878BU56211_o.jpg&height=940&width=940"],
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
