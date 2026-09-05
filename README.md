# 🏥 Nuffys – Backend API  
Sistema Integral de Gestión Clínica y Administrativa

Nuffys es una API RESTful diseñada para la gestión completa de consultorios clínicos especializados en terapias alternativas.  
El sistema permite administrar usuarios, roles, pacientes, historia clínica, citas, facturación y pagos parciales bajo un esquema seguro con autenticación basada en JWT.

---

## 🧠 Arquitectura del sistema

El proyecto está construido bajo una arquitectura modular orientada a dominios, con separación clara de responsabilidades:

- Controllers → Lógica de negocio
- Models → Definición ORM (Sequelize)
- Migrations → Control estructural de la base de datos
- Routes → Endpoints organizados por módulo
- Middlewares → Autenticación y autorización

---

## 🚀 Tecnologías utilizadas

| Área | Tecnología |
|------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Base de datos | MySQL |
| ORM | Sequelize + Sequelize-CLI |
| Autenticación | JWT |
| Encriptación | bcrypt |
| Control de versiones | Git & GitHub |

---

## 🔐 Seguridad implementada

- Autenticación con JSON Web Tokens (JWT)
- Encriptación de contraseñas con bcrypt
- Protección de rutas privadas mediante middleware
- Control de acceso basado en roles (RBAC)
- Validación estructural de datos

---

## 🧩 Módulos implementados

### 👥 Gestión de usuarios
- Roles
- Usuarios
- Relación uno a muchos (Role → Users)
- CRUD completo
- Login con generación de token

### 🏥 Gestión clínica

#### Pacientes
- Información administrativa completa
- Relación con consultorios

#### Consultorios
- Soporte multi-sede
- Relación uno a muchos con pacientes

#### Historia clínica
- Clinical Records
- Clinical Notes (motivo de consulta, diagnóstico, plan terapéutico)

### 📅 Agenda y citas
- Registro de citas
- Asociación con paciente y profesional
- Estados de cita (programada, atendida, cancelada)

### 💰 Facturación y contabilidad
- Creación de facturas
- Items por factura
- Pagos parciales (abonos)
- Cálculo automático de estado (pendiente, parcial, pagada)
- Relación paciente → factura → pagos

---

## 📁 Estructura del proyecto

```
BACKEND/
├── node_modules/
├── src/
│   ├── api/
│   │   ├── config/
│   │   ├── migrations/
│   │   ├── models/
│   │   └── seeders/
│   ├── controllers/
│   ├── routers/
│   ├── utils/
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── .sequelizerc
├── package-lock.json
├── package.json
└── README.md
```

---

## 🗃️ Base de Datos

La base de datos está estructurada con migraciones versionadas para garantizar consistencia estructural.

### Crear modelo con migración

```bash
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,role_id:integer
```

### Ejecutar migraciones

```bash
npx sequelize-cli db:migrate
```

### Revertir última migración

```bash
npx sequelize-cli db:migrate:undo
```

---

## 🔄 Endpoints principales (ejemplo)

### Auth
POST /api/auth/login

### Roles
GET /api/roles  
POST /api/roles  
PUT /api/roles/:id  
DELETE /api/roles/:id  

### Users
CRUD completo protegido

### Patients
CRUD completo protegido

### Appointments
CRUD completo protegido

### Invoices
CRUD + registro de pagos

---

## ⚙️ Cómo levantar el proyecto

### 1️⃣ Clonar repositorio
```bash
git clone <repository-url>
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar variables de entorno

Crear archivo `.env`:

```
PORT=3000
DB_NAME=theraclinic
DB_USER=root
DB_PASSWORD=tu_password
DB_HOST=localhost
JWT_SECRET=super_secret_key
```

### 4️⃣ Ejecutar migraciones
```bash
npx sequelize-cli db:migrate
```

### 5️⃣ Levantar servidor
```bash
npm run dev
```

---

## 📈 Estado actual del proyecto

✔ Arquitectura estable  
✔ Seguridad implementada  
✔ CRUD completo en todos los módulos  
✔ Relaciones correctamente definidas en Sequelize  
✔ Sistema listo para integración con frontend  

---

## 🎯 Objetivo del proyecto

Desarrollar un sistema clínico moderno, seguro y escalable, capaz de adaptarse a múltiples consultorios y soportar procesos administrativos y clínicos reales.

---

## 👨‍💻 Autor

Desarrollado por **Yeison Andrés Marroquín Bernal**  
Ingeniero de Software – Full Stack Developer
