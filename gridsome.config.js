module.exports = {
  siteName: "Gridsome",
  siteDescription: "A WordPress starter for Gridsome",

  templates: {
    WordPressCategory: "/category/:slug", // adds a route for the "category" post type (Optional)
    WordPressPost: "/:year/:month/:day/:slug", // adds a route for the "post" post type (Optional)
    WordPressPostTag: "/tag/:slug", // adds a route for the "post_tag" post type (Optional)
  },

  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl:
          "https://f44f4f9dbd017f224c12246e817668215baca78b.hl-b.getshifter.co", // required
        typeName: "WordPress", // GraphQL schema name (Optional)
      },
    },
  ],
};
