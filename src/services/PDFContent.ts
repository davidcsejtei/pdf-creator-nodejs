export type Content = string | Buffer;

export function isTextContent(content: unknown): content is string {
    return typeof content === 'string' || content instanceof String;
}

export function isImageContent(content: unknown): content is Buffer {
    return !!(content as Buffer).buffer;
}
