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
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Build terms array from translations
  const glossaryTerms: GlossaryTerm[] = [
    { ...t('glossary.terms.deploy', { returnObjects: true }), category: 'development' as const },
    { ...t('glossary.terms.production', { returnObjects: true }), category: 'development' as const },
    { ...t('glossary.terms.localhost', { returnObjects: true }), category: 'development' as const },
    { ...t('glossary.terms.url', { returnObjects: true }), category: 'development' as const },
    { ...t('glossary.terms.framework', { returnObjects: true }), category: 'development' as const },
    { ...t('glossary.terms.bug', { returnObjects: true }), category: 'development' as const },
    { ...t('glossary.terms.localStorage', { returnObjects: true }), category: 'data' as const },
    { ...t('glossary.terms.database', { returnObjects: true }), category: 'data' as const },
    { ...t('glossary.terms.api', { returnObjects: true }), category: 'data' as const },
    { ...t('glossary.terms.apiKey', { returnObjects: true }), category: 'data' as const },
    { ...t('glossary.terms.endpoint', { returnObjects: true }), category: 'data' as const },
    { ...t('glossary.terms.json', { returnObjects: true }), category: 'data' as const },
    { ...t('glossary.terms.prompt', { returnObjects: true }), category: 'ai' as const },
    { ...t('glossary.terms.context', { returnObjects: true }), category: 'ai' as const },
    { ...t('glossary.terms.multimodal', { returnObjects: true }), category: 'ai' as const },
    { ...t('glossary.terms.temperature', { returnObjects: true }), category: 'ai' as const },
    { ...t('glossary.terms.token', { returnObjects: true }), category: 'ai' as const },
    { ...t('glossary.terms.systemPrompt', { returnObjects: true }), category: 'ai' as const },
    { ...t('glossary.terms.ui', { returnObjects: true }), category: 'ui' as const },
    { ...t('glossary.terms.component', { returnObjects: true }), category: 'ui' as const },
    { ...t('glossary.terms.state', { returnObjects: true }), category: 'ui' as const },
    { ...t('glossary.terms.props', { returnObjects: true }), category: 'ui' as const },
    { ...t('glossary.terms.responsive', { returnObjects: true }), category: 'ui' as const },
    { ...t('glossary.terms.auth', { returnObjects: true }), category: 'auth' as const },
    { ...t('glossary.terms.session', { returnObjects: true }), category: 'auth' as const },
    { ...t('glossary.terms.authToken', { returnObjects: true }), category: 'auth' as const },
    { ...t('glossary.terms.permissions', { returnObjects: true }), category: 'auth' as const },
  ];

  const categoryNames = {
    development: t('glossary.categories.development'),
    data: t('glossary.categories.data'),
    ai: t('glossary.categories.ai'),
    ui: t('glossary.categories.ui'),
    auth: t('glossary.categories.auth')
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
              {t('glossary.title')}
            </h1>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg">
            {t('glossary.subtitle')}
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('glossary.searchPlaceholder')}
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
            {t('glossary.allLabel')} ({glossaryTerms.length})
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
                {t('glossary.noResults')}
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
