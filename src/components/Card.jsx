import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const MemeCard = (props) => {
    const navigate = useNavigate();

    return (
        <Card style={{ width: '18rem', margin: "15px" }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button
                    onClick={() => navigate(`/edit?url=${encodeURIComponent(props.img)}`)} // Corrected the URL interpolation
                    variant="primary">
                    Edit
                </Button>
            </Card.Body>
        </Card>
    );
};

export default MemeCard;
