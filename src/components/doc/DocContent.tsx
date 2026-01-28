import { ReactNode } from 'react';

interface DocContentProps {
  children: ReactNode;
}

export const DocContent = ({ children }: DocContentProps) => {
  return (
    <article className="
      prose prose-invert max-w-none
      prose-headings:gradient-text prose-headings:font-bold
      prose-h1:text-4xl prose-h1:mb-4
      prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
      prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-2
      prose-p:text-muted-foreground prose-p:leading-relaxed
      prose-a:text-doc-primary prose-a:no-underline hover:prose-a:underline
      prose-code:text-doc-primary prose-code:bg-muted
      prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
    ">
      {children}
    </article>
  );
};
