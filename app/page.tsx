import Link from "next/link"

import { siteConfig } from "@/config/site"
import {Button, buttonVariants} from "@/components/ui/button"
import {CheckIcon, CopyIcon} from "lucide-react";
import {PipButton} from "@/components/home/pip-button";
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

import heroImage from "public/HeroImage.png"
import nextJs from "public/nextjs.png"
import ollama from "public/ollama.png"
import python from "public/python.png"
import tensorflow from "public/tensorflow.png"
import sklearn from "public/sklearn.png"
import {Features} from "@/app/features";

interface Card {
  title: string
  text: string
  logo: StaticImport
}

const cards: Card[] = [
  {
    title: "Next.Js",
    text: "Launch simple, elegant dashboards on your machine and get insights.",
    logo: nextJs
  },
  {
    title: "Ollama",
    text: "Connect your own choice of LLM to CaseBased and run it locally.",
    logo: ollama
  },
  {
    title: "Python",
    text: "CaseBased is open source! Build on top of our functions with Python.",
    logo: python
  },
  {
    title: "TensorFlow",
    text: "Tensorflow powers our Hybrid System of case-based reasoning and ANNs",
    logo: tensorflow
  },
  {
    title: "Scikit-Learn",
    text: "Fully customisable machine learning behaviour at your fingertips",
    logo: sklearn
  }
]

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 overflow-x-clip">
      <div className={"w-full md:w-4/5 mx-auto "}>
        <div className="flex w-full md:w-2/3 xl:w-1/2 flex-col items-start gap-2 mt-20">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
            AI-guided decisions <br className="hidden sm:inline"/>
            made transparent.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground mb-8">
            Make quality decisions with case-based reasoning without
            being left in the dark - all local and secure! <span
            className={"underline decoration-2 font-bold"}>start now.</span>
          </p>
        </div>
        <div className="flex gap-4 mb-12">
          <PipButton/>
        </div>
        <div className={"w-full mb-12"}>
          <Image alt={"Hero Image showing the casebased workflow"} src={heroImage} className={"w-full max-w-screen mt-20"}
                 fill={false}/>
        </div>
        <div className="flex w-full md:w-2/3 xl:w-1/2 flex-col items-start gap-2 mt-20 mb-12">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
            Integrating great tools...
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Seamlessly integrated tooling, all local and free. Giving you performance and security for your case-based reasoning.
          </p>
        </div>
      </div>
      <div className={"w-full flex justify-evenly gap-6 mx-auto mb-20 overflow-x-scroll snap-x snap-proximity"}>
        {
          cards.map((card: Card) => <Card logo={card.logo} title={card.title} text={card.text} key={card.title}/>)
        }
      </div>
      <div className={"w-full md:w-4/5 mx-auto"}>
        <div className="flex w-full md:w-2/3 xl:w-1/2 flex-col items-start gap-2 mt-20 mb-8" id={"features"}>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
            To help you make right decisions
          </h1>
          <p className="text-lg text-muted-foreground">
            CaseBased offers not only a library for ML and Data Science but a fully fledged tool that integrates AI into
            your decision making workflow.
          </p>
        </div>
        <div className={"w-full"}>
          <Features />
        </div>
      </div>
    </section>
  )
}
const Card = (card: Card) => {
  return (
    <div className={"w-60 min-w-60 min-h-80 bg-card h-80 rounded-xl border border-1 border-border p-7 flex flex-col snap-start"}>
      <Image className={"h-14 w-fit mx-auto my-10"} fill={false} src={card.logo} alt={""}/>
      <div className={"text-xl font-bold text-card-foreground"}>
        {card.title}
      </div>
      <div className={"text-md text-card-foreground  overflow-y-scroll"}>
        {card.text}
      </div>
    </div>
  )
}
