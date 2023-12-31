export enum ArticleBlockType {
    CODE= 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

export interface ArticleBlockBase {
    id: string,
    type: ArticleBlockType,
}
export interface ArticleCodeBlock extends ArticleBlockBase{
    type: ArticleBlockType.CODE,
    code: string,

}
export interface ArticleTextBlock extends ArticleBlockBase{
    type: ArticleBlockType.TEXT,
    paragraphs: string[],
    title?: string
}

export interface ArticleImageBlock extends ArticleBlockBase{
    type: ArticleBlockType.IMAGE,
    src: string,
    title?: string,
}

export type ArticleBock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock

export enum ArticleType {
    IT= 'IT',
    SCIENE = 'SCIENE'
}
export interface Article {
    id: number,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ArticleBock[]
}
