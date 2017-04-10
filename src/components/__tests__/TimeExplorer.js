import React from 'react';
import renderer from 'react-test-renderer';

import TimeExplorer from '../TimeExplorer';

test('Component renders', () => {
    const component = renderer.create(
        <TimeExplorer />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
