import React from "react";
import {BriefcaseIcon} from "@heroicons/react/solid";
import {experiences} from "../data";

export default function Experience() {
    return (
        <section id="experience">
            <div className="container px-2 py-8 mx-auto text-center">
                <BriefcaseIcon className="w-10 inline-block mb-4"/>
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Work experience
                </h1>
                <div className="flex flex-col place-items-center m-4">
                    {experiences.map((experience) => (
                        <a className="p-16 md:w-1/2 py-5" href={experience.link} target="_blank" key={experience.company}>
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                <div className="inline-flex items-center">
                                    <img
                                        alt="testimonial"
                                        src={experience.image}
                                        className="w-24 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-green-400 text-2xl py-1">
                      {experience.company}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {experience.name}
                    </span>
                                        <span className="text-sm text-white mb-1 py-1">
                                        {experience.position}
                                    </span>
                  </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

