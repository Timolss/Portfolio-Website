exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulProjekt {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.allContentfulProjekt.nodes.forEach((node) => {
    createPage({
      path: `/portfolio/${node.slug}`,
      component: require.resolve("./src/templates/portfolio-item.js"),
      context: {
        slug: node.slug,
      },
    });
  });
};

exports.onCreateDevServer = ({ app }) => {
  app.use((req, res, next) => {
    if (req.path === "/404.html" || req.path === "/404/") {
      res.status(404).sendFile(`${__dirname}/public/404.html`);
    } else {
      next();
    }
  });
};
