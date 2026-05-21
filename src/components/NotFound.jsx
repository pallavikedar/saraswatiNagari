export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>404 — Page not found</h1>
      <p>The URL you visited doesn't exist.</p>
      <a href="/">← Go home</a>
    </div>
  );
}