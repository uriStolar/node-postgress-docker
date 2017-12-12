FROM postgres:10.1
LABEL maintainer="uristolar@gmail.com"
EXPOSE 5432
COPY init.sql /docker-entrypoint-initdb.d/
VOLUME /var/lib/postgresql/data/