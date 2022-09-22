export default function Layout({ children }) {
  return (
    <>
      <h3>Authentication</h3>
      <main role="main" className="bg-noise-light dark:bg-noise-dark">
        {children}
      </main>

    </>
  );
}
