export interface Product {
    id: string;
    name: string;
    image: string;
    diameter_mm: number;
    length_mm: number;
    order_code: string;
    price: number;
    category: "implants" | "abutments" | "surgical-kits" | "accessories";
    inStock: boolean;
}

export const products: Product[] = [
    {
        id: "KS3S4010S",
        name: "KSIII Implant System",
        image: "/images/products/ksiii-sa.jpg",
        diameter_mm: 4.0,
        length_mm: 10,
        order_code: "KS3S4010S",
        price: 3500,
        category: "implants",
        inStock: true,
    },
    {
        id: "KS3S4510S",
        name: "KSIII Implant System",
        image: "/images/products/ksiii-sa.jpg",
        diameter_mm: 4.5,
        length_mm: 10,
        order_code: "KS3S4510S",
        price: 3500,
        category: "implants",
        inStock: true,
    },
    {
        id: "ABT-4055",
        name: "Straight Abutment",
        image: "/images/products/ksiii-ba.jpg",
        diameter_mm: 4.5,
        length_mm: 5,
        order_code: "ABT-4055",
        price: 1200,
        category: "abutments",
        inStock: true,
    },
    {
        id: "KIT-SURG-01",
        name: "Complete Surgical Kit",
        image: "/images/products/ksiii-soi.jpg",
        diameter_mm: 0,
        length_mm: 0,
        order_code: "KIT-SURG-01",
        price: 25000,
        category: "surgical-kits",
        inStock: true,
    },
    {
        id: "CVR-SCREW",
        name: "Cover Screw",
        image: "/images/products/ksiii-ba.jpg",
        diameter_mm: 3.5,
        length_mm: 0,
        order_code: "CVR-SC-35",
        price: 500,
        category: "accessories",
        inStock: true,
    },
    {
        id: "KS3S5010S",
        name: "KSIII Implant System (Wide)",
        image: "/images/products/ksiii-sa.jpg",
        diameter_mm: 5.0,
        length_mm: 10,
        order_code: "KS3S5010S",
        price: 3800,
        category: "implants",
        inStock: false,
    },
];
