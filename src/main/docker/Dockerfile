FROM java:8

VOLUME /tmp/tomcat

ADD edi.jar app.jar
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/ -Djava.library.path=/usr/lib ./urandom", "-jar", "/app.jar"]