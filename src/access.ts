/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
interface AccessState {
  canAdmin: boolean;
  canTest: boolean;
}

const access = (initialState: { access?: any }): AccessState => {
  const { access } = initialState || {};

  return {
    canAdmin: access?.findIndex((x: { name: string }) => x.name === 'admin')! > -1,
    canTest: true
  };
};

export default access;
