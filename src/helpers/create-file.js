const token = 'TU_TOKEN_DE_ACCESO'; // Reemplaza con tu token de acceso personal
const owner = 'nombre_usuario'; // Reemplaza con el nombre de usuario del repositorio
const repo = 'nombre_repositorio'; // Reemplaza con el nombre del repositorio
const filePath = 'ruta/del/archivo.txt'; // Ruta y nombre del archivo que se creará
const content = 'Contenido inicial del archivo'; // Contenido inicial del archivo

const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
const commitMessage = 'Creando un nuevo archivo';

export const createFile = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: commitMessage,
        content: Buffer.from(content).toString('base64')
      })
    });

    if (response.status === 201) {
      console.log('Archivo creado exitosamente en GitHub.');
    } else {
      console.error('Error al crear el archivo:', response.statusText);
    }
  } catch (error) {
    console.error('Se produjo un error:', error);
  }
};