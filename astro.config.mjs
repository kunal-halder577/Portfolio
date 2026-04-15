import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import fs from 'node:fs';

export default defineConfig({
  site: 'https://kunalhalder.site',
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind(),
    sitemap(),
    {
      name: 'fix-vercel-runtime',
      hooks: {
        'astro:config:setup': () => {
          process.on('exit', () => {
            const vcConfigPath = './.vercel/output/functions/_render.func/.vc-config.json';
            if (fs.existsSync(vcConfigPath)) {
              let content = fs.readFileSync(vcConfigPath, 'utf-8');
              if (content.includes('"nodejs18.x"')) {
                content = content.replace(/"runtime":\s*"nodejs18\.x"/g, '"runtime": "nodejs20.x"');
                fs.writeFileSync(vcConfigPath, content);
                console.log('✅ Patched Vercel runtime to nodejs20.x');
              }
            }
          });
        }
      }
    }
  ],
});