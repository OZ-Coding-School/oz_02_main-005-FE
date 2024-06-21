'use client';
import SearchInput from '@/shared/comm/SearchInput';
import SelectListButton from '@/shared/comm/SelectListButton';
import SelectModal from '@/shared/comm/SelectModal';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { CARD_DECK_LISTS } from './constants';
import CardListItem from '@/shared/@common/ui/cardListItem/CardListItem';

interface CardDeckListPageProps {
  listTitle: string;
  cardDeckList: [];
}

const CardDeckListPage = ({ listTitle, cardDeckList }: CardDeckListPageProps) => {
  const [searchInput, setSearchInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
  }
  function handleSelect() {
    setIsModalOpen(true);
  }

  function handleSelectModalItem(title: string) {
    switch (title) {
      case '인기카드 뭉치':
        router.replace('/comm/popular');
        return setIsModalOpen(false);
      case '신규카드 뭉치':
        router.replace('/comm/new');
        return setIsModalOpen(false);
      case '많이 저장한 카드 뭉치':
        router.replace('/comm/download');
        return setIsModalOpen(false);
    }
  }
  return (
    <div className="flex flex-col">
      <p className="font-bold text-text_primary text-32 text-start w-full my-[0.75rem]">{listTitle}</p>
      <div className="flex flex-col gap-[0.75rem] w-[22.875rem] justify-between items-center">
        <SearchInput value={searchInput || ''} placeholder={'검색어를 입력하세요.'} onChange={handleChangeInput} />
        <SelectListButton title={listTitle} onClick={handleSelect} />
        {CARD_DECK_LISTS.map(({ title, constructor, count, description, stars }, idx) => (
          <CardListItem
            stars={stars}
            description={description}
            creator={constructor}
            count={count}
            title={title}
            key={idx}
          />
        ))}
      </div>
      <SelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        contents={['인기카드 뭉치', '신규카드 뭉치', '많이 저장한 카드 뭉치']}
        onSelect={handleSelectModalItem}
      />
    </div>
  );
};

export default CardDeckListPage;
