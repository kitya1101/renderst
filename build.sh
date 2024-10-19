#!/usr/bin/env bash
# 프론트엔드 빌드
cd st
npm install
npm run build

# server/static 폴더 생성 및 빌드 파일 복사
cd ..
mkdir -p server/static
cp -r st/build/* server/static/