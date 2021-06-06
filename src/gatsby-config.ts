export default {
  plugins: [
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        typeCheck: process.env.NODE_ENV !== "production",
      },
    },
  ],
}
