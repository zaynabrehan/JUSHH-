import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { useStore } from "@/context/StoreContext";
import { Plus, Check, Coffee, UtensilsCrossed, Droplets, ShoppingBag, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type DbMenuItem = Tables<"menu_items">;

interface BeverageUpsellModalProps {
  open: boolean;
  onClose: () => void;
  addedItemName: string;
}

const tabs = [
  { key: "beverages", label: "Drinks", icon: Coffee },
  { key: "addons", label: "Sides", icon: UtensilsCrossed },
  { key: "sauces", label: "Sauces", icon: Droplets },
] as const;

type TabKey = (typeof tabs)[number]["key"];

const BeverageUpsellModal = ({ open, onClose, addedItemName }: BeverageUpsellModalProps) => {
  const { addToCart } = useStore();
  const [beverages, setBeverages] = useState<DbMenuItem[]>([]);
  const [addons, setAddons] = useState<DbMenuItem[]>([]);
  const [sauces, setSauces] = useState<DbMenuItem[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [allItems, setAllItems] = useState<Map<string, DbMenuItem>>(new Map());
  const [activeTab, setActiveTab] = useState<TabKey>("beverages");

  useEffect(() => {
    if (!open) {
      setSelected(new Set());
      setActiveTab("beverages");
      return;
    }
    const fetchItems = async () => {
      const { data } = await supabase
        .from("menu_items")
        .select("*")
        .in("category", ["Beverages", "Add-ons", "Sauces"])
        .eq("is_available", true);
      if (data) {
        setBeverages(data.filter((i) => i.category === "Beverages"));
        setAddons(data.filter((i) => i.category === "Add-ons"));
        setSauces(data.filter((i) => i.category === "Sauces"));
        const map = new Map<string, DbMenuItem>();
        data.forEach((i) => map.set(i.id, i));
        setAllItems(map);
      }
    };
    fetchItems();
  }, [open]);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleConfirm = () => {
    selected.forEach((id) => {
      const item = allItems.get(id);
      if (item) {
        addToCart({
          id: item.id,
          name: item.name,
          description: item.description || "",
          price: item.price,
          category: item.category,
          image: item.image_url || "/placeholder.svg",
        });
      }
    });
    onClose();
  };

  const selectedTotal = Array.from(selected).reduce((sum, id) => {
    const item = allItems.get(id);
    return sum + (item?.price || 0);
  }, 0);

  const getTabItems = (key: TabKey) => {
    switch (key) {
      case "beverages": return beverages;
      case "addons": return addons;
      case "sauces": return sauces;
    }
  };

  const currentItems = getTabItems(activeTab);

  const getTabCount = (key: TabKey) => {
    const items = getTabItems(key);
    return items.filter((i) => selected.has(i.id)).length;
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="glass-card border-border/30 max-w-lg max-h-[90vh] flex flex-col p-0 gap-0 overflow-hidden [&>button]:hidden">
        {/* Header */}
        <div className="relative px-5 pt-5 pb-3">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-1"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-fire flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <h2 className="font-display text-lg font-bold text-foreground">Make it a combo!</h2>
          </motion.div>
          <p className="font-body text-sm text-muted-foreground pl-10">
            Complete your <span className="text-accent font-semibold">{addedItemName}</span> with extras
          </p>
        </div>

        {/* Tab Bar */}
        <div className="px-5 pt-1 pb-2">
          <div className="flex gap-2 p-1 rounded-xl glass">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              const count = getTabCount(tab.key);
              const Icon = tab.icon;
              const hasItems = getTabItems(tab.key).length > 0;
              if (!hasItems) return null;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-sm font-body font-bold transition-all ${
                    isActive
                      ? "bg-gradient-fire text-primary-foreground shadow-fire"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {count > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`ml-1 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold ${
                        isActive ? "bg-primary-foreground/20" : "bg-accent text-accent-foreground"
                      }`}
                    >
                      {count}
                    </motion.span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Items Grid */}
        <div className="flex-1 overflow-y-auto px-5 pb-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {currentItems.map((item, i) => {
                const isSelected = selected.has(item.id);
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggle(item.id)}
                    className={`relative rounded-2xl overflow-hidden text-left transition-all ${
                      isSelected
                        ? "ring-2 ring-accent shadow-fire"
                        : "ring-1 ring-border/30 hover:ring-accent/50"
                    }`}
                  >
                    {/* Image */}
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={item.image_url || "/placeholder.svg"}
                        alt={item.name}
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          isSelected ? "scale-110" : "hover:scale-105"
                        }`}
                        loading="lazy"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                      {/* Selection indicator */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center shadow-lg"
                          >
                            <Check className="w-3.5 h-3.5 text-accent-foreground" />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Add icon */}
                      {!isSelected && (
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full glass flex items-center justify-center opacity-70">
                          <Plus className="w-3.5 h-3.5 text-foreground" />
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-2.5">
                      <p className="font-display font-bold text-xs text-foreground truncate">{item.name}</p>
                      <span className="text-xs font-display font-bold text-gradient-fire">Rs. {item.price}</span>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-border/20 glass">
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl glass text-muted-foreground hover:text-foreground font-body font-bold text-sm transition-colors"
            >
              No thanks
            </button>
            <AnimatePresence mode="wait">
              {selected.size > 0 && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9, width: 0 }}
                  animate={{ opacity: 1, scale: 1, width: "auto" }}
                  exit={{ opacity: 0, scale: 0.9, width: 0 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleConfirm}
                  className="flex-1 py-3 rounded-xl bg-gradient-fire text-primary-foreground font-body font-bold text-sm hover:shadow-fire transition-shadow flex items-center justify-center gap-2 overflow-hidden"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add {selected.size} · Rs. {selectedTotal}
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BeverageUpsellModal;
