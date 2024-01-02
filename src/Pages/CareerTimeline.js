import React from "react";
import Timeline from "@mui/lab/Timeline";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { BackgroundImage, CareerTimelineOppositeContent, Overlay, TimelineContainer, TimelineJobCompany, TimelineJobContainer, TimelineJobDescription, TimelineJobPosition, TimelineOppositeText, TimelineStyled } from "../style";
import { career } from "../Constants/CareerConsts";
import bg from "../Assets/Images/pexels-photo-210186.jpeg"
import {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const CareerTimeline = () => {
  return (
    <div>
    <BackgroundImage src={bg}/>
    <Overlay />
    <TimelineContainer>
      <TimelineStyled sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}>
        {career.map((job) => (
          <TimelineItem>
          <CareerTimelineOppositeContent>
            <TimelineOppositeText>{job.time}</TimelineOppositeText>
          </CareerTimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineJobContainer>
                <TimelineJobCompany>{job.company}</TimelineJobCompany>
                <TimelineJobPosition>{job.position}</TimelineJobPosition>
                <hr style={{color: 'white'}} />
                <TimelineJobDescription>{job.description}</TimelineJobDescription>
              </TimelineJobContainer>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineStyled>
    </TimelineContainer>
    </div>
  );
};

export default CareerTimeline;
