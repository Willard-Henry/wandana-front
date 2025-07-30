const PRODUCTS = [
  // Already translated first 5 items...

  {
    id: "1",
    name: {
      en: "Ladies Official Dress",
      tw: "Mmaa ɔfese ataaadeɛ",
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
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "40",
    name: {
      en: "Ladies Official Dress",
      tw: "Mmaa ɔfese ataaadeɛ",
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
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "3",
    name: {
      en: "Ladies Winter Suit",
      tw: "Mmaa awɔw bere atadeɛ",
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
      tw: "wɔtɔn sen biara",
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
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "48",
    name: {
      en: "Men Official",
      tw: "Mmarima  atadeɛ",
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
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "49",
    name: {
      en: "Men Winter Suit",
      tw: "Mmarima awɔw atadeɛ",
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
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },

  {
    id: "50",
    name: {
      en: "Men Winter Suit",
      tw: "Mmarima Awareɛ Ataaadeɛ",
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
      tw: "Mmarima Awɔw Ataaadeɛ", // updated "Winter" to "Awɔw"
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
      tw: "Mmarima Awɔw Ataaadeɛ",
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
      ga: "ni ahɔ̃ɔ fe fɛɛ",
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
      ga: "ni ahɔ̃ɔ fe fɛɛ",
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
      ga: "ni ahɔ̃ɔ fe fɛɛ",
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
      ga: "ni ahɔ̃ɔ fe fɛɛ",
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
      ga: "ni ahɔ̃ɔ fe fɛɛ",
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
      tw: "Foforɔ",
      ga: "Ehee",
      ewe: "Yɛye",
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
      tw: "Agye din",
      ga: "He gbɛi",
      ewe: "Nyanyɛ",
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
      tw: "Agye din",
      ga: "He gbɛi",
      ewe: "Nyanyɛ",
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
      ga: "Kotokui",
      ewe: "Akplowo",
    },
    price: 59.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/68/3c/50/683c506e48c8ebce8419281bcb719268.jpg",
    tag: {
      en: "Super",
      tw: "Soronko",
      ga: "Waa",
      ewe: "Nyo ŋutɔ",
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
      ga: "Kotokui",
      ewe: "Akplowo",
    },
    price: 59.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/9f/a9/4a/9fa94a34ca949f53b7299826cfd87ab6.jpg",
    tag: {
      en: "Super",
      tw: "Soronko",
      ga: "Waa",
      ewe: "Nyo ŋutɔ",
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
      en: "Casual",
      tw: "efie",
      ga: "Atadei",
      ewe: "Awudodo",
    },
    price: 34.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/2b/41/b1/2b41b10cc50d0bad26ed713de9e01e1a.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "ni ahɔ̃ɔ fe fɛɛ",
      ewe: "nu vɔ̃ feɖeƒe",
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
      en: "Casual",
      tw: "efie",
      ga: "Atadei",
      ewe: "Awudodo",
    },
    price: 28.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/53/dc/52/53dc52dd7ea904e6553122bde6cdb5fa.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "Ehee",
      ewe: "Yɛye",
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
      en: "Bags",
      tw: "kotokuo",
      ga: "Kotokui",
      ewe: "Akplowo",
    },
    price: 41.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/7b/4c/75/7b4c75121a3aedd617420f83f55d46bd.jpg",
    tag: {
      en: "Hot",
      tw: "Agye din",
      ga: "He gbɛi",
      ewe: "Nyanyɛ",
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
      tw: "Mpaboa",
      tw: "Naneshi atadei",
      ewe: "Afɔkpawo",
    },
    price: 62.49,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/eb/15/44/eb15446e5ccdbb22834ada9579792c67.jpg",
    tag: {
      en: "Super",
      tw: "Soronko",
      ga: "Waa",
      ewe: "Nyo ŋutɔ",
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
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 24.49,
    rating: 4.6,
    image:
      "https://i.pinimg.com/1200x/d8/cd/e5/d8cde573c6b277b52397039305d3553c.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "ni ahɔ̃ɔ fe fɛɛ",
      ewe: "nu vɔ̃ feɖeƒe",
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
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 16.99,
    rating: 4.0,
    image:
      "https://i.pinimg.com/1200x/9f/68/67/9f6867f6dc933179a8b2439a110fb2a2.jpg",
    tag: {
      en: "Hot",
      tw: "Agye din",
      ga: "He gbɛi",
      ewe: "Nyanyɛ",
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
      ga: "Ŋshɔnaa atadei",
      ewe: "Ƒutawuwo",
    },
    price: 25.49,
    rating: 4.2,
    image:
      "https://i.pinimg.com/1200x/c8/4b/8b/c84b8b6889d3e7f674a795c0df04992d.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "Ehee",
      ewe: "Yɛye",
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
      tw: "Soronko",
      ga: "Waa",
      ewe: "Nyo ŋutɔ",
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
      en: "Bags",
      tw: "kotokuo",
      ga: "Kotokui",
      ewe: "Akplowo",
    },
    price: 36.49,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/f8/da/fc/f8dafc83247af9b8d5ed74c5bd1b5499.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "Ehee",
      ewe: "Yɛye",
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
      en: "Casual",
      tw: "efie",
      ga: "Atadei",
      ewe: "Awudodo",
    },
    price: 30.49,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/96/98/09/96980929de8841c90b2678fd4023ba72.jpg",
    tag: {
      en: "Hot",
      tw: "Agye din",
      ga: "He gbɛi",
      ewe: "Nyanyɛ",
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
      en: "Casual",
      tw: "efie",
      ga: "Atadei",
      ewe: "Awudodo",
    },
    price: 31.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/58/b0/96/58b096d929f432bae48ac75ae5b07c21.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "Ehee",
      ewe: "Yɛye",
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
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Footwear",
      tw: "Mpaboa",
      tw: "Naneshi atadei",
      ewe: "Afɔkpawo",
    },
    price: 27.49,
    rating: 4.4,
    image:
      "https://i.pinimg.com/1200x/af/bc/40/afbc4053607a8e340090e32a0887b2f0.jpg",
    tag: {
      en: "Super",
      tw: "Soronko",
      ga: "Waa",
      ewe: "Nyo ŋutɔ",
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
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Footwear",
      tw: "Mpaboa",
      tw: "Naneshi atadei",
      ewe: "Afɔkpawo",
    },
    price: 26.99,
    rating: 4.1,
    image:
      "https://i.pinimg.com/1200x/a6/2b/2b/a62b2bf5cc71dd7d961fd5406dbf925a.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "Ehee",
      ewe: "Yɛye",
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
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Footwear",
      tw: "Mpaboa",
      tw: "Naneshi atadei",
      ewe: "Afɔkpawo",
    },
    price: 28.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/b0/82/2a/b0822a2f734d80f00e2be12bb651b7eb.jpg",
    tag: {
      en: "Hot",
      tw: "Agye din",
      ga: "He gbɛi",
      ewe: "Nyanyɛ",
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
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Footwear",
      tw: "Mpaboa",
      tw: "Naneshi atadei",
      ewe: "Afɔkpawo",
    },
    price: 23.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/b5/fc/d2/b5fcd26bb08ffb2a9474b9ace3d491ce.jpg",
    tag: {
      en: "Super",
      tw: "Soronko",
      ga: "Waa",
      ewe: "Nyo ŋutɔ",
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
      en: "Footwear",
      tw: "Mpaboa",
      tw: "Naneshi atadei",
      ewe: "Afɔkpawo",
    },
    price: 51.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/26/31/d6/2631d69539b2b13dbad5bdabfbbb2f4e.jpg",
    tag: {
      en: "Hot",
      tw: "Agye din",
      ga: "He gbɛi",
      ewe: "Nyanyɛ",
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
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Casual",
      tw: "efie",
      ga: "Atadei",
      ewe: "Awudodo",
    },
    price: 18.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/72/c2/d6/72c2d6c9f257773de5a894cb98200925.jpg",
    tag: {
      en: "Hot",
      tw: "Agye din",
      ga: "He gbɛi",
      ewe: "Nyanyɛ",
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
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Casual",
      tw: "efie",
      ga: "Atadei",
      ewe: "Awudodo",
    },
    price: 20.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/1200x/59/89/2f/59892fa010836473215d6cfcce79dc3b.jpg",
    tag: {
      en: "Super",
      tw: "Soronko",
      ga: "Waa",
      ewe: "Nyo ŋutɔ",
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
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Casual",
      tw: "efie",
      ga: "Atadei",
      ewe: "Awudodo",
    },
    price: 20.49,
    rating: 4.1,
    image:
      "https://i.pinimg.com/1200x/0e/a5/56/0ea55639a143d26736161b511c8c4df9.jpg",
    tag: {
      en: "Hot",
      tw: "Agye din",
      ga: "He gbɛi",
      ewe: "Nyanyɛ",
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
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Beachware",
      tw: "mpoano ntoma",
      ga: "Ŋshɔnaa atadei",
      ewe: "Ƒutawuwo",
    },
    price: 24.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/05/b9/30/05b9303b9814b9aa7da749c98286b9c4.jpg",
    tag: {
      en: "Super",
      tw: "Soronko",
      ga: "Waa",
      ewe: "Nyo ŋutɔ",
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
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Beachware",
      tw: "mpoano ntoma",
      ga: "Ŋshɔnaa atadei",
      ewe: "Ƒutawuwo",
    },
    price: 27.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/a2/04/0b/a2040b6992de0b8a156cb44093b729a9.jpg",
    tag: {
      en: "Super",
      tw: "Soronko",
      ga: "Waa",
      ewe: "Nyo ŋutɔ",
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
      en: "Jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 35.49,
    rating: 4.6,
    image:
      "https://i.pinimg.com/1200x/c7/96/a5/c796a52aeac8b441a3be0ba2a3041a0a.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "ni ahɔ̃ɔ fe fɛɛ",
      ewe: "nu vɔ̃ feɖeƒe",
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
      en: "Jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 55.99,
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/d6/28/84/d628846a7f31106b314f3a30b0bb481c.jpg",
    tag: {
      en: "Super",
      tw: "Soronko",
      ga: "Waa",
      ewe: "Nyo ŋutɔ",
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
      en: "Jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 48.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/1200x/0b/de/9c/0bde9c7ed5dfea194d722a33161cce9d.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "ni ahɔ̃ɔ fe fɛɛ",
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
      en: "Casual",
      tw: "efie",
      ga: "Atadei",
      ewe: "Awudodo",
    },
    price: 32.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/ce/c8/9c/cec89cf1c0a8aac01bb206a2949475ec.jpg",
    tag: {
      en: "Hot",
      tw: "Agye din",
      ga: "He gbɛi",
      ewe: "Nyanyɛ",
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
      en: "Bags",
      tw: "kotokuo",
      ga: "Kotokui",
      ewe: "Akplowo",
    },
    price: 39.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/1200x/89/d2/14/89d2142fe738848b5a44ec5e7cb9fadd.jpg",
    tag: {
      en: "Super",
      tw: "Soronko",
      ga: "Waa",
      ewe: "Nyo ŋutɔ",
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
      en: "Footwear",
      tw: "Mpaboa",
      tw: "Naneshi atadei",
      ewe: "Afɔkpawo",
    },
    price: 59.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/16/e5/63/16e563f816f8d1cb405f2d3ab900deca.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "Ehee",
      ewe: "Yɛye",
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
      en: "Jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 22.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/1200x/f8/82/2a/f8822afab2fd7126a0907482963aa034.jpg",
    tag: {
      en: "Hot",
      tw: "Agye din",
      ga: "He gbɛi",
      ewe: "Nyanyɛ",
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
      en: "Jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 18.99,
    rating: 4.1,
    image:
      "https://i.pinimg.com/1200x/a9/76/e6/a976e6d3b0b91908ec7e54316b5062bc.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "Ehee",
      ewe: "Yɛye",
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
      en: "Jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 29.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/1200x/89/e5/c5/89e5c5648321170aa3e6db2fdfea5d76.jpg",
    tag: {
      en: "Super",
      tw: "Soronko",
      ga: "Waa",
      ewe: "Nyo ŋutɔ",
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
      en: "Beachware",
      tw: "mpoano ntoma",
      ga: "Ŋshɔnaa atadei",
      ewe: "Ƒutawuwo",
    },
    price: 27.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/1200x/2a/13/94/2a13946fd97964aa2f94e67a43e25f1a.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "ni ahɔ̃ɔ fe fɛɛ",
      ewe: "nu vɔ̃ feɖeƒe",
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
      tw: "Agye din",
      ga: "He gbɛi",
      ewe: "Nyanyɛ",
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
      en: "Footwear",
      tw: "Mpaboa",
      tw: "Naneshi atadei",
      ewe: "Afɔkpawo",
    },
    price: 49.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/f7/9f/16/f79f16cc44f29010d81a5821dc1f4e43.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "ni ahɔ̃ɔ fe fɛɛ",
      ewe: "nu vɔ̃ feɖeƒe",
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
      en: "Casual",
      tw: "efie",
      ga: "Atadei",
      ewe: "Awudodo",
    },
    price: 32.0,
    rating: 4.3,
    image:
      "https://i.pinimg.com/1200x/25/6e/0c/256e0c33413fa927e7786b7f5b240f96.jpg",
    tag: {
      en: "Super",
      tw: "Soronko",
      ga: "Waa",
      ewe: "Nyo ŋutɔ",
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
      en: "Casual",
      tw: "efie",
      ga: "Atadei",
      ewe: "Awudodo",
    },
    price: 29.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/c5/07/93/c507932349cf8a21ee54e3bbe6bb4887.jpg",
    tag: {
      en: "Hot",
      tw: "Agye din",
      ga: "He gbɛi",
      ewe: "Nyanyɛ",
    },
  },

  {
    id: "123",
    name: {
      en: "Kids Footwear Black",
      tw: "mmofra anan ntoma tuntum",
      ga: "Gbekɛbii footwear Black",
      ewe: "Ɖeviwo footwear Black",
    },
    category: {
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Footwear",
      tw: "Mpaboa",
      tw: "Naneshi atadei",
      ewe: "Afɔkpawo",
    },
    price: 25.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/cb/7c/fb/cb7cfb082a619401a4d0785f1de5200b.jpg",
    tag: {
      en: "Hot",
      tw: "Agye din",
      ga: "He gbɛi",
      ewe: "Nyanyɛ",
    },
  },

  {
    id: "125",
    name: {
      en: "Kids Sneaker White",
      tw: "mmofra sneaker fitaa",
      ga: "Gbekɛbii Sneaker White",
      ewe: "Ɖeviwo Sneaker White",
    },
    category: {
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "footwear",
      tw: "Mpaboa",
      tw: "Naneshi atadei",
      ewe: "Afɔkpawo",
    },
    price: 29.49,
    rating: 4.5,
    image:
      "https://i.pinimg.com/1200x/78/51/f8/7851f89b5381a0a4a6fde13b7d99f3cf.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "ni ahɔ̃ɔ fe fɛɛ",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },

  {
    id: "127",
    name: {
      en: "Kids Low-cut Shoe",
      tw: "mmofra ase anan ntoma",
      ga: "Gbekɛbii Low-cut Shoe",
      ewe: "Ɖeviwo Low-cut Shoe",
    },
    category: {
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "footwear",
      tw: "Mpaboa",
      tw: "Naneshi atadei",
      ewe: "Afɔkpawo",
    },
    price: 22.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/b4/2a/a4/b42aa4a45474dafdc296fca28e25602b.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "Ehee",
      ewe: "Yɛye",
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
      tw: "Mpaboa",
      tw: "Naneshi atadei",
      ewe: "Afɔkpawo",
    },
    price: 49.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/55/14/9c/55149caa2206511f63bb04565371e6d4.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "ni ahɔ̃ɔ fe fɛɛ",
      ewe: "nu vɔ̃ feɖeƒe",
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
      tw: "Mpaboa",
      tw: "Naneshi atadei",
      ewe: "Afɔkpawo",
    },
    price: 54.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/1200x/37/e8/30/37e8306d0ce49cddac14f85c3b1dc57a.jpg",
    tag: {
      en: "Super",
      tw: "Soronko",
      ga: "Waa",
      ewe: "Nyo ŋutɔ",
    },
  },

  {
    id: "133",
    name: {
      en: "Kids Shirt Casual Small",
      tw: "mmofra ataaadeɛ efie ketewa",
      ga: "Gbekɛbii atale efie Small",
      ewe: "Ɖeviwo awu efie Small",
    },
    category: {
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Casual",
      tw: "efie",
      ga: "Atadei",
      ewe: "Awudodo",
    },
    price: 19.49,
    rating: 4.2,
    image:
      "https://i.pinimg.com/1200x/ff/98/04/ff98047a4166a8448de93c45988a13cc.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "Ehee",
      ewe: "Yɛye",
    },
  },

  {
    id: "135",
    name: {
      en: "Kids Casual Top Small",
      tw: "mmofra efie soro ketewa",
      ga: "Gbekɛbii efie Top Small",
      ewe: "Ɖeviwo efie Top Small",
    },
    category: {
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Casual",
      tw: "efie",
      ga: "Atadei",
      ewe: "Awudodo",
    },
    price: 21.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/1200x/13/9d/c5/139dc59b60f9db88ba80e1868ea59379.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "ni ahɔ̃ɔ fe fɛɛ",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },

  {
    id: "137",
    name: {
      en: "Kids Beachwear Yellow",
      tw: "mmofra mpoano ntoma kɔkɔɔ",
      ga: "Gbekɛbii Beachwear Yellow",
      ewe: "Ɖeviwo Beachwear Yellow",
    },
    category: {
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "beachware",
      tw: "mpoano ntoma",
      ga: "Ŋshɔnaa atadei",
      ewe: "Ƒutawuwo",
    },
    price: 22.49,
    rating: 4.3,
    image:
      "https://i.pinimg.com/1200x/9e/0f/45/9e0f45a8ba132f68c9a431907b0545b7.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "Ehee",
      ewe: "Yɛye",
    },
  },

  {
    id: "139",
    name: {
      en: "Kids Beach Shorts",
      tw: "mmofra mpoano shorts",
      ga: "Gbekɛbii Beach Shorts",
      ewe: "Ɖeviwo Beach Shorts",
    },
    category: {
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "beachware",
      tw: "mpoano ntoma",
      ga: "Ŋshɔnaa atadei",
      ewe: "Ƒutawuwo",
    },
    price: 26.49,
    rating: 4.4,
    image:
      "https://i.pinimg.com/1200x/0d/20/a6/0d20a6d17d0b6f21ce439dcbde751548.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "ni ahɔ̃ɔ fe fɛɛ",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },

  {
    id: "141",
    name: {
      en: "Kids Casual Tee",
      tw: "mmofra efie tee",
      ga: "Gbekɛbii efie Tee",
      ewe: "Ɖeviwo efie Tee",
    },
    category: {
      en: "Kids",
      tw: "mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Casual",
      tw: "efie",
      ga: "Atadei",
      ewe: "Awudodo",
    },
    price: 19.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/05/b9/30/05b9303b9814b9aa7da749c98286b9c4.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "Ehee",
      ewe: "Yɛye",
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
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 42.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/49/6d/57/496d57c96967a672a6228fadd861b29f.jpg",
    tag: {
      en: "Hot",
      tw: "Agye din",
      ga: "He gbɛi",
      ewe: "Nyanyɛ",
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
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 33.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/25/b3/64/25b364aec0761d1597bb10a089767eab.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "Ehee",
      ewe: "Yɛye",
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
      ewe: "Aƒeme",
      ga: "Shia",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 48.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/1200x/0b/de/9c/0bde9c7ed5dfea194d722a33161cce9d.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "ni ahɔ̃ɔ fe fɛɛ",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },

  {
    id: "300",
    name: {
      en: "Men Casual Wear",
      tw: "Mmarima ntoma ahyɛda",
      ga: "Hii kpala atadei",
      ewe: "Ŋutsu ƒe awudodo bɔbɔe",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 31.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/58/b0/96/58b096d929f432bae48ac75ae5b07c21.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "301",
    name: {
      en: "Men Classic Shirt",
      tw: "Mmarima pɔnkɔ kyakya",
      ga: "Hii Blema Yɔɔ",
      ewe: "Ŋutsuwo ƒe Gomekpa T-shirt",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 29.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/c5/07/93/c507932349cf8a21ee54e3bbe6bb4887.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "302",
    name: {
      en: "Kids Sneakers Blue",
      tw: "Mmofra mpaboa bruu",
      ga: "Gbekɛ Naneshi bluu",
      ewe: "Ɖeviwo ƒe afɔkpa blɔe",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 27.49,
    rating: 4.4,
    image:
      "https://i.pinimg.com/1200x/af/bc/40/afbc4053607a8e340090e32a0887b2f0.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "303",
    name: {
      en: "Kids Footwear Black",
      tw: "Mmofra mpaboa tuntum",
      ga: "Gbekɛ Naneshi amii",
      ewe: "Ɖeviwo ƒe afɔkpa yibɔ",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 25.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/cb/7c/fb/cb7cfb082a619401a4d0785f1de5200b.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "304",
    name: {
      en: "Kids Casual Shoes",
      tw: "Mmofra mpaboa ahyɛda",
      ga: "Gbekɛ Naneshi kpala",
      ewe: "Ɖeviwo ƒe afɔkpa bɔbɔe",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 26.99,
    rating: 4.1,
    image:
      "https://i.pinimg.com/1200x/a6/2b/2b/a62b2bf5cc71dd7d961fd5406dbf925a.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "205",
    name: {
      en: "Kids Sneaker White",
      tw: "Mmofra mpaboa fitaa",
      ga: "Gbekɛ Naneshi fufuu",
      ewe: "Ɖeviwo ƒe afɔkpa ɣie",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
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
    id: "206",
    name: {
      en: "Kids Bright Sneakers",
      tw: "Mmofra mpaboa ahyerɛn",
      ga: "Gbekɛ Naneshi klakla",
      ewe: "Ɖeviwo ƒe afɔkpa dzena",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 28.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/b0/82/2a/b0822a2f734d80f00e2be12bb651b7eb.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "207",
    name: {
      en: "Kids Low-cut Shoe",
      tw: "Mmofra mpaboa tiawa",
      ga: "Gbekɛ Naneshi kpiti",
      ewe: "Ɖeviwo ƒe afɔkpa kpui",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 22.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/b4/2a/a4/b42aa4a45474dafdc296fca28e25602b.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "208",
    name: {
      en: "Kids Slip-On Footwear",
      tw: "Mmofra mpaboa ahyɛda",
      ga: "Gbekɛ Naneshi ni gbɛ",
      ewe: "Ɖeviwo ƒe afɔkpa si doa goe",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 23.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/b5/fc/d2/b5fcd26bb08ffb2a9474b9ace3d491ce.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "209",
    name: {
      en: "Men Black Sneakers",
      tw: "Mmarima mpaboa tuntum",
      ga: "Hii Naneshi amii",
      ewe: "Ŋutsuwo ƒe afɔkpa yibɔ",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
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
    id: "210",
    name: {
      en: "Men Sport Sneakers",
      tw: "Mmarima agopare mpaboa",
      ga: "Hii Naneshi feo",
      ewe: "Ŋutsuwo ƒe afɔkpa kpokploe",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 51.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/26/31/d6/2631d69539b2b13dbad5bdabfbbb2f4e.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "211",
    name: {
      en: "Men White Trainers",
      tw: "Mmarima ntotoho fitaa",
      ga: "Hii Naneshi fufuu",
      ewe: "Ŋutsuwo ƒe afɔkpa ɣie",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 54.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/1200x/37/e8/30/37e8306d0ce49cddac14f85c3b1dc57a.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "212",
    name: {
      en: "Kids Tee Casual Small",
      tw: "Mmofra T-shirt tiawa",
      ga: "Gbekɛ T-shirt kpiti",
      ewe: "Ɖeviwo ƒe T-shirt kpui",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 18.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/72/c2/d6/72c2d6c9f257773de5a894cb98200925.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "213",
    name: {
      en: "Kids Shirt Casual Small",
      tw: "Mmofra ntoma ahyɛda",
      ga: "Gbekɛ Shirt kpiti",
      ewe: "Ɖeviwo ƒe T-shirt kpui",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 19.49,
    rating: 4.2,
    image:
      "https://i.pinimg.com/1200x/ff/98/04/ff98047a4166a8448de93c45988a13cc.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "214",
    name: {
      en: "Kids Polo Casual Small",
      tw: "Mmofra Polo ntoma ahyɛda",
      ga: "Gbekɛ Polo kpiti",
      ewe: "Ɖeviwo ƒe Polo kpui",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 20.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/1200x/59/89/2f/59892fa010836473215d6cfcce79dc3b.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "215",
    name: {
      en: "Kids Casual Top Small",
      tw: "Mmofra ntoma ahyɛda tiawa",
      ga: "Gbekɛ Top kpiti",
      ewe: "Ɖeviwo ƒe awudodo kpui",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
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
    id: "216",
    name: {
      en: "Kids Bright Tee Small",
      tw: "Mmofra T-shirt tiawa",
      ga: "Gbekɛ T-shirt kpiti",
      ewe: "Ɖeviwo ƒe T-shirt kpui",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 20.49,
    rating: 4.1,
    image:
      "https://i.pinimg.com/1200x/0e/a5/56/0ea55639a143d26736161b511c8c4df9.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "217",
    name: {
      en: "Kids Beachwear Yellow",
      tw: "Mmofra mpoano ntoma kɔkɔɔ",
      ga: "Gbekɛ Ŋshɔnaa yɛlɔ",
      ewe: "Ɖeviwo ƒe Ƒutawuwo akɔŋu",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "beachware",
      tw: "mpoano ntoma",
      ga: "Ŋshɔnaa",
      ewe: "Ƒutawuwo",
    },
    price: 22.49,
    rating: 4.3,
    image:
      "https://i.pinimg.com/1200x/9e/0f/45/9e0f45a8ba132f68c9a431907b0545b7.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "218",
    name: {
      en: "Kids Swimwear Blue",
      tw: "Mmofra ntoma a wɔde kɔ nsukɔ",
      ga: "Gbekɛ Ŋshɔnaa bluu",
      ewe: "Ɖeviwo ƒe nuŋlɔŋlɔ blɔe",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "beachware",
      tw: "mpoano ntoma",
      ga: "Ŋshɔnaa",
      ewe: "Ƒutawuwo",
    },
    price: 24.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/05/b9/30/05b9303b9814b9aa7da749c98286b9c4.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "219",
    name: {
      en: "Kids Beach Shorts",
      tw: "Mmofra mpoano ntoma tiawa",
      ga: "Gbekɛ Ŋshɔnaa shɔɔts",
      ewe: "Ɖeviwo ƒe Ƒutawuwo kpui",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "beachware",
      tw: "mpoano ntoma",
      ga: "Ŋshɔnaa",
      ewe: "Ƒutawuwo",
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
    id: "220",
    name: {
      en: "Kids Beachwear Set",
      tw: "Mmofra mpoano ntoma ne mpaboa",
      ga: "Gbekɛ Ŋshɔnaa set",
      ewe: "Ɖeviwo ƒe Ƒutawuwo kple eƒe nuwo",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "beachware",
      tw: "mpoano ntoma",
      ga: "Ŋshɔnaa",
      ewe: "Ƒutawuwo",
    },
    price: 27.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/a2/04/0b/a2040b6992de0b8a156cb44093b729a9.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "221",
    name: {
      en: "Kids Casual Tee",
      tw: "Mmofra T-shirt ahyɛda",
      ga: "Gbekɛ T-shirt kpala",
      ewe: "Ɖeviwo ƒe T-shirt bɔbɔe",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 19.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/05/b9/30/05b9303b9814b9aa7da749c98286b9c4.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "222",
    name: {
      en: "Silver Pendant Jewelry",
      tw: "Dwete nnwinne",
      ga: "Sika Jwinei",
      ewe: "Klitsanu ɖikpe",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
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
    id: "223",
    name: {
      en: "Gold Chain Jewelry",
      tw: "Sika kɔnmu",
      ga: "Sika Jwinei",
      ewe: "Sika Atsyɔɖonu",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 42.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/49/6d/57/496d57c96967a672a6228fadd861b29f.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "224",
    name: {
      en: "Diamond Ring",
      tw: "Diamɔnd dwa",
      ga: "Diamɔnd Jwinei",
      ewe: "Diamɔnd asrãnu",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 55.99,
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/d6/28/84/d628846a7f31106b314f3a30b0bb481c.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "225",
    name: {
      en: "Beaded Necklace",
      tw: "Akyekye kɔnmu",
      ga: "Bɔɔdi Jwinei",
      ewe: "Nuɖeɖe kɔnu",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 33.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/25/b3/64/25b364aec0761d1597bb10a089767eab.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "226",
    name: {
      en: "Traditional Jewelry Set",
      tw: "Amammerɛ nnwinne",
      ga: "Blema Jwinei",
      ewe: "Blema Atsyɔɖonu",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
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
  {
    id: "227",
    name: {
      en: "Colorful Bracelets",
      tw: "Akanfoɔ nnwinne",
      ga: "Blɔɔtset kpala",
      ewe: "Nuɖeɖe nyɛnyɛ",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 27.49,
    rating: 4.3,
    image:
      "https://i.pinimg.com/1200x/62/8d/89/628d89c3826cc3f093891522015fb994.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "228",
    name: {
      en: "Elegant Jewelry Pack",
      tw: "Nnwinnedeɛ foforɔ",
      ga: "Jwinei fɛɛ",
      ewe: "Atsyɔɖonu nyuitɔ",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 50.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/1200x/af/09/46/af0946bd08d1edc7beaff384cf0f7284.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "229",
    name: {
      en: "Jewelry Gift Box",
      tw: "Nnwinnedeɛ adaka",
      ga: "Jwinei Akotoku",
      ewe: "Atsyɔɖonu nunana",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 36.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/5a/86/4b/5a864b793245a7213b9435539a39a57e.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "230",
    name: {
      en: "Luxury Jewelry Set",
      tw: "Ahoɔfɛ nnwinne",
      ga: "Jwinei fɛɛ",
      ewe: "Atsyɔɖonu kple gomekpa",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 58.99,
    rating: 4.9,
    image:
      "https://i.pinimg.com/1200x/ef/43/6c/ef436c3b734870c68ab56793f2702cea.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "231",
    name: {
      en: "Jewelry Collection",
      tw: "Nnwinnedeɛ nhyiamu",
      ga: "Jwinei kpali",
      ewe: "Atsyɔɖonu ƒe nuwo",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 52.49,
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/30/8c/e6/308ce68f4c73e1d111b7125875c17a3e.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "232",
    name: {
      en: "Women Heels Red",
      tw: "Mmaa mpaboa kɔkɔɔ",
      ga: "Yei Naneshi krakra",
      ewe: "Nyɔnuwo ƒe afɔkpa dzĩ",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 44.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/1200x/de/61/e3/de61e33fdd7a6e7f2c7bdef1f8ba9f20.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "233",
    name: {
      en: "Women Heels Nude",
      tw: "Mmaa mpaboa ahyɛda",
      ga: "Yei Naneshi gblagbla",
      ewe: "Nyɔnuwo ƒe afɔkpa nude",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 42.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/b1/45/da/b145da40e09ff3715c3db1f9f9907bef.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "234",
    name: {
      en: "Women Heels White",
      tw: "Mmaa mpaboa fitaa",
      ga: "Yei Naneshi fufuu",
      ewe: "Nyɔnuwo ƒe afɔkpa ɣie",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 45.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/fa/66/b1/fa66b1b35f5e09b07197e15abc01eee2.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "235",
    name: {
      en: "Women Slippers Pink",
      tw: "Mmaa mpaboa fitaa",
      ga: "Yei Slippers pink",
      ewe: "Nyɔnuwo ƒe afɔkpa dzĩ",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 23.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/1200x/15/47/03/1547039291462bebfdd36b575c1c4142.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "236",
    name: {
      en: "Women Slippers Red",
      tw: "Mmaa mpaboa kɔkɔɔ",
      ga: "Yei Slippers krakra",
      ewe: "Nyɔnuwo ƒe afɔkpa dzĩ",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 24.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/1200x/b0/09/73/b009736ad3332c4f89de5b66cec40d7b.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "237",
    name: {
      en: "Women Formal Suit",
      tw: "Mmaa ɔfese ntoma",
      ga: "Yei ɔfis atadei",
      ewe: "Nyɔnuwo ƒe awudodo gomekpa",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "official",
      tw: "ɔfese",
      ga: "ɔfis",
      ewe: "ɔfis",
    },
    price: 64.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/1200x/ad/9c/2e/ad9c2eb7984bf7ef54d4c48cda1ac81c.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "238",
    name: {
      en: "Women Office Wear",
      tw: "Mmaa ɔfese ntoma",
      ga: "Yei ɔfis atadei",
      ewe: "Nyɔnuwo ƒe awudodo gomekpa",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "official",
      tw: "ɔfese",
      ga: "ɔfis",
      ewe: "ɔfis",
    },
    price: 62.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/60/6c/66/606c666b5d25076f545ad8c8030ce4ed.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "239",
    name: {
      en: "Mortar and Pestle Set",
      tw: "Wɔmma ne ɛmo",
      ga: "Amanɔ kple nuŋlɔŋlɔ",
      ewe: "Kpe kple eƒe nuwo",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "kitchenware",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 29.99,
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/94/c9/9b/94c99bad08ec66eae1d17aae13d9f83e.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "240",
    name: {
      en: "Wooden Cutting Board",
      tw: "Dua a wɔde twa aduane",
      ga: "Akpasa",
      ewe: "Akaɖa",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "kitchenware",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 18.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/a0/51/fb/a051fbd3e4a36cf46c84a01b8c5421a0.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "241",
    name: {
      en: "Stainless Steel Pan",
      tw: "Asafo ntoma",
      ga: "Atadei",
      ewe: "Gomekpa",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "kitchenware",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 32.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/21/fd/6b/21fd6b86c0102526b73d97e2fa87c1cc.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "242",
    name: {
      en: "Non-Stick Frying Pan",
      tw: "Asafo ntoma",
      ga: "Atadei",
      ewe: "Gomekpa",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "kitchenware",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 28.49,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/a5/4d/95/a54d95470bfece6782bb0485c53a3a9e.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "243",
    name: {
      en: "Ceramic Plate Set",
      tw: "Aduane kyɛw",
      ga: "Plat",
      ewe: "Nuɖeɖe",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "kitchenware",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 34.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/1200x/d0/36/92/d03692f517a3bdbb61024e9d561a3607.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "244",
    name: {
      en: "Glass Cups Pack",
      tw: "Nsa kuruwa",
      ga: "Kɔpu",
      ewe: "Kplekpala",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "kitchenware",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 26.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/49/f4/a3/49f4a37aa3a60a9164400c865c8aa8f5.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "245",
    name: {
      en: "Cutlery Set 24pcs",
      tw: "Aduane a wɔde di",
      ga: "Kɔtele",
      ewe: "Nuɖuɖu",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "kitchenware",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 29.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/34/c8/ce/34c8cece7ad14394db73199d1cbe5d69.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "246",
    name: {
      en: "Kitchen Knife Set",
      tw: "Kyɛn",
      ga: "Kɔmpaa",
      ewe: "Akɔnta",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "kitchenware",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 39.99,
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/4a/54/2f/4a542fb320ae9cf00a4bd0adf6cc7a65.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "248",
    name: {
      en: "Kids Pajamas Blue",
      tw: "Mmofra dada",
      ga: "Gbekɛ dada bluu",
      ewe: "Ɖeviwo ƒe dada blɔe",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "nightwear",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 22.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/32/e5/2a/32e52ab25f1a2ddf3578f4a09b32b7a0.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "249",
    name: {
      en: "Kids Pajamas Pink",
      tw: "Mmofra dada pink",
      ga: "Gbekɛ dada pink",
      ewe: "Ɖeviwo ƒe dada dzĩ",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "nightwear",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 23.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/7a/cc/13/7acc13e25ed6c2be3035ac5a0f5425a1.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "250",
    name: {
      en: "Kids Pajamas Green",
      tw: "Mmofra dada ahaban",
      ga: "Gbekɛ dada greeŋ",
      ewe: "Ɖeviwo ƒe dada gbogbo",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "nightwear",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 22.49,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/0f/c6/b3/0fc6b31a8f1708de9a24d634a9c2e73e.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },

  {
    id: "251",
    name: {
      en: "Women Classic Denim",
      tw: "Mmaa Denim tete",
      ga: "Yei Denim blema",
      ewe: "Nyɔnuwo ƒe Denim xoxotɔ",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 39.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/5d/d8/f0/5dd8f0ca5f03f621a3ba979d89c03c4f.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "252",
    name: {
      en: "Women T-Shirt White",
      tw: "Mmaa T-shirt fitaa",
      ga: "Yei T-shirt fufuu",
      ewe: "Nyɔnuwo ƒe T-shirt ɣie",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 19.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/ed/98/32/ed9832d86a099f78d41fc77629f3fe51.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "253",
    name: {
      en: "Women T-Shirt Black",
      tw: "Mmaa T-shirt tuntum",
      ga: "Yei T-shirt amii",
      ewe: "Nyɔnuwo ƒe T-shirt yibɔ",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 19.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/dc/d4/5d/dcd45d3809ffbb29d23e395e8be3fa3a.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "254",
    name: {
      en: "Women T-Shirt Grey",
      tw: "Mmaa T-shirt fitaa",
      ga: "Yei T-shirt gree",
      ewe: "Nyɔnuwo ƒe T-shirt blɔe",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 19.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/16/c9/66/16c9666af1a9ea0d901a0321d1a0059d.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "255",
    name: {
      en: "Women Denim Shorts",
      tw: "Mmaa Denim T-shirt tiawa",
      ga: "Yei Denim shɔɔts",
      ewe: "Nyɔnuwo ƒe Denim kpui",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 24.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/25/d1/eb/25d1ebf2f7f2982597b28972f3509a0a.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "256",
    name: {
      en: "Women Crop Hoodie",
      tw: "Mmaa T-shirt tiawa",
      ga: "Yei Crop Hoodie",
      ewe: "Nyɔnuwo ƒe Hoodie kpui",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 29.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/a1/5a/37/a15a379b52b6e37d585a0b8cf4f7ca42.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "257",
    name: {
      en: "Women Casual Set",
      tw: "Mmaa ntoma ahyɛda",
      ga: "Yei kpala atadei",
      ewe: "Nyɔnuwo ƒe awudodo bɔbɔe",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 36.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/3f/c3/e2/3fc3e2921ac183eaa6ae8b675498c59a.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "258",
    name: {
      en: "Kids Raincoat Blue",
      tw: "Mmofra osutɔtɔ ntoma bruu",
      ga: "Gbekɛ Raincoat bluu",
      ewe: "Ɖeviwo ƒe tsiwui blɔe",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "outerwear",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 27.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/fc/3f/bd/fc3fbd1be01c4ef82bde0f101aad69b3.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "259",
    name: {
      en: "Kids Raincoat Yellow",
      tw: "Mmofra osutɔtɔ ntoma kɔkɔɔ",
      ga: "Gbekɛ Raincoat yɛlɔ",
      ewe: "Ɖeviwo ƒe tsiwui akɔŋu",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "outerwear",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 27.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/8c/3f/f4/8c3ff4643680a5aaff15631346b536ac.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "260",
    name: {
      en: "Air Fryer Pro",
      tw: "Mframa ɛhyew nsaw",
      ga: "Air Fryer Pro",
      ewe: "Air Fryer Pro",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "kitchenware",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 64.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/b9/3a/48/b93a48094a955751f00087b04ea8d80b.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "261",
    name: {
      en: "Electric Rice Cooker",
      tw: "Ɛhyew nkuku",
      ga: "Ga kple nuɖuɖu",
      ewe: "Anyikpa nuɖaŋu",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "kitchenware",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 49.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/d2/97/54/d297545eda3e0c8687a5f03b855e67e3.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "262",
    name: {
      en: "Multi-Speed Blender",
      tw: "Nneɛma a wɔde mia",
      ga: "Blender",
      ewe: "Blender",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "kitchenware",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 39.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/83/06/b5/8306b59a6f83b8899017807a98981d53.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "263",
    name: {
      en: "Electric Kettle",
      tw: "Ɛhyew nsuo",
      ga: "Ga nsu",
      ewe: "Anyikpa teŋgu",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "kitchenware",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 29.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/34/d2/24/34d224afc706b0e342f94ccd397cec4b.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "264",
    name: {
      en: "Washing Machine Compact",
      tw: "Agya awuru",
      ga: "Atadei mayiŋ",
      ewe: "Awudodo mɔ̃",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "kitchenware",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 139.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/f0/1a/f1/f01af17130501f0c39647dd1ee976d98.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "265",
    name: {
      en: "Room Decor Frames",
      tw: "Efie adehye",
      ga: "Shia Dekɔr Freim",
      ewe: "Aƒeme ƒe nuɖeɖe",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "decor",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 24.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/02/94/57/029457e2de5c64a68a07598eea4df3d9.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "266",
    name: {
      en: "Decor Chair Set",
      tw: "Efie akonwa",
      ga: "Shia Akonwa",
      ewe: "Aƒeme akonɔnu",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "decor",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 74.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/1200x/ae/65/08/ae65085c68f8c7c6550b18e946c99614.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "267",
    name: {
      en: "Men Beachwear Shorts",
      tw: "Mmarima mpoano ntoma tiawa",
      ga: "Hii Ŋshɔnaa shɔɔts",
      ewe: "Ŋutsuwo ƒe Ƒutawuwo kpui",
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
      ga: "Ŋshɔnaa",
      ewe: "Ƒutawuwo",
    },
    price: 25.49,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/c8/4b/8b/c84b8b6889d3e7f674a795c0df04992d.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "268",
    name: {
      en: "Men Footwear High Top",
      tw: "Mmarima mpaboa tenten",
      ga: "Hii Naneshi kple to",
      ewe: "Ŋutsuwo ƒe afɔkpa kpakpa",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 52.99,
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/eb/15/44/eb15446e5ccdbb22834ada9579792c67.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "269",
    name: {
      en: "Kids Casual Hoodie",
      tw: "Mmofra Hoodie ahyɛda",
      ga: "Gbekɛ Hoodie kpala",
      ewe: "Ɖeviwo ƒe Hoodie bɔbɔe",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 21.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/1200x/9e/0f/45/9e0f45a8ba132f68c9a431907b0545b7.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "270",
    name: {
      en: "Kids Flip Flops",
      tw: "Mmofra mpaboa",
      ga: "Gbekɛ Flip Flops",
      ewe: "Ɖeviwo ƒe afɔkpa",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 16.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/b0/82/2a/b0822a2f734d80f00e2be12bb651b7eb.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "271",
    name: {
      en: "Women Slippers Grey",
      tw: "Mmaa mpaboa fitaa",
      ga: "Yei Slippers gree",
      ewe: "Nyɔnuwo ƒe afɔkpa blɔe",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 22.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/1200x/b0/09/73/b009736ad3332c4f89de5b66cec40d7b.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "272",
    name: {
      en: "Men Formal Pants",
      tw: "Mmarima ntoma akyɛw",
      ga: "Hii kpala atadei",
      ewe: "Ŋutsuwo ƒe awudodo gomekpa",
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
    price: 34.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/f1/e4/4a/f1e44a8ee618e7739ebd73a3f4c11cbe.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "273",
    name: {
      en: "Men Formal Suit Black",
      tw: "Mmarima ɔfese ntoma tuntum",
      ga: "Hii ɔfis atadei amii",
      ewe: "Ŋutsuwo ƒe awudodo gomekpa yibɔ",
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
    price: 72.49,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/fb/5c/d4/fb5cd482a95a0314af5b54b69f559e3d.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "274",
    name: {
      en: "Women Casual Sandals",
      tw: "Mmaa mpaboa ahyɛda",
      ga: "Yei Naneshi kpala",
      ewe: "Nyɔnuwo ƒe afɔkpa bɔbɔe",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 28.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/fa/66/b1/fa66b1b35f5e09b07197e15abc01eee2.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "275",
    name: {
      en: "Kids Tee Orange",
      tw: "Mmofra T-shirt akokɔsradeɛ",
      ga: "Gbekɛ T-shirt akokɔsradeɛ",
      ewe: "Ɖeviwo ƒe T-shirt orange",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 19.49,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/72/c2/d6/72c2d6c9f257773de5a894cb98200925.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "276",
    name: {
      en: "Kids Polo Blue",
      tw: "Mmofra Polo bruu",
      ga: "Gbekɛ Polo bluu",
      ewe: "Ɖeviwo ƒe Polo blɔe",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "Casual",
      tw: "ntoma ahyɛda",
      ga: "kpala",
      ewe: "awudodo bɔbɔe",
    },
    price: 20.99,
    rating: 4.4,
    image:
      "https://i.pinimg.com/1200x/ff/98/04/ff98047a4166a8448de93c45988a13cc.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "277",
    name: {
      en: "Women Office Wear Navy",
      tw: "Mmaa ɔfese ntoma bruu",
      ga: "Yei ɔfis atadei navy",
      ewe: "Nyɔnuwo ƒe awudodo gomekpa blɔe",
    },
    category: {
      en: "Women",
      tw: "Mmaa",
      ga: "Yie",
      ewe: "nyɔnuwo",
    },
    subcategory: {
      en: "official",
      tw: "ɔfese",
      ga: "ɔfis",
      ewe: "ɔfis",
    },
    price: 59.99,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/60/6c/66/606c666b5d25076f545ad8c8030ce4ed.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "278",
    name: {
      en: "Kids Beach Shorts Aqua",
      tw: "Mmofra mpoano ntoma aqua",
      ga: "Gbekɛ Ŋshɔnaa aqua",
      ewe: "Ɖeviwo ƒe Ƒutawuwo aqua",
    },
    category: {
      en: "Kids",
      tw: "Mmofra",
      ga: "Gbekɛ",
      ewe: "Ɖevi",
    },
    subcategory: {
      en: "beachware",
      tw: "mpoano ntoma",
      ga: "Ŋshɔnaa",
      ewe: "Ƒutawuwo",
    },
    price: 22.49,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/05/b9/30/05b9303b9814b9aa7da749c98286b9c4.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "279",
    name: {
      en: "Room Decor Lounge Chair",
      tw: "Efie akonwa",
      ga: "Shia Dekɔr Akonwa",
      ewe: "Aƒeme akonɔnu",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "decor",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 89.99,
    rating: 4.8,
    image:
      "https://i.pinimg.com/1200x/ae/65/08/ae65085c68f8c7c6550b18e946c99614.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "280",
    name: {
      en: "Men Footwear Modern",
      tw: "Mmarima mpaboa foforɔ",
      ga: "Hii Naneshi he",
      ewe: "Ŋutsuwo ƒe afɔkpa yeye",
    },
    category: {
      en: "Men",
      tw: "Mmarima",
      ga: "Hii",
      ewe: "Ŋutsu",
    },
    subcategory: {
      en: "footwear",
      tw: "mpaboa",
      ga: "Naneshi",
      ewe: "Afɔkpawo",
    },
    price: 46.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/26/31/d6/2631d69539b2b13dbad5bdabfbbb2f4e.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "281",
    name: {
      en: "Ceramic Cup Single",
      tw: "Ceramic kuruwa",
      ga: "Ceramic Kɔpu",
      ewe: "Ceramic kplekpala",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "kitchenware",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 9.99,
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/a5/46/ba/a546ba46d9b75784dd7f028cf43f44b6.jpg",
    tag: {
      en: "Bestseller",
      tw: "wɔtɔn sen biara",
      ga: "Bestseller",
      ewe: "nu vɔ̃ feɖeƒe",
    },
  },
  {
    id: "282",
    name: {
      en: "Mini Kettle Chrome",
      tw: "Nsuo anaa",
      ga: "Kettle kpiti",
      ewe: "Teŋgu kpui",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "kitchenware",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 24.99,
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/34/d2/24/34d224afc706b0e342f94ccd397cec4b.jpg",
    tag: {
      en: "Hot",
      tw: "Hye",
      ga: "Mi",
      ewe: "Dzo",
    },
  },
  {
    id: "283",
    name: {
      en: "Decor Frame Wall Set",
      tw: "Efie adehye",
      ga: "Shia Dekɔr Freim",
      ewe: "Aƒeme ƒe nuɖeɖe",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "decor",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 19.99,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/02/94/57/029457e2de5c64a68a07598eea4df3d9.jpg",
    tag: {
      en: "New",
      tw: "Foforɔ",
      ga: "He",
      ewe: "Yeye",
    },
  },
  {
    id: "284",
    name: {
      en: "Decor Chair Lounge Set",
      tw: "Efie akonwa",
      ga: "Shia Dekɔr Akonwa",
      ewe: "Aƒeme akonɔnu",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "decor",
      tw: "efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    price: 84.99,
    rating: 4.8,
    image:
      "https://i.pinimg.com/1200x/ae/65/08/ae65085c68f8c7c6550b18e946c99614.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
  {
    id: "404",
    name: {
      en: "Silver Watch",
      tw: "Dwete dɔn",
      ga: "Sika Wɔts",
      ewe: "Klitsanu gaŋlɔmɔ̃",
    },
    category: {
      en: "Home",
      tw: "Efie",
      ga: "Shia",
      ewe: "Aƒeme",
    },
    subcategory: {
      en: "jewelry",
      tw: "nnwinne",
      ga: "Jwinei",
      ewe: "Atsyɔɖonu",
    },
    price: 1.99,
    rating: 4.8,
    image:
      "https://i.pinimg.com/1200x/ae/65/08/ae65085c68f8c7c6550b18e946c99614.jpg",
    tag: {
      en: "Super",
      tw: "Kɛseɛ",
      ga: "Kpeteŋkpele",
      ewe: "Tsitsitɔ",
    },
  },
];

export default PRODUCTS;
