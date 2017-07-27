import { observable } from 'mobx';

export default class ObservableTopicStore {
  @observable topics = [];

  addTopic(topic) {
    this.topics.push(topic);
  }
}
