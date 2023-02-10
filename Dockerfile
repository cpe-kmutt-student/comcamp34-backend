FROM node:16-alpine
# ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# generated prisma files
COPY prisma ./prisma/
ARG NODE_ENV
COPY . .
RUN npm install
ENV PORT=8080
RUN npx prisma generate
EXPOSE $PORT
RUN chown -R node /usr/src/app
USER node
CMD ["node","server.js"]