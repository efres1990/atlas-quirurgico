# Atlas 3D quirúrgico

Atlas interactivo de pared abdominal, región inguinal, unión esofagogástrica y colorrectal, para preparar cirugías, enseñar a residentes y estudiar.

Es una web estática y autocontenida: no usa CDN ni servidor y funciona en redes que bloquean dominios externos. Las imágenes y los modelos de pacientes (DICOM, NIfTI, STL) se procesan solo en el navegador.

## Publicar con GitHub Pages
En el repositorio, ve a Settings → Pages → Source: «Deploy from a branch» → rama `main`, carpeta `/ (root)`.

## Aviso
Es una herramienta docente. Los resúmenes de guías son paráfrasis: antes de aplicarlas a un paciente, consulta el texto original enlazado. No es un producto sanitario.

## Licencias de terceros
- Anatomía: BodyParts3D, © DBCLS, CC BY-SA 2.1 JP. Atlas femenino: HRA (CC BY 4.0).
- three.js (MIT), three-mesh-bvh (MIT), NiiVue (BSD-2-Clause), dcm2niix (BSD).
