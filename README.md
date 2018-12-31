## react 연습용 레포

### github 페이지에 react배포하기
- git repo가 있다는 전제하에. 
1. package.json 에서 아래값 추가
"homepage": "https://<GitHub-유저명>.github.io/<프로젝트-저장소>"

2. npm run build or yarn build 

3. npm i --save-dev gh-pages 

4. package.json에 아래 추가
"deploy" : "npm run build&&gh-pages -d build"

5. npm run deploy or yarn run deploy 
