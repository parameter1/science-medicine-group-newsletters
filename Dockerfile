FROM node:14.21 as build
WORKDIR /repo
ARG TENANT

ADD package.json yarn.lock lerna.json /repo/
ADD packages /repo/packages
ADD tenants/$TENANT /repo/tenants/$TENANT
RUN --mount=type=cache,target=/repo/.yarn YARN_CACHE_FOLDER=/repo/.yarn yarn install --frozen-lockfile
ENV NODE_ENV production
RUN yarn build

WORKDIR /repo/tenants/$TENANT

FROM node:14.21-alpine
ENV NODE_ENV production
ENV PORT 80
ARG TENANT
COPY --from=build /repo /repo
WORKDIR /repo/tenants/$TENANT
ENTRYPOINT [ "node", "index.js" ]
