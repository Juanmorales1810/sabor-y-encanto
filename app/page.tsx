import BackgroundSwipe from "@/components/backgroundswipe";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { InfiniteMovingCards } from "@/components/infinityCard";
import CardComent from "@/components/cardComent";

const menu = [
	{
		quote:
			"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
		name: "Charles Dickens",
		title: "A Tale of Two Cities",
	},
	{
		quote:
			"To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
		name: "William Shakespeare",
		title: "Hamlet",
	},
	{
		quote: "All that we see or seem is but a dream within a dream.",
		name: "Edgar Allan Poe",
		title: "A Dream Within a Dream",
	},
	{
		quote:
			"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
		name: "Jane Austen",
		title: "Pride and Prejudice",
	},
	{
		quote:
			"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
		name: "Herman Melville",
		title: "Moby-Dick",
	},
	{
		quote:
			"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
		name: "Herman Melville",
		title: "Moby-Dick",
	},
	{
		quote:
			"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
		name: "Herman Melville",
		title: "Moby-Dick",
	},
	{
		quote:
			"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
		name: "Herman Melville",
		title: "Moby-Dick",
	},
	{
		quote:
			"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
		name: "Herman Melville",
		title: "Moby-Dick",
	},
];
const testimonials = [
	{
		srcImg: "/avatar/avatar-3.png",
		Name: "María P",
		Qoute: "La mejor experiencia de comida peruana en La Serena. Los ceviches son frescos y deliciosos."
	},
	{
		srcImg: "/avatar/avatar-1.png",
		Name: "Carlos G",
		Qoute: "El lomo saltado es absolutamente increíble. Definitivamente volveré."
	},
	{
		srcImg: "/avatar/avatar-4.png",
		Name: "Ana R.",
		Qoute: "Ambiente acogedor y excelente servicio. Un lugar para recomendar."
	},

]
export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center w-full h-full min-h-[calc(100vh-64px)] overflow-hidden">
			<section className="relative flex w-full h-[calc(100vh-64px)] justify-center">
				<div className="absolute inset-0 bg-zinc-950/80 flex flex-col justify-center items-center px-2 z-20 md:w-1/2 md:relative md:bg-transparent">
					<Image className="pb-6" src="/logos/LOGO SABOR Y ENCANTO FINAL 2.png" alt="Logo Sabor y encanto" width={300} height={300} />
					<h1 className="text-primary text-2xl text-center pb-4"><strong className="text-4xl">Restaurante Sabor y Encanto</strong><br /><small>La Auténtica Gastronomía Peruana en La Serena, Chile</small></h1>
					<h2 className="text-center text-secondary pb-2">Disfruta de una Experiencia Culinaria Única con los Sabores Tradicionales de Perú
					</h2>
					<Button color="primary" as={Link} href="tel:+56987060388" className="">
						Reserva ahora
					</Button>
				</div>
				<div className="w-full md:w-1/2 z-10">
					<BackgroundSwipe />
				</div>
			</section>
			<section className="flex justify-center items-center bg-primary py-8 px-2 w-full">
				<div className="flex flex-col h-full max-w-5xl justify-center items-center text-center">
					<h3 className="uppercase text-4xl text-secondary font-bold pb-4">Bienvenidos</h3>
					<p className="text-pretty text-base md:text-xl">Descubre Sabor y Encanto, un restaurante en La Serena, Chile, que celebra la rica y diversa gastronomía peruana. Ubicado en el corazón de la ciudad, nuestro espacio te invita a un viaje culinario a través del Perú, desde la costa hasta los Andes y la selva. Disfruta de ceviches frescos, suculentos anticuchos y el clásico lomo saltado, todos preparados con ingredientes auténticos y técnicas tradicionales. Nuestro ambiente acogedor y elegante, junto con un servicio cálido y atento, hacen de cada visita una experiencia inolvidable. Ven y déjate seducir por los sabores únicos de Sabor y Encanto.
					</p>
					<div className="flex gap-4 pt-8">
						<Button variant="shadow" color="secondary" as={Link} href="tel:+56987060388" className="">
							Háblanos al WhatsApp
						</Button>
						<Button variant="ghost" color="secondary" as={Link} href="tel:+56987060388" className="text-md">
							Consulta disponibilidad
						</Button>
					</div>
				</div>
			</section>
			<section className="flex flex-col justify-center items-center w-full py-10 gap-4 px-2">
				<h2 className="text-4xl text-primary font-bold pb-4">Platos Destacados</h2>
				<div className="flex flex-col justify-between gap-4 w-full max-w-5xl md:flex-row md:gap-0">
					<div className="relative">
						<Image className="absolute inset-0 z-20 blur-xl rounded-3xl object-cover w-[500] h-[300px]" src="/platos/fotos oficiales-32.jpg" alt="Logo Sabor y encanto" width={500} height={300} />
						<Image className="relative rounded-3xl object-cover w-[500] h-[300px] z-30" src="/platos/fotos oficiales-32.jpg" alt="Logo Sabor y encanto" width={500} height={300} />
					</div>
					<div className="flex flex-col gap-2 w-96 justify-center text-left">
						<h2 className="text-4xl text-primary-500 font-semibold">Ceviche Fresco</h2>
						<p className="text-2xl">Pescado del día marinado en jugo de limón, acompañado de camote y choclo.
						</p>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-4 w-full max-w-5xl md:flex-row-reverse md:gap-0">
					<div className="relative">
						<Image className="absolute inset-0 z-20 blur-xl rounded-3xl object-cover w-[500] h-[300px]" src="/platos/fotos oficiales.jpg" alt="Logo Sabor y encanto" width={500} height={300} />
						<Image className="relative rounded-3xl object-cover w-[500] h-[300px] z-30" src="/platos/fotos oficiales.jpg" alt="Logo Sabor y encanto" width={500} height={300} />
					</div>
					<div className="flex flex-col gap-2 w-96 justify-center text-right">
						<h2 className="text-4xl text-primary-500 font-semibold">Anticuchos</h2>
						<p className="text-2xl">Corazón de res marinado y asado, servido con papas doradas y ají.
						</p>
					</div>
				</div>
			</section>
			<section className="flex flex-col justify-center items-center w-full py-10 gap-4">
				<h2 className="text-4xl text-primary font-semibold py-4">Mas del Menu</h2>
				<InfiniteMovingCards
					items={menu}
					direction="left"
					speed="slow"
				/>
			</section>
			<section className="flex justify-center items-center bg-primary py-8 w-full">
				<div className="flex flex-col h-full max-w-5xl gap-2 justify-center items-center text-center px-2 md:flex-row md:gap-8">
					<p className="text-pretty text-xl">En Sabor y Encanto, nos enorgullecemos de ofrecer una experiencia culinaria auténtica que celebra la rica herencia de la gastronomía peruana. Nuestro chef, con vasta experiencia en la cocina peruana, se dedica a crear platos que honran las tradiciones y sabores de Perú.
					</p>
					<div className="flex justify-center items-center h-full w-full gap-4 py-8">
						<Button variant="shadow" color="secondary" as={Link} href="tel:+56987060388" className="">
							Háblanos al WhatsApp
						</Button>
						<Button variant="ghost" color="secondary" as={Link} href="tel:+56987060388" className="text-md">
							Consulta disponibilidad
						</Button>
					</div>
				</div>
			</section>
			<section className="flex justify-center items-center py-16 w-full">
				<div className="flex flex-wrap w-full h-full max-w-5xl gap-12 justify-center items-center text-center md:gap-8">
					{testimonials.map((item, index) => (
						<CardComent key={index} srcImg={item.srcImg} Name={item.Name} Quote={item.Qoute} />
					))}
				</div>
			</section>

		</section>
	);
}
