"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";

function ShopContent() {
    const searchParams = useSearchParams();
    const initialCat = searchParams.get("cat");

    const [selectedCategories, setSelectedCategories] = useState<string[]>(
        initialCat ? [initialCat] : []
    );
    const [inStockOnly, setInStockOnly] = useState(true);

    // Filter products
    const filteredProducts = useMemo(() => {
        return products.filter((p) => {
            // Category Filter
            if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) {
                return false;
            }
            // Stock Filter
            if (inStockOnly && !p.inStock) {
                return false;
            }
            return true;
        });
    }, [selectedCategories, inStockOnly]);

    const toggleCategory = (cat: string) => {
        setSelectedCategories((prev) =>
            prev.includes(cat)
                ? prev.filter((c) => c !== cat)
                : [...prev, cat]
        );
    };

    return (
        <div className="container py-8">
            <div className="text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:text-primary">Home</Link> / Shop
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Filters Sidebar */}
                <aside className="md:col-span-1 space-y-6">
                    <div className="bg-card border rounded-lg p-4 shadow-sm">
                        <h3 className="font-semibold mb-4">Filters</h3>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-medium mb-2">Category</h4>
                                <div className="space-y-2">
                                    {["implants", "abutments", "surgical-kits", "accessories"].map((cat) => (
                                        <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(cat)}
                                                onChange={() => toggleCategory(cat)}
                                                className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
                                            />
                                            <span className="capitalize">{cat.replace("-", " ")}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t">
                                <h4 className="text-sm font-medium mb-2">Availability</h4>
                                <label className="flex items-center gap-2 text-sm cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={inStockOnly}
                                        onChange={(e) => setInStockOnly(e.target.checked)}
                                        className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
                                    />
                                    <span>In Stock</span>
                                </label>
                            </div>

                            <div className="pt-4 border-t">
                                <h4 className="text-sm font-medium mb-2">Doctor Pricing</h4>
                                <p className="text-xs text-muted-foreground mb-3">
                                    Prices are visible after doctor verification.
                                </p>
                                <Link href="/auth">
                                    <Button size="sm" variant="secondary" className="w-full">
                                        Verify & Login
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="md:col-span-3">
                    <div className="bg-card border rounded-lg p-4 mb-6 shadow-sm">
                        <h2 className="text-xl font-bold mb-1">Dental Products</h2>
                        <p className="text-sm text-muted-foreground">
                            Showing {filteredProducts.length} results
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))
                        ) : (
                            <div className="col-span-full py-12 text-center text-muted-foreground border rounded-lg border-dashed">
                                No products found matching your filters.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ShopPage() {
    return (
        <Suspense fallback={<div className="container py-8">Loading shop...</div>}>
            <ShopContent />
        </Suspense>
    );
}
