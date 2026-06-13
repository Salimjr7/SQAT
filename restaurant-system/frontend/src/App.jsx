import AppRouter from "./router/AppRouter";


export default function App() {
  
  // fake admin login for testing
  localStorage.setItem(
  "user",
  JSON.stringify({
    name: "Admin Test",
    role: "admin",
  })
);
  return (
    <>
      <AppRouter />
    </>
  );
}
