<a name="readme-top"></a>

<!-- PROJECT NAME-->
# UNIFORM-EXTRATIME
#### 유니폼이 유행하는 시대, 축구 유니폼을 판매하고 구매할 수 있는 축구 유니폼 커머스</li>
<br>

<!-- 기술 스택  -->
## Tech Stack
<p align=center>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">&nbsp
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=black">&nbsp
  <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=black">&nbsp
  <img src="https://img.shields.io/badge/shadcnui-000000?style=for-the-badge&logo=shadcnui&logoColor=white">&nbsp
  <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=black">&nbsp
  <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">&nbsp
</p>
<br><br>

<!--주요 기능-->
## Feature

### 구매자, 판매자 회원 구분 및 관리

- **Firebase Authentication**을 이용하여 구매자와 판매자의 회원 정보를 구분하고 관리
  - **구매자:** 장바구니, 결제 연동
  - **판매자:** Firestore와 Firebase Storage를 사용하여 상품 정보 및 파일을 저장하고, 상품을 등록, 수정, 삭제할 수 있는 기능 구현

### 상품 조회

- **React Query**를 사용하여 상품 목록을 캐싱하고 반복적인 서버 요청을 제거하여 사용자 경험을 향상
- 마우스 오버 시 데이터 프리패칭으로 상품 상세 페이지를 미리 로드하여 사용자에게 원활한 탐색 경험 제공

### 결제 시스템 구현

- **PortOne SDK**를 사용하여 가상 결제 시스템을 구현, 안전하고 편리한 결제 기능 제공


<br><br>
<!--트러블 슈팅-->
## Trouble Shooting
<details>
  <summary>상품 등록 및 수정 기능 컴포넌트 공유로 Firestore 및 Firestorage 저장 오류 발생</summary>
  <br>
  
  **문제:**
  - Firestore 및 Firestorage에 데이터 저장 오류 발생.
  
  **원인:**
  - 등록 및 수정 컴포넌트를 공유하면서 임시 blob URL과 실제 데이터를 혼동.
  - 파일명에 '/' 포함으로 인한 문제 발생.

  **해결 방법:**
  1. 등록 및 수정 컴포넌트 분리.
  2. 정규식을 사용하여 파일명에서 '/'을 '_'로 대체.
  3. `fileName` 상태를 추가하여 파일 이름을 별도로 관리.
  4. `URL.revokeObjectURL`을 사용하여 임시 URL 해제.
  
  **결과:**
  - 올바른 파일 이름과 URL 관리를 통해 데이터 저장 정확도 향상.

  <br>
</details>
<details>
  <summary>캐싱에도 불구하고 지속적인 네트워크 요청 발생</summary>
  <br>
  
  **문제:**
  - 지속적인 네트워크 요청으로 인한 사용자 경험 저하.
  
  **원인:**
  - 리액트 쿼리의 기본 옵션으로 인한 지속적인 네트워크 요청 발생.

  **해결 방법:**
  1. `staleTime` 옵션을 설정하여 재요청 방지.
  2. 기타 관련 옵션들을 `false`로 설정하여 불필요한 재요청 방지.
  
  **결과:**
  - 캐싱을 통해 네트워크 요청을 줄여 사용자 경험이 향상됨.

  <br>
</details>

<details>
  <summary>타임스탬프 기준 오름차순으로 상품 데이터 정렬 시 오류 발생</summary>
  <br>
  
  **문제:**
  - "The query requires an index. You can create it here: [URL]" 에러 메시지 출력.
  - 상품 데이터를 오름차순으로 정렬하지 못함.

  **원인:**
  - Firestore에서 복합 필드 쿼리에 대한 명시적 색인 생성 필요.

  **해결 방법:**
  1. 쿼리가 정확한지 확인.
  2. Firestore에서 필요한 색인 생성.
  
  **결과:**
  - 색인 생성 후 타임스탬프 기준으로 올바르게 정렬됨.

  <br>
</details>
<br><br>

<!--개발 기간-->
## Develop Period
2024.04.17 ~ ing
<br><br>




