import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Footer from "@/components/footer";

export const viewport: Viewport = {
	themeColor: [
		{ color: "#06b6d4", media: "(prefers-color-scheme: light)" },
		{ color: "#06b6d4", media: "(prefers-color-scheme: light)" },
	],
}

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
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
