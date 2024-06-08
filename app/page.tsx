// 'use client';
import SectionList from '@/components/home/section-list';
import SearchBar from '@/components/search/search-bar';
// import LayoutModal from '@/components/modal/layout-modal';
// import Button from '@/components/button/button';
// import React, { useState } from 'react';

export default function Home({ searchParams }: {
  searchParams?: {
    query?: string
  }
}) {

  const query = searchParams?.query || '';
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto p-4 max-w-screen-lg pt-8">
      <main>
        <h1 className="text-4xl font-bold mb-12 text-center">Library</h1>
        <p className="mb-12 font-medium text-center">
          Browse for assets needed to report and present analysis.
        </p>
        <SearchBar />
        <div className="bg-slate-100 p-2 rounded	flex items-center">
          <button className="py-2 bg-white font-semibold rounded w-full">
            Featured
          </button>
          <button className="py-1 ml-4 text-neutral font-medium w-full">
            KPI
          </button>
          <button className="py-1 ml-4 text-neutral font-medium w-full">
            Layouts
          </button>
          <button className="py-1 ml-4 text-neutral font-medium w-full">
            Storyboards
          </button>
        </div>
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
        {/* <Button onClick={openModal}>Open Layout Modal</Button>
        <LayoutModal isOpen={isModalOpen} onClose={closeModal} /> */}
      </main>
    </div>
  );
}
