export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string,
    build: string,
    html: string,
    src: string,
}

export interface buildEnv {
    mode: BuildMode,
    port: number,

}
export interface buildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: number
}
