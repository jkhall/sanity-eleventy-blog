export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db8cd3e6051f520aa798d74',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-1p2t5nd9',
                  apiId: 'cc571fbe-ea28-4ff4-9456-b13a0f07c552'
                },
                {
                  buildHookId: '5db8cd3e2fc603223a70b8b3',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-2s4ctp34',
                  apiId: 'e62cbd22-bf21-40ab-ad0d-7dc34b265c2f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jkhall/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-2s4ctp34.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
