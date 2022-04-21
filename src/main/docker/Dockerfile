FROM ubuntu:20.04

WORKDIR /root

# ARG version
# RUN echo $version
#RUN /bin/bash install_client.sh -e no
# ADD taos.cfg
# Install JDK
WORKDIR /usr/local/java
ADD jdk-8u271-linux-x64.tar.gz /usr/local/java
ENV JAVA_HOME=/usr/local/java/jdk1.8.0_271
ENV CLASSPATH=.:$JAVA_HOME/lib:$JAVA_HOME/lib
ENV PATH=$JAVA_HOME/bin:$PATH
CMD ["java","-version"]

WORKDIR /
ADD edi.jar app.jar
CMD ["java", "-Djava.security.egd=file:/dev/ -Djava.library.path=/usr/lib ./urandom", "-jar", "/app.jar"]