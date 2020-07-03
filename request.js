fetch('https://api.producthunt.com/v2/api/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer f20AQz3Ap7trjQyQESkDK655LXGSYgTDd0FElcccaJA'
    },
    body: JSON.stringify({
        query: `{
            posts {
              edges {
                node {
                  id
                  name
                  description 
                  votesCount
                  website
                  thumbnail {
                    url
                  }
                  media {
                    videoUrl
                    type
                    url
                  }
                }
              }
            }
          }`,
        variables:null
    })
  });