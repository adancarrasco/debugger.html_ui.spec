/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

import { isVisible } from "../ui";
import Editor from "../editor/index";

function createMockEditor() {
  return {
    codeMirror: {
      doc: {},
      setOption: jest.fn(),
      scrollTo: jest.fn(),
      charCoords: ({ line, ch }) => ({ top: line, left: ch }),
      getScrollerElement: () => ({ offsetWidth: 0, offsetHeight: 0 }),
      getScrollInfo: () => ({
        top: 0,
        left: 0,
        clientWidth: 0,
        clientHeight: 0
      }),
      defaultCharWidth: () => 0,
      defaultTextHeight: () => 0,
      display: { gutters: { querySelector: jest.fn() } }
    },
    setText: jest.fn(),
    on: jest.fn(),
    off: jest.fn(),
    createDocument: () => ({
      getLine: line => "",
    }),
    replaceDocument: jest.fn(),
    setMode: jest.fn()
  };
}

describe("isVisible()", () => {
  it("calls is visible", () => {
    const mockEditor = createMockEditor();
    expect(isVisible()).toBeGreaterThanOrEqual(0);
  });
});
