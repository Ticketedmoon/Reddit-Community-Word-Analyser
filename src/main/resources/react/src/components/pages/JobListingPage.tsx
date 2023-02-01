import React from "react";
import {JobMetadata} from "../types/JobMetadata";
import {Box, Button} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Link, useLoaderData} from "react-router-dom";

export const JobListingPage: React.FC = () => {

    const jobs: JobMetadata[] = useLoaderData() as JobMetadata[];

    return (
        <Box>
            <Box pt={5} pl={10} pr={10} display="flex" flexDirection="column">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Job ID</TableCell>
                                <TableCell align="right">Subreddit</TableCell>
                                <TableCell align="right">Start Time</TableCell>
                                <TableCell align="right">Completion Time</TableCell>
                                <TableCell align="right">Total Scanned Posts</TableCell>
                                <TableCell align="center">✅</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {jobs.map((jobMetadata, index) => (
                                <TableRow key={jobMetadata.id + "-" + index}
                                          sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                    <TableCell component="th" scope="row">{jobMetadata.id}</TableCell>
                                    <TableCell align="right">{jobMetadata.subreddit}</TableCell>
                                    <TableCell align="right">{jobMetadata.jobStartTime}</TableCell>
                                    <TableCell align="right">{jobMetadata.jobFinishTime}</TableCell>
                                    <TableCell align="right">{jobMetadata.totalPostsToScan}</TableCell>

                                    {/* TODO Apply nicer design for button */}
                                    <TableCell>
                                        <Link to={`/results/${jobMetadata.id}`}>
                                            <Button variant="contained"
                                                    color="success">
                                                View Results
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}