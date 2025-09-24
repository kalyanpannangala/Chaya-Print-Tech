"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";

interface ProductsClientProps {
  industrial: Product[];
  commercial: Product[];
}

type CategoryFilter = "all" | "industrial" | "commercial";

export function ProductsClient({
  industrial,
  commercial,
}: ProductsClientProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const allProducts = useMemo(() => {
    return [
      ...industrial.map((p) => ({ ...p, _cat: "industrial" as const })),
      ...commercial.map((p) => ({ ...p, _cat: "commercial" as const })),
    ];
  }, [industrial, commercial]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allProducts.filter((p) => {
      if (category !== "all" && p._cat !== category) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.short?.toLowerCase().includes(q) ||
        p.features?.some((f: string) => f.toLowerCase().includes(q))
      );
    });
  }, [allProducts, query, category]);

  const counts = {
    all: allProducts.length,
    industrial: industrial.length,
    commercial: commercial.length,
  };

  return (
    <div className="space-y-12">
      {/* Enhanced Search & Filter Controls */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border-2 border-gray-200 bg-white pl-12 pr-4 py-3 text-sm font-medium text-gray-900 placeholder:text-gray-500 focus:border-[#04499C] focus:outline-none focus:ring-0 transition-colors"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-3">
          {(["all", "industrial", "commercial"] as const).map((cat) => {
            const isActive = category === cat;
            const count = counts[cat];
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? cat === "industrial"
                      ? "bg-[#04499C] text-white shadow-lg"
                      : cat === "commercial"
                      ? "bg-[#F4A405] text-white shadow-lg"
                      : "bg-[#04499C] text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#04499C] hover:text-[#04499C]"
                }`}
              >
                <Filter className="h-4 w-4" />
                <span className="capitalize">{cat}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                    isActive ? "bg-white/20" : "bg-gray-100"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid with Enhanced Cards */}
      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <p className="text-gray-600 text-lg">
              No products match your search.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#04499C] px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#033875] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#04499C]/60 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            layout
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filtered.map((p) => {
              const isIndustrial = (p as any)._cat === "industrial";
              return (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Link
                    href={`/products/${p.slug}`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-gray-100 bg-white shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#04499C]/60 hover:shadow-xl hover:border-[#04499C]/20 hover:-translate-y-1"
                  >
                    <div className="relative h-64 overflow-hidden bg-gray-50">
                      {p.images?.[0] && (
                        <Image
                          src={p.images[0]}
                          alt={p.name + " product image"}
                          fill
                          sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw, 25vw"
                          className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                          unoptimized
                        />
                      )}
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                      <span
                        className={`absolute top-4 left-4 rounded-lg px-3 py-1.5 text-xs font-bold tracking-wide text-white shadow-lg ${
                          isIndustrial ? "bg-[#04499C]" : "bg-[#F4A405]"
                        }`}
                      >
                        {isIndustrial ? "Industrial" : "Commercial"}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <h4 className="text-lg font-bold text-[#04499C] group-hover:text-[#F4A405] transition-colors leading-tight">
                        {p.name}
                      </h4>
                      <p className="flex-1 text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {p.short}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-sm font-semibold text-[#04499C] group-hover:text-[#F4A405] transition-colors">
                          View Details
                        </span>
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                            isIndustrial
                              ? "bg-[#04499C]/10 text-[#04499C] group-hover:bg-[#04499C] group-hover:text-white"
                              : "bg-[#F4A405]/10 text-[#F4A405] group-hover:bg-[#F4A405] group-hover:text-white"
                          }`}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
