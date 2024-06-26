export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-start w-full h-full min-h-[calc(100vh-64px)] gap-4">
			<div className="flex flex-col items-center w-full h-full">
				{children}
			</div>
		</section>
	);
}
