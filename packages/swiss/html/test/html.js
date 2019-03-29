// import { spy } from 'sinon';
import { setUpScratch, tearDown, oneDefer } from '../../test/_utils.js';
import { element } from 'swiss';
import { useState } from 'swiss/hooks';
import { html } from 'swiss/html';

describe('useState', () => {
  /** @type {HTMLDivElement} */
  let scratch;

  beforeEach(() => (scratch = setUpScratch()));
  afterEach(() => tearDown(scratch));

  it('can be set by another component', async () => {
    const Increment = element(el => {
      return html`
        <button onclick=${el.increment} />
      `;
    });

    const StateContainer = element(() => {
      const [count, setCount] = useState(0);
      return html`
        <div>
          <p>Count: ${count}</p>
          <${Increment} increment=${() => setCount(c => c + 10)} />
        </div>
      `;
    });

    scratch.append(StateContainer());

    await oneDefer();

    expect(scratch.textContent).to.include('Count: 0');

    const button = scratch.querySelector('button');
    button.click();

    await oneDefer();
    expect(scratch.textContent).to.include('Count: 10');
  });
});