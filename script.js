const form = document.getElementById('registroForm');
const perfil = document.getElementById('perfil');
const loginEdit = document.getElementById('loginEdit');

let savedUser = "";
let savedPass = "";

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtener datos
  const nombre = document.getElementById('nombre').value;
  const dni = document.getElementById('dni').value;
  const sangre = document.getElementById('sangre').value;
  const alergias = document.getElementById('alergias').value;
  const enfermedades = document.getElementById('enfermedades').value;
  const medicamentos = document.getElementById('medicamentos').value;
  const cirugias = document.getElementById('cirugias').value;
  const contactoNombre = document.getElementById('contactoNombre').value;
  const contactoTelefono = document.getElementById('contactoTelefono').value;
  const usuario = document.getElementById('usuario').value;
  const contrasena = document.getElementById('contrasena').value;

  savedUser = usuario;
  savedPass = contrasena;

  // Mostrar datos
  document.getElementById('pNombre').textContent = nombre;
  document.getElementById('pDni').textContent = dni;
  document.getElementById('pSangre').textContent = sangre;
  document.getElementById('pAlergias').textContent = alergias;
  document.getElementById('pEnfermedades').textContent = enfermedades;
  document.getElementById('pMedicamentos').textContent = medicamentos;
  document.getElementById('pCirugias').textContent = cirugias;
  document.getElementById('pContacto').textContent = `${contactoNombre} - ${contactoTelefono}`;

  // Imagen
  const foto = document.getElementById('foto').files[0];
  if (foto) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('imgPreview').src = e.target.result;
    };
    reader.readAsDataURL(foto);
  }

  // QR generado con la URL actual
  const qrDiv = document.getElementById('qrcode');
  qrDiv.innerHTML = '';
  QRCode.toCanvas(document.createElement('canvas'), window.location.href, (err, canvas) => {
    if (!err) qrDiv.appendChild(canvas);
  });

  form.classList.add('hidden');
  perfil.classList.remove('hidden');
});

document.getElementById('editarBtn').addEventListener('click', () => {
  loginEdit.classList.remove('hidden');
});

document.getElementById('verificarBtn').addEventListener('click', () => {
  const u = document.getElementById('editUsuario').value;
  const p = document.getElementById('editContrasena').value;

  if (u === savedUser && p === savedPass) {
    loginEdit.classList.add('hidden');
    perfil.classList.add('hidden');
    form.classList.remove('hidden');
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});
