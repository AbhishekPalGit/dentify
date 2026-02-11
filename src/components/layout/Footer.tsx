import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t mt-auto">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="font-bold text-lg mb-4">DentEasy</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Trusted dental implants & accessories for clinics.
                        </p>
                        <p className="text-sm font-medium text-primary">
                            Doctor-only pricing with verification.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/shop" className="hover:text-primary">Shop</Link></li>
                            <li><Link href="/auth" className="hover:text-primary">Doctor Login</Link></li>
                            <li><Link href="#" className="hover:text-primary">Shipping Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary">Return Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Email: support@denteasy.com</li>
                            <li>Phone: +91 90000 00000</li>
                            <li>WhatsApp: +91 90000 00000</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Trust</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>✅ GST Invoice</li>
                            <li>✅ Genuine Products</li>
                            <li>✅ Fast Dispatch</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t mt-12 pt-8 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} DentEasy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
