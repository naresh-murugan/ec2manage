
async function  App() {
  const data = axios.get("http://192.168.109:5000/get_det")
  return (
    <h1>
      {{data}}
    </h1>
  );
}

export default App;
