export {};

jest.mock('src/posts/queries/getPost', () => () => ({}), { virtual: true });
jest.mock('src/posts/queries/getPosts', () => () => ({ posts: [], count: 0 }), { virtual: true });
jest.mock('src/posts/mutations/createPost', () => () => ({}), { virtual: true });
jest.mock('src/posts/mutations/updatePost', () => () => ({}), { virtual: true });
jest.mock('src/posts/mutations/deletePost', () => () => ({}), { virtual: true });
jest.mock('src/reactAdmin/posts/queries/getPost', () => () => ({}), { virtual: true });

global.mockedInvoke = jest.fn(async (handler, params) => {
  return handler(params);
});
