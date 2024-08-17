import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// I used a json-server to create a fake REST API for this project.
const API_URL = 'http://localhost:4000/comments';

const bookTitles = [
  "The Blade Itself",
  "Before They Are Hanged",
  "Last Argument of Kings",
  "Best Served Cold",
  "The Heroes",
  "Red Country",
  "A Little Hatred",
  "The Trouble With Peace",
  "The Wisdom of Crowds"
];
// Here are the CRUD functions for the message board:
function MessageBoard() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    book: '',
    rating: '',
    user: '',
    content: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setAlert({ type: 'danger', message: 'Error fetching posts. Please try again.' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `${API_URL}/${editingId}` : API_URL;
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      setAlert({ 
        type: 'success', 
        message: editingId ? 'Post updated successfully!' : 'New post added successfully!' 
      });
      fetchPosts();
      setFormData({ book: '', rating: '', user: '', content: '' });
      setEditingId(null);
    } catch (error) {
      console.error('Error submitting post:', error);
      setAlert({ type: 'danger', message: 'Error submitting post. Please try again.' });
    }
  };

  const handleEdit = (post) => {
    setFormData(post);
    setEditingId(post.id);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Network response was not ok');
      fetchPosts();
      setAlert({ type: 'success', message: 'Post deleted successfully!' });
    } catch (error) {
      console.error('Error deleting post:', error);
      setAlert({ type: 'danger', message: 'Error deleting post. Please try again.' });
    }
  };

  // here is where the message board is rendered
  return (
    <Container className="my-5 new-amsterdam-regular">
      <h2 className="mb-4 text-center">First Law Series Message Board</h2>
      {alert && (
        <Alert variant={alert.type} onClose={() => setAlert(null)} dismissible>
          {alert.message}
        </Alert>
      )}
      <Card className="mb-4 shadow">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Book</Form.Label>
              <Form.Select 
                name="book" 
                value={formData.book} 
                onChange={handleInputChange}
                required
              >
                <option value="">Select a book</option>
                {bookTitles.map((title) => (
                  <option key={title} value={title}>{title}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Select 
                name="rating" 
                value={formData.rating} 
                onChange={handleInputChange}
                required
              >
                <option value="">Select a rating</option>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>{rating} Star{rating !== 1 ? 's' : ''}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                name="user" 
                value={formData.user} 
                onChange={handleInputChange}
                required
                placeholder="Enter your username"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                name="content" 
                value={formData.content} 
                onChange={handleInputChange}
                required
                placeholder="Share your thoughts about the book"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              {editingId ? 'Update Post' : 'Submit Post'}
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map(post => (
          <Col key={post.id}>
            <Card className="h-100 shadow-sm">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <span>{post.book}</span>
                <span className="badge bg-primary nanum"> {post.rating}/5</span>
              </Card.Header>
              <Card.Body>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <small>Posted by: {post.user}</small>
                <div>
                  <Button variant="outline-primary" size="sm" className="me-2" onClick={() => handleEdit(post)}>
                    Edit
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(post.id)}>
                    Delete
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MessageBoard;