import { env } from '@/lib/env';

export const config = {
  site: {
    name: 'Photo Shooting Tour',
    description: 'Tourist Souvenir Photo',
    author: 'G.Ark',
    url: env.NEXT_PUBLIC_SITE_URL,
  },
  home: {
    extraSection: (
      <section>
        <p className='mb-2 font-medium text-muted-foreground text-sm'>More</p>
        <p className='text-muted-foreground text-sm'>
          Follow Harry Yep on{' '}
          <a href='https://twitter.com/ayig61' className='text-foreground transition-colors hover:text-muted-foreground'>
            Twitter
          </a>{' '}
          and{' '}
          <a href='https://github.com/k1314047' className='text-foreground transition-colors hover:text-muted-foreground'>
            GitHub
          </a>
          .
        </p>
      </section>
    ),
  },
  post: {
    footer: (
      <footer>
        <div className='flex items-center justify-between'>
          <p className='text-muted-foreground text-sm'>Copyright © 2025 Harry Yep. All rights reserved.</p>
        </div>
      </footer>
    ),
  },
};
