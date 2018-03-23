import React from 'react';
import Book from '../src/Book'
import renderer from 'react-test-renderer';


test('Book name equals The Shinning',() => {
    const component = renderer.create(
        <Book />
      );
})