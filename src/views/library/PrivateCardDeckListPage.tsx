import { useDecksStore } from '@/features/library/store/decksStore';
import Button from '@/shared/@common/ui/Button/Button';
import CardListItem from '@/shared/@common/ui/cardListItem/CardListItem';
import { useRouter } from 'next/navigation';
import React from 'react';

const PrivateCardDeckListPage = () => {
  const decks = useDecksStore(state => state.decks);
  const router = useRouter();
  function handlePlusButtonClick() {
    router.push('/plus/cardDeck/new');
  }
  return (
    <>
      {decks.map(({ count, creator, description, id, title }) => (
        <CardListItem creator={creator} count={count} description={description} title={title} key={id} />
      ))}
      <Button type="xl-line-plus" onClick={handlePlusButtonClick} />
    </>
  );
};

export default PrivateCardDeckListPage;
