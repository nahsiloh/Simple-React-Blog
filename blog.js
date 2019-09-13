const root = document.querySelector("#blog");

function Post(prop) {
  return (
    <div>
      <article>
        <h2>{prop.title}</h2>
        <p>Written by: {prop.author}</p>
        <p>{prop.date}</p>
      </article>
    </div>
  );
}

class Blog extends React.Component {
  render() {
    return (
      <h1>My Blog Post</h1>
      <div>
        <Post title="Blog One" author="Thing 1" date="13 Sep 2019" />
        <Post title="Blog Two" author="Thing 2" date="13 Sep 2019" />
        <Post title="Blog Three" author="Thing 3" date="13 Sep 2019" />
      </div>
    );
  }
}

ReactDOM.render(<Blog />, root);
