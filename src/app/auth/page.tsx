"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Check, ShieldCheck, User, Building, Phone, Key, Upload } from "lucide-react";

export default function AuthPage() {
    const [activeTab, setActiveTab] = useState<"login" | "register">("login");

    // In a real app we'd have form handling here.
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        alert("This is a demo. Login successful!");
        window.location.href = "/";
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Registration submitted! Admin will verify your documents.");
    };

    return (
        <div className="container py-12">
            <div className="max-w-4xl mx-auto mb-10 text-center">
                <h1 className="text-3xl font-bold mb-2">Doctor Access Portal</h1>
                <p className="text-muted-foreground">
                    Prices are visible only to <strong className="text-foreground">verified doctors</strong>.
                    Register with your certificate and get approved by admin.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                {/* Login Section */}
                <section className={`rounded-xl border shadow-sm transition-all ${activeTab === 'login' ? 'ring-2 ring-primary border-transparent' : 'bg-muted/10'}`}>
                    <div className="p-6 border-b flex items-center justify-between bg-white rounded-t-xl">
                        <div>
                            <h2 className="text-xl font-bold">Doctor Login</h2>
                            <p className="text-sm text-muted-foreground">Login to view pricing & order</p>
                        </div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            <ShieldCheck className="h-3 w-3 mr-1" /> Secure
                        </Badge>
                    </div>

                    <div className="p-6 bg-white rounded-b-xl h-full">
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input type="email" placeholder="doctor@clinic.com" required />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Password</label>
                                <Input type="password" placeholder="••••••••" required />
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="rounded border-gray-300" />
                                    <span>Remember me</span>
                                </label>
                                <Link href="#" className="text-primary hover:underline">Forgot password?</Link>
                            </div>

                            <Button type="submit" className="w-full text-base py-5">
                                Login
                            </Button>

                            <div className="mt-4 p-3 bg-yellow-50 text-yellow-800 text-sm rounded-lg flex gap-2 items-start">
                                <span className="text-lg">💡</span>
                                <p>If you recently registered, please wait for admin approval (usually within 24 hours).</p>
                            </div>
                        </form>
                    </div>
                </section>

                {/* Register Section */}
                <section className={`rounded-xl border shadow-sm transition-all ${activeTab === 'register' ? 'ring-2 ring-primary border-transparent' : 'bg-muted/10'}`}>
                    <div className="p-6 border-b flex items-center justify-between bg-white rounded-t-xl">
                        <div>
                            <h2 className="text-xl font-bold">New Registration</h2>
                            <p className="text-sm text-muted-foreground">Upload certificate for verification</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <Check className="h-3 w-3 mr-1" /> Verified Flow
                        </Badge>
                    </div>

                    <div className="p-6 bg-white rounded-b-xl">
                        <form onSubmit={handleRegister} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input className="pl-9" placeholder="Dr. Name" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Mobile</label>
                                    <div className="relative">
                                        <Phone className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input className="pl-9" type="tel" placeholder="+91 90000..." required />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Clinic Name</label>
                                <div className="relative">
                                    <Building className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input className="pl-9" placeholder="Dental Clinic Name" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Registration Number</label>
                                <div className="relative">
                                    <Key className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input className="pl-9" placeholder="DMC / Dental Council No." required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Upload Certificate</label>
                                <div className="border-2 border-dashed rounded-lg p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer group">
                                    <Upload className="h-8 w-8 mx-auto text-muted-foreground group-hover:text-primary mb-2" />
                                    <p className="text-sm text-muted-foreground">
                                        Click to upload PDF/JPG
                                    </p>
                                    <input type="file" className="hidden" />
                                </div>
                            </div>

                            <Button type="submit" variant="secondary" className="w-full text-base py-5">
                                Submit for Approval
                            </Button>
                        </form>
                    </div>
                </section>

            </div>
        </div>
    );
}
