"use client";

import {useState} from "react";
import {cn} from "@/lib/utils";
import {Code, Code2} from "lucide-react";

interface Feature {
  title: string
  text: string
}

const features : Feature[] = [
  {
    title: "Load Historical Data",
    text: "The simplest way to create a case base",
  },
  {
    title: "Create cases",
    text: "Load or create the problem cases",
  },
  {
    title: "Run the Hybrid System",
    text: "Get insights and recommendations",
  },
  {
    title: "Review",
    text: "Understand the reasoning behind the recommendation",
  },
  {
    title: "Export",
    text: "Export the results to a format of your choice",
  }
]

const CodeField = () => {
  return (
    <div className="w-full h-fit mx-auto bg-card rounded-xl p-8 border-border border-1 border">
      <div className="text-sm font-thin font-mono selection:!text-black selection:bg-red-400/30 overflow-x-auto scrol">
        <div className={"whitespace-pre"}>
          <div className={"inline"}>import <span className={"text-blue-500"}>numpy</span> as <span className={"text-blue-500"}>np</span>
          </div>
          {'\n'}
          <div className={"inline"}>def  <span className={"text-red-400"}>hello_world():</span></div>
          {'\n'}
          {'\t'}
          <div className={"inline"}>print(<span className={"text-green-800"}>&quot;Hello World!&quot;</span>)</div>{'\n'}
        </div>
      </div>
    </div>
  )
}

const codeFields = [
  <CodeField />,
  <><CodeField />
  <CodeField /></>,
  <><CodeField />
    <CodeField />
    <CodeField /></>,
  <><CodeField />
    <CodeField /></>,
  <><CodeField />
    <CodeField />
    <CodeField />
    <CodeField />
    <CodeField /></>
]

interface FeatureProps extends Feature {
  id: number
  selectable?: boolean
}

export const Features = () => {

  const [currentFeature, setCurrentFeature] = useState<number>(0)
  const Feature = ({title, text, id, selectable}: FeatureProps ) => {
      return (
        <div className={cn("w-full h-fit min-h-20 bg-card rounded-xl px-5 flex flex-col justify-center", id === currentFeature && selectable || !selectable ? "border-border border-1 border" : "", id === currentFeature && selectable ? "drop-shadow-xl" : "")} onClick={selectable ? () => setCurrentFeature(id) : () => {}}>
          <div className={cn("text-xl font-bold", id === currentFeature && selectable  || !selectable ? "text-red-400" : "text-card-foreground")}>
            {title}
          </div>
          <div className={"text-md text-card-foreground"}>
            {text}
          </div>
        </div>
      )
  }

  return (
    <div className={"w-full"}>
      <div className={"hidden md:flex gap-6 mx-auto"}>
        <div className={"w-1/2 flex flex-col gap-y-4"}>
          {
            features.map((feature: Feature, index) => <Feature title={feature.title} text={feature.text}
                                                               key={feature.title} id={index} selectable/>)
          }
        </div>
        <div className={"w-1/2 flex flex-col gap-y-4 mx-auto"}>
          {codeFields[currentFeature]}
        </div>
      </div>
      <div className={"flex flex-col lg:hidden gap-6 mx-auto"}>
        {
          features.map((feature: Feature, index) =>
          <div className={"flex flex-col gap-y-4"}>
            <Feature title={feature.title} text={feature.text} key={feature.title} id={index}/>
            {codeFields[index]}
          </div>
          )
        }
      </div>
    </div>
  )
}
