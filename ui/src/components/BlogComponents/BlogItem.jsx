import React from 'react';
import { Button, ListGroup, Card, Col } from 'react-bootstrap';

const BlogItem = ({ item, onDelete, onSelect, onEdit, isAdmin }) => (
<ListGroup.Item onClick={() => onSelect(item)}>
<Card style={{ cursor: 'pointer', marginBottom: '10px', borderRadius: '10px' }}>
    <Card.Body>
    <Card.Title style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', textDecoration: 'underline' }}>
        {item.title}
    </Card.Title>
    <Card.Subtitle style={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }}>Author: {item.author}</Card.Subtitle>
    <Card.Text style={{ fontSize: '16px' }}>{item.content}</Card.Text>
    {isAdmin && (
        <div className="d-flex">
        <Button
            variant="primary"
            style={{ marginRight: '10px' }}
            onClick={(e) => {
            e.stopPropagation();
            onEdit(item);
            }}
        >
            Edit
        </Button>
        <Button
            variant="danger"
            onClick={(e) => {
            e.stopPropagation();
            onDelete(item.id);
            }}
        >
            Delete
        </Button>
        </div>
    )}
    </Card.Body>
</Card>
</ListGroup.Item>
);

export default BlogItem;
