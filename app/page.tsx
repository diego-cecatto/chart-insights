'use client';

import Head from 'next/head';
import SectionList from '@/components/home/section-list';
import ResearchBar from '@/components/research/research-bar';
import LayoutModal from '@/components/modal/layout-modal';
import Button from '@/components/button/button';
import React, { useState } from 'react';

const items = [
  {
    name: 'Item Name',
    description: 'Short description of the item goes nicely here.',
    date: '06/27/2024',
  },
  {
    name: 'Item Name',
    description: 'Short description of the item goes nicely here.',
    date: '08/27/2024',
  },
  {
    name: 'Item Name',
    description: 'Short description of the item goes nicely here.',
    date: '06/27/2024',
  },
  {
    name: 'Item Name',
    description: 'Short description of the item goes nicely here.',
    date: '08/27/2024',
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto p-4 max-w-screen-lg pt-8">
      <Head>
        <title>Library</title>
        <meta
          name="description"
          content="Browse for assets needed to report and present analysis."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold mb-4 text-center">Library</h1>
        <p className="mb-8 font-medium text-center">
          Browse for assets needed to report and present analysis.
        </p>

        <ResearchBar />

        <div className="mb-8 bg-slate-100 p-2 rounded	flex items-center">
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
          description="Curated top picks from this week"
          assets={items}
        />
        <SectionList
          title="Trending"
          description="Most popular by community"
          assets={items}
        />
        <Button onClick={openModal}>Open Layout Modal</Button>
        <LayoutModal isOpen={isModalOpen} onClose={closeModal} />
      </main>
    </div>
  );
}
