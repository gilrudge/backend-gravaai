FROM node:20.17.0

WORKDIR /USR/GRAVAAI/API

ENV PORT=3000
ENV DB_URL=mongodb://192.168.0.5:27017/gravaai
ENV SECRET=HRHUHIDJIDjiejdieji43mkmk33mkmm567mkmcd
ENV EMAIL_USER=zetta.autenticacao@gmail.com
ENV EMAIL_APP_PASSWORD=gskpyxpcnfupford

COPY package.json /USR/GRAVAAI/API/

RUN npm install

COPY . /USR/GRAVAAI/API/

CMD ["node", "/USR/GRAVAAI/API/index.js"]
