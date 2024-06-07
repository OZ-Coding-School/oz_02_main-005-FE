## 📋 Commit Convention

- 🎉 feat : 새로운 기능 추가
- 💣 fix : 기능 수정, 버그 수정
- 📝 docs : 문서 수정 (readme 수정 시)
- 🖌️ style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- 🪛 refactor : 코드 리팩터링
- 🖍️ chore : 기타 변경사항 (빌드 스크립트 수정, asset image, 패키지 매니저 등)
- 🎨 design : CSS 등 사용자 UI 디자인 변경
- 🥳 init: 프로젝트 초기 생성
- 🗿 build : 빌드 관련 파일 수정 및 삭제한 경우
- 🚒 rename : 파일 혹은 폴더명 수정하거나 옮기는 경우
- 🔥 remove : 파일을 삭제하는 작업만 수행하는 경우
- ✅ test : 테스트 코드, 리팩터링 테스트 코드 추가


## 🗂️ 폴더 구조

📦 src
    ├── 📦 app
    │   └── 📂 (Next.js app directory)
    │       └── 📂 views
    │           └── 📂 (렌더링을 위한 뷰 컴포넌트)
    ├── 📦 features
    │   ├── 📦 auth
    │   │   └── 📂 (각 auth 기능에 관련된 폴더 및 파일들)
    │   └── 📦 landing-edit
    │       ├── 📂 constants (landing-edit에서만 사용되는 상수)
    │       ├── 📂 context (landing-edit에서만 사용되는 Context)
    │       ├── 📂 hooks (landing-edit에서만 사용되는 hook)
    │       ├── 📂 store (landing-edit에서만 사용되는 클라이언트 전역 상태)
    │       ├── 📂 types (landing-edit에서만 사용되는 타입)
    │       ├── 📂 ui (landing-edit에서만 사용되는 UI 컴포넌트)
    │       └── 📂 utils (landing-edit에서만 사용되는 유틸리티 함수)
    │  
    │       
    │   
    │      
    ├── 📦 shared
    │   ├── 📦 api
    │   │   └── 📂 (공용 API 호출 로직)
    │   ├── 📦 constants
    │   │   └── 📂 (공용 상수)
    │   ├── 📦 hooks
    │   │   └── 📂 (공용 hook)
    │   ├── 📦 store
    │   │   └── 📂 (공용 클라이언트 전역 상태)
    │   ├── 📦 types
    │   │   └── 📂 (공용 타입)
    │   ├── 📦 ui
    │   │   └── 📂 (공용 UI 컴포넌트)
    │   └── 📦 utils
    │      └── 📂 (공용 유틸리티 함수)
    │   
    │   
    └── 📦 views
        ├── 📦 auth
        │  
        └── 📦 landing 