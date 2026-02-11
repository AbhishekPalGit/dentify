import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/product/${product.id}`} className="group block h-full">
            <div className="bg-background border rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md h-full flex flex-col">
                {/* Image Area */}
                <div className="aspect-square bg-muted relative overflow-hidden">
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                            No Image
                        </div>
                    )}

                    {!product.inStock && (
                        <div className="absolute top-2 right-2 z-10">
                            <Badge variant="destructive">Out of Stock</Badge>
                        </div>
                    )}
                </div>

                {/* content */}
                <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                    <div className="text-sm text-muted-foreground mb-4">
                        Ø {product.diameter_mm}mm • L {product.length_mm}mm • {product.order_code}
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-4">
                        <div className="text-sm font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                            🔒 Login to view price
                        </div>
                        <Button size="sm" variant="outline">View</Button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
