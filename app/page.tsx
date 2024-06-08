import SectionList from '@/components/home/section-list';
import SearchBar from '@/components/search/search-bar';
import Tabs from '@/components/tabs/tabs';
import Tab from '@/components/tabs/tab';

export default function Home({ searchParams }: {
  searchParams?: {
    query?: string
  }
}) {

  const query = searchParams?.query || '';
  return (
    <div className="container mx-auto p-4 max-w-screen-lg pt-8">
      <main>
        <h1 className="text-4xl font-bold mb-12 text-center">Library</h1>
        <p className="mb-12 font-medium text-center">
          Browse for assets needed to report and present analysis.
        </p>
        <SearchBar />
        <Tabs>
          <Tab key="featured" title="Featured">
            <SectionList
              title="Featured"
              search={query}
              description="Curated top picks from this week"
            />
            <SectionList
              title="Trending"
              search={query}
              description="Most popular by community"
            />
          </Tab>
          <Tab key="kpi" title="KPI">
            <SectionList
              title="Featured"
              search={query}
              description="Curated top picks from this week"
            />
            <SectionList
              title="Trending"
              search={query}
              description="Most popular by community"
            />
          </Tab>
          <Tab key="layouts" title="Layouts">
            <SectionList
              title="Featured"
              search={query}
              description="Curated top picks from this week"
            />
            <SectionList
              title="Trending"
              search={query}
              description="Most popular by community"
            />
          </Tab>
          <Tab key="storyboards" title="Storyboards">
            <SectionList
              title="Featured"
              search={query}
              description="Curated top picks from this week"
            />
            <SectionList
              title="Trending"
              search={query}
              description="Most popular by community"
            />
          </Tab>
        </Tabs>
      </main>
    </div>
  );
} 