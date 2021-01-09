import { FC } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Work from "@material-ui/icons/Work";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { experience } from "./config";
import { Box, Button } from "@material-ui/core";

const Experience: FC = () => {
    return (
        <Box mt={3} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" gutterBottom>
                Experience
            </Typography>
            <Timeline align="left">
                {experience.map((exp, expIndex) => {
                    return (
                        <TimelineItem key={expIndex}>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    {`${exp.from} - ${exp.to}`}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <Work />
                                </TimelineDot>
                                {expIndex + 1 !== experience.length && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper>
                                    <Box p={2}>
                                        <Typography variant="h6">{exp.jobTitle}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {`${exp.company} - ${exp.location}`}
                                        </Typography>
                                        <Typography>{exp.description}</Typography>
                                        <ul>
                                            {exp.details.map((detail, detailIndex) => {
                                                return <li key={detailIndex}>{detail}</li>;
                                            })}
                                        </ul>
                                        {exp.link && (
                                            <Box mt={1}>
                                                <a href={exp.link} target="_blank" rel="noreferrer">
                                                    <Button size="small">
                                                        <i
                                                            style={{ marginRight: "5px" }}
                                                            className={"fa fa-link"}
                                                        ></i>
                                                        Check out
                                                    </Button>
                                                </a>
                                            </Box>
                                        )}
                                    </Box>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    );
                })}
            </Timeline>
        </Box>
    );
};

export default Experience;
