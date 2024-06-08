import SectionList from '@/components/assets/asset-list';
import SearchBar from '@/components/search/search-bar';
import Tabs from '@/components/tabs/tabs';
import Tab from '@/components/tabs/tab';

export default function Home({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        tab?: string;
    };
}) {
    const query = searchParams?.query || '';
    const activeTab = searchParams?.tab || 'featured';

    return (
        <div className="container mx-auto p-4 max-w-screen-lg pt-8">
            <main>
                <h1 className="text-4xl font-bold mb-12 text-center">
                    Library
                </h1>
                <p className="mb-12 font-medium text-center">
                    Browse for assets needed to report and present analysis.
                </p>
                <SearchBar />
                <Tabs active={activeTab}>
                    <Tab title="Featured">
                        <SectionList type="Featured" search={query} />
                    </Tab>
                    <Tab title="KPI">
                        <SectionList type="KPI" search={query} />
                    </Tab>
                    <Tab title="Layouts">
                        <SectionList type="Layouts" search={query} />
                    </Tab>
                    <Tab key="storyboards" title="Storyboards">
                        <SectionList type="Storyboards" search={query} />
                    </Tab>
                </Tabs>
            </main>
        </div>
    );
}
