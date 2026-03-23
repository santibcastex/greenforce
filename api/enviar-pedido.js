const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'greenforcearg@gmail.com',
    pass: process.env.GMAIL_PASSWORD
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { cliente, productos, total, notas } = req.body;

  const detalle = productos
    .map(i => `• ${i.nombre} x${i.qty} = $${(i.precio*i.qty).toLocaleString('es-AR')}`)
    .join('\n');

  try {
    await transporter.sendMail({
      from: 'greenforcearg@gmail.com',
      to: 'greenforcearg@gmail.com',
      subject: `Nuevo pedido - ${cliente.nombre} ${cliente.apellido}`,
      html: `
        <h2>🌿 Nuevo pedido Green Force™</h2>
        <p><strong>Cliente:</strong> ${cliente.nombre} ${cliente.apellido}</p>
        <p><strong>Tel:</strong> ${cliente.tel}</p>
        <p><strong>Dirección:</strong> ${cliente.direccion}, ${cliente.provincia}</p>
        
        <h3>Productos:</h3>
        <pre>${detalle}</pre>
        
        <p><strong>Total:</strong> $${total.toLocaleString('es-AR')}</p>
        <p><strong>Notas:</strong> ${notas}</p>
      `
    });

    res.status(200).json({ success: true, message: 'Pedido enviado' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
