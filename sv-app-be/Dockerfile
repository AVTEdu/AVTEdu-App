FROM node:16

WORKDIR /app

#Cài dependencies trước để tận dụng layer cache
COPY package.json package-lock.json ./
RUN npm install

#Copy mã nguồn
COPY src ./src

EXPOSE 4000
#node_modules/nodemon được dùng qua npm start (compose), prod dùng node src/index.js
CMD ["node", "src/index.js"]
