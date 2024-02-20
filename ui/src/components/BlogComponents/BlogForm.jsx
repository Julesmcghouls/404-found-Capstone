// BlogForm.js
import React from "react";
import { Form, Button } from "react-bootstrap";

// BlogForm component for adding/editing a blog post
const BlogForm = ({
    error,
    onSubmit,
    onChangeTitle,
    onChangeContent,
    onChangeAuthor,
    newPostTitle,
    newPostContent,
    newPostAuthor,
}) => {
    return (
        <Form>
            {/* Title input */}
            <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={newPostTitle}
                    onChange={(e) => onChangeTitle(e.target.value)}
                />
            </Form.Group>

            {/* Author input */}
            <Form.Group controlId="formAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter author"
                    value={newPostAuthor}
                    onChange={(e) => onChangeAuthor(e.target.value)}
                />
            </Form.Group>

            {/* Content input */}
            <Form.Group controlId="formContent">
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter content"
                    value={newPostContent}
                    onChange={(e) => onChangeContent(e.target.value)}
                />
            </Form.Group>

            {/* Error message */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Submit button */}
            <Button variant="primary" onClick={onSubmit}>
                Submit
            </Button>
        </Form>
    );
};

export default BlogForm;
