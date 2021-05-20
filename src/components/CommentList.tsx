import * as React from 'react';
import api from '../api';

import { Comments } from '../types';
import { CommentListItem } from './CommentListItem';

type State = {
  comments: Comments;
};

export default class CommentList extends React.Component<unknown, State> {
  state: State = {
    // "api" is some global data source
    comments: api.getComments(),
  };

  componentDidMount() {
    // Subscribe to changes
    api.addChangeListener('comment-list', this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    api.removeChangeListener('comment-list');
  }

  handleChange = () => {
    // Update component state whenever the data source changes
    this.setState({
      comments: api.getComments(),
    });
  };

  render() {
    return (
      <div>
        {this.state.comments.map(comment => (
          <CommentListItem comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}
