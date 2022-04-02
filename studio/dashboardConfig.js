export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6248d502a5c73d1ff148d8c1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-9hwqsj9t',
                  apiId: 'a174a6da-a906-498c-900b-95256cfb0855'
                },
                {
                  buildHookId: '6248d502cf41f7204f1b4327',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-sddr6mb6',
                  apiId: '5d20fab8-65c9-4484-9aee-ef87ae6a283e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hungryram/sanity-gatsby-portfolio2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-sddr6mb6.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
