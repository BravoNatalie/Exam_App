module.exports = {
  async redirects() {
    return [
      {
        source: '/examForm',
        destination: '/',
        permanent: false,
      },
      // Path Matching - will match `/old-blog/a`, but not `/old-blog/a/b`
      {
        source: '/exams/:slug',
        destination: '/',
        permanent: false,
      }
    ]
  },
}