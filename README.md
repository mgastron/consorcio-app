# Consorcio App

Aplicación móvil para la gestión de consorcios desarrollada con React Native (frontend) y Spring Boot (backend).

## Requisitos Previos

### Para el Backend
- Java JDK 11 o superior
- Maven 3.6 o superior
- MySQL 8.0 o superior

### Para el Frontend
- Node.js 14 o superior
- npm 6 o superior
- Expo CLI (ejecutar: npm install -g expo-cli)
- Un dispositivo móvil con Expo Go instalado o un emulador

## Configuración del Proyecto

### Backend

1. Configurar la base de datos MySQL:
   - Acceder a MySQL: mysql -u root -p
   - Crear base de datos: CREATE DATABASE consorcio_db;

2. Modificar las credenciales de la base de datos en:
   backend/src/main/resources/application.properties

3. Ejecutar el backend:
   - Navegar a la carpeta: cd backend
   - Ejecutar: mvn spring-boot:run
   - El servidor estará disponible en http://localhost:8080

### Frontend

1. Instalar las dependencias:
   - Navegar a la carpeta: cd frontend/consorcio-app
   - Ejecutar: npm install

2. Iniciar la aplicación:
   - Ejecutar: npx expo start

3. Para acceder a la aplicación:
   - Escanear el código QR con la app Expo Go en tu dispositivo móvil
   - Presionar 'w' para abrir en navegador web
   - Presionar 'i' para abrir en simulador iOS (requiere macOS y Xcode)
   - Presionar 'a' para abrir en emulador Android (requiere Android Studio)

## Estructura del Proyecto

consorcio-app/
├── backend/
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/
│           │       └── consorcio/
│           │           └── api/
│           └── resources/
└── frontend/
    └── consorcio-app/
        └── src/
            ├── screens/
            ├── services/
            └── config/

## Tecnologías Utilizadas

### Backend
- Spring Boot
- Spring Security
- Spring Data JPA
- MySQL
- Maven

### Frontend
- React Native
- Expo
- React Navigation
- Axios
- @expo/vector-icons

## Solución de Problemas Comunes

1. Error de CORS en desarrollo:
   - Verificar que el backend tenga habilitado CORS para el origen del frontend

2. Error de conexión al backend:
   - Verificar que la URL en frontend/consorcio-app/src/config/api.js sea correcta
   - Asegurarse que el backend esté corriendo

3. Errores de Expo:
   - Ejecutar 'expo doctor' para verificar la configuración
   - Limpiar cache con 'expo start -c'

## Contribuir

1. Hacer fork del repositorio
2. Crear una rama para tu feature (git checkout -b feature/AmazingFeature)
3. Commit de tus cambios (git commit -m 'Add some AmazingFeature')
4. Push a la rama (git push origin feature/AmazingFeature)
5. Abrir un Pull Request

## Dependencias Principales

Las dependencias principales están listadas en:
- Backend: backend/pom.xml
- Frontend: frontend/consorcio-app/package.json

## Notas Adicionales

- La aplicación está optimizada para iOS y Android
- Se recomienda usar la última versión de Expo Go
- Para desarrollo local, asegurarse que el dispositivo/emulador y la computadora estén en la misma red WiFi 