export type User = {
  name: { title: string; firstName: string; lastName: string };
  email: string;
  image: string;
  location: {
    country: string;
    city: string;
    streetName: string;
  };
};
