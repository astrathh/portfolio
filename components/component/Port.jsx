/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/vY2dtU9qPPD
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Rubik } from 'next/font/google'

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Port() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CodeIcon className="h-6 w-6" />
          <span className="sr-only">Victor Astrath Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Projetos
          </Link>
          <Link
            href="#habilidades"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Habilidades
          </Link>
          <Link
            href="#contato"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Contato
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="flex justify-center pt-12 md:pt-24 lg:pt-32">
          <div className="container max-w-[1080px] space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1
                  className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Victor Astrath
                </h1>
                <h2 className="text-2xl font-bold tracking-tighter mt-2">Full-Stack Developer</h2>
                <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Sou um desenvolvedor full-stack apaixonado por programação, com experiência em construir aplicativos web modernos,
                 escaláveis ​​e fáceis de usar. Sou especialista em tecnologias como React, Node.js, PHP e PostgreSQL,
                  e estou sempre disposto a aprender e implementar as melhores e mais recentes práticas do mercado.
                </p>
                <div className="mt-6 space-x-4">
                  <Link
                    href="#projetos"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Ver projetos
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Entre em contato
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="400"
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover" />
              </div>
            </div>
          </div>
        </section>
        <section id="projetos" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meus Projetos</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Aqui estão alguns dos meus projetos mais recentes que eu construí. Clique no botão para ver mais.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="group">
                <CardHeader>
                  <CardTitle>Landing Page "Growth Funnels"</CardTitle>
                  <CardDescription>
                    Uma landing page moderna e responsiva para uma empresa de marketing digital, utilizando a tecnologia Webflow.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="E-commerce Platform"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center" />
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Ver Projeto
                  </Link>
                </CardFooter>
              </Card>
              <Card className="group">
                <CardHeader>
                  <CardTitle>"Eletricar"</CardTitle>
                  <CardDescription>
                    Um e-commerce de carros elétricos com um design moderno e responsivo, utilizando Tailwind CSS, PHP e PostgreSQL
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Task Management App"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center" />
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Ver Projeto
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="habilidades" className="flex justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Minhas habilidades</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Eu sou um desenvolvedor full-stack com experiência em construir aplicativos web modernos e escaláveis.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Front-end</h3>
                <p className="text-sm text-muted-foreground">React, Next.js, HTML, CSS, JavaScript</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Back-end</h3>
                <p className="text-sm text-muted-foreground">Node.js, Express, MySQL PostgreSQL, RESTful APIs</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">DevOps</h3>
                <p className="text-sm text-muted-foreground">Git, GitHub, AWS, CI/CD</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contato"className=" flex justify-center w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Entre em contato comigo!</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estou sempre aberto a novos projetos e oportunidades. Entre em contato comigo e vamos conversar sobre o seu projeto.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Insira seu email" className="max-w-lg flex-1" />
                  <Button type="submit">Me contate</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Victor Astrath. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            Termos de Serviço
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            Politica de Privacidade
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

function CodeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>)
  );
}