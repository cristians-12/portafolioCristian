import { WorkType } from "@/types/work.type";

export const works: WorkType[] = [
  {
    title: "QuickBet Movies",
    image: "/images/image1.webp",
    description:
      "Sitio web para ver puntuacion, descripcion y fecha de publicacion de pelicula, incluido buscador e inicio de sesion.",
    link: "https://movie-test-chi.vercel.app",
    tech: ['Next.js', 'TypeScript']
  },
  {
    title: "Niio Catalogo",
    image: "/images/image.png",
    description:
      "Sitio web de catalogo para diferentes comercios donde pueden realizarse pedidos.",
    link: "https://flowed.web.niio.com.co/#/shop/home",
    tech: ['Angular 16.2', 'TypeScript']
  },
  {
    title: "MVT My Virtual Trainer",
    image: "/images/entrenador.png",
    description:
      "Plataforma que conecta usuarios deportistas con entrenadores, proporciona rutinas de ejercicio y registro de records.",
    link: "",
    tech: ['Vue3.js', 'Firebase']
  },
  {
    title: "Backend Yemas del Sol",
    image: "/images/yemas.webp",
    description:
      "Mantenimiento, desarrollo y creacion de endpoints de servicio API REST desarrollado con Node.js y gestor de base de datos PostgreSQL.",
    link: "",
    tech: ['Node.js', 'JavaScript']
  },
  {
    title: "PadelMax",
    image: "/images/padel.png",
    description:
      "Desarrollo de una aplicación móvil con funcionalidades de red social, orientada al agendamiento y organización de partidos de pádel en distintas canchas a nivel nacional con compras integradas.",
    link: "https://padelmax.net/",
    tech: ['React Native', 'TypeScript', 'Redux Sagas']
  },
  {
    title: "DosifiApp",
    image: "/images/padel.png",
    description:
      "Aplicacion movil encargada de llevar registro de dosificiaciones diarias de piscicultores y comunicacion en tiempo real.",
    link: "",
    tech: ['React Native', 'TypeScript', 'Redux Sagas']
  },
];
