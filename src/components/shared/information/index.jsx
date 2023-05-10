import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses,
} from "@mui/lab";

import { useSelector } from "react-redux";
import { selectMode } from "../../redux/features/modeSlice";

const Information = ({ data }) => {
  const mode = useSelector(selectMode);

  const { content, oppositeContent } = data;
  return (
    <>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: mode ? "white" : "black", transitionDuration: "500ms" }} />
            <TimelineConnector
              sx={{ bgcolor: mode ? "white" : "black", transitionDuration: "500ms" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <small>
              <i>{oppositeContent} : </i>
            </small>
            <span className="break-all font-semibold">{content}</span>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default Information;
