import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
let totalCount = 0;
let positivePercentage = 0;
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    this.setState(prev => {
      this.countPositiveFeedbackPercentage(
        e.target.name === 'good' ? prev.good + 1 : prev.good
      );
      return { [e.target.name]: prev[e.target.name] + 1 };
    });
    this.countTotalFeedback();
  };
  countTotalFeedback = () => {
    totalCount += 1;
  };
  countPositiveFeedbackPercentage = goodCount => {
    positivePercentage = ((goodCount / totalCount) * 100).toFixed();
  };
  render() {
    return (
      <div
        style={{
          color: '#010101',
          padding: '20px',
        }}
      >
        <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          title="Please leave feedback"
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={totalCount}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}
export default App;
