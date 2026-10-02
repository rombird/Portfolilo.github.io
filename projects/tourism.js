(window.PROJECTS = window.PROJECTS || []).push({
    id:'tour',
    title:"Korea's Tourism Deficit: A Data-Driven Diagnosis",
    summary:'국민여행조사데이터 기반 문제점 진단과 해결방안 제시',
    period:'2025.11',
    role:'팀 프로젝트(3명) · 공공데이터 수집 및 전처리, 머신러닝 분석 추가',
    stack:'Python',
    img:'',
    links:[['자료 보기','https://drive.google.com/drive/folders/1xVENA5c70DAi83Bmr8FEwqIdfh3CEYa8?usp=sharing', 'images/googledrive.svg'],
        ['발표 자료','https://drive.google.com/file/d/1r0v5uQSxuy3CWcPAffhY-Vk9WOx8dB9w/view?usp=sharing', 'images/pdf.svg']],
    pages:[
    {h:'데이터 분석 과정', img:'', t:`
        ✅ 데이터 전처리
         - 데이터셋 특징
          분석단위(시도 17개)
          기간(2024년)
          독립변수 : 4성급 이상 호텔(면적당), 국가유산(면적당), 국립공원, 대중교통 만족도 평균, 미세먼지 연평균 농도, 박물관·미술관(면적당), 지역축제(면적당), 녹지환경 만족도
          종속변수 : 방문객수(면적당) 
          지역별로 보니 광역시의 방문자수가 확실히 높음 → 인프라가 많은 곳의 방문자수가 많은걸까?
            상관관계로 확인해보니 방문자수가 많은 곳일수록 관광 인프라가 잘 갖춰져 있어 만족도가 높게 유지
            종속변수의 왜도가 커서 정규성 가정을 위배할 위험이 있어 로그변한 수행 → 분포가 정규분포에 가깝게 개선
        ✅ 모델링 및 성능 검증 
        ✅ 결과
    `},
    {h:'결과와 배운 점', t:`글만 넓게 쓰는 장이에요.`}
  ]
});