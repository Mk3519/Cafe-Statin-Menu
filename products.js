// Cafe Station Menu - All Products Data
// Easy to edit, manage, add, and delete products from this file only

const menuData = [
  // ========== 1. EXTRAS (الإضافات) ==========
  {
    id: "extras",
    nameEn: "Extras",
    nameAr: "الإضافات",
    products: [
      { nameEn: "Extra Espresso", nameAr: "إسبريسو إضافي", price: 30 },
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
      { nameEn: "Tea", nameAr: "شاي", price: 30 },
      { nameEn: "Green Tea", nameAr: "شاي أخضر", price: 35 },
      { nameEn: "Flavored Tea", nameAr: "شاي بنكهات", price: 50 },
      { nameEn: "Milk Tea", nameAr: "شاي باللبن", price: 45 },
      { nameEn: "Herbes", nameAr: "أعشاب", price: 30 },
      { nameEn: "Hot Apple Cider", nameAr: "هوت أبل سيدر", price: 65 },
      { nameEn: "Hot Chocolate Classic M", nameAr: "هوت شوكليت كلاسيك صغير", price: 65 },
      { nameEn: "Hot Chocolate Classic L", nameAr: "هوت شوكليت كلاسيك كبير", price: 75 },
      { nameEn: "Mint", nameAr: "نعناع", price: 30 },
      { nameEn: "Anis", nameAr: "ينسون", price: 30 }
    ]
  },

  // ========== 3. HOT COFFEE (القهوة الساخنة) ==========
  {
    id: "hot-coffee",
    nameEn: "Hot Coffee",
    nameAr: "القهوة الساخنة",
    products: [
      { nameEn: "Single Espresso", nameAr: "إسبريسو سنجل", price: 60 },
      { nameEn: "Double Espresso", nameAr: "إسبريسو دابل", price: 70 },
      { nameEn: "Single Turkish Coffee", nameAr: "قهوة تركية سنجل", price: 45 },
      { nameEn: "Double Turkish Coffee", nameAr: "قهوة تركية دابل", price: 55 },
      { nameEn: "Single Macchiato", nameAr: "مكياتو سنجل", price: 65 },
      { nameEn: "Double Macchiato", nameAr: "مكياتو دابل", price: 75 },
      { nameEn: "American Coffee", nameAr: "قهوة أمريكية", price: 50 },
      { nameEn: "French Coffee", nameAr: "قهوة فرنسية", price: 65 },
      { nameEn: "Nutella Coffee", nameAr: "قهوة نوتيلا", price: 80 },
      { nameEn: "Hazelnut Coffee", nameAr: "قهوة بالبندق", price: 75 },
      { nameEn: "Spanish Latte", nameAr: "إسباتش لاتيه", price: 120 },
      { nameEn: "Cortado", nameAr: "كورتادو", price: 70 },
      { nameEn: "Latte", nameAr: "لاتيه", price: 75 },
      { nameEn: "Latte L", nameAr: "لاتيه كبير", price: 85 },
      { nameEn: "Cappuccino", nameAr: "كابتشينو", price: 80 },
      { nameEn: "Cappuccino L", nameAr: "كابتشينو كبير", price: 90 },
      { nameEn: "Mocha", nameAr: "موكا", price: 75 },
      { nameEn: "Mocha L", nameAr: "موكا كبير", price: 85 },
      { nameEn: "Nescafe M", nameAr: "نسكافيه صغير", price: 55 },
      { nameEn: "Nescafe L", nameAr: "نسكافيه كبير", price: 65 },
      { nameEn: "Flat White", nameAr: "فلات وايت", price: 105 }
    ]
  },

  // ========== 4. MILKSHAKE (ميلك شيك) ==========
  {
    id: "milk-shake",
    nameEn: "MilkShake",
    nameAr: "ميلك شيك",
    products: [
      { nameEn: "MilkShake Strawberry", nameAr: "ميلك شيك بالفراولة", price: 95 },
      { nameEn: "MilkShake Lemon", nameAr: "ميلك شيك بالليمون", price: 95 },
      { nameEn: "MilkShake Blueberry Yogurt", nameAr: "ميلك شيك زبادي بالتوت", price: 95 },
      { nameEn: "MilkShake Mango", nameAr: "ميلك شيك بالمانجو", price: 95 },
      { nameEn: "MilkShake Kendar", nameAr: "ميلك شيك كندر", price: 95 },
      { nameEn: "MilkShake Snakers", nameAr: "ميلك شيك اسنيكرز", price: 95 },
      { nameEn: "MilkShake Chocolate", nameAr: "ميلك شيك شوكليت", price: 95 },
      { nameEn: "MilkShake Vanilla", nameAr: "ميلك شيك فانيليا", price: 95 },
      { nameEn: "MilkShake Oreo", nameAr: "ميلك شيك أوريو", price: 95 },
      { nameEn: "MilkShake Lotus", nameAr: "ميلك شيك لوتس", price: 95 }
    ]
  },

  // ========== 5. FRESH JUICE (العصائر الطازجة) ==========
  {
    id: "fresh-juice",
    nameEn: "Fresh Juice",
    nameAr: "العصائر الطازجة",
    products: [
      { nameEn: "Fresh Orange Juice", nameAr: "عصير برتقال فريش", price: 70 },
      { nameEn: "Fresh Lemon Juice", nameAr: "عصير ليمون فريش", price: 50 },
      { nameEn: "Fresh Mango Juice", nameAr: "عصير مانجه فريش", price: 80 },
      { nameEn: "Fresh Strawberry Juice", nameAr: "عصير فراوله فريش", price: 70 },
      { nameEn: "Fresh Guava Juice", nameAr: "عصير جوافة فريش", price: 70 },
      { nameEn: "Fresh Watermelon Juice", nameAr: "عصير بطيخ فريش", price: 75 }
    ]
  },

  // ========== 6. COLD COFFEE (القهوة الباردة) ==========
  {
    id: "cold-coffee",
    nameEn: "Cold Coffee",
    nameAr: "القهوة الباردة",
    products: [
      { nameEn: "Iced Spanish Latte", nameAr: "لاتيه مثلج إسبانش", price: 120 },
      { nameEn: "Iced Latte", nameAr: "لاتيه مثلج", price: 85 },
      { nameEn: "Iced Cappuccino", nameAr: "كابتشينو مثلج", price: 90 },
      { nameEn: "Iced Mocha", nameAr: "موكا مثلج", price: 90 },
      { nameEn: "Frappuccino", nameAr: "فرابيه كلاسيك", price: 85 },
      { nameEn: "Caramel Frappe", nameAr: "فرابيه كراميل", price: 90 },
      { nameEn: "Chocolate Frappe", nameAr: "فرابيه شوكولاتة", price: 90 },
      { nameEn: "Vanilla Frappuccino", nameAr: "فرابيه فانيليا", price: 90 }
    ]
  },

  // ========== 7. SNACKS (الوجبات الخفيفة) ==========
  {
    id: "snacks",
    nameEn: "Snacks",
    nameAr: "الوجبات الخفيفة",
    products: [
      { nameEn: "Popcorn", nameAr: "فشار", price: 30 },
      { nameEn: "Candy", nameAr: "غزل البنات", price: 35 },
      { nameEn: "Waffle", nameAr: "وافل", price: 90 },
      { nameEn: "Waffle Stick", nameAr: "عصا الوافل", price: 35 },
      { nameEn: "Ice Cream One Bowl", nameAr: "كوب آيس كريم", price: 45 },
      { nameEn: "Ice Cream Two Bowl", nameAr: "كوب آيس كريم 2 بولة", price: 80 }
    ]
  },

  // ========== 8. SOFT DRINKS (المشروبات الغازية) ==========
  {
    id: "soft-drinks",
    nameEn: "Soft Drinks",
    nameAr: "المشروبات الغازية",
    products: [
      { nameEn: "V7 Sparkling Drink", nameAr: "مشروب فوار V7", price: 35 },
      { nameEn: "Big Cola 330 ML", nameAr: "بيج كولا 330 مل", price: 30 },
      { nameEn: "Water", nameAr: "مياه", price: 20 },
      { nameEn: "Juice Juhayna", nameAr: "عصير جهينة", price: 25 },
      { nameEn: "Pure Juice", nameAr: "بيور جهينة", price: 30 },
      { nameEn: "Mix Juhayna", nameAr: "ميكس جهينة", price: 30 },
      { nameEn: "Sun Top", nameAr: "سن توب", price: 30 },
      { nameEn: "Big Cola 200 ML", nameAr: "بيج كولا 200 مل", price: 20 },
      { nameEn: "Juice Yes", nameAr: "عصير ياس", price: 20 }
    ]
  },

  // ========== 9. SMOOTHIES (السموذي) ==========
  {
    id: "smoothies",
    nameEn: "Smoothies",
    nameAr: "السموذي",
    products: [
      { nameEn: "Strawberry Smoothie", nameAr: "سموذي فراولة", price: 75 },
      { nameEn: "Blueberry Smoothie", nameAr: "سموذي توت أزرق", price: 90 },
      { nameEn: "Mixed Berry Smoothie", nameAr: "سموذي توت مشكل", price: 90 },
      { nameEn: "Raspberry Smoothie", nameAr: "سموذي توت أحمر", price: 90 },
      { nameEn: "Lemon Mint Smoothie", nameAr: "سموذي ليمون بالنعناع", price: 75 },
      { nameEn: "Mango Smoothie", nameAr: "سموذي مانجة", price: 75 },
      { nameEn: "Watermelon Smoothie", nameAr: "سموذي بطيخ", price: 75 }
    ]
  },

  // ========== 10. DESSERTS (الحلويات) ==========
  {
    id: "desserts",
    nameEn: "Desserts",
    nameAr: "الحلويات",
    products: [
      { nameEn: "Cheese Cake Strawberry", nameAr: "تشيز كيك فراولة", price: 95 },
      { nameEn: "Cheese Cake Blueberry", nameAr: "تشيز كيك توت أزرق", price: 95 },
      { nameEn: "Cheese Cake Lotus", nameAr: "تشيز كيك لوتس", price: 95 },
      { nameEn: "Molten Cake", nameAr: "مولتن كيك", price: 100 },
      { nameEn: "Nutella Volcano", nameAr: "فولكانو كيك نوتيلا", price: 100 },
      { nameEn: "Nutella Despacito", nameAr: "كيك نوتيلا ديسباسيتو", price: 100 },
      { nameEn: "Mini Tart Walnuts", nameAr: "مينى تارت عين جمل", price: 95 },
      { nameEn: "Mini Tart Lotus", nameAr: "مينى تارت لوتس", price: 110 },
      { nameEn: "Mini Tart Ferrero Rocher", nameAr: "مينى تارت فريروشيه", price: 100 },
      { nameEn: "Karisma Cake", nameAr: "كاريزما كيك", price: 100 },
      { nameEn: "Muffins Vanilla", nameAr: "مافن فانيليا", price: 50 },
      { nameEn: "Muffins Chocolate", nameAr: "مافن شوكليت", price: 50 },
      { nameEn: "Cup Cake", nameAr: "كب كيك", price: 50 },
      { nameEn: "Cake Pops", nameAr: "كيك بوبس", price: 50 },
      { nameEn: "Cake Sicles", nameAr: "كيك سيكلز", price: 50 },
      { nameEn: "Sugar Cookies", nameAr: "كوكيز شوجر", price: 50 },
      { nameEn: "Mini Donuts", nameAr: "مينى دونتس", price: 50 }
    ]
  },

  // ========== 11. BAKERY (المخبوزات) ==========
  {
    id: "bakery",
    nameEn: "Bakery",
    nameAr: "المخبوزات",
    products: [
      { nameEn: "Plain Croissant", nameAr: "كرواسون ساده", price: 45 },
      { nameEn: "Cheese Croissant", nameAr: "كرواسون جبنة", price: 50 }
    ]
  }
];

// Total Products: 127 items across 11 categories
