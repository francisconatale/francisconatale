# Backup de Proyectos para CV

Copies extraídos del portfolio para reutilizar en el CV profesional.

---

## 1. Gestión de Cursos BPMN (Gestión de Procesos)

- **Rol sugerido para CV**: Backend Architect & Java Engineer
- **Tecnologías**: Java 17, Spring Boot 3, Flowable BPMN, Spring Security 6, PostgreSQL, Docker, REST, HATEOAS
- **Repositorio**: https://github.com/AlieniAgustin/GTPN-GestionCursos-Flowable

### Formato CV (Bullets de impacto)
- Diseñó e implementó una arquitectura Backend-for-Frontend (BFF) desacoplada con Spring Boot 3 sobre Flowable BPMN, aislando el motor de procesos de las aplicaciones cliente.
- Configuró seguridad multi-contexto con Spring Security 6 aislando autenticación M2M (API Key), endpoints REST y acceso web tradicional.
- Implementó patrón Strategy y HATEOAS para resolución dinámica de tareas heterogéneas según tipo de consumidor.
- Separó la persistencia delimitando el estado transitorio del flujo en Flowable y centralizando entidades de negocio, documentos e históricos en PostgreSQL.

### Copy original del portfolio
- **Categoría**: Plataforma de orquestación de procesos de negocio
- **Problema**: Desarrollo de una plataforma para coordinar los procesos de capacitación de una institución. El desafío principal era orquestar flujos de trabajo con tareas humanas heterogéneas, atender a tres perfiles de consumidores diferentes y evitar el acoplamiento directo entre los clientes y el motor de procesos.
- **Decisiones**:
  - Aislamiento del motor (BFF): Implementación de un Backend-for-Frontend en Spring Boot 3 para que las aplicaciones cliente interactúen con APIs de negocio y nunca directamente con el motor de procesos.
  - Seguridad multi-contexto: Configuración de tres SecurityFilterChain independientes en Spring Security 6 para aislar la autenticación M2M (API Key), los consumos REST y el acceso web tradicional.
  - Resolución dinámica de tareas: Implementación del patrón Strategy junto a HATEOAS para que el backend comunique dinámicamente las acciones y destinos según el tipo de tarea a resolver.
  - Separación de persistencia: Delimitación de responsabilidades dejando el estado transitorio del flujo en Flowable y centralizando las entidades de negocio, documentos e históricos en PostgreSQL.
  - Integridad del dominio: Uso de records inmutables en los contratos HTTP y modelos JPA con métodos de negocio explícitos para preservar los invariantes del sistema.
- **Resultado**: Arquitectura modular y desacoplada que permite extender nuevos procesos de negocio sin modificar endpoints existentes ni exponer la topología interna del motor de procesos.

---

## 2. StarFighter

- **Rol sugerido para CV**: Software Engineer (Java / Core Architecture)
- **Tecnologías**: Java, Programación Orientada a Objetos (OOP), Patrones de Diseño (GoF), Cucumber (BDD)
- **Repositorio**: https://github.com/francisconatale/starfighter

### Formato CV (Bullets de impacto)
- Diseñó e implementó el motor central de juego por turnos desacoplando interacciones complejas mediante patrones de diseño GoF y arquitectura por responsabilidades.
- Estructuró el ciclo de vida del juego mediante un pipeline determinístico por etapas ordenadas e independientes.
- Diseñó suites de pruebas automatizadas con Cucumber (BDD) para validar invariantes y reglas de negocio complejas desde escenarios de comportamiento.

### Copy original del portfolio
- **Categoría**: Motor de juego por turnos
- **Problema**: Desarrollo de un motor de juego por turnos. El desafío era modelar las interacciones entre unidades, armas y habilidades sin concentrar las reglas de juego en estructuras condicionales difíciles de mantener.
- **Decisiones**:
  - Resolución de turnos: División de la ejecución en etapas independientes y ordenadas para controlar el ciclo de juego.
  - Diseño extensible: Separación de responsabilidades y aplicación de patrones de diseño para incorporar nuevas mecánicas sin modificar innecesariamente las existentes.
  - Pruebas de comportamiento: Uso de Cucumber para definir escenarios de interacción y validar las reglas del juego desde la perspectiva del comportamiento esperado.
- **Resultado**: Motor de juego estructurado por responsabilidades, con reglas desacopladas y escenarios automatizados para validar las interacciones entre sus componentes.
