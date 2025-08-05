"use client";
import { cn } from "@/lib/utils";
import { ComponentPropsDefault } from "@/types/component-props";
import { TitleTypography } from "@/app/_components/shared/typography/title";
import { DescriptionTypography } from "../../shared/typography/description";
import { SocialMediasContact } from "../../shared/social-medias";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export const AboutSection = ({ className }: ComponentPropsDefault) => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(".boxTexts", {
      scale: 0.9,
      opacity: 0,
      scrollTrigger: {
        trigger: "#principle-title",
        start: "top 1200",
        end: "bottom 600",
        scrub: 1,
      },
    }).from(".imagem", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".imagem",
        start: "bottom 900",
        end: "bottom 600",
        scrub: 1,
      },
    });
  });

  return (
    <section
      id="about"
      className={cn(
        "flex flex-col w-full min-h-[810px] items-center justify-center gap-10 pt-20",
        className
      )}
    >
      <div className="space-y-5 grid sm:grid-cols-2  justify-between gap-14 w-full max-w-lg sm:container  mx-auto grid-cols-1 items-center">
        {/* <TitleTypography
          id="title"
          size="lg"
          fontWeight="font-bold"
          className=" text-center max-[1240px]:block  max-[1240px]:max-w-[360px] min-[1240px]:hidden"
        >
          Conheça um pouco mais sobre mim.
        </TitleTypography> */}

        <div className="imagem flex flex-col gap-6 h-full ">
          <div className="flex w-full h-full min-h-72 sm:min-h-max border relative flex-col items-center gap-5 rounded-2xl bg-zinc-800 overflow-clip -z-20">
            <Image
              src={"https://github.com/KARAUJO1003.png"}
              alt="Foto do desenvolvedor"
              draggable={false}
              className="object-cover z-20"
              sizes="(max-width: 1024px) 100vw"
              priority
              fill
            />
          </div>

          <SocialMediasContact
            variant="full"
            className="h-fit justify-between bg-muted/30 gap-0 border w-full rounded-2xl p-1"
          />
        </div>

        <article
          id="boxTexts"
          className="flex flex-col max-w-lg gap-5 max-[1240px]:max-w-80 boxTexts"
        >
          <TitleTypography
            size="lg"
            fontWeight="font-bold"
            className="text-start max-[1240px]:hidden"
          >
            Conheça um pouco mais sobre mim.
          </TitleTypography>

          <DescriptionTypography className="text-start ">
            Olá, sou <strong>Kaésyo</strong>, estudante de{" "}
            <strong>Engenharia de Software</strong> Com uma mente inquisitiva e
            um amor pelo desafio, estou em busca de oportunidades, que me
            permitam expandir meu horizonte de habilidades e colaborar em
            projetos inovadores. <br />
            <br />
            Possuo conhecimentos com as principais ferramentas do
            desenvolvimento WEB como{" "}
            <strong>
              HTML, CSS, JavaScript, React, Next, Node, ShadcnUi, Tailwind,
              MongoDb, Postgresql, Axios
            </strong>
            , entre outras... <br />
            <br />
            Se você se interessou e pretende conhecer mais sobre meu trabaho, me
            acompanhe nas redes sociais e vamos evoluir juntos! será um grande
            prazer trocar experiências com você nessa jornada de aprendizado.
          </DescriptionTypography>
        </article>
      </div>
    </section>
  );
};
