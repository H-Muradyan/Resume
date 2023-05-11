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

const SequenceLine = ({ data }) => {
  const { name, position, from, till, description, icon } = data;
  const mode = useSelector(selectMode);

  console.log("SequenceLine")

  return (
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
          <TimelineDot color="inherit">{icon}</TimelineDot>
          <TimelineConnector sx={{ bgcolor: mode ? "" : "black", transitionDuration: "500ms" }} />
        </TimelineSeparator>
        <TimelineContent>
          <span className="font-bold">{name} </span>
          {position && <span className="text-sm font-bold">- {position}</span>}
          <div className="text-xs mb-4 font-semibold">
            <i>
              {from} - {till}
            </i>
          </div>
          <small className={`text-xs`}>{description}</small>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default SequenceLine;
