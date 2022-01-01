// https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/configs/sidebar/en.ts
// https://vuepress.github.io/reference/default-theme/config.html#sidebar

import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/': [
    {
      text: 'Guide',
      children: [
        {
          link: '/README.md',
          text: 'Introduction',
        },
        '/installation',
        '/usage.md',
        '/advanced.md',
        '/performance.md',
        '/uninstalling.md',
        '/changelog.md',
        '/roadmap.md',
        '/contributing.md',
        '/license.md',
      ]
    }
  ]
}