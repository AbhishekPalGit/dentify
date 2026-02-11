import Link from "next/link";

const CATEGORIES = [
    {
        id: "implants",
        title: "Dental Implants",
        icon: "🦷",
        desc: "Internal hex, narrow, bone level & more.",
        href: "/shop?cat=implants",
        color: "bg-blue-50 hover:bg-blue-100 border-blue-100",
    },
    {
        id: "abutments",
        title: "Abutments",
        icon: "🧩",
        desc: "Healing, temporary, angled abutments.",
        href: "/shop?cat=abutments",
        color: "bg-green-50 hover:bg-green-100 border-green-100",
    },
    {
        id: "surgical-kits",
        title: "Surgical Kits",
        icon: "🧰",
        desc: "Drills, drivers, torque wrenches.",
        href: "/shop?cat=surgical-kits",
        color: "bg-orange-50 hover:bg-orange-100 border-orange-100",
    },
    {
        id: "accessories",
        title: "Accessories",
        icon: "⚙️",
        desc: "Cover screws, copings, scan bodies.",
        href: "/shop?cat=accessories",
        color: "bg-purple-50 hover:bg-purple-100 border-purple-100",
    },
];

export function CategoryGrid() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Everything your clinic needs, in one place. High-quality materials, precision engineering, and reliable delivery.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CATEGORIES.map((cat) => (
                        <Link
                            key={cat.id}
                            href={cat.href}
                            className={`block p-6 rounded-xl border transition-all hover:shadow-md hover:-translate-y-1 ${cat.color}`}
                        >
                            <div className="text-4xl mb-4">{cat.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{cat.title}</h3>
                            <p className="text-sm text-muted-foreground">{cat.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
