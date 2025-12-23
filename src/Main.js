function Main({ activeNote, handleChangeTitle, handleChangeBody }) {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          placeholder="Untitled Note"
          type="text"
          id="title"
          value={activeNote?.title}
          autoFocus
          onChange={handleChangeTitle}
        />
        <textarea
          id="body"
          placeholder="write your note here....."
          value={activeNote?.body}
          onChange={handleChangeBody}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote?.title}</h1>
        <div className="markdown-preview">{activeNote?.body}</div>
      </div>
    </div>
  );
}
export default Main;
