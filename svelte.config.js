import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            // 빌드 출력 경로 수정
            pages: 'build',
            assets: 'build',
            fallback: 'index.html',
            precompress: false,
        }),
        // SPA 모드 설정
        prerender: {
            default: false
        }
    }
};

export default config;