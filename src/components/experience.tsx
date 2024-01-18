"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Fragment } from "react";
import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "@/constant";
import useSectionInView from "@/hooks/useSectionInView";
import SectionHeading from "@/components/ui/section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28  sm:mb-24">
      <SectionHeading title="Experience" />

      <VerticalTimeline lineColor="#fff">
        {experiencesData.map(
          ({ date, icon, title, location, description }, index) => (
            <Fragment key={index}>
              <VerticalTimelineElement
                visible
                contentStyle={{
                  backgroundColor: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0 0 0 / 0.05",
                  textAlign: "left",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #f3f4f6",
                }}
                date={date}
                icon={icon}
                iconStyle={{
                  background: "white",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="text-xl font-semibold capitalize">{title}</h3>
                <p className="!mt-0 font-normal">{location}</p>
                <p className="text-gray-700">{description}</p>
              </VerticalTimelineElement>
            </Fragment>
          ),
        )}
      </VerticalTimeline>
    </section>
  );
}
