// import http from './http';

const WP_URL = 'https://admin.min.report/wp-json';

// interface UserSignup {
//   username: string;
//   email: string;
//   password: string;
// }

// const getMixes = () => http.get(`${WP_URL}/wp/v2/mix?per_page=20`);

// const getProducts = () => http.get(`${WP_URL}/wp/v2/product`);

// const getPosts = (page: number) =>
//   http.get(`${WP_URL}/wp/v2/posts?per_page=10&page=${page}`);

// const getPostsByAuthor = (author: string) =>
//   http.get(`${WP_URL}/wp/v2/posts?_embed=true&filter[author_name]=${author}`);

// const getPost = (path: string) =>
//   http.get(`${WP_URL}/wp/v2/post_x?slug=${path}`);

// const getProduct = (path: string) =>
//   http.get(`${WP_URL}/wp/v2/product_x?slug=${path}`);

// const getPostPreview = (id: string) =>
//   http.get(`${WP_URL}/wp/v2/preview_x?preview_id=${id}`);

// const createUser = (user: UserSignup) =>
//   http.post(`${WP_URL}/wp-json/wp/v2/users/register`, user);

// const login = (id: string) =>
//   http.get(`${WP_URL}/wp/v2/preview_x?preview_id=${id}`);

// const resetPassword = (user_login: string) =>
//   http.post(`${WP_URL}/wp-json/wp/v2/users/lost-password`, { user_login });

// export default {
//   createUser,
//   login,
//   resetPassword,
//   getPosts,
//   getPost,
//   getProducts,
//   getProduct,
//   getMixes,
//   getPostsByAuthor,
//   getPostPreview,
// };
interface WordpressBasic {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  template: string;
  tags: Array<number>;
  yoast_meta: Array<any>;
  yoast_title: string;
  yst_prominent_words: Array<string>;
  featured_media: number;
  featured_img_x: {
    thumb: string;
    medium: string;
    large: string;
  };
}

export interface PostCoauthor {
  name: string;
  description: string;
}
export interface WordpressPost extends WordpressBasic {
  coauthors: [PostCoauthor];
  author_x: {
    id: number;
    name: string;
    slug: string;
  };
  permalink: string;
  categories: Array<number>;
  comment_status: string;
  format: string;
  ping_status: string;
  sticky: boolean;
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
  };
}

export interface WordpressMix extends WordpressBasic {
  linked_post: any;
  soundcloud_url: string;
  dj: any;
}

type ProductStatus = 'Preorder' | 'Available' | 'Sold out'

export interface WordpressProduct extends WordpressBasic {
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  permalink: string;
  stripe: {
    price: string;
    currency: string;
    price_id: string;
    prod_id: string;
    preorder: boolean;
    status: ProductStatus;
    shipping_options: Array<{
      option: {
        label: string;
        price: string;
        stripe_shipping_id: string;
      };
    }>;
  };
}
