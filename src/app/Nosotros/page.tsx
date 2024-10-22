"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";
import Navbar from '../../components/navbar/Navbar'; // Importa el Navbar

const posts = [
  {
    id: 1,
    title: 'Alessandro Marconi',
    href: '#',
    description:
      'Me considero un Dev de Frontend pero me gusta un poco de todo, con conocimientos en React, PHP, Android, SQL entre otros, me encantan los sistemas y la mecanica, sobretodo hacer troubleshooting.',
    category: { title: '8-984-1052', href: '#' },
    author: {
      name: 'Alessandro Marconi',
      role: 'Desarollador - Lic. en Desarollo de Software',
      href: '#',
      imageUrl: '/media/pfp_marconi.jpg',
    },
  },
  {
    id: 2,
    title: 'Rafael Chung',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    category: { title: '8-939-1136', href: '#' },
    author: {
      name: 'Rafael Chung',
      role: 'Desarollador - Lic. en Desarollo de Software',
      href: '#',
      imageUrl: '/media/pfp_rafa.jpg',
    },
  },
  {
    id: 3,
    title: 'Alejandro Mosquera',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    category: { title: '8-972-1615', href: '#' },
    author: {
      name: 'Alejandro Mosquera',
      role: 'Desarollador - Lic. en Desarollo de Software',
      href: '#',
      imageUrl: '/media/pfp_alejando.jpg',
    },
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Navbar /> {/* Agrega el Navbar aquí */}
      <HeroHighlight>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
          >
            <Highlight className="text-black dark:text-white">
              Sobre Nosotros
            </Highlight>
          </motion.h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Aqui les contaremos un poco sobre cada uno de nosotros, los que desarollamos esta pagina web.
          </p>
        </div>
      </HeroHighlight>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <a
                href={post.category.href}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {post.category.title}
              </a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href={post.author.href}>
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </a>
                </p>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
