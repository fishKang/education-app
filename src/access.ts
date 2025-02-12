/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};

  return {
    canQuery: currentUser && currentUser.access === 'user',
    canAdmin: currentUser && currentUser.access === 'admin',
  };
}
