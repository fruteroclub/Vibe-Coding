import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Book, Search } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'development' | 'data' | 'ai' | 'ui' | 'auth';
}


const getCategoryStyles = (category: string) => {
  switch (category) {
    case 'development':
      return {
        bg: 'bg-orange-400',
        text: 'text-orange-400',
        border: 'border-orange-400',
        bgLight: 'bg-orange-400/20'
      };
    case 'data':
      return {
        bg: 'bg-blue-400',
        text: 'text-blue-400',
        border: 'border-blue-400',
        bgLight: 'bg-blue-400/20'
      };
    case 'ai':
      return {
        bg: 'bg-purple-400',
        text: 'text-purple-400',
        border: 'border-purple-400',
        bgLight: 'bg-purple-400/20'
      };
    case 'ui':
      return {
        bg: 'bg-pink-400',
        text: 'text-pink-400',
        border: 'border-pink-400',
        bgLight: 'bg-pink-400/20'
      };
    case 'auth':
      return {
        bg: 'bg-green-400',
        text: 'text-green-400',
        border: 'border-green-400',
        bgLight: 'bg-green-400/20'
      };
    default:
      return {
        bg: 'bg-orange-400',
        text: 'text-orange-400',
        border: 'border-orange-400',
        bgLight: 'bg-orange-400/20'
      };
  }
};

const Glossary = () => {
  const { t, ready } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Build terms array from translations - only when translations are ready
  const glossaryTerms: GlossaryTerm[] = ready ? [
    { ...(t('doc.glossary.terms.deploy', { returnObjects: true }) as { term: string; definition: string }), category: 'development' as const },
    { ...(t('doc.glossary.terms.production', { returnObjects: true }) as { term: string; definition: string }), category: 'development' as const },
    { ...(t('doc.glossary.terms.localhost', { returnObjects: true }) as { term: string; definition: string }), category: 'development' as const },
    { ...(t('doc.glossary.terms.url', { returnObjects: true }) as { term: string; definition: string }), category: 'development' as const },
    { ...(t('doc.glossary.terms.framework', { returnObjects: true }) as { term: string; definition: string }), category: 'development' as const },
    { ...(t('doc.glossary.terms.bug', { returnObjects: true }) as { term: string; definition: string }), category: 'development' as const },
    { ...(t('doc.glossary.terms.localStorage', { returnObjects: true }) as { term: string; definition: string }), category: 'data' as const },
    { ...(t('doc.glossary.terms.database', { returnObjects: true }) as { term: string; definition: string }), category: 'data' as const },
    { ...(t('doc.glossary.terms.api', { returnObjects: true }) as { term: string; definition: string }), category: 'data' as const },
    { ...(t('doc.glossary.terms.apiKey', { returnObjects: true }) as { term: string; definition: string }), category: 'data' as const },
    { ...(t('doc.glossary.terms.endpoint', { returnObjects: true }) as { term: string; definition: string }), category: 'data' as const },
    { ...(t('doc.glossary.terms.json', { returnObjects: true }) as { term: string; definition: string }), category: 'data' as const },
    { ...(t('doc.glossary.terms.prompt', { returnObjects: true }) as { term: string; definition: string }), category: 'ai' as const },
    { ...(t('doc.glossary.terms.context', { returnObjects: true }) as { term: string; definition: string }), category: 'ai' as const },
    { ...(t('doc.glossary.terms.multimodal', { returnObjects: true }) as { term: string; definition: string }), category: 'ai' as const },
    { ...(t('doc.glossary.terms.temperature', { returnObjects: true }) as { term: string; definition: string }), category: 'ai' as const },
    { ...(t('doc.glossary.terms.token', { returnObjects: true }) as { term: string; definition: string }), category: 'ai' as const },
    { ...(t('doc.glossary.terms.systemPrompt', { returnObjects: true }) as { term: string; definition: string }), category: 'ai' as const },
    { ...(t('doc.glossary.terms.ui', { returnObjects: true }) as { term: string; definition: string }), category: 'ui' as const },
    { ...(t('doc.glossary.terms.component', { returnObjects: true }) as { term: string; definition: string }), category: 'ui' as const },
    { ...(t('doc.glossary.terms.state', { returnObjects: true }) as { term: string; definition: string }), category: 'ui' as const },
    { ...(t('doc.glossary.terms.props', { returnObjects: true }) as { term: string; definition: string }), category: 'ui' as const },
    { ...(t('doc.glossary.terms.responsive', { returnObjects: true }) as { term: string; definition: string }), category: 'ui' as const },
    { ...(t('doc.glossary.terms.auth', { returnObjects: true }) as { term: string; definition: string }), category: 'auth' as const },
    { ...(t('doc.glossary.terms.session', { returnObjects: true }) as { term: string; definition: string }), category: 'auth' as const },
    { ...(t('doc.glossary.terms.authToken', { returnObjects: true }) as { term: string; definition: string }), category: 'auth' as const },
    { ...(t('doc.glossary.terms.permissions', { returnObjects: true }) as { term: string; definition: string }), category: 'auth' as const },
  ] : [];

  if (!ready) {
    return (
      <DocLayout>
        <DocContent>
          <div className="flex items-center justify-center min-h-screen">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </DocContent>
      </DocLayout>
    );
  }

  const categoryNames = {
    development: t('doc.glossary.categories.development'),
    data: t('doc.glossary.categories.data'),
    ai: t('doc.glossary.categories.ai'),
    ui: t('doc.glossary.categories.ui'),
    auth: t('doc.glossary.categories.auth')
  };

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Object.keys(categoryNames)] as const;

  return (
    <DocLayout>
      <DocContent>
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Book className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400" />
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text">
              {t('doc.glossary.title')}
            </h1>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg">
            {t('doc.glossary.subtitle')}
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('doc.glossary.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400/50 text-foreground"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
              selectedCategory === 'all'
                ? 'bg-orange-400 text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {t('doc.glossary.allLabel')} ({glossaryTerms.length})
          </button>
          {Object.entries(categoryNames).map(([key, label]) => {
            const count = glossaryTerms.filter(t => t.category === key).length;
            const styles = getCategoryStyles(key);
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                  selectedCategory === key
                    ? `${styles.bg} text-white`
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>

        {/* Terms Grid */}
        <div className="space-y-4">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                {t('doc.glossary.noResults')}
              </p>
            </div>
          ) : (
            filteredTerms.map((term, index) => {
              const styles = getCategoryStyles(term.category);
              return (
                <div
                  key={index}
                  className={`glass-card p-4 sm:p-6 border-l-4 ${styles.border} hover:${styles.bgLight} transition-all duration-200`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {term.term}
                    </h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${styles.bgLight} ${styles.text} border ${styles.border} w-fit`}>
                      {categoryNames[term.category]}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {term.definition}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Glossary;
