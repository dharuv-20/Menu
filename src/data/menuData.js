export const categories = [
  "Breakfast",
  "Lunch",
  "Evening Snacks",
  "Dinner",
  "Desserts",
  "Beverages"
];

export const menuItems = [
  // --- BREAKFAST ---
  {
    id: 1,
    name: "Puri Chole",
    category: "Breakfast",
    price: 130,
    description: "4 hot puris served with spicy chole, pickle and onion.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:00 AM - 10:30 AM"
  },
  {
    id: 2,
    name: "Puri Bhaji",
    category: "Breakfast",
    price: 120,
    description: "4 hot puris served with spicy potato curry and salad.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:00 AM - 10:30 AM"
  },
  {
    id: 3,
    name: "Aloo Paratha",
    category: "Breakfast",
    price: 55,
    description: "Traditional potato-stuffed flatbread. Served per piece with curd and pickle.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:00 AM - 10:30 AM"
  },
  {
    id: 4,
    name: "Paneer Paratha",
    category: "Breakfast",
    price: 70,
    description: "Spiced grated paneer flatbread. Served per piece with curd and pickle.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:00 AM - 10:30 AM"
  },
  {
    id: 5,
    name: "Bread Pakora",
    category: "Breakfast",
    price: 40,
    description: "Spiced potato-stuffed bread fritter. Served per piece with fresh mint chutney.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:00 AM - 10:30 AM"
  },
  {
    id: 6,
    name: "Veg Sandwich",
    category: "Breakfast",
    price: 60,
    description: "Freshly sliced garden vegetables with creamy mayonnaise spread in soft bread.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:00 AM - 10:30 AM"
  },
  {
    id: 7,
    name: "Grilled Cheese Sandwich",
    category: "Breakfast",
    price: 80,
    description: "Crispy grilled bread with a generous melting cheese center.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:00 AM - 10:30 AM"
  },
  {
    id: 8,
    name: "Besan / Moong Dal Cheela (2 Pieces)",
    category: "Breakfast",
    price: 80,
    description: "Healthy, protein-rich pan-fried savory lentil pancakes.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:00 AM - 10:30 AM"
  },
  {
    id: 9,
    name: "Poha",
    category: "Breakfast",
    price: 90,
    description: "Flattened rice cooked with turmeric, green peas, curry leaves, and crunchy peanuts.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:00 AM - 10:30 AM"
  },
  {
    id: 10,
    name: "Vegetable Cutlet (3 Pieces)",
    category: "Breakfast",
    price: 90,
    description: "Crispy pan-fried vegetable and potato patties served with tangy tomato sauce.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:00 AM - 10:30 AM"
  },
  {
    id: 11,
    name: "Masala Oats",
    category: "Breakfast",
    price: 80,
    description: "Warm, healthy oats cooked with aromatic spices and fresh diced seasonal vegetables.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:00 AM - 10:30 AM"
  },
  {
    id: 12,
    name: "Idli Sambar (3 Pieces)",
    category: "Breakfast",
    price: 90,
    description: "Steamed fluffy rice cakes served with hot lentil sambar and fresh coconut chutney.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:00 AM - 10:30 AM"
  },
  {
    id: 13,
    name: "Mandua (Ragi) Roti",
    category: "Breakfast",
    price: 120,
    description: "Nutritious traditional finger millet flatbread. Served with seasonal vegetable and farm butter.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:00 AM - 10:30 AM"
  },
  {
    id: 14,
    name: "Aloo Gutke & Puri",
    category: "Breakfast",
    price: 130,
    description: "Traditional Uttarakhand-style parboiled potatoes dry-cooked in mustard oil with local spices. Served with four hot puris.",
    isVegetarian: true,
    isRecommended: true,
    timing: "8:00 AM - 10:30 AM"
  },

  // --- LUNCH ---
  {
    id: 15,
    name: "Standard Veg Thali",
    category: "Lunch",
    price: 180,
    description: "A simple, wholesome homestyle platter consisting of local Dal, a dry seasonal vegetable preparation, Rice, 3 Tawa Rotis, fresh garden Salad, and Raita.",
    isVegetarian: true,
    isRecommended: false,
    timing: "1:00 PM - 3:00 PM"
  },
  {
    id: 16,
    name: "Pahadi Special Thali",
    category: "Lunch",
    price: 220,
    description: "Authentic Kumaoni meal featuring Chainsoo (roasted black gram broth) or Phaanu (lentil puree mix) accompanied by Badi ki Sabzi (sun-dried lentil nugget dry curry), Steamed Rice, 3 Rotis, and local chutney.",
    isVegetarian: true,
    isRecommended: true,
    timing: "1:00 PM - 3:00 PM"
  },
  {
    id: 17,
    name: "Chicken Curry Thali",
    category: "Lunch",
    price: 320,
    description: "Homestyle chicken curry with bone cooked in light local spices. Served with Rice, 3 Rotis, and fresh Salad.",
    isVegetarian: false,
    isRecommended: false,
    timing: "1:00 PM - 3:00 PM"
  },
  {
    id: 18,
    name: "Egg Curry Thali (2 Eggs)",
    category: "Lunch",
    price: 220,
    description: "Two boiled eggs cooked in aromatic masala gravy. Served with Rice, 3 Rotis, and salad.",
    isVegetarian: false,
    isRecommended: false,
    timing: "1:00 PM - 3:00 PM"
  },
  {
    id: 19,
    name: "Dal Khichdi Bowl",
    category: "Lunch",
    price: 140,
    description: "A warm comforting bowl of yellow lentils and rice cooked together, topped with pure ghee.",
    isVegetarian: true,
    isRecommended: false,
    timing: "1:00 PM - 3:00 PM"
  },

  // --- EVENING SNACKS ---
  {
    id: 20,
    name: "Veg Momos (8 Pieces)",
    category: "Evening Snacks",
    price: 150,
    description: "Steamed thin dumplings stuffed with shredded cabbage, carrots, and onions. Served with hot chili garlic sauce.",
    isVegetarian: true,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 21,
    name: "Chicken Momos (8 Pieces)",
    category: "Evening Snacks",
    price: 199,
    description: "Steamed dumplings filled with seasoned minced chicken. Served with spicy tomato-garlic chutney.",
    isVegetarian: false,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 22,
    name: "Veg Chowmein",
    category: "Evening Snacks",
    price: 110,
    description: "Stir-fried noodles tossed with crunch seasonal vegetables and dark soy sauce.",
    isVegetarian: true,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 23,
    name: "Veg Pakora",
    category: "Evening Snacks",
    price: 199,
    description: "Assorted seasonal vegetable fritters fried to a golden crisp in spiced chickpea batter.",
    isVegetarian: true,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 24,
    name: "Gobhi Pakora",
    category: "Evening Snacks",
    price: 199,
    description: "Spiced cauliflower florets coated in gram flour batter and deep fried. Crispy mountain snack.",
    isVegetarian: true,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 25,
    name: "Paneer Pakora",
    category: "Evening Snacks",
    price: 249,
    description: "Soft paneer cubes layered with green mint chutney, dipped in spiced batter, and deep fried.",
    isVegetarian: true,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 26,
    name: "Egg Bhurji",
    category: "Evening Snacks",
    price: 110,
    description: "Two farm eggs scrambled dry with chopped onions, green chilies, coriander, and light spices.",
    isVegetarian: false,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 27,
    name: "Paneer Bhurji",
    category: "Evening Snacks",
    price: 179,
    description: "Grated paneer sautéed with onions, tomatoes, ginger, and traditional Indian spices.",
    isVegetarian: true,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 28,
    name: "Honey Chilli Potato",
    category: "Evening Snacks",
    price: 140,
    description: "Crispy fried potato strips tossed in sweet honey, hot chili paste, and sesame seeds.",
    isVegetarian: true,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 29,
    name: "Veg Spring Rolls (2 Pieces)",
    category: "Evening Snacks",
    price: 110,
    description: "Crispy fried thin pastry rolls filled with sautéed glass noodles and vegetables.",
    isVegetarian: true,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 30,
    name: "French Fries",
    category: "Evening Snacks",
    price: 110,
    description: "Classic salted, crispy deep-fried potato batons.",
    isVegetarian: true,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 31,
    name: "Peri Peri Fries",
    category: "Evening Snacks",
    price: 130,
    description: "Crispy fries tossed in a spicy, tangy peri-peri seasoning.",
    isVegetarian: true,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 32,
    name: "Chicken 65",
    category: "Evening Snacks",
    price: 250,
    description: "Deep-fried spicy marinated chicken cubes tossed with curry leaves and yogurt-chili glaze.",
    isVegetarian: false,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 33,
    name: "Chilli Chicken (Dry)",
    category: "Evening Snacks",
    price: 240,
    description: "Indo-Chinese snack featuring wok-tossed crispy chicken cubes, bell peppers, onions, and dark soy-chili sauce.",
    isVegetarian: false,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 34,
    name: "Chicken Pepper Fry",
    category: "Evening Snacks",
    price: 260,
    description: "Dry, spicy chicken preparation tossed with fresh crushed black pepper, onions, and curry leaves.",
    isVegetarian: false,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 35,
    name: "Chicken Pakora",
    category: "Evening Snacks",
    price: 230,
    description: "Spiced batter-coated deep-fried chicken fritters. Extremely crispy and perfect with hot chai.",
    isVegetarian: false,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 36,
    name: "Peanut Masala",
    category: "Evening Snacks",
    price: 80,
    description: "Roasted peanuts tossed with finely chopped onions, tomatoes, green chilies, coriander, and fresh lemon juice.",
    isVegetarian: true,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 37,
    name: "Masala Papad",
    category: "Evening Snacks",
    price: 60,
    description: "Crispy fried lentil wafer topped with chopped onions, tomatoes, green chilies, and chat masala.",
    isVegetarian: true,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },
  {
    id: 38,
    name: "Roasted Papad",
    category: "Evening Snacks",
    price: 40,
    description: "Simple dry-roasted thin papadum. Clean crisp palate accompaniment.",
    isVegetarian: true,
    isRecommended: false,
    timing: "5:00 PM - 7:30 PM"
  },

  // --- DINNER ---
  {
    id: 39,
    name: "Paneer Butter Masala",
    category: "Dinner",
    price: 299,
    description: "Rich and creamy tomato-onion cashew gravy with succulent cubes of paneer, topped with cream.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:30 PM - 10:30 PM"
  },
  {
    id: 40,
    name: "Kadai Paneer",
    category: "Dinner",
    price: 299,
    description: "Soft paneer cubes cooked in a thick spicy gravy with freshly ground spices, bell peppers, and onion petals.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:30 PM - 10:30 PM"
  },
  {
    id: 41,
    name: "Mix Vegetable",
    category: "Dinner",
    price: 339,
    description: "Assorted seasonal vegetables sautéed with traditional Indian spices and herbs.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:30 PM - 10:30 PM"
  },
  {
    id: 42,
    name: "Aloo Gobhi",
    category: "Dinner",
    price: 339,
    description: "Homestyle dry stir-fry of potatoes and cauliflower florets with turmeric, cumin, and ginger.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:30 PM - 10:30 PM"
  },
  {
    id: 43,
    name: "Dal Tadka",
    category: "Dinner",
    price: 299,
    description: "Comforting yellow split lentils boiled and tempered with cumin, garlic, red chilies, and pure ghee.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:30 PM - 10:30 PM"
  },
  {
    id: 44,
    name: "Dal Makhani",
    category: "Dinner",
    price: 299,
    description: "Creamy, slow-cooked whole black lentils and red kidney beans simmered overnight with butter and fresh cream.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:30 PM - 10:30 PM"
  },
  {
    id: 45,
    name: "Pahadi Chicken Curry (With Bone)",
    category: "Dinner",
    price: 350,
    description: "Traditional Kumaoni mountain-style chicken cooked with local whole spices, mustard oil, and thin gravy. Hearty and rustic.",
    isVegetarian: false,
    isRecommended: true,
    timing: "8:30 PM - 10:30 PM"
  },
  {
    id: 46,
    name: "Mutton Curry (Pahadi Style)",
    category: "Dinner",
    price: 500,
    description: "Tender local mutton cuts slow-braised in an earthy gravy of hill spices, garlic, and coriander. Full of flavor.",
    isVegetarian: false,
    isRecommended: false,
    timing: "8:30 PM - 10:30 PM"
  },
  {
    id: 47,
    name: "Tawa Roti",
    category: "Dinner",
    price: 15,
    description: "Soft, freshly puffed whole wheat flatbread made on a griddle (Tawa).",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:30 PM - 10:30 PM"
  },
  {
    id: 48,
    name: "Butter Roti",
    category: "Dinner",
    price: 20,
    description: "Soft whole wheat flatbread brushed with fresh unsalted butter.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:30 PM - 10:30 PM"
  },
  {
    id: 49,
    name: "Steamed Rice",
    category: "Dinner",
    price: 80,
    description: "Fluffy, hot boiled long-grain Basmati rice.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:30 PM - 10:30 PM"
  },
  {
    id: 50,
    name: "Jeera Rice",
    category: "Dinner",
    price: 100,
    description: "Basmati rice tempered with aromatic cumin seeds and a touch of butter.",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:30 PM - 10:30 PM"
  },
  {
    id: 51,
    name: "Veg Pulao with Raita",
    category: "Dinner",
    price: 180,
    description: "Spiced basmati rice cooked with mixed peas, carrots, beans and served with fresh spiced curd (Raita).",
    isVegetarian: true,
    isRecommended: false,
    timing: "8:30 PM - 10:30 PM"
  },

  // --- DESSERTS ---
  {
    id: 52,
    name: "Gulab Jamun (2 Pieces)",
    category: "Desserts",
    price: 60,
    description: "Hot, round golden milk-solids dumplings fried and steeped in sweet rose-cardamom syrup.",
    isVegetarian: true,
    isRecommended: false,
    timing: "All Day"
  },
  {
    id: 53,
    name: "Jhangora Ki Kheer",
    category: "Desserts",
    price: 90,
    description: "Traditional Uttarakhand sweet pudding made of local barnyard millet (Jhangora) slow-cooked in sweetened milk, cardamom, and mountain nuts.",
    isVegetarian: true,
    isRecommended: true,
    timing: "All Day"
  },

  // --- BEVERAGES ---
  {
    id: 54,
    name: "Pahadi Masala Chai",
    category: "Beverages",
    price: 30,
    description: "Freshly brewed milk tea infused with wild mountain ginger, cardamom, cloves, and local hill herbs. Comfort in a cup.",
    isVegetarian: true,
    isRecommended: true,
    timing: "All Day"
  },
  {
    id: 55,
    name: "Filter Coffee",
    category: "Beverages",
    price: 45,
    description: "Hot, aromatic South Indian style filter coffee brewed in hot frothed milk.",
    isVegetarian: true,
    isRecommended: false,
    timing: "All Day"
  },
  {
    id: 56,
    name: "Fresh Nimbu Pani",
    category: "Beverages",
    price: 40,
    description: "Sweet or salted refreshing juice of local hill limes mixed with chilled mountain spring water.",
    isVegetarian: true,
    isRecommended: false,
    timing: "All Day"
  },
  {
    id: 57,
    name: "Sweet Lassi",
    category: "Beverages",
    price: 60,
    description: "Thick frothed yogurt beverage sweetened with organic sugar and scented with cardamom.",
    isVegetarian: true,
    isRecommended: false,
    timing: "All Day"
  },
  {
    id: 58,
    name: "Salted Lassi",
    category: "Beverages",
    price: 60,
    description: "Savory frothed yogurt beverage blended with salt and roasted ground cumin seeds.",
    isVegetarian: true,
    isRecommended: false,
    timing: "All Day"
  },
  {
    id: 59,
    name: "Glass of Milk",
    category: "Beverages",
    price: 45,
    description: "Warm glass of fresh whole milk, locally sourced.",
    isVegetarian: true,
    isRecommended: false,
    timing: "All Day"
  }
];
