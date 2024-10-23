// app/AcmeLogo.jsx
export const AcmeLogo = () => (
    <svg
      width="64" // Aumentar el tamaño
      height="64" // Aumentar el tamaño
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32" // Establecer el viewBox para mantener la escala
    >
      <circle cx="16" cy="16" r="16" fill="#0072f5" />
      <rect x="12" y="10" width="8" height="12" fill="#ffffff" />
      <rect x="10" y="12" width="12" height="2" fill="#0072f5" />
      <rect x="10" y="18" width="12" height="2" fill="#0072f5" />
      <circle cx="16" cy="16" r="6" fill="#ffffff" /> {/* Añadiendo un círculo blanco en el centro */}
    </svg>
  );
  