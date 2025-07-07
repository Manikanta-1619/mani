function Styles() {
  return (
    <div style={{
      fontFamily: 'Segoe UI, sans-serif',
      maxWidth: '600px',
      margin: '3rem auto',
      padding: '2rem',
      borderRadius: '12px',
      textAlign: 'center',
      background: 'linear-gradient(135deg,rgb(144, 52, 206) 0%,rgb(44, 200, 215) 100%)',
      boxShadow: '0 0 15px rgba(0,0,0,0.1)'
    }}>
      <Name />
      <Image />
      <Description />
      <Portfolio />
    </div>
  );
}
