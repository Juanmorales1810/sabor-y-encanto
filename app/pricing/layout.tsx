export default function PricingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-start w-full h-[calc(100vh-64px)]  gap-4">
			<div className="flex flex-col items-center justify-center w-full h-full">
				{children}
			</div>
		</section>
	);
}
