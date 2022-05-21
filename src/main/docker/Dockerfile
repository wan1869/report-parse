FROM java:8

VOLUME /tmp/tomcat

ADD edi.jar app.jar
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' >/etc/timezone
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/ -Djava.library.path=/usr/lib ./urandom", "-jar", "/app.jar"]