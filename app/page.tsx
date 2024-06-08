import { InfiniteMovingCards } from "@/components/infinityCard";
import BackgroundSwipe from "@/components/backgroundswipe";
import CardComent from "@/components/cardComent";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { CallIcon, GpsIcon, WhatsAppLogo } from "@/components/icons";

const menu = [
	{
		quote:
			"Arroz frito con salsa de soya, mariscos frescos y tortilla de huevo.",
		name: "Arroz Chaufa de Mariscos",
		imageSrc: "/platos/fotos oficiales-12.jpg",
	},
	{
		quote:
			"Tallarines en salsa huancaína, filete de lomo liso saltado con cebolla morada, tomate y papa hilo .",
		name: "Tallarines huancaína con lomo saltado",
		imageSrc: "/platos/fotos oficiales-22.jpg",
	},
	{
		quote: "Filete de pescado reineta pasada en una salsa y a freír acompañado con papa frita o ensalada y papas hilo.",
		name: "Chicharrones de pescado",
		imageSrc: "/platos/fotos oficiales-36.jpg",
	},
	{
		quote:
			"Filete de pescado en cubitos en jugo de limón, cebolla morada, cilantro, y su leche de tigre, acompañado con yuca, camote, mote de maíz y cancha o maíz tostado.",
		name: "Ceviche",
		imageSrc: "/platos/fotos oficiales-32.jpg",
	},
	{
		quote:
			"Arroz con una base de mariscos, camarones, surtido de mariscos, calamares, ostiones en salsa marinada de ají amarillo.",
		name: "Arroz con mariscos",
		imageSrc: "/platos/fotos oficiales-7.jpg",
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
					<Button
						className="font-medium"
						as={Link}
						href="tel:+56987060388"
						color="primary"
						endContent={<CallIcon className="fill-zinc-50" />}
					>
						Reserva ahora
					</Button>
				</div>
				<div className="w-full md:w-1/2 z-10">
					<BackgroundSwipe />
				</div>
			</section>
			<section className="flex justify-center items-center bg-primary py-8 w-full">
				<div className="flex flex-col px-4 justify-center items-center text-center md:max-w-5xl">
					<h3 className="uppercase text-4xl text-secondary font-bold pb-4">Bienvenidos</h3>
					<p className="text-pretty text-base md:text-xl px-2">Descubre Sabor y Encanto, un restaurante en La Serena, Chile, que celebra la rica y diversa gastronomía peruana. Ubicado en el corazón de la ciudad, nuestro espacio te invita a un viaje culinario a través del Perú, desde la costa hasta los Andes y la selva. Disfruta de ceviches frescos, suculentos anticuchos y el clásico lomo saltado, todos preparados con ingredientes auténticos y técnicas tradicionales. Nuestro ambiente acogedor y elegante, junto con un servicio cálido y atento, hacen de cada visita una experiencia inolvidable. Ven y déjate seducir por los sabores únicos de Sabor y Encanto.
					</p>
					<div className="flex flex-col gap-2 pt-8 md:flex-row">
						<Button
							className="font-medium"
							as={Link}
							href={`https://wa.me/+56987060388?text=Hola!%20Me%20gustaria%20hacer%20una%20reserva.%20Tenes%20alguna%20reservacion%20disponible?%20Muchas%20gracias!😊`}
							variant="shadow"
							color="secondary"
							endContent={<WhatsAppLogo />}
						>
							Háblanos al WhatsApp
						</Button>
						<Button
							className="text-md group"
							as={Link}
							href="tel:+56987060388"
							variant="ghost"
							color="secondary"
							endContent={<CallIcon className="fill-secondary-500 group-hover:fill-black transition-colors" />}
						>
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
					<div className="flex flex-col gap-2 justify-center text-left md:w-96">
						<h2 className="text-4xl text-primary-500 font-semibold px-2">Ceviche Fresco</h2>
						<p className="text-xl px-2">Pescado del día marinado en jugo de limón, acompañado de camote y choclo.
						</p>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-4 w-full max-w-5xl px-2 md:flex-row-reverse md:gap-0">
					<div className="relative">
						<Image className="absolute inset-0 z-20 blur-xl rounded-3xl object-cover w-[500] h-[300px]" src="/platos/fotos oficiales.jpg" alt="Logo Sabor y encanto" width={500} height={300} />
						<Image className="relative rounded-3xl object-cover w-[500] h-[300px] z-30" src="/platos/fotos oficiales.jpg" alt="Logo Sabor y encanto" width={500} height={300} />
					</div>
					<div className="flex flex-col gap-2 justify-center text-right md:w-96">
						<h2 className="text-4xl text-primary-500 font-semibold px-2">Anticuchos</h2>
						<p className="text-xl px-2">Corazón de res marinado y asado, servido con papas doradas y ají.
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
				<div className="flex flex-col gap-2 justify-center items-center text-center px-2 md:flex-row md:gap-8 md:max-w-5xl">
					<p className="text-pretty text-xl px-2">En Sabor y Encanto, nos enorgullecemos de ofrecer una experiencia culinaria auténtica que celebra la rica herencia de la gastronomía peruana. Nuestro chef, con vasta experiencia en la cocina peruana, se dedica a crear platos que honran las tradiciones y sabores de Perú.
					</p>
					<div className="flex flex-col justify-center items-center h-full gap-2 py-8">
						<Button
							className="font-medium w-full"
							as={Link}
							href={`https://wa.me/+56987060388?text=Hola!%20Me%20gustaria%20hacer%20una%20reserva.%20Tenes%20alguna%20reservacion%20disponible?%20Muchas%20gracias!😊`}
							variant="shadow"
							color="secondary"
							endContent={<WhatsAppLogo />}
						>
							Háblanos al WhatsApp
						</Button>
						<Button
							className="text-md group"
							as={Link}
							href="tel:+56987060388"
							variant="ghost"
							color="secondary"
							endContent={<CallIcon className="fill-secondary-500 group-hover:fill-black transition-colors" />}
						>
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
			<section className="flex justify-center items-center py-16 w-full px-2">
				<div className="relative w-full h-full max-w-[600px] md:gap-8">
					<div className="w-full h-[400px]">
						<Image className="rounded-3xl object-cover w-full h-[400px]" src="/mapa/pixelcut-export.png" alt="Logo Sabor y encanto" width={600} height={400} />
					</div>
					<div className="absolute inset-0 flex flex-col justify-center items-center gap-2 bg-zinc-950/80 h-[400px] rounded-3xl px-4 py-8">
						<div className="text-center">
							<h2 className="text-4xl text-primary font-semibold py-4">Ubicación</h2>
							<p className="text-pretty text-xl pt-2 pb-6">Sabor y Encanto se encuentra en el corazón de La Serena, Chile, en la Avenida Islón 1234.
							</p>
						</div>
						<div className="mx-auto">
							<Button
								className="font-medium"
								as={Link}
								isExternal
								href="https://www.google.com/maps/place/Sabor+y+Encanto+Comida+Peruana/@-29.8882882,-71.2304425,15z/data=!4m2!3m1!1s0x0:0xa84a9f35e92ef28?sa=X&ved=1t:2428&ictx=111&cshid=1717541827914301"
								variant="shadow"
								color="secondary"
								endContent={<GpsIcon />}
							>
								Obtener Direcciones
							</Button>
						</div>
					</div>
				</div>
			</section>

		</section>
	);
}
