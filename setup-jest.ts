import '@testing-library/jest-dom'

// @ts-ignore
window.IntersectionObserver = jest.fn(() => ({
  takeRecords: jest.fn(),
}));
