FROM amazoncorretto:17-alpine-jdk
MAINTAINER MariaRamos
COPY target/RamosMaria-0.0.1-SNAPSHOT.jar  mariaramos-app.jar
ENTRYPOINT ["java","-jar", "/mariaramos-app.jar"]
EXPOSE 8080