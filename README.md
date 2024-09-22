# Desplegar el Proyecto en Local

Sigue estos pasos para desplegar el proyecto en tu entorno local:

## Prerrequisitos

1. **Node.js**: Asegúrate de tener Node.js instalado. Puedes descargarlo desde [aquí](https://nodejs.org/).
2. **Git**: Asegúrate de tener Git instalado. Puedes descargarlo desde [aquí](https://git-scm.com/).

## Instrucciones

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/jerucho/tienda-sharp.git
   ```

   Luego entra en la carpeta con:

   ```bash
   cd tienda-sharp
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Iniciar el servidor en modo desarrollador**:

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   Abre tu navegador y ve a `http://localhost:5173` para ver el proyecto en funcionamiento.

¡Listo! Ahora deberías poder ver y trabajar en el proyecto en tu entorno local.

## Normas para Pull Requests

Para contribuir al proyecto, sigue estas normas al hacer un pull request:

1. **Fork del repositorio**:
   Realiza un fork del repositorio a tu cuenta personal.

2. **Crear una rama**:
   Crea una nueva rama para tu feature o fix:

   ```bash
   git checkout -b nombre-de-tu-rama
   ```

3. **Realizar cambios**:
   Realiza los cambios necesarios en tu rama.

4. **Commit de los cambios**:
   Asegúrate de escribir mensajes de commit claros y concisos:

   ```bash
   git commit -m "Descripción clara de los cambios"
   ```

5. **Actualizar tu rama**:
   Asegúrate de que tu rama esté actualizada con la rama `main` del repositorio original:

   ```bash
   git fetch upstream
   git merge upstream/main
   ```

6. **Push de la rama**:
   Sube tu rama a tu fork:

   ```bash
   git push origin nombre-de-tu-rama
   ```

7. **Crear el pull request**:
   Ve al repositorio original y crea un pull request desde tu rama.

8. **Descripción del pull request**:
   Proporciona una descripción detallada de los cambios que has realizado y el propósito del pull request.

9. **Revisión**:
   Espera la revisión de tu pull request y realiza los cambios necesarios si se solicitan.

Siguiendo estas normas, ayudarás a mantener el proyecto organizado y facilitarás el proceso de revisión y fusión de cambios.

## Notas

- Si encuentras algún problema, revisa los logs en la terminal para obtener más detalles.
- Asegúrate de tener los puertos necesarios disponibles y no en uso por otras aplicaciones.
