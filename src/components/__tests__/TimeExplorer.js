import React from 'react'; // eslint-disable-line no-unused-vars
import renderer from 'react-test-renderer';

import Dummy from '../Dummy';

test('Component renders', () => {
    const component = renderer.create(
        <Dummy />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
