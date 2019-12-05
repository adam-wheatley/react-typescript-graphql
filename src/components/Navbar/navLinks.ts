interface props {
  border?: boolean,
  marginRight?: boolean,
}

export interface Links {
  text: string,
  path: string,
  props: props,
}

export const privateLinks = [
  {
    text: 'Dashboard',
    path: '/dashboard',
    props: {
      marginRight: true,
    },
  },
  {
    text: 'My Account',
    path: '/account',
    props: {
      border: true,
    },
  },
];


export const publicLinks = [
  {
    text: 'Home',
    path: '/',
    props: {
      marginRight: true,
    },
  },
  {
    text: 'Login',
    path: '/login',
    props: {
      border: true,
    },
  }
];
