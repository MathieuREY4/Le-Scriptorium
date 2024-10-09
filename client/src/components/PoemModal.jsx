import { useState } from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

export default function PoemModal({ poem, closeModal, setCommentsCount }) {
  const [comments, setComments] = useState([
    {
      id: 1,
      user_id: 1,
      username: "User1",
      content: "Super poème !",
      created_at: new Date().toISOString(),
    },
    {
      id: 2,
      user_id: 2,
      username: "User2",
      content: "Magnifique",
      created_at: new Date().toISOString(),
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handlePostComment = () => {
    if (!newComment) return;
    const newCommentData = {
      id: comments.length + 1,
      user_id: 1,
      username: "CurrentUser",
      content: newComment,
      created_at: new Date().toISOString(),
    };
    setComments([...comments, newCommentData]);
    setNewComment("");
    setCommentsCount((prevCount) => ({
      ...prevCount,
      [poem.id]: prevCount[poem.id] + 1,
    }));
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
    setCommentsCount((prevCount) => ({
      ...prevCount,
      [poem.id]: prevCount[poem.id] - 1,
    }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{poem.title}</h3>
        <p>{poem.content}</p>

        <div className="comments-section">
          <h4>Commentaires</h4>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              commentary={comment}
              handleDeleteComment={handleDeleteComment}
            />
          ))}

          <div className="add-comment">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Écrire un commentaire..."
            />
            <button type="button" onClick={handlePostComment}>
              Poster
            </button>
          </div>
        </div>

        <button type="button" className="close-modal" onClick={closeModal}>
          Fermer
        </button>
      </div>
    </div>
  );
}

PoemModal.propTypes = {
  poem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
  setCommentsCount: PropTypes.func.isRequired,
};
