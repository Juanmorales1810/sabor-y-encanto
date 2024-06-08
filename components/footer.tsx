import Image from "next/image";
import Link from "next/link";

export default function footer() {
    return (
        <footer className="bg-white dark:bg-primary z-20">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <Image src="/logos/LOGO SABOR Y ENCANTO FINAL 2.png" width={128} height={128} className="h-32 me-3 mt-4" alt="Logo Sabor y encanto" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contactanos</h2>
                            <ul className="text-secondary-500 font-medium">
                                <li className="mb-4">
                                    <Link href="tel:+56987060388" className="hover:underline">Teléfono</Link>
                                </li>
                                <li>
                                    <Link href="mailto:restaurantsaboryencanto@gmail.com" className="hover:underline">Email</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Síguenos</h2>
                            <ul className="text-secondary-500 font-medium">
                                <li className="mb-4">
                                    <Link target="_blank" href={`https://wa.me/+56987060388?text=Hola!%20Me%20gustaria%20hacer%20una%20reserva.%20Tenes%20alguna%20reservacion%20disponible?%20Muchas%20gracias!😊`} className="hover:underline">WhatsApp</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline ">Instagram</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Facebook</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-secondary-500 font-medium">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-secondary lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-secondary-500 sm:text-center dark:text-secondary">© {new Date().getFullYear()} <Link href="/" className="hover:underline">Sabor y Encanto™</Link>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <Link href="#" className="text-secondary-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link href="#" className="text-secondary-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>

                    </div>
                </div>
            </div>
        </footer>
    )
}