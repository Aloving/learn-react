import React from 'react';

import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

function App({ store }) {
  return (
    <main>
      <Header store={store} />

      <List store={store} />

      <Form store={store} />
    </main>
  );
}

App.propTypes = {
  initialData: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      completed: React.PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default App;
