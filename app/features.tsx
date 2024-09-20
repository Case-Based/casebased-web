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

interface FeatureProps extends Feature {
  id: number
  selectable?: boolean
}

export const Features = () => {

  const [currentFeature, setCurrentFeature] = useState<number>(0)
  const Feature = ({title, text, id, selectable}: FeatureProps ) => {
      return (
        <div className={cn("w-full min-w-fit min-h-20 bg-card h-20 rounded-xl px-5 flex flex-col justify-center", id === currentFeature && selectable || !selectable ? "border-border border-1 border" : "", id === currentFeature && selectable ? "drop-shadow-xl" : "")} onClick={selectable ? () => setCurrentFeature(id) : () => {}}>
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
    <>
      <div className={"hidden lg:flex gap-6"}>
        <div className={"w-1/2 flex flex-col gap-y-4"}>
          {
            features.map((feature: Feature, index) => <Feature title={feature.title} text={feature.text}
                                                               key={feature.title} id={index} selectable/>)
          }
        </div>
        <div className={"w-1/2 flex flex-col gap-y-4"}>
          <CodeField/>
        </div>
      </div>
      <div className={"flex flex-col lg:hidden gap-6"}>
          {
            features.map((feature: Feature, index) =>
                <div className={"flex flex-col gap-y-4"}>
                  <Feature title={feature.title} text={feature.text}
                           key={feature.title} id={index} selectable={false}/>
                  <CodeField/>
              </div>
          )}
      </div>
    </>
  )
}

const CodeField = () => {
  return (
    <div className={"w-full h-fit bg-card rounded-xl p-8 border-border border-1 border overflow-scroll text-nowrap"}>
      <div className={"w-full text-md font-thin font-mono selection:!text-black selection:bg-red-400/30"}>
        <span className={"text-gray-400"}># create the casebased instance</span> <br className="hidden sm:inline"/>
          instance = cb.<span className={"text-blue-500"}>new_instance()</span> <br className="hidden sm:inline"/>
          <span className={"text-gray-400"}># load historical data as knowledge </span><br className="hidden sm:inline"/>
          instance.<span className={"text-blue-500"}>add_knowledge(“historical.csv”)</span> <br className="hidden sm:inline"/>
          <span className={"text-gray-400"}># learn the data </span><br className="hidden sm:inline"/>
          <div>instance.<span className={"text-blue-500"}>compile() </span></div><br className="hidden sm:inline"/>
        </div>
      </div>
  )
}
