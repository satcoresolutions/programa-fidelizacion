<div align="center">

<img src="./public/logo.png" alt="SatCore Solutions" width="220" />

# Programa de fidelización

**Micro aplicación para gestionar miembros, puntos y recompensas de un programa de fidelización.**

Aplicación web orientada a pequeños negocios que permite registrar clientes o miembros, acumular puntos mediante visitas y gestionar el canje de recompensas de forma sencilla desde el navegador.

---

### SOFTWARE AND TECHNOLOGY CORE SOLUTIONS

**SATCORE SOLUTIONS**

_Soluciones digitales seguras, accesibles y funcionales para todos._

[![License](https://img.shields.io/badge/License-SCSAL%201.0-000000.svg)](./LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-SatCore%20Solutions-181717?logo=github)](https://github.com/satcoresolutions)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-Package_Manager-CB3837?logo=npm)](https://www.npmjs.com/)

</div>

---

# Sobre el proyecto

**Programa de fidelización** es una micro aplicación desarrollada originalmente por **SatCore Solutions**, dentro del ecosistema de soluciones tecnológicas de **SOFTWARE AND TECHNOLOGY CORE SOLUTIONS**.

El proyecto ha sido desarrollado con el propósito de facilitar la gestión de programas de fidelización para pequeños negocios, permitiendo registrar miembros, controlar sus visitas, acumular puntos y gestionar recompensas.

La aplicación busca ofrecer una herramienta sencilla y accesible para negocios que desean implementar un sistema básico de fidelización sin necesidad de utilizar una infraestructura compleja.

Este repositorio forma parte de los proyectos tecnológicos propios de **SatCore Solutions** y puede ser utilizado, estudiado, modificado y redistribuido de acuerdo con los términos establecidos en la **SatCore Solutions Attribution License — SCSAL 1.0**.

---

# SatCore Solutions

**SOFTWARE AND TECHNOLOGY CORE SOLUTIONS**

**Nombre comercial:** SatCore Solutions

**Eslogan:**

> _Soluciones digitales seguras, accesibles y funcionales para todos._

SatCore Solutions desarrolla soluciones digitales orientadas a software, automatización, inteligencia artificial, ciberseguridad, formación tecnológica y herramientas digitales.

El ecosistema se estructura alrededor de cinco áreas principales:

### Desarrollo

Creación de sitios web, aplicaciones, herramientas digitales, plataformas y soluciones de software.

### Automatizador

Automatización de procesos, agentes inteligentes, integración de APIs y sistemas capaces de ejecutar tareas de manera automatizada.

### Seguridad

Ciberseguridad, auditoría, análisis de vulnerabilidades, hardening, monitoreo y protección de sistemas.

### Estudio

Formación, documentación, recursos educativos, tutoriales y proyectos orientados al aprendizaje tecnológico.

### Marketing

Diseño de marca, presencia digital, contenido tecnológico, analítica y herramientas digitales para comunicación y posicionamiento.

---

# Características

- Registro y gestión de miembros del programa de fidelización.
- Registro de visitas de los miembros.
- Acumulación de puntos.
- Consulta del saldo de puntos de cada miembro.
- Gestión de recompensas disponibles.
- Canje de puntos por recompensas.
- Control del historial de puntos y recompensas.
- Interfaz sencilla para pequeños negocios.
- Persistencia de información en el navegador mediante `localStorage`.
- Funcionamiento sin backend ni base de datos externa.
- Diseño adaptable a dispositivos móviles y de escritorio.
- Identidad visual de SatCore Solutions.

---

# Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- Next.js
- React
- TypeScript
- Tailwind CSS
- `localStorage`
- Node.js
- npm

### Tecnologías principales

**Next.js** como framework principal, **React** para la interfaz de usuario, **TypeScript** para tipado estático y **Tailwind CSS** para los estilos de la aplicación.

La información de la aplicación se almacena localmente en el navegador mediante `localStorage`, por lo que el proyecto no requiere actualmente un servidor, API o base de datos.

---

# Requisitos

Antes de ejecutar el proyecto, asegúrate de contar con las herramientas necesarias.

- Node.js 18 o superior
- npm
- Git

No se requiere una base de datos ni servicios externos para ejecutar la versión actual de la aplicación.

---

# Instalación

Clona el repositorio:

```bash
git clone https://github.com/satcoresolutions/programa-fidelizacion.git
```

Accede al proyecto:

```bash
cd programa-fidelizacion
```

Instala las dependencias:

```bash
npm install
```

---

# Configuración

La versión actual del proyecto no requiere variables de entorno.

No es necesario crear un archivo `.env.local` para ejecutar la aplicación.

**Nunca publiques credenciales, tokens, claves privadas, contraseñas u otros secretos en el repositorio.**

---

# Desarrollo

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Después, abre:

```text
http://localhost:3000
```

---

# Producción

Genera la compilación:

```bash
npm run build
```

Inicia la aplicación:

```bash
npm start
```

---

# Estructura del proyecto

```text
programa-fidelizacion/

│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   └── LoyaltyProgram/
│
├── lib/
│   ├── data.ts
│   └── ...
│
├── public/
│   └── logo.png
│
├── LICENSE
├── README.md
├── CHANGELOG.md
├── package.json
├── tsconfig.json
└── ...
```

La estructura puede cambiar dependiendo de la arquitectura y evolución del proyecto.

---

# Arquitectura

La aplicación utiliza una arquitectura frontend basada en Next.js y componentes React.

```text
Interfaz de usuario
        │
        ▼
Componentes React
        │
        ▼
Lógica del programa
        │
        ├── Miembros
        ├── Visitas
        ├── Puntos
        └── Recompensas
        │
        ▼
Persistencia local
        │
        ▼
localStorage del navegador
```

La versión actual funciona completamente del lado del cliente y no requiere una API o base de datos externa.

---

# Datos y privacidad

La aplicación utiliza almacenamiento local mediante `localStorage`.

Los datos registrados por el usuario permanecen asociados al navegador y dispositivo utilizados y no se sincronizan automáticamente entre diferentes dispositivos o navegadores.

La información puede perderse si el usuario:

- elimina los datos del navegador;
- limpia el almacenamiento del sitio;
- utiliza otro navegador o dispositivo;
- restablece el navegador o el sistema.

Por esta razón, el usuario debe considerar mecanismos adicionales de respaldo si los datos almacenados son importantes para la operación de su negocio.

La aplicación no incluye actualmente un sistema de autenticación, sincronización en la nube ni base de datos remota.

Los proyectos que procesen información personal, sensible o confidencial deberán implementar las medidas técnicas y legales correspondientes a su contexto de uso.

---

# Seguridad

La seguridad forma parte de los principios de desarrollo de SatCore Solutions.

Si encuentras una vulnerabilidad de seguridad relacionada con este proyecto, evita publicar detalles técnicos sensibles de forma pública antes de que pueda ser evaluada.

Para reportar una vulnerabilidad:

**Email:** satcoresolutions@gmail.com

Incluye, cuando sea posible:

- descripción del problema;
- impacto potencial;
- pasos generales para reproducirlo;
- versión afectada;
- información adicional relevante.

No incluyas credenciales reales ni información personal innecesaria.

---

# Desarrollo y contribuciones

Las contribuciones, correcciones, mejoras y adaptaciones son bienvenidas siempre que respeten la licencia del proyecto.

Antes de realizar cambios importantes, se recomienda revisar la documentación del repositorio y mantener una estructura de código coherente con la arquitectura existente.

Las contribuciones no eliminan ni sustituyen la autoría original de SatCore Solutions.

---

# Proyectos derivados

Este proyecto puede utilizarse como base para desarrollar nuevas soluciones.

Se permite:

- copiar;
- estudiar;
- modificar;
- adaptar;
- ampliar;
- integrar;
- redistribuir;
- utilizar comercialmente;
- crear proyectos derivados.

Sin embargo, los proyectos derivados deberán reconocer claramente a **SatCore Solutions** como fuente original cuando utilicen una parte sustancial del proyecto.

Ejemplo:

> Basado en Programa de fidelización, desarrollado originalmente por SatCore Solutions.

Cuando sea posible, deberá incluirse también un enlace al repositorio original:

```text
https://github.com/satcoresolutions/programa-fidelizacion
```

---

# Atribución

La atribución constituye una condición obligatoria de la licencia de este proyecto.

Cuando el código sea copiado, modificado, integrado o redistribuido de manera sustancial, deberá conservarse una referencia razonablemente visible a **SatCore Solutions** como desarrollador original.

Una atribución válida puede adoptar, entre otras, la siguiente forma:

> Este proyecto está basado en Programa de fidelización, desarrollado originalmente por SatCore Solutions.

**Proyecto original:**

```text
https://github.com/satcoresolutions/programa-fidelizacion
```

**SatCore Solutions:**

```text
https://github.com/satcoresolutions
```

La atribución no deberá presentarse de manera que implique que SatCore Solutions respalda, patrocina, mantiene o garantiza un proyecto derivado cuando dicha relación no exista.

---

# Marca y propiedad intelectual

El código fuente de este proyecto está sujeto a la **SatCore Solutions Attribution License — SCSAL 1.0**.

La licencia del código no transfiere automáticamente derechos sobre:

- SatCore Solutions;
- SOFTWARE AND TECHNOLOGY CORE SOLUTIONS;
- logotipos;
- identidad visual;
- nombres comerciales;
- marcas;
- dominios;
- elementos gráficos;
- otros signos distintivos asociados con SatCore Solutions.

El uso del código no constituye autorización para representar una relación oficial con SatCore Solutions.

La creación de un proyecto derivado tampoco otorga derechos para registrar o reclamar como propios los signos distintivos de SatCore Solutions.

---

# Dependencias de terceros

Este proyecto utiliza bibliotecas, frameworks, paquetes, iconos, fuentes u otros componentes desarrollados por terceros.

Cada componente de terceros permanece sujeto a su propia licencia.

La **SCSAL 1.0** no modifica ni reemplaza las licencias de terceros.

Los usuarios y distribuidores deberán respetar las condiciones correspondientes a las dependencias utilizadas por el proyecto.

---

# Despliegue

Este proyecto puede desplegarse en plataformas compatibles con Next.js.

Para una implementación web pueden utilizarse plataformas como Vercel u otros proveedores compatibles.

El proceso general puede incluir:

1. Crear o seleccionar un repositorio.
2. Configurar el proyecto en la plataforma de despliegue.
3. Instalar las dependencias.
4. Ejecutar la compilación.
5. Configurar el proveedor de infraestructura.
6. Realizar el despliegue.
7. Verificar el funcionamiento de la aplicación.

La plataforma de despliegue y sus servicios permanecen sujetos a sus propios términos y condiciones.

---

# Estado del proyecto

**Estado:** Activo

**Versión:** 1.0.0

**Última actualización:** 2026-10-20

---

# Roadmap

- [ ] Mejorar la gestión del historial de puntos.
- [ ] Incorporar estadísticas básicas de fidelización.
- [ ] Añadir filtros y búsqueda de miembros.
- [ ] Incorporar exportación de información.
- [ ] Evaluar una futura versión con persistencia en base de datos.
- [ ] Evaluar sincronización entre dispositivos.
- [ ] Evaluar autenticación para una futura versión multiusuario.

---

# Licencia

Este proyecto se distribuye bajo:

## SatCore Solutions Attribution License — SCSAL 1.0

La licencia permite utilizar, estudiar, modificar, integrar y redistribuir el software, incluyendo su uso comercial, siempre que se respeten las condiciones de atribución y demás términos establecidos en la licencia.

Consulta el archivo:

```text
LICENSE
```

para conocer los términos completos.

---

# Autoría

## SatCore Solutions

**SOFTWARE AND TECHNOLOGY CORE SOLUTIONS**

_Soluciones digitales seguras, accesibles y funcionales para todos._

GitHub:

```text
https://github.com/satcoresolutions
```

Email:

```text
satcoresolutions@gmail.com
```

---

<div align="center">

**Desarrollado originalmente por SatCore Solutions.**

**© SatCore Solutions — Todos los derechos reservados, excepto los derechos concedidos mediante SCSAL 1.0.**

</div>
