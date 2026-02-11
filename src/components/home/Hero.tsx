"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

const SLIDES = [
    {
        id: 1,
        image: "/images/slides/1.jpg",
        title: "Premium Dental Implants for Clinics",
        description: "Verified doctor-only pricing • GST invoice • PAN India delivery",
        cta: "Shop Implants",
        link: "/shop",
    },
    {
        id: 2,
        image: "/images/slides/2.jpg",
        title: "Abutments, Drivers & Surgical Kits",
        description: "Everything your clinic needs — in one trusted store",
        cta: "View Products",
        link: "/shop?cat=surgical-kits",
    },
    {
        id: 3,
        image: "/images/slides/3.jpg",
        title: "Bulk Orders on WhatsApp",
        description: "Get clinic pricing for multi-unit implant orders",
        cta: "Contact Us",
        link: "#",
    },
];

export function Hero() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 5000 }),
    ]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <section className="bg-muted/30 py-8">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                    {/* Main Slider */}
                    <div className="lg:col-span-3 relative group overflow-hidden rounded-xl shadow-lg bg-background">
                        <div className="overflow-hidden h-[300px] sm:h-[400px]" ref={emblaRef}>
                            <div className="flex touch-pan-y h-full">
                                {SLIDES.map((slide) => (
                                    <div className="flex-[0_0_100%] min-w-0 relative h-full" key={slide.id}>
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            fill
                                            className="object-cover"
                                            priority={slide.id === 1}
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/40 flex items-end p-8 sm:p-12">
                                            <div className="max-w-2xl text-white">
                                                <h2 className="text-3xl sm:text-4xl font-bold mb-4">{slide.title}</h2>
                                                <p className="text-lg mb-6 text-white/90">{slide.description}</p>
                                                <Link href={slide.link}>
                                                    <Button size="lg" className="text-base">
                                                        {slide.cta}
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity rounded-full z-10"
                            onClick={scrollPrev}
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity rounded-full z-10"
                            onClick={scrollNext}
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>

                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {SLIDES.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === selectedIndex ? "bg-white" : "bg-white/50 hover:bg-white/70"
                                        }`}
                                    onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Side Info Cards */}
                    <div className="hidden lg:flex flex-col gap-4">
                        <div className="bg-background rounded-xl p-6 shadow-sm border flex flex-col justify-center flex-1 transition-all hover:shadow-md">
                            <div className="flex items-center gap-3 mb-2 text-primary">
                                <Check className="h-6 w-6" />
                                <h3 className="font-bold">Verified Access</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Upload certificate → admin approval → view pricing & order.
                            </p>
                        </div>

                        <div className="bg-background rounded-xl p-6 shadow-sm border flex flex-col justify-center flex-1 transition-all hover:shadow-md">
                            <div className="flex items-center gap-3 mb-2 text-primary">
                                <Check className="h-6 w-6" />
                                <h3 className="font-bold">GST Invoice</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Invoices included for every order with proper billing.
                            </p>
                        </div>

                        <div className="bg-background rounded-xl p-6 shadow-sm border flex flex-col justify-center flex-1 transition-all hover:shadow-md">
                            <div className="flex items-center gap-3 mb-2 text-primary">
                                <Check className="h-6 w-6" />
                                <h3 className="font-bold">Bulk Supply</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Special pricing for multi-unit implant orders.
                            </p>
                        </div>

                        <div className="flex gap-2 mt-auto">
                            <Link href="/shop" className="flex-1">
                                <Button className="w-full" variant="secondary">Shop</Button>
                            </Link>
                            <Link href="/auth" className="flex-1">
                                <Button className="w-full" variant="outline">Login</Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
