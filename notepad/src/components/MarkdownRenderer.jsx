import React from 'react';
import MarkdownIt from 'markdown-it';

const MarkdownRenderer = ({ markdownContent }) => {
    // Initialize markdown-it
    const md = new MarkdownIt();

    // Parse Markdown content
    const parsedMarkdown = md.render(markdownContent);

    return (
        <div
            className="markdown-container"
            dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
        />
    );
};

export default MarkdownRenderer;
