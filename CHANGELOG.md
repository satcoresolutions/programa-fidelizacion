# Changelog

Todos los cambios importantes de este proyecto serán documentados en este archivo.

El formato sigue una estructura basada en versiones y categorías de cambios.

---

## [Unreleased]

### Added
- 

### Changed
- 

### Fixed
- 

### Removed
- 

### Security
- 

---

## [1.2.0] - 2026-10-23

### Added
- Visualización del nivel de fidelización de cada miembro: Bronce, Plata y Oro.
- Consulta de los puntos acumulados durante la trayectoria del miembro.
- Indicador de progreso hacia el siguiente nivel de fidelización.
- Historial de movimientos con fechas, puntos y descripciones.
- Confirmación antes de realizar el canje de una recompensa.
- Mensajes de confirmación para informar sobre las operaciones realizadas.

### Changed
- Actualización de la interfaz para utilizar los estilos y componentes compartidos de SatCore Solutions.
- Unificación de colores, bordes, fondos, botones y campos de formulario mediante los tokens de diseño.
- Mejora de la presentación del saldo de puntos, los niveles y el historial de movimientos.
- Ajustes en la organización visual de la información de los miembros y las recompensas.
- Actualización de la configuración SEO para reflejar la identidad y el propósito del Programa de fidelización.
- Actualización de los metadatos de la aplicación y de su manifiesto PWA.

### Fixed
- Ajustes de presentación para mantener la coherencia visual entre las distintas secciones de la aplicación.
- Correcciones menores en la disposición de los elementos de la interfaz y su adaptación a diferentes tamaños de pantalla.

### Removed
- Eliminación de estilos anteriores sustituidos por los tokens y las clases compartidas del sistema de diseño.

### Security
- Se mantiene el almacenamiento local de los datos mediante `localStorage`.
- Se conserva la advertencia sobre la pérdida potencial de información al borrar los datos del navegador.
- Se mantiene la recomendación de implementar mecanismos adicionales de respaldo para información importante.

---

## [1.1.0] - 2026-10-20

### Added
- Lanzamiento inicial de Programa de fidelización, micro aplicación desarrollada por SatCore Solutions.
- Registro y gestión de miembros del programa de fidelización.
- Registro de visitas de los miembros.
- Sistema de acumulación de puntos.
- Consulta del saldo de puntos de cada miembro.
- Gestión de recompensas disponibles.
- Sistema de canje de puntos por recompensas.
- Control de puntos y recompensas asociados a los miembros.
- Persistencia local de la información mediante `localStorage`.
- Interfaz adaptable a dispositivos móviles y de escritorio.
- Identidad visual de SatCore Solutions con logotipo y eslogan.
- Documentación inicial del proyecto en `README.md`.
- Registro de cambios mediante `CHANGELOG.md`.

### Changed
- 

### Fixed
- 

### Removed
- 

### Security
- Documentación de las limitaciones de seguridad y privacidad asociadas al almacenamiento local.
- Advertencia sobre la pérdida potencial de información al eliminar los datos del navegador.
- Recomendación de implementar mecanismos adicionales de respaldo para información importante.