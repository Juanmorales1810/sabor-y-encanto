import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import Footer from "@/components/footer";

export const viewport: Viewport = {
    themeColor: [
        { color: "#D21637", media: "(prefers-color-scheme: light)" },
        { color: "#D21637", media: "(prefers-color-scheme: light)" },
    ],
}

export const metadata: Metadata = {
    metadataBase: new URL('https://www.restaurantsaboryencanto.cl'),
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,

    keywords: [
        "Restaurante", "Peru", "Comida Peruana", "Comida Caribeña", "Comida Latina", "Comida Exótica", "Comida Internacional", "Comida peruana tradicional en La Serena", "Recetas peruanas fáciles en Coquimbo", "Gastronomía peruana en la Cuarta Región", "Platos típicos de Perú en Las Compañías", "Restaurantes peruanos en La Serena", "Lomo saltado en Coquimbo", "Ceviche peruano en La Serena", "Ají de gallina en la Cuarta Región", "Anticuchos en Las Compañías", "Tiradito en Coquimbo", "Causa limeña en La Serena", "Papa a la huancaína en la Cuarta Región", "Arroz chaufa en Las Compañías", "Pollo a la brasa en La Serena", "Pachamanca en Coquimbo", "Tacu tacu en la Cuarta Región", "Rocoto relleno en Las Compañías", "Pisco sour en La Serena", "Mazamorra morada en Coquimbo", "Turrón de Doña Pepa en la Cuarta Región", "Picarones en Las Compañías", "Chicha morada en La Serena", "Inka Kola en Coquimbo", "Pisco peruano en la Cuarta Región", "Chupe de camarones en Las Compañías", "Carapulcra en La Serena", "Cuy chactado en Coquimbo", "Seco de cordero en la Cuarta Región", "Quinua peruana en Las Compañías", "Dulces peruanos en La Serena", "Comida Gourmet", "Comida de Autor", "Comida de Mar", "Comida de Tierra", "Comida de Cielo", "Ceviche", "Anticuchos", "Lomo Saltado", "Aji de Gallina", "Pisco Sour", "Chilcano", "Chicha Morada", "Inca Kola", "Causa", "Tiradito", "Papa a la Huancaína", "Arroz con Mariscos", "Arroz con Pollo", "Arroz Chaufa", "Arroz con Pato", "Arroz con Leche", "Arroz Zambito", "Arroz con Coco", "Arroz con Maracuyá", "Arroz con Piña", "Arroz con Mango", "Arroz con Guanábana", "Arroz con Papaya", "Arroz con Naranja", "Arroz con Limón", "Arroz con Mandarina", "Arroz con Kiwi", "Arroz con Frutilla", "Arroz con Frambuesa", "Arroz con Arándanos", "Arroz con Moras", "Arroz con Uvas", "Arroz con Manzana", "Arroz con Pera", "Arroz con Durazno", "Arroz con Ciruela", "Arroz con Damasco", "Arroz con Melocotón", "Arroz con Albaricoque", "Arroz con Cereza", "Arroz con Uva", "Arroz con Higo", "Arroz con Granada", "Arroz con Níspero", "Arroz con Membrillo", "Arroz con Guayaba", "Arroz con Mora", "Arroz con Zarzamora", "Arroz con Frambuesa", "Arroz con Arándanos", "Arroz con Moras"
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
    creator: "Juan Morales",
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        url: 'https://www.restaurantsaboryencanto.cl/',
        siteName: siteConfig.name,
        images: [
            {
                url: 'https://www.restaurantsaboryencanto.cl/meta/metaimg.jpg',
                width: 1200,
                height: 630,
            },

        ],
        locale: 'es_CL',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: ['https://www.restaurantsaboryencanto.cl/meta/metaimg.jpg'],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" suppressHydrationWarning>
            <head />
            <body
                className={clsx(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
                    <div className="relative flex flex-col h-full bg-zinc-950">
                        <div className="absolute inset-0 z-10 h-full w-full bg-[linear-gradient(to_right,#141414_1px,transparent_2px),linear-gradient(to_bottom,#141414_1px,transparent_2px)] bg-[size:4rem_4rem]"></div>
                        <Navbar />
                        <main className="mx-auto w-full flex-grow z-20">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
