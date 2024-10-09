import PropTypes from "prop-types";

export default function Comment({ commentary, handleDeleteComment }) {
  return (
    <div className="CommentItem">
      <h2>{commentary.username}</h2>
      <p>{commentary.content}</p>
      <small>{new Date(commentary.created_at).toLocaleString()}</small>
      <button onClick={() => handleDeleteComment(commentary.id)} type="button">
        Supprimer
      </button>
    </div>
  );
}

Comment.propTypes = {
  commentary: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  handleDeleteComment: PropTypes.func.isRequired,
};
