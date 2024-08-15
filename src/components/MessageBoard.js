import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, ListGroup, Badge } from 'react-bootstrap';
import { NIL as NIL_UUID } from 'uuid';

const API_URL = 'https://667b271abd627f0dcc91d6ca.mockapi.io/Promineo_Tech_API/posts';

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

function MessageBoard() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    book: '',
    username: '',
    content: '',
    rating: ''
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(API_URL);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, newPost);
      } else {
        await axios.post(API_URL, newPost);
      }
      fetchPosts();
      setNewPost({ book: '', username: '', content: '', rating: '' });
      setEditingId(null);
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  const handleEdit = (post) => {
    setNewPost(post);
    setEditingId(post.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <Container className="my-5">
      <h2>Message Board</h2>
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Book</Form.Label>
          <Form.Select 
            name="book" 
            value={newPost.book} 
            onChange={handleInputChange}
            required
          >
            <option value="">Select a book</option>
            {bookTitles.map((title, index) => (
              <option key={index} value={title}>{title}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            name="username" 
            value={newPost.username} 
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Select 
            name="rating" 
            value={newPost.rating} 
            onChange={handleInputChange}
            required
          >
            <option value="">Select a rating</option>
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>{rating}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Comment</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            name="content" 
            value={newPost.content} 
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {editingId ? 'Update Post' : 'Submit Post'}
        </Button>
      </Form>

      <ListGroup>
        {posts.map(post => (
          <ListGroup.Item key={post.id} className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{post.book}</div>
              <p>{post.content}</p>
              <small>Posted by: {post.username}</small>
            </div>
            <Badge bg="primary" pill>
              Rating: {post.rating}
            </Badge>
            <Button variant="outline-secondary" size="sm" className="ms-2" onClick={() => handleEdit(post)}>
              Edit
            </Button>
            <Button variant="outline-danger" size="sm" className="ms-2" onClick={() => handleDelete(post.id)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default MessageBoard;