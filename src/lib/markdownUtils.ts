export function markdownToPlainText(markdownText: string, maxLength: number = 200): string {
    // Replace all regex patterns
    let text = markdownText;

    // Remove code blocks (both ``` and indented)
    text = text.replace(/```[\s\S]*?```/g, '');
    text = text.replace(/(^|\n)( {4,}|\t)[^\n]+/g, '');

    // Remove images but keep alt text
    text = text.replace(/!\[([^\]]*)\]\([^\)]+\)/g, '$1');

    // Remove links but keep link text
    text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');

    // Remove headers
    text = text.replace(/#{1,6}\s+/g, '');

    // Remove emphasis markers
    text = text.replace(/(\*\*|__)(.*?)\1/g, '$2');  // Bold
    text = text.replace(/(\*|_)(.*?)\1/g, '$2');     // Italic
    text = text.replace(/~~(.*?)~~/g, '$1');         // Strikethrough

    // Remove blockquotes
    text = text.replace(/^\s*>\s+/gm, '');

    // Remove horizontal rules
    text = text.replace(/^\s*[-*_]{3,}\s*$/gm, '');

    // Remove HTML tags
    text = text.replace(/<[^>]+>/g, '');

    // Remove list markers
    text = text.replace(/^\s*[-*+]\s+/gm, '');
    text = text.replace(/^\s*\d+\.\s+/gm, '');

    // Collapse multiple newlines and spaces
    text = text.replace(/\n\s*\n/g, '\n');
    text = text.split(/\s+/).join(' ');

    // Truncate to maxLength while preserving whole words
    let newtext = text.split(" ", maxLength);

    return newtext.join(" ");
}