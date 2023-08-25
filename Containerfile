FROM registry.access.redhat.com/ubi9/nodejs-18-minimal

ENV TZ="Europe/Helsinki"

WORKDIR /opt/app-root/src

ARG BASE_PATH
ENV BASE_PATH=$BASE_PATH

ARG STAGING
ENV STAGING=$STAGING

ARG E2E
ENV E2E=$E2E

COPY package* ./
RUN npm ci --omit-dev --ignore-scripts
COPY . .

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "prod"]
