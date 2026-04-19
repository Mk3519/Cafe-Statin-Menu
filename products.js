// Cafe Station Menu - All Products Data
// Easy to edit, manage, add, and delete products from this file only

const menuData = [
  // ========== 1. EXTRAS (الإضافات) ==========
  {
    id: "extras",
    nameEn: "Extras",
    nameAr: "الإضافات",
    products: [
      { nameEn: "Extra Espresso", nameAr: "إسبريسو إضافي", price: 35 },
      { nameEn: "Extra Nutella", nameAr: "نوتيلا إضافي", price: 30 },
      { nameEn: "Extra Vanilla", nameAr: "إضافي فانيليا", price: 25 },
      { nameEn: "Extra Caramel", nameAr: "إضافي كراميل", price: 25 },
      { nameEn: "Extra Hazelnuts", nameAr: "اضافي بندق", price: 25 },
      { nameEn: "Extra Chocolate Sauce", nameAr: "إضافي صوص الشوكولاتة", price: 20 },
      { nameEn: "Extra Milk", nameAr: "إضافي حليب", price: 15 },
      { nameEn: "Extra Ice Cream", nameAr: "إضافي آيس كريم", price: 30 },
      { nameEn: "Extra Whipped Cream", nameAr: "إضافي كريمة مخفوقة", price: 35 }
    ]
  },

  // ========== 2. HOT DRINKS (المشروبات الساخنة) ==========
  {
    id: "hot-drinks",
    nameEn: "Hot Drinks",
    nameAr: "المشروبات الساخنه",
    products: [
      { nameEn: "Tea", nameAr: "شاي", price: 35 },
      { nameEn: "Green Tea", nameAr: "شاي أخضر", price: 40 },
      { nameEn: "Flavored Tea", nameAr: "شاي بنكهات", price: 55 },
      { nameEn: "Milk Tea", nameAr: "شاي باللبن", price: 55 },
      { nameEn: "Herbes", nameAr: "أعشاب", price: 35 },
      { nameEn: "Hot Apple Cider", nameAr: "هوت أبل سيدر", price: 85 },
      { nameEn: "Hot Chocolate Classic M", nameAr: "هوت شوكليت كلاسيك صغير", price: 80 },
      { nameEn: "Hot Chocolate Classic L", nameAr: "هوت شوكليت كلاسيك كبير", price: 95 },
      { nameEn: "Mint", nameAr: "نعناع", price: 35 },
      { nameEn: "Anis", nameAr: "ينسون", price: 35 }
    ]
  },

  // ========== 3. HOT COFFEE (القهوة الساخنة) ==========
  {
    id: "hot-coffee",
    nameEn: "Hot Coffee",
    nameAr: "القهوة الساخنة",
    products: [
      { nameEn: "Single Espresso", nameAr: "إسبريسو سنجل", price: 60 },
      { nameEn: "Double Espresso", nameAr: "إسبريسو دابل", price: 80 },
      { nameEn: "Single Turkish Coffee", nameAr: "قهوة تركية سنجل", price: 65 },
      { nameEn: "Double Turkish Coffee", nameAr: "قهوة تركية دابل", price: 80 },
      { nameEn: "Single Macchiato", nameAr: "مكياتو سنجل", price: 75 },
      { nameEn: "Double Macchiato", nameAr: "مكياتو دابل", price: 85 },
      { nameEn: "American Coffee", nameAr: "قهوة أمريكية", price: 95 },
      { nameEn: "French Coffee", nameAr: "قهوة فرنسية", price: 80 },
      { nameEn: "Nutella Coffee", nameAr: "قهوة نوتيلا", price: 110 },
      { nameEn: "Hazelnut Coffee", nameAr: "قهوة بالبندق", price: 110 },
      { nameEn: "Spanish Latte", nameAr: "إسباتش لاتيه", price: 135 },
      { nameEn: "Cortado", nameAr: "كورتادو", price: 85 },
      { nameEn: "Latte", nameAr: "لاتيه", price: 95 },
      { nameEn: "Latte L", nameAr: "لاتيه كبير", price: 110 },
      { nameEn: "Cappuccino", nameAr: "كابتشينو", price: 95 },
      { nameEn: "Cappuccino L", nameAr: "كابتشينو كبير", price: 110 },
      { nameEn: "Mocha", nameAr: "موكا", price: 95 },
      { nameEn: "Mocha L", nameAr: "موكا كبير", price: 110 },
      { nameEn: "Nescafe M", nameAr: "نسكافيه صغير", price: 65 },
      { nameEn: "Nescafe L", nameAr: "نسكافيه كبير", price: 75 },
      { nameEn: "Flat White", nameAr: "فلات وايت", price: 110 }
    ]
  },

  // ========== 4. MILKSHAKE (ميلك شيك) ==========
  {
    id: "milk-shake",
    nameEn: "MilkShake",
    nameAr: "ميلك شيك",
    products: [
      { nameEn: "MilkShake Strawberry", nameAr: "ميلك شيك بالفراولة", price: 110 },
      { nameEn: "MilkShake Lemon", nameAr: "ميلك شيك بالليمون", price: 110 },
      { nameEn: "MilkShake Blueberry Yogurt", nameAr: "ميلك شيك زبادي بالتوت", price: 110 },
      { nameEn: "MilkShake Mango", nameAr: "ميلك شيك بالمانجو", price: 110 },
      { nameEn: "MilkShake Kendar", nameAr: "ميلك شيك كندر", price: 110 },
      { nameEn: "MilkShake Snakers", nameAr: "ميلك شيك اسنيكرز", price: 110 },
      { nameEn: "MilkShake Chocolate", nameAr: "ميلك شيك شوكليت", price: 110 },
      { nameEn: "MilkShake Vanilla", nameAr: "ميلك شيك فانيليا", price: 110 },
      { nameEn: "MilkShake Oreo", nameAr: "ميلك شيك أوريو", price: 110 },
      { nameEn: "MilkShake Lotus", nameAr: "ميلك شيك لوتس", price: 110 },
      { nameEn: "MilkShake Pistachio", nameAr: "ميلك شيك فستق", price: 170 }
    ]
  },

  // ========== 5. FRESH JUICE (العصائر الطازجة) ==========
  {
    id: "fresh-juice",
    nameEn: "Fresh Juice",
    nameAr: "العصائر الطازجة",
    products: [
      { nameEn: "Fresh Orange Juice", nameAr: "عصير برتقال فريش", price: 85 },
      { nameEn: "Fresh Lemon Juice", nameAr: "عصير ليمون فريش", price: 65 },
      { nameEn: "Fresh Mango Juice", nameAr: "عصير مانجه فريش", price: 90 },
      { nameEn: "Fresh Strawberry Juice", nameAr: "عصير فراوله فريش", price: 85 },
      { nameEn: "Fresh Guava Juice", nameAr: "عصير جوافة فريش", price: 85 },
      { nameEn: "Fresh Watermelon Juice", nameAr: "عصير بطيخ فريش", price: 75 }
    ]
  },

  // ========== 6. COLD COFFEE (القهوة الباردة) ==========
  {
    id: "cold-coffee",
    nameEn: "Cold Coffee",
    nameAr: "القهوة الباردة",
    products: [
      { nameEn: "Iced Spanish Latte", nameAr: "لاتيه مثلج إسبانش", price: 135 },
      { nameEn: "Iced Latte", nameAr: "لاتيه مثلج", price: 110 },
      { nameEn: "Iced Cappuccino", nameAr: "كابتشينو مثلج", price: 110 },
      { nameEn: "Iced Mocha", nameAr: "موكا مثلج", price: 110 },
      { nameEn: "Frappuccino", nameAr: "فرابيه كلاسيك", price: 110 },
      { nameEn: "Caramel Frappe", nameAr: "فرابيه كراميل", price: 110 },
      { nameEn: "Chocolate Frappe", nameAr: "فرابيه شوكولاتة", price: 110 },
      { nameEn: "Vanilla Frappuccino", nameAr: "فرابيه فانيليا", price: 110 }
    ]
  },

  // ========== 7. SNACKS (الوجبات الخفيفة) ==========
  {
    id: "snacks",
    nameEn: "Snacks",
    nameAr: "الوجبات الخفيفة",
    products: [
      { nameEn: "Popcorn", nameAr: "فشار", price: 40 },
      { nameEn: "Candy", nameAr: "غزل البنات", price: 60 },
      { nameEn: "Waffle", nameAr: "وافل", price: 125 },
      { nameEn: "Waffle", nameAr: "وافل", price: 125 },
      { nameEn: "Waffle Lotus", nameAr: "وافل لوتس", price: 125 },
      { nameEn: "Waffle Pistachio", nameAr: "وافل فستق", price: 145 },
      { nameEn: "Ice Cream One Bowl", nameAr: "كوب آيس كريم", price: 60 },
      { nameEn: "Ice Cream Two Bowl", nameAr: "كوب آيس كريم 2 بولة", price: 95 }
    ]
  },

  // ========== 8. SOFT DRINKS (المشروبات الغازية) ==========
  {
    id: "soft-drinks",
    nameEn: "Soft Drinks",
    nameAr: "المشروبات الغازية",
    products: [
      { nameEn: "V7 Sparkling Drink", nameAr: "مشروب فوار V7", price: 40 },
      { nameEn: "Big Cola 330 ML", nameAr: "بيج كولا 330 مل", price: 40 },
      { nameEn: "Water", nameAr: "مياه", price: 20 },
      { nameEn: "Juice Juhayna", nameAr: "عصير جهينة", price: 30 },
      { nameEn: "Pure Juice", nameAr: "بيور جهينة", price: 35 },
      { nameEn: "Mix Juhayna", nameAr: "ميكس جهينة", price: 35 },
      { nameEn: "Sun Top", nameAr: "سن توب", price: 35 },
      { nameEn: "Big Cola 200 ML", nameAr: "بيج كولا 200 مل", price: 30 },
      { nameEn: "Juice Yes", nameAr: "عصير ياس", price: 30 }
    ]
  },

  // ========== 9. SMOOTHIES (السموذي) ==========
  {
    id: "smoothies",
    nameEn: "Smoothies",
    nameAr: "السموذي",
    products: [
      { nameEn: "Strawberry Smoothie", nameAr: "سموذي فراولة", price: 80 },
      { nameEn: "Blueberry Smoothie", nameAr: "سموذي توت أزرق", price: 110 },
      { nameEn: "Mixed Berry Smoothie", nameAr: "سموذي توت مشكل", price: 110 },
      { nameEn: "Raspberry Smoothie", nameAr: "سموذي توت أحمر", price: 100 },
      { nameEn: "Lemon Mint Smoothie", nameAr: "سموذي ليمون بالنعناع", price: 95 },
      { nameEn: "Mango Smoothie", nameAr: "سموذي مانجة", price: 95 },
      { nameEn: "Watermelon Smoothie", nameAr: "سموذي بطيخ", price: 95 }
    ]
  },

  // ========== 10. DESSERTS (الحلويات) ==========
  {
    id: "desserts",
    nameEn: "Desserts",
    nameAr: "الحلويات",
    products: [
      { nameEn: "Cheese Cake Strawberry", nameAr: "تشيز كيك فراولة", price: 110 },
      { nameEn: "Cheese Cake Blueberry", nameAr: "تشيز كيك توت أزرق", price: 110 },
      { nameEn: "Cheese Cake Lotus", nameAr: "تشيز كيك لوتس", price: 110 },
      { nameEn: "Molten Cake", nameAr: "مولتن كيك", price: 110 },
      { nameEn: "Nutella Volcano", nameAr: "فولكانو كيك نوتيلا", price: 110 },
      { nameEn: "Nutella Despacito", nameAr: "كيك نوتيلا ديسباسيتو", price: 110 },
      { nameEn: "Mini Tart Lotus", nameAr: "مينى تارت لوتس", price: 110 },
      { nameEn: "Mini Tart Ferrero Rocher", nameAr: "مينى تارت فريروشيه", price: 110 },
      { nameEn: "Karisma Cake", nameAr: "كاريزما كيك", price: 110 },
      { nameEn: "Muffins Vanilla", nameAr: "مافن فانيليا", price: 60 },
      { nameEn: "Muffins Chocolate", nameAr: "مافن شوكليت", price: 60 },
      { nameEn: "Cup Cake", nameAr: "كب كيك", price: 60 },
      { nameEn: "Cake Pops", nameAr: "كيك بوبس", price: 55 },
      { nameEn: "Cake Sicles", nameAr: "كيك سيكلز", price: 55 },
      { nameEn: "Sugar Cookies", nameAr: "كوكيز شوجر", price: 5 },
      { nameEn: "Mini Donuts", nameAr: "مينى دونتس", price: 60 }
    ]
  },

  {
    id: "pizzas",
    nameEn: "Pizzas",
    nameAr: "البيتزا",
    products: [
      { nameEn: "Pizza Slamy", nameAr: "بيتزا سلامي", price: 255 },
      { nameEn: "Pizza Margherita", nameAr: "بيتزا مارغريتا", price: 210 },
      { nameEn: "Pizza Chekien", nameAr: "بيتزا تشيكين", price: 255 },
      { nameEn: "Piza Hot Dog", nameAr: "بيتزا هوت دوج", price: 230 },
    ]
  },



  // ========== 11. BAKERY (المخبوزات) ==========
  {
    id: "bakery",
    nameEn: "Bakery",
    nameAr: "المخبوزات",
    products: [
      { nameEn: "Plain Croissant", nameAr: "كرواسون ساده", price: 55 },
      { nameEn: "Cheese Croissant", nameAr: "كرواسون جبنة", price: 65 }
    ]
  }
];

// Total Products: 127 items across 11 categories
