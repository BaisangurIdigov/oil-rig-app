import React, { useState } from "react";
import { Button, Input, FormControl} from '@material-ui/core'

function Search({setInput}) {
  const [filter, setFilter] = useState(false);

  const handleInput =(e)=> {
     setInput(e.target.value)
  }

  return filter ? (
    <div className="filter">
      <Button
        href="#text-buttons"
        color="primary"
        onClick={() => setFilter(false)}
      >
        Закрыть Фильтр
      </Button>
      <FormControl>
        <Input type="text" className="input" onChange={handleInput}/>
      </FormControl>

    </div>
  ) : (
    <div className="filter">
      <Button
        href="#text-buttons"
        color="primary"
        onClick={() => setFilter(true)}
      >
        Показать Фильтр
      </Button>
    </div>
  );
}

export default Search;
