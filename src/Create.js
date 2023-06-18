import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('nan');

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog title</label>
                <textarea
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <select
                    value = {author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value='mario'>mario</option>
                    <option value='yoshi'>yoshi</option>
                </select>
                <button>Add me</button>

                <p>{ title }</p>
                <p>{ body }</p>
            </form>
        </div>
    );
}

export default Create;