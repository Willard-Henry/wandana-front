const PRODUCTS = [
  // Already translated first 5 items...
  {
    id: "1",
    name: {
      en: "Ladies Official Dress",
      twi: "Mmaa ɔfese ataaadeɛ",
      ga: "Yei ɔ fis atale",
      ewe: "nyɔnuwo ƒe ɔfis awudodo",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Official dress",
      tw: "ɔfese ataaadeɛ",
      ga: "ɔfis atale",
      ewe: "ɔfis ƒe awudodo",
    },
    price: 29.99,
    rating: 4.5,
    image:
      "https://s.alicdn.com/@sc04/kf/H86323f72edd0495d8ac47e1627b2a67en.jpg",
    tag: {
      en: "Bestseller",
      twi: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "40",
    name: {
      en: "Ladies Official Dress",
      twi: "Mmaa ɔfese ataaadeɛ",
      ga: "Yei ɔfis atale",
      ewe: "nyɔnuwo ƒe ɔfis awudodo",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Official dress",
      tw: "ɔfese ataaadeɛ",
      ga: "ɔfis atale",
      ewe: "ɔfis ƒe awudodo",
    },
    price: 29.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/04/11/51/041151711cc50ff4534acebfd799393b.jpg",
    tag: {
      en: "Bestseller",
      twi: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "3",
    name: {
      en: "Ladies Winter Suit",
      twi: "Mmaa awɔw bere atadeɛ",
      ga: "Yei shishi kpakpa atale",
      ewe: "nyɔnuwo ƒe jacket",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Casual dress",
      tw: "efie ataaadeɛ",
      ga: "efie atale",
      ewe: "awu si wodona le vome",
    },
    price: 29.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/db/a0/8d/dba08df2d10beda558ae1b74b5c165e7.jpg",
    tag: {
      en: "Bestseller",
      twi: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "4",
    name: {
      en: "Ladies Dress",
      twi: "Mmaa ataaadeɛ",
      ga: "Yei atale",
      ewe: "nyɔnuwo ƒe awudodo",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Casual dress",
      tw: "efie ataaadeɛ",
      ga: "efie atale",
      ewe: "awu si wodona le vome",
    },
    price: 29.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/7c/cb/db/7ccbdb5a00ff80a216fed28716193a4b.jpg",
    tag: {
      en: "Bestseller",
      twi: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "48",
    name: {
      en: "Men Official",
      twi: "Mmarima  atadeɛ",
      ga: "Hii ɔfis atale",
      ewe: "ŋutsuwo ƒe ɔfis",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "Men Official",
      tw: "Mmarima ɔfese",
      ga: "Hii ɔfis",
      ewe: "ŋutsuwo ƒe ɔfis",
    },
    price: 29.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/1200x/af/c6/88/afc688001683a776358194f1bdd1bee3.jpg",
    tag: {
      en: "Bestseller",
      twi: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "49",
    name: {
      en: "Men Winter Suit",
      twi: "Mmarima awɔw atadeɛ",
      ga: "Hii ɔfis atale",
      ewe: "Men Winter Suit",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "Men Official",
      tw: "Mmarima ɔfese",
      ga: "Hii ɔfis",
      ewe: "ŋutsuwo ƒe ɔfis",
    },
    price: 29.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/1200x/3d/81/f3/3d81f3fdedc9a9e9452bad1ca354489c.jpg",
    tag: {
      en: "Bestseller",
      twi: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "49",
    name: {
      en: "Men Winter Suit",
      twi: "Mmarima awɔw atadeɛ",
      ga: "Hii abɔmɔ ni atade",
      ewe: "Tɔgbui xexeme ɖoɖo",
    },

    ////CATEORY FOR MEN ////////////////////////
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },

    ////MEN OFFICIAL///////////
    ///////////////////////////
    subcategory: {
      en: "Men Official",
      tw: "Mmarima ɔfese",
      ga: "Hii ɔfis",
      ewe: "ŋutsuwo ƒe ɔfis",
    },
    price: 29.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/1200x/3d/81/f3/3d81f3fdedc9a9e9452bad1ca354489c.jpg",

    tag: {
      en: "Bestseller",
      twi: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "50",
    name: {
      en: "Men Winter Suit",
      twi: "Mmarima Awareɛ Ataaadeɛ",
      ga: "Hii gbɛjɛ atale",
      ewe: "Menɔvi ƒuƒu atade",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "Men Official",
      tw: "Mmarima ɔfese",
      ga: "Hii ɔfis",
      ewe: "ŋutsuwo ƒe ɔfis",
    },
    price: 29.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/cc/e5/d7/cce5d7d2f627ce19c5fa4633fca1e607.jpg",
    /////////BEST SELLER////////////////////
    /////////////////////////////////
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },

  {
    id: "51",
    name: {
      en: "Men Winter Suit",
      twi: "Mmarima Awɔw Ataaadeɛ", // updated "Winter" to "Awɔw"
      ga: "Hii gbɛjɛ atale",
      ewe: "Menɔvi ƒuƒu atade",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "Men Official",
      tw: "Mmarima ɔfese",
      ga: "Hii ɔfis",
      ewe: "ŋutsuwo ƒe ɔfis",
    },
    price: 29.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/1200x/ec/21/51/ec21511c92fd6ed8a1e1018c6e3aa83f.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "52",
    name: {
      en: "Men Winter Suit",
      twi: "Mmarima Awɔw Ataaadeɛ",
      ga: "Hii gbɛjɛ atale",
      ewe: "Menɔvi ƒuƒu atade",
    },
    category: "Men",
    subcategory: "Men Official",
    price: 29.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/37/94/d1/3794d1feb9cb2e45b0d454a07a6ab194.jpg",
    tag: {
      en: "Bestseller",
      tw: "Wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },

  {
    id: "60",
    name: {
      en: "Women Dress",
      tw: "Mmaa ataaadeɛ",
      ga: "Yie atale",
      ewe: "nyɔnuwo ƒe awu",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Casual dress",
      tw: "efie ataaadeɛ",
      ga: "efie atale",
      ewe: "awu si wodona le vome",
    },
    price: 35.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/17/e8/31/17e8313d5036c048cfb630840bdc8ec9.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "61",
    name: {
      en: "Women Dress",
      tw: "Mmaa ataaadeɛ",
      ga: "Yie atale",
      ewe: "nyɔnuwo ƒe awu",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Casual dress",
      tw: "efie ataaadeɛ",
      ga: "efie atale",
      ewe: "awu si wodona le vome",
    },
    price: 29.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/1200x/45/52/71/455271bc27f3d029067f57bb474fe31f.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "62",
    name: {
      en: "Women Dress",
      tw: "Mmaa ataaadeɛ",
      ga: "Yie atale",
      ewe: "nyɔnuwo ƒe awu",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Casual dress",
      tw: "efie ataaadeɛ",
      ga: "efie atale",
      ewe: "awu si wodona le vome",
    },
    price: 29.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/80/49/bc/8049bca2fe1b8ea38e26fa9da382153e.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "63",
    name: {
      en: "Women Dress",
      tw: "Mmaa ataaadeɛ",
      ga: "Yie atale",
      ewe: "nyɔnuwo ƒe awu",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Casual dress",
      tw: "efie ataaadeɛ",
      ga: "efie atale",
      ewe: "awu si wodona le vome",
    },
    price: 29.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/d6/b4/ff/d6b4ff248e145b188b58f0790055856b.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "64",
    name: {
      en: "Women Dress",
      tw: "Mmaa ataaadeɛ",
      ga: "Yie atale",
      ewe: "nyɔnuwo ƒe awu",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Casual dress",
      tw: "efie ataaadeɛ",
      ga: "efie atale",
      ewe: "awu si wodona le vome",
    },
    price: 29.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/0f/b4/23/0fb4239329e26721798604d87fb43375.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "16",
    name: {
      en: "Women Dress",
      tw: "Mmaa ataaadeɛ",
      ga: "Yie atale",
      ewe: "nyɔnuwo ƒe awu",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Official dress",
      tw: "ɔfese ataaadeɛ",
      ga: "ɔfis atale",
      ewe: "ɔfis ƒe awudodo",
    },
    price: 19.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/ae/8c/24/ae8c24bd917712e87f84aaf89f0e4cee.jpg",
    tag: {
      en: "New",
      tw: "New",
      ga: "New",
      ewe: "New",
    },
  },
  {
    id: "17",
    name: {
      en: "Women Dress",
      tw: "Mmaa ataaadeɛ",
      ga: "Yie atale",
      ewe: "nyɔnuwo ƒe awu",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Official dress",
      tw: "ɔfese ataaadeɛ",
      ga: "ɔfis atale",
      ewe: "ɔfis ƒe awudodo",
    },
    price: 39.99,
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/52/33/37/523337b11e778a52550d0b945f05d36d.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "18",
    name: {
      en: "Women Dress",
      tw: "Mmaa ataaadeɛ",
      ga: "Yie atale",
      ewe: "nyɔnuwo ƒe awu",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Official dress",
      tw: "ɔfese ataaadeɛ",
      ga: "ɔfis atale",
      ewe: "ɔfis ƒe awudodo",
    },
    price: 49.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/c2/84/88/c284883b92b2269e2d078bb97dac3407.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "19",
    name: {
      en: "Hand Bag",
      tw: "nsa kotokuo",
      ga: "Hand Bag",
      ewe: "Hand Bag",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Bags",
      tw: "kotokuo",
      ga: "Bags",
      ewe: "Bags",
    },
    price: 49.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/fc/38/8e/fc388e7b9afcae28cb887011d005419d.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "27",
    name: {
      en: "Women Handbag",
      tw: "Mmaa nsa kotokuo",
      ga: "Yie Hand Bag",
      ewe: "nyɔnuwo ƒe Hand Bag",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Bags",
      tw: "kotokuo",
      ga: "Bags",
      ewe: "Bags",
    },
    price: 59.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/68/3c/50/683c506e48c8ebce8419281bcb719268.jpg",
    tag: {
      en: "Super",
      tw: "Super",
      ga: "Super",
      ewe: "Super",
    },
  },
  {
    id: "29",
    name: {
      en: "Women Handbag",
      tw: "Mmaa nsa kotokuo",
      ga: "Yie Hand Bag",
      ewe: "nyɔnuwo ƒe Hand Bag",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Bags",
      tw: "kotokuo",
      ga: "Bags",
      ewe: "Bags",
    },
    price: 59.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/9f/a9/4a/9fa94a34ca949f53b7299826cfd87ab6.jpg",
    tag: {
      en: "Super",
      tw: "Super",
      ga: "Super",
      ewe: "Super",
    },
  },
  {
    id: "100",
    name: {
      en: "Men Casual Shirt XL",
      tw: "Mmarima efie ataaadeɛ XL",
      ga: "Hii efie atale XL",
      ewe: "ŋutsuwo ƒe efie awu XL",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "casual",
      tw: "efie",
      ga: "efie",
      ewe: "efie",
    },
    price: 34.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/2b/41/b1/2b41b10cc50d0bad26ed713de9e01e1a.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "101",
    name: {
      en: "Men Casual Shirt L",
      tw: "Mmarima efie ataaadeɛ L",
      ga: "Hii efie atale L",
      ewe: "ŋutsuwo ƒe efie awu L",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "casual",
      tw: "efie",
      ga: "efie",
      ewe: "efie",
    },
    price: 32.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/ce/c8/9c/cec89cf1c0a8aac01bb206a2949475ec.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "102",
    name: {
      en: "Men Top L",
      tw: "Mmarima soro ataaadeɛ L",
      ga: "Hii soro atale L",
      ewe: "ŋutsuwo ƒe soro awu L",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "casual",
      tw: "efie",
      ga: "efie",
      ewe: "efie",
    },
    price: 28.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/53/dc/52/53dc52dd7ea904e6553122bde6cdb5fa.jpg",
    tag: {
      en: "New",
      tw: "New",
      ga: "New",
      ewe: "New",
    },
  },
  {
    id: "103",
    name: {
      en: "Men Bag",
      tw: "Mmarima kotokuo",
      ga: "Hii kotokuo",
      ewe: "ŋutsuwo ƒe kotokuo",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "bags",
      tw: "kotokuo",
      ga: "bags",
      ewe: "bags",
    },
    price: 39.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/1200x/89/d2/14/89d2142fe738848b5a44ec5e7cb9fadd.jpg",
    tag: {
      en: "Super",
      tw: "Super",
      ga: "Super",
      ewe: "Super",
    },
  },
  {
    id: "104",
    name: {
      en: "Men Bag Classic",
      tw: "Mmarima kotokuo tete",
      ga: "Hii kotokuo Classic",
      ewe: "ŋutsuwo ƒe kotokuo Classic",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "bags",
      tw: "kotokuo",
      ga: "bags",
      ewe: "bags",
    },
    price: 41.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/7b/4c/75/7b4c75121a3aedd617420f83f55d46bd.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "105",
    name: {
      en: "Men Sneaker",
      tw: "Mmarima sneaker",
      ga: "Hii sneaker",
      ewe: "ŋutsuwo ƒe sneaker",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "footwear",
      tw: "anan ntoma",
      ga: "footwear",
      ewe: "footwear",
    },
    price: 59.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/16/e5/63/16e563f816f8d1cb405f2d3ab900deca.jpg",
    tag: {
      en: "New",
      tw: "New",
      ga: "New",
      ewe: "New",
    },
  },
  {
    id: "106",
    name: {
      en: "Men Sport Footwear",
      tw: "Mmarima Sport anan ntoma",
      ga: "Hii Sport footwear",
      ewe: "ŋutsuwo ƒe Sport footwear",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "footwear",
      tw: "anan ntoma",
      ga: "footwear",
      ewe: "footwear",
    },
    price: 62.49,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/eb/15/44/eb15446e5ccdbb22834ada9579792c67.jpg",
    tag: {
      en: "Super",
      tw: "Super",
      ga: "Super",
      ewe: "Super",
    },
  },
  {
    id: "107",
    name: {
      en: "Men Chain Necklace",
      tw: "Mmarima nkyene kɔnmuadie",
      ga: "Hii Chain Necklace",
      ewe: "ŋutsuwo ƒe Chain Necklace",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "jewelry",
      ewe: "jewelry",
    },
    price: 22.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/1200x/f8/82/2a/f8822afab2fd7126a0907482963aa034.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "108",
    name: {
      en: "Men Pendant Jewelry",
      tw: "Mmarima Pendant nnwinne",
      ga: "Hii Pendant jewelry",
      ewe: "ŋutsuwo ƒe Pendant jewelry",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "jewelry",
      ewe: "jewelry",
    },
    price: 24.49,
    rating: 4.6,
    image:
      "https://i.pinimg.com/1200x/d8/cd/e5/d8cde573c6b277b52397039305d3553c.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "109",
    name: {
      en: "Men Bracelet",
      tw: "Mmarima nsabɔ",
      ga: "Hii Bracelet",
      ewe: "ŋutsuwo ƒe Bracelet",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "jewelry",
      ewe: "jewelry",
    },
    price: 18.99,
    rating: 4.1,
    image:
      "https://i.pinimg.com/1200x/a9/76/e6/a976e6d3b0b91908ec7e54316b5062bc.jpg",
    tag: {
      en: "New",
      tw: "New",
      ga: "New",
      ewe: "New",
    },
  },
  {
    id: "110",
    name: {
      en: "Men Fashion Ring",
      tw: "Mmarima Fashion kawa",
      ga: "Hii Fashion Ring",
      ewe: "ŋutsuwo ƒe Fashion Ring",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "jewelry",
      ewe: "jewelry",
    },
    price: 16.99,
    rating: 4.0,
    image:
      "https://i.pinimg.com/1200x/9f/68/67/9f6867f6dc933179a8b2439a110fb2a2.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "111",
    name: {
      en: "Men Jewelry Combo",
      tw: "Mmarima nnwinne Combo",
      ga: "Hii jewelry Combo",
      ewe: "ŋutsuwo ƒe jewelry Combo",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "jewelry",
      ewe: "jewelry",
    },
    price: 29.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/1200x/89/e5/c5/89e5c5648321170aa3e6db2fdfea5d76.jpg",
    tag: {
      en: "Super",
      tw: "Super",
      ga: "Super",
      ewe: "Super",
    },
  },
  {
    id: "112",
    name: {
      en: "Men Swim Shorts",
      tw: "Mmarima nsu mu shorts",
      ga: "Hii Swim Shorts",
      ewe: "ŋutsuwo ƒe Swim Shorts",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "beachware",
      tw: "mpoano ntoma",
      ga: "beachware",
      ewe: "beachware",
    },
    price: 25.49,
    rating: 4.2,
    image:
      "https://i.pinimg.com/1200x/c8/4b/8b/c84b8b6889d3e7f674a795c0df04992d.jpg",
    tag: {
      en: "New",
      tw: "New",
      ga: "New",
      ewe: "New",
    },
  },
  {
    id: "113",
    name: {
      en: "Men Beachwear Set",
      tw: "Mmarima mpoano ntoma set",
      ga: "Hii Beachwear Set",
      ewe: "ŋutsuwo ƒe Beachwear Set",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "beachware",
      tw: "mpoano ntoma",
      ga: "beachware",
      ewe: "beachware",
    },
    price: 27.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/1200x/2a/13/94/2a13946fd97964aa2f94e67a43e25f1a.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "114",
    name: {
      en: "Men Blazer XL",
      tw: "Mmarima Blazer XL",
      ga: "Hii Blazer XL",
      ewe: "ŋutsuwo ƒe Blazer XL",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "official",
      tw: "ɔfese",
      ga: "ɔfis",
      ewe: "ɔfis",
    },
    price: 65.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/f1/e4/4a/f1e44a8ee618e7739ebd73a3f4c11cbe.jpg",
    tag: {
      en: "Super",
      tw: "Super",
      ga: "Super",
      ewe: "Super",
    },
  },
  {
    id: "115",
    name: {
      en: "Men Suit XXL",
      tw: "Mmarima Suit XXL",
      ga: "Hii Suit XXL",
      ewe: "ŋutsuwo ƒe Suit XXL",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "official",
      tw: "ɔfese",
      ga: "ɔfis",
      ewe: "ɔfis",
    },
    price: 72.99,
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/fb/5c/d4/fb5cd482a95a0314af5b54b69f559e3d.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "116",
    name: {
      en: "Men Side Bag",
      tw: "Mmarima nkyɛn kotokuo",
      ga: "Hii Side Bag",
      ewe: "ŋutsuwo ƒe Side Bag",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "bags",
      tw: "kotokuo",
      ga: "bags",
      ewe: "bags",
    },
    price: 36.49,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/f8/da/fc/f8dafc83247af9b8d5ed74c5bd1b5499.jpg",
    tag: {
      en: "New",
      tw: "New",
      ga: "New",
      ewe: "New",
    },
  },
  {
    id: "117",
    name: {
      en: "Men Slip-On Shoe",
      tw: "Mmarima Slip-On anan ntoma",
      ga: "Hii Slip-On Shoe",
      ewe: "ŋutsuwo ƒe Slip-On Shoe",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "footwear",
      tw: "anan ntoma",
      ga: "footwear",
      ewe: "footwear",
    },
    price: 49.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/f7/9f/16/f79f16cc44f29010d81a5821dc1f4e43.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "118",
    name: {
      en: "Men Casual Tee",
      tw: "Mmarima efie tee",
      ga: "Hii efie Tee",
      ewe: "ŋutsuwo ƒe efie Tee",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "casual",
      tw: "efie",
      ga: "efie",
      ewe: "efie",
    },
    price: 30.49,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/96/98/09/96980929de8841c90b2678fd4023ba72.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "119",
    name: {
      en: "Men Casual Polo",
      tw: "Mmarima efie Polo",
      ga: "Hii efie Polo",
      ewe: "ŋutsuwo ƒe efie Polo",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "casual",
      tw: "efie",
      ga: "efie",
      ewe: "efie",
    },
    price: 32.0,
    rating: 4.3,
    image:
      "https://i.pinimg.com/1200x/25/6e/0c/256e0c33413fa927e7786b7f5b240f96.jpg",
    tag: {
      en: "Super",
      tw: "Super",
      ga: "Super",
      ewe: "Super",
    },
  },
  {
    id: "120",
    name: {
      en: "Men Casual Wear",
      tw: "Mmarima efie ataaadeɛ",
      ga: "Hii efie atale",
      ewe: "ŋutsuwo ƒe efie awu",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "casual",
      tw: "efie",
      ga: "efie",
      ewe: "efie",
    },
    price: 31.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/58/b0/96/58b096d929f432bae48ac75ae5b07c21.jpg",
    tag: {
      en: "New",
      tw: "New",
      ga: "New",
      ewe: "New",
    },
  },
  {
    id: "121",
    name: {
      en: "Men Classic Shirt",
      tw: "Mmarima tete ataaadeɛ",
      ga: "Hii Classic atale",
      ewe: "ŋutsuwo ƒe Classic awu",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "casual",
      tw: "efie",
      ga: "efie",
      ewe: "efie",
    },
    price: 29.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/c5/07/93/c507932349cf8a21ee54e3bbe6bb4887.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "122",
    name: {
      en: "Kids Sneakers Blue",
      tw: "mmofra sneakers blue",
      ga: "Kids Sneakers Blue",
      ewe: "Kids Sneakers Blue",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "footwear",
      tw: "anan ntoma",
      ga: "footwear",
      ewe: "footwear",
    },
    price: 27.49,
    rating: 4.4,
    image:
      "https://i.pinimg.com/1200x/af/bc/40/afbc4053607a8e340090e32a0887b2f0.jpg",
    tag: {
      en: "Super",
      tw: "Super",
      ga: "Super",
      ewe: "Super",
    },
  },
  {
    id: "123",
    name: {
      en: "Kids Footwear Black",
      tw: "mmofra anan ntoma tuntum",
      ga: "Kids footwear Black",
      ewe: "Kids footwear Black",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "footwear",
      tw: "anan ntoma",
      ga: "footwear",
      ewe: "footwear",
    },
    price: 25.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/cb/7c/fb/cb7cfb082a619401a4d0785f1de5200b.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "124",
    name: {
      en: "Kids Casual Shoes",
      tw: "mmofra efie anan ntoma",
      ga: "Kids efie Shoes",
      ewe: "Kids efie Shoes",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "footwear",
      tw: "anan ntoma",
      ga: "footwear",
      ewe: "footwear",
    },
    price: 26.99,
    rating: 4.1,
    image:
      "https://i.pinimg.com/1200x/a6/2b/2b/a62b2bf5cc71dd7d961fd5406dbf925a.jpg",
    tag: {
      en: "New",
      tw: "New",
      ga: "New",
      ewe: "New",
    },
  },
  {
    id: "125",
    name: {
      en: "Kids Sneaker White",
      tw: "mmofra sneaker fitaa",
      ga: "Kids Sneaker White",
      ewe: "Kids Sneaker White",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "footwear",
      tw: "anan ntoma",
      ga: "footwear",
      ewe: "footwear",
    },
    price: 29.49,
    rating: 4.5,
    image:
      "https://i.pinimg.com/1200x/78/51/f8/7851f89b5381a0a4a6fde13b7d99f3cf.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "126",
    name: {
      en: "Kids Bright Sneakers",
      tw: "mmofra hyeren sneakers",
      ga: "Kids Bright Sneakers",
      ewe: "Kids Bright Sneakers",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "footwear",
      tw: "anan ntoma",
      ga: "footwear",
      ewe: "footwear",
    },
    price: 28.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/b0/82/2a/b0822a2f734d80f00e2be12bb651b7eb.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "127",
    name: {
      en: "Kids Low-cut Shoe",
      tw: "mmofra ase anan ntoma",
      ga: "Kids Low-cut Shoe",
      ewe: "Kids Low-cut Shoe",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "footwear",
      tw: "anan ntoma",
      ga: "footwear",
      ewe: "footwear",
    },
    price: 22.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/b4/2a/a4/b42aa4a45474dafdc296fca28e25602b.jpg",
    tag: {
      en: "New",
      tw: "New",
      ga: "New",
      ewe: "New",
    },
  },
  {
    id: "128",
    name: {
      en: "Kids Slip-On Footwear",
      tw: "mmofra Slip-On anan ntoma",
      ga: "Kids Slip-On footwear",
      ewe: "Kids Slip-On footwear",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "footwear",
      tw: "anan ntoma",
      ga: "footwear",
      ewe: "footwear",
    },
    price: 23.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/b5/fc/d2/b5fcd26bb08ffb2a9474b9ace3d491ce.jpg",
    tag: {
      en: "Super",
      tw: "Super",
      ga: "Super",
      ewe: "Super",
    },
  },
  {
    id: "129",
    name: {
      en: "Men Black Sneakers",
      tw: "Mmarima tuntum sneakers",
      ga: "Hii Black Sneakers",
      ewe: "ŋutsuwo ƒe Black Sneakers",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "footwear",
      tw: "anan ntoma",
      ga: "footwear",
      ewe: "footwear",
    },
    price: 49.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/55/14/9c/55149caa2206511f63bb04565371e6d4.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "130",
    name: {
      en: "Men Sport Sneakers",
      tw: "Mmarima sport sneakers",
      ga: "Hii Sport Sneakers",
      ewe: "ŋutsuwo ƒe Sport Sneakers",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "footwear",
      tw: "anan ntoma",
      ga: "footwear",
      ewe: "footwear",
    },
    price: 51.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/26/31/d6/2631d69539b2b13dbad5bdabfbbb2f4e.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "131",
    name: {
      en: "Men White Trainers",
      tw: "Mmarima fitaa trainers",
      ga: "Hii White Trainers",
      ewe: "ŋutsuwo ƒe White Trainers",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "footwear",
      tw: "anan ntoma",
      ga: "footwear",
      ewe: "footwear",
    },
    price: 54.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/1200x/37/e8/30/37e8306d0ce49cddac14f85c3b1dc57a.jpg",
    tag: {
      en: "Super",
      tw: "Super",
      ga: "Super",
      ewe: "Super",
    },
  },
  {
    id: "132",
    name: {
      en: "Kids Tee Casual Small",
      tw: "mmofra tee efie ketewa",
      ga: "Kids Tee efie Small",
      ewe: "Kids Tee efie Small",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "casual",
      tw: "efie",
      ga: "efie",
      ewe: "efie",
    },
    price: 18.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/72/c2/d6/72c2d6c9f257773de5a894cb98200925.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "133",
    name: {
      en: "Kids Shirt Casual Small",
      tw: "mmofra ataaadeɛ efie ketewa",
      ga: "Kids atale efie Small",
      ewe: "Kids awu efie Small",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "casual",
      tw: "efie",
      ga: "efie",
      ewe: "efie",
    },
    price: 19.49,
    rating: 4.2,
    image:
      "https://i.pinimg.com/1200x/ff/98/04/ff98047a4166a8448de93c45988a13cc.jpg",
    tag: {
      en: "New",
      tw: "New",
      ga: "New",
      ewe: "New",
    },
  },
  {
    id: "134",
    name: {
      en: "Kids Polo Casual Small",
      tw: "mmofra Polo efie ketewa",
      ga: "Kids Polo efie Small",
      ewe: "Kids Polo efie Small",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "casual",
      tw: "efie",
      ga: "efie",
      ewe: "efie",
    },
    price: 20.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/1200x/59/89/2f/59892fa010836473215d6cfcce79dc3b.jpg",
    tag: {
      en: "Super",
      tw: "Super",
      ga: "Super",
      ewe: "Super",
    },
  },
  {
    id: "135",
    name: {
      en: "Kids Casual Top Small",
      tw: "mmofra efie soro ketewa",
      ga: "Kids efie Top Small",
      ewe: "Kids efie Top Small",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "casual",
      tw: "efie",
      ga: "efie",
      ewe: "efie",
    },
    price: 21.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/1200x/13/9d/c5/139dc59b60f9db88ba80e1868ea59379.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "136",
    name: {
      en: "Kids Bright Tee Small",
      tw: "mmofra hyeren tee ketewa",
      ga: "Kids Bright Tee Small",
      ewe: "Kids Bright Tee Small",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "casual",
      tw: "efie",
      ga: "efie",
      ewe: "efie",
    },
    price: 20.49,
    rating: 4.1,
    image:
      "https://i.pinimg.com/1200x/0e/a5/56/0ea55639a143d26736161b511c8c4df9.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "137",
    name: {
      en: "Kids Beachwear Yellow",
      tw: "mmofra mpoano ntoma kɔkɔɔ",
      ga: "Kids Beachwear Yellow",
      ewe: "Kids Beachwear Yellow",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "beachware",
      tw: "mpoano ntoma",
      ga: "beachware",
      ewe: "beachware",
    },
    price: 22.49,
    rating: 4.3,
    image:
      "https://i.pinimg.com/1200x/9e/0f/45/9e0f45a8ba132f68c9a431907b0545b7.jpg",
    tag: {
      en: "New",
      tw: "New",
      ga: "New",
      ewe: "New",
    },
  },
  {
    id: "138",
    name: {
      en: "Kids Swimwear Blue",
      tw: "mmofra nsu mu ntoma bruu",
      ga: "Kids Swimwear Blue",
      ewe: "Kids Swimwear Blue",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "beachware",
      tw: "mpoano ntoma",
      ga: "beachware",
      ewe: "beachware",
    },
    price: 24.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/05/b9/30/05b9303b9814b9aa7da749c98286b9c4.jpg",
    tag: {
      en: "Super",
      tw: "Super",
      ga: "Super",
      ewe: "Super",
    },
  },
  {
    id: "139",
    name: {
      en: "Kids Beach Shorts",
      tw: "mmofra mpoano shorts",
      ga: "Kids Beach Shorts",
      ewe: "Kids Beach Shorts",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "beachware",
      tw: "mpoano ntoma",
      ga: "beachware",
      ewe: "beachware",
    },
    price: 26.49,
    rating: 4.4,
    image:
      "https://i.pinimg.com/1200x/0d/20/a6/0d20a6d17d0b6f21ce439dcbde751548.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "140",
    name: {
      en: "Kids Beachwear Set",
      tw: "mmofra mpoano ntoma set",
      ga: "Kids Beachwear Set",
      ewe: "Kids Beachwear Set",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "beachware",
      tw: "mpoano ntoma",
      ga: "beachware",
      ewe: "beachware",
    },
    price: 27.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/a2/04/0b/a2040b6992de0b8a156cb44093b729a9.jpg",
    tag: {
      en: "Super",
      tw: "Super",
      ga: "Super",
      ewe: "Super",
    },
  },
  {
    id: "141",
    name: {
      en: "Kids Casual Tee",
      tw: "mmofra efie tee",
      ga: "Kids efie Tee",
      ewe: "Kids efie Tee",
    },
    category: {
      en: "Child",
      tw: "mmofra",
      ga: "Child",
      ewe: "Child",
    },
    subcategory: {
      en: "casual",
      tw: "efie",
      ga: "efie",
      ewe: "efie",
    },
    price: 19.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/05/b9/30/05b9303b9814b9aa7da749c98286b9c4.jpg",
    tag: {
      en: "New",
      tw: "New",
      ga: "New",
      ewe: "New",
    },
  },
  {
    id: "142",
    name: {
      en: "Silver Pendant Jewelry",
      tw: "dwetɛ Pendant nnwinne",
      ga: "Silver Pendant jewelry",
      ewe: "Silver Pendant jewelry",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Home",
      ewe: "Home",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "jewelry",
      ewe: "jewelry",
    },
    price: 35.49,
    rating: 4.6,
    image:
      "https://i.pinimg.com/1200x/c7/96/a5/c796a52aeac8b441a3be0ba2a3041a0a.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "143",
    name: {
      en: "Gold Chain Jewelry",
      tw: "sika kɔkɔɔ nkyene nnwinne",
      ga: "Gold Chain jewelry",
      ewe: "Gold Chain jewelry",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Home",
      ewe: "Home",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "jewelry",
      ewe: "jewelry",
    },
    price: 42.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/49/6d/57/496d57c96967a672a6228fadd861b29f.jpg",
    tag: {
      en: "Hot",
      tw: "Hot",
      ga: "Hot",
      ewe: "Hot",
    },
  },
  {
    id: "144",
    name: {
      en: "Diamond Ring",
      tw: "Diamond kawa",
      ga: "Diamond Ring",
      ewe: "Diamond Ring",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Home",
      ewe: "Home",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "jewelry",
      ewe: "jewelry",
    },
    price: 55.99,
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/d6/28/84/d628846a7f31106b314f3a30b0bb481c.jpg",
    tag: {
      en: "Super",
      tw: "Super",
      ga: "Super",
      ewe: "Super",
    },
  },
  {
    id: "145",
    name: {
      en: "Beaded Necklace",
      tw: "nhweaban kɔnmuadie",
      ga: "Beaded Necklace",
      ewe: "Beaded Necklace",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Home",
      ewe: "Home",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "jewelry",
      ewe: "jewelry",
    },
    price: 33.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/25/b3/64/25b364aec0761d1597bb10a089767eab.jpg",
    tag: {
      en: "New",
      tw: "New",
      ga: "New",
      ewe: "New",
    },
  },
  {
    id: "146",
    name: {
      en: "Traditional Jewelry Set",
      tw: "amanne nnwinne set",
      ga: "Traditional jewelry Set",
      ewe: "Traditional jewelry Set",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Home",
      ewe: "Home",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "jewelry",
      ewe: "jewelry",
    },
    price: 48.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/1200x/0b/de/9c/0bde9c7ed5dfea194d722a33161cce9d.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
];

export default PRODUCTS;
