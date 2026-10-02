// projects/job-a-yo.js
(window.PROJECTS = window.PROJECTS || []).push({
  id:'jobayo',
  logo:'images/jobayologo.png',
  title:'JOB-A-YO',
  summary:'데이터 기반 맞춤형 상권 분석',
  period:'2025.11 - 2025.12',
  role:' 팀 프로젝트(3명) · 상권 통계 페이지, 로그인 CRUD, 디자인 통일',
  stack:'Python · scikit-learn · FastAPI · Chart.js · Spring Boot · MySQL ',
  img:'images/jobayo_main.png',
  links:[['GitHub','https://github.com/rombird/JOB-A-YO','images/github.svg'],
  ['발표 자료','https://drive.google.com/file/d/1TnwoK1Md_NeJZCt6hCb_5tfvQRLeaT2Y/view?usp=sharing', 'images/pdf.svg']],
  sections:[
    ['배경','서울에는 상권 분석 서비스가 있지만 비수도권 청년층·중장년층을 위한 서비스는 없다. 비수도권은 데이터가 부족해 서울시 데이터로 만들었고, 이 방식이 통하는지 먼저 검증하는 시연용으로 활용했다. 구·동·업종을 선택하면 근거와 함께 전망을 판단해 주어, 사전 조사를 줄이는 것을 목표로 했다.'],
    ['과정','서울시 상권분석서비스(점포·영역·유동인구)와 행정구역별 통계를 사용했고, 분기별 데이터는 중복을 막기 위해 4분기만 활용했다. 업종 면적 밀도, 점포 증감률, 경쟁도 지수, 점포당 유동인구 4개 지표를 만들어 규칙에 따라 조합해 전망 등급(전망 좋음·주의·보통)을 판단했다. 선택한 동의 분석 결과는 카카오 지도와 리포트로 보여주도록 구현했다.'],
    ['결과','카카오 지도와 리포트로 동·업종별 전망을 보여주는 상권 통계 페이지를 완성했다. 처음 만드는 웹사이트라 AI의 도움을 많이 받았고, 일정에 맞추지 못했으며, 지표와 판단 기준의 근거를 충분히 검증하지 못한 점이 아쉬웠다.']
  ], 
  // 예를 들어 "이후 경쟁도 지수의 식과 등급 분포를 직접 다시 확인해 설명을 코드에 맞게 수정했다"처럼요. 확인한 내용이 있어야함
  pages:[
    {h:'데이터 분석 과정', img:'images/jobayologo.png', t:`
첫 문단을 적어요.

백틱 안에서는 줄바꿈을 그대로 쓸 수 있어요.`},
    {h:'결과와 배운 점', t:`글만 넓게 쓰는 장이에요.`}
  ]
});