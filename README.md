<a name="readme-top"></a>

<!-- PROJECT NAME-->
# UNIFORM-EXTRATIME

💡 **유니폼이 유행하는 시대, 축구 유니폼을 판매하고 구매할 수 있는 축구 유니폼 커머스**

<br>

<!-- 기술 스택  -->
## Tech Stack
<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">&nbsp;
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=black">&nbsp;
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=black">&nbsp;
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=black"><br>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black">&nbsp;
  <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=black">&nbsp;
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=black">&nbsp;
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white">&nbsp;
</p>
<br><br>

<!--주요 기능-->
## Features

### 구매자, 판매자 회원 구분 및 관리
- **Firebase Authentication**을 이용하여 구매자와 판매자의 회원 정보를 구분하고 관리
  - **구매자:** 장바구니, 결제 연동
  - **판매자:** Firestore와 Firebase Storage를 사용하여 상품 정보 및 파일을 저장하고, 상품을 등록, 수정, 삭제할 수 있는 기능 구현
    
<div align="center">
  
 ![조회](https://github.com/yangwonjoon/Uniform-ExtraTime/assets/102780846/e80f49ca-f16e-4664-9081-0d6fab79c6f3)

  
</div>

### 상품 조회 및 결제 시스템 구현

- **React Query**를 사용하여 상품 목록을 캐싱하고 반복적인 서버 요청을 제거하여 사용자 경험을 향상
- 마우스 오버 시 데이터 프리패칭으로 상품 상세 페이지를 미리 로드하여 사용자에게 원활한 탐색 경험 제공
- **PortOne SDK**를 사용하여 가상 결제 시스템을 구현, 안전하고 편리한 결제 기능 제공

<div align="center">
  
![결제](https://github.com/yangwonjoon/Uniform-ExtraTime/assets/102780846/c6894418-6f12-4ee0-8ff8-50ee05ad87cd)
  
</div>

### 성능 최적화

- 코드 스플리팅 및 레이지 로딩을 통해 초기 로드 시간 최적화
- 이미지를 WebP 형식으로 변환하여 파일 크기 감소 및 로드 시간 단축
- **vite-plugin-imagemin**을 사용하여 이미지 압축, preload를 통해 중요 리소스 미리 로드하여 사용자 경험 향상

<br>

### 성능 개선 전후 비교

| **성능 지표**                    | **개선 전** | **개선 후** | **감소율**            |
|--------------------------------|-------------|-------------|----------------------|
| **DOMContentLoaded**           | 345ms       | 194ms       | 43.8% 감소           |
| **Load**                       | 365ms       | 208ms       | 43.0% 감소           |
| **FCP (First Contentful Paint)**| 4.9초       | 2.5초       | 49.0% 감소           |
| **LCP (Largest Contentful Paint)**| 9.0초       | 4.5초       | 50.0% 감소           |

<br><br>

<!--트러블 슈팅-->
## Trouble Shooting

<details>
  <summary>React Query 캐싱 문제</summary>
  <br>
  
  **문제 상황**: 메인 페이지에 변경사항이 주기적이지 않아 사용자 경험 향상을 위해 캐싱으로 네트워크 요청을 방지하려 했으나 지속적인 네트워크 요청 발생

  **문제 접근**: React Query의 디폴트 옵션 설정으로 인한 지속적인 네트워크 요청 발생

  **결과**:
  - staleTime을 적절히 지정하고, refetchOnMount 및 refetchOnWindowFocus 옵션을 false로 설정하여 리패치 방지
  - 캐싱을 통한 사용자 경험 향상 및 네트워크 요청 감소

  <br>
</details>

<details>
  <summary>Firestore Query 정렬 문제</summary>
  <br>
  
  **문제 상황**: 상품 데이터를 타임스탬프 기준 오름차순으로 가져오는 중, “The query requires an index. You can create it here: [URL]” 에러 메시지와 함께 정렬이 안되는 상황

  **문제 접근**: 쿼리문 변경 시도 및 디버깅

  **결과**:
  - 쿼리문에 문제가 없음을 확인 후, Firestore 콘솔에서 에러 메시지의 URL을 통해 필요한 색인 생성
  - 색인 생성 후 쿼리 정렬 문제 해결

  <br>
</details>

<details>
  <summary>상품 등록 및 수정 기능 오류</summary>
  <br>
  
  **문제 상황**: 상품 등록 및 수정 기능 컴포넌트를 공유로 Firestore 및 Firestorage 저장 오류 발생

  **문제 접근**:
  - 등록 및 수정 컴포넌트를 분리하고, 캐러셀에 보여주는 임시 blob URL과 실제 데이터 구분, 정규식 도입

  **결과**:
  - 파일명에 ‘/’ 있을 시 정규식으로 ’_’로 변경
  - fileName state 추가로 파일 이름 별도 관리
  - 주요 로직 수정 및 URL.revokeObjectURL로 임시 URL 해제
  - 저장 오류 문제 해결 및 데이터 처리 정확성 향상

  <br>
</details>
<br><br>

<!--기술적 의사결정-->
## 기술적 의사결정

| **기술**                    | **선택 이유**                                                                                           | **활용 예시**                                                        |
|--------------------------|-------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| **React**                | 컴포넌트 기반 구조로 재사용 가능한 UI 요소 생성 용이, 상태 관리가 쉬워 높은 유지보수성 제공                        | 구매자와 판매자 페이지 컴포넌트화, 상품 목록 및 상세 페이지 구현                                 |
| **TypeScript**           | 정적 타입 검사를 통해 코드의 안정성과 가독성 향상                                                                       | 타입 정의를 통해 코드의 오류 사전 방지 및 유지보수성 향상                                           |
| **Tailwind CSS**         | 유틸리티 클래스 기반의 스타일링으로 빠른 개발 및 일관된 디자인 시스템 제공                                                  | UI 컴포넌트에 Tailwind CSS 적용하여 일관된 스타일링 구현                                           |
| **shadcn/ui**            | Tailwind CSS와 호환되는 UI 컴포넌트 라이브러리로 빠르고 일관된 UI 개발 가능                                                | 프로젝트 내 다양한 UI 컴포넌트 적용                                                           |
| **React Query**          | 서버 상태 관리 라이브러리로, 데이터 페칭, 캐싱 및 동기화 효율적 관리                                                         | 상품 목록 및 상세 정보 데이터 페칭 및 캐싱                                                     |
| **Zustand**              | 간단하고 직관적인 상태 관리 라이브러리로, 전역 상태 관리 용이                                                                | 애플리케이션 전역 상태 관리                                                               |
| **PortOne SDK**          | 다양한 결제 수단 통합 지원으로 안전하고 편리한 결제 시스템 구현 가능                                                         | 구매자의 결제 과정 구현                                                               |
| **Firebase Authentication, Firestore, Firebase Storage** | 인증, 데이터베이스 및 스토리지 서비스를 통합 제공하여 백엔드 개발 시간 절약 및 보안성 향상                        | 회원 인증, 상품 데이터 및 이미지 저장 관리                                                 |

<br><br>

<!--개발 기간 및 인원-->
## Develop Period
2024.04.17 ~ ing

<br>

## Development Team
개인 프로젝트
