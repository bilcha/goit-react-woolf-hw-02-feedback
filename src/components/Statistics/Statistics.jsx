import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <Section title="Statistics">
        {this.props.total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <div>
            <p>Good: {this.props.good}</p>
            <p>Neutral: {this.props.neutral}</p>
            <p>Bad: {this.props.bad}</p>
            <p>Total: {this.props.total}</p>
            <p>Positive feedback: {this.props.positivePercentage}%</p>
          </div>
        )}
      </Section>
    );
  }
}

export default Statistics;
