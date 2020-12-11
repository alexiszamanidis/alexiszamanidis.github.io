import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { mainColumns, skillFields, skills } from "./config";

function Skills() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {mainColumns.map((column, index) => (
                            <TableCell key={index}>
                                <b>{column.name.toUpperCase()}</b>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {skills.map((skill: any, index) => {
                        return (
                            <TableRow key={index}>
                                {skillFields.map((field: any, index) => {
                                    return <TableCell key={index}>{skill[field.name]}</TableCell>;
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Skills;
