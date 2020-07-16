import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardActions, CardContent, Typography, Box, Button } from '@material-ui/core';

const renderCards = () => {
    return (
        <Card variant="outlined" style={{ display: "inline-block", width: "30vw", margin: "0 1rem" }}>
            <Link to="/">
                <CardContent>
                    <Typography component="h2" variant="h2" color="textPrimary" gutterBottom>
                        <Box>{article.title}</Box>
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        <Box>{article.subtitle}</Box>
                    </Typography>
                </CardContent>
                <CardActions style={{ padding: "0 1rem" }}>
                    <Typography variant="body2" gutterBottom color="textPrimary">
                        <Box>by {article.author}</Box>
                        <Box>{arrMonths[new Date(article.writtenIn).getMonth()]} {new Date(article.writtenIn).getDate()}, {new Date(article.writtenIn).getFullYear()}</Box>
                    </Typography>
                </CardActions>
            </Link>
        </Card>
    );
}

const arrMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Test Article Object
const article = {
    title: "Paquito, el Chocolatero es detenido hace escasas horas por alteración del orden público y del buen gusto.  ",
    subtitle: "Será condenado a chocolate bajo en calorías de manera perpétua.",
    author: "Erix Mamani Surname-In-Progress",
    writtenIn: 1594805263110
}

const Library = () => {
    return (
        <div style={{ width: "100vw", display: "flex", flexFlow: "row wrap", justifyContent: "space-between" }}>
            <div style={{ padding: "1rem" }} >
                dsadasd
            </div>
            <div style={{ display: "flex", width: "70vw", padding: "1rem", display: "1rem", flexFlow: "row wrap", justifyContent: "center" }}>
                {renderCards()}
                {renderCards()}
                {renderCards()}
                {renderCards()}
                {renderCards()}
                {renderCards()}
                {renderCards()}
                {renderCards()}
                {renderCards()}
                {renderCards()}
                {renderCards()}
            </div>
            <div style={{ padding: "1rem" }} >
                dsadasd
            </div>

        </div>
    );
};

export default Library;