'use client';

import RatingStars from '@/shared/@common/ui/RatingStars/RatingStars';
import Tab from '@/shared/@common/ui/Tab/Tab';
import Button from '@/shared/@common/ui/Button/Button';
import CancelSaveHeader from '@/shared/@common/ui/Header/CancelSaveHeader';
import Header from '@/shared/@common/ui/Header/Header';

export default function StyleGuide() {
  const handleCancel = () => {
    console.log('취소클릭');
  };

  const handleSave = () => {
    console.log('저장클릭');
  };

  const handleClick = () => {
    console.log('버튼클릭');
  };

  const handleTabClick = () => {
    console.log('탭클릭');
  };

  return (
    <main className="flex flex-col h-full pt-16 gap-3 bg-gray p-10 items-center">
      <Header />
      <CancelSaveHeader pageName="폴더 만들기" onCancel={handleCancel} onSave={handleSave} />
      <CancelSaveHeader pageName="카드 만들기" onCancel={handleCancel} onSave={handleSave} />
      RatingStars
      <RatingStars initialStars={0} />
      Tab
      <Tab tabs={['탭 1', '탭 2']} onClick={handleTabClick} />
      xl-full
      <Button type="xl-full" onClick={handleClick}>
        로그인
      </Button>
      xl-line
      <Button type="xl-line" onClick={handleClick}>
        취소
      </Button>
      xl-line-plus
      <Button type="xl-line-plus" onClick={handleClick} />
      l-card
      <Button type="l-card" onClick={handleClick}>
        카드 추가
      </Button>
      l-delete
      <Button type="l-delete" onClick={handleClick}>
        폴더 지우기
      </Button>
      l-rewrite
      <Button type="l-rewrite" onClick={handleClick}>
        다시 생성하기
      </Button>
      m-line
      <div className="flex gap-2">
        <Button type="m-line" onClick={handleClick}>
          학습 모드
        </Button>
        <Button type="m-line" onClick={handleClick}>
          시험 모드
        </Button>
      </div>
      s-full
      <Button type="s-full" onClick={handleClick}>
        추가하기
      </Button>
      xs-full
      <Button type="xs-full" onClick={handleClick}>
        다음
      </Button>
      m-more
      <Button type="m-more" onClick={handleClick}>
        오늘 학습하러 가기
      </Button>
      s-more
      <Button type="s-more" onClick={handleClick}>
        더보기
      </Button>
      xs-more
      <Button type="xs-more" onClick={handleClick}>
        더보기
      </Button>
      black
      <Button type="black" onClick={handleClick}>
        비밀번호 재설정
      </Button>
      group
      <Button
        type="group"
        onClick={handleClick}
        buttonContents={[{ label: '새로 만들기' }, { label: '엑셀 업로드' }, { label: 'GPT' }]}
      />
      <Button
        type="group"
        onClick={handleClick}
        buttonContents={[
          { icon: '/icons/private.png', activeIcon: '/icons/private-active.png', label: '비공개' },
          { icon: '/icons/public.png', activeIcon: '/icons/public-active.png', label: '공개' },
        ]}
      />
    </main>
  );
}
