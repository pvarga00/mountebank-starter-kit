FROM alpine:3.8

EXPOSE 80
EXPOSE 2525
EXPOSE 4545

ARG LOG_LEVEL=info

###
#Mountebank Stuffs
###
ADD ./imposters /imposters

ENV NODE_VERSION=12.13.0

RUN apk add --update nodejs nodejs-npm

ENV MOUNTEBANK_VERSION=2.0.0

RUN npm set unsafe-perm true \ 
 && npm install -g mountebank@${MOUNTEBANK_VERSION} --production \
 && npm cache clean --force 2>/dev/null \
 && rm -rf /tmp/npm*

CMD ["mb", "--configfile=imposters/imposters.ejs", "--allowInjection", "--loglevel=debug"]
#CMD ["mb", "--allowInjection", "--loglevel=debug"]
