# Guía interna — LMRA Site (NO subir este archivo al repositorio público)

Esta guía es para ti y para quien mantenga el sitio después. Contiene todo lo
operativo que no debe vivir en el README público del laboratorio.

---

## 1. Cómo editar contenido (sin tocar componentes)

Cada sección lee de `src/content/<colección>/*.yaml`. Para añadir o editar,
agrega/edita un archivo `.yaml` desde la interfaz web de GitHub — no hace
falta clonar el repo ni tocar `.astro`.

### Research Areas — `src/content/research/*.yaml`
```yaml
title: "Nombre de la línea"
tag: "ETIQUETA-CORTA"        # ej. "BIOMEDICAL"
order: 4                      # posición en la lista
summary: "1 línea para la card de home."
description: "Párrafo largo para la página /research."
```

### People — `src/content/team/*.yaml`
Ya hay 5 archivos (`01` a `05`). El `01` es el PI (Javier Darío Sanjuán De
Caro) con `isPI: true`. Los otros 4 son placeholders — edítalos así cuando
tengas los nombres reales:

```yaml
name: "Nombre completo"
role: "Rol (ej. MSc Student, Research Assistant)"
bio: "2-3 líneas de bio."
placeholder: false            # cámbialo a false al llenar el cupo
order: 2
```

Para añadir un 6º miembro, copia cualquier archivo y súbele el `order`.

### Publications — `src/content/publications/*.yaml`
Carpeta con solo un README explicando el formato (la página muestra un empty
state limpio mientras no haya entradas reales). Cuando tengas papers, crea un
archivo por publicación:

```yaml
title: "Título del paper"
authors: "Apellido, N., Apellido, M."
venue: "Nombre de journal/conferencia"
year: 2026
link: "https://doi.org/..."   # opcional
tags: ["biomedical", "control"]  # opcional
```

### Open Source Software — `src/content/software/*.yaml`
Mismo patrón:

```yaml
name: "nombre-del-repo"
description: "Qué hace la herramienta."
repoUrl: "https://github.com/org/repo"  # opcional
tags: ["python", "ros2"]                 # opcional
```

**Cómo editar un YAML desde GitHub (sin terminal):** entra al archivo en
GitHub → ícono de lápiz (arriba a la derecha) → edita → "Commit changes" →
marca "Commit directly to the `main` branch". El deploy se dispara solo.

---

## 2. Logos y fotos

- **Logos**: hoy hay placeholders circulares con iniciales (`LMRA` / `UN`) en
  `src/components/LogoSlot.astro`. Cuando tengan los archivos reales:
  1. Súbelos a `public/logos/` (ej. `public/logos/lmra-mark.svg`) vía "Add
     file → Upload files" en GitHub.
  2. En `LogoSlot.astro`, reemplaza el bloque `<div class="logo-slot...">`
     por: `<img src={`${import.meta.env.BASE_URL}logos/lmra-mark.svg`} alt={alt} class="h-9 w-auto" />`
- **Fotos del equipo**: agrega `photo: "/team/nombre.jpg"` en el YAML
  correspondiente (sube el archivo a `public/team/` primero) y ajusta
  `TeamCard.astro` para usar `<img>` en vez del círculo de iniciales.

