"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Fragment } from "react";
import "react-vertical-timeline-component/style.min.css";

import { cn } from "@/lib/utils";
import { experiencesData } from "@/constant";
import useSectionInView from "@/hooks/useSectionInView";
import SectionHeading from "@/components/ui/section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28">
      <SectionHeading title="Experience" />

      <VerticalTimeline lineColor="">
        {experiencesData.map(
          ({ date, icon, title, location, description }, index) => (
            <Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  backgroundColor: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0 0 0 / 0.05",
                  padding: "1.2rem 2rem",
                  textAlign: "left",
                }}
                contentArrowStyle={{
                  borderRight: ".4rem solid #f3f4f6",
                }}
                date={date}
                icon={icon}
                iconStyle={{
                  background: "white",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{title}</h3>
                <p className={cn("mt-0 font-normal")}>{location}</p>
                <p className={cn("mt-0 text-gray-700")}>{description}</p>
              </VerticalTimelineElement>
            </Fragment>
          ),
        )}
      </VerticalTimeline>
    </section>
  );
}
