# 🏠 니집내집 yourhouse-myhouse
### 프로젝트 소개
- 프로젝트 기간 : 2023.07.21 ~ 2023.07.27
- 프로젝트 설명 : 클론코딩 - 웹사이트 '오늘의집'
### 🙏 팀원소개
  |  멤버  |        역할      | GitHub |
  | :----: | :-------------: | :-------------: |
  | 박형주 | API / MULTER / NGINX   |https://github.com/Hangju0610|
  | 김형섭 | EC2 / 크롤링 |https://github.com/hyeong08|
  | 어민규 | API / 회원가입 / 로그인 / MULTER |https://github.com/fish-minkyu|
  | 김승훈 | API / MULTER |https://github.com/Obligedwalnut|
  | 신성윤 | 검색 관련 기능 / 크롤링 |https://github.com/since1630|

### 🎨 개발 환경
<div align="center">
<p style="font-size:20px;">📚 Tech Stack 📚</p>
  <img src="https://img.shields.io/badge/JavaScript-f7df1e?style=flat&logo=JavaScript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-4479a1?style=flat&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/Sequelize-52b0e7?style=flat&logo=Sequelize&logoColor=white" />
  <img src="https://img.shields.io/badge/JSON-000000?style=flat&logo=JSON&logoColor=white" />
<br/>
  <img src="https://img.shields.io/badge/Github Actions-2088FF?style=flat&logo=githubactions&logoColor=white" />
  <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat&logo=amazonec2&logoColor=white" />
  <img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat&logo=amazons3&logoColor=white" />
  <img src="https://img.shields.io/badge/NGINX-009639?style=flat&logo=nginx&logoColor=white" />
  <img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=flat&logo=amazonrds&logoColor=white" />
<br/>
<p> 📒 Library 📒 </p>
  <img src="https://img.shields.io/badge/JSON Web Token-000000?style=flat&logo=JSON Web Tokens&logoColor=white" />
  <img src="https://img.shields.io/badge/.env-ecd53f?style=flat&logo=dotenv&logoColor=white" />
  <img src="https://img.shields.io/badge/multer-S3-ecd53f?style=flat&logo=&logoColor=white" />
  <img src="https://img.shields.io/badge/prettier-F7B93E?style=flat&logo=prettier&logoColor=white" />
  <img src="https://img.shields.io/badge/bycript-006600?style=flat&logo=&logoColor=white" />
  <img src="https://img.shields.io/badge/multer-512BD4?style=flat&logo=&logoColor=white" />
  <img src="https://img.shields.io/badge/morgan-40AEF0?style=flat&logo=s&logoColor=white" />
  <img src="https://img.shields.io/badge/certbot-00A98F?style=flat&logo=&logoColor=white" />
  <img src="https://img.shields.io/badge/cors-FF6550?style=flat&logo=&logoColor=white" />
<br/>
<p>🛠 Tools 🛠</p>
  <img src="https://img.shields.io/badge/Visual Studio Code-007acc?style=flat&logo=Visual Studio Code&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&181717=white" />
  <img src="https://img.shields.io/badge/Slack-4a154b?style=flat&logo=slack&4a154b=white" />
  <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&4a154b=white" />
<br/>
</div>


## ERD 설계
- 상황 가정 : 하나의 사진이 다수의 동일 상품 태그를 갖고있으면서 동시에 태그들의 좌표는 다른 경우를 포함해 만든 스키마
![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F018bad1d-f39c-45eb-8bb3-0b9b85518945%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-07-25_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_11.21.36.png?table=block&id=63cb3684-ee34-47b5-878d-44ce84ebf2a7&spaceId=9f0916e0-feb7-4ca0-9f75-31b68b964561&width=2000&userId=ebd53b27-7b2e-4c47-806b-190748e081ca&cache=v2)

- ERD
  ![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1bfdc120-2d24-4a32-9c54-924c96423dc7%2FUntitled.png?table=block&id=e1dd7614-371c-4285-8257-adbf5da7b6f0&spaceId=9f0916e0-feb7-4ca0-9f75-31b68b964561&width=2000&userId=ebd53b27-7b2e-4c47-806b-190748e081ca&cache=v2)
  
1. 개인 정보 수정
2. 게시물에 대한 좋아요 누르기
3. 소셜 로그인
4. 전체 조회 페이지/ 상세조회 페이지 에서 글 검색

- ERD Tool Link
  
https://dbdiagram.io/d/64b9f0bf02bd1c4a5e71ec0c


## API 명세서
<img width="1395" alt="API 아키텍처" src="https://github.com/fish-minkyu/hh99Lv1/assets/128130163/13170259-5ec9-439d-aa24-557f61c42d39">



## 트러블 슈팅

<details>
<summary>1. ERD 설계 관련 문제</summary>
<br>

**`배경`**

Clonecoding 초기 구상 단계에서 ERD 설계 중 게시글 이미지에 달려있는 Tag 부분의 Table을 어떻게 작성할 것인지 팀원들과 의사소통을 많이 하였습니다.

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F13de2f9d-d7c1-4c19-bda7-bde3ebaa168d%2FUntitled.png?table=block&id=1c172833-5fd4-4ce3-bb56-f90cdbfb053e&spaceId=9f0916e0-feb7-4ca0-9f75-31b68b964561&width=2000&userId=ebd53b27-7b2e-4c47-806b-190748e081ca&cache=v2)

Image 안에 Tag의 item image, 가격, 상품명, Brand가 들어가 있으며, Tag는 한 이미지 안에 여러 개가 존재합니다.
또한 게시글에는 여러 개의 사진이 존재하며, 이것들을 어떻게 Table을 설계하면 좋을지 구상하였습니다. 

또한 게시글 Content의 내용 중 사진이 중간에 들어가는 경우도 존재하며, 이러한 경우는 어떻게 DB에 저장할 지 FE, BE와 협의하여 구상하였습니다.

Tags의 구성
```
"tags" : [
        {
            "contentImageId" : 1,
            "tagsId" : [1,2,3],
            "itemId" : [10,10,10],
            "axisX" : [111,222,333],
            "axisY" : [111,222,333]
        },
        {
            "contentImageId" : 2,
            "tagsId" : [1,2,3],
            "itemId" : [10,10,10],
            "axisX" : [111,222,333],
            "axisY" : [111,222,333]
        },
        {
            "contentImageId" : 3,
            "tagsId" : [1,2,3],
            "itemId" : [10,10,10],
            "axisX" : [111,222,333],
            "axisY" : [111,222,333]
        }
    ]
```
=> Tag라는 Table과 ContentImage라는 Table로 따로 만들어서 저장하는 방법을 사용하기로 결정했습니다.


**`문제점`**

1. 게시글 내용, ContentImage 사진 정보, Tags 정보를 꺼내기 위하여 RDS에 3번 왕복 해야 한다.
2. 태그 수정, 이미지 삭제 등 문제점이 발생할 수 있다
   
  Ex) Tags가 1번, 2번, 3번이 존재하는 경우, 1번만 삭제한 후 4번 Tag를 추가할 때 어떤 방식으로 Table을 수정해야 하는가?
  → 해당 게시글의 Tags를 전체 삭제했다가 다시 써야 하는 문제점?

  Ex) 한 게시글에 ContentImage가 여러 개가 들어가고, 그 안에 있는 Tags는 또 여러 개가 들어간다.
  → Tags Table의 Primary Key는 어떻게 정할 것이며, 
  어떠한 방식으로 찾아오는가? (ArticleId 찾고 그 다음 ContentImages 테이블에서 articleId 찾고… 또 찾고… 힘들다)

- ContentImages Table의 Primary Key를 contentImageId로 정하는 경우
(하나의 article에 여러 개의 ContentImages가 존재)
→ 수정 및 삭제 시 인덱싱이 굉장히 많이 증가

- Tags Table Primary key를 tagsId로 정하는 경우
→ 사진 수정 및 삭제 시에 인덱싱이 ContentImages Table보다 몇배는 증가

<details>
<summary>ERD 변경 전, 후 사진</summary>
  <br>
  ERD 변경 전
  
  ![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fea4c947e-13fd-46ba-a485-ed1def23435f%2FUntitled.png?table=block&id=c2650ed3-e11b-4132-9f33-b343e6f5b68d&spaceId=9f0916e0-feb7-4ca0-9f75-31b68b964561&width=2000&userId=ebd53b27-7b2e-4c47-806b-190748e081ca&cache=v2)
  
  ERD 변경 후
  
  ![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb94a3459-22db-4f09-8d0b-d28b276d9551%2FUntitled.png?table=block&id=59c0254f-270f-481d-80f2-51f17c77fb7b&spaceId=9f0916e0-feb7-4ca0-9f75-31b68b964561&width=2000&userId=ebd53b27-7b2e-4c47-806b-190748e081ca&cache=v2)
  
</details>

**`해결 방안`**
→ Tags를 통째로 Tags Column에 넣는 방법은 없을까?
- Tags Column에 객체를 JSON.stringify()를 통해 String으로 데이터를 넣는 방법.
  
```
    // tags String화
    const { error } = articleSchema.validate({ title, coverImage, content });
    if (error) throw new CustomError(error.details[0].message, 412);

    const stringTags = JSON.stringify(tags);
```

- 게시글을 보기 위해 DB에서 데이터를 꺼내올 때는 JSON.parse()를 통해 데이터를 다시 객체화한다.
```
//string 되어있는 tags 객체화
    const objectTags = JSON.parse(findArticle.tags);
```
=> 이렇게 DB를 읽기 좋게 최적화하는 것을 비정규화 데이터베이스라고 한다.

</details>

<details>
<summary>2. Sequelize Column type 변경 관련 문제점</summary>
  <br>
  
  **`문제점`**
  
  Article Table의 Column type을 변경해야 되는 문제점이 발생하였으며, residence column의 type을 String → Integer로 변경해야 했습니다.

    
  **`해결 방안`**
  
  이러한 경우 Article Table의 DB 전체를 삭제할 수 없기에, Column의 Type만 변경하도록 하였습니다.
  → Migration의 이용하여 간단하게 변경할 수 있었습니다.

  1. Migration 파일을 Sequelize-CLI를 통해 하나 생성합니다.
  ```
  npx sequelize migration:create --name item
  ```
  2. 생성된 migration 파일에 내가 변경하고자 하는 내용을 async up 부분 쪽에 넣어줍니다.
    (changeColumn, removeColumn, addcolumn 등 여러가지 메서드가 존재합니다.)
  ```
  'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
// 이 부분에서 changeColumn, removeColumn, addColumn 등 여러가지 메서드가 있다.
    await queryInterface.changeColumn('Articles', 'residence', {
			allowNull : true,
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
  ```
  3. Column type를 변경한 Table의 models도 type을 변경해준다.
  4. db:migrate를 하여 속성을 변경해준다.
     ```
     npx sequelize db:migrate
     ```

</details>


<details>
<summary>3. 3. 책갈피(Collection) 기능 관련 추가 Middleware 구축</summary>
  <br>
  
  **`문제점`**
  
  Collection 기능을 추가하려면 로그인을 하고 있을 경우와, 로그인을 하지 않는 경우로 기준을 먼저 나눠야 합니다.

    
  **`해결 방안`**
  
  이를 위한 기준점으로는 Token이 존재하였습니다.
  이를 이용하여 

→ If 로그인이 되어 있는 경우 : user의 정보를 받아온다

→ if 로그인이 되어 있지 않는 경우 : user의 정보를 받아오지 않고 pass 한다.

이러한 부분을 Middleware 구축을 통해 해결하였습니다.

- Middlewares 작성
  ```
  const checkMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;


  // Token을 통해 user 정보 확인
  try {
    const [tokenType, accessToken] = (authorization ?? '').split(' ');

    // token이 없는 경우
    if (!authorization || tokenType !== 'Bearer') {
      // userId를 false로 넘기기
      res.locals.userId = false;

      next();
    } else {
      // token이 있는 경우
      const { userId } = getAccessTokenPayload(accessToken);

      // userId를 res.locals에 저장
      res.locals.userId = userId;
      next();
    }
  } catch (err) {
    next(err);
    }
  };
  ```
1. Token이 있는 경우 res.locals.userId = userId를 저장
2. Token이 없는 경우 res.locals.userId = false를 저장

=> 이를 통해 userId를 받아온 후 RDS를 통해 Collection 데이터를 가지고 옵니다.

</details>

<details>
<summary>4. Collection 기능 추가 관련 Sequelize Query 문 Refactoring</summary>
  <br>
  
  **`문제점`**
  
    
  **`해결 방안`**
  

</details>

<details>
<summary>5. Crawling 관련 문제점</summary>
  <br>
  
  **`문제점`**
  
1. cheerio 라이브러리를 사용해서 크롤링 시 원하는 만큼의 데이터를 못 받아오는 현상
   
  : cheerio는 정적인 웹페이지를 크롤링 하는데 사용되기 때문에 오늘의 집 같은 무한 스크롤의 동적인 부분은 파싱을 하지 못함.
  
  puppeteer 라이브러리를 사용하여 해결함. 
  
  별도의 브라우저를 실행해야 하므로 성능 면에서는 cheerio보다 무겁고 느릴 수 있지만, 동적인 웹페이지를 크롤링해야 하는 상황이여서 사용함.

2. axios 결과값 반환 속도 문제
  ```
원래 의도 : [
329364,152354,232234,134234,234111,
546832,598932,142345,392834,253423 ...
]

실제 결과값:
[329364,152354,232234,134234,234111,
329364,152354,232234,134234,234111,
329364,152354,232234,134234,234111,
329364,152354,232234,134234,234111
]
  ```
    
  **`해결 방안`**
  Promise.all을 이용해 데이터 주고받기를 병렬로 처리. 이렇게 하면 DB에 저장할 때도 저장 속도가 더 높아짐.

  ![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbc791855-b3b5-4b60-961b-62ea68cb2157%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-07-27_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_2.23.36.png?table=block&id=101a2c05-84fb-48de-84c5-0b8266841997&spaceId=9f0916e0-feb7-4ca0-9f75-31b68b964561&width=2000&userId=ebd53b27-7b2e-4c47-806b-190748e081ca&cache=v2)

</details>



## 유튜브 시연영상

