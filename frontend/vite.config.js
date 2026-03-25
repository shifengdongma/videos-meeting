import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
var packageChunkMap = {
    vue: 'vendor-vue',
    'vue-router': 'vendor-vue',
    pinia: 'vendor-vue',
    'element-plus': 'vendor-element',
    '@element-plus': 'vendor-element',
    '@floating-ui': 'vendor-element',
    echarts: 'vendor-echarts',
    zrender: 'vendor-echarts'
};
var getPackageName = function (id) {
    var match = id.split('node_modules/')[1];
    if (!match)
        return null;
    var parts = match.split('/');
    if (parts[0].startsWith('@')) {
        return "".concat(parts[0], "/").concat(parts[1]);
    }
    return parts[0];
};
export default defineConfig({
    plugins: [vue()],
    server: {
        port: 5173,
        host: '0.0.0.0'
    },
    build: {
        chunkSizeWarningLimit: 700,
        rollupOptions: {
            output: {
                manualChunks: function (id) {
                    if (!id.includes('node_modules'))
                        return;
                    var packageName = getPackageName(id);
                    if (!packageName)
                        return 'vendor';
                    return packageChunkMap[packageName] || 'vendor';
                }
            }
        }
    }
});
