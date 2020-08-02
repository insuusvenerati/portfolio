import { graphql, useStaticQuery } from 'gatsby';

export const useQuery = query => {
  const data = useStaticQuery(graphql(query));
  return data;
};
