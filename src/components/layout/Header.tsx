"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Menu, X, Phone, MapPin, Clock, ExternalLink, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
        <>
            <div className="bg-primary text-primary-foreground py-2 text-xs font-medium">
                <div className="container flex flex-col md:flex-row justify-between items-center gap-2">
                    <div className="flex gap-4 items-center">
                        <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> +91 90000 00000</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Mumbai</span>
                        <span className="hidden sm:flex items-center gap-1"><Clock className="h-3 w-3" /> Delivery PAN India</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className="flex items-center gap-1"><ExternalLink className="h-3 w-3" /> WhatsApp Orders</span>
                        <span className="flex items-center gap-1"><Receipt className="h-3 w-3" /> GST Invoice</span>
                    </div>
                </div>
            </div>

            <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container py-4">
                    <div className="flex items-center justify-between gap-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                            <div className="h-10 w-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-xl">
                                DS
                            </div>
                            <div className="hidden sm:block">
                                <div className="font-bold text-lg leading-none">DentEasy</div>
                                <div className="text-xs text-muted-foreground font-semibold">Doctor-only pricing</div>
                            </div>
                        </Link>

                        {/* Desktop Nav & Search */}
                        <div className="hidden md:flex items-center gap-6 flex-1 max-w-2xl justify-center">
                            <div className="relative w-full max-w-md">
                                <Input placeholder="Search implants, abutments, drivers..." className="pr-10" />
                                <Button size="icon" variant="ghost" className="absolute right-0 top-0 text-muted-foreground hover:text-foreground">
                                    <Search className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            <Link href="/shop">
                                <Button variant="ghost" size="icon" title="Shop">
                                    <ShoppingCart className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/auth">
                                <Button className="hidden sm:inline-flex">Doctor Login</Button>
                            </Link>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                                onClick={() => setIsMobileNavOpen(true)}
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-6 mt-4 text-sm font-medium border-t pt-4">
                        <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
                        <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">Dental Implants</Link>
                        <Link href="/shop?cat=surgical-kits" className="text-muted-foreground hover:text-primary transition-colors">Surgical Kits</Link>
                        <Link href="/auth" className="text-muted-foreground hover:text-primary transition-colors">Doctor Login</Link>
                    </nav>
                </div>
            </header>

            {/* Mobile Nav Drawer */}
            {isMobileNavOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsMobileNavOpen(false)}
                    />
                    <div className="relative w-full max-w-xs bg-background h-full p-6 shadow-xl flex flex-col gap-6 animate-in slide-in-from-right">
                        <div className="flex items-center justify-between">
                            <div className="font-bold text-lg">DentEasy Menu</div>
                            <Button variant="ghost" size="icon" onClick={() => setIsMobileNavOpen(false)}>
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                            <div className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                                G
                            </div>
                            <div>
                                <div className="font-medium">Guest</div>
                                <div className="text-xs text-muted-foreground">Login to view pricing</div>
                            </div>
                        </div>

                        <nav className="flex flex-col gap-2">
                            <Link
                                href="/"
                                className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
                                onClick={() => setIsMobileNavOpen(false)}
                            >
                                🏠 Home
                            </Link>
                            <Link
                                href="/shop"
                                className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
                                onClick={() => setIsMobileNavOpen(false)}
                            >
                                🦷 Dental Implants
                            </Link>
                            <Link
                                href="/shop?cat=products"
                                className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
                                onClick={() => setIsMobileNavOpen(false)}
                            >
                                📦 Products
                            </Link>
                            <Link
                                href="/auth"
                                className="flex items-center gap-2 p-2 rounded-md hover:bg-muted font-semibold text-primary"
                                onClick={() => setIsMobileNavOpen(false)}
                            >
                                👨‍⚕️ Doctor Login
                            </Link>
                        </nav>

                        <div className="mt-auto flex flex-col gap-2">
                            <Button className="w-full bg-green-600 hover:bg-green-700">
                                WhatsApp Order
                            </Button>
                            <Link href="/shop" onClick={() => setIsMobileNavOpen(false)}>
                                <Button className="w-full" variant="outline">Shop Now</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
