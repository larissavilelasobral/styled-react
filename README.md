# Pagina de Loading com Axios

Video Tutorial || [React Query Tutorial | Data Fetching with React-Query](https://youtu.be/46vKqPlTW2w).

## Codigo com Axios

```
import {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const response = await axios("https://random.dog/woof.json");

        setData(response.data);
      } catch(error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (isError) return <h1> Error, try again!</h1>;
  if (isLoading) return <h1> loading...</h1>
  return (
    <div>
      <img src={data.url} />
    </div>
  );
}

export default App;
```

### `npm i axios`

**Fazer instalação do `Axios`, no projeto!**

## Pagina Utilizando React Query

### `npm i react-query`

Link da API de dogs [random.dog](https://github.com/AdenFlorian/random.dog).


### Codigo

```
import { useQuery } from "react-query";
import axios from "axios"

function App() {
  const { isLoading, error, data } = useQuery("dogs", () =>
    axios("https://random.dog/woof.json")
  );

  if (error) return <h1> Error: {error.message}, try again!</h1>;
  if (isLoading) return <h1> loading...</h1>

  return (
    <div>
      <img src={data.data.url} />
    </div>
  );
}

export default App;
```
***foi adicionado no index.js mas a boa pratica indica adicionar no App.js***

```
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
```
### Loading Pago com fetch

### styled components 

**reset css**

```
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
  padding:0;
  margin:0;
  vertical-align:baseline;
  list-style:none;
  border:0
}`;
```
