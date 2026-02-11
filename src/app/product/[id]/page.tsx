import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ShieldCheck, Truck } from "lucide-react";

interface ProductPageProps {
    params: {
        id: string;
    };
}

// Since fetch is not involved, this can be a static page or dynamic. 
// For simplicity in this demo, we can just treat it as a server component.
// Note: In Next.js 15+, params is a Promise, but in Next.js 14 and below it's an object in some contexts. 
// However, standard Next.js 14 app router params can be used directly. 
// If it was Next.js 15, we'd need `await params`. 
// The initial `create-next-app` usually installs latest stable. 
// I'll assume standard 14/15 usage. If 15, async is safer.
// Let's make the component async to be safe and future-proof.

export default async function ProductPage({ params }: ProductPageProps) {
    // In Next.js 15, params must be awaited. In 14 it's sync. 
    // To support both or just be safe, we can await it if fetch logic was here, 
    // but since it's just an object props in 14, async function works fine.

    // Actually, to be strictly correct for Next.js 15 (which create-next-app@latest might use):
    // params should be treated as a promise.
    // But let's check package.json... "next": "15.x" usually. 
    // I saw "next": "16.1.6" in package.json earlier (Wait, 16? Next.js 16 isn't out yet, maybe it's 15.1.6 or something canary? Ah, in step 55 it said 'next': '16.1.6'. Wait, really? Is that possible? 
    // Let me re-read step 55.
    // "next": "16.1.6"
    // That seems like a very new version or I misread 15.1.6 as 16.1.6.
    // Assuming it's latest, params might need to be awaited or used as a promise.
    // I'll just access it directly for now, if it errors I'll fix.
    // Actually, better safe: 
    const { id } = await Promise.resolve(params); // Handles both if it's a promise or object (mostly)

    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container py-8">
            <div className="text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:text-primary">Home</Link> /{" "}
                <Link href="/shop" className="hover:text-primary">Shop</Link> /{" "}
                <span className="text-foreground">{product.name}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Gallery */}
                <div className="space-y-4">
                    <div className="aspect-square bg-muted rounded-xl overflow-hidden shadow-sm relative border">
                        {/* Main Image */}
                        {product.image ? (
                            <div className="relative w-full h-full">
                                <Image // Make sure to add import at top of file
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400 text-xl font-medium">
                                No Image
                            </div>
                        )}

                        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                            <Badge className="bg-blue-600">GST Invoice</Badge>
                            <Badge className="bg-green-600">Verified</Badge>
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <span className="bg-muted px-2 py-0.5 rounded">Code: {product.order_code}</span>
                        <span>|</span>
                        <span>Category: <span className="capitalize">{product.category}</span></span>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
                        <div className="flex items-center gap-2 mb-2 text-blue-700 font-semibold">
                            <ShieldCheck className="h-5 w-5" />
                            Doctor-only Pricing
                        </div>
                        <p className="text-sm text-blue-600/90 mb-4">
                            Please login with your doctor credentials to view the price and place an order.
                        </p>
                        <div className="flex gap-3">
                            <Link href="/auth">
                                <Button>Doctor Login</Button>
                            </Link>
                            <Link href="/shop">
                                <Button variant="outline">Back to Shop</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-lg mb-3">Specifications</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm bg-muted/30 p-4 rounded-lg">
                                <div className="text-muted-foreground">Diameter</div>
                                <div className="font-medium text-right">{product.diameter_mm} mm</div>
                                <div className="h-px bg-border col-span-2"></div>

                                <div className="text-muted-foreground">Length</div>
                                <div className="font-medium text-right">{product.length_mm} mm</div>
                                <div className="h-px bg-border col-span-2"></div>

                                <div className="text-muted-foreground">Connection</div>
                                <div className="font-medium text-right">Internal Hex</div>
                                <div className="h-px bg-border col-span-2"></div>

                                <div className="text-muted-foreground">Material</div>
                                <div className="font-medium text-right">Titanium Grade 5</div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-3">Description</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Designed for high primary stability and predictable esthetic results.
                                Surface treatment ensures faster osseointegration.
                                Suitable for all bone types.
                            </p>
                        </div>

                        <div className="border-t pt-6">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                                <Truck className="h-4 w-4" />
                                <span>Free shipping PAN India for orders above ₹5000</span>
                            </div>
                            <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 font-medium h-12 text-base">
                                Chat on WhatsApp for Bulk Order
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
