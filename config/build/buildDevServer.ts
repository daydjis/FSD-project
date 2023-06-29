import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildOptions } from './types/config';

export function buildDevServer(options: buildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
