import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { mainColumns, skillFields, skillRows } from "./config";

function Skills() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {mainColumns.map((column, index) => (
                            <TableCell key={index} align="center">
                                <b>{column.name.toUpperCase()}</b>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {skillRows.map((skill: any, index) => {
                        return (
                            <TableRow key={index}>
                                {skillFields.map((field: any, index) => {
                                    return (
                                        <TableCell key={index} align="center">
                                            {skill[field.name].link !== "#/" ? (
                                                <a
                                                    href={skill[field.name].link}
                                                    rel="noreferrer"
                                                    target="_blank"
                                                >
                                                    {skill[field.name].name}
                                                </a>
                                            ) : (
                                                skill[field.name].name
                                            )}
                                        </TableCell>
                                    );
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
