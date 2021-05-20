import * as React from 'react';
import api from '../api';

import { BlogPost } from '../types';

let count = 0;

type Props = {
  id: BlogPost['id'];
};

type State = {
  blogPost: BlogPost | undefined;
};

export default class BlogPostView extends React.Component<Props, State> {
  state: State = {
    blogPost: api.getBlogPost(this.props.id),
  };

  componentDidMount() {
    api.addChangeListener(`blog-post-${++count}`, this.handleChange);
  }

  componentWillUnmount() {
    api.removeChangeListener(`blog-post-${count}`);
  }

  handleChange = () => {
    this.setState({
      blogPost: api.getBlogPost(this.props.id),
    });
  };

  render() {
    const blogPost = this.state.blogPost;

    if (!blogPost) {
      return <p>Couldn't find a blog post with a given ID.</p>;
    }
    const { title, text, author, img } = blogPost;

    return (
      <div>
        <h2>{title}</h2>
        <img src={img} alt={title} />
        <p>
          {text} &mdash; <strong>{author}</strong>
        </p>
      </div>
    );
  }
}
