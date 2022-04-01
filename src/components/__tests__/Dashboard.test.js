import React from 'react';
import { render } from '@testing-library/react';
import { PHONES } from '../../common/constants'; 
import { Dashboard } from '../Dashboard';

describe('basic smoke test', () => {
  test('renders without crashing  ', () => {
    const container = render(
          <Dashboard {...PHONES} />
    );
    expect(container).toMatchSnapshot();
  });

});
