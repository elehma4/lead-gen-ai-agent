import React from 'react';
import MarkdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItContainer from 'markdown-it-container';
import markdownItFootnote from 'markdown-it-footnote';
import markdownItHighlightjs from 'markdown-it-highlightjs';
import markdownItSub from 'markdown-it-sub';
import markdownItSup from 'markdown-it-sup';
import markdownItDeflist from 'markdown-it-deflist';
import markdownItAbbr from 'markdown-it-abbr';
import markdownItIns from 'markdown-it-ins';
import markdownItMark from 'markdown-it-mark';
import '../styles/markdown.css'; 

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})
  .use(markdownItAttrs)
  .use(markdownItAnchor, {
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: ''
  })
  .use(markdownItContainer, 'warning')
  .use(markdownItFootnote)
  .use(markdownItHighlightjs)
  .use(markdownItSub)
  .use(markdownItSup)
  .use(markdownItDeflist)
  .use(markdownItAbbr)
  .use(markdownItIns)
  .use(markdownItMark);

type MarkdownRendererProps = {
  markdown: string;
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
  const htmlContent = md.render(markdown);

  return (
    <div
      className="markdown" 
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownRenderer;