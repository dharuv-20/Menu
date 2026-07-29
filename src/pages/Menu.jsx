import React, { useState, useEffect, useRef } from 'react';
import { categories, menuItems } from '../data/menuData';

const Menu = ({ cart, updateQuantity }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dietFilter, setDietFilter] = useState("All");
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  // Filter items in real-time
  const filteredItems = menuItems.filter(item => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDiet = 
      dietFilter === "All" ? true :
      dietFilter === "Veg" ? item.isVegetarian :
      dietFilter === "Non-Veg" ? !item.isVegetarian :
      dietFilter === "Recommended" ? item.isRecommended : true;

    return matchesSearch && matchesDiet;
  });

  // Check if a category has any filtered items
  const getCategoryItems = (category) => {
    return filteredItems.filter(item => item.category === category);
  };

  // Categories that actually contain matching items
  const activeCategoriesList = categories.filter(cat => getCategoryItems(cat).length > 0);

  // Scroll spy: highlight category tab while scrolling
  useEffect(() => {
    const mainEl = document.querySelector('main');
    if (!mainEl) return;

    const handleScroll = () => {
      if (isScrollingRef.current) return; // Ignore spy during manual tab click scroll

      let currentCategory = activeCategory;
      let minDiff = Infinity;

      activeCategoriesList.forEach((cat) => {
        const idSafe = cat.replace(/\s+/g, '-');
        const el = document.getElementById(`category-sec-${idSafe}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Offset based on header & sticky tab height (~160px)
          const diff = Math.abs(rect.top - 160);
          if (rect.top <= 220 && diff < minDiff) {
            minDiff = diff;
            currentCategory = cat;
          }
        }
      });

      if (currentCategory !== activeCategory) {
        setActiveCategory(currentCategory);
        // Sync scroll of categories tab bar to keep the active category in view
        const tabEl = document.getElementById(`tab-${currentCategory.replace(/\s+/g, '-')}`);
        const tabsContainer = document.getElementById('categories-tab-bar');
        if (tabEl && tabsContainer) {
          tabsContainer.scrollTo({
            left: tabEl.offsetLeft - (tabsContainer.clientWidth / 2) + (tabEl.clientWidth / 2),
            behavior: 'smooth'
          });
        }
      }
    };

    mainEl.addEventListener('scroll', handleScroll);
    return () => mainEl.removeEventListener('scroll', handleScroll);
  }, [activeCategory, activeCategoriesList]);

  // Tab click: smooth scroll to category anchor
  const handleTabClick = (category) => {
    setActiveCategory(category);
    isScrollingRef.current = true;

    const idSafe = category.replace(/\s+/g, '-');
    const target = document.getElementById(`category-sec-${idSafe}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Release scroll block after smooth scroll finishes
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 850);
  };

  return (
    <div className="py-2 animate-fade-in flex flex-col h-full">
      
      {/* STICKY HEADER CONTAINER (includes Categories, Search, Filters) */}
      <div className="sticky top-0 bg-paper/95 backdrop-blur-md z-20 -mx-4 px-4 pt-2 border-b border-antique/20 shadow-sm">
        
        {/* Category Tabs */}
        <div 
          id="categories-tab-bar"
          className="flex overflow-x-auto gap-2.5 pb-2.5 hide-scrollbar scroll-smooth"
        >
          {categories.map((category) => {
            const hasItems = menuItems.some(i => i.category === category);
            if (!hasItems) return null;

            return (
              <button
                key={category}
                id={`tab-${category.replace(/\s+/g, '-')}`}
                onClick={() => handleTabClick(category)}
                className={`flex-shrink-0 px-3.5 py-1 text-[10px] font-heading uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === category
                    ? 'bg-primary text-paper border-primary shadow-vintage-sm font-semibold'
                    : 'bg-paper/40 text-primary/75 border-antique/20 hover:border-antique/40'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Live Search Bar */}
        <div className="my-2.5 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your favorite dishes..."
            className="w-full bg-paper/60 border border-antique/30 px-3.5 py-2 text-xs font-body text-primary placeholder-antique/50 focus:outline-none focus:border-antique/70 focus:bg-paper rounded-sm transition-all duration-200"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")} 
              className="absolute right-3.5 top-2.5 text-xs text-antique/60 hover:text-primary font-body px-1"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 pb-3 overflow-x-auto hide-scrollbar">
          {["All", "Veg", "Non-Veg", "Recommended"].map((filter) => (
            <button
              key={filter}
              onClick={() => setDietFilter(filter)}
              className={`px-3 py-1 text-[9px] font-heading uppercase tracking-wider transition-all duration-250 border rounded-full ${
                dietFilter === filter
                  ? 'bg-primary text-paper border-primary'
                  : 'bg-paper/30 text-primary/70 border-antique/20 hover:border-antique/35'
              }`}
            >
              {filter === "Recommended" ? "★ Recommended" : filter}
            </button>
          ))}
        </div>
      </div>

      {/* MENU CONTENT LIST */}
      <div className="mt-6 space-y-8 pb-24">
        {activeCategoriesList.length > 0 ? (
          activeCategoriesList.map((category) => {
            const catItems = getCategoryItems(category);
            const idSafe = category.replace(/\s+/g, '-');

            return (
              <section 
                key={category} 
                id={`category-sec-${idSafe}`} 
                className="scroll-mt-[155px]"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-sm font-heading font-semibold uppercase tracking-widest text-secondary shrink-0">
                    {category}
                  </h3>
                  <div className="flex-grow h-[1px] bg-antique/20"></div>
                </div>

                {/* Grid layout */}
                <div className="space-y-4">
                  {catItems.map((item) => {
                    const quantity = cart[item.id] || 0;
                    const hasSelected = quantity > 0;

                    return (
                      <div
                        key={item.id}
                        className={`p-4 border transition-all duration-300 relative bg-paper/50 flex flex-col justify-between min-h-[120px] rounded-sm hover:-translate-y-0.5 active:translate-y-0 ${
                          hasSelected
                            ? 'border-primary/80 shadow-vintage-md bg-paper'
                            : 'border-antique/20 shadow-vintage-sm hover:border-antique/40 hover:bg-paper/85'
                        }`}
                      >
                        {/* Mini corner motifs for selected cards */}
                        {hasSelected && (
                          <>
                            <div className="corner-flourish corner-flourish-tl !w-2 !h-2 !top-1.5 !left-1.5"></div>
                            <div className="corner-flourish corner-flourish-tr !w-2 !h-2 !top-1.5 !right-1.5"></div>
                          </>
                        )}

                        {/* Title, tags and Price row */}
                        <div>
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex flex-col">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="text-xs font-bold font-heading text-primary">
                                  {item.name}
                                </span>
                                
                                {/* Vegetarian Status Indicator */}
                                <span 
                                  className={`text-[7px] uppercase tracking-wider font-body border px-1 py-0.2 leading-none shrink-0 ${
                                    item.isVegetarian 
                                      ? 'border-successColor/30 text-successColor bg-successColor/5' 
                                      : 'border-primary/20 text-primary/70'
                                  }`}
                                >
                                  {item.isVegetarian ? 'VEG' : 'NON-VEG'}
                                </span>

                                {/* Recommended Badge */}
                                {item.isRecommended && (
                                  <span className="text-[7px] uppercase tracking-widest font-heading bg-secondary/80 text-primary font-bold px-1.5 py-0.2 leading-none">
                                    ★ Chef Recommends
                                  </span>
                                )}
                              </div>

                              {/* Timing descriptor */}
                              {item.timing && (
                                <span className="text-[9px] text-antique/50 font-body mt-0.5 italic">
                                  Served: {item.timing}
                                </span>
                              )}
                            </div>

                            <span className="text-xs font-heading font-semibold text-primary shrink-0">
                              ₹{item.price}
                            </span>
                          </div>

                          {/* Description */}
                          {item.description && (
                            <p className="text-[11px] text-primary/75 font-body leading-relaxed mt-2 pr-2">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {/* Quantity Selector controls */}
                        <div className="flex justify-end mt-4">
                          {hasSelected ? (
                            <div className="flex items-center border border-primary bg-paper shadow-vintage-sm select-none animate-fade-in rounded-sm">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="px-3 py-1.5 text-xs text-primary font-body hover:bg-hoverBg/30 active:bg-hoverBg/50 transition-colors"
                              >
                                −
                              </button>
                              <span className="px-3.5 text-[11px] font-heading font-bold text-primary">
                                {quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="px-3 py-1.5 text-xs text-primary font-body hover:bg-hoverBg/30 active:bg-hoverBg/50 transition-colors"
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="text-[10px] uppercase tracking-wider font-heading px-4 py-1.5 border border-antique/40 text-primary bg-paper/80 hover:bg-hoverBg/40 hover:border-antique transition-all duration-200 rounded-sm active:scale-95"
                            >
                              + Add Item
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })
        ) : (
          <div className="text-center py-16 px-4">
            <p className="text-xs text-antique/60 italic font-body">
              No culinary creations match your current search parameters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
