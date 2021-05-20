import { log, warn } from '../helpers/logger';
import { Comments } from '../types';
import { createComment } from './faker';

/**
 * How often should the api call all its listeners
 */
const intervalInSeconds = 2;

type Id = string;
type Handler = (...args: any[]) => void;
type Listener = {
  id: Id;
  handler: Handler;
};
type Listeners = Listener[];

/**
 * Fake data source
 *
 * It's job is to call all its listeners with some fake data
 */
export default class DataSource {
  private intervalId = 0;
  private listeners: Listeners = [];
  private comments: Comments = [];

  addChangeListener(id: Id, handler: Handler) {
    this.listeners = [...this.listeners, { id, handler }];
  }

  removeChangeListener(id: Id) {
    this.listeners = this.listeners.filter(l => l.id !== id);
  }

  getComments() {
    return this.comments;
  }

  /**
   * Start running interval
   */
  start() {
    if (this.intervalId) {
      warn(`⚠️ Whoaaa, slow down, it's already running!`);
      return;
    }

    /**
     * When the interval is running it will update the data
     * and then notify all the listeners
     */
    const id = window.setInterval(() => {
      log('⏰ Tick');

      this.comments = [...this.comments, createComment()];

      for (const listener of this.listeners) {
        listener.handler();
      }
    }, intervalInSeconds * 1000);

    log('✅ Started interval');
    this.intervalId = id;
  }

  /**
   * Clear running interval if any
   */
  stop() {
    if (this.intervalId) {
      log('✅ Interval cleared');
      clearInterval(this.intervalId);
      this.intervalId = 0;
    } else {
      warn('⚠️ No interval to clear mate');
    }
  }
}
