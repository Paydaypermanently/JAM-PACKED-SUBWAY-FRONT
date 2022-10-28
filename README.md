# 개발 규칙
#### 업데이트: 2022.08.29

## ** eslint 활성화 **

## 디렉토리 구조
- [[Weplanet_WebFE] Directory Structure 2022](https://chartreuse-umbrella-dc6.notion.site/Weplanet_WebFE-Directory-Structure-2022-629fc4cc338a49e39116ccc4c425b6d0)
---

## 함수 작성 규칙
- function 사용
```ts
// (x)
const getAuthA = () => {
    return
}

// (o)
function getAuthB() {
    return
}
```
---
## 내보내기 규칙
```ts
// (x)
export function handleFetch() {
    return
}

export default function handleFetch() {
    return
}

// (o) export
function handleFetch1() {
    return
}

function handleFetch2() {
    return
}

export {handleFetch1, handleFetch2}

// (o) export default
function handleFetch() {
    return
}

export default function handleFetch() {
    return
}
```
---
## Interface / Type 작성 규칙
- interface: 대문자 I로 시작
```ts
interface IPostAuthRequest {
    email: string
    password: string
}

interface IPostAuthResponse {
    id: number
}
```
- type: 대문자 T로 시작
```ts
type TUserType = 'personal' | 'vendor'
```
---
## 함수 작성 규칙

```ts
function [method]RoutingPath() {
    return request()    
}
```

```ts
function [method]RoutingPathSubPath() {
    return request()
}
```    

### ex) 정적 [GET] /auth/refresh
```ts

function getAuthRefresh() {
    return request()
}
```

### ex) 동적 [GET] /products/{id}
```ts
function getProductWithId(id, params) {
    return request({url: `${PATH}/${id}`, params})
}
```
---
## 배포 설정
- .pem 파일, aws profile 설정 필요
- 해당 내용 추가(backend)
```shell
#!/bin/bash
AWS_PROFILE=$1
IMAGE_NAME=
AWS_REGION=
CLUSTER_NAME=
SERVICE_NAME=
REGISTRY_URL=[NEED_REGISTRY_URL].dkr.ecr.${AWS_REGION}.amazonaws.com/${IMAGE_NAME}:latest
```

---
## Styles
- classname: 공백은 언더바(_)로 표시함
- 반응형: contents 내용은 고정, 여백만 늘어남